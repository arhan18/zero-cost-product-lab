# Memory — Freelance Rate Calculator

Product: freelance rate calculator experiment (Experiment Track, first run).
Current phase: built, pre-launch. Updated: 2026-09-12.

## Completed

- MVP: single-file static calculator (index.html), math verified ($80k defaults → $108.42/hr).
- Events wired (localStorage + Plausible/Umami forward, no accounts).
- Experiment report skeleton + launch checklist written.

## Current objective

Owner deploys (Cloudflare Pages or approved static host) + adds CFWA beacon + posts via distribution-checklist → 14-day clock → record in experiment-report.md.

## Redesign (2026-09-12, post-verification)

Design audit found flat undifferentiated UI; redesigned to ledger/worksheet system (PRODUCT/UI mode, serif display, 3-step grouping, dark-green result climax, methodology expander) with JS byte-identical (verified by diff) and math re-verified live. QA: 390/768/1440 screenshots, keyboard flow, labels, focus, contrast, zero network requests. Harvest pass (2026-09-12): Vercel guidelines live + checklist input/button/accordion + Recent Design index inspected; component libs considered, rejected with documented reason (React/npm vs zero-dependency static); no design MCPs available. Direction REFINE. Added: example placeholders, inputmode/name/autocomplete, touch-action, calculate hover, async copy/share feedback. Math untouched ($108.42). Status: EXPERIMENT / DESIGN-READY / PRE-LAUNCH. NOT posted; clock NOT started; no deployment fabricated.

## ThreeUI-first pass (2026-09-12, patched track stage)

ThreeUI verified real (threeui.com, Meng To gallery; CSS-DOM + WebGL + Pro/free). 21st.dev considered, nothing selected (native covers; metered/account wall). Adapted: Sliding-Text-CTA hover roll on calculate + deepened action fill-sweeps (CSS-only, reduced-motion safe). Rejected with reasons: WebGL backgrounds/effects (trust/readability/performance), page heroes (form tool needs none). Licenses: none triggered (patterns reimplemented, no source copied). Math untouched ($108 re-verified live). QA re-passed 390/768/1440. Status unchanged: EXPERIMENT / DESIGN-READY / PRE-LAUNCH.

## Verification (2026-09-12, pre-launch)

Browser-QA passed on localhost (Chromium): keyboard submit, $108/hr result, save persistence, share-link encoding, events firing, desktop + iPhone screenshots clean. Two automation-click misfires = CDP quirk, not product. Deployment BLOCKED on owner action (tunnel egress blocked here; no persistent URL). Analytics selected: Cloudflare Web Analytics (free, verified) + localStorage funnel log. MVP file frozen.

## Important decisions

- Single HTML file (Ponytail: no build step, no framework, no backend).
- System font stack (speed + $0; no webfont dependency).
- localStorage saves (no auth); share links via URL fragment (no server).
- No AI, billing, accounts — out of experiment scope.

## Constraints

- Static hosting required for launch (Cloudflare Pages free tier suggested, owner deploys).
- Optional: attach Plausible/Umami script for server-side analytics; localStorage log exports otherwise.

## Known bugs / unresolved questions

- None known. Unresolved: one-time vs recurring-use question (the experiment itself).

## Next action

OWNER: deploy index.html to free static hosting → post to 2–3 freelancer channels → start 14-day clock → record in experiment-report.md.

## ThreeUI visual experiment (2026-09-12)

Tested grid/glow/grain live at 3 viewports: grid KEPT as default (worksheet metaphor perfected), glow + grain REMOVED (no visible gain, dead code deleted). Sliding-text CTA + press states + count-up result KEPT; caught + fixed a duplicated-CTA clipping bug via explicit mask wrapper. Zero deps added (~+500B CSS, ~15 lines JS). Math untouched. Status unchanged: EXPERIMENT / DESIGN-READY / PRE-LAUNCH.

## Expanded-matrix round (2026-09-12)

Watermelon verified real (MIT per badges); shadcn Field pattern inspected; Magic/React-Bits pattern-level; Refero verified, "Refro" unresolved-alias (never a source); no design MCPs. Selected: FieldDescription principle → aria-describedby on 3 hinted inputs (native). Everything else considered with documented reasons, nothing else changed. Math $108 exact. Status unchanged.

## Round 1 — ThreeUI foundation (2026-09-12, new pipeline)

Brief: night-ledger worksheet (calm confident trust; serif + mono; cinematic spacing). Browsed ThreeUI gallery live in-browser. Foundation: dark ink-green canvas + graph field + top beam, paper floating cards, beam-gradient CTA, luminous result vault, tabular numerals. Math/logic untouched. Fixed in-round: 390px result overflow → breakpoint rule. State: PASSED Gate 1.

## Round 2 — Functional refinement (2026-09-12)

shadcn Input docs + Watermelon taxonomy inspected; Magic/React-Bits pattern-level. One genuine gap: unit ambiguity → native unit adornments ($/hrs/wks/%) on all 7 inputs (aria-hidden, zero deps). Everything else documented-considered. Math $108 exact. State: PASSED Gate 2 (via step-header pass).

## Round 3 — Interaction refinement (2026-09-12)

Magic/React-Bits/Motion audit: all scoped motion already covered and gated; only genuine gap was post-submit viewport (mobile users stranded above the result). Added smooth-scroll-to-result (instant under reduced-motion). Math untouched. State: PASSED Gate 3.

## Owner-directed step-header pass (2026-09-12)

Gradient pills + accent card edges + collapsible fieldsets (keyboard-operable, aria-expanded) + auto done-checks (Adjust correctly unchecked). Verified live: toggles, ARIA, submit-with-collapsed ($108), zero network, 390/1440 screenshots. Math/logic untouched. State: PASSED Gate 2.

## Source-first import pass (2026-09-13 — NO restyling)

Pipeline gained Source-First Import Mode (gates/rounds/ThreeUI-first intact). License checks: Watermelon MIT ✓, Magic MIT core ✓ (Pro excluded), React Bits MIT+Commons Clause ✓, shadcn MIT per registry, ThreeUI Pro-gated → exact import blocked. Compatibility: all shortlisted sources need React+Tailwind/Radix vs zero-dep static file → exact copy blocked, existing ADAPTED/REIMPLEMENTED work preserved, zero file changes. QA: $108 exact, collapse/keyboard intact, zero network, 3 viewports. AWAITING HUMAN REVIEW, not DESIGN-READY.

## Extended-source pass (2026-09-13 — Cult UI + Refero Styles + ShaderGradient)

Pipeline+registry extended (6 tiers, round roles, Pro blocks). Cult UI free pieces MIT-allowed but React-stack-blocked → ADAPTED (texture-CTA highlight/press, spring count-up 650ms). Refero Styles rule → display contrast + kicker tracking. ShaderGradient ACTUALLY TESTED live: restrained emerald field KEPT (7-question pass, zero deps). $108 exact, 3 viewports, zero network. AWAITING HUMAN REVIEW, not DESIGN-READY.

## Round 4 — UX / quality refinement (2026-09-13)

Contrast 5.5–17.1 pass; fixed weeks `yrs→wks`; linked 3 orphan hints (6/6 described); 44px toggle hit areas; collapsed cards compacted (~42px); tokenized hover green. Rejected stripping ($)/(%) from labels (SR needs them, units are aria-hidden). Math $108/$94.28 intact, zero network, 390/768/1440 reviewed. State: AWAITING HUMAN PASS (Gate 4).
