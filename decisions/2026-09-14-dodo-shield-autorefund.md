# Decision — 2026-09-14 — dodo-shield opt-in auto-refund amendment

- What: Owner asked "can we add an option if they want us to refund like byedispute?" → YES, added as opt-in per rule with guardrails (PRODUCT-GATES major-scope-change, recorded here).
- Design: global allow (default OFF) + per-rule checkbox + max-amount cap (default $100); over-cap → manual fallback; one refund per payment; test key first; full log. Live execution deferred to Phase 12 backend (keys must never sit in frontend).
- v0 demo simulates both paths, labeled demo. FAQ + flow strip updated. Alert-only remains the default.
- Reversal: if false-positive refunds reported in testing, default stays manual and auto becomes per-payment approve button.
