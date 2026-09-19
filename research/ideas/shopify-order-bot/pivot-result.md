# Pivot Result — Shopify Micro-Brand Order Bot

## Experiment

Public-demand evidence sweep (4 passes: workload/ICP, pricing/WTP, trust/actions, platform/econ/kill), 2026-first sources. No outreach performed.

## Sample

Public corpus: Shopify Community WISMO threads (incl. Jun 2026 small-store thread), r/shopify pricing/grievance threads, G2/Capterra/Trustpilot reviews (Gorgias/Tidio/Crisp/Chatbase/Fin), Shopify App Store reviews, Gorgias datasets + guardrail/action docs, Tidio Lyro action docs, tribunal/incident records (Air Canada, Cursor, Priceline), Shopify dev/review/fee docs, operator cost blogs.

## Evidence (strongest per hypothesis)

H1 SUPPORTED · H2 SUPPORTED · H3 WEAK · H4 SUPPORTED · H5 SUPPORTED-WITH-CONDITIONS · H6 WEAK-HELP · H7 SUPPORTED-WITH-CAVEAT · H8 FAILED (THREAT) · H9 SUPPORTED-ON-COSTS. Detail in `wedge-validation.md`.

## Decision matrix

| Signal | Evidence | Strength | Pass/Fail |
|---|---|---|---|
| Problem (WISMO load) | 18% floor; 70% anecdote; copy-paste pain | Strong | PASS |
| Switching intent | Grievance threads; bill-shock anecdotes; no observed flat-switching | Medium-weak | FAIL |
| Wedge value (order-aware flat) | Casely-pattern action value; but served by Gorgias/Tidio/Chatbase + free Inbox | Medium, occupied | FAIL |
| Price ($79) | Undercuts $100–260 stacks; exceeds $0–60 norm; flat-as-driver WEAK | Medium | WEAK PASS |
| Distribution | Alternative-SEO + grievance replies; educator-free zone; conversions unobserved | Medium | WEAK PASS |
| Trust | Unknown vendor + order PII + hallucination precedents; mitigable via read-only-first | Medium | WEAK PASS |
| Migration friction | CSV/API import + DNS + subscriber move; moderate | Medium | PASS |
| Competitive survivability | Downmarket Gorgias + micro-Tidio + native Chatbase + free Inbox/Magic/Sidekick trajectory | Strong threat | FAIL |
| Solo maintainability | Review + trust + per-tenant syncs + non-technical support; narrowed but persistent | Medium-heavy | WEAK PASS |
| $100 MRR path | $79 × 2 micro-brands; reachable contacts, unproven conversion | Arithmetic only | WEAK PASS |


## Economics (H9 calc: $79 sub + included credits + caps + top-ups + BYOK option)

- Light (50 tickets/mo): AI ≈ $3–15 → margin ~85–95%. GREEN.
- Expected (150 tickets): AI ≈ $8–45 → margin healthy inside quotas. GREEN.
- Heavy (500 tickets): AI ≈ $25–150 → breakeven-to-negative without overage; top-ups/overage required. YELLOW with controls.
- Abusive (5,000 spam queries): capped by quotas + rate limits + BYOK fallback. Contained by design.
- Verdict: economics work with quotas; pricing power (not margin) is the binding constraint.

## Strongest positive signal

WISMO load is real at micro scale with a quantified floor (18%), and order-aware execution has measured wins (Casely −76%).

## Strongest negative signal

Free first-party compression in a saturated category: Inbox/Magic/Sidekick already do free what the wedge charges for, incumbents already serve the $10–60 micro-tier, and flat pricing has never been observed driving a purchase — the three load-bearing claims all fail or weaken simultaneously.

## Objections (recurring)

"Free covers us" · longevity fear of tiny vendors · setup effort for rarely-used tooling · hallucination fear from widely-shared incident stories · $79 vs $0–60 norm.

## Final decision: KILL

Problem real, wedge specified, evidence gathered — and the wedge does not survive H8 + free compression + H3-weak + retention physics. No PIVOT specified: the only narrower reformulation with any logic (read-only WISMO adjunct undercuts the same free tools) inherits identical compression; inventing "non-English micro-brands" would be hope without pay evidence. Killed with reversal conditions: Shopify Inbox stagnation with evidence · observed priced-switching to flat micro-tools (5+) · a sub-segment with measured pay evidence · a documented quota/API path removing platform risk.

## Remaining unknowns

Budget-tier churn curves · SMS/TCPA viability · grievance-thread conversion rates · exact per-tenant ops load · Sidekick auto-resolve trajectory.
