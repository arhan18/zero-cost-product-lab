# BACKEND-LITE record — dodo-shield (2026-09-14)

Scope: single-tenant receiver wired to the hub Dodo account (LIVE mode). Alerts-first; auto-refund code-shipped, server kill-switch OFF.

## What exists

- Worker `dodo-shield-api` → https://dodo-shield-api.aqeelbrh65.workers.dev/webhooks/dodo
  Code: `products/dodo-shield/worker/` (index.js + _logic.js + wrangler.toml). Zero deps.
- Receives Dodo webhooks: Standard-Webhooks HMAC verify, ±300s timestamp window, idempotency on webhook-id, Turso ledger (ds_events/ds_rules/ds_actions), 4 rules (disposable / velocity / card-test / high-ticket), Resend alert mail, conditional live `POST /refunds`.
- Secrets (Pages project had 7; Worker has 7): DODO_API_KEY, DODO_API_BASE(live), TURSO_URL, TURSO_TOKEN, RESEND_API_KEY, AUTO_REFUND_ENABLED=0, AUTO_CAP_USD=100. Set via ops/set_*_secrets.py from hub .env — values never printed/stored.
- Turso tables created via ops/turso_schema.py (5/5 statements OK).
- E2E verified 2026-09-14 with temp self-made secret (deleted after): signed payment.succeeded → Turso row + `received` + `alert` actions, verdict alert_manual, bad-signature path 401s, missing-secret path 503s. Test rows cleaned.

## Design pivots discovered while building

- Pages Functions never routed (Pages SPA-fallbacked everything to index.html, incl. nonexistent paths) → receiver moved to standalone Worker; server code removed from static deploy. Recorded; Pages serves only index.html again.
- Multi-rule auto semantics: ANY opted-in rule fires (not all) — matches ByeDispute mental model; per-hit ⟳auto markers in demo.

## LIVE-mode safety posture

- AUTO_REFUND_ENABLED=0 (server). No live refund can fire until owner explicitly enables after first real alert.
- DODO_WEBHOOK_SECRET unset (hub value empty) → receiver 503s all POSTs until owner creates the Dodo endpoint and the secret is set. Nothing can execute blind.
- SELLER_EMAIL unset → alert mails skip (logged) until owner provides address.

## Paid layer (built + self-tested 2026-09-14, owner approved "Build paid layer")

- Auth: magic-link (`POST /auth/request` → 24h token → `GET /auth/verify` → HttpOnly host-only cookie → `/me` + `dash.html`). No passwords; sellers never share Dodo keys — each gets a unique hook URL `/webhooks/dodo/<token>`.
- Metering: `ds_events` count per seller, `payment.succeeded`, rolling 30d. Quotas: testdrive 100 / solo 2000 / studio 10000. Gate runs BEFORE evaluation; over-quota → `quota_exceeded` + logged, no processing.
- Entitlements: `POST /webhooks/dodo-billing` maps OUR Dodo subscription events → ds_sellers by customer email (product/price IDs via DODO_PRODUCT_SOLO/STUDIO env — UNSET until owner creates products). Cancel/expire/past_due handled; unmapped logged for mapping.
- Dashboard: https://dodo-shield.pages.dev/dash — plan, usage bar, personal webhook URL.
- E2E (ops/e2e_paid.py, temp secret, cleaned): auth/request, verify+cookie, /me quota, unknown-seller 404, seller alert pipeline, quota_exceeded at 101/100 — 7/7 PASS. Bugs fixed: `s.seller_id`→`s.id` in session query; cookie SameSite=None host-only (workers.dev is public suffix).
- Live-mail paths (magic links, alert mails) attempt Resend but REQUIRE verified sending domain — currently unproven until owner verifies domain. Join capture stores only (no mail) by design.

## Pending owner actions (nothing else I can do without you)

1. Dodo Dashboard (LIVE mode!) → Developer → Webhooks → Add endpoint → URL above + 6 events → copy signing secret → hand it to me to set (1 min).
2. Seller/operator email → alert recipient + legal footer.
3. After first real alert lands: say the word to flip AUTO_REFUND_ENABLED=1 (recommend one $1 test refund first).
