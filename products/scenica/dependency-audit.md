# Dependency audit — Scenica (each justified; unlisted rejected per Ponytail)

- react + react-dom (builder SPA): component state for canvas/properties/timeline UI.
- Cloudflare workers/vite plugins: deploy + local dev for Pages/Workers.
- stripe (server SDK): billing, metered top-ups, verified webhooks.
- resend + @react-email/components: transactional mail (3k free/mo).
- dompurify (+ jsdom server-side): generated-HTML sanitization gate.
- Model SDKs (max 2 providers): generation; hidden behind internal adapter.
- gsap (generated sites + builder previews): scroll choreography; free incl. Club plugins.
- three (generated sites, Tier A only): true-3D sections; lazy-loaded, never base bundle.
- jszip (export service): ZIP assembly server-side.
- vitest + playwright (dev): unit/integration + browser QA.
Explicitly OUT: Tailwind in output (token CSS instead), heavy 3D frameworks in builder,
CMS packages, analytics suites, email-marketing SDKs. Re-audit on every addition.
