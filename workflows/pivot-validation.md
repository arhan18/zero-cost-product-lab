# PIVOT VALIDATION

Operating workflow (not system policy): tests whether a PIVOT wedge from Opportunity Validation is strong enough to enter Product Requirements. Runs AFTER `workflows/opportunity-validation.md` returns PIVOT on a real problem with an unproven wedge. Foundation stays frozen; original files stay untouched. Demand validation only — no frontend, backend, database, deploys, billing, or monitoring infrastructure.

## Core principle

Separate PROBLEM VALIDATION from WEDGE VALIDATION. A real problem does NOT validate our product. This workflow tests one thing: does THE NEW WEDGE create a meaningful reason to choose us?

## Default validation model (policy)

Default sequence: IDEA RADAR → PUBLIC DEMAND VALIDATION → COMPETITOR/SUBSTITUTE RESEARCH → WEDGE VALIDATION → ECONOMIC VALIDATION → SOLO-MAINTAINABILITY → BUILD / PIVOT / KILL. Direct outreach is an optional stronger-evidence layer — never a prerequisite, never a blocker. No rule in this file may require outreach contacts before an autonomous decision.

- A product may proceed without outreach when: (1) repeated public problem evidence, (2) clearly identifiable customer, (3) identifiable alternatives, (4) publicly supported wedge, (5) counterevidence searched, (6) plausible $0 economics, (7) plausible $100 MRR arithmetic, (8) solo-maintainability passes. A merely theoretical wedge → INVESTIGATE or PIVOT AGAIN, never BUILD.
- Decision states: BUILD · PUBLIC-EVIDENCE-SUPPORTED (strongest autonomous validation; NOT customer-validated) · INVESTIGATE · PIVOT (AGAIN) · KILL. Never CUSTOMER VALIDATED without direct customer evidence.
- Honesty: never fabricate outreach, interviews, responses, waitlists, payments, intent, testimonials, or conversion rates. Without direct user evidence, state DIRECT CUSTOMER EVIDENCE: NOT AVAILABLE and proceed on public evidence, stating the limitation.

## AI wedge questions (proposed AI wedge must answer all eight)

1. Does the customer want the product? 2. Does the customer want the workflow? 3. Does the customer care about the AI feature (vs tolerating it)? 4. Can usage be priced sustainably? 5. Can heavy usage remain profitable? 6. Is BYOK strategically useful (not merely cost-shifting)? 7. Could model costs destroy margins? 8. Could a platform absorb the capability (and what defends: workflow, distribution, data, integrations, relationships, specialization, community, UX, switching cost)? Template: `templates/ai-economics/AI-ECONOMICS.md`.

## Input

An opportunity that completed Opportunity Validation with PIVOT, plus its `validation.md`, `competitors.md`, `customer.md`, `decision.md`, and the original BUILD card. Do not modify any of them.

## Step 1 — Define the wedge

Create `research/ideas/<slug>/wedge-validation.md`. State: ORIGINAL PRODUCT IDEA · REAL PROBLEM · NEW WEDGE · TARGET CUSTOMER · TRIGGER EVENT · CURRENT ALTERNATIVES · WHY THE WEDGE SHOULD MATTER · WHAT MUST BE TRUE FOR THE WEDGE TO WORK.

## Step 2 — Wedge hypotheses

Explicit hypotheses (adapt the H1–H8 pattern, never fewer than the wedge needs):

- H1 — target customers experience the triggering problem.
- H2 — the problem creates active switching intent.
- H3 — the wedge materially reduces the customer's pain.
- H4 — the customer would choose the wedge over the incumbent.
- H5 — the proposed price is acceptable.
- H6 — migration/switching friction is sufficiently low.
- H7 — incumbents are unlikely to immediately eliminate the wedge.
- H8 — the product remains maintainable by a solo founder.

Each hypothesis carries: evidence · confidence · what would disprove it.

## Step 3 — Targeted demand test

Design a low-cost experiment. No paid advertising. Prefer targeted Reddit participation (where allowed), X outreach, direct outreach, founder communities, Indie Hackers, niche communities, public discussion replies, relevant GitHub/community conversations. Never spam. Target the exact ICP from `customer.md`.

## Step 4 — Outreach protocol

Create `research/ideas/<slug>/outreach.md`: TARGET · MESSAGE · QUALIFICATION · QUESTION · FOLLOW-UP · SUCCESS SIGNAL. Never pretend the product exists — no fake waitlists, users, testimonials, or scarcity. The purpose is learning.

## Step 5 — Success signals (defined BEFORE interpreting)

- WEAK: likes, views, generic agreement, "cool idea," complaints without action.
- MEDIUM: detailed reply, describes workflow, requests details, asks when available.
- STRONG: asks to switch, offers to test, provides current setup, agrees to migration, gives pricing preference, asks for early access, commits testing time.
- VERY STRONG: agrees to pay, payment authorization where appropriate, signs a pilot, becomes a design partner.

Likes/views are never demand validation.

## Step 6 — Decision threshold (predefined; applies only when the optional outreach layer is run)

Default: 50 highly targeted contacts per cycle, unless prior research justifies another number. Track contacts, responses, problem confirmation, switching intent, trial intent, migration interest, pricing feedback, objections, rejection reasons. Never move the threshold after seeing results; genuinely stronger small signals get documented separately.

## Step 7 — Analyze responses

Classify every response: NO PROBLEM · PROBLEM BUT LOW PRIORITY · PROBLEM BUT HAPPY WITH CURRENT TOOL · PROBLEM + INTEREST · PROBLEM + SWITCHING INTENT · PROBLEM + WILLINGNESS TO PAY. Identify recurring objections. Never cherry-pick positives.

## Step 8 — Competitor response test

Could an incumbent destroy the wedge (feature, pricing change, migration tool, free tier, acquisition, policy reversal)? Classify LOW / MEDIUM / HIGH. If one trivial change kills it, find a deeper wedge.

## Step 9 — Switching friction

Measure migration difficulty, setup time, data transfer, DNS changes, integrations, monitoring config, trust requirements, learning cost. The wedge must REDUCE friction or CREATE ENOUGH VALUE TO JUSTIFY IT.

## Step 10 — Price test

Investigate current spend, pricing pain, acceptable range, budget owner, switching cost, problem value — not just "would you pay $X?" Distinguish CHEAP from GOOD VALUE.

## Step 11 — Trust test (infrastructure/reliability products)

"Would you trust a new provider with production monitoring?" Research brand trust, uptime/support expectations, security, reliability, status history, incident handling. Never underestimate trust because implementation is easy.

## Step 12 — Decision

Exactly one: **BUILD WEDGE** (demand + wedge evidence suffice for Product Requirements) · **PIVOT AGAIN** (problem real, wedge failed) · **KILL** (neither problem nor wedge evidenced).

## Step 13 — Decision matrix

`| Signal | Evidence | Strength | Pass/Fail |` over: problem, switching intent, wedge value, price, distribution, trust, migration friction, competitive survivability, solo maintainability, $100 MRR path.

## Step 14 — Update the idea record

Never touch the original BUILD card. Create `research/ideas/<slug>/pivot-result.md`: original hypothesis, pivot, experiment, evidence, objections, result, final decision, next action.

## Environment limit (binding)

Do not fabricate outreach or user responses. If real outreach cannot be performed, produce the experiment protocol and mark all demand evidence NOT YET COLLECTED. Hypothetical validation is never real validation.

## Final report (returned, not filed)

Wedge · ICP · experiment · sample size · responses · strong/weak/rejection signals · pricing/switching/trust evidence · competitor-response risk · migration friction · $100 MRR implications · final decision: BUILD WEDGE / PIVOT AGAIN / KILL.

---

## PART B — POST-OUTREACH EVIDENCE PROCESSING

The optional stronger-evidence layer — not the default path. Runs ONLY after the human owner supplies real outreach results. If none supplied: STOP and return OUTREACH RESULTS NOT YET PROVIDED. Never imply outreach occurred; never infer results from public complaints, posts, pricing, or prior research — those are market evidence, not experiment results. Incomplete human input accepted; missing responses are never invented.

### Step 15 — Ingest real results

Create/update `research/ideas/<slug>/outreach-results.md`. Preserve RAW RESPONSE separately from INTERPRETATION — never rewrite a response in ways that change meaning. Anonymize personal information where appropriate. Expected input: contact counts, response texts, objections, positive signals, switching/pricing/migration/trial/payment signals, URLs/screenshots, call notes.

### Step 16 — Classify signals

Classify each real response: NO PROBLEM · LOW PRIORITY · CURRENT TOOL SATISFACTION · PROBLEM + INTEREST · SWITCHING INTENT · TRIAL INTENT · WILLINGNESS TO PAY · PAYMENT / PILOT COMMITMENT. Also record objections, requested features, migration/trust/pricing concerns. Generic compliments never count as demand. (This is the post-outreach taxonomy; Step 7 governed pre-outreach expectations.)

### Step 17 — Test hypotheses

Revisit H1–H8 from `wedge-validation.md`. Per hypothesis: original hypothesis · prior confidence · new evidence · updated confidence · pass/fail · remaining uncertainty. No cherry-picking; mixed evidence marked mixed.

### Step 18 — Sample quality

Report contacts, qualified contacts, responses, response rate, relevant responses, strong and very-strong signals. Judge against the frozen threshold in `outreach.md` — never against post-hoc benchmarks.

### Step 19 — Competitor response (deferred test, now executed)

Assess neutralization paths (pricing, features, migration tools, policy changes, free tier, acquisition, positioning). Classify LOW / MEDIUM / HIGH.

### Step 20 — Switching friction (from responses)

Estimate setup/migration friction, trust barriers, configuration/integration effort, switching time from what respondents actually said — never from imagination where customer evidence exists.

### Step 21 — Price evidence (from responses)

Record stated range, current spend, and switching/testing/paying willingness separately. CHEAP ≠ GOOD VALUE ≠ WILLING TO PAY; stated preference is not a purchase commitment.

### Step 22 — Final decision

Exactly one: **BUILD WEDGE** (evidence suffices for Product Requirements — NOT for coding) · **PIVOT AGAIN** (problem promising, wedge failed/modified) · **KILL** (evidence doesn't justify more work).

### Step 23 — Decision document

Create/update `research/ideas/<slug>/pivot-result.md`: experiment · sample · evidence · hypothesis results · strongest positive/negative signals · objections · pricing/switching findings · competitor-response risk · updated $100 MRR assessment · updated solo-maintainability assessment · final decision · reasoning · remaining unknowns.

### No automatic build

BUILD WEDGE means ENTER THE PRODUCT REQUIREMENTS PIPELINE. Next stage is PRD.md — never frontend implementation.
