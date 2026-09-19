# Technical Patterns

Stacks and build choices that stayed solo-maintainable across the corpus. `technology` + `complexity` + `zeroDollarFeasibility` fields.

## What indies actually run

- **Boring web stacks dominate**: Rails (Jumpstart, Bullet Train lineage), Django (Buttondown), Laravel (Wave), PHP/WordPress-adjacent (many i09 boards), Next.js/React (i08 starters). No microservices anywhere in the corpus.
- **Vanilla outlier**: Photopea — 140K lines of vanilla JS, no frameworks, $600/yr hosting, ~$3M revenue. Framework choice is not the constraint.
- **Serverless/JAMstack for content-heavy**: i02/i05 records lean static + serverless functions; hosting cost ≈ $0 until traffic.
- **SQLite-first where possible**; Postgres via free tiers (Supabase/Neon patterns in i03) when relational needs grow.
- **AI as feature, not foundation** (56/100 mention AI usage; most as augmentation — copy generation, colorization, transcription — not core inference businesses; GPU bills disclosed only by Levels).

## TOP 10 engineering patterns

1. **Boring technology**: Rails/Django/Laravel/Next — chosen for hiring-yourself velocity, not novelty.
2. **Single-player architecture**: no teams, no realtime collab, no permissions matrix until revenue (SavvyCal's Level lesson).
3. **Static-first**: landing + docs + blog as static pages; dynamic only where the promise requires it.
4. **Free-tier-shaped design**: schema and bandwidth budgets decided by Supabase/Vercel/Cloudflare free limits, not the reverse.
5. **One database, no queue**: background jobs via cron or provider queues; self-run Redis only when forced.
6. **Payments late**: Stripe added at first-dollar, not at scaffolding (Chatbase: pricing page → payment in 30 min).
7. **Boilerplate reuse**: i08 economics — $100–900 one-time to skip weeks of auth/billing scaffolding.
8. **No mobile apps**: 0/100 launched mobile-first; responsive web sufficed.
9. **Delete-list discipline**: Ponytail-shaped outcomes observed in the wild (Photopea's no-framework stance; Teachery's 0% fees via scope refusal).
10. **Observability minimalism**: uptime + error tracking (Oh Dear's own niche) before dashboards.

## AI-usage honesty

- Real: AI site/copy generation (Typedream), colorization (Palette.fm), transcription (Superwhisper), headshots (HeadshotPro/Aragon), support triage.
- Absent: no record fine-tunes foundation models; wrappers win by workflow + distribution, and die by platform shifts (see Beam; Chatbase's moat is distribution, not model).
