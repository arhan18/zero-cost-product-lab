# PHASE 20 — Code audit (2026-09-14, single 27KB index.html)

- Dead code: none. Verified via grep: zero `fetch`/`XMLHttpRequest`/`console.log`/TODO; `.rule`/`.switch` classes are JS-rendered (not dead); `cols3` fully removed in rewrite.
- All IDs referenced by JS exist: rules, autoset, s_auto, s_cap, f_email, f_amt, f_fails, f_first, run, seed, clear, feed, empty, k, wh, kbadge, verify — VERIFIED present.
- No console.log leftovers; no TODO comments; no external scripts (fonts stylesheet only).
- State keys namespaced `ds_*_v0`; old-key migration: R auto-flag backfilled via `if(R[k].auto===undefined)` — VERIFIED present.
- Edge: `S.cap` NaN guard (`||100`), amount NaN guard (`||0`) — present.
- Diff for whole product remains one file (~27KB) — smallest-architecture bar met.

# PHASE 21 — Security worksheet (2026-09-14)

- Trust boundary: v0 is frontend-only. Test key input NEVER leaves browser (no fetch calls in file — VERIFIED: zero `fetch`/`XMLHttpRequest`).
- No secrets in repo (keys live in localStorage on seller's machine only; labeled as such).
- No user data collected, no cookies, no analytics, no third-party scripts except Google Fonts (graceful system-font fallback if blocked).
- XSS: all dynamic rendering uses template strings with test-input email — INFERENCE: self-XSS only (seller typing into own browser); no stored cross-user data in v0. Real backend (Phase 12) must escape payment emails server-side — recorded as requirement.
- Destructive actions: none executable in v0 (auto-refund simulated; live `POST /refunds` requires Phase-12 backend holding key + idempotency on webhook-id + cap enforcement server-side).
- Residual risk: localStorage test key readable by same-browser extensions — documented in Connect copy ("stays in your browser"); live keys must move server-side before any launch.
