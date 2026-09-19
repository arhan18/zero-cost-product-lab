# Template — Product Design.md

Copy to `products/<slug>/Design.md` at Phase 09/10 (after human-approved visual direction). Source of truth for all frontend visual implementation. Informed by research skills and the benchmark — never a copy of any reference product (SYSTEM.md §14, extraction rule: hierarchy/layout/interaction/typography/spacing/motion/IA only, never branding, copy, logos, or assets).

## 1. Design concept
One paragraph: what this product feels like and why that feeling serves the task.

## 2. Brand personality
Voice + stance (calm-confident, opinionated, playful, dev-first…), with do/don't examples.

## 3. Typography
Families (display/body/mono), why these, fallbacks, loading strategy (free sources only).

## 4. Type scale
Sizes/weights/line-heights per role (display, h1–h3, body, small, caption), with px/rem values.

## 5. Colors
Primitive palette with rationale per color (every color has a reason).

## 6. Semantic color tokens
`--bg, --surface, --text, --muted, --accent, --danger…` mapped to primitives; dark-mode behavior if supported.

## 7. Spacing
Scale (4/8pt-based), section rhythm, component padding rules.

## 8. Radius / Shadows / Borders
Values per elevation level; when each is used.

## 9. Layout
Page shells, max widths, content column rules.

## 10. Grid
Columns, gutters, breakpoints (mobile-first values).

## 11. Responsive behavior
What changes per breakpoint; what is hidden vs. restacked; touch targets.

## 12. Components
Per component: spec, states (default/hover/focus/active/disabled/loading/error), sizes. Adapted to this product — never a pasted library demo.

## 13. Interaction states
Global rules: focus visibility, loading skeletons vs spinners, empty states, destructive-action confirmations.

## 14. Motion
Durations/easings per purpose; what animates (demo surface, feedback) vs what stays still (chrome); `prefers-reduced-motion` behavior (mandatory).

## 15. Accessibility
Contrast pairs, keyboard map, live-region usage, motion fallback — carried into QA.

## 16. Visual references
Patterns borrowed, each recorded as `pattern: <name>, borrowed from: <source>` (structures only).

## 17. Things to avoid
Product-specific anti-list (generic SaaS hero, stock imagery, fake trust, palette clones…).
