# Cinematic engine — Scenica (render strategy + frame pipeline)

## Levels (cheapest effective medium wins)

- L1 CSS: hover tilt, perspective, depth, transitions, simple 3D movement.
- L2 GSAP/ScrollTrigger: scroll-driven motion, pinned sections, choreography, staggers,
  timelines. Preferred scroll system (mature, documented, MIT-free incl. all plugins).
- L3 Frame sequences: PRIMARY cinematic technique — keyframe → image-to-video → video →
  frame extraction → optimization → resolution variants → scroll controller → canvas/image
  playback. Deterministic scroll playback; adaptive quality per device/bandwidth.
- L4 WebGL/Three.js: only for true spatial interaction, camera control, dynamic objects,
  central particles/shaders — never the default.

## Frame pipeline

Keyframe → image-to-video → video → extraction → optimization → variants (desktop/tablet/
mobile/low-bandwidth) → scroll controller → playback (canvas, image fallback, poster).
Reduced-motion: static keyframe + content parity, always.

## Responsive cinematic tiers

Desktop full → tablet reduced complexity → mobile reduced frames/resolution + touch-first →
low-end poster/static → reduced-motion static. Adaptive frame quality is architectural,
not an afterthought.

## Scene integration

Engine output feeds the Cinematic Scene System (scene-system.md): every level declares
camera/light/objects/timeline metadata so scenes stay editable, versioned, exportable.
No decorative WebGL: every effect serves brand + story + function.
