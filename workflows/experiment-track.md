# EXPERIMENT TRACK

Operating workflow (not system policy): cheap, fast, reversible product experiments. Purpose is NOT to prove an idea is already a business — it is to build something small enough to learn from real usage instead of predicting everything beforehand. Foundation stays frozen; Ponytail, skill statuses, kill history, and honesty rules all still apply.

## When this track applies (ALL must be reasonably true)

MVP in ~1–3 days · ~$0 upfront · no meaningful paid infra · controllable variable costs · no major regulatory burden · no dangerous expensive-API dependency · no significant migration/setup burden · publicly launchable quickly · observable feedback/usage within 7–14 days · cheap and reversible. Failing any gate below → SIMPLIFY / RESEARCH / KILL (never auto-force into Research Track, never bypass it by mislabeling — see safeguards).

## Flow

Signal → Experiment Brief → hard gates → Design Pass → Sequential Design Pipeline (Round 0 → R1 → Gate 1 → R2 → Gate 2 → R3 → Gate 3 → R4 → Gate 4 → R5 → DESIGN-READY) → tiny MVP → launch → observe → learn → DOUBLE DOWN / ITERATE / PIVOT / KILL / PAUSE.

Cheap experiment ≠ cheap design: technically tiny work still gets a deliberate product-specific design pass. Small implementation, deliberate design. Never design from an empty canvas when strong reusable knowledge/components/resources exist — but never force one visual style, and never blindly copy code, designs, or proprietary assets.

BUILD-FIRST is the default path here (SYSTEM.md §17b-i): for eligible opportunities the smallest real
product IS the first validation — `signal → lightweight evidence check → build → launch → observe →
charge/iterate`, not `signal → extensive validation → concierge → interviews → build`. Pre-build bar:
credible signal (WTP proof not required) + identifiable user + useful MVP in ~1–7 days at ~$0 with
bounded costs + unpaid reachability. Concierge/manual validation is optional (genuinely fastest-learning
domains only). Post-launch, behavior outranks statements; early payment is a first-class signal.

## Step 1 — Signal

Personal frustration · encountered-while-building friction · spreadsheet workflows · repeated public complaints (Reddit/X/HN/IH) · limited-but-popular tools · ugly-but-used tools · repeated workarounds · open-source improvement requests · emerging tech/trends · simplifiable demanded products · multi-tool workflows · founder-dogfoodable ideas. A signal is not proof of business. Classify: PERSONAL PAIN / PUBLIC PAIN / WORKAROUND / EXISTING DEMAND / TREND / PRODUCT GAP / HYBRID.

## Step 2 — Experiment brief

Write `templates/product-docs/EXPERIMENT-BRIEF.md` (problem, target user, one-sentence value, smallest useful version, why interesting, assumption under test, cheap-build plan, launch channel, success/kill signals, time + money budgets). No giant PRD, no full Architecture docs, no exhaustive research unless a specific uncertainty demands it.

## Hard gates (before coding — all five or no build)

- Gate A — Cheap enough? ~$0 upfront to build and test.
- Gate B — Small enough? First useful version in ~1–3 days.
- Gate C — Understandable? Value in one sentence.
- Gate D — Reachable? In front of users without paid acquisition.
- Gate E — Learnable? Useful evidence within ~7–14 days.

## Experiment Design Pass (mandatory, lightweight — concise enough for a one-day experiment)

Before implementation, define explicitly (no giant document): product personality · target user + context · primary job · visual direction · typography/color/spacing systems · information hierarchy · page structure · component/UI inventory · responsive behavior · interaction behavior · motion decision (restrained by default; reduced-motion mandatory) · accessibility considerations · anti-patterns to avoid · visual references/inspiration (Refero/Recent Design as research, never copying sources).

Classify design mode first: MARKETING (landing/acquisition) · PRODUCT/UI (utility/workflow/states) · HYBRID (both). Calculator/utility experiments default to PRODUCT/UI or HYBRID — never a marketing landing page by default.

Skills: check SKILL-REGISTRY.md first; invoke only statuses that permit it (INSTALLED/VERIFIED/OPTIONAL as applicable — never REJECTED or nonexistent). Evaluate coverage from frontend-design, web-design-guidelines, accesslint/AccessLint where verified, checklist-design, and motion skills only where motion is genuinely useful — chosen per product, never mechanically all. Anti-slop rules apply in full (no purple/blue gradients, glassmorphism-for-its-own-sake, bento spam, glowing blobs, fake proof, generic pills, random animation, Linear/Vercel/Stripe cloning). Visual system emerges from product + customer + workflow + personality. Target: clarity, hierarchy, usability, trust, speed, responsive behavior, accessibility, and product-appropriate distinctiveness — minimal is deliberate, never plain-by-default.

## Experiment Visual QA (mandatory before DISTRIBUTION-READY)

Browser-check minimum: desktop, tablet, mobile viewports · primary interaction flow · hover/focus, validation/error, empty/default states where relevant · accessibility · typography hierarchy · spacing/alignment · responsive breakpoints · visual consistency · performance · console errors. Use real browser QA where the environment supports it. Report actual observations — never "looks good." Implementation reports must record: design mode, direction, selected skills/resources + why, references consulted, key decisions, responsive/accessibility/motion decisions, avoided anti-patterns (Design Pass) + viewport checks, visual findings, fixes, remaining limitations (QA).

## Sequential Design Pipeline (mandatory — human-gated, no silent advancement)

PRODUCT / UX DIRECTION → ROUND 1 THREEUI FOUNDATION → 🛑 GATE 1 → ROUND 2 FUNCTIONAL → 🛑 GATE 2 → ROUND 3 INTERACTION → 🛑 GATE 3 → ROUND 4 UX/QUALITY → 🛑 GATE 4 → ROUND 5 FINAL QA → DESIGN-READY. No round proceeds without explicit human PASS (never silence, never "looks okay", never a prior PASS reused). States: AWAITING HUMAN PASS / REVISE REQUESTED / PASSED. On REVISE: change, re-render, re-ask. Later rounds may improve/simplify/replace/remove earlier work but must preserve approved coherence — a round that makes things worse gets reverted to the earlier approved baseline.

Round 0 (brief, not UI): frontend-design + requirements/research — user, job, personality, emotional response, hierarchy, visual/typography/color direction, density, responsive + motion philosophy, anti-patterns. This tells ThreeUI what to build.
Round 1 (most important): ThreeUI builds the COMPLETE first-pass frontend — hero, background, navigation, buttons/CTA, sections, cards/forms where fitting, interactive elements, effects, micro-interactions, footer, responsive composition — adapted to the product (typography, colors, spacing, proportions, layout, hierarchy, behavior, responsive, motion). Never start from shadcn/Magic/React-Bits assembly or generic defaults; never ThreeUI-hero-only. Coherence test: if later rounds vanished, would this still look deliberate and non-generic? NO → refine Round 1 first. Record THREEUI LIMITATION where ThreeUI genuinely cannot serve an area, then use the next-best source for that area only — never silent bypass.
Gate 1: render 390/768/1440 screenshots, present to human, PASS/REVISE only.
Round 2: shadcn (forms, inputs, dialogs, dropdowns, navigation, primitives, states) + Watermelon (polished controls, buttons, cards, utility components, states) — improve only where clearly better; ThreeUI language stays foundation. Gate 2: re-render 3 viewports; report improved/replaced/kept/coherence-risks; PASS/REVISE.
Round 3: Magic UI (button interactions, feedback, reveals, borders, polish) + React Bits (signature/creative interactions, storytelling, distinctive motion) + Motion (timing/easing/choreography) — strongest few only; memorable interactions better, never everything moving. Gate 3: render, review, PASS/REVISE.
Round 4: Refero/verified references (hierarchy, navigation, onboarding, density, forms, flows, states, responsive — improve weaknesses, never redesign for novelty) + web-design-guidelines (usability, responsive, browser, performance, standards) + checklist-design (inputs/buttons/controls/states) + verified a11y (keyboard, semantics, focus, contrast, ARIA, touch, reduced motion). Gate 4: present desktop/tablet/mobile + UX/a11y/performance deltas + remaining issues; PASS/REVISE.
Round 5 (only after Gate 4): browser, interaction, responsive, a11y, reduced-motion, performance, console, network, consistency, anti-slop checks; confirm no generic regression, no collage, no dependency bloat, no broken foundation, no a11y/mobile regression → DESIGN-READY.
Experiment scope stays proportional: 1-day builds do Round 0 + Round 1 + human gate + Rounds 2/3 only if useful + final QA — sequence and gates mandatory, workload not.
Final principle: ThreeUI first. Human approval second. Other resources refine. Final QA last. The agent proposes. The human approves. The design does not advance automatically.

## Source-First Import Mode (implementation mode — gates and round order unchanged)

When active for a pass, prefer exact source reuse over re-creation for selected components from ThreeUI, Watermelon UI, shadcn/ui, Magic UI, React Bits, and Cult UI: `inspect source → verify reuse rights → copy permitted source → integrate → run → QA`, rather than `inspect → reinterpret from scratch`, whenever exact reuse is technically and legally permitted. styles.refero.design joins as a first-class design-system source (tokens, typography, spacing, radius, shadow, component rules, layout rhythm — harvested as rules via `REFERO STYLE → RULE USED → PRODUCT ADAPTATION`, never copied wholesale; final product stays original), kept strictly separate from Refero screen research (screens/flows/UX patterns). shadergradient.co joins as the specialized visual source for hero/atmospheric/shader backgrounds via its `ShaderGradientCanvas`/`ShaderGradient` components and reproducible parameters — used only where it materially improves the product, never by default, never as a substitute for page design. This mode changes HOW a selected component is implemented, never the pipeline itself: Round 0 → R1 → Gate 1 → R2 → Gate 2 → R3 → Gate 3 → R4 → Gate 4 → R5 → DESIGN-READY, explicit PASS per gate, and ThreeUI-first foundation all still apply.
Default on import: copy the permitted source as-is — structure, class names, CSS, JS/TS, animation and interaction logic, plus required supporting utilities — without redesign, restyle, color/animation/spacing changes, simplification, mass-renaming, or cross-framework rewrites unless compatibility strictly requires it. First pass answers only: does the real source component work inside our product? Customization comes later, on human request.
License/access check is mandatory before any copy: source availability, current license, per-component reuse permission, attribution duty, free vs paid/proprietary status, access restrictions. Permitted → `EXACT IMPORT ALLOWED`; otherwise → `EXACT IMPORT BLOCKED` (never bypass Pro/auth/paywall/license/copyright; Cult UI Pro-only pieces are `PROPRIETARY / ACCESS RESTRICTED`; ShaderGradient paid/proprietary presets likewise blocked — use a publicly reproducible permitted configuration or an approved alternative, or ask the owner to supply licensed source they own). Refero screen research, Recent Design, and other research-only sources stay research-only under SKILL-REGISTRY.md — never copied — and the registry's VERIFIED/OPTIONAL/REJECTED statuses still govern what may be used at all.
Per-component record required: source, component name, source URL/reference, license, exact-source-copied YES/NO, files copied, supporting dependencies, integration modifications (`SOURCE-PRESERVED` if untouched; otherwise exactly what changed and why). Reports must label each item honestly as `EXACT SOURCE IMPORT` vs `ADAPTED` vs `REIMPLEMENTED` — never describe a hand imitation as copied source. Exact-source applies to components/sections/primitives/backgrounds/interactions/permitted templates only — never copy an entire third-party site/page; final product keeps its own content, logic, branding, data, copy, and IA, never third-party branding or proprietary content.
Priority: ThreeUI first for the complete foundation (hero, background, CTA/buttons, sections, effects, motion, signature interactions) — prefer the actual reusable ThreeUI implementation; only fall back to approximation with a recorded reason (unavailable, license-blocked, incompatible, or performance/security-forced). Same rule for Watermelon (buttons, inputs, cards, controls, forms, navigation, states), Cult UI (distinctive buttons, animated/utility/niche interactions, cards, text/texture effects, shadcn-compatible primitives, product widgets — free/open-source only), and for shadcn/Magic UI/React Bits supporting primitives — import the real reusable source, preserve it initially, verify, then continue. Round 1 may additionally bring in ShaderGradient for one background layer and Refero Styles for the token system where appropriate, without replacing ThreeUI as the starting foundation; for visually ambitious marketing/hybrid work the preferred combination is ThreeUI composition + ShaderGradient visual layer. Round 2 searches Watermelon → shadcn → Cult UI → Magic UI → React Bits for the strongest direct-source component per weakness (copy as-is first, then human review); Round 3 refines the visual system via Refero Styles (type, spacing, color, radius, surface, density, hierarchy) plus ShaderGradient for hero/background/atmosphere where useful; Round 4 covers motion/UX via Magic UI + React Bits + Motion + Refero + guidelines + checklist + accessibility. For static single-file projects, MIT-permitted React/Tailwind/Radix/Motion sources (including Cult UI and ShaderGradient's React/three stack) may be adapted into HTML/CSS/vanilla JS where technically necessary, preserving the visual/interaction implementation as closely as reasonably possible without destroying the component's identity. Dependencies: check existing → usable-without → lightweight-equivalent → acceptable-before-adding; never auto-add a massive stack, but never mangle a component beyond recognition to dodge one small compatible dep — Ponytail and ZERO-COST-POLICY.md govern. Workflow per component: PASS A source import → PASS B function check (renders, interaction, responsive, no console errors, no a11y breakage) → PASS C human review (STOP, ask what changes) → PASS D customization (requested/product-specific only) → PASS E human review (STOP); human decides changes, agent does not proactively redesign outside the round's mandate. Final principles added: use the strongest available source directly when permitted — do not recreate what can legitimately be copied; ThreeUI establishes the first visual product, Refero Styles establishes design-system intelligence, Cult UI/Watermelon/shadcn/Magic UI/React Bits supply direct components, ShaderGradient supplies specialized visual backgrounds, the human decides what survives.

## Refero Styles DESIGN.md Harvest (mandatory design-system research layer)

Refero Styles is not a decorative reference library. Its DESIGN.md files are an active
design-system research layer informing typography, tokens, spacing, components, hierarchy, and
visual language. ThreeUI creates the visual foundation; Refero Styles helps make the foundation
systematically excellent; the human approves what survives.

Mandatory flow (substantial frontend work): ThreeUI Foundation → 🛑 Human PASS → Refero Styles
DESIGN.md Harvest → design-system refinement → 🛑 Human PASS — before later refinement rounds.
Tiny Experiment Track products keep the harvest lightweight but still perform it; genuinely
trivial work records why the harvest was skipped, never silently skips it.
Search by product need first (marketing/cinematic: premium marketing, editorial type, hero
systems; SaaS: app UI, dashboards, forms, density, navigation, states; developer: tooling,
docs, code-heavy, terminal systems; finance/workflow: numeric hierarchy, tables, status
systems) — never random pretty systems. Minimum: inspect ≥3 relevant systems (fewer only if
relevantly scarce), chosen by product fit + quality + transferable patterns.
Extract per system: typography (families, display/body, scale, weights, line-height),
color (primary/secondary/accent/bg/surface/text/muted/border/semantic), spacing (scale,
page/section/component rhythm), geometry (radius, borders, shadow, elevation, control height),
components (buttons, inputs, cards, nav, tables, dialogs, badges, states), layout (max-widths,
grids, rhythm, responsive), motion (timing, easing, transitions). Synthesize via comparison
matrix (| System | Best insight | Relevance | Keep/Adapt/Reject |) into ONE original product
system — never A+B+C collage, never wholesale copies, never branding/logos/assets. Structure
over duplication: adopt hierarchies, spacing logic, color relationships, proportions, surface
and responsive principles. No invented tokens (`primary #…`, `radius 16px`) without inspected
references + product-personality justification. Every design report records: systems inspected
(with identity), why selected, patterns extracted/adopted/rejected, and `SOURCE → PRINCIPLE →
ADAPTATION` traces per meaningful decision. Refinement gates: render 390/768/1440, PASS/REVISE
(never silent), anti-slop check (no generic SaaS look, no random tokens, no card/gradient/glass
soup, no inconsistency); FAIL = targeted re-refinement.

After the Design Pass, before implementation: read SKILL-REGISTRY.md and use only INSTALLED / VERIFIED / explicitly-permitted OPTIONAL resources (never REJECTED, nonexistent, or deprecated; old workflow mentions prove nothing). Inspect every available source below (mentioning ≠ inspecting; a source counts as INSPECTED only after relevant components/patterns/examples were actually examined — record what was examined). Priority tiers — Tier 1 foundation: ThreeUI (threeui.com: buttons, sections, heroes, backgrounds, effects, interactive treatments, cards, navigation, transitions, motion ideas, page compositions, distinctive details; answers "what should this feel like?") · Tier 2 direct component sources: Watermelon UI (ui.watermelon.sh, MIT, 260+ copy-paste React/Tailwind/Radix/Motion components + blocks; use especially where ThreeUI is too visual or shadcn too generic), shadcn/ui (MIT primitives), Magic UI (MIT core; Pro banned as requirement), React Bits (MIT + Commons Clause; product use OK, never redistribute), Cult UI (MIT-licensed repo; copy-oriented shadcn ecosystem — buttons, animated/utility/niche interactions, cards, text/texture effects, widgets; Pro-only pieces are PROPRIETARY / ACCESS RESTRICTED) and 21st.dev (primitives, forms, dialogs, inputs, tables, navigation, standard patterns ThreeUI doesn't cover; answers "how do I implement this cleanly?" — never default visual inspiration) · Tier 3 design system: styles.refero.design (2,000+ AI-readable DESIGN.md systems: typography, color tokens, spacing, radius, shadow, component/layout rules — harvest rules as REFERO STYLE → RULE USED → PRODUCT ADAPTATION, never wholesale copies) · Tier 4 real-product research: Refero screens/flows/UX (refero.design — verified; "Refro Design" has no distinct verifiable identity and MUST NOT be recorded or invoked as a separate source — likely a Refero alias, pending owner clarification), Recent Design, internal benchmark corpus, other registry-approved sources (record whether Refero screens or Refero Styles was used — they are different) · Tier 5 specialized visual: ShaderGradient (MIT © ruucm; `ShaderGradientCanvas`/`ShaderGradient` React + three stack with reproducible parameters for hero/atmospheric/shader backgrounds; paid/proprietary presets blocked; heavy WebGL must still pass the 7-question backgrounds test and Ponytail) · Tier 6 reasoning/standards: frontend-design, Motion, web-design-guidelines, accessibility resources, checklist-design, verified motion/design skills. Identify the UI primitives the product actually needs first, then search — ThreeUI first for feel, Watermelon/shadcn for function, never blindly and never every library.

Per UI area decide: Reuse (fits + compatible + license permits) · Adapt (borrow interaction/layout pattern, modify for product) · Compose (combine small approved primitives originally) · Build native (genuinely better — Ponytail governs; no library for a pretty component). Core rule — COPY THE QUALITY, NOT THE PRODUCT: adapt buttons, spacing, backgrounds, transitions, structures; combine small patterns; always change toward product identity (typography, color/tokens, hierarchy, layout, behavior, proportions, responsive, motion, density). Never reproduce a page unchanged, copy branding/logos/assets, or insert random effects; stronger source = clearer adaptation required. Backgrounds/effects pass the 7-question test (reinforce? hierarchy? memorable? readable? performant? mobile? reduced-motion OK?) — decorative WebGL/particles/blobs/gradient-everywhere fail by default. Borrow patterns and principles; create original product-specific composition. Never copy branded layouts, logos, illustrations, page compositions, proprietary systems, or unlicensed source blocks; record source + license for reused open-source code. Benchmark a small set of high-quality references for inputs-grouping, hierarchy, number/result presentation, whitespace, states, mobile differences, distinctiveness — quality bar, not copy source.

Before coding, record the decision matrix (| UI area | ThreeUI | Watermelon | shadcn | Cult UI | Magic UI | React Bits | Refero Styles | ShaderGradient | Refero/Refro | Selected |) — NOT APPLICABLE with product reason where genuinely absent, never silently skipped; each available source gets SELECT / ADAPT / REIMPLEMENT / REJECT WITH REASON (concrete reasons only — "didn't need it" insufficient). Report per round (Round 1: ThreeUI inspected/selected/adapted + ShaderGradient background test + Refero Styles tokens where used; Round 2: Watermelon + shadcn + Cult UI inspected/selected/changed; Round 3: visual-system refinement via Refero Styles + ShaderGradient where useful; Round 4: motion/UX via Magic UI + React Bits + Motion + Refero + guidelines + checklist + accessibility findings + fixes). Empty justifications ("we used frontend-design", "considered ThreeUI", "shadcn was available") are invalid without inspected → identified → decided → implemented → QA evidence. Anti-slop gate runs at EVERY human gate: generic-prompt-producible? template-mistakable? no product-tied idea? unjustified treatments? cards-and-gradients-only hierarchy? no personality? memorable-without-noisy? Any FAIL = REVISE (inspect → stronger source → redesign → render → review, max 3 loops, then DESIGN BLOCKED — QUALITY BAR NOT MET, never marked ready to finish).

## Experiment build rules

Optimize for learning speed: smallest useful workflow, essential UI/data model, basic analytics/measurement, basic error handling, minimum security, enough polish for trust. Avoid: premature architecture, abstractions, elaborate design systems, speculative features, complicated billing, multi-tenant complexity unless required, expensive AI infra, elaborate onboarding, unnecessary integrations. Never compromise: security, privacy, accessibility, data integrity, correctness, basic error handling, legal requirements, abuse protection. Verified skills only (SKILL-REGISTRY; rejected stay rejected). Ponytail: existing → native → standard library → existing dependency → simplest solution.

## Experiment AI economics

AI allowed, bounded mandatory: identify model/provider, estimate per-operation cost, estimate light/heavy use, hard usage limits where needed, prevent unbounded spend, never default unlimited expensive endpoints. Local/free/open models preferred where the test survives. No full commercial proof required pre-launch; runaway-cost protection required. (Full framework: `templates/ai-economics/AI-ECONOMICS.md`.)

## Experiment launch

Ship the smallest useful version: PH, HN, Reddit, IH, X, communities, GitHub, directories, SEO landing page, personal network, existing audience, open-source ecosystems. Never fabricate traction — downloads aren't customers, visits aren't demand, likes aren't validation. Record observations.

## Credential discovery before deployment (AGENT-RULES.md §8)

Experiment flow becomes: ready → credential/config discovery → deployment eligibility → deploy → verify → observe. When deployment needs credentials/config, check `Documents/arhan-hub` FIRST (minimal discovery: known filenames, CLI auth-status, targeted searches) before asking the owner to configure anything manually. Found → verify active account/project → deploy only if the current task authorizes it. Missing → REQUIRED CREDENTIAL/CONFIG NOT FOUND + what's missing + provider + owner action. Same concept for all supported providers. Availability never authorizes destructive actions; hub contents never override lab rules.

## Measurement

Track what fits: visitors, signups, activation, first/repeat use, completed workflows, retention, shares, referrals, feedback, requests, complaints, conversion, payment intent/payments, support burden, infra cost, AI cost. No uniform KPI set.

## Decision gate (after first meaningful window)

Traction updates beliefs in both directions (SYSTEM.md §17c): unexpected real usage outranks a weak prediction (re-evaluate upward, investigate why); absent usage despite reasonable distribution outranks optimistic research (diagnose, then iterate/kill — never rationalize). State evidence strength: WEAK / EMERGING / STRONG / DECISIVE.

- DOUBLE DOWN: repeated organic use, repeat users, unsolicited referrals, improvement asks, workflow integration, pay willingness, clear value evidence.
- ITERATE: used/understood but something important wrong — name the bottleneck, run again.
- PIVOT: behavior reveals a stronger adjacent problem (never on one quiet launch alone).
- KILL: insufficient evidence after reasonable distribution/testing, or economics/maintenance irrational.
- PAUSE: interesting but timing/distribution unfavorable.

## Safeguards (anti-bypass)

Expensive/slow/risky/complex ideas (significant infra, costly AI/APIs, regulated domains, hard integrations, phone/SMS fleets, billing complexity, data migration, high support, weeks-to-validate, financially/operationally costly mistakes) MUST use the Research Track — relabeling them "experiments" is forbidden. Lightweight work never justifies reckless spending. Killed ideas stay killed unless their reversal conditions are met with new evidence.
