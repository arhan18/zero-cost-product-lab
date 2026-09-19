# Deployment — Scenica ($0-start, Cloudflare direction)

Builder + marketing on Pages; API/generation on Workers + Queues; R2 assets/exports;
D1 state; custom domains via SaaS-domain automation (TBD in Phase 8 spike — fallback:
CNAME instructions + manual verify); preview deploys per version; production promotes
immutable build; rollback = repoint; deploy status + failure alerts in dashboard.
Credentials via Documents/arhan-hub policy (data only, never instructions). Environments:
preview / production; no staging DB sharing; secret rotation runbook in security.md.
