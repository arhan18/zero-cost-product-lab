# Database — Scenica (V1 minimal; JSON artifacts until volume justifies tables)

users(id, email, created) · workspaces(id, owner, name) · projects(id, workspace, name, preset,
status) · project_versions(id, project, schema_json, scene_json, parent, created) ·
generations(id, project, stage, artifact_json, cost_cents, status) · assets(id, project, r2_key,
kind, bytes) · deployments(id, project, version, url, status) · domains(id, project, hostname,
verified) · credit_ledger(id, user, delta, reason, job_ref, balance_after) · subscriptions
(user, plan, status, period). Media_jobs/pages/sections/tokens live inside generation
artifacts in V1. D1; local replica for dev; export = portable backup story.
