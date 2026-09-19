# Experiment Report — Freelance Rate Calculator

Status: EXPERIMENT / DESIGN-READY / PRE-LAUNCH (redesigned + QA passed; NOT posted; 14-day clock NOT started; no deployment fabricated).

## Hypothesis

Freelancers will find the result useful enough to save, revisit, share, or reuse when pricing future work. Primary signal is NOT traffic: visit → calculate → useful result → save/share/revisit → repeated use.

## MVP shipped

`products/freelance-rate-calc/index.html` — single static file, frozen. Verified: JS syntax valid; math hand-checked ($80k defaults → $108.42/hr); edge-safe (no NaN); real-Chromium pass — keyboard submit works, results render ($108/hr), save persists to localStorage, share-link encodes inputs in URL fragment, events fire (page_view, calculator_completed, result_saved); desktop + iPhone-14 screenshots reviewed (clean hierarchy, full-width mobile, large tap targets, honest copy, no gradients/glass/fake proof). Two automation-click misfires traced to CDP quirk, not product (DOM/keyboard paths verified working). Zero external requests confirmed (no trackers, fonts, or APIs).

## Deployment

DEPLOYMENT BLOCKED — OWNER ACTION REQUIRED. Temporary public tunnel attempted: cloudflared quick tunnel got a URL but edge returned 530 — local DNS/UDP egress blocked, tunnel never established (localhost:8819 served 200 throughout). No persistent public URL exists. Owner options (one command each, owner decides): `wrangler pages deploy` (Cloudflare account) or GitHub Pages via `gh` (logged in as arhan18 — repo creation needs explicit approval per house rules, not done). experiment_start NOT SET (starts on real deploy/distribution date).

## Analytics selected

Cloudflare Web Analytics (verified free, privacy-first: no cookies/localStorage/fingerprinting, beacon or proxied). Why: free, lightweight, removable, matches the privacy rule; pairs with Cloudflare Pages hosting. Requires owner Cloudflare account + one beacon script tag (owner action — MVP file NOT modified for this). Funnel metrics (completion/save/share/repeat/return) come from the built-in localStorage event log (exportable); CFWA covers visitors/sources. No financial inputs leave the browser either way — beacon sees pageviews only; event values never attached. Plausible pricing page moved (404) + search throttled: treated as paid-hosted, not selected.

## Measurement plan

Funnel: landing → calculator start → completed calculation → copy/share/save → repeat. Core metrics: visitors, started, completed, completion rate, saves, save rate, shares, share rate, repeat calculations, returning visitors, 3/7/14-day return. Page views ≠ users; traffic ≠ demand.

## Thresholds (preserved)

STRONG (150+ calculations AND ~20%+ save rate or strong repeat/revisit) = STRONG EXPERIMENT SIGNAL (never "product-market fit"). EMERGING / WEAK / ZERO per Experiment Track. Experiment integrity rule: success can never rest on traffic, impressions, likes, or one-time curiosity; favor completed workflows, repeats, saves, shares, returns, unsolicited feedback, workflow-revealing requests. Unexpected audiences recorded, not filtered. No feature creep during observation — requests log under observed-demand, nothing auto-built.

## SEO check (read-only review)

Title, meta description, OG tags, JSON-LD (WebApplication), semantic HTML (main/h1/h2/labels), viewport, mobile-first fluid layout — all present and verified in source. One page, no farm. Canonical/sitemap/robots apply at deploy (owner step with hosting).

## Metrics / observations / surprises / feedback

NOT YET MEASURED (nothing launched).

## Round 2 — Functional refinement (2026-09-12, new pipeline)

Inspected shadcn Input docs (Field/FieldLabel/FieldDescription/InputGroup/ButtonGroup) + Watermelon Button/Input/Form/Sonner taxonomy + Magic UI/React Bits statuses (pattern-level, nothing fitting a form tool). One genuine gap found: unit ambiguity (users infer $, %, hrs from labels alone). Implemented natively: unit adornments ($/hrs/yrs/%) on all 7 inputs via positioned spans (aria-hidden, input padding adjusted), zero dependencies — shadcn InputGroup principle adapted without the library. Everything else considered with reasons: Watermelon variants (current CTA already exceeds), Sonner (inline feedback superior for static), Magic micro-interactions (covered), React Bits (no fitting need), dialogs/navigation/tabs (product has none). ThreeUI foundation untouched. QA: wrappers verified (7/7 units), math $108 exact, zero network requests, 390/768/1440 reviewed. State: superseded by owner-directed step-header pass below (Gate 2 still open).

## Source-first import pass (2026-09-13, new mode — NO restyling)

Workflow updated first: `workflows/experiment-track.md` gained a surgical Source-First Import Mode section (exact-source preference, mandatory license check, no-improve-on-import, per-component record, EXACT vs ADAPTED vs REIMPLEMENTED honesty, static-adaptation and dependency rules, copy-then-customize passes). Gates, round order, ThreeUI-first, and all other rounds untouched; SKILL-REGISTRY.md untouched (research-only sources stay research-only).

### ThreeUI
Found: gallery taxonomy re-confirmed (dark canvas, glass cards, pill CTAs, mono labels, beam treatments). Selected: background/CTA/result/interaction direction (already foundation). License/access: Pro + free tiers, no per-component open-source license verified; registry status is ingredients-only — EXACT IMPORT BLOCKED. Files changed: none. Label: REIMPLEMENTED (prior hand-CSS adaptation stands, preserved as-is per no-restyling rule).
### Watermelon UI
Found: Input + Button actual source fetched and read (`src/components/ui/input.tsx`, `button.tsx`). Selected: input treatment, button treatment. License: MIT verified via repo LICENSE file + raw LICENSE text (Copyright Watermelon Contributors, attribution required if copied — no copy made, so no notice added). Exact import? NO — BLOCKED on compatibility, not license: source needs React 19 + Tailwind v4 theme tokens + `@/lib/utils` + Radix/cva, versus this zero-dependency single static file (Ponytail + single-file experiment constraint). Forcing it would add a full framework stack for one input. Files changed: none. Label: ADAPTED (existing native InputGroup-principle adornments preserved).
### Other sources
shadcn/ui: MIT per registry (VERIFIED); exact source same React/Tailwind/Radix stack → compatibility-blocked, ADAPTED (FieldDescription linkage + InputGroup adornments already in place, untouched). Magic UI: MIT core verified via repo LICENSE.md (Pro proprietary excluded, never touched) → same stack block, nothing selected, no change. React Bits: MIT + Commons Clause v1.0 verified (no resale/redistribution of components; product use OK) → same stack block + no fitting signature need in a form tool, nothing selected, no change. Refero/Recent Design: research-only, never copied.
### QA (import pass — function check only)
JS syntax valid; math `$108 / $94.28 / 1288 hrs / $867` exact; collapse toggle works with correct `aria-expanded`; keyboard focus on toggles intact; zero network requests (document only); 390/768/1440 screenshots reviewed — result vault, CTA, adornments, collapsed bars render as before; no console-error change (no code change); no a11y regression (no code change); performance unchanged (no bytes added).
### Human review status
AWAITING HUMAN REVIEW. NOT DESIGN-READY (per mode rule — no DESIGN-READY until explicit approval of the imported result). No stylistic modifications made in this pass.

## Refero Styles harvest — lightweight (2026-09-13, mandatory-harvest patch)

Systems inspected (3, full DESIGN.md read): Runway (kraft-paper ledger, amber single accent —
styles.refero.design/style/874aaea0), Raise (sunlit open ledger, navy single accent —
/style/63d44e1f), Mercury (dark fintech, cobalt single accent — /style/3172cd4d). Selected for
finance-ledger fit + numeric/result relevance, not prettiness.

Comparison matrix:
| System | Best insight | Relevance | Decision |
|---|---|---|---|
| Runway | Metric Tile (12px caption + 20–24px semibold value); single-amber-CTA discipline; 4px status badges | High | ADAPT (result rows, badge rule) |
| Raise | Balance Summary Card (32px values, 24px row gaps, no charts); tinted status pills; hairline borders | High | ADAPT (result hierarchy, pill wash) |
| Mercury | one-accent discipline; pill controls; flat value-lift cards | Medium | REJECT for import (dark-fintech language already satisfied by our night-ledger; cobalt/pill idiom would genericize) |

Traces: Runway → caption/value split → result supporting rows to 12px mono caps + 20–24px
semibold values (recommended hero number already exceeds this). Raise → low-saturation status
washes → copy/share/save confirmations as tinted pills instead of plain text swaps. Mercury →
single-accent discipline → already satisfied (beam green only); no change.
No wholesale copies, no branding/assets. Calculator index.html NOT touched in this pass
(policy-update audit forbids product code); the two ADAPT items are specified above and await
a human-gated design round for application. Anti-slop: harvest confirms ledger identity,
no generic SaaS drift.

## Extended-source pass (2026-09-13 — Cult UI + Refero Styles + ShaderGradient, controlled)

Workflow + registry extended first (tiers incl. Cult UI / Refero Styles / ShaderGradient; round roles; Pro/paywall blocks; honesty labels). Then applied, no generic fallback:

### ThreeUI
Composition/CTA/vault foundation re-verified (already REIMPLEMENTED); kept as base, untouched structurally.
### Cult UI (MIT repo nolly-studio/cult-ui; Pro excluded)
Inspected docs index + Texture Button + Animated Number pages (free components, registry/MCP distribution confirmed). License: MIT LICENSE.md (Pro blocks/templates proprietary — never touched) → ALLOWED for free pieces. Exact import? NO — BLOCKED on compatibility (React + Tailwind + shadcn-CLI + motion springs vs zero-dep static file). ADAPTED, identity preserved: Texture-Button tactile principle → inset top highlight + deeper press shadow on beam CTA (2 rules); Animated-Number spring principle → count-up retuned to quartic settle 650ms (exact final value, still skipped under reduced-motion). Files: index.html CSS/JS only, zero deps.
### Watermelon (MIT) / shadcn (MIT) / Magic (MIT core)
Input/Button actual sources already on record; same static-stack block → ADAPTED standing, untouched this pass. Magic action-feedback already covered; nothing new selected. React Bits: no fitting signature need in a form tool — documented, not skipped.
### Refero Styles (styles.refero.design, live gallery inspected — distinct from refero.design screen research)
Rule harvested: editorial display contrast + tracked mono kickers + tabular hierarchy. `REFERO STYLE → RULE USED → PRODUCT ADAPTATION`: editorial-system rule → h1 2.0→2.05rem / desktop 2.4→2.6rem with tighter tracking, kicker tracking .16→.22em. No wholesale copy, no branding.
### ShaderGradient (MIT © ruucm; ShaderGradientCanvas/ShaderGradient + reproducible params verified)
ACTUALLY TESTED live (not merely inspected): one restrained dual-tone emerald atmospheric field (`::after`, top-anchored, masked before content, pointer-events none, static — no three.js stack added to this static page, config reproduced as CSS gradients). 7-question test: reinforces beam system, hierarchy intact, readable (fades before cards), performant (static, zero deps), mobile clean, reduced-motion N/A → KEPT.
### QA
$108/$94.28/1288h/$867 exact; collapse/keyboard/focus intact; zero network (document only); 390/768/1440 reviewed — atmospheric field subtle on desktop, clean on mobile; tactile CTA + spring settle verified; no console-error change; a11y intact (contrast/tokens untouched).
### Status
AWAITING HUMAN REVIEW. NOT DESIGN-READY. Anti-generic check: product-tied night-ledger identity (graph field, beam, mono labels, vault climax) — not Tailwind/shadcn/AI-SaaS/calculator/gradient-landing generic; no purple/blue, glass, bento, or random motion.

## Round 4 — UX / quality refinement (2026-09-13, new pipeline)

Refero principles (hierarchy, density, form flows) + checklist input/button + a11y audit, no redesign for novelty. Contrast computed: 5.5–17.1 across all pairs (pass, no change). Labels 7/7 associated (kept). Fixes: weeks unit bug `yrs→wks`; linked 3 orphan hints (expenses/tax/projhours → 6/6 `aria-describedby`, hours has no hint by design); toggle hit area to 44px min-height (visual pill unchanged); collapsed cards compacted to ~42px header bars (was empty strip); tokenized hover green (`--beam-hi`). Considered + rejected: stripping ($)/(%) from labels (units are `aria-hidden`, labels must carry units for SR). Math/logic untouched ($108/$94.28 verified). QA: 390/768/1440 reviewed, collapse/keyboard/focus intact, native validation intact, zero network requests (document only), JS syntax valid. State: AWAITING HUMAN PASS (Gate 4).

## Round 3 — Interaction refinement (2026-09-12, new pipeline)

Magic UI / React Bits / Motion evaluated: entrance cascade, result reveal, button roll/press/fill-sweeps, count-up already covered prior rounds with reduced-motion gating throughout — no new animation justified ("make memorable interactions better, not everything move"). One genuine gap found: post-submit, mobile users stayed at the form while results rendered below the fold. Implemented: smooth-scroll result into view on submit (instant jump under reduced-motion). Math/logic otherwise untouched ($108 exact). QA: 390/768/1440 reviewed, zero network requests, keyboard/labels/focus intact. State: PASSED Gate 3.

## Owner-directed step-header pass (2026-09-12)

Request: improve Earn/Reality/Adjust titles + backgrounds, make interactive. Implemented: gradient luminous pills with ▾/▸ collapse chevrons, accent top-edge per card, collapsible fieldsets (legend toggle buttons, aria-expanded, keyboard-operable), auto done-checks (✓ when all inputs filled; Adjust correctly unchecked with empty optional field). Verified live: 3 toggles, 3 bodies, collapse hides/shows with correct ARIA, submit works with collapsed sections ($108 exact), zero network requests, 390/1440 screenshots reviewed. Math/logic otherwise untouched. State: PASSED Gate 2.

## Round 1 — ThreeUI foundation (2026-09-12, new pipeline)

Brief: night-ledger worksheet — calm confident trust for freelancers pricing work; serif display + mono data accents; generous cinematic spacing. Inspected ThreeUI gallery live in-browser (dark immersive canvas, glass floating cards, pill CTAs, mono labels). Foundation: deep ink-green canvas + graph field + top beam; paper floating cards; serif/mono pairing; beam-gradient CTA with sliding-text roll; luminous result vault with beam highlight; tabular numerals throughout. Math/JS untouched ($108 verified). Responsive defect found + fixed in-round (result overflow at 390px → breakpoint rule). State: PASSED Gate 1.

Watermelon UI verified real (ui.watermelon.sh + GitHub sandraike/watermelon-ui-ds; 260+ React/Tailwind/Radix/Motion components, shadcn-CLI registry, MIT per repo badges — LICENSE re-verify before any code copy). shadcn Field+FieldLabel+FieldDescription pattern inspected via official Input docs. Magic UI / React Bits statuses re-checked (not installed; pattern-level only). Refero verified (refero.design + MIT refero_skill repo; full library login-gated); "Refro Design" has NO distinct verifiable identity — recorded as unresolved alias, never a source. No design MCPs in tool environment.
Matrix outcomes: Watermelon Button/Input/Form/Sonner patterns → considered; selected ONLY the FieldDescription principle, implemented as aria-describedby hint linkage on 3 hinted inputs (native, zero deps). shadcn Field pattern → same implementation. Magic UI → nothing new (feedback already covered). React Bits → nothing fitting (no creative-interaction need in a form tool; documented, not skipped). Refero → principles only (login-gated depth). Grid/glow/grain unchanged (grid kept).
QA re-pass (390/768/1440): layout identical except a11y attributes (invisible by design); $108 math exact; zero network requests; keyboard/labels/focus intact. Licenses: none triggered.

Backgrounds tested live (3 candidates, desktop + mobile screenshots reviewed): graph-paper grid + fade (ThreeUI background-catalog direction, CSS-only) → KEPT as default (worksheet metaphor perfected, readability intact, fades before content); warm atmospheric glow → REMOVED (near-zero visible impact, dead weight); SVG grain texture → REMOVED (imperceptible at scale, unjustified bytes). WebGL/animated/3D backgrounds never attempted — fail the product's trust/performance bar by inspection (financial worksheet, not a demo).
Buttons: Sliding-Text roll adapted (same-label roll, reduced-motion safe) + press states (.985/.97) + deepened fill-sweeps KEPT. A real bug was caught by visual QA (duplicated CTA text from unclipped ::after layer) and fixed via explicit mask wrapper — evidence the A/B process works.
Result: count-up reveal on the recommended number (550ms ease-out, exact final value, skipped under reduced-motion) KEPT — draws the eye to the core moment, aids comprehension of magnitude.
Micro-interactions: input focus ring, copy/share/save confirmations (prior pass) KEPT. Rejected: anything decorative, animated, or dependency-backed.
Performance delta: ~+500 bytes CSS, ~15 lines JS, zero dependencies added, zero network requests (document only). Accessibility preserved (keyboard/labels/focus/contrast re-verified; motion all gated).

ThreeUI verified real (threeui.com — Meng To Three.js/components gallery; CSS-DOM + WebGL + Pro/free tiers; MCP + GitHub). Searched for calculator needs (buttons, result treatments, numeric display, form/input treatments, section composition, disclosure, restrained motion, micro-interactions). 21st.dev considered for functional needs — nothing selected (native inputs + details already cover; metered copies + account wall argue against).
Sourcing matrix: CTA hover → ThreeUI "Sliding Text CTA" pattern → SELECTED, adapted as CSS-only text-roll on calculate button (same label, reduced-motion safe) · result actions hover → ThreeUI micro-interaction principles → SELECTED as fill-sweep (already present, deepened) · backgrounds/effects → INSPECTED, REJECTED (7-question test: decorative WebGL harms trust/readability/performance on a financial worksheet; product explicitly anti-decoration) · page-level/heroes → INSPECTED, REJECTED (PRODUCT/UI form tool needs no hero) · disclosure → native details (prior decision stands) · component libs → considered, N/A (React/npm vs zero-dependency static).
Licenses: none triggered (patterns reimplemented in hand CSS, no source copied).
Concept: REFINE (ledger system kept; micro-interaction layer added).
QA re-pass (390/768/1440): math $108 unchanged; zero network requests; keyboard/labels/focus intact; screenshots reviewed — CTA roll + action hovers render; no slop introduced.

Available: frontend-design + web-design-guidelines + checklist-design (INSTALLED, read in full) · accesslint (VERIFIED-local but not installed — manual checks substituted) · Refero/Recent Design (reference-only) · no design MCPs in tool environment (checked).
Inspected: Vercel Web Interface Guidelines live (forms, focus, animation, typography, touch, copy rules) · checklist input-field/button (+ accordion pattern referenced) · Recent Design gallery index (editorial/restraint direction) · component libs (shadcn/Magic/Animate/React Bits/Motion Primitives — statuses checked, none installed, React/npm-based).
Selected: Vercel form rules (example placeholders ending …, inputmode, name, autocomplete=off, touch-action, tabular-nums, balanced headings) · checklist input/button patterns (hints, data-format cues, fill/outline variants, instructional copy, hover/focus states) · frontend-design editorial direction (serif display + system sans, intentional restraint) · details/summary disclosure pattern · NO component library (documented Ponytail decision: zero-dependency static page, native genuinely better) · galleries principles-only, nothing copied · no MCP to use.
Direction decision: REFINE (ledger system validated against references; elevated, not replaced).
Before→after: flat 7-field form → 3 mental-model step groups; lecture methodology → "Why did I get this number?" expander; stacked identical actions → primary calculate + quiet outlined actions with hover + async copy/share feedback (aria-live); no placeholders → example placeholders; missing touch/hover/inputmode affordances → added.
Licenses: none triggered (no reused code; system fonts only).
Native/custom + why: all styling hand-written CSS (~no dependencies) — page must stay one static file; copy-feedback micro-interaction added to JS (math untouched, re-verified $108.42).
QA (390/768/1440 screenshots reviewed): hierarchy intentional, serif/sans coherent, spacing consistent, result climax dominant, inputs grouped, mobile deliberate, no slop patterns, keyboard flow + labels + focus + contrast pass, zero network requests, no console errors. Copy-feedback verified via failure branch ("Copy unavailable — select manually" in permissionless headless; success branch same wired path). Remaining limitations: share/copy need Clipboard API (standard); no server analytics until owner beacon; share-link adoption unproven.

## Design direction (PRODUCT/UI mode)

"Ledger/worksheet" editorial system: serif display (Georgia) + system sans + tabular numerals; paper/ink/deep-green tokens; three step groups matching user mental models (01 Earn → 02 Reality → 03 Adjust); dark-green result panel as the visual climax ($108 dominant, supporting rows subordinate); methodology collapsed into "Why did I get this number?" details expander; quiet secondary actions. Restrained reveal motion only, disabled under prefers-reduced-motion. No gradients, glass, bento, fake proof, or dashboard chrome.

## Skills/resources actually used

frontend-design (visual implementation guidance) · web-design-guidelines (interface review) · checklist-design (design QA pass) · SKILL-REGISTRY-gated selection (no REJECTED/nonexistent skills invoked; accesslint not installed — manual a11y checks instead). No external references copied; direction derived from product/user (worksheet metaphor). Motion libraries deliberately NOT used (nothing to communicate beyond the reveal).

## Redesign QA results

Function: JS block byte-identical to verified MVP (programmatic diff); math re-verified live ($108 / $94.28 / $867); edge cases safe; save persists; share-link encodes inputs; events fire; zero external network requests (document only). Visual (390/768/1440 screenshots reviewed): intentional hierarchy, coherent serif/sans pairing, consistent spacing, dominant result, understandable inputs, deliberately stacked mobile, no slop patterns. Accessibility: all labels programmatically associated; keyboard-only flow works (Tab order sane, Enter submits); visible focus styles; contrast reviewed (ink/paper, paper-on-green, muted-on-paper all pass); semantic fieldset/legend/aria-live; touch targets ≥44px. Performance: single static file (~14KB), zero dependencies, no console errors. One copy fix applied (redundant result-row label). Remaining limitations: share/copy depend on Clipboard API (standard, secure-context); no server-side analytics until owner attaches beacon.

## Evidence strength

NO EVIDENCE YET (pre-launch).

## Conclusion / next decision

PENDING owner deploy + 14-day window. Critical question stands: one-time calculator or recurring pricing workflow — behavior decides.
