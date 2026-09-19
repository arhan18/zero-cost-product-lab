# Research

Raw material and grading for the lab, organized by source. Everything here is **evidence**, not conclusion: keep the raw thing (quote, link, date, screenshot) and synthesize on top of it in `evidence/`.

## How to file

- `ideas/` — one-line idea cards, each tagged with source and suspicion level.
- `competitors/` — notes and links on who else solves a problem.
- `customers/` — primary-source pain observations, quotes, user vocabulary.
- `markets/` — market-level notes (size signals, segments, saturation).
- `trends/` — emerging signals worth watching (not hype).
- `reddit/`, `x/`, `indie-hackers/`, `product-hunt/`, `hacker-news/`, `github/` — primary evidence per platform, saved verbatim with links and dates.
- `design-benchmarks/` — reference screenshots for visual direction (references only; never copy assets).
- `skill-registry.md` — the controlled third-party skill registry (required by SYSTEM.md §15).

## The three evidence corpora (all valid, distinct, cross-referenceable)

- `design-benchmarks/` — **A. 100 product/website benchmark** (43-field schema: design, UX, positioning) + `website-dataset.json`.
- `founders/` — **B. 50 founder/indie-hacker benchmark** (30-field schema) + `founder-dataset.json`.
- `indie-saas/` — **C1. 100 indie/micro-SaaS business benchmark, 28-field schema** (validation-first niches) + slices.
- `indie-business/` — **C2. 100 indie/bootstrapped/micro-SaaS business benchmark, 68-field schema** (operations, revenue, $0/$100-MRR) + slices. Lives here (not `indie-saas/`) because that path was already occupied — both are valid, zero product overlap.
- `MASTER-RESEARCH-SYNTHESIS.md` — synthesis across A+B+C1+C2 with graded conclusions.
- `idea-radar.md` — specified idea-sourcing system feeding Phase 01/05.
- Engine: `workflows/idea-discovery.md` executes the radar on request ("find me 10 opportunities around X") → BUILD / INVESTIGATE / KILL cards.
- `benchmark-patterns.md` + `benchmark-gaps.md` — cross-product patterns and known unknowns.

## Grading rule (SYSTEM.md §5)

Every claim used for a decision must be labeled:

`FACT` · `INFERENCE` · `HYPOTHESIS` · `UNKNOWN` · `CONTRADICTORY EVIDENCE`

- One tweet / comment / post / AI answer / competitor claim is **never** proof — triangulate.
- If sources disagree, record both sides (`CONTRADICTORY EVIDENCE`), don't average them away.

## Intake habit

Keep the intake cheap and the discovery phase wide: file interesting signals here continuously, tag the product (or "unknown") they relate to, and let Opportunity Scoring (Phase 05) decide what deserves a formal research phase.