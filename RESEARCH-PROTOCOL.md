# RESEARCH-PROTOCOL

Standard research protocol for every dataset, benchmark, and research file in the lab. This consolidates the multi-pass protocol used for the 100-product and 50-founder benchmarks and extends it for the indie-SaaS benchmark. Where it conflicts with SYSTEM.md, SYSTEM.md wins.

## 1. Two kinds of work

- **Evidence**: raw, saved verbatim — quote, URL, date, source name. Goes in `research/`.
- **Synthesis**: conclusions drawn from evidence, labeled by grade. Goes in analysis docs / benchmarks.

## 2. The seven-pass protocol (investigation passes)

Any new research corpus (e.g. the 100 indie-SaaS benchmark) runs these passes. Passes may be delegated to parallel agents; each pass produces files, then a merge pass reconciles:

1. **Discovery** — generate candidate list from reservoirs: Indie Hackers top makers, "The Bootstrapped Founder" interviews, Starter Story, build-in-public records, micro-SaaS showcases, case studies. Breadth first; quality comes later.
2. **Expansion** — widen categories (productivity, design, dev, marketing, finance, vertical/niche, infrastructure, content, AI-era) and geography (US + non-US: EU, India, LatAm, SEA, etc.). Reach ≥120 candidates.
3. **Primary-source verification** — for each kept record: official site, founder's own statement/history, indie-hackers/dashboard, interviews — ≥2 independent primary sources. Downgrade any claim to its weakest verified ancestor. Includes revenue / pricing / MVP verification: public or founder-stated revenue (bucketed when exact figures aren't public), pricing pages, free/trial structure, what the first version actually was, what was deliberately NOT built.
4. **Contradiction** — find and record contradictory claims, near-misses, and failures. Both sides recorded verbatim (`CONTRADICTORY EVIDENCE`); disagreements are never averaged away.
5. **Competitive / alternative landscape** — how founders actually found first users and what they competed against: SEO, X, Reddit, PH/HN launches, communities, integrations, referrals, outreach, partnerships; direct/indirect competitors and manual substitutes.
6. **Blind spots** — audit for coverage gaps (gender, geography, era, category), enforce evidence-grade minimums.
7. **Final verification** — consistency check across the corpus; high-impact conclusions re-verified; unresolved items marked UNKNOWN with the named blocker.

## 3. Record-grade rules (benchmarks)

A record carries `evidenceGrade`:
- **FACT** — the claim is directly evidenced (primary source reviewed) without significant gaps.
- **INFERENCE** — built from partial evidence with clearly-reasoned inference.
- **HYPOTHESIS** — plausible but unverified.
- **UNKNOWN** — not publicly verifiable; must be marked rather than guessed.

Fields with no evidence are `UNKNOWN` or omitted **explicitly**, never fabricated. Snapshot date recorded per claim.

## 4. Contradiction handling

- Both sides recorded verbatim (`CONTRADICTORY EVIDENCE`); state which is more firmly sourced.
- Refuse to "average away" disagreement (e.g. validate-before-build vs. shipped-and-learned founders both stay).

## 5. Tooling

- Research agents use `webfetch`/`websearch`/builtin browser tooling; no paid APIs.
- External facts are cross-checked against primary sources; aggregator data (GetLatka etc.) is treated as secondary and verified or downgraded.

## 6. Filing

- Raw evidence → `research/<platform>/` (e.g. `indie-hackers/`, `reddit/`).
- Final corpora → `research/design-benchmarks/`, `research/founders/`, `research/indie-saas/`.
- Synthesis → benchmark `.md` files, `benchmark-patterns.md`, `benchmark-gaps.md`, `MASTER-RESEARCH-SYNTHESIS.md`.

*Participated in: benchmark-build (2 passes, 10 slices × 10 records), founder corpus (10 × 5), and the master update (Part D: 7 passes).*