# OPPORTUNITY SCORE

| Field | Value |
|---|---|
| Product / idea | dodo-shield |
| Date | 2026-09-14 |
| Recommendation | BUILD-FIRST ELIGIBLE (HYBRID: tiny experiment first) — IF owner approves; else PARK. One-line: zero Dodo-native prevention + proven Stripe WTP + $0-buildable webhook→refund loop, but Dodo-seller WTP still HYPOTHESIS. |

## Rubric (score 0–5 each, with a one-line reason)

| Criterion | Score | Reason |
|---|---|---|
| Pain strength (does it hurt enough?) | 4 | FACT: bans/suspensions + $30 fees documented 2019–2026; spiky but existential when hit. |
| Reachability (can the target find it? distribution) | 4 | FACT: Dodo Discord/X/IndieKit/r-indiehackersindia channels exist; first-10 hypothesis concrete. |
| Competition (weak enough to enter?) | 5 | FACT: no Dodo-native prevention found; incumbents are Stripe-only or enterprise. |
| Cost to build (cheap enough on $0?) | 4 | INFERENCE: webhook + rules + refunds.create + Resend + Supabase free; no AI cost; schema check is the 1-hr risk. |
| Monetization (real revenue path, fee-only model) | 3 | FACT: $69–$219 packs / $10–$70/mo accepted adjacently; HYPOTHESIS: Dodo sellers pay $15–$29 — unproven. |
| Maintenance burden (low enough?) | 4 | INFERENCE: stateless rules, per-seller keys, solo-maintainable; support = dispute questions, bounded. |
| **Weighted total** | 24/30 | Strong except WTP proof. |

## Decision record

- Recommended: BUILD-FIRST experiment (not full Research Track): signal exists (paid competitor ByeDispute + durable ban threads + Dodo suspension case); MVP shippable 1–3 days at ~$0 (connect → rules → alert+refund → prevented-feed); reversible; users reachable unpaid. Validation moves post-launch (activations, prevented-count, retention, pay attempts).
- Human owner: PENDING — APPROVED / OVERTURNED (reason).
- Track: HYBRID per PRODUCT-GATES §13 / SYSTEM §17b: tiny real MVP first; Research Track entry only on traction. Anti-bypass check: money-movement (auto-refund) is real but seller-keyed, amount-capped, reversible within test mode first — disclosed as the one expensive-ish edge; test-mode + cap + manual-approve default mitigates.

## Kill arithmetic (Gate-07 input; PRODUCT-GATES.md §8)

- Likely price → customers required for $100 MRR: $19×6, or $29×4, or $69 one-time×2/mo.
- Where those customers come from (acquisition assumption): HYPOTHESIS: 2 from Dodo Discord help threads, 2 from X build-in-public, 2 from IndieKit channel per month at ~2 hrs each.
- Why they pay month 2 (retention assumption): HYPOTHESIS: ongoing launches/renewals keep risk alive; prevented-feed + monthly "you saved $X" report sustains; unproven — churn risk flagged.
- Weekly operational burden at that scale (support/infra/moderation/compliance): INFERENCE: ~2–3 hrs/wk for 6 users (webhook failures, false-positive tuning, Dodo API changes); no moderation/compliance beyond ToS + no secrets in repo.
- Verdict if arithmetic fails: REDUCE SCOPE (alert-only, no auto-refund) / PIVOT (MoR-generic: Paddle/LemonSqueezy) / KILL (archive). Never build on sunk code.

## Open risks

- HYPOTHESIS: Dodo sellers feel enough pain to pay (no WTP quote yet) → resolve via 5 outreach + landing waitlist with real emails (no fake validation, §12).
- UNKNOWN: `payment.succeeded` signal sufficiency (email/IP/country/fingerprint) → resolve via event-catalog schema read + test webhook before code.
- HYPOTHESIS: Auto-refund won't cause false-positive revenue loss → mitigate with manual-approve default + per-rule caps + 30-day/balance guards.
- UNKNOWN: Dodo app-listing/ToS for third-party refund automation → read ToS before public launch (Gate-22).
