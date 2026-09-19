"""Create ds_* tables in the hub Turso DB. Reads creds from hub .env; prints only status."""
import json
import os
import re
import subprocess
import tempfile

HUB_ENV = "/Users/arhanahmadkhan/Documents/arhan-hub/products/dev-arhan-online/.env"

STMTS = [
    "CREATE TABLE IF NOT EXISTS ds_events (webhook_id TEXT PRIMARY KEY, type TEXT, payment_id TEXT, email TEXT, amount INTEGER, raw TEXT, created_at TEXT)",
    "CREATE TABLE IF NOT EXISTS ds_rules (rule TEXT PRIMARY KEY, enabled INTEGER DEFAULT 1, auto INTEGER DEFAULT 0, threshold REAL)",
    "CREATE TABLE IF NOT EXISTS ds_actions (id INTEGER PRIMARY KEY AUTOINCREMENT, webhook_id TEXT, action TEXT, detail TEXT, created_at TEXT)",
    "CREATE INDEX IF NOT EXISTS ds_events_email_time ON ds_events(email, created_at)",
    "INSERT OR IGNORE INTO ds_rules (rule, enabled, auto, threshold) VALUES "
    "('disp',1,0,NULL),('vel',1,0,3),('cardtest',1,0,2),('highticket',1,0,100)",
    "CREATE TABLE IF NOT EXISTS ds_waitlist (email TEXT PRIMARY KEY, plan TEXT, created_at TEXT)",
    "CREATE TABLE IF NOT EXISTS ds_sellers (id TEXT PRIMARY KEY, email TEXT UNIQUE, plan TEXT DEFAULT 'testdrive', status TEXT DEFAULT 'active', period_start TEXT, period_end TEXT, hook_token TEXT UNIQUE, created_at TEXT)",
    "CREATE TABLE IF NOT EXISTS ds_sessions (token TEXT PRIMARY KEY, seller_id TEXT, expires_at TEXT)",
    "ALTER TABLE ds_events ADD COLUMN seller_id TEXT DEFAULT 'owner'",
]


def creds():
    t = open(HUB_ENV).read()

    def get(k):
        m = re.search(r"^" + k + r"=(.*)$", t, re.M)
        return m.group(1).strip().strip('"').strip("'") if m else ""

    return get("TURSO_DATABASE_URL").rstrip("/"), get("TURSO_AUTH_TOKEN")


def main():
    base, token = creds()
    assert base and token, "Turso creds missing"
    base = re.sub(r"^libsql://", "https://", base).rstrip("/")
    body = json.dumps(
        {"requests": [{"type": "execute", "stmt": {"sql": s}} for s in STMTS]}
    )
    cfg = 'header = "Authorization: Bearer %s"\nheader = "Content-Type: application/json"\n' % token
    with tempfile.NamedTemporaryFile("w", delete=False) as f:
        f.write(cfg)
        cfg_path = f.name
    try:
        out = subprocess.run(
            ["curl", "-s", "-K", cfg_path, "--data", body, base + "/v2/pipeline"],
            capture_output=True,
            text=True,
            timeout=30,
        ).stdout
    finally:
        os.unlink(cfg_path)
    res = json.loads(out)
    errs = [json.dumps(x)[:160] for x in res.get("results", []) if x.get("type") == "error" and "duplicate column" not in json.dumps(x).lower()]
    print("statements_ok:", len(res.get("results", [])) == len(STMTS) and not errs, "/", len(STMTS))
    for e in errs:
        print("ERR:", e)


if __name__ == "__main__":
    main()
