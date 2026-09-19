# Evidence

The graded evidence trail for the lab and every product (SYSTEM.md §16 — phase is done only when its evidence exists).

## Layout

- `ideas/` — idea briefs and discovery feed.
- `<product-slug>/` — per-product, by phase: `research-report.md`, `competitors.md`, `customers.md`, `opportunity-score.md`, `prd.md`, `scope.md`, `ux.md`, `design-system.md`, `architecture.md`, `qa/`, `launch.md`, `metrics/`, `feedback.log`.
- Raw primary material (quotes, screenshots, links) lives under `research/`; this folder holds the synthesized, graded artifacts the pipeline requires.

## Rules

- Every claim is graded: `FACT` / `INFERENCE` / `HYPOTHESIS` / `UNKNOWN` / `CONTRADICTORY EVIDENCE`.
- Keep raw things (screenshots, transcripts, URLs, dates) — summarize on top of them, never instead of them.
- Decisions reference exact evidence paths; thin evidence is labeled hypothesis-driven.
- A phase with no evidence artifact is not done. Missing evidence is recorded as `UNKNOWN`, not assumed.