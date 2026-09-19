# 2026-09-16 — Review workflow verification + confidence (SHIPPED, UNDEPLOYED)
- Real Chromium pass over HTTP: 21-region queue reproduced twice; crop/text/edit/accept/reject/Prev-Next/counter/checkmark/completion all verified with screenshot evidence.
- Bugs found by the pass, fixed, re-verified: (1) status message wiped by showReview ordering; (2) double-submit duplicates (no busy guard) -> buttons disabled during save, 1 JSONL line per action.
- Harness note: agent-browser clicks need scrollintoview (viewport artifact, not app bug).
- Confidence: ocr threading + 5-key schema (layout/math/validation reserved nulls, documented); threshold 0.85 enforced -> queue 21->10 live; all skips measured 0.868-0.999 and spot-checked; overconfidence example (quad@0.996) documented in benchmark/review.md.
- Regression: golden PASS 100%; sync document.xml byte-identical direct-vs-HTTP; run.py refreshed (2 files). Digital pages byte-stable.
- Feedback test records (3 jobs) are synthetic verification data; safe to wipe before deploy. DEPLOY_NOTES.md prepared; no deploy performed per instruction.
