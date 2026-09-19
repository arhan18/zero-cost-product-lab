# 3D quality benchmark — Scenica (dimensions + measurement, no invented numbers)

| Dimension | Reference (observed 2026-09-13) | Our target | How measured |
|---|---|---|---|
| Hero quality | motion-rich scroll heroes on example sites | higher: art-directed composition, brand-lit | expert visual review, 3 reviewers |
| Depth | layered scroll parallax | higher: true scene depth (camera + layers) | scene-composition checklist |
| Motion | scroll-tied playback, reveals | higher: choreographed pacing + continuity | timing review + frame sampling |
| Mobile | responsive HTML claimed | higher: intentional mobile scene variants | 390px QA per generation |
| Performance | sub-2s claims (unmeasured) | equal/better: enforced budgets | LCP/payload/FPS metrics (see budget file) |
| Brand consistency | per-generation styling | higher: token-locked systems | token-adherence audit |
| Editing | chat/inline/style-packs; full regen fallback | higher: element-selective edits | workflow step count + diff test |
| Export quality | HTML/ZIP/Git observed | equal/better: clean portable output | standalone-open + link-check test |
| Responsiveness | responsive output claimed | higher: tiered scene strategy | viewport test matrix |

Quality defined across visual (composition, light, material, type, hierarchy), interaction
(hover/scroll/camera/transitions/feedback), cinematic (pacing, reveals, continuity),
3D (light/shadow/material/camera/parallax), and product (brand, responsive, a11y, perf,
editable structure) dimensions. More WebGL ≠ better; more animation ≠ better.
Win requirement: beat the reference on several dimensions (editing, consistency, responsive,
performance, export), not all — chosen differentiators only.
