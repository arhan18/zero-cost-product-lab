# Concierge Experiment — T3 Tiny SaaS Renewal Tracker

Date started: 2026-09-13. Track: EXPERIMENT (pre-build concierge; no SaaS built).
Original card: discovery-report hypothesis T3 (chat, 2026-09-13) — NOT duplicated as a file; this file does not modify any existing idea card.

## 1. Core hypothesis

Small technical teams (roughly 2–10 people, no procurement function) want a middle ground between
spreadsheets/manual tracking and heavyweight SaaS management platforms for SaaS renewals,
contracts, and cancellation windows. Workflow under test:
`renewal documents → key dates/details extracted → renewal calendar → reminders/alerts`.
Testing problem + workflow + willingness to participate — NOT the future implementation.

## 2. Experiment offer (exact proposition)

> **Forward me 3 renewal PDFs. I'll turn them into a clean renewal calendar with key dates and alerts within 24 hours.**

Clarity-tuned variant (same proposition, no new claims):
> **Drowning in SaaS renewals but Torii/Zylo is overkill? Send me 3 renewal PDFs/contracts and I'll send back a clean renewal calendar (renewal dates, cancel-by deadlines, reminders) within 24 hours — free, manual test, nothing to install.**

Never claim: AI SaaS, automation, existing customers/traction, revenue, accuracy rates.
The process is manual; say so.

## 3. Target user

Small technical teams, startups ~2–10 employees, technical founders, sysadmins, IT/admin owners,
engineering managers, ops people managing subscriptions. Prefer the person directly responsible
for renewals. No enterprise procurement initially.

## 4. Questions to answer (Q1–Q5)

- Q1 participation: will anyone hand over real renewal material?
- Q2 workflow value: which fields matter (renewal date, notice/cancel window, term, cost, cadence, auto-renew, vendor, owner, reminders)?
- Q3 current workaround: spreadsheet / calendar / Notion / email / SMP / memory?
- Q4 middle-ground gap: is spreadsheet-vs-heavy-platform perceived as a real gap?
- Q5 recurring value: one-time cleanup vs continuous maintenance?

## 5. Public-demand re-verification (lightweight, 2026-09-13)

Prior evidence reused where valid: r/sysadmin Jan 6 + Jan 16 2026 sprawl threads;
BetterCloud sprawl +55% Oct 2025. Fresh check this session (FACT = page actually read):

- FACT (Mar 27 2026, r/ITManagers "How do you track SaaS renewals?"): spreadsheet + M365/Apps Script
  the modal answer; Zylo/Torii "take real effort to set up"; "spreadsheets work until they don't —
  usually the first time a renewal slips because someone updated the wrong row."
- FACT (May 29 2026, r/sysadmin "How do you keep track…"): 40-person team — "Open to
  purpose-built tools but we're 40 people so nothing crazy"; spreadsheet defenders vs
  "perpetually wrong" complaints in the same thread (mixed demand signal, not consensus).
- FACT (Feb 25 2026, r/SaaS auto-renewals): losses come from missed 30–60-day cancellation
  windows, not bad deals; "cancel-by date" math is the artifact people want.
- FACT (Jun 27 2024, r/ITManagers): missed-notice war stories (60-day vs 90-day rep misinformation).
- FACT (vendor/industry, secondary): BetterCloud Aug 2026 — 40% track renewals manually on
  calendar/spreadsheet; 79% of IT leaders hit price increases at renewal; Torii Apr–May 2026
  confirms Sheets→Notion→Airtable stopgap ladder for sub-50-app stacks.
- CONTRADICTORY (strengthens free-competition risk): the lightweight free tier already exists —
  Tooly License Tracker (free unlimited), G2 Track (free), Torii free tier, **Cadence for Jira
  launched Jul 28 2026** (renewal warnings + seat utilization inside Jira), Remindax
  (cancel-window tracking), and an r/SaaS Feb 2026 "I built a free tool for IT teams" post.
  The gap is therefore NOT "nothing exists" — it is "nothing small teams adopt and keep updated."
  Concierge must test adoption/maintenance, not awareness.

## 6. Concierge delivery (manual, no custom app)

Per submission produce a renewal record per document:

| Field | Notes |
|---|---|
| vendor / product | as named in document |
| renewal date | exact or UNKNOWN |
| cancellation/notice deadline | computed cancel-by date, or UNKNOWN if term absent |
| contract term | e.g. annual auto-renew, or UNKNOWN |
| price / billing cadence | if present, else UNKNOWN (never guess) |
| auto-renewal | yes / no / UNKNOWN |
| owner | ask participant, else UNKNOWN |
| source document | filename only (never publish contents) |
| uncertainty flag | set on ANY ambiguous extraction |

Outputs (free formats only — no custom calendar app):
1. human-readable renewal table (email body / markdown),
2. clean CSV (vendor, product, renewal_date, cancel_by, term, price, cadence, owner, notes),
3. ICS file or Google-Calendar-compatible import with renewal + notice-deadline + reminder events
   (reminders at 60/30/7 days where the deadline is known).

Turnaround: within 24 hours of receipt. Review each record once before sending; ambiguous
fields stay flagged UNKNOWN rather than inferred.

## 7. Data / privacy safeguards

- Never publish customer documents or contents; reports carry aggregates only.
- Do not commit documents to the repo; do not store secrets; minimize retained data.
- Tell every participant upfront: what is collected (the 3 PDFs), what is returned
  (table + CSV + calendar), retention (deleted after delivery unless they ask for monitoring),
  and that extraction is manual (a human reads the PDFs).
- Environment check: this agent session has no owner-controlled inbox or secure vault.
  Real documents must be received and handled by the OWNER (or a designated address/vault).
  Until that exists, run discussion-only recruitment (Q2–Q4) and mark document intake
  `OWNER ACTION REQUIRED`. Do not invent a weaker-privacy workaround.

## 8. Recruitment (OWNER ACTION REQUIRED for posting)

No posts published by this session. Channels prepared, in priority order:
1. r/ITManagers + r/sysadmin — helpful replies in live renewal threads (participate, never pitch-spam;
   both communities ban self-promo; account standing required).
2. Indie Hackers + relevant Slack/Discord admin communities.
3. X — reply to SaaS-sprawl / bill-shock threads with the offer.
4. "SaaS renewal tracker" SEO later — only if concierge converts.

### Recruitment message (Reddit-flavored)

> Small-team SaaS renewal chaos question: we run ~15 tools on spreadsheets and nearly missed
> a 60-day cancel window. Torii/Zylo feels like overkill for us. Anyone found a middle ground
> between a spreadsheet and a full SaaS management platform?
> As a test I'm doing free manual concierge this week: send 3 renewal PDFs/contracts, I send
> back a clean renewal calendar (renewal dates, cancel-by deadlines, reminders) within 24h.
> Trying to learn whether the middle ground is real or if spreadsheets are fine. Happy to share
> anonymized learnings back here.

### Recruitment message (X-flavored)

> Testing something tiny: if your startup tracks SaaS renewals in a spreadsheet and
> Torii/Zylo is overkill, I'll turn 3 renewal PDFs into a renewal calendar
> (dates + cancel-by deadlines + reminders) within 24h, free. Manual test. DMs open.

Rules: no spam, no cross-post blasts, no fake traction, no automation claims.

## 9. Measurement framework

Signal ladder (behavior > words; likes/views never count):
- STRONG: multi-doc submissions; "keep this updated?" asks; recurring-monitoring requests;
  unprompted payment/pricing questions; referrals.
- EMERGING: clear interest + sample/non-sensitive info, workflow understood, participation thin.
- WEAK: conceptual agreement, no material, discussion-only, workflows satisfactory.
- ZERO: reasonable distribution, no participation.

Pricing probe (post-delivery only, never forced): "Would you pay for this to stay updated
automatically each month/year?" Record unsolicited interest, budget language, objections,
current spend. interest ≠ WTP ≠ payment.

Competitor/failure-mode learning per conversation: current tool + likes/dislikes +
why-no-switch + what-would-switch + would-you-add-another-system (tests suite-bundling,
low-frequency, and fourth-system-rejection failure modes from prior shortlists).

Retention probe: "Want this maintained continuously, or was once enough?" One-time cleanup
≠ recurring workflow; only the second supports SaaS.

$100 MRR math (illustrative, NOT validation): 4 × $29 / 2 × $49 / 2 × $59 — final assessment
must add acquisition difficulty, churn, support burden, extraction cost, calendar/email infra,
and privacy/compliance load.

Success (advance): real participation + repeat/maintenance asks + credible WTP + no free-tool
knockout. Kill triggers: agreement without documents; sheets good enough; incumbents preferred;
one-time-only need; trust barrier dominates; no WTP.
