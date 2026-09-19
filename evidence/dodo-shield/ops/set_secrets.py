"""Set dodo-shield Pages secrets from hub .env. Prints names + status only, never values."""
import re
import subprocess

HUB_ENV = "/Users/arhanahmadkhan/Documents/arhan-hub/products/dev-arhan-online/.env"
PROJECT = "dodo-shield"

MAP = {
    "DODO_API_KEY": "DODO_PAYMENTS_API_KEY",
    "TURSO_URL": "TURSO_DATABASE_URL",
    "TURSO_TOKEN": "TURSO_AUTH_TOKEN",
    "RESEND_API_KEY": "RESEND_API_KEY",
}
STATIC = {"DODO_API_BASE": "https://live.dodopayments.com", "AUTO_REFUND_ENABLED": "0", "AUTO_CAP_USD": "100"}


def hub():
    t = open(HUB_ENV).read()

    def get(k):
        m = re.search(r"^" + k + r"=(.*)$", t, re.M)
        return m.group(1).strip().strip('"').strip("'") if m else ""

    return get


def main():
    get = hub()
    pairs = {}
    for dst, src in MAP.items():
        v = get(src)
        if v:
            pairs[dst] = v
        else:
            print("SKIP (empty in hub):", dst)
    pairs.update(STATIC)
    for name, value in pairs.items():
        r = subprocess.run(
            ["wrangler", "pages", "secret", "put", name, "--project-name", PROJECT],
            input=value.encode(),
            capture_output=True,
            timeout=90,
        )
        ok = r.returncode == 0
        print(("OK " if ok else "FAIL ") + name)
        if not ok:
            print(r.stderr.decode()[-300:])


if __name__ == "__main__":
    main()
