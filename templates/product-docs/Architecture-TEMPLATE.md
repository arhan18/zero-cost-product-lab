# Template — Product Architecture.md

Copy to `products/<slug>/Architecture.md` at Phase 11. Smallest architecture that delivers the locked scope. Every dependency listed WITH a reason; anything unlisted is rejected on arrival (Ponytail ladder).

## 1. System architecture
What runs where (static / serverless / minimal container / none-backend). Diagram in text/mermaid.

## 2. Application flow
Request/click → response path for the core task, end to end.

## 3. Technical stack
Language, framework, hosting, CI — each with a one-line reason. Free-tier plan + limits + date recorded.

## 4. Project structure
Directory map with what lives where and why.

## 5. Major modules
Module list, responsibility of each, dependency direction (no cycles).

## 6. Frontend architecture
Rendering model, state approach (or explicit no-state), data fetching, error/loading conventions.

## 7. Backend architecture
Endpoints/functions, auth model (or explicit none), background work (cron/queues or none).

## 8. Database
Engine, schema, migrations, seed, backup story on the free tier.

## 9. APIs
Internal + external contracts: inputs, outputs, error shapes, rate limits.

## 10. External services
Each with plan, free-tier ceiling + date, and what happens when the ceiling hits.

## 11. Authentication
Provider or none; session handling; trust boundaries drawn explicitly.

## 12. Data flow
How user data moves, where it rests, retention/deletion story (privacy by default).

## 13. Deployment architecture
Target, pipeline (push-to-deploy steps), environments, rollback.

## 14. Security boundaries
Trust boundaries, what is never trusted (client input, webhooks without verification), secrets handling.

## Rule
A static page or a single serverless function can do it → that is what we build. No speculative services.
