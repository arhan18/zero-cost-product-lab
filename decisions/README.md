# Decisions

Dated decision record for the lab and for each product. This is where the pipeline's human gates leave their trail (SYSTEM.md §16).

## Format

One file per decision, named so it sorts by date: `YYYY-MM-DD-<slug>-<shortname>.md`.

Each entry:

- **Date & gate** (e.g. Phase 05 — Opportunity Score).
- **Decision** (one sentence: what was decided).
- **Evidence** (which files in `evidence/` it rests on — exact paths).
- **Reasoning** (the argument, labeled by claim grade).
- **Reversal condition** (what would make us change our minds).
- **Owner** (the human who approved).

## Rules

- A decision is only valid if the human gate approved it (SYSTEM.md §18 gates: 05, 07, 09, 22, 24, 28).
- No decision without evidence references. If evidence is thin, it must be labeled a hypothesis-driven decision.
- Kill decisions are written and celebrated — they are the lab learning in public.