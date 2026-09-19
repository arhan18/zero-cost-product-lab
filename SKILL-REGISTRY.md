# SKILL-REGISTRY

Canonical registry of third-party skills and tools the lab may use. Required by SYSTEM.md §15: **no skill is used or installed before inspection is recorded here.** Project-local installation only (`.opencode/skills/`); nothing outside this workspace is ever modified.

> Source of truth moved here from `research/skill-registry.md` during the master update (canonical location). The research file is now a pointer to this one. This resolves the prior duplication.

## Skill inspection checklist (SYSTEM.md §15)

Before any skill is approved, all must be checked and readable from this file:

1. **Source**: repo/author + version — inspected, not just linked.
2. **License**: checked; no licence file or unclear licence = risk flagged.
3. **Files**: what it installs and where (project-local only where possible).
4. **Paid services**: no required paid APIs/subscriptions.
5. **Scripts/hooks**: code execution, lifecycle hooks, network calls — reviewed before first use.
6. **Global config**: must not modify global OpenCode/agent config.
7. **OpenCode compatibility**: skill format + tool requirements verified.
8. **Persistence**: decision recorded in the table below.

A skill that fails any inspection is **unapproved** until resolved. Anything not in this table is unapproved.

## Decision level

Exactly one per skill/source:

- **INSTALLED** — inspected, approved, present in `.opencode/skills/`, usable now.
- **VERIFIED** — inspected, safe and $0, no install needed (copy-paste, npm MIT package, or builtin); use per the row's conditions.
- **OPTIONAL** — conditional: adopt only when a phase genuinely needs it, never by default.
- **DEFERRED** — safe but unneeded now (or blocked item listed); install/evaluate at first real use.
- **REJECTED** — fails §15, adds cost/complexity, loses to a simpler incumbent, or nothing real exists. Recorded with reason so it is not re-proposed.

## Registry

| Skill | Source | License | Purpose | Cost | Risk | Status |
|---|---|---|---|---|---|---|
| frontend-design | vercel-labs/frontend-design (local `~/.agents`) | Apache-2.0 | Distinctive production-grade frontend UI; avoids generic AI aesthetics | $0 | None — single SKILL.md + LICENSE, no scripts | **INSTALLED** (`.opencode/skills/frontend-design`) |
| web-design-guidelines | vercel-labs/web-interface-guidelines | MIT (declared; no LICENSE file in dir) | UI audit against Vercel Web Interface Guidelines | $0 | Low — fetches guideline text from GitHub raw at review time | **INSTALLED** (`.opencode/skills/web-design-guidelines`) |
| checklist-design | Checklist Design, v3.2.3 | MIT | Design audit/critique using bundled checklists | $0 | Low — self-contained, read-only | **INSTALLED** (`.opencode/skills/checklist-design`) |
| deep-research | FMA Software Labs | License not declared — **flagged** | Massive autonomous web research via builtin websearch/webfetch | $0 | Low — builtin tools only; license unverified | **INSTALLED** (license caveat) (`.opencode/skills/deep-research`) |
| ponytail | GitHub DietrichGebert/ponytail | MIT | YAGNI decision ladder + `/ponytail*` commands | $0 | Medium — needs node on PATH + hooks review + local opencode.json plugin | **DEFERRED** — clone + review hooks before install; rule enforced by SYSTEM.md §20 meanwhile |
| ui-ux-pro-max | Local `~/.config/opencode/skills/ui-ux-pro-max-skill` (30MB) | Not declared — **flagged** | Design intelligence: styles/palettes/fonts/UX guidelines | $0 | Medium — partial global install; 30MB tree + python script to inspect | **DEFERRED** — inspect package + license before import |
| agent-browser | OpenCode browser automation CLI (builtin toolset) | OpenCode | Real browser automation: navigation, forms, screenshots, extraction, QA | $0 | Low — needed for Phase 18 browser QA | **OPTIONAL** (use for browser-QA phases; document usage in ENGINEERING-STACK QA) |
| accesslint | github.com/AccessLint/accesslint, npm `@accesslint/core` 0.21.0 (MIT, 2026-08-10) | MIT (npm packages) | WCAG 2.2 A/AA linting (95 rules) via core/CLI/Playwright/Vitest | $0 local; SaaS $19–349/mo for private repos | Low local; SaaS rejected (private lab repos fail $0 ceiling; never grant GitHub App perms) | **VERIFIED** — MIT npm packages, local CI only; SaaS row REJECTED |
| Magic UI | github.com/magicuidesign/magicui (~22k★) | MIT core; Pro proprietary ($199 lifetime) | 150+ copy-paste React+TS+Tailwind+Motion components, shadcn companion | $0 core; Pro banned as requirement | Low — treat like Aceternity (free core only) | **VERIFIED** — free MIT core only |
| shadcn/ui | github.com/shadcn-ui/ui (~122k★) | MIT | Copy-paste accessible components; stack cornerstone | $0, no account | None — not a dependency | **VERIFIED** |
| React Bits | DavidHDev/react-bits, reactbits.dev (~46k★) | MIT + Commons Clause v1.0 (no resale/redistribution of components) | Copy-paste React+Tailwind animated components | $0 product use | Low — free use OK, never redistribute; don't stack with two same-slot ingredients | **OPTIONAL** — adopt-with-caveat per justified use |
| Cult UI | github.com/nolly-studio/cult-ui (~6.1k★), cult-ui.com | MIT (LICENSE.md; Pro blocks/packs proprietary) | Copy-oriented shadcn-compatible components: buttons, animated/utility/niche interactions, cards, text/texture effects, widgets | $0 core; Pro banned as requirement | Low — free MIT core only; Pro-only pieces are PROPRIETARY / ACCESS RESTRICTED, never bypass | **VERIFIED** — free MIT core only |
| Theme Factory | anthropics/skills (skills/theme-factory), Apache-2.0 | Apache-2.0 | Markdown themes + palettes for slides/docs/HTML artifacts | $0, no auth | Low — targets artifacts, not product theming; loses to incumbents for UI | **OPTIONAL** — install only at first artifact-theming need |
| Motion Primitives | github.com/ibelick/motion-primitives, MIT | MIT | Copy-paste React+Tailwind+Motion components | $0 | Low — direct duplicate of Animate UI slot; incumbent wins ties | **DEFERRED** — revisit per justified per-use need |
| 21st.dev | 21st.dev marketplace | Per-component author licensing (varies) | Component marketplace search | Free: 2 copies/day, account-walled; Builder $6–15+/mo | Medium — metered + account wall; violates original-repo preference | **DEFERRED** — browse free only; never a dependency |
| design-taste-frontend | No canonical source (forks/repacks only: h3nryprod01/design-taste etc.) | — | — | — | Repackaged copies; prefer original `emilkowalski/skills` (MIT) if gap is real | **REJECTED** — nothing real to install |
| anti-ui-slop | No such skill (phrase across ~82 tiny repos) | — | — | — | Concept covered by impeccable detector + incumbents | **REJECTED** — nothing real; overlap covered |
| high-end-visual-design | github.com/sva-admin/high-end-visual-design (2★, 1 commit, SKILL.md-only) | MIT | Design guidance prompts | $0; SV Academy upsell path named | Low — near-total overlap with incumbents | **DEFERRED** — safe but unneeded; incumbents win ties |
| redesign-existing-projects | No real artifact (yasikvlad 0★, no docs) | — | — | — | — | **REJECTED** — gap (if any) stays named |
| impeccable | github.com/pbakaus/impeccable (original; Apache-2.0) | Apache-2.0 | 61-rule deterministic anti-slop detector, no LLM/API key; OpenCode path exists | $0 | Medium — engine binary + hooks; use project-local path only, never global installs | **OPTIONAL** — adopt project-local only if a phase needs deterministic gates |
| 3d-web-experience (Agentic Awesome) | github.com/sickn33/agentic-awesome-skills `skills/3d-web-experience` | Apache-2.0 (vibeship-spawner-skills); repo MIT | Immersive Three.js / React Three Fiber experiences: scene architecture, asset pipeline, optimization, scroll-driven 3D, mobile fallback | $0 | Low — single SKILL.md, no scripts | **INSTALLED** (`.opencode/skills/3d-web-experience`) |
| scroll-experience (Agentic Awesome) | github.com/sickn33/agentic-awesome-skills `skills/scroll-experience` | Apache-2.0 (vibeship-spawner-skills); repo MIT | Scroll choreography, parallax storytelling, sticky sections, GSAP/Framer, performance, accessibility | $0 | Low — SKILL.md + references guide, no scripts | **INSTALLED** (`.opencode/skills/scroll-experience`) |
| premium-3d-website (Agentic Awesome) | github.com/sickn33/agentic-awesome-skills `skills/premium-3d-website` | MIT (repo); skill self-declared | Custom GLSL shaders, post-processing, physics interactions, preloaders, advanced 3D | $0 | Low — SKILL.md only | **REFERENCE ONLY** — advanced patterns; install at first genuine shader/post-processing need |
| 3d-web-experience (Happycapy) | github.com/happycapy-ai/Happycapy-skills `skills/3d-web-experience` | Apache-2.0 (vibeship-spawner-skills); repo MIT | Duplicate of Agentic Awesome version (less complete — no validation checks) | $0 | Low | **REJECTED** — duplicate of installed Agentic Awesome version |
| (future skills) | — | — | — | — | — | Must pass §15 before approval |

## DESIGN REFERENCE SOURCES

Research sources and implementation ingredients, scouted 2026-09-12 (official sources only) and updated 2026-09-14 with 3D skills. Research ≠ implementation: inspiration sources must never become dependencies. Full toolbox and 3D workflow in `Global-Frontend-Design-3D-Experience-Workflow.md`.

| Source | Type | Use | Free? | Status | Notes |
|---|---|---|---|---|---|
| Refero (refero.design) | UX reference library (74K+ web + 67K+ iOS shipped screens, flows, Figma plugin, MCP) | Pattern research: onboarding, pricing/paywalls, auth, dashboards, tables, forms | Free to browse (~3% library, 8–10 screens/search); Pro $10–17/mo for full | **Adopt with caveat** — $0 research use only | Terms: research/inspiration only; no scraping, redistribution, or ML training; never copy screens |
| Recent Design (recent.design) | Visual inspiration gallery (daily feed, OG images, icons, newsletter) | Visual-direction scouting: layout, type, branding, motion ideas | Free to browse; paid parts are advertiser-side only | **Adopt with caveat** — scouting only | Popularity ≠ validation; featured work © creators — direction, not assets |
| Aceternity UI (ui.aceternity.com) | Component ingredient library (Next.js + Tailwind + Motion, shadcn-compatible) | Copy-paste effects/blocks adapted to product language | Free `/components` ($0); Pro $169/yr or $199 lifetime = paywalled Blocks/Templates | **Adopt with caveat** — free-only | Proprietary license (not MIT — treat as free-for-commercial-use, no resale); paid upsell banned as requirement |
| Anima (animaapp.com) | Figma-to-code (React + Tailwind output, VSCode/zip export) | Optional conversion only when a real Figma design exists | Free: 5 chats/day + 5 imports/clones + 5 plugin generations; no custom domain | **Adopt with caveat** — optional, never mandatory | Free Figma tier works (plugin path); output needs human cleanup; must still pass Ponytail + Playwright + a11y + Design QA |
| three-mesh-ui / pmndrs uikit / three+fiber+drei | 3D UI candidates ("three ui" has no canonical project; npm `three-ui` is dead) | OPTIONAL SPECIALIZED only when a 3D scene is product-justified | MIT where maintained | **Conditional** — never a default dependency | 3D weight/bundle + a11y cost fails $0 frugality by default |
| Animate UI (animate-ui.com, MIT) / Animata (animata.design, MIT) | Animated copy-paste components ("animasteribrary" resolved to these two) | Specialized animation ingredients, shadcn-stack fit | $0, copy-paste (not npm deps) | **Adopt with caveat** — per-use, justified | Prefer Animate UI for shadcn fit; Animata for one-off effects |
| Motion (motion.dev) | React animation library (ex-Framer Motion) | Default declarative animation above CSS | MIT, free | **Adopt** | `npm i motion` |
| GSAP (gsap.com) | Complex timelines / scroll choreography | Only when Motion/CSS genuinely insufficient | 100% free incl. all Club plugins (Webflow) | **Adopt with caveat** — justified use only | Confirm license on gsap.com/pricing if re-scouted |
| Lenis (lenis.darkroom.engineering) | Smooth scroll / scroll storytelling | Sophisticated scroll experiences only, NEVER default | MIT, free; honors `prefers-reduced-motion` by default | **Adopt with caveat** — optional | — |
| animations.dev (Emil Kowalski) | Motion learning resource | Learning only | Paid course; never a dependency | **Reference only** | — |
| ThreeUI (threeui.com) | Visual-ingredient gallery (Three.js/WebGL + CSS-DOM buttons, heroes, backgrounds, effects; Pro/free tiers; MCP; GitHub) | Tier-1 visual direction: buttons, sections, heroes, backgrounds, effects, page compositions — patterns adapted, never cloned | Community items explorable free; premium marked Pro | **Adopt with caveat** — ingredients only; 7-question background test; no WebGL-by-default | Verified 2026-09-12 via official gallery + 21st listing |
| Watermelon UI (ui.watermelon.sh; github.com/sandraike/watermelon-ui-ds) | 260+ copy-paste React components (Tailwind v4, Radix, Motion; shadcn-CLI registry; blocks/dashboards/templates) | Polished functional treatments where ThreeUI is too visual or shadcn too generic | $0 (open-source; MIT per repo badges — verify LICENSE file before copying code) | **Adopt with caveat** — inspect per component; React/npm-based, so static pages adapt patterns only | Verified 2026-09-12 via repo + catalog; component pages JS-rendered (taxonomy inspected, individual source where retrievable) |
| Cult UI (cult-ui.com; github.com/nolly-studio/cult-ui) | Copy-oriented shadcn-ecosystem components (Tailwind, shadcn-compatible; registry/MCP; Pro tier) | Distinctive buttons, animated/utility/niche interactions, cards, text/texture effects, product widgets | Free MIT core; Pro blocks/templates paywalled | **Adopt with caveat** — free MIT core only; Pro-only = PROPRIETARY / ACCESS RESTRICTED, never bypass | Verified 2026-09-13 via repo (MIT LICENSE.md, copy-paste positioning, Pro separation) |
| Refero Styles (styles.refero.design) | Design-system source (2,000+ AI-readable DESIGN.md systems: tokens, typography, spacing, radius, shadow, component/layout rules) | Design-system harvest: type/color/spacing/shape/layout/surface/button/hierarchy rules adapted to product | Browsable free; system content © respective products | **Adopt with caveat** — rules only (`REFERO STYLE → RULE USED → PRODUCT ADAPTATION`); never wholesale copies, never branding/assets | Verified 2026-09-13 via live gallery (DESIGN.md examples, token/component/rule structure) — distinct from refero.design screen research |
| ShaderGradient (shadergradient.co; github.com/ruucm/shadergradient) | Animated shader-gradient visuals (`ShaderGradientCanvas`/`ShaderGradient` React + three + R3F; Figma/Framer + URL-query configs) | SPECIALIZED ONLY: hero/atmospheric/shader backgrounds where materially improving | MIT © ruucm (repo); paid/proprietary presets blocked | **Conditional** — permitted configs only; heavy WebGL must pass 7-question test + Ponytail; never default, never page-design substitute | Verified 2026-09-13 via repo (MIT license section, packages, usage, params) |
| "Refro Design" | NO distinct verifiable identity found (searched 2026-09-12; results resolve only to Refero) | Must NOT be recorded or invoked as a separate source | — | **Unresolved** — treat as likely Refero alias pending owner clarification | Never invent resources |

Animation hierarchy (confirmed): CSS/native → Motion → specialized copy-paste (Animate UI/Animata) → GSAP/Lenis when justified. Reduced-motion supported at every tier.

Reference extraction rule: extract hierarchy, layout principle, interaction pattern, typography/spacing/motion principles, IA. NEVER extract exact copy, branding, logos, proprietary assets, source code, or identity.

## Install rules

- Install **project-local only**: copy skill folder into `.opencode/skills/`. Never edit global OpenCode/agent config.
- **Never paste component-library demos unchanged** — adapt to product's language (§14, DESIGN-STACK).
- Whenever two skills solve nearly the same problem, keep the strongest/simplest and record the overlap here. Conditional skills stay conditional.

## Evaluation backlog (from SKILL-SCOUT)

See `SKILL-SCOUT.md` for the full evaluation of: frontend-design, web-design-guidelines, design-taste-frontend, anti-ui-slop, ui-ux-pro-max, high-end-visual-design, redesign-existing-projects, impeccable, Emil Kowalski design/motion, Playwright/webapp-testing, theme-factory, designer-skills-collection/Owl-Listener, Design Process Pack/Julian Oczkowski, Figma-implement-design, accesslint, Excalidraw-diagram, ponytail.