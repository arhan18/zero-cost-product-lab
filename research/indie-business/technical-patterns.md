# Technical Patterns (indie-business corpus)

Stacks + complexity verdicts (`techStack`, `infrastructure`, four complexity fields; corpus technical: LOW 33 / MEDIUM 59 / HIGH 8).

## TOP 20 technical patterns

1. Boring stacks win (Rails, Django, Laravel, PHP/jQuery, Next.js — zero microservices in corpus).
2. Solo-desktop builds, zero infra (Dash, SnippetsLab, Kaleidoscope, CodeKit — cleanest $0 profile).
3. Open-source core + paid cloud (Healthchecks, Invoice Ninja, TastyIgniter).
4. Cron/simple-worker backends (monitoring tools: ping endpoint + mailer).
5. SQLite-first, Postgres-on-free-tier when relational needs grow.
6. Static + serverless for content plays (k06 tools, directories).
7. No-code origins that survived scale (Evaboot, Formula Bot on Bubble — then quota-priced).
8. API-passthrough architectures (AI wrappers: thin app over inference APIs).
9. BYOK as architecture (push inference cost + keys to user).
10. Webhook/API-first distribution (integrations as growth surface).
11. Email-delivery as hidden infra cost (lists/transactional at scale — per-member pricing exists because of it).
12. Mobile only where the job is mobile (pet/fitness field apps).
13. Self-hosted options as trust feature (analytics, uptime, invoicing niches).
14. Single-region + CDN suffices (no multi-region anywhere).
15. No realtime collab until revenue (single-player architectures dominate).
16. Payments late (Stripe at first dollar, not at scaffolding).
17. Observability minimalism (uptime + errors before dashboards).
18. Maintenance-mode as valid end-state (Numerous.ai lifestyle economics).
19. Handoff > shutdown (Espresso→MacRabbit team; Pagoda lessons).
20. AI inference as the new server bill (metered tiers or death — Formula Bot $5K lesson; Vibe AI negative margins).

## Complexity guidance for the lab

- Target LOW technical / LOW-MEDIUM product for first products; MEDIUM ops is acceptable only with recurring revenue attached.
- HIGH technical appears only with funding or years of compounding — never a starting position.
