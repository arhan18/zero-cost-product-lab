# Architecture — Renewal Tracker (BUILD-FIRST MVP)

Smallest architecture that delivers PRD scope. Unlisted dependencies rejected (Ponytail).

## 1. System architecture

Single static `index.html` (HTML+CSS+vanilla JS, no build, no framework, no backend).
Runs anywhere: file://, any static host; later Cloudflare Pages free tier (owner action).

## 2. Application flow

Load → read localStorage → compute urgency per record → render groups → user adds/edits
(form) → recompute → persist → export (CSV/ICS generated client-side as Blob downloads).

## 3. Technical stack

HTML/CSS/JS only — reason: 1-file scope, $0, offline-capable, solo-maintainable.
System fonts — reason: zero webfont dependency. No npm, no bundler, no database server.

## 4. Project structure

products/renewal-tracker/: PRD.md, Architecture.md, Rules.md, Phases.md, Design.md,
requirements-audit.md, Memory.md, index.html. (Later: experiment-report.md, distribution.)

## 5. Major modules (in-file)

store (localStorage CRUD + schema v1), dates (cancel-by math, day-boundary handling),
render (groups + hero + totals), form (add/edit dialog), export (CSV/ICS builders),
sample-data (clearly-labeled demo loader, removable).

## 6. Frontend architecture

Server-rendered n/a; DOM render on state change; no router; errors inline in form;
empty state first-class. Reduced-motion respected; no animation library.

## 7. Backend architecture

None. Reminder delivery = ICS import into the user's own calendar (explicit, honest).

## 8. Database

localStorage key `rt_renewals_v1` (array of records with stable ids). Export = backup story.
No migrations yet; schema versioned for future import.

## 9–10. APIs / external services

None. Zero network requests by design.

## 11. Authentication

None (single-user local). Honest framing in UI: "your data stays in this browser."
Multi-user/accounts deferred to evidence-driven iteration.

## 12. Data flow

User → DOM → localStorage. Export → Blob download. Nothing transmitted. Delete = removal
from localStorage; "clear sample data" removes demo records only.
