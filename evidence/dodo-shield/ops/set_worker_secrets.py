"""Set dodo-shield-api Worker secrets from hub .env. Prints names + status only."""
import re
import subprocess

HUB_ENV = "/Users/arhanahmadkhan/Documents/arhan-hub/products/dev-arhan-online/.env"
WORKER_DIR = "/Volumes/Arhan/Work/zero-cost-product-lab/products/dodo-shield/worker"

MAP = {
    "DODO_API_KEY": "DODO_PAYMENTS_API_KEY",
    "TURSO_URL": "TURSO_DATABASE_URL",
    "TURSO_TOKEN": "TURSO_AUTH_TOKEN",
    "RESEND_API_KEY": "RESEND_API_KEY",
}
STATIC = {"DODO_API_BASE": "https://live.dodopayments.com", "AUTO_REFUND_ENABLED": "0", "AUTO_CAP_USD": "100"}


def main():
    t = open(HUB_ENV).read()

    def get(k):
        m = re.search(r"^" + k + r"=(.*)$", t, re.M)
        return m.group(1).strip().strip('"').strip("'") if m else ""

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
            ["wrangler", "secret", "put", name],
            input=value.encode(),
            capture_output=True,
            timeout=90,
            cwd=WORKER_DIR,
        )
        print(("OK " if r.returncode == 0 else "FAIL ") + name)


if __name__ == "__main__":
    main()
