# Indie-Business Benchmark — README

100 real indie/bootstrapped/micro-SaaS products studied as SMALL BUSINESSES: MVPs, pricing, distribution, revenue, operations, $0 feasibility, $100-MRR relevance. Sibling (not replacement) of the website benchmark (design/UX, 100 records, 43 fields) and the founders benchmark (50 people) — different purpose, different 68-field schema.

## Location note

The task spec named `research/indie-saas/` — already occupied by the correct 28-field corpus. Overwriting it would destroy valid research, so this corpus lives in `research/indie-business/`. Zero overlap between the two product sets (verified at merge).

## Files

| File | Contents |
|---|---|
| `indie-business-dataset.json` | 100 records × 68 fields + slice label (canonical) |
| `indie-business-benchmark.md` | Tables per slice + full per-record detail |
| `revenue-evidence.md` | MRR/ARR/customer transparency audit |
| `mvp-patterns.md` | First-version reconstructions + deliberately-not-built lists |
| `validation-patterns.md` | How each product was validated (or wasn't) |
| `distribution-patterns.md` | First users/10/100 + channel evidence |
| `pricing-patterns.md` | Models, tiers, free/trial structures that recur |
| `technical-patterns.md` | Stacks + LOW/MED/HIGH complexity verdicts |
| `zero-dollar-feasibility.md` | YES 62 / POSSIBLY 29 / NO 7 / UNKNOWN 2 with reasons |
| `lessons.md` | What the lab should learn (and not copy) |
| `contradictions.md` | Unresolved clashes, both sides |
| `MASTER-INDIE-SAAS-SYNTHESIS.md` | 15-section synthesis + cross-reference vs older corpora |
| `_slices/biz-k01..k11.{json,md}` | Raw research (k10 lost 4 dups at merge; k11 = 4-record backfill) |

## Corpus stats

- 100 unique · grades PRIMARY 74 / SECONDARY 25 / UNKNOWN 1.
- Buckets: dev/technical 20 (k01+k02) · B2B workflow 20 (k03+k04) · creator/marketing 20 (k05+k06) · niche/vertical 20 (k07+k08) · AI-native/unusual 20 (k09+k10+k11).
- zeroUpfront: YES 62 / POSSIBLY 29 / NO 7 / UNKNOWN 2. mrr100: HIGH 55 / MEDIUM 16 / LOW 15 / UNKNOWN 14.
- Failure coverage: Pagoda Box, Espresso, Friends+Me, Revue, Elvanto, FindThatLead (decline), Nudge Coach (shutdown 2025), ShortlyAI (sunset), Super AI + Vibe AI (postmortems), Voicify/Jammable (IP takedown) — plus struggling cases (Bidsketch, Campsite.bio).

## Standing caveats

- Revenue mostly founder-claimed, unaudited; aggregators (GetLatka, Tracxn, PitchBook) caught wrong repeatedly — treated secondary everywhere.
- Founder/tech-stack fields skew male, US/EU; first-100-user stories undisclosed for most pre-build-in-public-era products.
- AI pricing/inference costs decay fast — verify live before acting on any AI record.
