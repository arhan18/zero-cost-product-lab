# Cinematic Scene System — Scenica (3D engine as product feature)

AI generates structured scene descriptions, not one-off WebGL blobs:

```text
Scene
 ├── Camera (position, lens, path, responsive variant)
 ├── Lighting (key/fill/rim tied to brand tokens)
 ├── Background (medium: css|svg|image|sequence|webgl)
 ├── Objects (model|text|decorative, each token-styled)
 ├── Interaction (hover/scroll/click bindings)
 └── Timeline (scroll states, transitions, pacing)
```

Properties: editable (panel controls, no code), reusable (presets reference scenes),
optimizable (medium auto-selected, budgets enforced), versionable (artifact history),
exportable (serializes into the ZIP). Design-system integration: brand type/color/spacing
drive 3D text, scene lighting, materials, CTA, background, motion timing — one visual system.

Medium rule: **simplest medium that achieves the effect** (CSS→SVG→image→sequence→video→
WebGL, in that order of preference). Mobile tiers: A full / B reduced / C fallback /
D static. Anti-generic rule: no rotating cubes, floating spheres, blob particles, grid
floors, chrome, or purple/blue wash unless the brief demands them — every effect serves
brand + story + function.
