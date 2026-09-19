# Environment — Scenica

Vars: MODEL_API_KEYS (server only, rotated), STRIPE_SECRET + WEBHOOK_SECRET, RESEND_KEY,
R2 credentials (worker-bound, never in client), SESSION_SECRET, APP_ORIGIN (preview isolation
depends on it). No secrets in generated sites, repos, or logs. .dev.vars for local only,
never committed. Rotation: keys quarterly or on leak; BYOK encrypted at rest (V2).
