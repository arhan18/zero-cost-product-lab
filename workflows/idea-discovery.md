# IDEA DISCOVERY ENGINE

Operating workflow (not system policy): turns a topic request into scored, verdict-carrying opportunity cards. Foundation stays frozen — this file only executes `research/idea-radar.md` using `templates/idea-brief` + `templates/opportunity-score` + `PRODUCT-GATES.md` kill arithmetic.

## Trigger

Owner says something like: "Find me 10 SaaS opportunities around creator workflows." Parse the topic + count (default 10) + mode (default BALANCED; explicit mode requests honored). Nothing else starts the engine. Mode definitions live in `research/idea-radar.md`.

## Procedure (one run, in order)

1. **Radar sweep (mode-adjusted).** BALANCED: cover boring + wedge + AI + experimental with reserved capacity for non-boring candidates. TRENDING AI: last-12-months sources (90–180 days for fast movers), adoption/requests/viral-workflow/complaint signals. CLONE + WEDGE: proven products with demand + grievance evidence, then wedge-hunt per radar spec. BORING: existing behavior unchanged. EXPERIMENTAL: viral mechanics, novel interfaces, emerging behavior. File raw signals in `research/` by source, graded.
2. **Mini 7-pass.** For each candidate: discovery → expansion (adjacent pains) → primary verification (≥2 independent sources per pain claim) → money check (who pays what today) → distribution check (where these users gather) → contradiction (who tried and failed) → blind-spot (what's still UNKNOWN). AI categories get extra freshness verification on primary sources.
3. **Radar questions.** Answer the 10 questions from `research/idea-radar.md` per candidate; unanswerable = UNKNOWN (becomes research plan, never a guess).
4. **Score.** Fill `templates/opportunity-score` rubric per candidate.
5. **$100 MRR math.** Price → customers required ($10→10, $25→4, $100→1). Name the acquisition path for exactly that many.
6. **Solo + AI checks.** Gate-11 veto preview (support/infra/moderation/compliance burden for one person) + AI-margin sketch if AI is core (per-request cost vs price, quotas or BYOK; uncertain → AI MARGIN: UNPROVEN, never auto-kill, never hidden). AI/clone candidates additionally score (evidence-backed, qualitative): trend strength, demand evidence, proven-product demand, cloneability, wedge strength, distribution, time-to-MVP, AI margin, model dependency, platform risk (LOW/MEDIUM/HIGH — defensible via workflow, distribution, data, integrations, relationships, specialization, community, UX, switching cost), commoditization risk, retention potential. Trend dependency classified DURABLE / TREND-DEPENDENT / SPECULATIVE — trend-dependent stays valid when MVP is cheap, time-to-market short, distribution available, monetization immediate, and upside justifies lifespan. Clone verdicts need EXISTING DEMAND + CLEAR DIFFERENCE + REACHABLE CUSTOMER + FAST MVP + PLAUSIBLE ECONOMICS.
7. **Verdict.** Exactly one per candidate: **BUILD** (passes scoring + math + checks — advances to Phase 02/05) · **INVESTIGATE** (promising but UNKNOWN-heavy — named research questions attached) · **KILL** (fails math, checks, or evidence — reason + what would change the verdict).

## Output

One `templates/idea-brief` card per candidate + one score row each, returned as a table:

| # | Category | Opportunity | Pain (evidence) | Price → customers | Solo/AI check | Verdict |
|---|---|---|---|---|---|---|

Category per card: BORING · AI · CLONE · CLONE + AI · EXPERIMENTAL · HYBRID.

Track per card: RESEARCH (meaningful downside if wrong) · EXPERIMENT (cheap/fast/reversible/learnable per `workflows/experiment-track.md` gates) · HYBRID (small experiment first, then Research Track if traction appears).

KILL cards stay filed with reasons (the engine learns what it over-rates). No card advances to build — BUILD means "enter the pipeline at Phase 02," nothing more.

## Rules

- Evidence grades on every claim (`FACT / INFERENCE / HYPOTHESIS / UNKNOWN / CONTRADICTORY EVIDENCE`).
- Briefs preserve sources (PRODUCT-GATES.md §11) — unsourced briefs are rejected by the engine itself.
- Count is a target, quality is the gate: 7 strong cards beat 10 padded ones; never invent a tenth.
- One run = one topic. No scope creep into PRD, architecture, or code.
