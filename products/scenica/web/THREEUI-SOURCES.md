# Round 1 — Source report (honest)

## ThreeUI sources inspected (2026-09-13, via web search + gallery taxonomy)
- `https://threeui.com/` — gallery index: Circle/Rectangle/Shader/Liquid-Metal buttons, Brand Orbs, backgrounds, hero sections. Confirmed: items tagged by runtime (`css dom button` vs `webgl2/glsl/shader`), Pro items marked `PRO`, community explorable free. Pages are JS-rendered (webfetch returned shell only) — no source copied.
- `https://threeui.com/buttons` — Animated button components (WebGL/Canvas/CSS, hover/loading/glow/tactile). Same JS-shell limitation.
- `https://threeui.com/backgrounds` — WebGL/GLSL backgrounds FAQ confirms required practice: canvas as background layer, preserve contrast, responsive camera, lower detail on mobile, reduced-motion/static fallback, pause offscreen.
- `https://threeui.com/hero` + `/browse` + `/three-js` — hero = visual + layout + CTA composition; background separable; per-component runtime + source; adapt params (type/color/spacing/copy/lighting/camera/motion).

License position: gallery terms, Pro-gated excluded (per design-source-matrix.md). No MIT license file verified for individual ThreeUI items from fetched content → treated as **research-only taxonomy**. Nothing pasted. All Round-1 visuals are **REIMPLEMENTED** CSS-DOM.

## ThreeUI → Scenica (all REIMPLEMENTED, none EXACT)
1. `ThreeUI buttons gallery (CSS-DOM Rectangle: Dark Glass / Sliding Text / Dot Border) → Scenica pill CTA + ghost + press states` — WHY: standout CTA needs tactile feedback without WebGL cost — MOD: pure CSS, 999px radius, amber `#FFB224`, 1px lift + brightness, 44px targets, own copy.
2. `ThreeUI backgrounds gallery FAQ (contrast / pause-offscreen / reduced-motion fallback) → Scenica grade + grain atmosphere` — WHY: cinematic depth must stay <budget — MOD: CSS radial washes + inline-SVG noise, no canvas/WebGL, `prefers-reduced-motion` kills ticker/parallax.
3. `ThreeUI hero sections (visual separable from layout, brand-adaptable) → Scenica film-opening hero (eyebrow/serif/lead/CTAs/browser-frame/ticker)` — WHY: hierarchy that converts without dashboard cliché — MOD: custom layout, own tokens/copy/stills, GSAP opacity/y/blur reveals instead of WebGL scene.

## Other sources consulted
- Round-0 spec + 1/2/3DESIGN principle tables (no assets copied)
- GSAP 3.12.5 + ScrollTrigger via jsDelivr CDN (license: free incl. all plugins per registry; used for reveals + hero parallax + scrub only; IO fallback if blocked)
- Google Fonts: Instrument Serif / Inter / JetBrains Mono (`display=swap`)

## Dependencies added
- None to repo (CDN-only: fonts + GSAP). No npm install. No Three.js. No Tailwind.

## Assets / fonts added
- No raster images. Stills = CSS gradients + inline SVG noise (0 bytes image payload). Fonts via Google CDN.

## Notable decisions
- Pipeline = sticky visual + IntersectionObserver stage switch (not pinned WebGL) → degrades to stacked cards ≤640px, static with reduced-motion.
- Preset gallery on paper `#F4EFE6` for dark→paper→dark rhythm (anti-generic break).
- Perf: own JS ~3KB, CSS ~9KB, zero images, 2 CDN scripts deferred; budgets logged in LIVE EXAMPLE + TRUST rows.

## Major revision (Round 1 cont.) — additions
- ThreeUI hero/background/button taxonomies re-applied: prompt-bar pill (CTA pattern, own amber), signal-scene glow/particle language (background principles: contrast-safe overlay copy, pause-offscreen, reduced-motion poster), funnel cards (ghost/pill micro-states). All REIMPLEMENTED CSS-DOM + 2D canvas; no WebGL, no source copied.
- Draftly pricing studied as IA benchmark only (toggle, estimator, top-ups, hosting packs, compare table, FAQ). No branding/copy/numbers cloned. Scenica credit math grounded in own ai-economics.md (106cr site / 1cr edit / 4cr still; plans Trial 120 / Creator 3,000 / Studio 8,000; packs $20/1k + $50/3k per pricing.md).
