# PRD — Scenica (AI cinematic website platform)

Product: **Scenica** — turn a creative brief into a production-ready cinematic website with
real design control. Helps freelance/agency creatives and founders ship sites that look
far more expensive than they could build themselves, without learning WebGL/motion tooling.

## Problem

A distinctive cinematic site (scroll choreography, depth, lighting, pacing) takes days of
WebGL/motion work or agency money. Prompt-to-site tools exist but regenerate whole pages per
edit, drift off-brand across sections, shrink desktop WebGL onto mobile, and lock output to
their hosting (FACT: competitive scan 2026-09-13 — full-regen cost models, hosting-coupled
export, no verified responsive-3D or generation-time performance budgets).

## Target customer

PRIMARY ICP: creative freelancers and small agencies shipping client marketing sites
(repeat projects, per-project WTP, distribution through client work). Secondary: indie
founders/personal brands. NOT initially: enterprise content teams, e-commerce backends.

## Outcomes

User goes brief → preview in minutes; edits one element without losing the rest; publishes to
subdomain or custom domain; exports portable code. Observably: first preview <10 min,
first publish <30 min, edit round-trip <60 s.

## Value proposition

Same category outcome as Draftly-class builders (brief → cinematic site → publish/export),
differentiated by: selective element-level editing with cost ceiling; a structured Cinematic
Scene System (editable, versioned, exportable — not one-off WebGL blobs); cheapest-effective-
medium rendering (CSS/SVG/image-sequence before live WebGL); enforced performance budgets and
responsive scene tiers; clean portable export. No Draftly copy/branding/presets/text reproduced
anywhere in this package — all analysis paraphrased from live pages.

## Positioning (exploratory)

"AI-powered cinematic websites with real 3D design control." Final copy pending wedge validation.

## User stories (happy path + states)

- As a freelancer, I brief a client site and get a preview I can show today.
- As an agency, I lock a visual system once and generate matching pages without drift.
- As a founder, I publish on our domain and export code we own.
- States: empty (no projects), generating (progress + cost quote), preview, editing
  (element-selected), publish (staging → production), failed job (refund + retry), over-quota,
  offline/error, version restore.

## Core workflow (customer-facing; internals in customer-workflow.md)

01 Pick a preset → 02 Describe (structured Site Brief) → 03 Generate (keyframe first) →
04 Animate (cheapest effective medium) → 05 Build (sequence/video/CSS/WebGL/hybrid) →
06 Deploy (preview, publish, domain, portable export). Internally a deeper staged pipeline;
the user sees six simple steps.

## Features (V1 core / V1.5 / V2 / Future)

V1 CORE: brief→plan→schema pipeline; deterministic schema→HTML renderer; stills media;
CSS/SVG scroll cinematics + frame-sequence playback; element-level chat edits with ceiling;
preview URLs; publish (subdomain + custom domain); ZIP/HTML export; credits + Stripe billing;
version restore; responsive tiers B–D (reduced complexity/fallback/static).
V1.5: video-gen media (capped), image-sequence extraction, SEO dashboard, client workspaces.
V2: CMS-lite, team roles, marketplace presets, analytics suite, BYOK.
FUTURE: e-commerce backends, enterprise SSO/audit, node-based motion editor.
Non-goals V1: full CMS, enterprise collab, template marketplace, email/CRM, e-commerce backend,
arbitrary WebGL authoring, unlimited effects, every model.

## Acceptance criteria (per story, observable)

- First preview renders with zero console errors; LCP <2.5s desktop on sample content.
- Element edit changes only the target (snapshot diff test); rest byte-identical.
- Publish → live URL <60 s; custom-domain flow documented; rollback restores prior version.
- Exported ZIP opens standalone with no calls to our SaaS (link-check test).
- Reduced-motion + 390px fallbacks verified per generation.

## Constraints

$0-ish infra start (Cloudflare free tiers); solo-maintainable; bounded AI spend per plan;
modern browsers; 1–7-day vertical slices; kill criteria before each build phase.

## Pricing hypothesis

Trial (1 partial build, watermarked) → Creator $29/mo (capped gens) → Studio $59/mo
(agency seats-lite + white-label export) → top-ups; BYOK later. $100 MRR: 4×$29.
Details: pricing.md. Economics: ai-economics.md (GREEN with caps).

## Metrics

North-star candidate: successful published sites per active user. Funnel: visit → signup →
first project → generation → usable site → publish → return → paid. Track: time-to-preview,
time-to-publish, gen success rate, iteration count, publish rate, repeat projects, credits
consumed, conversion, churn, refunds, support burden.

## Assumptions / evidence / risks / open questions

Assumptions: agencies pay per-project tooling (INFERENCE from agency-tool pricing);
selective editing converts vs regen (HYPOTHESIS — cheapest test: vertical slice).
Evidence: teardown + competitive scan + cost research (2026-09-13, URLs in those files).
Risks: generation quality variance; media cost overruns; support load from non-technical users;
incumbent (Framer/Webflow) adds selective editing. Open questions: §PRD tail + Phases.md.
