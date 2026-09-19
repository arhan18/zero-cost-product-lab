# Template — Product Rules.md

Copy to `products/<slug>/Rules.md` before any code is written. This is the project's local constitution: the agent obeys it over its own preferences. Where it conflicts with SYSTEM.md, SYSTEM.md wins — note any deliberate override with human sign-off.

## 1. Required libraries
Pinned list with versions. Nothing else may be added without updating this list first.

## 2. Preferred libraries
Allowed without asking, in priority order.

## 3. Prohibited libraries
Banned (heavy, paid, unmaintained, or overlapping) — with the reason for each ban.

## 4. Coding conventions
Language settings, formatting, file organization, import order, comment policy.

## 5. Naming conventions
Files, components, functions, variables, database fields — with examples.

## 6. Error handling
How errors surface (UI, logs, monitoring); what is never swallowed; what is never leaked to users.

## 7. Validation
Trust-boundary rule: validate at every boundary (forms, APIs, webhooks). Never simplify away validation (Ponytail non-negotiable).

## 8. Security rules
Auth checks, secrets, injection/XSS/CSRF posture, dependency audit habit.

## 9. Accessibility rules
Keyboard flow, focus, contrast, labels, reduced-motion — minimum bar before any phase passes QA.

## 10. Design rules
Tokens-only styling (no hardcoded hex), component reuse from Design.md, no stock-demo pasting.

## 11. Dependency rules
Ponytail ladder restated for this product: YAGNI → reuse → stdlib → native → existing dep → one-liner → minimum code.

## 12. AI behavior rules
Follow Phases.md order; never skip ahead; update Memory.md after each phase; ask on ambiguity instead of inventing.

## 13. What the agent must never invent
Users, testimonials, metrics, prices, legal claims, integrations that don't exist, "upcoming features".

## 14. What requires human approval
Scope changes, new dependencies, pricing/payment changes, launch go/no-go, kill/pivot, anything touching Rules.md itself.
