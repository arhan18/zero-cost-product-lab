# Memory — Renewal Tracker (BUILD-FIRST)

Product: renewal radar for small technical teams (T3). State: Phase 1 built, Round 1 done.
Updated: 2026-09-13.

## Completed

- Docs: PRD.md, Architecture.md, Rules.md, Phases.md, Design.md (Round 0), requirements-audit.md (PASS, no orphans).
- Round 0: ops-console "Renewal Radar" direction (WHAT→WHEN→WHO→HOW MUCH→WHAT ACTION; calm/operational/trustworthy).
- Round 1: single-file index.html — vault hero, urgency groups, add/edit dialog, archive/delete, search/filter, CSV+ICS export, labeled sample data. Zero deps, zero network.
- QA: JS valid; add/edit/search/exports verified live; $5,700→$5,940 burn math exact; dialog focus + cancel verified; 390/768/1440 screenshots reviewed.
- REVISE Gate 1 (2026-09-13): owner flagged green-ledger reuse + no real 3D/interactive elements.
  Fixed: distinct teal radar identity + live canvas scope (sweep, urgency blips, click-to-card,
  reduced-motion static). Re-QA: blips render, click handler safe, zero network, 3 viewports.

## Decisions

- localStorage single-user (honest "stays in this browser"); ICS export = reminder path (no email engine).
- Cancel-by = renewal − notice (default 30 → UNSURE flag); urgency: overdue / act (cancel-by ≤14d) / upcoming ≤60d / later / unsure.
- ThreeUI: gallery inspected live (dark canvas, pill CTAs, mono labels, glass cards; Pro items excluded); hand-CSS adaptation (static-file constraint), no source copied.

## Known issues / limitations

- Sample data is demo-only (labeled + removable); default first-run is empty.
- No auth/multi-user, no email reminders, no PDF extraction (all explicit non-goals).
- ICS VALARM support varies by calendar app (standard feature, acceptable).

## Next

AWAITING HUMAN PASS (Gate 1). On PASS → Phase 2/3 (reminder logic verify + export polish) + Round 2 (Watermelon/shadcn).
