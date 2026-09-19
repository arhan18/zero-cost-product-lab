# Architecture — Scenica (bounded MVP)

## 1. System (text diagram)

Browser builder (React SPA on Pages) → API Worker → [Jobs queue → Generation Worker]
→ R2 (assets) + D1 (state) → Preview renderer (sandboxed) → Publish (Pages/R2 + custom domains)
→ Stripe webhooks → credit ledger. No giant LLM call: staged pipeline with artifacts per stage.

## 2. Application flow

POST /projects → brief → plan artifact → design-system lock → section jobs (parallel, capped)
→ media jobs → validation → render → preview URL → edit (targeted diff) → publish.

## 3. Stack (each with reason)

- Cloudflare Pages (builder + marketing + published sites): $0 start, global CDN, preview deploys.
- Workers + Queues (API + generation orchestration): $0 start, retries, per-job timeouts.
- R2 (assets/exports): $0.015/GB-mo, free egress (2026-09-13 pricing).
- D1 (relational state): generous free tier (5M reads/day, 100k writes/day).
- Stripe (billing + webhooks): industry standard, metered-billing support.
- Resend + React Email (transactional): 3,000 free/mo.
- Models via API (no training, no vendor lock-in): mid-tier for plans, nano-class for edits.
  Exact routing: ai-economics.md. No committed vendor until slice tests output quality.

## 4. Project structure

apps/web (builder+marketing) · workers/api · workers/generate · packages/renderer
(deterministic schema→HTML) · packages/scenes (scene system) · packages/export (ZIP/HTML).

## 5. Modules

brief→plan, design-lock, section-gen, media, validator, renderer, preview-sandbox, publish,
credits/ledger, billing, export, observability. Dependency direction: gen → artifacts → render;
billing/ledger independent of generation logic.

## 6. Frontend

React SPA; builder canvas + preview iframe (sandboxed, separate origin); optimistic UI for
edits; version timeline. No framework in GENERATED sites (vanilla + progressive enhancement).

## 7. Backend

REST + webhooks; auth sessions; background jobs for all AI/media (never inline in request);
idempotency keys per job; per-user concurrency caps.

## 8. Database (V1 minimal — full list: database.md)

users, workspaces, projects, project_versions, generations(+artifacts), assets, deployments,
domains, credit_ledger, subscriptions. Media_jobs/pages/sections/tokens as JSON artifacts
inside generations until volume justifies tables.

## 9–10. APIs / external services

Internal REST (versioned /v1); Stripe (verified webhooks); model APIs (key rotation, per-key
quotas); Resend. Ceilings recorded 2026-09-13; over-ceiling behavior: queue + notify, never
silent failure.

## 11. Authentication

Email + magic link (fewer passwords to manage); sessions httpOnly; workspace scoping;
generated preview isolation (see security.md). No enterprise SSO in V1.

## 12. Data flow / retention

Brief → artifacts → render → R2/D1. User uploads validated + scanned; published sites public
by design; deleted projects purge assets within 30 days. No private content in logs.
