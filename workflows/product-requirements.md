# PRODUCT REQUIREMENTS

Operating workflow (not system policy): converts a validated opportunity (BUILD or PUBLIC-EVIDENCE-SUPPORTED from the validation workflows) into five precise specification documents an AI coding agent can implement without inventing scope. Foundation stays frozen. No code, no deploys, no spend.

## Gate 0 — Validation status

Verify the decision is BUILD or PUBLIC-EVIDENCE-SUPPORTED. If INVESTIGATE, PIVOT, PIVOT AGAIN, or KILL: STOP and return PRODUCT REQUIREMENTS BLOCKED — VALIDATION STATUS INSUFFICIENT. No implementation requirements are generated. (HYBRID-classified experiments that earned traction enter here with their experiment evidence attached; the brief does not replace validation evidence.)

## Inputs (read-only)

Original idea card · opportunity validation · competitors · customer analysis · decision · public-demand research · wedge validation · master research findings · relevant benchmark patterns · `templates/product-docs/` templates. Never overwrite source research — the five documents are new specifications derived from evidence, every important claim tracing back to it.

## Step 1 — Product thesis

PRODUCT NAME (temporary if needed) · TARGET CUSTOMER · CORE PROBLEM · DESIRED OUTCOME · CORE VALUE PROPOSITION · WHY NOW · WHY THIS PRODUCT · WHY THIS WEDGE · WHY USERS WOULD CHOOSE IT. Every important claim traces to research.

## Step 2 — ICP

One narrow initial ICP: user, buyer, company/team size, technical sophistication, current tool/workflow, trigger event, pain, desired outcome, buying trigger, major objection. Never bare "small businesses" / "creators" / "developers."

## Step 3 — Job to be done

WHEN / I WANT / SO THAT — plus CURRENT WORKFLOW and DESIRED WORKFLOW. Improve the underlying job, don't add features.

## Step 4 — Core product loop

INPUT → PROCESS → OUTPUT → USER DECISION / ACTION → REPEATED VALUE. No clear loop → STOP and mark PRODUCT LOOP UNCLEAR until clarified from existing evidence.

## Step 5 — MVP boundary

MUST HAVE / SHOULD HAVE / LATER / EXPLICITLY NOT BUILD. One meaningful problem. YAGNI/Ponytail: include a feature only if it supports core outcome, required trust, required workflow, required monetization, or required compliance — never because competitors have it.

## Step 6 — User stories

Minimum set covering the MVP. Each: actor, action, expected result, reason. No story farms.

## Step 7 — Acceptance criteria

Objective, observable outcomes per MVP capability (user can create X; system stores Y; user receives Z; failure state displays A; action completes within B where measurable). Never "works well" / "looks good" / "fast."

## Step 8 — Product states

Per important feature: INITIAL, LOADING, EMPTY, SUCCESS, ERROR, PARTIAL, DISABLED, UNAUTHORIZED / OFFLINE / LIMIT REACHED where relevant. Frontend agents must never invent states later.

## Step 9 — Edge cases

Only relevant ones: invalid input, duplicates, timeouts, network failure, deleted resources, expired sessions, rate limits, quotas, permissions, external API failure, payment failure where relevant.

## Step 10 — Product non-goals (mandatory)

WHAT THE FIRST VERSION WILL NOT DO — grounded in research and competitor analysis to prevent scope creep.

## Step 11 — Competitive position

Primary competitor, strongest alternative, why users choose them, our wedge, our differentiation, what we deliberately do NOT compete on. No permanent-moat claims without evidence.

## Step 12 — Monetization (provisional)

Target price, pricing unit, free tier / trial only if justified, usage limits, customer count for $100 MRR. AI products add: AI operations, usage assumptions, credit model, plan entitlements, limits, AI economics, heavy-user behavior, BYOK policy, fallback behavior (per `templates/ai-economics/AI-ECONOMICS.md`). Pricing remains provisional until actual product/market evidence exists.

## Steps 13–16 — Derive the five documents (from `templates/product-docs/`, filled ONLY from the evidence above; no invention)

- **Step 13 — PRD.md:** thesis, ICP, JTBD, loop, MVP boundary, stories, acceptance, states, edge cases, non-goals, position, monetization, constraints, metrics, assumptions, evidence paths.
- **Step 14 — Architecture.md:** smallest architecture delivering the MVP: stack with reasons, structure, modules, frontend/backend shape, database + schema sketch, APIs, auth, data flow, deployment, security boundaries, free-tier limits with dates.
- **Step 15 — Rules.md:** the product's local constitution — required/preferred/prohibited libraries, conventions, error handling, validation, security, accessibility, design, dependency (Ponytail ladder), AI behavior, never-invent list, human-approval triggers.
- **Step 16 — Design.md + Phases.md:** Design — concept through anti-patterns per the template, benchmark-informed, never copied. Phases — smallest executable order (core task before polish), each with objective, tasks, dependencies, output, acceptance, verification, completion state.

## Step 17 — File placement

Write exactly five files to `products/<slug>/`: PRD.md, Architecture.md, Rules.md, Design.md, Phases.md. Memory.md is NOT created — it begins only after implementation starts.

## Quality gate

An independent read must confirm: every MVP capability has acceptance criteria; every feature has states; non-goals are explicit; no requirement lacks an evidence trace; no invented users, integrations, prices, or claims. Fail → revise, never proceed.

## Final report (returned, not filed)

Product name · ICP · core loop · MVP scope + non-goals · $100 MRR math · five documents filed · strongest evidence · biggest remaining unknown · readiness: READY FOR IMPLEMENTATION / NEEDS CLARIFICATION (with questions).
