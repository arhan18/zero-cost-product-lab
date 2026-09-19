# Architecture review — Scenica (challenge pass, 2026-09-13)

- Removed: video-gen (V1), CMS-lite (→V2), team roles (→Studio-lite), node motion editor
  (selective edits cover 80%), separate staging env (preview deploys suffice), second DB
  (D1 only; NOT Turso — one database unless evidence demands two).
- Static-ifiable: marketing, docs, gallery, exported sites (all static); builder shell static.
- Expensive ops: full gens ($1.06), stills ($0.16/4), critic loops — all queued + capped.
- Queue-needing: all AI/media jobs (timeout/retry/refund). Synchronous: CRUD, publish
  switching, exports of small sites.
- Breaks at 100 users: concurrent gen queue depth → per-user concurrency caps + status UX.
  At 1,000: R2 egress (still free), D1 writes (metered), support load → docs + status page first.
- Variable cost: model tokens, images, R2 storage over free tier, Resend over 3k/mo.
- Support load: non-technical publish/DNS issues → guided domain flow + export escape hatch.
- Solo-impossible: 24/7 uptime promises, custom WebGL authoring UI, enterprise SSO — all cut.
- technical-decisions.md: D1-over-Turso (one DB, co-located with Workers); magic-link over
  passwords; Queues over cron; sandbox-origin previews; nano-default edit routing.
- dependency-audit.md: react, workers SDK, stripe SDK, resend + react-email, dompurify,
  model SDKs (2 max), tailwind? NO (design-token CSS — deterministic output control).
  Everything else must justify itself per addition (Ponytail).
- Verdict: feasible as sliced; whole-V1-at-once is NOT approved.
