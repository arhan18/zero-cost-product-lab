# Idea Brief — Serverless Log-Tail + Retention

- Category: BORING. Date: 2026-09-12. Run: balanced-25.
- Pain (FACT: Vercel KB + community threads): hobby-tier logs vanish after ~1hr with no persistence; Log Drains to Datadog are overkill for one app.
- Pay signal (FACT): Logtail $5/mo, Datadog $15/host — paid category, thin low end.
- Wedge: $9/mo 7-day log retention + tail UI + error alerts for solo serverless apps.
- $100 MRR: $9 × 12 users. Acquisition: dev communities, "vercel logs retention" SEO, deploy-platform adjacencies.
- Solo check: PASS (log drain ingest + search + alerts; storage metered). AI: none.
- Competition: Logtail/Datadog (price/complexity above); nothing (incumbent habit).
- Verdict: **BUILD**. Rank: TBD synthesis.
