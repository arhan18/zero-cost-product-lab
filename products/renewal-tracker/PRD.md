# PRD — Renewal Tracker (BUILD-FIRST MVP)

One-sentence promise: helps small technical teams know what software is renewing, when to act,
who owns it, and what it costs — without a spreadsheet or an enterprise platform.

## Problem

Small teams lose money to auto-renewals because the real deadline (the 30–60-day cancellation
window) hides weeks before the renewal date, and spreadsheets keyed to renewal dates miss it
(FACT: r/SaaS Feb 2026, r/ITManagers Mar 2026, r/sysadmin May 2026 threads; BetterCloud 2026:
40% track manually). Enterprise SMPs (Zylo/Torii) take real setup effort; spreadsheets decay
because updating them is nobody's job.

## Target customer

Technical founders, sysadmins, IT/admin owners, eng managers, ops owners in ~2–10-person teams.
NOT enterprise procurement, NOT finance-led SourcetoPay users.

## Desired outcome

A user adds their renewals in under 5 minutes and can answer at a glance: what renews next,
when action is required, who owns it, what it costs. They return because the list tells them
what to do this week.

## Value proposition

One honest list, urgency-sorted, with cancel-by deadlines computed — not discovered after the
charge. No discovery agents, no seat counting, no procurement workflow. Data stays in the
browser; export (CSV/ICS) keeps the user free to leave.

## Core features (MVP only)

1. Renewal records: vendor/product, renewal date, notice period → computed cancel-by deadline,
   cost + cadence, owner, notes, status (active/trial/cancelled), uncertainty flag.
2. Ops dashboard: next-action hero (nearest deadline), groups (Act now / Upcoming / Later /
   Overdue / Unsure), annual-cost total, owner list.
3. Fast add/edit form (+ delete/archive).
4. Reminder planning: per-record reminder offsets shown as dates; ICS export carries events into
   the user's own calendar. No email engine in MVP.
5. CSV + ICS export. 6. Trivial search/filter.

## Non-goals (rejected on arrival)

Procurement, negotiation, savings analysis, contract platform, invoicing, payments, SSO,
roles/permissions, AI extraction, vendor DB, SaaS integrations, Slack/Teams, approvals,
advanced reporting, multi-org, marketplace, mobile app.

## User stories

- As an admin, I add a renewal in <60s so the deadline is tracked.
- As an owner, I see this week's actions on open so nothing slips.
- As a founder, I see annual burn + per-vendor cost so renewals become decisions.
- Empty/first-run: guided empty state + optional sample data (clearly labeled demo).
- Repeat: editing a date recomputes urgency instantly; export moves data out freely.

## Acceptance criteria

- Add/edit/delete/archive round-trips with localStorage persistence across reload.
- Cancel-by = renewal date minus notice days (default 30 when unknown → flagged UNSURE).
- Urgency groups correct at boundaries (overdue / ≤notice window / ≤60d / later / unsure).
- CSV + ICS download and re-import sanely (ICS opens in Google/Apple Calendar).
- Zero network requests; zero console errors; works offline from file:// or static host.

## Constraints

$0 upfront; single static file; no backend/accounts; modern browsers; 1–7-day build.
Privacy: all data local; nothing leaves the browser.

## Success metrics (post-launch)

Renewals created/user, records maintained over 30 days, repeat visits, exports, payment
attempts/payments. Kill: users add once and never return; maintenance question answers "once enough."
