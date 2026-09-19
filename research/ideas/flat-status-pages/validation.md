# Validation — Flat-Rate Status Pages

Original opportunity: `research/ideas/flat-status-pages.md` ($12/mo flat monitors+page for indie SaaS). Untouched. Date: 2026-09-12. Three evidence passes (pain, competition, GTM/kill).

## 1-2. Exact problem / target customer

Solo / 2–5-person indie SaaS (side-project → ~$50K MRR, 100–1K users, no DevOps) has outages with no status page: users flood support with "is it down?", engineers get interrupted mid-fix, trust erodes (FACT: Atlassian 24% ticket-reduction stat; Baremetrics 2023 outage-letter to ~800 customers; Odown founder anecdote; IH Aug 2026 pre-revenue founder adding page at $0 MRR).

## 3-4. Current workflow

Nothing + Twitter/Discord + Notion (slow, no subscribers) · Uptime Kuma self-hosted (63k stars; dies with your infra; gaps per Issues #7/#9/#10) · Atlassian Statuspage Hobby $29 (comms-only, polish paywalled till $99–399). A manual workaround (Twitter/Discord) is the dominant competitor (FACT).

## 5-7. Pain evidence / frequency / severity

FACT pain, sporadic frequency (outages inevitable, not daily), severity MEDIUM (trust + interrupted fixes, not revenue-stopping). Pre-scale urgency is the weak point: "embarrassing, not painful" until users/compliance exist (INFERENCE, kill-test).

## 8-9. Alternatives / why they fail

Statuspage ($29–399, no monitoring, manual 3am clicks — G2/HN price complaints FACT) · Instatus Pro $20 (plus $300 cliff for private/SSO — #1 complaint FACT) · Better Stack (modular bill $80→767, white-label $208 trap FACT) · UptimeRobot free-50 (Dec 2024 commercial-use ban; false-alert spam threads FACT) · Statsy $15 / UpCanary $9 / Pulsetic $19 / Hyperping $24 (all sell monitors+page flat — wedge occupied, FACT).

## 10. Willingness-to-pay evidence

COMPLAINT ≠ WTP (kept separate): G2/HN price complaints are complaint-only. WTP proven at budget tier: Instatus $50,105 MRR / 1,354 paying / Pro $20 flat (FACT, open page); Better Stack free→$29 conversions (FACT, testimonials); sustained $9–29 paid alternatives (FACT). $12 flat fits — but $20 already owns "cheap + monitors" (INFERENCE).

## 11. Distribution opportunities

Best first channel: Reddit direct outreach + "statuspage alternative" comparison post → SEO + AlternativeTo (INFERENCE from Instatus playbook: PH #1 day → Twitter friends → competitor-brand ads → SEO top-2 source, $40K MRR; plus 0→$600 MRR DM-grind precedents). Trigger hook: UptimeRobot commercial-use ban (FACT, Dec 2024).

## 12-14. Technical / $0 / $100-MRR feasibility

Technically feasible on free tiers (static pages + ping fleet) (FACT-pattern). $0-feasible POSSIBLY: single-probe fleets generate false positives (10–20/mo, horror cases 70/day) — multi-region quorum + debounce required; SMS 2–5p/msg, flapping = £100+/mo risk (FACT-pattern). $100 MRR = 9 × $12: reachable (~150–200 touches at DM rates) but grind in saturated low-urgency market (INFERENCE).

## 15. Solo-maintainability

MEDIUM-HIGH burden: ping-fleet ops, false-positive triage, abuse, subscriber email deliverability. Reducible (no SMS, email-only alerts, capped monitors) but not eliminable — weighs against.

## 16. AI-margin

NOT APPLICABLE (no AI in core workflow).

## 17-19. Risks / contradictions / unknowns

Risks: saturation (20 tools, 75% free), copyability (Instatus/Better Stack ship $12 tier overnight), low pre-scale urgency, churn (set-and-forget, low expansion). Contradictions: Instatus "cheap" vs $300 private/SSO cliff; UptimeRobot "free" vs commercial-use ban + legacy 425% hike; "easy $100 MRR" vs saturated grind. Unknowns: exact churn of budget-tier pages; SMS-free alert adequacy; commercial-refugee segment size.
