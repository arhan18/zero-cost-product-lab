# ZERO-COST PRODUCT LAB

A reusable operating system for researching, designing, building, testing, launching, and improving multiple real software products — at **$0 upfront**, with the lab itself as the product of this phase.

> We are not building one startup. We are building a portfolio of small, useful, monetizable products that collectively reach **at least $100 MRR** — using only open source, free tiers, and browser-native capability until that revenue exists.

## Quick start (for the agent or the owner)

1. **Read `SYSTEM.md` first.** It is the source of truth: philosophy, rules, the 28-phase pipeline, and the per-phase gates.
2. **Follow the pipeline, never skip gates.** Phases 01→28. Human gates at 05 (score), 07 (scope lock), 09 (visual direction), 22 (legal pages), 24 (launch go/no-go), 28 (iterate/pivot/kill).
3. **Use `templates/`** for every phase output; file the result in `evidence/<product>/`.
4. **Label every research claim** `FACT / INFERENCE / HYPOTHESIS / UNKNOWN / CONTRADICTORY EVIDENCE`.
5. **Never fabricate anything** — users, testimonials, logos, metrics, validation.
6. **Never modify anything outside this workspace.**
7. **Before adding code, run the Ponytail ladder** (SYSTEM.md §20). Write the minimum that passes the gate.
8. **For third-party skills**, check the registry (`research/skill-registry.md`) first — unapproved skills are not used.
9. **Verify rendered pages**, not just source: browser QA via Playwright or equivalent free automation.

## The 28-phase pipeline (summary)

| # | Phase | AI | Human gate |
|---|---|---|---|
| 01 | Idea Discovery | AUTO | — |
| 02 | Deep Research | ASSISTED | review |
| 03 | Competitor Research | ASSISTED | — |
| 04 | Customer / Pain Research | ASSISTED | review |
| 05 | Opportunity Scoring | ASSISTED | **approve** |
| 06 | Product Requirements | ASSISTED | — |
| 07 | MVP Scope Lock | ASSISTED | **sign** |
| 08 | UX Architecture | ASSISTED | — |
| 09 | Visual Direction | ASSISTED | **approve** |
| 10 | Design System | ASSISTED | — |
| 11 | Technical Architecture | ASSISTED | — |
| 12 | Backend / Database | ASSISTED | — |
| 13 | Frontend | ASSISTED | — |
| 14 | Motion / Polish | ASSISTED | — |
| 15 | SEO | ASSISTED | — |
| 16 | Accessibility | ASSISTED | — |
| 17 | Performance | ASSISTED | — |
| 18 | Browser QA | ASSISTED | — |
| 19 | Design Audit | ASSISTED | — |
| 20 | Code Audit | ASSISTED | — |
| 21 | Security Review | ASSISTED | no auth/payments w/o owner |
| 22 | Legal Pages | ASSISTED | **owner review** |
| 23 | Deployment | ASSISTED | — |
| 24 | Launch | ASSISTED | **go/no-go** |
| 25 | Distribution | ASSISTED | — |
| 26 | Feedback | AUTO | — |
| 27 | Metrics | AUTO/ASSISTED | — |
| 28 | Iterate / Pivot / Kill | ASSISTED | **decide** |

Full definitions (purpose, inputs, outputs, evidence, gates) live in `SYSTEM.md §18`.

## Directory map

- `SYSTEM.md` — operating system (read first).
- `research/` — raw material by source: `ideas`, `competitors`, `customers`, `markets`, `trends`, `reddit`, `x`, `indie-hackers`, `product-hunt`, `hacker-news`, `github`, `design-benchmarks`, and `skill-registry.md`.
- `products/` — one folder per product; portfolio README inside (`products/README.md`).
- `templates/` — skeletons for every phase document (`idea-brief`, `research-report`, `competitor-analysis`, `customer-profile`, `opportunity-score`, `product-requirements`, `ux-architecture`, `design-system`, `technical-architecture`, `implementation-plan`, `qa`, `launch`, `seo`, `post-launch`).
- `decisions/` — dated decisions with evidence and reversal conditions.
- `experiments/` — scoped experiments (question / method / result).
- `evidence/` — graded evidence artifacts, keyed by product and phase.
- `.opencode/skills/` — project-local, registry-approved skills (see `research/skill-registry.md`).

## The $0 spine

Free tiers only (GitHub, Vercel Hobby, Cloudflare Pages/Workers, Supabase Free, etc.). Never assume a free tier stays free — snapshot limits whenever infrastructure is chosen (SYSTEM.md §24). Payment providers only when they cost nothing until revenue (SYSTEM.md §25).