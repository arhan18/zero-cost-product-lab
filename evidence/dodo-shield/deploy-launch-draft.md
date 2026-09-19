# PHASE 23 — Deploy record (DONE 2026-09-14)

- Host: Cloudflare Pages (free). Project: `dodo-shield`. Method: `wrangler pages deploy products/dodo-shield` (1 static file), credentials via hub env (names only: CLOUDFLARE_API_TOKEN / ACCOUNT_ID — values never recorded).
- URLs: production https://dodo-shield.pages.dev (VERIFIED 200 + live alert flow in Chromium), preview https://953e604b.dodo-shield.pages.dev.
- Free-tier snapshot (2026-09-14, INFERENCE from plan docs — recheck if bill/usage alerts appear): Pages free = unlimited static requests + bandwidth within fair use, 1 concurrent build, 500 builds/mo. Rollback = redeploy previous file.
- Local preview server (port 8137) now redundant — can be stopped after launch posts go out.

- Options ($0): Cloudflare Pages, Vercel Hobby, GitHub Pages. Product is one static file — any works.
- Free-tier limits snapshot: [record on deploy day — Pages/Vercel/terms change; SYSTEM §24]
- Reproducible deploy: `products/dodo-shield/index.html` → static host root. Rollback = previous file version.
- BLOCKED ON OWNER: host choice + auth (provider login is owner action; agents never enter credentials §21).

# PHASE 24 — Launch go/no-go (DRAFT distribution plan)

- Primary channel: Dodo Discord + X build-in-public (Phase 04: target reads there). First-10 hypothesis unchanged.
- Secondary: IndieHackers post, r/indiehackersindia value-first reply where Dodo suspension was discussed (no spam, community rules respected).
- Assets: honest copy only — live demo link, "v0 experiment, alert + opt-in auto-refund, free", no fake proof.
- Kill clock starts at launch: K1 <2 test-mode activations in 14 days → kill/pivot.
- BLOCKED ON OWNER: go/no-go + operator contact email for legal footer.
