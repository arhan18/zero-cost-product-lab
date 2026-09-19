# ARCHITECTURE + IMPLEMENTATION PLANNING

Operating workflow (not system policy): turns product requirements into an implementation-ready engineering plan. Begins ONLY after validation (BUILD or PUBLIC-EVIDENCE-SUPPORTED) + completed Product Requirements + relevant SEO/distribution planning. Produces a technical blueprint — never application code. Foundation stays frozen; no deploys, no spend.

## Inputs (read-only)

`products/<slug>/` PRD.md, Architecture.md, Rules.md, Design.md, Phases.md — plus where relevant: requirements-audit, SEO strategy, query-map, public-demand research, competitors, validation, wedge-validation, master synthesis, registry entries. Never silently modify source research.

## Gate 0 — Validation

Status must be BUILD or PUBLIC-EVIDENCE-SUPPORTED (HYBRID experiments enter with traction evidence). INVESTIGATE / PIVOT / PIVOT AGAIN / KILL → STOP. No implementation plan is created.

## Step 1 — Architecture challenge

Challenge Architecture.md before accepting it (Ponytail): is every component PRD-required; what can be removed; what can platform/browser/single-service replace; can it stay single-process; can the DB stay simple; can jobs/realtime/caching/integrations be avoided or deferred; can auth/storage/observability simplify? Write `architecture-review.md`, classifying each decision REQUIRED / USEFUL / OPTIONAL / UNJUSTIFIED. Remove or defer the unjustified.

## Step 2 — Final stack

FRONTEND, BACKEND, DATABASE, AUTH, EMAIL, STORAGE, PAYMENTS, SEARCH, ANALYTICS, OBSERVABILITY, HOSTING, DNS, CRON/JOBS, EXTERNAL APIS, AI MODELS, BROWSER TESTING. Prefer lab $0 defaults (React/Next.js, TypeScript, Tailwind, shadcn/ui, Motion, Cloudflare, Turso, Resend, React Email, Playwright) — never by default alone; every technology needs a reason.

## Step 3 — Cost check

Per external service/dependency: purpose, free tier, current cost assumption, expected usage, post-limit behavior, alternative, why needed. Product stays $0 upfront. Unverifiable pricing → LIMIT NOT YET VERIFIED, never invented.

## Step 4 — Dependency audit

Per MVP dependency: package, purpose, license, necessity, alternatives, risk, maintenance, bundle/performance impact. Classify CORE / OPTIONAL / REMOVE. Ponytail applies; duplicates collapse to one.

## Step 5 — Project structure

App/routes, components, features, hooks, lib, server/backend, database, API, email, tests, assets, styles, config — proportional to the project. No arbitrary directories, empty abstractions, utils dumps, or speculative modules; every major directory has a reason.

## Step 6 — Module boundaries

Per module: responsibility, inputs, outputs, dependencies, public interface, data access, tests. No cycles, no giant modules, no premature framework abstractions.

## Step 7 — Database design

Only MVP data. Per table/entity: name, purpose, fields, types, required/optional, primary key, indexes, relations, constraints, lifecycle, deletion behavior. Plus timestamps, ownership, tenant boundaries, unique constraints, soft-delete only when necessary. No speculative tables.

## Step 8 — Database security

Per entity: WHO can READ / CREATE / UPDATE / DELETE. Multi-user → ownership/tenancy boundaries; public → exactly-what-is-public. Never rely on frontend restrictions for authorization.

## Step 9 — API contracts

Only required endpoints/actions: method/action, route, request, response, validation, errors, auth, rate limiting, idempotency where needed. No API layer for its own sake — server actions/functions win when simpler.

## Step 10 — Authentication

Determine whether auth is actually required. If yes: signup, login, logout, session, password reset, verification, social-only-if-justified, protected routes, authorization. Trusted primitives only; no custom crypto; no unneeded auth features.

## Step 11 — Email architecture

Per email type: trigger, recipient, sender, template, retry, failure behavior. Resend + React Email where appropriate — never a second email system.

## Step 12 — Payments

Only if MVP-required: provider, products/prices, checkout, success, failure, webhook, subscription state, cancellation, refund, portal-if-necessary. $0-upfront provider selection; no billing complexity before validation demands it.

## Step 13 — AI architecture

If AI is core: model, provider, prompts, input/output limits, retries, timeout, cost controls, quotas, abuse prevention, caching, fallbacks, observability, substitution — plus AI gateway, provider abstraction only where justified, model routing, usage metering, credit ledger where required, entitlement checks, cost tracking, provider fallback, secret management. No abstraction layer for a single model call that doesn't justify it (Ponytail: simplest architecture that still protects economics). Compute estimated cost per successful user action vs customer price. Uncertain → AI-MARGIN-PROOF: UNVERIFIED, never hidden. Full spec: `templates/ai-economics/AI-ECONOMICS.md`.

## Step 14 — External integrations

Per integration: why required, auth, credentials, API limits, failure modes, fallback, retries, rate limiting, data ownership, lock-in, free-tier dependency. Nothing before the MVP needs it.

## Step 15 — Background jobs / cron

Only if required (email, imports, monitoring, cleanup, reports, notifications): trigger, frequency, idempotency, retry, failure handling, duplicate prevention, observability. Else document NO BACKGROUND WORKERS REQUIRED.

## Step 16 — File / storage design

Only if required: types, max size, ownership, access model, public/private, naming, deletion, validation, malware/abuse, provider. No storage otherwise.

## Step 17 — Realtime

Default: explicitly reject websockets, realtime DBs, streaming. If genuinely needed: define the exact requirement and smallest implementation.

## Step 18 — Error model

System-wide strategy: validation, auth, not-found, permission-denied, rate-limit, external-service, database, timeout, unexpected errors — each with user message, logging, retry, recovery. Never expose secrets or internals.

## Step 19 — Security architecture

Threat-oriented checklist for the actual product: auth, authorization, validation, injection, XSS, CSRF where relevant, rate limiting, secrets, uploads, webhooks, external APIs, database access, logs, sensitive data, abuse, account enumeration, dependency risks. Proportionate to actual risk.

## Step 20 — Observability

Minimum useful telemetry: app errors, failed requests/jobs, payment failures, external API failures, critical workflow completion, uptime. Never an observability platform.

## Step 21 — Analytics

Only metrics answering product questions (activation, core action, retention, conversion, usage, errors, churn). No unnecessary personal data; privacy-conscious analytics preferred.

## Step 22 — SEO / public page architecture

From `workflows/seo-organic-distribution.md`: classify pages PUBLIC / AUTHENTICATED / INDEXABLE / NOINDEX. Support sitemap, metadata, canonical, structured data, OpenGraph, internal linking. Never leak private application data through SEO requirements.

## Step 23 — Design implementation map

Per major Design.md requirement: component, page, states, responsive behavior, motion, accessibility, test requirement (e.g. responsive navigation → Navigation component → desktop/tablet/mobile/keyboard/open/closed states → Playwright).

## Step 24 — UI component inventory

FOUNDATION (typography, colors, spacing, icons) · PRIMITIVES (buttons, inputs, modal, dropdown, tooltip, toast) · PRODUCT COMPONENTS (domain-specific) · LAYOUT (navigation, shell, sidebar, content). No component without a real reuse requirement.

## Step 25 — Motion implementation map

Per nontrivial animation: purpose, trigger, duration, easing, reduced-motion behavior, library. CSS/native → Motion → specialized → GSAP/Lenis when justified. No motion on every component.

## Step 26 — Responsive plan

Mobile, tablet, desktop (large where relevant): navigation changes, stacking, density, tables, forms, interaction differences, touch targets. Never scaled-down desktop.

## Step 27 — Accessibility implementation plan

Per major component: semantic element, keyboard/focus behavior, labels, states, contrast, reduced motion.

## Step 28 — Test strategy

Pyramid with purpose: UNIT / INTEGRATION where meaningful; END-TO-END for critical workflows; VISUAL for critical interfaces; ACCESSIBILITY for release-critical UI. Never tests for coverage numbers.

## Step 29 — Acceptance test matrix

`| Requirement | Test | Tool | Expected Result |` — every critical PRD requirement mapped to a test.

## Step 30 — Playwright plan

Critical flows (landing, signup, login, onboarding, primary workflow, settings, billing if applicable, logout, error states) across desktop, mobile, and keyboard where important. No irrelevant paths automated.

## Step 31 — Data migration

Greenfield → document NO EXISTING USER MIGRATION. Else: source, target, transformation, validation, rollback, failure handling.

## Step 32 — Environment / secrets

Development, preview, production: variables, secrets, public vars, service credentials. Never hardcode secrets; `.env.example` with no real values.

## Step 33 — Deployment architecture

Build, deployment, database deployment, environment setup, DNS, email, migrations, rollback. Simplest viable path.

## Step 34 — Local development

Prerequisites, install, environment/database/seed setup, dev/test/build commands. No guessing required.

## Step 35 — Phase implementation plan

Translate Phases.md into executable units, each with: exact goal, files/modules affected, prerequisites, tasks, acceptance criteria, tests, expected end state, rollback where meaningful. Independently verifiable phases — never PHASE 1 — BUILD THE ENTIRE APP.

## Step 36 — First build order

Default: foundation → data model → critical backend/domain logic → core UI → core workflow → integration → monetization → polish → SEO/public pages → QA. Adjust per product; never polish before the core workflow proves out.

## Step 37 — Vertical slices

Prefer one complete user outcome (database → backend → UI → test → verify), then expand. Reduce uncertainty first.

## Step 38 — Risk-first planning

Top technical risks (unreliable APIs, AI margins, migration, browser compat, file processing, large data, realtime, webhooks, dependencies, performance). Prototype the highest-risk assumption early; never spend ten phases on low-risk UI while core uncertainty sits untested.

## Step 39 — Definition of Done

Requirements satisfied · critical tests pass · browser flows pass · accessibility reviewed · performance measured · SEO reviewed · security reviewed · design reviewed · code simplified · legal complete · deployment verified · rollback understood.

## Step 40 — Pre-coding final audit

Cross-check before implementation is allowed: PRD vs Architecture; Architecture vs Rules; Rules vs Design; Design vs Phases; Phases vs Acceptance; Acceptance vs Tests; SEO vs Public Pages; Security vs Data Model; Pricing vs Billing; AI Costs vs Pricing; Solo-Maintainability vs Architecture. Each conflict: FIXED, DEFERRED WITH REASON, or ESCALATED FOR HUMAN DECISION.

## Output files (`products/<slug>/`, blueprint only)

Architecture.md (updated) · implementation-plan.md · technical-decisions.md (DECISION/REASON/ALTERNATIVES/TRADEOFF/COST/REVERSIBILITY — prefer reversible under uncertainty) · dependency-audit.md · database.md · api.md · security.md · testing.md · deployment.md · environment.md · architecture-review.md. No application code. No Memory.md yet.

## Final quality gate

Complete only if: stack defined · dependencies justified · architecture minimal · database/API/auth/email/payments/AI-economics defined as needed · security defined · SEO/public architecture defined · testing + Playwright defined · environment/secrets/deployment defined · phases executable · acceptance mapped · top risks known · Ponytail review complete.

## Final report (returned, not filed)

Product · final stack · architecture summary · rejected choices · dependency count/categories · database/API/auth summaries · integrations · AI economics · security/testing/Playwright/deployment summaries · phase build order · highest risks · unresolved decisions · confirmation: no application code written. Never touch unrelated projects, global OpenCode config, or money.
