# Decision — 2026-09-14 — backend-lite build + live deploy

- What: Owner asked for full working site for real users; directed hub creds (Turso + Resend + Dodo) for me to build it myself.
- Locked: backend-lite single-tenant on owner's LIVE Dodo account (not multi-tenant — key-custody + billing + auth deferred until traction per kill criteria).
- Safety: alerts-first, server auto-refund OFF, receiver 503s without webhook secret (hub secret empty), mails skip without seller email. E2E proven with temp secret, then deleted.
- Infra: Worker dodo-shield-api + Pages static site + hub Turso tables (ds_ prefix, non-destructive). All $0/free-tier.
- Reversal: any false-positive live refund → immediate AUTO_REFUND_ENABLED=0 + incident note; repeated → back to alert-only and revisit scope.
