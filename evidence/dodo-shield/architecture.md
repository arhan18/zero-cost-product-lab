# ARCHITECTURE — dodo-shield v0 alert-only (Phase 11)

- Stack: single static `index.html` + inline CSS/JS, zero deps, localStorage only. No backend, no secrets, no network calls except font CDN (graceful fallback).
- Data: rules object + feed array in localStorage keys `ds_rules_v0`, `ds_feed_v0`. Test webhook simulator runs rule engine in-browser.
- Rules v0: disposable-domain list (20 domains), velocity >3/email/30min (in-memory log), failed→succeeded sequence, first-payment >$79.
- Deploy: any static host (Cloudflare Pages / Vercel Hobby / GitHub Pages). Free-tier limits recorded at deploy (Phase 23).
- Trade-offs: no real Dodo verification in v0 (docs show curl + Standard Webhooks headers); real receiver is Phase 12 backend (Supabase Edge / Cloudflare Worker) after alert traction. No PII stored beyond test inputs.
