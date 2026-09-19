# Rules — Scenica build

1. Scope: PRD V1 only; non-goals rejected on arrival. Vertical slices, 1–7 days each.
2. Stack: Cloudflare-first; every dependency listed with reason (dependency-audit.md); unlisted rejected (Ponytail).
3. Original work only: no Draftly code/branding/copy/presets/assets; teardown knowledge is structural, never extracted. All third-party source reuse needs license recorded (design-source-matrix.md).
4. Design: ThreeUI-first rounds with human PASS gates; no silent continuation; anti-generic-3D rule enforced on generated output (brand+story+function or it ships).
5. AI behavior: staged pipeline, structured outputs, validated artifacts; never one giant call; cheap-model default, premium only where routed; every job cost-logged; no unlimited anything.
6. Generated-code safety: sandbox previews, sanitized HTML, CSP, no secrets in output, SSRF-safe media fetch (security.md).
7. Validation: browser QA 390/768/1440 per slice; reduced-motion + performance budgets enforced; console-error-free.
8. Accessibility: semantic output, keyboard-editable builder, focus management, contrast-checked defaults.
9. Honesty: no fake metrics/testimonials; no invented superiority claims; quality claims need benchmark rows.
10. Kill criteria written before each build phase; traction updates beliefs both directions.
