"""End-to-end test: sign a fake Dodo event and verify Turso rows. Secret via DODO_TEST_SECRET env (never stored/printed)."""
import base64
import hashlib
import hmac
import json
import os
import subprocess
import tempfile
import time
import uuid

WORKER = "https://dodo-shield-api.aqeelbrh65.workers.dev/webhooks/dodo"
HUB_ENV = "/Users/arhanahmadkhan/Documents/arhan-hub/products/dev-arhan-online/.env"


def turso_query(sql, args):
    import re

    t = open(HUB_ENV).read()

    def get(k):
        m = re.search(r"^" + k + r"=(.*)$", t, re.M)
        return m.group(1).strip().strip('"').strip("'") if m else ""

    base = re.sub(r"^libsql://", "https://", get("TURSO_DATABASE_URL")).rstrip("/")
    body = json.dumps({"requests": [{"type": "execute", "stmt": {"sql": sql, "args": [{"type": "text", "value": a} for a in args]}}]})
    cfg = 'header = "Authorization: Bearer %s"\nheader = "Content-Type: application/json"\n' % get("TURSO_AUTH_TOKEN")
    with tempfile.NamedTemporaryFile("w", delete=False) as f:
        f.write(cfg)
        cfg_path = f.name
    try:
        out = subprocess.run(["curl", "-s", "-K", cfg_path, "--data", body, base + "/v2/pipeline"], capture_output=True, text=True, timeout=30).stdout
    finally:
        os.unlink(cfg_path)
    return json.loads(out)


def main():
    secret = os.environ.get("DODO_TEST_SECRET", "")
    assert secret, "set DODO_TEST_SECRET at runtime only"
    wid = "whe2e_" + uuid.uuid4().hex[:8]
    ts = str(int(time.time()))
    payload = json.dumps({
        "business_id": "biz_e2e",
        "type": "payment.succeeded",
        "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "data": {"payload_type": "Payment", "payment_id": "pay_e2e001", "amount": 4900,
                 "customer": {"email": "tester@mailinator.com"}},
    })
    mac = hmac.new(secret.encode(), f"{wid}.{ts}.{payload}".encode(), hashlib.sha256).digest()
    sig = "v1," + base64.b64encode(mac).decode()
    r = subprocess.run(["curl", "-s", "-X", "POST", WORKER,
                        "-H", "webhook-id: " + wid, "-H", "webhook-signature: " + sig,
                        "-H", "webhook-timestamp: " + ts, "-H", "Content-Type: application/json",
                        "--data", payload], capture_output=True, text=True, timeout=30).stdout
    print("receiver:", r)
    ev = turso_query("SELECT type, payment_id, email, amount FROM ds_events WHERE webhook_id=?", [wid])
    print("event_row_found:", "pay_e2e001" in json.dumps(ev))
    ac = turso_query("SELECT action FROM ds_actions WHERE webhook_id=?", [wid])
    print("actions:", sorted({a["value"] for row in ac["results"][0]["response"]["result"]["rows"] for a in row if a.get("value", "").startswith(("alert", "received"))}))
    turso_query("DELETE FROM ds_events WHERE webhook_id=?", [wid])
    turso_query("DELETE FROM ds_actions WHERE webhook_id=?", [wid])
    print("cleanup: test rows deleted")


if __name__ == "__main__":
    main()
