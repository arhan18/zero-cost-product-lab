# PHASE 18 — Browser QA record (dodo-shield v0, 2026-09-14)

- Script: `evidence/dodo-shield/qa/qa.py` (re-runnable, Playwright Chromium, localhost:8137).
- Result: 6/6 flows PASS, zero console/page errors.
  1. Alert-only default (disposable email trips rule → ALERT row)
  2. Opt-in auto-refund under cap → AUTO-REFUND row
  3. Over-cap ($500) → manual-only fallback
  4. Manual "I refunded it" → AVOIDED · saved $29
  5. Keyboard-only clean payment → OK row
  6. Mobile 390px render + flow
- Screenshots: hero-1280, demo-1280, full-1280, hero-390, demo-390 (this folder). Visual review: hero + stat band + mock card render correctly; mobile stacks, CTAs full-width accessible.
- Bugs found & fixed during QA (evidence the gate works):
  - B1 (critical): refactor broke `pushFeed` callers — clicks recorded "no rule matched". Fixed, covered by flow 1.
  - B2 (semantics): all-must-opt-in vs any-fires for multi-rule hits → decided ANY opted-in rule fires (ByeDispute model), per-hit ⟳auto markers, documented in guardrails copy + decisions log.
