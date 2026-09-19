# 3D performance budget — Scenica (targets, all generations must pass)

- Initial JS (generated site): ≤150 KB gz desktop / ≤80 KB mobile tier.
- Textures per page: ≤1.5 MB desktop / ≤600 KB mobile; AVIF/WebP, lazy below fold.
- Models: prefer none; cap 1 compressed GLB ≤2 MB, desktop Tier A only.
- Shaders/draw calls: ≤30 draw calls hero scene; single rAF loop, pause offscreen.
- Frame rate: ≥50fps desktop Tier A; ≥30fps mobile Tier B (auto-degrade below).
- Load: LCP ≤2.5s broadband desktop / ≤3.5s 4G mobile; TTI ≤4s.
- Network payload (first view): ≤2 MB desktop / ≤1 MB mobile.
- Frame sequences: ≤120 frames/scene desktop / ≤60 mobile; ≤80 KB/frame desktop, ≤40 KB
  mobile (AVIF-first); lazy-load below fold; poster always.
- Mobile memory: no single asset >1 MB on Tier C; video/sequence → poster fallback.
- Reduced motion (Tier D): static hero + content parity, zero animation JS required.
- Enforcement: validator blocks publish on breach; budgets logged per generation (observability).
