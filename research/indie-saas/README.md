# Indie-SaaS Benchmark — README

100 real bootstrapped/indie/micro-SaaS products, researched under `RESEARCH-PROTOCOL.md` (seven passes) by 10 slice agents. Business evidence for the zero-cost lab: what was built, for whom, how it made money, how it found users, what it cost to run.

## Files

| File | Contents |
|---|---|
| `indie-saas-dataset.json` | 100 records × 28 fields, machine-readable (canonical corpus) |
| `indie-saas-benchmark.md` | Human-readable tables per slice + full per-record detail |
| `revenue-evidence.md` | Revenue transparency audit: what is founder-disclosed vs estimated vs unknown |
| `mvp-patterns.md` | How the first version actually looked (TOP MVP patterns) |
| `distribution-patterns.md` | How first users were actually found (channel frequencies + patterns) |
| `technical-patterns.md` | Stacks and build choices that stayed solo-maintainable |
| `zero-dollar-feasibility.md` | Which niches a $0 lab can actually enter, with cost evidence |
| `lessons.md` | TOP lessons for our lab, each traced to records |
| `contradictions.md` | Every unresolved contradiction, both sides recorded |
| `_slices/` | Raw research: 10 slice JSON + narrative MD files (i10 has 11 records incl. backfill) |

## Corpus stats

- 100 unique products, 10 slices × 10 (i01 holds 9 after the Tally dedup — see Method below; i10 holds 11 incl. backfill WIP.co).
- Evidence grades: **67 FACT / 33 INFERENCE / 0 HYPOTHESIS**.
- Revenue: founder-disclosed figures for ~54 records; 46 carry no verifiable revenue (marked UNKNOWN or estimate-only).
- Slices: i01 tiny-audience/validation-first · i02 content/SEO/marketing · i03 dev-tools/productivity · i04 creator/media/niche-B2B · i05 education/testimonials/community · i06 privacy analytics · i07 feedback/changelog/forms · i08 boilerplates/starters · i09 job boards/remote work · i10 AI micro-tools.

## Method notes (honest)

- Merge dedup: i01's `Tally` record duplicated i07's `Tally.so` (FACT) — i01 copy dropped.
- Slice i02 used qualified grade strings; normalized to leading term (FACT/INFERENCE).
- Aggregators (GetLatka, Tracxn, MakerStack) were caught wrong or self-contradicting on ≥8 records — treated as secondary everywhere; see `contradictions.md`.
- Known blind spots: founders overwhelmingly male and US/EU; revenue often stale (2021–2024); success-skewed (failures under-documented); Beam Analytics shut down 2026-09-01 mid-corpus — kept as a failure case.
