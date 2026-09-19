# Model routing — Scenica (provider-swappable classes)

Reference stack (publicly documented by Draftly, verified 2026-09-13 where noted):
Gemini 2.5-class engine, Veo 3.1 motion generation (verified: Quick Start pipeline step),
Draftly Vision / Vision Lite image engines, Omni Flash Video, Composer site engines,
Concierge AI; custom Gemini keys route site/chat through user quota while Claude and Veo
stay vendor-side. Treat branded names as product wrappers, not public base models. We do
NOT reproduce this routing — it is competitive context only.

## Our router (replace providers without rewriting product)

| Class | Role | Cost posture |
|---|---|---|
| Planner | brief → structured Site Brief + section plan | mid-tier reasoning, per-job |
| Copy | headlines, sections, SEO text | cheap model |
| Image | keyframes, section art, textures | best cost/quality stills (Imagen-class $0.04) |
| Image-to-video | keyframe → motion clip (V1.5+, capped) | best cost/quality video; heaviest line item |
| Code | schema → HTML/CSS/JS sections | strong coding model, mid-tier |
| Critic | visual/structural QA passes | vision-capable, nano-first, sampled |
| Deterministic | validation, extraction, optimization, assembly | no AI, $0 |

Routing rules: nano-default for edits/critics; premium only for planner/code-gen where
measured better; per-class spend logged per job; provider interfaces behind an internal
adapter so substitutions need no product rewrite. BYOK optional lever (V2), never the core.
