# Rules — Renewal Tracker build

1. Scope lock = PRD.md §6 + non-goals; anything else rejected on arrival, even if easy.
2. Single static file; zero dependencies; zero network requests; system fonts only.
3. No backend, no auth, no email engine, no AI extraction — ICS export is the reminder path.
4. Dates: cancel-by = renewal − notice days (default 30 → UNSURE flag). Day-boundary bugs are
   P0 (use date-only math, no timezone-shifted parsing).
5. Money: store minor units avoided — plain numbers, 2dp display; totals = active records only.
6. Honesty: sample data labeled demo + removable; no fake traction/pricing/automation claims.
7. Every phase: test in real browser at 3 viewports, update Memory.md, report, stop.
8. Design pipeline gates: no round advances without explicit human PASS.
