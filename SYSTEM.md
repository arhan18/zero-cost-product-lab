# ZERO-COST PRODUCT LAB — SYSTEM

The operating system for researching, designing, building, testing, launching, and improving multiple real products at zero upfront cost.

This document is the single source of truth for how the lab works. Every product, research task, and build inside this workspace follows it. Where any other file conflicts with this document, SYSTEM.md wins.

---

## 1. What this lab is

A reusable workspace (a "lab") for running many small product experiments end to end. It provides:

- A **fixed 28-phase pipeline** with explicit gates.
- **Templates** so every product produces the same evidence in the same place.
- **Research folders** organized by evidence source.
- **A skill registry** controlling which third-party skills are allowed in.
- **Decision/experiment/evidence archives** so lessons carry over between products.

The unit of work is the **product experiment**, not the app. The lab gets better as products pass through it.

## 2. What this lab is NOT

- NOT a company. No legal entity, no team structure.
- NOT a place to build one giant startup. The goal is a portfolio of small products.
- NOT a demo factory. A product that no real user can find or pay for is a failed experiment regardless of how polished it looks.
- NOT a place where impressive prototypes substitute for evidence.
- NOT a magic box. The pipeline does not decide; the human owner does. The pipeline forces decisions to be made explicitly and cheaply.

## 3. The $0 constraint

Total upfront budget: **$0 / ₹0**.

- No paid APIs, paid SaaS, paid design systems, paid AI subscriptions, or paid infrastructure.
- Only open-source software, free tiers, local tooling, browser-native capabilities, and existing free services.
- **Money may be spent only after a product generates revenue.** Fees are allowed only as a percentage of that revenue (see Payment Policy §25).
- Anything, however convenient or impressive, that requires real money before revenue is out of scope. The honest answer when hitting a paywall is "do it differently or defer it," not "spend."

## 4. Product philosophy

- Build products that solve a **real problem for real people**, then get them **in front of real users** and charge real (small) money.
- Distribution beats polish. A rough tool that 100 people find is worth more than a beautiful tool nobody sees.
- Small, focused, monetizable beats vague and ambitious. One painful task, done plainly, is a product.
- Products may be SaaS, developer tools, utilities, micro-products, APIs, web tools, creator tools, research tools, or workflow products — but every one must solve a real problem.
- If a product cannot be described in one sentence as "helps [specific person] do [specific task]", it is not ready.
- Prefer products with shallow maintenance: fewer moving parts, less data, longer shelf life.

## 5. Research philosophy

Research is **evidence-driven**. The goal is to reduce uncertainty before building, not to produce a pretty document.

### 5.1 Triangulation rule

Never treat a single source as proof:

- one tweet
- one Reddit comment
- one blog post
- one AI answer
- one competitor's claim

Strong conclusions require **triangulation across independent sources**. For any important market decision, research across multiple independent sources. If the sources disagree, that is data (see grading below), not an error.

### 5.2 Evidence grading

Every research output must tag each claim as exactly one of:

| Grade | Meaning |
|---|---|
| **FACT** | Directly observed or from a primary source (a forum post authored by a target user, a support thread, official usage stats). |
| **INFERENCE** | Reasonable conclusion built from facts, but not directly observed. |
| **HYPOTHESIS** | A guess about the world we intend to test, not yet supported. |
| **UNKNOWN** | Genuinely not known. Say so. Do not fill gaps with assumptions. |
| **CONTRADICTORY EVIDENCE** | Sources disagree. Record both sides and what resolving them would require. |

Labels must appear literally (`FACT:`, `INFERENCE:`, etc.) so the agent and the human can see the confidence of every claim at a glance. A claim labeled as FACT with only one non-primary source is a mislabel.

### 5.3 Anti-validation rules (see also §12)

- No assumption of demand. "People are asking Google/Reddit/HN for this" is a hypothesis until proven.
- No counting our own hype. Reviews of our own landing page are not validation.
- No importing enthusiasm from other people's startup threads. Adjacent hype is a hypothesis.

## 6. Design philosophy

- **Never default to generic AI aesthetics.** Generic means fonts like Inter/Roboto with purple-on-white gradient cards.
- **Establish visual direction before implementation** (Phase 09) — the vibe, the one thing a user remembers.
- **Typography is intentional.** Distinctive display + refined body, sized and weighted with purpose.
- **Spacing is systematic.** A scale, applied consistently — not ad-hoc margins.
- **Color has a reason.** A dominant color plus a sharp accent; every use must be justified.
- **Motion communicates hierarchy or feedback.** Entrance stagger for the hero moment, hover/tap feedback for interaction, nothing gratuitous.
- **Product UI appears early** when a visual can replace a paragraph.
- **Forbidden (always):** fake social proof, fake logos, fake metrics, testimonials from invented people, invented press quotes. See §12.

## 7. Engineering philosophy

- Prefer the **smallest architecture that works**.
- **Reuse before rewriting.** **Native browser capability before dependency.** **Existing dependency before new dependency.**
- Avoid speculative abstractions, premature microservices, unnecessary state management, and unnecessary backend infrastructure.
- Keep code understandable to a single solo developer. Keep maintenance burden low.
- Correctness, security, accessibility, validation, error handling, data integrity, and privacy are **never** sacrificed for brevity.
- One painful task done plainly is better than five features done elegantly.

## 8. Launch philosophy

- A launch is an **event with a distribution plan**, not "the code is deployed."
- Prefer small, fast, embarrassing launches over large, slow, perfect ones. A product nobody has seen for two months has not launched.
- Go/no-go decisions are human gates (Phase 24). Shipping is not a surprise — it is a decision.
- Launch when the core promise works for at least one early user, then iterate publicly.
- "Launch day success" is measured in early real users and real feedback, not in applause.

## 9. Distribution philosophy

- Distribution is **designed before the product is finished**, not after.
- The default distribution channels for a zero-budget lab: search (SEO), indie-hacker forums, Product Hunt, Hacker News, Reddit, GitHub, X, and developer communities — chosen per audience.
- The product must be findable by the person it helps: correct naming, an honest one-line pitch, and at least one channel the target already reads.
- **Real distribution beats clever writing.** Being on the right forum beats a perfect post on the wrong one.
- No buying ads, no paying for placement, no paying influencers. Zero budget means earned distribution or none.

## 10. Revenue goal

- Portfolio target: **at least $100 MRR** collectively, across multiple small products.
- Each individual product is expected to contribute a small amount. Products that reach ~$10–$50 MRR and plateau are normal and acceptable; they compound.
- Revenue is the arbiter of value. If a product is used but cannot produce any revenue path after its planned post-launch window, it is a candidate for kill (Phase 28).
- Pricing appears in the product requirements and is tested early and honestly (small plans, one-time fees, or usage-based — none of which require paying anyone before revenue).

## 11. Rules for AI coding agents

1. Agents follow the 28-phase pipeline and template structure. They do not skip phases by working around them.
2. Agents never decide to spend money (see §3) or to take on any obligation that costs money.
3. Agents never fabricate evidence, validation, testimonials, metrics, or users (§12). Every factual claim in agent-written research is graded (§5.2) and sourced.
4. Agents respect the **autonomy level** of the current phase (defined per phase). Human gates are never self-overridden.
5. Agents minimize what they create (Ponytail rule, §20): understand the problem first, then write the minimum.
6. Agents never modify anything outside this workspace (§Workspace rule in README).
7. Agents record what they did and why in evidence/decisions/experiments so later sessions can trust the trail.
8. Agents verify rendered output during QA (Playwright/free browser automation, §23), never source-only.
9. When a third-party skill is needed, agents follow §15 (registry rules) before using or installing it.
10. Agents report honestly: what is FACT vs HYPOTHESIS, what is unknown, and what risks money/scope. Directness beats pleasing tone.

## 12. Rules against fake everything

**Fake validation.** No invented waitlists, no "5 people told me they'd pay" without recorded evidence, no counting signups that never happened. Validation is a logged transcript, a real email, a real signup timestamp — not a vibe.

**Fake testimonials.** No testimonials from people who do not exist or have not said them. No paraphrasing real people without their words. A testimonials section is only populated from recorded, attributed feedback.

**Fake logos.** No fabricated "trusted by" logos, no invented company names, no implied partnerships.

**Invented metrics.** No "10k users", no "99% satisfaction", no fabricated stats on landing pages, in research, or in reports. Every displayed metric must trace to a recorded measurement.

The consequence of any of these, found anywhere in the lab, is the same: the offending asset is deleted and the claim is re-verified or removed. Integrity is non-negotiable because the lab's entire value is trustworthy evidence.

## 13. Rules against overengineering

- YAGNI is enforced by default. If it is not needed by the current phase's gate, it does not get built.
- No speculative abstractions ("we'll need this later"). No framework for a click handler. No state management library for two fields.
- Any feature that survives is one that a user asked for or a real metric demanded.
- Complexity bought now is paid for in every future phase, including maintenance after launch.
- The smallest working thing that passes the gate is the definition of done.

## 14. Rules for copying patterns without copying branding

- Copying **patterns** (flows, layouts, component shapes, copy formulas, pricing page structures) is encouraged and legal.
- Copying **assets** (logos, illustrations, CSS, copy, brand names, exact layouts, color identities) is not.
- When a competitor's pattern is used, record it in the competitor analysis with the pattern noted: "pattern borrowed: newsletter-via-exit-intent, from: competitor X." Ideas are not IP; assets are.
- Never present a pattern-inspired product as affiliated with, or endorsed by, anyone else.
- Our copy must be our own words, tuned to our product and users — never a rewrite of a competitor's page.

## 15. Rules for using third-party skills

The lab does not install or trust skills blindly. Every skill must pass an inspection before it is used, and every import is recorded in `research/skill-registry.md`:

1. **Source**: repository/author and version, inspected (not just linked).
2. **License**: checked. No licence file or an unclear licence = risk flagged.
3. **Files**: what it installs and where. Project-local only where possible.
4. **Paid services**: no requirement of paid APIs or subscriptions.
5. **Scripts/hooks**: any code execution, lifecycle hooks, network calls — reviewed before first use.
6. **Global config**: must not modify global OpenCode/agent configuration.
7. **OpenCode compatibility**: verified (skill format, tool requirements).
8. **Persistence**: decision recorded in the registry table.

A skill that fails any inspection is recorded as **unapproved** and not used until resolved. Unapproved skills are never imported silently.

## 16. Rules for recording evidence

- Evidence lives in `evidence/`, keyed by product and phase (e.g. `evidence/ideas/`, `evidence/<product>/research/`).
- Every claim in research is graded (§5.2) and labeled. Every decision references the evidence it rests on.
- Screenshots, transcripts, URLs, dates, and raw numbers are better evidence than summaries. Keep the raw thing; summarize on top of it.
- When evidence is weaker than the decision needs, say so. A decision made on thin evidence must be labeled as a hypothesis-driven decision and revisited.
- `decisions/` holds dated entries: what was decided, why, what evidence, what the reversal condition is.
- `experiments/` holds scoped experiments: question, method, result, whether it changed the product.
- Absence of evidence is recorded too. "No data yet" is a valid research output and must be written as UNKNOWN.

## 17. Rules for deciding build, pivot, or kill

Decisions are made at gates with the human. The checklist:

- **Build**: opportunity score passes threshold (Phase 05) and scope is readable by one developer.
- **Pivot**: strong triangulated signals from a source we were ignoring, or a failed key assumption with an obvious cheaper variant. Pivot if: a different emphasis of the same product could reach the same user with meaningfully less effort.
- **Kill**: the product has launched, had its planned post-launch window, and shows no traction **or** no plausible revenue path **or** unpaid maintenance cost exceeds benefit.
- Kill is a success outcome. A killed product costs little and taught the lab something. A zombie product costs forever.
- Every product ships with explicit kill criteria written before development (Phase 07): the numbers that would mean "stop."

Default stance: **bias to kill.** Keep the pipeline wide, the investments shallow, and the graveyard respected.

## 17b. TWO TRACKS (operating principle)

> **Don't validate what can be tested cheaply. Don't build what is expensive to test blindly.** Research reduces expensive uncertainty; experiments convert cheap uncertainty into evidence. Optimize for learning per dollar and learning per day.

- **RESEARCH TRACK** (expensive/slow/risky/complex/irreversible): Idea Discovery → Opportunity Validation → Product Requirements → Architecture → Implementation → Launch → Growth, with all gates intact.
- **EXPERIMENT TRACK** (`workflows/experiment-track.md`): Signal → Experiment Brief → hard gates (cheap/small/understandable/reachable/learnable) → tiny MVP → launch → observe → DOUBLE DOWN / ITERATE / PIVOT / KILL / PAUSE.
- Classify every opportunity RESEARCH / EXPERIMENT / HYBRID (small experiment first, then Research Track if traction appears). Mislabeling expensive work as an "experiment" to bypass gates is forbidden; killed ideas stay killed unless reversal conditions are met.

## 17b-i. BUILD-FIRST (preferred path for suitable indie-hacker products)

> **For cheap, fast, reversible indie-hacker products, building the smallest real product is itself the first validation mechanism.** When the cost of being wrong is small, speed-to-real-user evidence beats pre-build certainty.

Three paths: **BUILD-FIRST** (default for suitable small products: signal → lightweight evidence check → build → launch → observe → charge/iterate), **RESEARCH-FIRST** (building blindly creates meaningful downside: regulated domains, significant infra/spend, money movement, comms infra, high security burden, complex integrations, large operational burden, expensive failure modes, weeks/months to useful — full validation system preserved), **HYBRID** (tiny real MVP first, deeper research only after traction warrants it — common for promising SaaS).
BUILD-FIRST pre-build bar (all must hold): credible problem/signal (repeated pain, paid competitors, workarounds, trend, dead-product demand, platform change — at least one meaningful signal, WTP proof NOT required); identifiable user; genuinely useful MVP shippable in ~1–7 days (preferably 1–3) at near-$0 upfront with bounded AI/API cost, simple reversible deployment, solo-maintainable; reachable users without paid acquisition; real-product learning exceeds another speculation round. If yes → BUILD-FIRST ELIGIBLE. Validation moves post-launch: users, repeat usage, activation, retention, payments/attempts, upgrades, referrals, requests, workflow integration, organic spread, complaints when unavailable — behavior outranks statements ("I used it and paid" beats "sounds useful"). Early payment (pilots, subs, one-time, upgrades) is a first-class signal; never manufacture pressure, never avoid charging just because it is an experiment. Concierge/manual validation is OPTIONAL — use only when genuinely fastest for expensive/unclear domains (legal, document-heavy, high-trust, costly ops); never require it merely because it exists. $100 MRR needs only a rough plausible route pre-build (e.g. 3×$49, 5×$29, 10×$15); unproven WTP never rejects a cheap bet — update economics from actual behavior once users exist. All safeguards stand unchanged: security, AI-cost gate (§12 method), legal, accessibility, architecture-where-needed, kill criteria before development, bias to kill, and the anti-bypass rule (expensive work relabeled "build-first" fails Gate 13 automatically).

## 17c. Discovery-machine principles

> **The Product Lab is a discovery machine, not a prediction machine.**

```text
RESEARCH REDUCES EXPENSIVE UNCERTAINTY
EXPERIMENTS CONVERT CHEAP UNCERTAINTY INTO EVIDENCE
TRACTION UPDATES OUR BELIEFS
INDIE-HACKER LEARNING IMPROVES OUR SEARCH STRATEGY
LUCK SURFACE AREA INCREASES OUR CHANCE OF FINDING OUTLIERS
```

**Indie Hacker Learning (advisory, never doctrine).** Study how successful indie hackers operate — problem discovery, selection, shipping speed, MVP scope, distribution, audience, monetization, iteration, killing, doubling down, pivoting, growing tiny into larger — using the founder/product corpora as primary evidence, graded FACT / OBSERVED PATTERN / INFERENCE / HYPOTHESIS. Never universalize one founder's method; never copy stacks, products, branding, pricing, niches, or tactics. Ask what underlying operating principle worked *in that context* (pain→tool→product, MVP→feedback→iterate, audience-first, workflow productization, repeated small launches for optionality, distribution advantage, dogfooding, trend timing). Recorded as learning; locally: study patterns, not prescriptions.

**Luck Surface Area (Experiment Track only).** Increase cheap, asymmetric exposures to real users: small downside + fast learning + reachable audience + asymmetric upside = experiment candidate. Rational under uncertainty when downside is small, the bet reversible, learning meaningful, distribution possible, upside materially exceeds cost, and technical/operational risk controlled. Never permission for random undisciplined builds (hypothesis, user, bounded scope/cost/AI, measurable outcomes, kill conditions, and observation window still mandatory) and never justification for expensive bets. Goal: learning per dollar and per day over theoretical certainty.

**Traction overrides prediction (both directions).** Weak research + repeated organic use, return users, referrals, requests, workflow adoption, pay willingness, payments → re-evaluate upward; real behavior outranks the WEAK conclusion. Strong research + no usage, no repeat, no conversion, no engagement despite reasonable distribution → re-evaluate downward; never rationalize failure because research looked good. Post-launch behavior may outrank pre-launch research on direct conflict — weighted by sample size, user quality, distribution quality, duration, measurement quality, selection bias, novelty effects, and internal-usage contamination, and stated as WEAK / EMERGING / STRONG / DECISIVE. Kill discipline unchanged: no fabricated traction, no one-signup PMF, no likes-as-customers, no hidden contradictions, no indefinite dead experiments, no founder-favorite exemptions.

---

## 18. THE PRODUCT PIPELINE

There are 28 phases. ROMAN control column:

- **AI autonomy level:** `AUTO` = agent may proceed autonomously within the phase; `ASSISTED` = agent does the work, human reviews before carry on; `GATED` = a human decision is required, agent may propose but **must not** proceed past the gate without approval.
- **Human approval:** `required` gates are mandatory checkpoints. Everything else is optional oversight.
- Each phase lists its **required evidence** — the file(s) that must exist in `evidence/` for the phase to count as done. No evidence artifact → the phase is not done, however good the thinking was.

### 01 IDEA DISCOVERY
- **Purpose**: collect many raw product ideas without filtering.
- **Inputs**: market reading, own pain, observations, forum swims.
- **Outputs**: one-line idea cards in `research/ideas/`.
- **Required evidence**: at least the idea list; each idea tagged with source and suspicion level.
- **Quality gate**: 5+ candidate ideas; each one sentence: "helps [person] do [task]."
- **AI**: AUTO (gather and draft).
- **Human**: not required.

### 02 DEEP RESEARCH
- **Purpose**: for the shortlisted idea, understand domain, vocabulary, existing solutions, and the actual problem shape.
- **Inputs**: idea brief, trends, existing market notes.
- **Outputs**: `templates/research-report/` filled into `evidence/<idea>/research-report.md`.
- **Required evidence**: graded research report with FACT/INFERENCE/HYPOTHESIS/UNKNOWN labels and ≥3 independent sources per major claim.
- **Quality gate**: report exists, graded, and explicitly lists what remains UNKNOWN.
- **AI**: ASSISTED (deep-research skill + websearch/webfetch; heavy triangulation).
- **Human**: review the report; correct mis-graded claims.

### 03 COMPETITOR RESEARCH
- **Purpose**: map who else solves this, how they monetize, what they miss.
- **Inputs**: research report.
- **Outputs**: `templates/competitor-analysis/` → `evidence/<idea>/competitors.md`.
- **Required evidence**: per-competitor row: positioning, pricing, strengths, gaps, distribution, traffic signals; pattern-borrow notes (§14).
- **Quality gate**: ≥5 competitors or documented "none found (hearing from users is itself evidence)"; gaps are concrete, not "could be better."
- **AI**: ASSISTED.
- **Human**: not required.

### 04 CUSTOMER/PAIN RESEARCH
- **Purpose**: find and listen to the actual people with the problem, in their own words.
- **Inputs**: research + competitor reports.
- **Outputs**: `templates/customer-profile/` → `evidence/<idea>/customers.md`; raw excerpts filed under `research/{reddit,x,indie-hackers,...}/`.
- **Required evidence**: quoted primary sources (real users) with links/dates; pain stated in user vocabulary.
- **Quality gate**: pain is triangulated (≥2 independent primary sources); we can name who the first 10 users might be.
- **AI**: ASSISTED.
- **Human**: read a sample of the primary quotes and confirm they are real people, not noise.

### 05 OPPORTUNITY SCORING
- **Purpose**: collapse research into one explicit score so ideas are compared like-for-like.
- **Inputs**: research, competitors, customers.
- **Outputs**: `templates/opportunity-score/` → `evidence/<idea>/opportunity-score.md`.
- **Required evidence**: scored rubric (pain strength, reachability, competition, building cost, monetization, maintenance) and a written recommendation.
- **Quality gate**: BUILD/KILL/PARK label with one-line justification.
- **AI**: ASSISTED.
- **Human**: **required** — approve or overturn the score. First gate.

### 06 PRODUCT REQUIREMENTS
- **Purpose**: define what the product is: promise, users, scope, edge cases, pricing, success signal.
- **Inputs**: opportunity score, research.
- **Outputs**: `templates/product-requirements/` → `evidence/<idea>/prd.md`.
- **Required evidence**: one-sentence promise; user stories; explicit non-goals; pricing plan + payment policy check (§25); success metric definition.
- **Quality gate**: PRD is buildable by one developer in one pass with zero ambiguity on the core flow.
- **AI**: ASSISTED.
- **Human**: not required (owner may edit).

### 07 MVP SCOPE LOCK
- **Purpose**: shrink the PRD to the smallest shippable core; write kill criteria.
- **Inputs**: PRD.
- **Outputs**: locked scope statement; kill criteria; deferred-features backlog.
- **Required evidence**: scope doc listing the promised MVP, deferred extras, and the numbers that mean "stop."
- **Quality gate**: MVP is cut to the painful-task-only core; deferrals are written down, not lost.
- **AI**: ASSISTED.
- **Human**: **required** — sign the scope. Second gate.

### 08 UX ARCHITECTURE
- **Purpose**: decide screens, flows, hierarchy, and the happy path before any pixels.
- **Inputs**: PRD, scope lock.
- **Outputs**: `templates/ux-architecture/` → `evidence/<idea>/ux.md` (flow diagrams, key states: empty/loading/error).
- **Required evidence**: user flow for the core task; skeletons of key screens; error/edge states listed.
- **Quality gate**: a new user can complete the core promise from memory after reading the flow.
- **AI**: ASSISTED.
- **Human**: not required.

### 09 VISUAL DIRECTION
- **Purpose**: choose the one aesthetic personality the product commits to.
- **Inputs**: ux architecture, target audience.
- **Outputs**: visual direction statement: tone, type pair, palette rationale, the "one thing users remember."
- **Required evidence**: written direction; reference screenshots from `research/design-benchmarks/` (not our clone).
- **Quality gate**: direction is specific enough that a stranger could build a distinct page from it; generic directions ("clean modern") are rejected.
- **AI**: ASSISTED (frontend-design, ui-ux-pro-max when approved).
- **Human**: **required** — approve the direction. Third gate.

### 10 DESIGN SYSTEM
- **Purpose**: turn direction into tokens + core components, tuned to this product.
- **Inputs**: visual direction.
- **Outputs**: `templates/design-system/` → `evidence/<idea>/design-system.md` + tokens in code.
- **Required evidence**: color/type/spacing/radius/shadow tokens; button/input/nav/card/modal specs; component patterns customized to our language (never pasted unchanged, §14).
- **Quality gate**: tokens are used by real components; no hardcoded hex in components.
- **AI**: ASSISTED.
- **Human**: not required.

### 11 TECHNICAL ARCHITECTURE
- **Purpose**: choose the smallest architecture that delivers scope.
- **Inputs**: scope lock, design system.
- **Outputs**: `templates/technical-architecture/` → `evidence/<idea>/architecture.md`.
- **Required evidence**: stack choice, data model, deploy target, free-tier records (§24 limits), explicitly documented trade-offs.
- **Quality gate**: a static page or serverless function could do it → no server; no speculative services. Everything justified against the free-tier list.
- **AI**: ASSISTED.
- **Human**: not required.

### 12 BACKEND / DATABASE
- **Purpose**: build only the data/storage the product actually needs.
- **Inputs**: architecture.
- **Outputs**: working schema, seed, API surface as needed.
- **Required evidence**: schema matches scope; migrations runnable; free-tier limits recorded.
- **Quality gate**: no tables/endpoints outside scope; everything deployable on free tier.
- **AI**: ASSISTED.
- **Human**: not required.

### 13 FRONTEND
- **Purpose**: implement the product UI from the design system.
- **Inputs**: ux, design system, architecture.
- **Outputs**: working pages.
- **Required evidence**: components adapted to the product (not stock pastes); responsive at target breakpoints.
- **Quality gate**: core happy path works locally; every screen in UX doc exists.
- **AI**: ASSISTED.
- **Human**: not required.

### 14 MOTION / POLISH
- **Purpose**: add purposeful motion and finish — communicate hierarchy and feedback only.
- **Inputs**: frontend.
- **Outputs**: motion spec + implementation (entrance stagger, hover/tap feedback, none gratuitous).
- **Required evidence**: motion plan tied to hierarchy; reduced-motion respected.
- **Quality gate**: every animation has a reason; nothing decorative-only without rationale.
- **AI**: ASSISTED.
- **Human**: not required.

### 15 SEO
- **Purpose**: make the product findable by the people who search for the problem.
- **Inputs**: research vocabulary, product naming, landing copy.
- **Outputs**: keyword targets, page-level meta, sitemap, robots.
- **Required evidence**: keyword research (search volume signals as INFERENCE), meta + content plan, canonical structure.
- **Quality gate**: the search term a target user would type maps to a page we ship.
- **AI**: ASSISTED (seo skill when approved).
- **Human**: not required.

### 16 ACCESSIBILITY
- **Purpose**: meet a baseline every user deserves.
- **Inputs**: frontend.
- **Outputs**: a11y checklist run: keyboard, focus, contrast, labels, reduced-motion, screen-reader pass.
- **Required evidence**: completed checklist with per-item status; any known gaps listed.
- **Quality gate**: no critical a11y failures; keyboard-only flow completes core task.
- **AI**: ASSISTED.
- **Human**: not required.

### 17 PERFORMANCE
- **Purpose**: confirm acceptable load and interaction on free infra.
- **Inputs**: frontend + deployed preview.
- **Outputs**: measured Core Web Vitals (or documented approximation) + fixes.
- **Required evidence**: numbers recorded, with date and environment.
- **Quality gate**: LCP/INP sane on target devices; no obvious render-blocking bloat.
- **AI**: ASSISTED.
- **Human**: not required.

### 18 BROWSER QA
- **Purpose**: verify the real rendered pages, not the source code.
- **Inputs**: deployed preview (Vercel/Cloudflare live URL or localhost).
- **Outputs**: Playwright script set (or equivalent free automation) covering core task + critical edge states.
- **Required evidence**: browser-run test results with screenshots at breakpoints.
- **Quality gate**: real page renders match UI spec; core flow passes in-browser; screenshots stored in `evidence/<idea>/qa/`.
- **AI**: ASSISTED.
- **Human**: not required.

### 19 DESIGN AUDIT
- **Purpose**: independent design pass against the system we set in phases 09–10.
- **Inputs**: screenshots + design system.
- **Outputs**: audit findings (Checklist Design audit or equivalent) + fixes.
- **Required evidence**: audit result with per-item present/partial/missing; corrected where it matters.
- **Quality gate**: no degeneracy from the approved visual direction; hierarchy holds.
- **AI**: ASSISTED (checklist-design, web-design-guidelines).
- **Human**: not required.

### 20 CODE AUDIT
- **Purpose**: catch bugs, dead code, and overengineering before shipping.
- **Inputs**: codebase.
- **Outputs**: `/ponytail-review`-style audit or equivalent; delete-list applied; tests where logic is non-trivial.
- **Required evidence**: audit log; deletions recorded; edge-case fixes noted.
- **Quality gate**: no dead abstractions left; the diff for the whole product is surprisingly small.
- **AI**: ASSISTED.
- **Human**: not required.

### 21 SECURITY REVIEW
- **Purpose**: trust-boundary safety on a zero-budget stack.
- **Inputs**: deployed app.
- **Outputs**: threat list for what the app holds; validation at all trust boundaries; secrets handling check; dependency audit (no known-vulnerable deps).
- **Required evidence**: security worksheet; recorded checks; any residual risk documented.
- **Quality gate**: no user data exposed; auth/payment paths only via verified providers; no secrets in repo.
- **AI**: ASSISTED. **Never** autonomously: choosing a payment provider, entering credentials, or changing account settings.
- **Human**: not required, but auth/payment provider selection is brought to the owner (§25).

### 22 LEGAL PAGES
- **Purpose**: the minimum honest legal surface: privacy, terms, contact.
- **Inputs**: product behaviors.
- **Outputs**: privacy notice (what data, why, processors), terms (use, no-warranty), contact identity.
- **Required evidence**: drafts written; owner review.
- **Quality gate**: pages accurately describe actual behavior (no invented data practices).
- **AI**: ASSISTED (drafts only — not legal advice).
- **Human**: **required** — owner review. Fourth gate.

### 23 DEPLOYMENT
- **Purpose**: get the product live on free infrastructure, reproducibly.
- **Inputs**: code, tests.
- **Outputs**: live URL(s); deploy record (service, plan, limits as of today, §24).
- **Required evidence**: URL + deploy notes; free-tier limits snapshot dated.
- **Quality gate**: reproducible deploy (no "works on my machine"); rollback understood.
- **AI**: ASSISTED.
- **Human**: not required.

### 24 LAUNCH
- **Purpose**: a deliberate go/no-go with a distribution plan (a draft of the Phase 25 channel plan must exist to launch).
- **Inputs**: everything above + a distribution plan draft (finalized & executed in Phase 25).
- **Outputs**: dated launch record; announcement assets (honest copy, no fake proof).
- **Required evidence**: go/no-go decision documented; distribution plan with dates and channels.
- **Quality gate**: product is findable, prices are set and legal pages live, payload is honest.
- **AI**: ASSISTED.
- **Human**: **required** — go/no-go. Fifth gate.

### 25 DISTRIBUTION
- **Purpose**: put the product in front of its target people, earned, not paid.
- **Inputs**: launch record, research audiences.
- **Outputs**: channel-by-channel actions with dates (show the tool where the problem is discussed).
- **Required evidence**: per-channel post/thread/listing with URL; engagement logged.
- **Quality gate**: ≥1 channel is where the target user already reads; no paid reach.
- **AI**: ASSISTED (drafts posts, tracks).
- **Human**: not required (content approved with owner).

### 26 FEEDBACK
- **Purpose**: capture real user responses — signals, complaints, feature asks.
- **Inputs**: live product, distribution.
- **Outputs**: feedback log (quoted, dated, sourced).
- **Required evidence**: quotes + screenshots; categorized into strengthen/fix/defer.
- **Quality gate**: feedback is real (contactable user); volume irrelevant, quality counted.
- **AI**: AUTO (collect + file).
- **Human**: not required.

### 27 METRICS
- **Purpose**: measure what the pipeline decided to measure.
- **Inputs**: success metric from the PRD.
- **Outputs**: metric trackers (usage, revenue, retention where applicable) on free analytics.
- **Required evidence**: numbers recorded weekly with dates; dashboard or table.
- **Quality gate**: no invented metrics; every number traces to a recorded event.
- **AI**: AUTO (collect + report), ASSISTED (interpret).
- **Human**: not required.

### 28 ITERATION / PIVOT / KILL
- **Purpose**: a scheduled, honest review of the product against its kill criteria.
- **Inputs**: metrics, feedback, maintenance cost.
- **Outputs**: dated decision: iterate (next scope) / pivot (new emphasis, Phases 03–07) / kill (archive).
- **Required evidence**: decision memo citing metrics + feedback + the Phase 07 kill criteria.
- **Quality gate**: decision is written, not implied; acted on within a week.
- **AI**: ASSISTED (prepares the case).
- **Human**: **required** — final decision. Sixth gate. Bias to kill unless traction is real.

---

## 19. INITIAL SKILL POLICIES

### FRONTEND

- React/Next.js + TypeScript when appropriate; Tailwind when appropriate; `shadcn/ui` as the customizable base component system; Motion for normal React animation; GSAP only when complex choreography genuinely benefits; React Bits / Motion Primitives / Magic UI / Aceternity / 21st.dev used selectively.
- **Never paste component-library demos unchanged.** Always adapt to the product's visual language (§6).
- **Design source toolbox**: ThreeUI (hero/visual foundation), Skiper UI (scroll choreography), React Bits/Magic UI (interaction polish), Watermelon UI/shadcn (functional primitives), Vengeance UI (landing sections), AnimMaster (animation utilities), Cult UI (specialized components), Refero/styles.refero.design (UX research), ShaderGradient (visual backgrounds). See `DESIGN-STACK.md` §5b and `Global-Frontend-Design-3D-Experience-Workflow.md`.
- **Creative source mixing allowed**: combine different sources when it produces a better result. Choose tools based on the design problem, not a rigid per-task mapping.
- **Source-first implementation**: when an excellent reusable source is legally permitted, integrate/copy it first, run it, review it, then customize. Do NOT rebuild from scratch before testing the original. Never copy restricted source.
- **License check required** for all external sources: license, attribution, commercial-use permission, redistribution restrictions, dependencies.
- **MCP/skill discovery before rebuilding**: check installed skills, available MCPs, existing project tools, free component sources, open-source implementations, web research — before manual implementation.
- **3D is a first-class global capability** when it earns complexity (immersive hero, spatial UI, product configurator, 3D storytelling, scroll-driven 3D, WebGL, cinematic environment). Do NOT add 3D merely because it looks impressive. Full 3D workflow: stack decision tree, asset sourcing, optimization pipeline, performance rules, mobile fallbacks, post-processing guidance — in `Global-Frontend-Design-3D-Experience-Workflow.md`.

### DESIGN

- Never default to generic AI aesthetics. Establish visual direction before implementation. Typography intentional. Spacing systematic. Color reasoned. Motion communicative.
- Product UI appears early when it communicates better than prose.
- Fake social proof, fake logos, fake metrics: forbidden (§12).

### ENGINEERING

- Smallest architecture that works. Reuse before rewrite. Native before dependency. Existing dependency before new dependency. No speculative abstractions. No premature microservices. No unnecessary state management or backend infra. Code a solo developer can hold in their head. Low maintenance burden.

## 20. PONYTAIL RULE

Before adding code, completion-check the ladder:

1. Does this need to exist?
2. Is it already in the codebase?
3. Can the standard library solve it?
4. Can the browser/platform solve it natively?
5. Is there already a dependency that solves it?
6. Can it be implemented more simply?
7. Only then — write the minimum required code.

The ladder runs **after** understanding the problem and tracing the real flow, never as an excuse to skip reading code.

Never sacrifice: security, accessibility, validation, error handling, data integrity, privacy, correctness.

This mirrors the open-source `DietrichGebert/ponytail` skill (MIT). The full plugin (modes `/ponytail lite|full|ultra|off`, `/ponytail-review`, `/ponytail-audit`, `/ponytail-debt`) is pending skill-registry approval before install (see `research/skill-registry.md`). Until then, the rule above is enforced by SYSTEM.md directly.

## 21. RESEARCH RULE

Research must be evidence-driven. Never treat one tweet, one Reddit comment, one blog post, one AI answer, or one competitor's claim as proof of market demand. Strong conclusions require triangulation (§5.1). Research outputs must distinguish FACT / INFERENCE / HYPOTHESIS / UNKNOWN / CONTRADICTORY EVIDENCE (§5.2).

## 22. DESIGN QA RULE

Every finished frontend is checked with:

1. Browser inspection (rendered DOM, not just source)
2. Screenshot review
3. Checklist Design
4. Vercel Web Interface Guidelines
5. Accessibility review
6. Responsive review
7. Performance review
8. Ponytail / code review

## 23. BROWSER QA

Plan for **Playwright MCP or an equivalent free browser automation method**. The agent must verify real rendered pages rather than trusting source code alone. Browser QA is automated where possible, scripted, and re-runnable on every iteration (Phase 18).

## 24. ZERO-COST INFRASTRUCTURE POLICY

Prefer free tiers: GitHub, Vercel Hobby, Cloudflare Pages/Workers, Supabase Free, and other genuinely free services when appropriate. **Do not assume a service stays free forever.** Record current free-tier limits in project docs whenever infrastructure is selected (Phase 11 and Phase 23). A free tier that silently disappears is a known risk — mitigation is documented in the deploy record.

## 25. PAYMENT POLICY

Payment providers are allowed only when:

- there is no upfront/monthly cost;
- fees occur only after revenue;
- the pricing (transaction %, currency, payout timing) is explicitly documented in the product's deploy/pricing record.

Choosing a provider is a human decision (§21). No prototype is wired to a real payment handle without owner approval.

CUSTOMER-FUNDED VARIABLE AI COMPUTE IS ALLOWED, BUT UNCONTROLLED AI COST IS NOT. A product may consume paid model APIs only after a customer purchase, with bounded usage, controlled exposure, and healthy margins (per-customer AND per-plan contribution math in `templates/ai-economics/AI-ECONOMICS.md`). $0 upfront for the builder is unchanged; variable customer-funded operating cost is not builder spend. Unlimited AI only with predictable usage, controlled worst case, acceptable economics, and mitigated abuse — otherwise credits + quotas + BYOK + top-ups.

## 26. PRODUCT PORTFOLIO RULE

Goal is **not one giant startup**. Target: a portfolio of small, useful, monetizable products collectively reaching **≥ $100 MRR**. Products may be SaaS, developer tools, utilities, micro-products, APIs, web tools, creator tools, research tools, or workflow products. Every product must solve a real problem (§4).

---

## 27. WORKSPACE RULE AND DIRECTORY MAP

- **Nothing outside this workspace may be modified.** No global OpenCode/agent config, no editing of skills outside `.opencode/skills/`, no external projects, no global dotfiles. This workspace is the entire lab.
- Directory map:

```
zero-cost-product-lab/
├── SYSTEM.md            <- this file (source of truth)
├── README.md            <- how the lab is used, quick start
├── Global-Frontend-Design-3D-Experience-Workflow.md <- global frontend design toolbox + 3D capability
├── DESIGN-STACK.md      <- standing design policy (benchmark-informed)
├── .opencode/skills/    <- project-local skills (registry-controlled)
├── research/            <- raw material by source + skill-registry.md
├── products/            <- one folder per product + portfolio README
├── templates/           <- reusable document skeletons per phase
├── decisions/           <- dated decisions w/ evidence + reversal condition
├── experiments/         <- scoped experiments (question/method/result)
└── evidence/            <- graded evidence artifacts, keyed by product+phase
```

## 28. PIPELINE USAGE RULES

- Phases run in order. Skipping is only allowed by reusing an earlier product's evidence, recorded as such.
- A phase is done only when its **required evidence** exists.
- Human gates: Phases 05, 07, 09, 22, 24, 28. The agent may not pass these without approval.
- Any phase costing money (≈ none, by policy) is a human decision by definition.
- Product code lives under `products/<slug>/`; product evidence under `evidence/<slug>/`; product documents follow the templates.