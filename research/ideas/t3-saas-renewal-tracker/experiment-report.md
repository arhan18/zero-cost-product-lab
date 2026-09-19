# Experiment Report — T3 SaaS Renewal Tracker (concierge, pre-build)

Date: 2026-09-13. Track: EXPERIMENT. Phase: pre-build concierge — no SaaS designed or built,
no PRD/architecture, no deployment, no Research Track entry.
Related: `concierge-experiment.md` (offer, workflow, privacy, recruitment, measurement).
Original BUILD card untouched (lives in 2026-09-13 discovery report; no card file existed or created).

## Hypothesis

Small technical teams (~2–10 people) want a middle ground between spreadsheets and heavyweight
SaaS management for renewals/contracts/cancellation windows; concierge workflow
(documents → dates → calendar → reminders) tests problem + workflow + participation.

## Target

Technical founders, sysadmins, IT/admin owners, eng managers, ops-subscription owners in small
teams. Enterprise procurement explicitly out of scope.

## Offer

"Forward me 3 renewal PDFs. I'll turn them into a clean renewal calendar with key dates and
alerts within 24 hours." Manual, free, no automation claims. Clarity-tuned variant filed in
`concierge-experiment.md`.

## Channels & distribution status

- Lightweight public-demand re-verification DONE (Reddit r/ITManagers Mar 2026, r/sysadmin
  May 2026, r/SaaS Feb 2026, r/ITManagers Jun 2024; BetterCloud/Torii/Vendr secondaries;
  Cadence-for-Jira Jul 2026 launch noted). Prior Jan 2026 threads reused as valid.
- Recruitment copy PREPARED (Reddit/X/IH variants). Nothing published — posting requires the
  owner. Status: **OWNER ACTION REQUIRED**.
- Document intake NOT operational — owner-controlled inbox/vault required before real PDFs are
  accepted. Status: **OWNER ACTION REQUIRED**.

## Participation

**NO DIRECT CUSTOMER EVIDENCE YET.** Zero outreach performed (no posting authorized); zero
documents received; zero conversations held. No users, payments, or results exist or are claimed.

## Workflow observations

No concierge runs completed. Workflow defined and ready: renewal-record schema (9 fields +
uncertainty flags), triple output (table + CSV + ICS with 60/30/7-day reminders), 24h turnaround.

## Current alternatives (re-verified)

Spreadsheets/M365/Apps Script (modal), Notion/Airtable stopgaps, Zylo/Torii/Vendr (heavy),
and a crowded free tier: Tooly License Tracker, G2 Track, Torii free, Cadence-for-Jira (new),
Remindax, one r/SaaS free tool. Gap reframed: not "nothing exists" but "nothing small teams
adopt and keep updated" — concierge tests adoption/maintenance.

## Recurring-value evidence

None yet. Retention probe ("maintained continuously, or once enough?") defined for first runs.

## WTP evidence

None yet. Post-delivery probe defined; interest ≠ WTP ≠ payment.

## Strongest contradiction

Free-tool density (incl. Jul 2026 Cadence launch) + same-thread spreadsheet defenders
("The spreadsheet is fine") + May 2026 "40 people so nothing crazy" (tool openness, but also
satisfaction with cheap). The middle ground must beat free, not just heavy.

## Privacy considerations

Manual human reads PDFs; aggregates-only reporting; no repo commits of documents; minimal
retention with deletion after delivery; upfront participant notice. Intake blocked until owner
provides a controlled inbox/vault — recorded as a hard requirement, not worked around.

## Evidence classification

**WEAK** — public-thread evidence is real and fresh, but zero direct customer behavior exists.

## Decision

**PAUSE** (not kill): experiment is fully prepared but cannot produce participation evidence
until the owner authorizes distribution and intake. Kill/iterate criteria are defined and
untriggered; nothing about the idea is disproven.

## Recommendation (cheapest next action)

Owner posts the Reddit discussion-first message in ONE live renewal thread and opens one
receiving inbox; agent runs the first 3 concierge deliveries manually and reports behavior.
Estimated cost: $0 + a few hours. Do not build anything before 5 document-submissions.

## Reclassification note (2026-09-13, BUILD-FIRST update)

Per the BUILD-FIRST lab update (SYSTEM.md §17b-i), `t3-saas-renewal-tracker` is reclassified as a
**BUILD-FIRST candidate, subject to the normal human gate**: repeated public pain (FACT),
identifiable users, tiny-MVP-shaped problem, ~$0 path, unpaid reachability. Its concierge
experiment above remains valid as an OPTIONAL learning step (cheap discussion-first probing before
code), not a prerequisite to building. PAUSE stands until the human gate decides: run concierge
first, or approve a bounded 1–7-day build-first bet directly.
