# DESIGN-STACK

> Design decision framework for the ZERO-COST PRODUCT LAB. Outcomes are informed by the benchmark corpus (`research/design-benchmarks/`, `research/founders/`, `research/benchmark-patterns.md`), but design decisions are **derived from the product itself** — not copied from any template or any single winner. The benchmark is evidence, not a prescription.

This is the standing design policy for every product experiment in this lab. Where it conflicts with a product's own design document, this file wins until overridden deliberately.

---

## 0. What "design" means here

Design = **the product's interface, copy, and feel working together to serve one specific person doing one specific task for real money.** Design is not decoration, not "a theme", not matching a landing page gallery. Every design choice earns its place if it (a) reduces the target user's confusion, (b) increases their trust, or (c) lowers their cost to try the product.

---

## 1. Where design decisions come from (in order)

Design is decided bottom-up, per product, from these inputs — never from a template:

1. **Product**: what it does, for whom. The one-sentence product (SYSTEM §4) is the design brief.
2. **Customer**: the specific audience from the product's research — their literacy with the category, their pain, their objection, their context (mobile? desktop? in-flow?).
3. **Brand / personality**: the product's voice and stance — calm-confident, opinionated, playful, privacy-first, dev-first, "no hype". Personality is a design input, not an afterthought.
4. **Use case & economics**: where the user meets the product (link-in-bio? app store? API docs? checkout page?) and what the strongest proof is (a screenshot, a live demo, a metric, a testimonial).

**The benchmark is layer 5, consulted only after layers 1–4 are clear.** It tells us *what real products in similar situations do* — it does not dictate any specific look. Design review any single decision against both: "does this fit THIS product?" and "is this consistent with documented winners/losers in the benchmark?"

---

## 2. Design evidence hierarchy (how to use the benchmark)

When making a design choice, consult the corpus in this order:

1. **Your own product's research** (research folder, evidence) — highest authority.
2. **The pattern lists** (`research/benchmark-patterns.md`) — cross-product trends, tagged as trend vs law.
3. **The individual records in your product's bucket** (`research/design-benchmarks/`) — same-category examples with evidence grades.
4. **The founders' records** (`research/founders/`) — how a similar builder validated/shipped/monetized, especially distribution.
5. **The gaps file** (`research/benchmark-gaps.md`) — what the benchmark can NOT tell us (e.g. accessibility needs live testing); treat unknown territory as needing direct evidence, not assumption.

---

## 3. Design rules adopted from the benchmark (as defaults)

These are defaults that hold until the product's own evidence overrides them. Each is tied to the pattern that produced it:

| # | Default rule | Pattern basis |
|---|--------------|---------------|
| D1 | **Hero shows the product, not an illustration.** A live/mock product surface + one clear promise + one CTA. | Pattern A1: 56/100 lead with a real product artifact. |
| D2 | **Primary CTA is boring: "Start free", "Get started", "Try it".** Differentiate in hero copy, not the button. | Pattern A2/B7: CTA verbs are near-universal across all buckets. |
| D3 | **One accent color, sober base.** Pick the accent from the brand, use it sparingly and consistently. | Pattern A4. |
| D4 | **Whitespace is the system.** Generous section padding; cards have air; hierarchy via space, not via borders. | Pattern A6: spacing is best-documented field in the corpus. |
| D5 | **Motion reserved for the demo surface.** Entrance reveals + scroll-scrubbed demo on hero only; product chrome stays calm. | Pattern A7: low-motion apps, motion-led marketing. |
| D6 | **Trust bottom-half: logos → quotes → numbers.** Plus live metrics if the product can support them credibly. | Pattern A8, B4. |
| D7 | **Zero stock.** Real product UI, real screenshots, real named customers, real numbers. Specificity = anti-generic. | Pattern A9/B6. |
| D8 | **Remove until it's simply obviously great.** Single feature, single page, single price if possible. | Pattern A10/F6: simplicity is the corpus's most common distinction. |
| D9 | **Pricing page is a first-class conversion surface** — treated with the same care as the hero. | Pattern E9/B1. |
| D10 | **Distribution is designed from day one** (audience, SEO pages, free artifact, powered-by badge) — not an afterthought. | Pattern D1–D10, B5: distribution is the moat everywhere. |

---

## 4. Anti-rules (things the benchmark says to avoid)

- **No generic SaaS page**: hero stock photo + vague headline + empty logo strip + "Evidence of generic-ness" (see nonGeneric + notCopy columns of every slice). If a reviewer can't tell what the product does from the hero, it failed.
- **No clone of a specific winner** (Logo/name/palette/copy from any of the 100 records). The `notCopy` field of each record explicitly lists what not to copy.
- **No feature-soup.** Cards and bullets that don't prove the product's specific promise get cut.
- **No copy-paste CTA creativity.** The CTA is mechanical; creativity lives elsewhere.
- **No fake trust** — invented testimonials, fabricated metrics, or implied logos are worse than no trust.
- **No design-by-committee.** Solo decision, one strong voice (matches 38/50 solo founders).
- **No emojis in product UI. Ever.** Emojis are not a design system: they render inconsistently across platforms, break visual tone, and read as placeholder. Use custom inline SVGs instead — search open-source icon sets (Lucide / Heroicons / Tabler, all MIT/ISC), verify the license, copy the SVG markup, and adapt stroke/colour to the product tokens. One consistent stroke style (e.g. 1.8px, round caps) across the whole page. Emoji may appear only inside user-generated content, never in chrome, buttons, headings, kickers, or badges.

---

## 5. The design workflow per product

Applied inside the 28-phase pipeline, in the product's own folder:

1. **Product brief** (from research): one-sentence product, target, primary pain, proof unit.
2. **Benchmark check**: same-bucket examples + pattern lists consulted (not templates).
3. **Reference scouting** (SKILL-REGISTRY.md "DESIGN REFERENCE SOURCES"): Refero for UX patterns of the flows being built; Recent Design for contemporary visual direction. Extract principles only (hierarchy, layout, interaction, type, spacing, motion, IA) — never branding, copy, or assets.
3. **Token + copy draft**: hero (promise + CTA), nav, pricing presentation, trust section — all aligned to the product's personality, borrowing *structures* only.
4. **Static prototype**: $0 — HTML/CSS/JS or a free-tier tool, hero-artifact-first.
5. **Live-tune pass**: use `agent-browser` to check mobile, typography, motion, and page-speed basics before launch (the benchmark's UNKNOWN fields become observed fields here).
6. **Launch evidence**: real users, real traffic, real revenue (or honest fallback: "no traction, killed").
7. **Post-mortem into `decisions/`**: what the benchmark pattern predicted vs what happened. This is how the lab improves the benchmark over time.

### 5b. Design source toolbox (default hierarchy, not rigid)

Use these as the default design-source toolbox. The hierarchy is a starting point — choose based on the actual design problem, not a rigid per-task mapping.

| Source | Primary use |
|---|---|
| **ThreeUI** | Hero experiences, standout visuals, premium buttons, backgrounds, atmospheric effects, high-impact interactions |
| **Skiper UI** | Scroll choreography, pinned sections, scroll-linked animations, transitions, kinetic typography, reveals, preloaders |
| **React Bits / Magic UI** | Micro-interactions, hover states, animated components, creative polish |
| **Watermelon UI / shadcn** | Robust functional primitives (forms, inputs, dialogs, tabs, menus, etc.) — functionality, not visual identity |
| **Vengeance UI** | Landing-page sections + micro-interactions |
| **AnimMaster** | Animation utilities + motion-system patterns |
| **Cult UI** | Distinctive source components when strong fit |
| **Refero + styles.refero.design** | UX + design-system research (principles, not blind copies) |
| **ShaderGradient** | Specialized visual backgrounds (not automatic for every gradient) |

These are **ingredients**, not dependencies. Patterns are adapted to the product's visual language — never pasted unchanged (§14). See `Global-Frontend-Design-3D-Experience-Workflow.md` for full toolbox guidance.

### 5c. 3D as a global capability

3D is now a first-class global frontend capability. When a product would materially benefit from immersive hero, true 3D, spatial UI, product configurator, interactive object, 3D storytelling, scroll-driven 3D, WebGL, or cinematic environment — the agent should consider the 3D workflow.

Do NOT add 3D merely because it looks impressive. Ask:

> Does 3D materially improve understanding, emotion, interaction, demonstration, or the product experience?

If yes, use it. If no, prefer CSS/SVG/video/frame sequences. The full 3D stack decision tree, asset sourcing pipeline, optimization pipeline, performance rules, and mobile fallback architecture are in `Global-Frontend-Design-3D-Experience-Workflow.md`.

### 5d. Creative source mixing

The source hierarchy is NOT rigid. A final implementation may combine:

- ThreeUI + Skiper + GSAP
- ThreeUI + ShaderGradient + React Bits
- Vengeance UI + Magic UI + shadcn
- R3F + GSAP + ThreeUI
- CSS 3D + Video + GSAP

Choose tools based on the actual design problem. Do NOT require every section to use the same library. Do NOT create library soup.

### 5e. Source-first implementation

When an excellent reusable source is legally permitted:

```text
RESEARCH → SOURCE → LICENSE CHECK → DIRECT INTEGRATION → RUN → BROWSER REVIEW → CUSTOMIZE
```

Integrate/copy the actual source first, run it, inspect the result, then customize. Do NOT unnecessarily rebuild an excellent open-source component from scratch before testing the original.

If source reuse is NOT allowed (paywall, proprietary, restricted license):

```text
RESEARCH → UNDERSTAND → INDEPENDENT IMPLEMENTATION → RUN → BROWSER REVIEW
```

Study public behavior/design and independently implement the concept. Never bypass paywalls, authentication, licensing, or access restrictions. See `Global-Frontend-Design-3D-Experience-Workflow.md` §27-28.

### 5g. HARD RULE — MANDATORY APPROVED-SOURCE USAGE (user directive, overrides §5b–5f soft defaults)

This is a GLOBAL Product Lab rule. For EVERY frontend/design implementation, the agent MUST use components, patterns, interactions, or design systems from the approved source toolbox. The agent is NOT allowed to default to building generic UI from scratch.

**MANDATORY SOURCE TOOLBOX** — the agent MUST inspect and use appropriate sources from: ThreeUI, Skiper UI, SmoothUI, React Bits, Magic UI, Amicro, Watermelon UI, shadcn/ui, Vengeance UI, AnimMaster, Cult UI, Inspira UI, ShaderGradient, 3D Web Experience skills, Refero / styles.refero.design, Best Designs on X.

**HARD IMPLEMENTATION REQUIREMENT** — every substantial frontend page MUST contain meaningful implementation from the approved toolbox. Do NOT build an entire page from plain Tailwind, generic shadcn, hand-written generic cards, generic hero sections, generic gradients, generic navbar, generic buttons, or generic dashboard layouts and then claim the toolbox was "considered." That is NOT sufficient. The source must materially influence the implementation.

**MINIMUM SOURCE USAGE** — per substantial frontend page: at least 3 approved sources/pattern systems; at least 1 from primary visual sources (ThreeUI / SmoothUI / Skiper UI); at least 1 from interaction/motion sources (Skiper / React Bits / Magic UI / Amicro / AnimMaster); at least 1 from functional/design-system sources (Watermelon / shadcn / Vengeance / Cult UI / Inspira). Pages requiring 3D: the 3D Web Experience skill MUST be consulted and applied where relevant. Pages requiring substantial scroll storytelling: Skiper UI / scroll-experience MUST be used. Specialized backgrounds: ShaderGradient MUST be evaluated and used when appropriate.

**COPY-PASTE FIRST** — when an approved source contains a suitable component: inspect the source → verify license → directly copy/integrate → run it → inspect browser output → then customize. Do NOT immediately rebuild from scratch.

**SOURCE DIVERSITY** — do NOT use one library for the entire website. Compose multiple sources (e.g. Hero: ThreeUI; Scroll: Skiper; Micro-interactions: Amicro; Functional controls: shadcn/Watermelon; Marketing: Vengeance/SmoothUI; Special effects: React Bits/Magic UI/Cult UI; 3D: 3D Web Experience skill + R3F/Three.js/Spline).

**RESEARCH SOURCES** — Refero, styles.refero.design, Best Designs on X are mandatory research inputs (REFERENCE → PRINCIPLE → ADAPTATION). Do NOT copy proprietary screens, branding, assets, or restricted code.

**NO-SOURCE-AVAILABLE RULE** — custom code is the exception, never the default. If no suitable approved component exists, document: SOURCE SEARCHED / WHAT WAS NEEDED / WHY APPROVED SOURCES DID NOT FIT / WHY CUSTOM WAS NECESSARY.

**LICENSE EXCEPTION** — if the best component is proprietary/paid/restricted, do NOT bypass. Choose another approved source, or independently recreate the underlying behavior.

**ANTI-GENERIC GATE** — after implementation ask: "Could this have been generated by a generic 'modern SaaS landing page' prompt?" If YES: FAIL. Go back and introduce stronger approved-source components, interactions, compositions, motion, or visual systems.

**SOURCE REPORT REQUIRED** — end every substantial frontend implementation with: SOURCES ACTUALLY USED (source, component/pattern, where, why) / SOURCES INSPECTED BUT NOT USED (source, why not) / CUSTOM CODE (what, why necessary). Never claim a source was used if only inspected.

**HUMAN REVIEW** — after the first full frontend implementation: STOP. The human reviews whether the source combination produced a distinctive result. Do not auto-advance.

**CORE PRINCIPLE** — the lab does NOT ask "can the agent build this from scratch?" It asks "which approved existing design sources can we combine to build this better?" SOURCE-FIRST IS MANDATORY.

### 5g-i. MEANINGFUL SOURCE USAGE — HARD RULE (anti-quota-gaming patch; §5g preserved in full)

The mandatory source quota must be satisfied by **meaningful use**, not token usage. An approved source counts only when it materially contributes to the page's: visual identity, major layout, interaction model, motion system, product demonstration, UX behavior, or important section composition.

**TRIVIAL USAGE DOES NOT COUNT.** The following do NOT qualify as meaningful source usage by themselves: one decorative icon, one tiny hover effect, one insignificant button, one minor utility component, a component added only to satisfy the source count, a visually irrelevant component hidden in a low-impact section. The agent must NOT game the 3-source requirement.

**MAJOR-SECTION REQUIREMENT.** For every substantial frontend page, at least **one approved source must materially influence a major visual or interaction section** — e.g. hero, primary interactive section, workflow/showcase, major pricing experience, main navigation, major product demonstration, substantial scroll experience, major 3D experience.

**SOURCE CONTRIBUTION TEST.** Before declaring the page compliant, ask for each source: what meaningful part of the page came from this source? If the answer for any source is effectively "it was only used to satisfy the quota," that source does NOT count — choose a genuinely useful source instead.

**MINIMUM QUALITY BAR.** The goal of the 3+ source requirement is meaningful composition of strong existing design systems — NOT library bingo. A page using three sources poorly is NOT compliant. A page using three sources meaningfully is compliant.

**ANTI-GENERIC VALIDATION.** After implementation ask: could this page still look almost the same if all approved source libraries were removed? If YES: FAIL THE DESIGN. The source ecosystem has not materially influenced the result. Rework the page.

**SOURCE REPORT UPDATE.** For each source report: `SOURCE → COMPONENT/PATTERN → LOCATION → CONTRIBUTION → WHY IT MATTERS`. Do not report `SOURCE → tiny button` without explaining the actual meaningful contribution.

**KEEP ALL EXISTING RULES.** Preserved unchanged: mandatory approved-source usage, 3+ source requirement, copy-paste-first, license checks, source diversity, Refero research loop, no-source escape hatch, proprietary-source restriction, anti-generic gate, browser review, human approval. Nothing in §5g is weakened or removed by this patch.

*Delta vs prior policy: this §5g deliberately hardens the softer §5b ("hierarchy, not rigid") and §5f ("smallest useful set / never invoke every skill blindly"). Where they conflict on frontend work, §5g wins per explicit user directive. The NO-SOURCE-AVAILABLE escape hatch is the only exemption path.*

### 5f. Staged orchestration (smallest useful set)

Run stages in order; skip stages the product doesn't earn. Never invoke every skill blindly:

PRODUCT TRUTH → REQUIREMENTS → INFORMATION ARCHITECTURE → VISUAL DIRECTION → DESIGN TOKENS → FRONTEND DESIGN → UX/UI → MOTION → IMPLEMENTATION → BROWSER QA → IMPECCABLE (only if adopted) → ANTI-UI-SLOP check (incumbent skills) → WEB DESIGN GUIDELINES → ACCESSIBILITY → CHECKLIST DESIGN → PONYTAIL → FINAL QA.

Mode rule (ENGINEERING-STACK §3): declare MARKETING, PRODUCT, or HYBRID mode in the design doc first — marketing-page rules never apply blindly inside applications.

---

## 6. References

- `Global-Frontend-Design-3D-Experience-Workflow.md` — canonical global frontend design toolbox, 3D capability, source-discovery, creative mixing, source-first implementation, 3D stack/asset/performance rules, and research standards.
- `research/benchmark-patterns.md` — TOP 10 pattern lists (design, product, UX, distribution, monetization, failures, founder patterns).
- `research/benchmark-gaps.md` — unknown fields, contradictions, and what to live-test.
- `research/design-benchmarks/website-benchmark.md` + `website-dataset.json` — 100 product records, 5 buckets, evidence-graded.
- `research/founders/founder-benchmark.md` + `founder-dataset.json` — 50 founder records, evidence-graded.
- `research/` slices — raw evidence per record.
- `SKILL-REGISTRY.md` ("DESIGN REFERENCE SOURCES") — Refero, Recent Design, Aceternity, Anima, 3D/animation verdicts + extraction rule (research ≠ implementation).
- `SYSTEM.md` — the 28-phase pipeline this design stack plugs into. Where this file conflicts with SYSTEM.md, SYSTEM.md wins.

*Note: DESIGN-STACK.md was created new during the benchmark build (it did not previously exist in the lab). It is written to be the standing design policy, benchmark-informed.*