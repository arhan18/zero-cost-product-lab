# AI economics — Scenica (method: lab AI-ECONOMICS framework)

Verified 2026-09-13 (official pricing pages): Sonnet-class $2 in / $10 out per 1M;
nano-class $0.05 / $0.40; Imagen-class $0.04/image; 720p video $0.10–0.70/sec;
R2 $0.015/GB-mo free egress; Resend 3k free/mo; Stripe ~2–3%.

## Per-operation cost (routed design)

- Full site gen (150k in + 60k out mid-tier + 4 stills): $0.30 + $0.60 + $0.16 ≈ **$1.06**.
- Chat edit (40k in + 8k out nano-class): ≈ **$0.005**.
- Critic pass (80k in nano + 4k out): ≈ $0.006. Quality loop (gen + 1 critic + 1 revise): ≈ $1.20.
- Video-gen EXCLUDED from V1: a single 5s 720p clip ($0.50–3.50) costs as much as 3 full
  site gens — breaks $29 plans at any volume. V1 cinematic = stills + CSS/SVG + sequences.

## Plan margins (before Stripe/email/storage pennies)

- Creator $29: 8 full gens ($8.48) + 200 edits ($1.00) + buffer → contribution ≈ **+$17**.
- Studio $59: 20 gens ($21.20) + 500 edits ($2.60) → ≈ **+$31**.
- Heavy abuse case (20 gens + 100 edits + 40 extra images ≈ $23.32 COGS) still fits $29
  ONLY with hard caps + quotas; uncapped images/video break it (YELLOW→RED without controls).

## Controls (mandatory)

Per-plan gen caps, nano-default edits, critic sampling (not every gen), image count caps,
no video in V1, idempotency (no double-charge on retry), per-user concurrency caps,
failed-job auto-refund, abuse alarms.

## Metered operations (separately tracked)

Site generation · image generation · video generation (V1.5+) · frame extraction ·
upscale · chat edits · heavy regeneration. Each metered, quoted pre-job for expensive ops,
visible balance, failed-job reversal. Subscription + credits; no unlimited video ever.

## Credit transparency (product promise)

Users always see: what consumes credits, estimated cost BEFORE expensive jobs, live
progress, failed-job refunds, remaining balance. Predictable usage economics is a feature. Heavy-user simulation: LOW/EXPECTED pass GREEN;
HEAVY passes with caps; EXTREME-ABUSIVE contained by caps (service degrades, margin holds).

## Verdict

**GREEN (conditional on caps + routing + no V1 video).** $100 MRR (4×$29) carries ≈$68
contribution at expected use. Revisit before V1.5 video: capped add-on pricing required.
