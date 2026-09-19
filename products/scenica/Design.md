# Design.md — Scenica (ROUND 0 direction; no implementation)

## Brand/product personality

Confident, editorial, precise; dark-cinema with warm light. Speaks like a cinematographer,
not a SaaS dashboard. Original identity — nothing borrowed from the reference product.

## Customer / visual direction

Agency-grade portfolio energy: oversized serif display, mono technical labels, tabular data,
hairline rules, generous black space, restrained phosphor accents. Anti-patterns: purple/blue
AI gradients, glass-everywhere, bento soup, fake testimonials, random motion, template look.

## Typography / color / tokens

Display serif (own pairing TBD in Round 1) + mono labels + system sans body. Ink-black canvas,
warm paper surfaces, single phosphor accent (teal-amber family, NOT purple/blue), amber/red
reserved for urgency semantics. Spacing 8pt; radius small; shadows shallow. Full tokens locked
in Round 1; AI generates within tokens, never arbitrary CSS.

## Layout / components / hierarchy

Marketing: hero (live cinematic visual, prompt→site headline, preset-explorer CTA) →
six-stage workflow told as one continuous scroll pipeline (never icon-grid cards) → preset
gallery (original families: editorial, luxe, brutalist, future, product, fashion, studio,
architectural, technical, cinematic-minimal) → before→after (brief→keyframe→motion→site) →
live interactive example → export/ownership proof. Header (first-class): floating contained
nav, centered max-width (~1200px), light chrome, mark left, links center/left, CTA right,
responsive collapse, subtle scroll-state transition — informed by supplied reference
structural principles (own visual execution, nothing copied). Builder: left brief/chat,
center preview, right element properties; dashboard: project shelf + usage.

## Motion / accessibility

Scroll reveals + hero choreography only where they demonstrate the product; every animation
reduced-motion-safe with static fallback. Contrast-checked defaults; keyboard-first builder;
focus-visible everywhere; ARIA for canvas/preview regions.

## Refero design-language studies (principles only, nothing copied)

- ORYZO → restrained palette, large negative space, strong type, one sparing accent,
  product-as-artifact → our preset grammar rations color; heroes lead with type + object.
- ACTIVE THEORY → chrome nearly disappears; the rendered world IS the interface; near-zero
  noise around immersive scenes → our preview-first builder; UI recedes during playback.
- Third reference (header structure) → 1200px centered max-width, light full-bleed canvas,
  floating white pill nav, left mark, compact links, right CTA, ~64px container, no
  mega-menu → our header direction above, own execution.

## ThreeUI foundation (Round 1 mandate)

ThreeUI builds the first complete direction (heroes, backgrounds, buttons, sections,
interactions). Watermelon/shadcn (Round 2) for forms/dashboard; Magic/React Bits/Motion
(Round 3) for interaction polish; Refero/Styles/guidelines/checklist/a11y (Round 4); QA (Round 5).
Source-first rules + license records apply (design-source-matrix.md). Human PASS each gate.
