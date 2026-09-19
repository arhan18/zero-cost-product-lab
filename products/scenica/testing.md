# Testing — Scenica

Unit (validators, credit math, schema transforms) · integration (pipeline stage-to-stage,
Stripe webhooks with fixtures, export round-trip) · generation validation (schema conformance,
budget checks, snapshot diffs for selective edits) · browser/Playwright (builder flows,
preview isolation, 390/768/1440) · visual regression on preset grammar · a11y (keyboard,
focus, contrast, reduced-motion) · security (sandbox escape attempts, XSS payloads, SSRF
probes) · billing (reserve/settle/refund, failed payments, top-up expiry) · deployment
(preview→production→rollback) · media failure (retry/refund paths). Quality loop doubles as
continuous generation testing (render → inspect → critique → revise).
