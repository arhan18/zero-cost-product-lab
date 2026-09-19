# Technical decisions — Scenica (decision log; challenge in architecture-review.md)

1. D1 over Turso: one database, co-located with Workers; add Turso only on measured need.
2. Magic-link auth over passwords: fewer secrets, faster build, adequate for V1.
3. Queues over cron/inline: all AI/media async with retry/refund semantics.
4. Sandbox-origin previews + CSP + DOMPurify: generated code never runs in app origin.
5. Nano-default edit routing: edits are the highest-frequency op; keep them ~$0.005.
6. No V1 video-gen: heaviest cost line; stills + CSS/SVG/sequences first (revisit capped V1.5).
7. GSAP/ScrollTrigger as scroll system: mature, free (all plugins), documented — over bespoke.
8. Frame sequences as primary cinematic technique: deterministic, portable, exportable.
9. Design-token CSS over Tailwind in generated sites: deterministic output control.
10. Credits + hard caps, no unlimited tiers: economics before generosity.
