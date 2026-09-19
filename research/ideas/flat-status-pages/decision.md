# Decision — Flat-Rate Status Pages

## WHY THIS PRODUCT SHOULD EXIST

Candidate differentiation: the only flat-priced, auto-updating, unlimited-seat, no-white-label-trap, commercial-use-safe page — aimed at UptimeRobot free-tier refugees. Sources: underserved customer (compliance-scared free users) + better economics (one flat number vs cliff pricing). "Cheaper than Instatus" alone is REJECTED as differentiation (no switching evidence for $5–8/mo).

## MVP (if pivoted)

- CORE JOB: outage communicated without interrupting the fix. INPUT: monitor state. PROCESS: quorum-checked probes → auto page update → subscriber email. OUTPUT: live custom-domain page.
- MUST HAVE: 10 monitors, 30s multi-region quorum checks, auto-updating page, custom domain, email subscribers.
- SHOULD HAVE: UptimeRobot one-click import, scheduled maintenance.
- LATER: SMS, private pages, SSO, teams, API.
- EXPLICITLY DO NOT BUILD: SSO/audience pages (the $300-cliff trap), SMS alerting (margin risk), white-label tiers.

## $100 MRR TEST

$12 × 9 customers = $108 MRR. Reachable (~150–200 DM touches at documented conversion rates) but grind: saturated, low-urgency market. Arithmetic is not validation.

## SOLO-MAINTAINABILITY

MEDIUM-HIGH: ping-fleet ops, false-positive triage, abuse, deliverability. Reducible (email-only, capped monitors, no SMS) — REDUCE applied in MVP above. No full veto, but a persistent tax.

## AI-MARGIN

NOT APPLICABLE.

## KILL CONDITIONS

- No priced-switching evidence found for the refugee wedge after 50 targeted outreaches.
- Instatus/Better Stack ships an equivalent flat tier (wedge copied).
- False-positive burden exceeds ~2 hrs/week sustained.
- UptimeRobot reverses commercial-use ban (trigger event dissolves).

## REVERSAL CONDITIONS

- 5+ founders state they switched (or will switch) tools for compliance-safe flat pricing.
- A narrower wedge validates (e.g. status pages for appointment-SMBs, a segment with zero coverage).
- Quorum-probe costs measure below $5/mo at 100-customer scale.

## DECISION: PIVOT

Problem real (FACT), budget-tier WTP proven (FACT), but the specified wedge ($12 flat monitors+page, general indie SaaS) is occupied 5× over with low pre-scale urgency and overnight copyability. PIVOT, not KILL: same problem and customer, new wedge — the commercial-use-safe UptimeRobot-refugee catcher (auto-import + compliance-safe positioning + no-trap pricing). That wedge is INFERENCE until priced-switching evidence exists; the pivot validates it before any PRD.

## EVIDENCE SUMMARY

- PRIMARY: pricing pages (Atlassian, Instatus, Better Stack, UptimeRobot, Statsy, UpCanary); Instatus open page ($50K MRR); IH outage threads; Baremetrics blog; UptimeRobot ToS change.
- SECONDARY: G2/HN complaint threads; founder anecdotes; competitor blogs.
- CONTRADICTORY: Instatus "cheap" vs $300 cliff; UptimeRobot "free" vs commercial ban + hikes; "$100 MRR easy" vs saturated grind.
- UNKNOWN: budget-tier churn; refugee segment size; SMS-free alert adequacy; $12-specific demand.
