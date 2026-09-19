# PRODUCT-GATES

Gate system for moving ideas through the lab. Gates are the **only** way work advances from idea to build to launch. This consolidates SYSTEM.md's pipeline gates (Phases with human gates at 05, 07, 09, 22, 24, 28), Part R (validation), Part S (requirements), Part AA (human approval), and Part Z ($100 MRR portfolio). Existing SYSTEM.md gates are NOT duplicated; this doc indexes them and adds the master-update checks. Where any file conflicts, SYSTEM.md wins.

## 1. Gate index (SYSTEM.md pipeline)

Existing gates (do not duplicate — reference them; names match SYSTEM.md §18):

- **Phase 05 Opportunity Scoring** (human) — idea scored against portfolio criteria (Part Z) before ZERO research spend.
- **Phase 07 MVP Scope Lock** (human) — scope signed; kill criteria written; kill arithmetic completed (§9).
- **Phase 09 Visual Direction** (human) — direction approved before tokens/components.
- **Phase 22 Legal Pages** (human) — legal checklist done, pages live and honest.
- **Phase 24 Launch** (human) — go/no-go with distribution plan.
- **Phase 28 Iterate / Pivot / Kill** (human) — metrics reviewed, decision recorded.

## 2. Human approval required (Part AA)

Any of these = STOP and ask. (Not duplicates — they are triggers that route into the gates above.)

1. **Final product selection** (choosing the portfolio product at Phase 05).
2. **Major scope change** (mid-build scope creep beyond the frozen PRD).
3. **Pricing changes** with real money implications.
4. **External spending** (even $1 — ZERO-COST-POLICY).
5. **Major infra changes** (e.g. DB switch, paid hosting, new third-party service).
6. **Legal interpretation** (what a clause means, whether to add a document).
7. **Launching publicly.**
8. **Killing a product** (or pivoting away from a committed idea).

## 3. Product validation gate (Part R) — before building

Every serious idea passes a **validation checklist**; evidence is filed with grades:

- Customer / target (specific, reachable)
- Problem (real, frequent)
- Current workflow (what they do today, including the spreadsheet/excel workaround)
- Pain (what it costs them: time/money/risk)
- Frequency of the problem
- Alternatives (competitors + workarounds)
- Price of alternatives (how much they pay today)
- Willingness-to-pay signal (evidenced, not assumed)
- Distribution reach (can we reach 10–20 of these users)
- Differentiation (why us, why now)
- **$0 feasibility** (technical + operational with the free stack)
- Technical feasibility (buildable at $0)
- Legal/privacy concerns (Part X) — non-issue or resolvable

**Do not build simply because AI can build it.** If the checklist shows no real evidence of pain + reach → do not advance to Phase 09.

## 4. Requirements system (Part S) — before substantial code

Freeze a requirements doc (`templates/product-requirements`) with:
- Problem, customer, desired outcome
- User stories / core workflow (the happy path only to start)
- MVP scope (explicit `in / not` list)
- Non-goals
- Edge cases + all UI states (empty, loading, error, first-run, logged-out)
- Acceptance criteria (testable)
- Constraints ($0, stack, timeline)
- Success metric (the ONE metric this build moves)

## 5. Portfolio rule ($100 MRR, Part Z)

Only ideas that plausibly move a $100 MRR portfolio advance:
- A real, specific pain (not "AI wrapper" or vibes).
- **# paying customers required** should be small (e.g. 5–20 subscribers at $5–$20).
- Pricing is knowable; willingness-to-pay evidenced.
- Distribution is reachable with $0 effort patterns (SEO/X/community).
- Retention/continuing need (not a one-shot utility unless it becomes recurring).
- Zero-dollar feasible (Part U stack), low technical AND operational complexity.
- Portfolio evaluation fields: pain, customers-to-100MRR, pricing, distribution feasibility, retention, $0 feasibility, complexity. $100 MRR is a **target, not guaranteed** — stated honestly.

## 6. Legal gate (Part X)

Before anything public:
- Terms of Service, Privacy Policy, Cookie disclosure, Refund policy, Acceptable Use, data-disclosure page (what we collect/store).
- Written to describe the ACTUAL product — no fabricated legal claims, no "GDPR compliant" unless real.
- Generated from free template sources then tailored; reviewed by a human if interpreted.
- Compliance with host/provider ToS (Cloudflare, Resend, Turso) honored at all times — $0 does not exempt ToS.

## 7. Distribution gate (Part Y) — before launch

Distribution planned before the product is finished (not after):
- Primary channel chosen + first 10–20 users identified (X / Reddit / Indie Hackers / PH / HN / SEO / niche community / outreach / build-in-public / referrals / integrations / product-led loop).
- Community rules respected — **no spam**, value-first participation.
- Launch checklist per `templates/launch` completed.

## 8. Gate-07 kill arithmetic — before substantial building

Calculate what must be true for the product to justify continued work. Not forecasting — emotional-attachment prevention. Required at Phase 07 sign-off:

- Likely price → customers required for $100 MRR (e.g. $10×10, $25×4, $100×1).
- Plausible acquisition: where do those N customers come from, at what effort each?
- Retention assumption: why do they pay month 2 (recurring value, not hope)?
- Operational burden: support + infra + moderation + compliance hours per week for N users.
- Time cost: build + maintenance weeks vs. portfolio alternatives.
- Verdict: PROCEED / REDUCE SCOPE / PIVOT / KILL with the arithmetic attached.

If the numbers fail badly, kill/pivot/reduce — never keep building because code exists.

## 9. Gate-11 solo-maintainability veto

Before/during technical architecture, ask: can ONE person sustainably support users, monitor infra, fix bugs, handle integrations, moderate content, manage data, maintain dependencies, handle compliance, and operate the workflow? If not: REDUCE scope, AUTOMATE the burden, REPRICE to fund it, or KILL. Never build a product that creates an unsustainable job.

## 10. AI-margin proof — when AI is core

Superseded by §12 (AI economics gate), which is the binding version. This section remains as a pointer only: no AI product proceeds without the per-customer/per-plan contribution math, margin class, and heavy-user simulation defined there.

## 11. Sourced briefs

Every important product/research brief preserves its evidence sources (links + dates). Briefs obey the same ≥2-source rule as products — past briefs were caught misattributing founders, so brief claims are verified, never trusted.

## 12. AI economics gate

Every AI-heavy product computes, per CUSTOMER and per PLAN: REVENUE − payment fees − expected AI cost − infrastructure − email/storage − support allowance − safety reserve = EXPECTED CONTRIBUTION MARGIN (expected AND heavy-user cases). Classes: GREEN (healthy at heavy use) · YELLOW (profitable only with credits/quotas/BYOK/routing/controls) · RED (fails even with controls → KILL or redesign economics). Heavy-user simulation (LOW/EXPECTED/HEAVY/EXTREME-ABUSIVE) is mandatory; unprofitable heavy case → cap, reprice, remodel, credits, BYOK, cut, or redesign. $100 MRR alone never validates an AI product — contribution does. Method + credit/metering architecture: `templates/ai-economics/AI-ECONOMICS.md`. Final quality gate: the 13 AI questions answered (why pay, how much, included usage, exhaustion behavior, heavy-user cost/profitability, exposure caps, BYOK/credit value, repricing/provider-outage/platform-absorption fallbacks, value without unlimited AI) — else AI ECONOMICS: UNPROVEN, no implementation.

## 13. Track selection gate (Research vs Experiment)

Every opportunity is classified RESEARCH / EXPERIMENT / HYBRID at Idea Discovery. RESEARCH: meaningful downside if wrong → full gates above, no shortcuts. EXPERIMENT: all five hard gates pass (cheap/small/understandable/reachable/learnable per `workflows/experiment-track.md`) → experiment brief + build, no pre-build WTP/landscape/retention proofs required (those are post-experiment questions). HYBRID: small experiment first; Research Track entry requires traction evidence, never enthusiasm. BUILD-FIRST is the preferred path inside EXPERIMENT/HYBRID whenever SYSTEM.md §17b-i holds: `signal → lightweight check → build (1–7 days, ~$0, bounded) → launch → observe → charge/iterate/pivot/kill` instead of `signal → extensive validation → concierge → interviews → build`. Decision tree: credible signal? NO → drop. YES → cheap/fast MVP? NO → RESEARCH-FIRST. YES → reversibly cheap failure? NO → RESEARCH-FIRST. YES → users reachable unpaid? NO → HYBRID/RESEARCH. YES → BUILD-FIRST. Concierge is optional (fastest-learning domains only), never a default prerequisite. Anti-bypass: expensive/slow/risky/complex work (significant infra, costly AI/APIs, regulated domains, hard integrations, phone/SMS fleets, billing complexity, data migration, high support, weeks-to-validate, costly mistakes) MUST NOT ride the Experiment Track — relabeling to dodge gates is forbidden and fails this gate automatically.

## 14. Escalation path

Any agent blocked at one of the human gates must: record status in the product doc, propose the decision-ready summary (what, why, evidence, options), and ask. No silent bypassing.