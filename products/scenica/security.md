# Security — Scenica (content-generation product: security NOT optional)

- Auth: magic-link sessions, httpOnly cookies, workspace isolation on every query.
- Uploads: type/size validation, re-encode images, no SVG-script passthrough, R2 private-first.
- SSRF: media-fetch allowlist + no internal/metadata endpoints + timeouts + size caps.
- Generated-code sandbox: preview/publish on isolated origin; iframe sandbox attributes;
  strict CSP on generated sites; DOMPurify server-side; no secrets/env in output; external
  calls in generated code restricted to declared asset CDNs.
- Prompt injection: brief treated as untrusted; system instructions never echoed; generated
  content scanned for exfiltration patterns (webhooks, unknown forms) before publish.
- Keys: provider keys server-side only, rotation runbook; BYOK encrypted at rest (V2).
- Billing: Stripe webhook signature verification, idempotent ledger writes, no client-side
  price authority. Rate limits per user/IP; abuse alarms on gen bursts.
- Pre-launch: threat review of publish pipeline + pentest-lite of auth/billing paths.
