# Template — QA

Used in Phases 16–20 (accessibility, performance, browser QA, design audit, code audit) and in §22 design QA rule.

## QA

| Field | Value |
|---|---|
| Product slug | |
| Date / environment (URL, browser) | |
| Evidence location | `evidence/<slug>/qa/` |

## Checklist runs

1. **Browser inspection** — rendered DOM inspected, not just source (§23).
2. **Screenshot review** — captures at desktop/tablet/mobile stored.
3. **Checklist Design** — present / partial / missing per item + "does it matter".
4. **Vercel Web Interface Guidelines** — compliance finding list.
5. **Accessibility** — keyboard-only flow, focus, contrast, labels, reduced-motion.
6. **Responsive** — target breakpoints all render correctly.
7. **Performance** — Core Web Vitals (or documented approximation) with date/env. Release gate: measure first (bundle, JS, images, fonts, CLS, INP, waterfall, third-parties, mobile); fix measured regressions, never optimize imaginary problems.
8. **Ponytail/code review** — dead code, overengineering, delete-list applied.

## Gate result
PASS / PASS-WITH-NOTES / FAIL — each item, so fixes are actionable.