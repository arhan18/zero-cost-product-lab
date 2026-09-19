# API — Scenica (V1 surface, /v1 versioned)

Auth: POST /auth/magic-link, GET /auth/verify. Projects: CRUD /projects, POST /projects/:id/
duplicate. Generation: POST /projects/:id/plan, POST /projects/:id/generate (returns job),
GET /jobs/:id, POST /projects/:id/edit (targeted). Versions: GET/POST restore.
Media: POST /assets (validated upload). Publish: POST /projects/:id/publish, POST /rollback.
Export: GET /projects/:id/export.zip. Billing: GET /billing/usage, POST /billing/topup,
POST /stripe/webhook (verified). Errors: {code, message, retryable}. Rate limits per user/IP;
all AI work async via jobs, never inline.
