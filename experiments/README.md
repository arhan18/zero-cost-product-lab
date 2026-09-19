# Experiments

Scoped, reversible experiments — the cheapest way to test a hypothesis before building for real (SYSTEM.md §16).

## Format

One file per experiment: `YYYY-MM-DD-<slug>-<shortname>.md`.

- **Question** — the hypothesis being tested, stated as a claim we expect to be true.
- **Method** — exactly what we did; how data was collected (URLs, transcripts, screenshots).
- **Result** — what happened, honestly, numbers attached.
- **Interpretation** — what it implies, graded (FACT / INFERENCE / HYPOTHESIS / UNKNOWN).
- **Action** — build / pivot / park / kill, and which phase is affected.

## Rules

- Experiments are cheap by design: one variable, a few hours, real data.
- No fake data, no self-congratulation (§12). An experiment that disproves our idea is a success.
- Results connect back to `decisions/` and the affected product's pipeline status.