# IMPLEMENTATION

Operating workflow (not system policy). FIRST and ONLY workflow allowed to write application code. Turns the approved blueprint into product code, exactly ONE phase per run: PHASE → IMPLEMENT → TEST → INSPECT → FIX → VERIFY → MEMORY UPDATE → STOP. Never build the whole application. Foundation stays frozen; no deploys, no spend.

## Entry gate

All required, else STOP (never invent a missing document): validation BUILD or PUBLIC-EVIDENCE-SUPPORTED · PRD.md · Architecture.md · Rules.md · Design.md · Phases.md · architecture-implementation-planning completed · architecture-review passed · pre-coding audit passed · no unresolved blockers. (Experiment-track builds run under `workflows/experiment-track.md` build rules with the experiment brief standing in for PRD/Phases at experiment scope — never full-product scope.)

## Step 1 — Load project context

Read PRD, Architecture, Rules, Design, Phases; implementation-plan, technical-decisions, database, api, security, testing, deployment, environment; requirements-audit, architecture-review; relevant SEO artifacts. If Memory.md exists, READ IT FIRST. If not, create it now (Step 2) — implementation is beginning.

## Step 2 — Initialize Memory.md

Create `products/<slug>/Memory.md` ONLY NOW: product, current phase, completed phases, current objective, important decisions, important constraints, known bugs, unresolved questions, next action, relevant files changed. Concise — never the codebase.

## Step 3 — Phase selection

Select ONLY the next incomplete phase from Phases.md. Skip only if explicitly optional, a dependency changed, or a documented decision supersedes it. Unclear phase → STOP and explain; never invent scope.

## Step 4 — Phase contract

Restate: PHASE GOAL, SCOPE, FILES LIKELY AFFECTED, DEPENDENCIES, ACCEPTANCE CRITERIA, TESTS REQUIRED, KNOWN RISKS. Check against PRD, Architecture, Rules, Design — conflict with higher priority → STOP.

## Step 5 — Ponytail pre-code review

Does it need to exist? Already implemented? Browser/platform/stdlib/existing-dependency solvable? Simpler implementation sufficient? No unnecessary packages, abstractions, utility layers, state systems, API layers, components, services. Never simplify away security, accessibility, correctness, validation, error handling, privacy, data integrity.

## Step 6 — Implementation strategy

VERTICAL SLICE per phase where practical: DATABASE → DOMAIN LOGIC → API/SERVER → UI → TEST → VERIFY. Every increment usable.

## Step 7 — Design skill orchestration (need-based only, never all at once)

Registry statuses from SKILL-REGISTRY.md apply — rejected skills are not invoked:

- frontend-design (INSTALLED) → visual implementation guidance
- design-taste-frontend (REJECTED — nonexistent; do not invoke; use frontend-design)
- ui-ux-pro-max (DEFERRED — UX patterns; import only if phase needs it)
- high-end-visual-design (DEFERRED — premium art direction when appropriate; incumbents preferred)
- anti-ui-slop (REJECTED — nonexistent; prevention covered by frontend-design + checklist-design)
- impeccable (OPTIONAL — critique and polish; project-local only)
- web-design-guidelines (INSTALLED) → interface quality
- checklist-design (INSTALLED) → design QA
- Emil motion skills (REFERENCE ONLY — paid course, never a dependency) → motion quality principles
- Motion / Animate UI / Motion Primitives (VERIFIED / adopted-with-caveat / DEFERRED) → interaction implementation
- GSAP → advanced choreography only; Lenis → special scroll only
- Ponytail (rule enforced; install DEFERRED) → code simplification

## Step 8 — Design-source rule

Design.md is the source of truth — never independently redesign while coding. Legitimate UX problem found → document it, check conflict with Design.md, update the requirement deliberately, then implement. No silent drift.

## Step 9 — Component implementation

Existing components, shadcn/ui, project primitives before new components. New components need a real reason; no duplication; no Button2/CardNew/ModalV2 patterns.

## Step 10 — Database implementation

Only structures in database.md: constraints, relationships, authorization boundaries, justified indexes, timestamps, ownership. Never frontend-only access control. No speculative tables.

## Step 11 — API / server implementation

Only contracts in api.md, each with validation, authorization, error handling, rate limiting where required, idempotency where required, safe logging. No undocumented endpoints.

## Step 12 — Auth

Only required authentication per Architecture.md, Rules.md, security.md. Trusted libraries/primitives; never custom crypto.

## Step 13 — Email

Resend + React Email architecture only — never a second mail service. Validate template, trigger, recipient, sender, failure handling.

## Step 14 — Payments

Only defined billing architecture. Test success, failure, webhook, subscription state, cancellation where applicable. Frontend payment state is never authoritative.

## Step 15 — AI features

Defined AI architecture only, enforced in this order — never call an expensive provider before checking allowance: (1) entitlement check, (2) usage/credit check, (3) request validation, (4) rate limits, (5) model routing, (6) provider call, (7) usage recording, (8) credit deduction, (9) failure handling. Input/output limits, timeouts, retries, cost controls, quotas, abuse controls, fallbacks where required. Never hardcode secrets. Track cost assumptions against `templates/ai-economics/AI-ECONOMICS.md`.

## Step 16 — Error / empty / loading states

Every user-facing feature implements relevant loading, empty, success, error, disabled, unauthorized, limit, offline states. Never leave states for later invention.

## Step 17 — Responsive implementation

Mobile, tablet, desktop per Design.md — never shrunk desktop. Verify navigation, forms, tables, dialogs, actions, touch targets, text wrapping.

## Step 18 — Accessibility implementation

Semantic HTML, keyboard, focus, labels, accessible states, contrast, reduced motion, screen-reader support where needed — continuously, not at the end.

## Step 19 — Motion implementation

Approved strategy only. Before animating ask what it communicates. No decorative spam, excessive scroll/parallax/springs. Respect prefers-reduced-motion.

## Step 20 — SEO implementation

Approved strategy only on public pages: title, description, canonical, metadata, structured data, sitemap, robots, OpenGraph, internal links, semantic HTML. No unapproved SEO pages.

## Step 21 — Test after each meaningful change

Typecheck, lint, unit, integration, build as appropriate. Never postpone all testing to the end.

## Step 22 — Playwright browser QA

For completed user-facing functionality: rendered page, navigation, forms, states, responsive, keyboard, focus, console errors, primary workflow; screenshots when useful. SOURCE CODE IS NOT THE FINAL TRUTH. THE BROWSER IS.

## Step 23 — Visual review

Significant frontend phases via web-design-guidelines + checklist-design (+ impeccable only if adopted): spacing, hierarchy, typography, consistency, responsiveness, generic patterns, decoration excess, visual bugs, inaccessible states. Stop at acceptance criteria — never endless polish.

## Step 24 — Performance check

Measure what matters (bundle, images, fonts, JS, layout shift, latency, animation cost). No evidence-free optimization.

## Step 25 — Security check

Per phase relevance: authentication, authorization, validation, secrets, injection, XSS, CSRF where applicable, rate limits, uploads, webhooks, API keys, sensitive logs.

## Step 26 — Phase acceptance

Every acceptance criterion (Phases.md + PRD): PASS / FAIL / BLOCKED / NOT APPLICABLE. Never "mostly done."

## Step 27 — Phase completion

Complete only when: implementation done, tests pass, browser verified, accessibility reviewed, performance/security checked where relevant, acceptance passes, no critical blockers.

## Step 28 — Memory update

Record phase completed, files changed, architecture/design decisions, tests, known bugs, unresolved issues, next phase. Concise.

## Step 29 — Phase report

Write `products/<slug>/phase-reports/phase-XX.md`: objective, work completed, files changed, tests, browser verification, design QA, accessibility, performance, security, acceptance criteria, known issues, next phase.

## Step 30 — STOP

After ONE phase: STOP. Never auto-continue. Next phase needs a new invocation. Deliberate anti-runaway constraint.

## Step 31 — Phase failure

Never silently advance. Record failure, root cause, attempted fixes, unresolved blocker, affected files, next recommended action. Phase stays BLOCKED until genuinely resolved.

## Step 32 — Scope change

Requirement wrong → never silently change the product. Write `products/<slug>/scope-change.md`: original requirement, discovered issue, evidence, proposed change, affected documents, consequences. Major changes need human approval; minor clarifications that preserve intent may be documented and applied.

## Step 33 — New dependency

STOP before adding. Evaluate necessity, license, maintenance, cost, bundle impact, security, alternatives. Ponytail applies. Update dependency-audit.md. Proceed only if justified.

## Step 34 — New service

STOP. Evaluate $0 feasibility, free limits, privacy, reliability, lock-in, alternatives. No paid infrastructure without human approval.

## Step 35 — Final pre-phase report

Before coding output: PHASE, GOAL, FILES LIKELY TO CHANGE, ACCEPTANCE CRITERIA, RISKS, DEPENDENCIES, TEST PLAN. Then implement.

## Definition of Done (per phase)

Requirements satisfied · code works · typecheck passes · lint passes where configured · relevant tests pass · browser flow passes · accessibility/design/security reviewed · performance reviewed where relevant · Memory.md updated · phase report written.

## Final project handoff (after FINAL phase)

Full release process: full build, full test suite, Playwright critical flows, responsive, accessibility, performance, SEO, security, legal checklist, design checklist, Ponytail review, deployment verification. Write `products/<slug>/release-report.md`. A code merge is not a launch.

## No automatic launch

After final implementation: STOP. Launch requires the separate launch workflow.

## Final report per run

Product · phase · work completed · files changed · dependencies added · tests · browser QA · design QA · accessibility · performance · security · acceptance result · Memory.md status · blockers · next phase. Never auto-continue.
