# SCENICA — DESIGN ROUND 0 (Visual + Interaction Direction)

Status: DIRECTION ONLY — no production code. Human PASS required before Round 1.
Sources read: all 28 files in `products/scenica/` + `research/ideas/scenica/scenica.md` + DESIGN-STACK.md + 1DESIGN (ORYZO) + 2DESIGN (Active Theory) + 3DESIGN (Dialog). No assets, copy, branding, or compositions copied. Principles only.

---

## 1. Design thesis

Scenica is a **cinematic production tool**, not a SaaS dashboard.

Promise: **Build websites that move.** Pick a preset → Describe → Generate → Animate → Build → Deploy.

Voice: confident, editorial, precise. Speaks like a cinematographer: scenes, keyframes, cuts, grades, camera — never "AI magic" or "10x productivity."

Visual stance: **dark cinema with warm light.** Ink-warm void, parchment type, one rationed amber signal, generous black space. Marketing demonstrates the product by *being* cinematic; the builder recedes so the preview is the hero.

Differentiation contract (from PRD / customer-workflow / scene-system):
- keyframe-first generation (palette/composition/type/motion locked before pages)
- cheapest-effective-medium rendering (CSS → SVG → image → sequence → video → WebGL)
- element-selective edits, token-locked consistency, tiered responsive scenes, portable export

If a decision doesn't serve brand + story + function, it doesn't ship.

---

## 2. Visual identity

### Typography

Three-family system, all open-source / system-portable (no PP Radio Grotesk, Halyard, nbarchitekt copies):

- **Display: editorial serif** — direction: `Instrument Serif` (fallback: Georgia, Times). Used for marketing hero + section titles + preset names only. Never for UI chrome. Character: high-contrast, film-title gravity.
  - weights: 400 only (no bold serif)
  - scale: 40 / 56 / 72 / 96 / 128px
  - line-height: 0.95–1.05 display, 1.1 section
  - tracking: -0.02em display, -0.01em section
  - case: sentence-case (deliberate break from ORYZO all-caps — Scenica is director, not museum label)

- **Body/UI: geometric sans** — direction: `Inter` (fallback system-ui).
  - weights: 400 body, 500 emphasis/nav, 600 only for tiny labels
  - sizes: 13 / 14 / 16 / 18 / 21px
  - line-height: 1.5 body, 1.4 UI, 1.2 labels
  - tracking: -0.011em body, -0.005em UI

- **Technical/mono: metadata** — direction: `JetBrains Mono` (fallback ui-monospace).
  - uses: stage numbers (01–06), scene timelines, cost/credit readouts, version IDs, status
  - sizes: 11 / 12 / 13px, uppercase, tracking +0.08em, tabular-nums always
  - numeric rule: all prices, credits, timings, frame counts use mono tabular figures

Hierarchy rule: one serif statement per viewport, everything else sans/mono. Never two serif headlines competing.

### Color

No AI purple/blue gradients. Single warm signal on warm-dark void.

| Role | Token | Value | Notes |
|---|---|---|---|
| canvas void | `--sc-canvas` | `#0C0B09` | warm near-black, distinct from pure black |
| elevated surface | `--sc-surface` | `#161310` | builder panels, cards |
| sunken / scrim | `--sc-scrim` | `#000000A6` | overlays over preview |
| paper (light breaks) | `--sc-paper` | `#F4EFE6` | preset gallery + export proof only |
| primary text (dark) | `--sc-ink` | `#F5EFE3` | parchment, not pure white |
| secondary text | `--sc-muted` | `#A8A094` | descriptions, meta |
| hairline | `--sc-line` | `#2A251F` | 1px borders, dividers; dashed variant for pipeline |
| faint | `--sc-faint` | `#4A443B` | disabled, placeholders |
| signal amber | `--sc-signal` | `#FFB224` | ONE action accent: primary CTA + active stage + camera path. Nowhere else |
| preview teal | `--sc-teal` | `#6EE7C8` | generation status / success pulse only, never marketing CTA |
| success | `--sc-ok` | `#4ADE80` | publish live, validation pass |
| warning | `--sc-warn` | `#FFB224` | quota, budget pressure (shares signal hue intentionally = cost = attention) |
| error | `--sc-err` | `#F87171` | failed job, breach |
| grade wash | `--sc-grade` | `radial warm glow 8% opacity` | atmospheric light, never a gradient background band |

Rules: signal used for ≤1 element per viewport. Teal never on marketing CTA. Generated sites inherit brand tokens, never Scenica's own amber by default.

### Geometry

- page max-width: **1200px** (structural principle from 3DESIGN studies, own execution)
- gutters: 24px desktop, 20px tablet, 16px mobile
- spacing scale (8pt): 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160
- section spacing: 128–160px desktop, 80px tablet, 64px mobile (airier than reference 80–120 = cinematic pacing)
- radius language (deliberately distinct from Dialog 24/28/32): buttons **999px pill**, cards **18px**, builder panels **14px**, overlays/dialogs **20px**, inputs **10px**, badges **999px**, browser/preview frame **16px**
- buttons: 14px/500, padding 12px 22px primary, 10px 18px small; 1px hairline for ghost
- shadows: near-zero on dark. `0 1px 2px rgba(0,0,0,.4)` max. Depth via 1-step surface lift + hairline, not blur. Light paper sections: single soft `0 8px 30px rgba(12,11,9,.08)`.
- density: marketing airy, builder compact (12px element gap, 14px panel padding).

### Motion (summary — full in §9)

Cinematic, not decorative. Ease: `cubic-bezier(0.22,1,0.36,1)` (out-expo). Micro 180–280ms, transitions 400–600ms, scenes 800–1400ms, scroll-scrubbed (GSAP). Opacity + translateY(12–24px) + blur(6→0) for reveals. No springs, no bouncy overshoot. All motion has static equivalent.

---

## 3. Header direction (decided)

**Decision: floating contained dark pill — structure from 3DESIGN, skin from Scenica.**

Reasoning: 3DESIGN proves floating pill (white, 32px radius, ~64px height, 1200px centered, mark-left / links-center / CTA-right, no mega-menu) reduces chrome and frames the hero as a floating browser. ORYZO proves transparent fixed nav can disappear; Active Theory proves chrome must whisper when a rendered world is present. Scenica needs both: trustworthy marketing nav + disappearing builder chrome. So we keep the *structure* (contained, centered, lightweight) and re-skin to dark cinema with own tokens, type, and behavior.

Spec (marketing):
- container: max 1200px, height 60px, radius 999px, background `rgba(22,19,16,.72)` + `backdrop-blur(12px)`, 1px border `var(--sc-line)`, margin-top 16px, centered, floats over hero
- left: Scenica mark — 20px serif "Scenica" + 8px mono dot/record indicator (● REC-style, amber) — typographic mark, no icon copy
- center: 4 links max — Workflows, Presets, Examples, Pricing — Inter 13px/500 `#A8A094`, hover → `#F5EFE3`, active = amber underline 2px, 6px offset
- right: mono credit readout (auth only, e.g. `1.2K CR`) + ghost "Sign in" + primary pill "Start building" (amber fill `#FFB224`, black text `#0C0B09`)
- scroll state: at rest over hero — translucent; past 48px — solidifies to `#161310E6` + hairline + `0 8px 30px rgba(0,0,0,.35)`; hide-on-scroll-down, show-on-scroll-up (200ms)
- hover: links fade (150ms), CTA lifts 1px + brightness 1.05, no scale pop
- responsive: <900px → pill collapses to mark + CTA + hamburger; menu opens as 20px-radius overlay sheet, full-width links 18px serif, staged fade
- authenticated/editor: header thins to 52px bar, left = project switcher, center = preview controls (desktop/tablet/mobile icons), right = Publish button; disappears during cinematic playback (cursor-idle 2.5s → chrome opacity 0)

What we did NOT copy: no white pill, no `#f69251`, no Dialog wordmark/arrow, no Inter-tight headlines, no email-underline form pattern.

---

## 4. Marketing page direction (cinematic narrative, not SaaS grid)

Mode: MARKETING (per DESIGN-STACK §5b). One idea per viewport. One serif statement per screen.

1. **HERO (100vh, dark void)** — live cinematic visual behind hairline scrim, not a screenshot. Eyebrow mono: `AI CINEMATIC BUILDER — V1`. Serif 96px: "Build websites that move." Sans 18px sub: "Preset → brief → keyframe → motion → site → publish. Editable, responsive, yours." CTA row: amber pill "Start building" + ghost "Watch a site assemble ▸". Below: mono pipeline ticker `01 PRESET · 02 BRIEF · 03 KEYFRAME · 04 MOTION · 05 BUILD · 06 DEPLOY` scrolling horizontally. Trust row: honest numbers only (e.g. "Slice-0 renderer · LCP 1.8s · 0 console errors") — no fake logos/testimonials per Rules §9.

2. **PIPELINE (continuous scroll, 6 stages, pinned)** — NOT six cards. One sticky viewport: left mono stage number + serif stage title + 2-line description; right cinematic frame that cross-fades/scrubs as you scroll (GSAP ScrollTrigger pinned, 6 × 80vh). Progress = amber hairline filling + `01/06` mono counter. Each stage visually hands off (wipe iris, not card hover).

3. **PRESET GALLERY (paper break `#F4EFE6`)** — 8 original presets, editorial grid, alternating sizes. Names (final, original): **Monograph** (editorial), **Velvet** (luxe), **Concrete** (brutalist), **Signal** (technical), **Vitrine** (product), **Atelier** (fashion/studio), **Blueprint** (architectural), **Nocturne** (cinematic-minimal). Each tile: large serif name + mono tags (`SERIF / WARM / SCROLL-SCRUB`) + still frame. Hover: still → 3-frame scrub. No reference-product names anywhere.

4. **BEFORE → AFTER (dark, 3-act)** — Act 1: raw brief (mono block, left). Arrow = animated dashed line. Act 2: keyframe (graded still). Act 3: motion (scrubbable strip) → finished site in 16px browser frame. Caption mono: `BRIEF 42 WORDS → KEYFRAME 1 → SEQUENCE 84 FRAMES → SITE 1.9MB`.

5. **LIVE EXAMPLE (full-bleed preview stage)** — real generated-site frame in sandbox-style chrome with device switcher (1440/768/390), reduced-motion toggle, and perf badge (`LCP 2.1s · 96KB JS · 30fps`). Scrub slider drives frame sequence. This is the D1 rule: hero shows the product.

6. **OWNERSHIP / EXPORT (paper, proof not pricing)** — three proof blocks: Publish (URL + rollback line), Domain (custom domain row), Export (ZIP manifest: `index.html + tokens.css + frames/ + meta.json`). Button: "Download sample export". Pricing teaser single line: "Creator $29 · Studio $59 · capped, no surprises" linking to pricing (pricing stays first-class per D9 but not in Round 0 scope).

Footer: minimal, mono, 3 columns, honest status line.

---

## 5. Product app direction (creative production environment)

Mode: PRODUCT. Chrome recedes, preview leads.

Zones (desktop 1440):
- **Left rail (300px): Brief / Chat** — structured Site Brief fields (brand, audience, mood, sections, CTA) + element chat input. Generation state = timeline rows with cost quote (`EST 42¢ · 3 STILLS`) + progress + cancel + refund note. No freeform mega-prompt.
- **Center (flex): cinematic preview** — sandboxed iframe in 16px frame, device switcher, scrub bar, play, quality badge, FPS meter (dev). Playback idle → builder chrome dims 40%.
- **Right (280px): Scene / Properties** — selected element → Scene node editor: Camera / Light / Background / Objects / Interaction / Timeline (from scene-system.md). Sliders + token swatches, no code. Regenerate = per-element button with ceiling note (`≤3 variants`).
- **Top (52px): project bar** — project switcher left, preview controls center, credits + Publish right.
- **Bottom (36px): status strip** — mono: `v12 · SAVED · 84 FRAMES · 1.4MB · LCP 2.1s · PASS`.
- **Dashboard (pre-builder): shelf** — project cards (still + name + status mono) + usage meter (credits bar, gens remaining), not a table of rows.

States (all designed, none silent): empty (preset picker), quoting, generating (progress + live cost), preview, element-selected, publish (staging→prod), failed (refund + retry), over-quota (hard stop + top-up), offline, version restore (timeline scrub).

Non-goal: no node-graph motion editor, no multi-user cursors in V1.

---

## 6. Cinematic preview language

Cheapest medium wins (cinematic-engine.md). Preview must declare its medium in mono: `MEDIUM: SEQUENCE · 84F · AVIF`.

- **Keyframes**: graded still, always present, always the poster/fallback. Sets palette/type/motion.
- **CSS 3D**: tilt, perspective, depth, hover lift. Default for cards/buttons.
- **SVG**: lines, paths, dashed pipeline anims, masks. Second choice.
- **Frame sequences**: PRIMARY. Canvas playback + image fallback + poster. Scroll-scrub via GSAP ScrollTrigger; `≤120f desktop / ≤60f mobile`, AVIF-first, lazy below fold.
- **Video**: V1.5+ only, capped, never autoplay with sound, always poster + captions track slot.
- **WebGL**: earned only — true camera control / spatial interaction / central shader. Lazy-loaded, Tier A desktop only, killed on Tier C/D.
- **Scroll scenes**: pinned sections, choreography, staggers, timelines. One scroll system (GSAP).
- **Transitions**: iris wipe / fade-through-black / slide-grade (150–400ms). No flip-cube, no glitch unless brief demands.
- **Camera**: declared path (dolly/pan/orbit) + responsive variant; mobile = reduced parallax (±4px max) + touch scrub.
- **Depth**: 2–3 layers max (foreground/type/mid/background). True camera depth preferred over fake parallax stacks.
- **Responsive**: tiers A full / B reduced / C poster / D static (see §10). Variant chosen at generation, switchable in preview.

---

## 7. 3D quality bar (hard constraints from benchmark + budget files)

Goal is not more 3D — it is stronger composition, depth, light, camera, type, transitions, responsiveness, performance.

Wins required (beat reference on wedges, parity elsewhere): editing (element-selective), consistency (token-locked), responsive (tiered variants), performance (enforced), export (portable).

Publish gate (validator blocks on breach):
- JS ≤150KB gz desktop / ≤80KB mobile; textures ≤1.5MB / ≤600KB; 1×GLB ≤2MB Tier-A only; ≤30 draw calls hero; 1 rAF, pause offscreen
- ≥50fps A / ≥30fps B (auto-degrade); LCP ≤2.5s desktop / ≤3.5s 4G; TTI ≤4s; first-view ≤2MB / ≤1MB
- sequences ≤120f/≤80KB desktop, ≤60f/≤40KB mobile, poster always; Tier C no asset >1MB; Tier D zero animation JS
- acceptance per story: 0 console errors, element edit byte-identical rest, publish→live <60s + rollback, ZIP standalone, 390px + reduced-motion verified

Premium feel checklist (reviewer): intentional camera (not drift), motivated light (key/fill/rim from tokens), material restraint (matte > chrome), typographic contrast (serif vs mono), paced reveals (800–1200ms beats), continuity (grade carries across sections), silence (black space > effects).

Anti-generic 3D rule enforced: no rotating cubes, floating spheres, blob particles, grid floors, chrome, purple/blue wash unless brief explicitly demands — every effect cites brand+story+function in scene metadata.

---

## 8. Design tokens (proposal — lock in Round 1)

```
--sc-canvas:#0C0B09; --sc-surface:#161310; --sc-scrim:rgba(0,0,0,.65);
--sc-paper:#F4EFE6; --sc-ink:#F5EFE3; --sc-muted:#A8A094;
--sc-line:#2A251F; --sc-faint:#4A443B;
--sc-signal:#FFB224; --sc-signal-ink:#0C0B09;
--sc-teal:#6EE7C8; --sc-ok:#4ADE80; --sc-warn:#FFB224; --sc-err:#F87171;
--font-display:"Instrument Serif",Georgia,serif;
--font-sans:"Inter",system-ui,sans-serif;
--font-mono:"JetBrains Mono",ui-monospace,monospace;
--text-hero:96px/0.98/-0.02em; --text-h1:64px/1.0/-0.02em;
--text-h2:40px/1.05/-0.01em; --text-lead:18px/1.5; --text-body:16px/1.5;
--text-label:13px/1.3; --text-mono:12px/1.4/+0.08em uppercase tabular;
--max:1200px; --gut-d:24px; --gut-m:16px;
--r-btn:999px; --r-card:18px; --r-panel:14px; --r-overlay:20px; --r-input:10px; --r-frame:16px;
--ease:cubic-bezier(0.22,1,0.36,1);
--dur-micro:200ms; --dur-ui:450ms; --dur-scene:1100ms;
```

Layout: max 1200, gutters above, breakpoints 1440 / 1200 / 900 / 640 / 390. Spacing scale §2.
Components: primary pill (amber), ghost pill (hairline), mono badge, hairline input (10px radius, 1px line, focus = amber 2px outline offset 2px), panel (14px, surface + line), tabs (pill container, active = paper fill on dark), selector (preset tile: 18px card, still + serif + mono), dialogs (20px overlay, scrim blur 8px), generation row (mono cost + progress hairline), preview controls (icon pill group), publish (amber, mono state `STAGING → LIVE`).

---

## 9. Motion system

- micro: hover 180ms, fade 200ms, button lift 1px, link color 150ms — `ease-out`
- UI: panel open 400ms, tab switch 350ms, dialog 450ms scale .98→1 + fade — `var(--ease)`
- scene: hero choreography 1100ms stagger 90ms (eyebrow → title lines → sub → CTA → ticker), pipeline wipe 600ms, preset scrub tied to scroll
- scroll: GSAP ScrollTrigger only; pin pipeline, scrub sequences, reveal once (`once:true`, 12px rise)
- preview: play/pause crossfade 300ms, scrub direct (no smoothing lag >80ms), quality switch fade-through-black 250ms
- parallax: desktop ±12px max, mobile ±4px, disabled when reduced-motion or Tier C/D
- durations: micro 180–280, UI 350–600, scene 800–1400, never >1600 outside scroll-scrub
- easing: `cubic-bezier(0.22,1,0.36,1)` primary; `linear` for scrub; `ease-out` micro

---

## 10. Responsive strategy (tied to performance budget)

- desktop ≥1200: full A — sequences 120f, WebGL allowed, 3-layer depth, 1200px canvas
- laptop 900–1200: full, reduced glow, same frames
- tablet 640–900: B reduced — 60–80f, no WebGL by default (tap to enable), 2-layer, nav collapses, builder stacks preview-top / controls-bottom sheet
- mobile ≤640 / 390 QA: C fallback — poster-first, tap-to-play sequence ≤60f ≤40KB/f, no WebGL, header mini-pill (mark + CTA), pipeline becomes vertical cards with swipe scrub, builder = preview + bottom sheet properties, publish via sticky bottom bar
- low-end / Tier C: poster + content parity, zero sequence JS if memory pressure
- Tier D reduced-motion: static keyframe everywhere, zero animation JS, scrub slider becomes still stepper
- validator: 390/768/1440 browser QA per slice; breach blocks publish

---

## 11. Accessibility

- keyboard: full builder operable (tab order: brief → preview controls → properties → publish); visible focus `2px solid var(--sc-signal)` offset 2px; skip-link to preview; Esc closes overlays, restores focus
- screen reader: preview region `role=region aria-label="Generated site preview"` + mono status live-region (`aria-live=polite` for gen progress/cost); scene timeline has list semantics; decorative canvas `aria-hidden`
- contrast: parchment on void 13.2:1, muted on void 5.1:1, amber on void 8.4:1, black on amber 9.8:1 — all AA+; paper sections ink `#1A1712` on `#F4EFE6` 14.1:1
- reduced motion: `prefers-reduced-motion` + manual toggle → Tier D, kills GSAP/sequences/WebGL, shows stills + stepper
- touch: targets ≥44px, scrub slider thumb 28px, sheet handles, no hover-only actions
- non-motion fallback: every claim has static proof (poster, manifest, badge)

---

## 12. ThreeUI foundation candidates (Round 1 — inspect, license-check, no Pro)

Serve Scenica, not flash. INSPECT at Round 1, EXACT only if MIT-permitted, else ADAPT/REIMPLEMENT; label every import.

Priority:
1. hero visual treatment — full-viewport dark canvas + graded still + ticker pattern (adapt layout, own tokens)
2. standout CTA — pill button group pattern (adapt radius/behavior, own amber)
3. background treatment — subtle grain + radial grade wash configs (ShaderGradient configs only where MIT, else CSS radial)
4. cinematic reveal — scroll-triggered opacity/blur/y pattern (Motion/GSAP reimplementation preferred over heavy dep)
5. high-impact buttons — press/hover micro states
6. visual transitions — fade-through-black / iris wipe presets
7. distinctive interactive sections — pinned pipeline stage + scrubbable strip (custom, GSAP)

Do NOT use in Round 1: WebGL hero crowds, particle fields, chrome cards, bento grids, glass-everywhere, purple nebulae, cursor-trail toys — violate anti-generic + budget. Forms/dashboard → Watermelon/shadcn Round 2. Polish → Magic/React Bits/Motion Round 3.

---

## 13. Source / design research

| Source | Principle extracted | Scenica adaptation |
|---|---|---|
| 3DESIGN Dialog | floating contained pill nav, 1200px center, 64px bar, light chrome, mark-left/links/CTA-right, subtle scroll solidify, no mega-menu; single-accent discipline; airy section gaps | structure kept, re-skinned dark (`surface .72 blur + hairline`), own amber, own serif mark, hide-on-play behavior |
| ORYZO 1DESIGN | object-as-hero, vast negative space, restrained palette, type+object lead, dashed hairline dividers, 100vh statements, one sparing accent | preset grammar rations color; pipeline uses dashed connectors + full-viewport beats; accent stays editorial (not button-spam) |
| Active Theory 2DESIGN | chrome disappears, world IS interface, near-zero noise, translucency over shadow, opacity-led transitions | preview-first builder; UI dims during playback; overlays use scrim+blur, never drop shadows; opacity > slide |
| DESIGN-STACK D1/D3/D5/D7 | hero shows product; one accent sober base; motion only on demo; zero stock | live example + perf badges; single amber; motion rationed to hero/pipeline/preview |
| styles.refero.design (to harvest R4) | type/spacing/token/surface rules | RULE → ADAPTATION only, never wholesale; harvest spacing rhythm + focus patterns |
| Refero / Recent | hierarchy/flow research | research-only, never copied |
| shadcn / Watermelon / Magic / React Bits / Cult / Motion | deferred to R2–R3 per matrix | license-gated, labeled EXACT/ADAPTED/REIMPLEMENTED |
| ShaderGradient | atmospheric configs | configs only where MIT, CSS fallback first |
| web-design-guidelines + a11y + checklist | contrast, focus, reduced-motion, semantic | baked into §11 + Round 4 audit |

No wholesale copies. No Draftly anything (code/brand/copy/presets).

---

## 14. Anti-generic gate

Test: could this be mistaken for generic AI SaaS? **No — if the three decisions below hold.**

1. **Keyframe-first pipeline as scroll narrative** — marketing IS the product flow (01–06 pinned scrub with handoffs), not hero→6-cards→pricing. No competitor markets generation as film production.
2. **Preview-first disappearing builder** — center-stage sandboxed cinema with mono `MEDIUM/FRAMES/COST` telemetry + chrome that dims on play. SaaS shows dashboards; Scenica shows a screening room.
3. **Warm-dark editorial system + mono production labels** — Instrument Serif sentence-case + JetBrains Mono stage/timecode + single amber signal on warm void. Breaks from Inter-on-white + purple-gradient AI soup and from ORYZO all-caps / Dialog light-pill clones.

Supporting distinctions: paper-break gallery (dark→paper→dark rhythm), export manifest as proof block, perf badges as trust (not fake logos).

---

## 15. Explicit implementation rules for Round 1

1. ThreeUI-first per design-source-matrix; INSPECT licenses, exclude Pro; label every import EXACT/ADAPTED/REIMPLEMENTED. Pro bypass = KILL line.
2. Implement marketing shell only: header pill + hero + pipeline skeleton + gallery grid + example stage + export proof + footer. Static stills, no AI, no builder logic.
3. Tokens from §8 as CSS custom properties; no Tailwind in generated-site patterns; builder may use minimal utility but tokens win.
4. GSAP + ScrollTrigger only for scroll; no Three.js in Round 1 (posters/stills prove composition first).
5. Responsive 390/768/1440 + reduced-motion Tier D from day one; validator stub logs budgets per section.
6. A11y: focus-visible, live-region for pipeline counter, semantic landmarks, AA contrast — audit before PASS.
7. Original presets (Monograph/Velvet/Concrete/Signal/Vitrine/Atelier/Blueprint/Nocturne) — no reference names/compositions.
8. No fake metrics/testimonials; perf claims need measured numbers or omit.
9. Human PASS gate ends Round 1. Do not start builder, billing, or AI pipeline until PASS.
10. Kill criteria: if hero LCP >2.5s desktop or 390px breaks or amber-on-void contrast fails, fix before new patterns.

Main risks: serif at 96px hurting LCP (mitigate: subset + display:swap + poster-first); pinned scroll jank on mobile (mitigate: disable pin ≤640, swipe stepper); amber overuse drift (mitigate: lint — one signal per viewport); ThreeUI license creep (mitigate: matrix check per import).
