# OPPORTUNITY VALIDATION

Operating workflow (not system policy): converts a BUILD card from Idea Discovery into a decision-grade product opportunity. Begins AFTER Idea Discovery verdicts BUILD — BUILD means "enter this workflow," never "start coding." Foundation stays frozen; this file only executes existing gates and templates. No coding, no deploys, no purchases.

## Purpose — the 12 questions

1. Is the problem real? 2. Who exactly has it? 3. How painful? 4. How frequent? 5. What do they use now? 6. Why are current solutions inadequate? 7. Would they plausibly pay? 8. Can we reach them? 9. What exact wedge? 10. Can one person build and maintain it? 11. Can it reach $100 MRR? 12. What could kill it?

Output ends with exactly one of: **BUILD / PUBLIC-EVIDENCE-SUPPORTED / INVESTIGATE / PIVOT / KILL**. Never use CUSTOMER VALIDATED unless actual direct customer evidence exists. (Track routing: RESEARCH-classified cards proceed here in full; EXPERIMENT-classified cards use `workflows/experiment-track.md` instead unless escalated; HYBRID cards run the experiment first.)

## Input

A BUILD card from `research/ideas/` (opportunity, audience, pain evidence, initial score, $100 MRR math, solo-maintainability, AI-margin check where applicable, source evidence). Do NOT modify the original card — create a new validation record: `research/ideas/<slug>/` holds the four output files; the original `<slug>.md` card stays untouched.

## 7-pass validation

- **PASS 1 — PROBLEM DEPTH:** exact problem, frequency, severity, recurrence, urgency, who, where, triggers.
- **PASS 2 — CUSTOMER DEPTH:** primary/secondary customer, buyer vs user, decision maker, segment, company size, technical sophistication. Prefer a narrow initial customer.
- **PASS 3 — CURRENT WORKFLOW:** spreadsheets, manual work, email, existing software, scripts, agencies, internal tools, workarounds. A manual workaround is a competitor.
- **PASS 4 — COMPETITIVE LANDSCAPE:** direct/indirect competitors, substitutes, incumbent pricing, reviews, complaints, gaps, onboarding, switching friction, sentiment. Explain WHY CURRENT USERS ARE NOT SATISFIED — never a feature list.
- **PASS 5 — WILLINGNESS TO PAY:** price complaints, alternative requests, manual payments, budget talk, switching behavior, "too expensive" threads, cheaper/simpler requests. Distinguish PRICE COMPLAINT from ACTUAL WILLINGNESS TO PAY — one never implies the other.
- **PASS 6 — DISTRIBUTION:** where users are; realistic $0 reach (X, Reddit, IH, communities, GitHub, SEO, niche forums, newsletters, outreach, integrations, marketplaces, existing audiences). Name the most realistic FIRST acquisition channel.
- **PASS 7 — KILL TEST:** actively hunt reasons NOT to build — saturation, switching cost, price ceiling, support/infra cost, weak retention, regulation, non-urgent pain, inaccessible distribution, copyable wedge, impossible $100 MRR math. Record negative evidence.

## Outputs (four files in `research/ideas/<slug>/`)

### validation.md (19 sections, every major statement tagged FACT / INFERENCE / HYPOTHESIS / UNKNOWN)

1. Original opportunity · 2. exact problem · 3. target customer · 4. current workflow · 5. pain evidence · 6. frequency · 7. severity · 8. existing alternatives · 9. why alternatives fail · 10. willingness-to-pay evidence · 11. distribution opportunities · 12. technical feasibility · 13. $0 feasibility · 14. $100 MRR feasibility · 15. solo-maintainability · 16. AI-margin if applicable · 17. risks · 18. contradictions · 19. unknowns.

### competitors.md

Per important competitor: name, URL, customer, positioning, pricing, key features, strengths, weaknesses, complaints, onboarding, distribution, switching friction, likely moat. Then: WHAT CAN WE DO THAT THEY DON'T? — "more features" rejected as differentiation without evidence.

### customer.md

PRIMARY USER, PRIMARY BUYER, SECONDARY USER — then job-to-be-done, trigger, workflow, frustration, desired outcome, current workaround, buying trigger, objections, willingness-to-pay evidence, acquisition channel. One narrow initial ICP — never bare "small businesses" / "creators" / "developers."

### decision.md

- **WHY THIS PRODUCT SHOULD EXIST** — differentiation from: underserved customer, better workflow, better economics, unique distribution/data/integration, simpler experience, faster outcome, narrower specialization. "Better UI" / "AI-powered" / "cheaper" rejected without evidence.
- **MVP** — CORE JOB, INPUT, PROCESS, OUTPUT; then MUST HAVE / SHOULD HAVE / LATER / EXPLICITLY DO NOT BUILD. One meaningful problem, exceptionally well.
- **$100 MRR TEST** — price × customers = $100 MRR, reachability assessed on evidence. Arithmetic is not validation.
- **SOLO-MAINTAINABILITY** — support, infra, moderation, integrations, data, sales, compliance, recurring ops. Too high → REDUCE / AUTOMATE / REPRICE / KILL.
- **AI-ECONOMICS-PROOF** (if AI core) — customer value, pricing, expected usage, AI cost, gross margin, heavy-user margin, platform/model dependency, abuse risk, BYOK opportunity, credits opportunity; expected AND worst-case usage. Uncertain → mark AI ECONOMICS UNPROVEN. Template: `templates/ai-economics/AI-ECONOMICS.md`.
- **KILL CONDITIONS** — explicit abandonment triggers (no stronger evidence, satisfied customers, unreachable audience, poor pay evidence, impossible economics, excess maintenance, no wedge, expensive infra, regulatory risk, unsustainable wedge) + REVERSAL CONDITIONS for reconsideration.
- **DECISION** — BUILD (validated → Product Requirements stage, NOT coding) · PUBLIC-EVIDENCE-SUPPORTED (strongest autonomous validation passed; NOT customer-validated — see below) · INVESTIGATE (promising but UNKNOWN-heavy, research questions attached) · PIVOT (real problem, wrong product/customer/wedge) · KILL (evidence doesn't justify work).
- **EVIDENCE SUMMARY** — PRIMARY SOURCES · SECONDARY SOURCES · CONTRADICTORY SOURCES · UNKNOWN AREAS. Contradictions never hidden. If no direct user evidence exists, state explicitly: DIRECT CUSTOMER EVIDENCE: NOT AVAILABLE — then proceed on the public hierarchy below.

## Public evidence validation (default autonomous path)

Direct outreach is OPTIONAL, never a prerequisite — never block an opportunity for lack of interviews. Public evidence can satisfy validation where sufficiently strong. Rank it:

- LEVEL 1: public transaction/revenue evidence · LEVEL 2: public purchase/switching intent · LEVEL 3: repeated independent public pain · LEVEL 4: repeated public workaround/manual workflow · LEVEL 5: competitor reviews and complaints · LEVEL 6: general community discussion · LEVEL 7: AI inference. Never describe Levels 2–7 as direct customer interviews.

Require, beyond raw source count: source count + source diversity + recency + repetition + user relevance + commercial intent + contradiction search.

Strong signals (weight highest): users seeking alternatives, announcing switches, describing workarounds, asking for a specific missing solution, discussing spend, comparing competitors, publicly purchasing, founders reporting recurring demand, repeated independent complaints/requests. Weak signals: likes, views, generic praise, "someone should build this," one-off complaints.

A strong autonomous report contains: PROBLEM, CUSTOMER, COMPETITOR, SWITCHING, COMMERCIAL, DISTRIBUTION, and COUNTEREVIDENCE, plus UNKNOWN — all eight, none hidden.

## Final quality gate

One paragraph must explain: WHO has WHAT PROBLEM HOW OFTEN, WHY current solutions fail, WHY they'd pay, WHY we can reach them, WHY $0-buildable, WHY one-person-maintainable, WHY $100 MRR is reasonable. If not — never BUILD (cap at INVESTIGATE / PIVOT / KILL).

## Final report (returned, not filed)

Idea · decision · exact ICP · strongest evidence · strongest competitor · strongest differentiation · MVP · $100 MRR math · distribution channel · biggest risk · biggest contradiction · kill condition · reversal condition.
