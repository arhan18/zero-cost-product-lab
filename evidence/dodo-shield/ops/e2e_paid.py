"""Paid-layer self-test. Temp DODO_TEST_SECRET via env (runtime only). Cleans all rows."""
import base64
import hashlib
import hmac
import json
import os
import re
import subprocess
import tempfile
import time
import urllib.request
import uuid

WORKER = "https://dodo-shield-api.aqeelbrh65.workers.dev"
HUB_ENV = "/Users/arhanahmadkhan/Documents/arhan-hub/products/dev-arhan-online/.env"
EMAIL = "paid-e2e@example.com"


def hub(k):
    m = re.search(r"^" + k + r"=(.*)$", open(HUB_ENV).read(), re.M)
    return m.group(1).strip().strip('"').strip("'") if m else ""


def api(path, data=None, cookie=None):
    cmd = ["curl", "-s", "-i", WORKER + path, "-H", "content-type: application/json"]
    if data is not None:
        cmd += ["--data", json.dumps(data)]
    if cookie:
        cmd += ["-H", "cookie: " + cookie]
    out = subprocess.run(cmd, capture_output=True, text=True, timeout=30).stdout
    head, _, body = out.partition("\n\n")
    status = int(re.search(r"HTTP/\S+ (\d+)", head).group(1))
    setcookie = ""
    m = re.search(r"[Ss]et-[Cc]ookie:\s*([^;\r\n]+)", head)
    if m:
        setcookie = m.group(1)
    return status, body, setcookie


def tq(sql, args=None):
    base = re.sub(r"^libsql://", "https://", hub("TURSO_DATABASE_URL")).rstrip("/")
    body = json.dumps({"requests": [{"type": "execute", "stmt": {"sql": sql, "args": [{"type": "text", "value": a} for a in (args or [])]}}]})
    cfg = 'header = "Authorization: Bearer %s"\nheader = "Content-Type: application/json"\n' % hub("TURSO_AUTH_TOKEN")
    with tempfile.NamedTemporaryFile("w", delete=False) as f:
        f.write(cfg)
        p = f.name
    try:
        out = subprocess.run(["curl", "-s", "-K", p, "--data", body, base + "/v2/pipeline"], capture_output=True, text=True, timeout=30).stdout
    finally:
        os.unlink(p)
    return json.loads(out)


def sign(secret, wid, ts, payload):
    mac = hmac.new(secret.encode(), f"{wid}.{ts}.{payload}".encode(), hashlib.sha256).digest()
    return "v1," + base64.b64encode(mac).decode()


def signed_post(path, payload_obj, secret):
    wid, ts = "whe2e_" + uuid.uuid4().hex[:8], str(int(time.time()))
    payload = json.dumps(payload_obj)
    out = subprocess.run(["curl", "-s", "-o", "/tmp/ds_e2e_body", "-w", "%{http_code}", "-X", "POST", WORKER + path,
                          "-H", "content-type: application/json", "-H", "webhook-id: " + wid,
                          "-H", "webhook-signature: " + sign(secret, wid, ts, payload),
                          "-H", "webhook-timestamp: " + ts, "--data", payload],
                         capture_output=True, text=True, timeout=30).stdout
    return int(out.strip()[-3:]), open("/tmp/ds_e2e_body").read()


def main():
    secret = os.environ.get("DODO_TEST_SECRET", "")
    assert secret, "runtime secret required"
    # 1. auth request
    s, b, _ = api("/auth/request", {"email": EMAIL})
    assert s == 200 and '"ok":true' in b, ("auth/request", s, b)
    print("auth/request: PASS")
    # 2. token from db (test-only read), verify → cookie, /me
    rows = tq("SELECT token FROM ds_sessions WHERE seller_id=(SELECT id FROM ds_sellers WHERE email=?) ORDER BY rowid DESC LIMIT 1", [EMAIL])["results"][0]["response"]["result"]["rows"]
    tok = rows[0][0]["value"]
    req = WORKER + "/auth/verify?token=" + tok
    out = subprocess.run(["curl", "-s", "-o", "/dev/null", "-D", "-", req], capture_output=True, text=True, timeout=30).stdout
    assert " 302" in out.split("\n")[0], out[:200]
    m = re.search(r"[Ss]et-[Cc]ookie:\s*([^;\r\n]+)", out)
    cookie = m.group(1) if m else ""
    assert cookie.startswith("ds_sess="), "cookie missing"
    print("verify 302 + cookie: PASS")
    s, b, _ = api("/me", None, cookie)
    me = json.loads(b)
    assert s == 200 and me["email"] == EMAIL and me["limit"] == 100, (s, b)
    hook = me["hook_url"]
    print("me (testdrive 100):", "PASS", hook.rsplit("/", 1)[1][:6] + "…")
    # 3. unknown token → 404 (routing works, pre-secret-check)
    s, b = signed_post("/webhooks/dodo/hk_nope123", {"type": "payment.succeeded", "data": {}}, secret)
    assert s == 404, (s, b)
    print("unknown seller 404: PASS")
    # 4. valid token, no secret configured... secret IS set now → goes to quota then processes unsigned? signed here:
    pay = {"business_id": "x", "type": "payment.succeeded", "timestamp": "t",
           "data": {"payload_type": "Payment", "payment_id": "pay_e2e9", "amount": 4900, "customer": {"email": "t@mailinator.com"}}}
    s, b = signed_post("/" + hook.rsplit("/", 2)[1] + "/" + hook.rsplit("/", 1)[0] if False else hook.replace(WORKER, ""), pay, secret)
    assert '"verdict":"alert_manual"' in b, (s, b)
    print("seller pipeline alert: PASS")
    # 5. force over-quota (101 succeeded rows) → quota_exceeded
    sid = tq("SELECT id FROM ds_sellers WHERE email=?", [EMAIL])["results"][0]["response"]["result"]["rows"][0][0]["value"]
    tq("WITH RECURSIVE c(x) AS (SELECT 1 UNION ALL SELECT x+1 FROM c WHERE x<101) INSERT OR IGNORE INTO ds_events (webhook_id, type, payment_id, email, amount, seller_id, created_at) SELECT 'qfill_'||x||'_e2e', 'payment.succeeded', 'qp', 'q@e.com', 1, ?, strftime('%Y-%m-%dT%H:%M:%SZ','now') FROM c", [sid])
    s, b = signed_post(hook.replace(WORKER, ""), pay, secret)
    assert '"quota_exceeded"' in b, (s, b)
    print("quota_exceeded gate: PASS")
    # cleanup
    for sql, args in [("DELETE FROM ds_events WHERE seller_id=? OR webhook_id LIKE '%_e2e%'", [sid]), ("DELETE FROM ds_actions WHERE webhook_id LIKE ?", ["%e2e%"]),
                      ("DELETE FROM ds_actions WHERE webhook_id LIKE ?", ["join:" + EMAIL]), ("DELETE FROM ds_sessions WHERE seller_id=?", [sid]),
                      ("DELETE FROM ds_sellers WHERE id=?", [sid])]:
        tq(sql, args)
    print("cleanup: PASS")


if __name__ == "__main__":
    main()
