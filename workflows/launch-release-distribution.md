# LAUNCH / RELEASE / DISTRIBUTION

Operating workflow (not system policy): takes a completed product through final release review → deployment → domain → email → SEO indexing → analytics → directory distribution → community launch → measurement → post-launch iteration. Code-finished never means launch-ready. Foundation stays frozen; no spend. Only exception to no-code: a deployment config file genuinely required and already in the approved architecture.

## Entry gate (all required, else STOP — do not launch)

Full-release path requires: implementation phases complete · Definition of Done passed · full build passes · critical tests pass · critical Playwright flows pass · accessibility/performance/security/SEO-where-relevant/legal-where-relevant/design-QA/Ponytail reviews complete · release report exists · no critical blockers. Experiment-track launches follow the experiment brief's own launch/measurement scope instead — same honesty rules, proportionally lighter evidence.

Implementation phases complete · Definition of Done passed · full build passes · critical tests pass · critical Playwright flows pass · accessibility/performance/security/SEO-where-relevant/legal-where-relevant/design-QA/Ponytail reviews complete · release report exists · no critical blockers.

## Step 1 — Release audit

Read PRD, Architecture, Rules, Design, Phases, Memory, release-report; implementation-plan, testing, security, deployment, environment; SEO artifacts, legal checklist, brand kit, email config. Confirm the product matches spec. Hunt: missing/accidental features, broken routes, dev-only code, debug logs, test credentials, placeholders, fake testimonials/metrics/logos, dead links, missing favicon/social metadata/legal pages, broken email sender, exposed secrets.

## Step 2 — Production build

Real production build: passes, env vars resolve, production-only behavior works, database and external services connect, assets/routes resolve, no critical console errors. Local success is not production readiness.

## Step 3 — Environment / secrets

Dev/preview/production separated. Verify production vars, secret storage, public vars, API/DB/email/payment credentials. Never commit or log secrets; confirm `.env` files never deploy.

## Step 4 — Database release

Production DB exists; schema matches architecture; migrations, indexes, constraints, authorization applied; seed data appropriate; no dev/test records exposed. No database → document NO DATABASE DEPLOYMENT REQUIRED.

## Step 5 — Deployment

Approved infrastructure from Architecture.md (Cloudflare or approved free choice — never switch hosts on aesthetics). Verify: deploy succeeds, URL resolves, HTTPS/redirects work, assets/app/critical flow load.

## Step 6 — Domain / DNS

Custom domain only if specified: DNS, HTTPS, canonical host, www/non-www, redirects, email DNS where applicable. Never break unrelated domains. Document the exact domain used.

## Step 7 — Email release

Resend + React Email + domain config. Check sending domain, sender identity, SPF, DKIM, DMARC where appropriate, reply-to, templates, links, mobile rendering, plain-text fallback. Send real test messages; verify delivery, formatting, links, unsubscribe behavior. Never claim perfect deliverability untested.

## Step 8 — Payment release

If billing exists: products/prices, checkout, success, failure, webhook, subscription state, cancellation, refund path, access after payment/cancellation. Never trust client-side state. Test transactions in sandbox/test mode only; live billing needs the launch gate.

## Step 8b — AI launch verification (AI products only)

Before launch verify: provider billing active, API limits known, credit/usage limits enforced, heavy-user behavior tested, rate limits + abuse protection live, provider failure handling, customer disclosure where relevant, AI economics from `templates/ai-economics/AI-ECONOMICS.md` still holding. Never launch with UNKNOWN UNBOUNDED VARIABLE COST.

## Step 9 — SEO release

Public/indexable products: title, description, canonical, robots.txt, sitemap, OpenGraph, favicon, structured data, semantic HTML, internal linking, 404, redirects, mobile rendering. Verify PUBLIC vs PRIVATE vs NOINDEX splits. Never expose authenticated/private data via indexable pages.

## Step 10 — Search engine setup

Google Search Console + Bing Webmaster Tools where relevant: property, sitemap, indexing verification. Evaluate IndexNow if useful/supported. Unverified pages → NOT YET INDEXED.

## Step 11 — AI search / agent readability

Semantic structure, clear headings, concise answer sections, explicit product identity, structured data, descriptive links, accessible content. Test agentic readability only with available tooling. Never claim AI citation/visibility without evidence.

## Step 12 — Analytics

Minimum useful measurement: visit, signup, activation, core action, trial, purchase, retention, churn, critical errors. No unnecessary personal data; free/privacy-conscious analytics preferred.

## Step 13 — Error / uptime monitoring

Only needed monitoring: uptime, critical errors, background jobs, payment/external-API/email failures. Never an observability platform.

## Step 14 — Final browser release test

Playwright against production: homepage, landing, signup, login, onboarding, primary workflow, settings/billing where relevant, logout, critical error states — across desktop, mobile, keyboard, focus, critical responsive states. Evidence captured for major failures.

## Step 15 — Final design review (registry-gated)

SKILL-REGISTRY.md is the source of truth; rejected skills stay rejected. Layers as applicable: web-design-guidelines (INSTALLED), Checklist Design (INSTALLED), frontend-design guidance (INSTALLED), impeccable (OPTIONAL — project-local only), anti-slop prevention via covering incumbents (design-taste-frontend and anti-ui-slop are REJECTED — never invoked). Check hierarchy, spacing, typography, responsive layout, states, consistency, decoration excess, motion, accessibility, content clarity.

## Step 16 — Performance release test

Mobile/desktop performance, JS, images, fonts, layout shift, latency, network requests, third-party scripts. Fix critical problems; never chase scores for their own sake.

## Step 17 — Security release check

Exposed secrets, authorization, auth flows, insecure endpoints, CORS where relevant, injection, uploads, webhook validation, rate limits, sensitive logs, debug endpoints, error leakage. Never claim absolute security — report reviewed risks + remaining known risks.

## Step 18 — Legal release check

Terms, Privacy, Cookies/Refunds/AUP where applicable, data disclosures — linked from footer/settings/account as appropriate. No fake claims.

## Step 19 — Distribution research

Rank per-product channels P0 (highest relevance/impact) / P1 (useful) / P2 (optional) across SEO, PH, Show HN, IH, Reddit, X, niche directories, AlternativeTo, SaaSHub, G2, Capterra, BetaList, Uneed, Fazier, Microlaunch, Peerlist, category directories, GitHub, communities, partnerships, integrations, referrals. Never launch everywhere automatically.

## Step 20 — Directory submission plan

Per selected directory: reason, audience, requirements, cost, moderation, timing, unique listing copy, assets, URL, tracking method. No spam, no irrelevant backlink-chasing.

## Step 21 — Launch assets

Logo, favicon, PFP, OG image, X/social banner where relevant, screenshots, demo, short/long/one-line descriptions, feature summary, pricing, support/contact info. No fake social proof.

## Step 22 — Launch copy

What it does, who it's for, problem, outcome, differentiator, proof that actually exists, pricing, launch link. No exaggeration, no invented traction.

## Step 23 — Product Hunt

Only if appropriate: tagline, description, gallery, maker profile, first comment, product URL, response plan. Never mandatory.

## Step 24 — Hacker News

Show HN only when relevant: technical substance, honesty, interesting engineering, useful product, transparent context. No norm-violating marketing language.

## Step 25 — Reddit

Research subreddit rules first: relevant answers, useful information, transparent launches where allowed, technical/product context. Never spam, never circumvent moderators.

## Step 26 — X

Launch post, demo, problem statement, build story/lessons where useful, replies. No manufactured engagement; measure actual results.

## Step 27 — Indie Hackers

Where relevant: launch/build story, problem, lessons, metrics only when real. Never fabricate revenue or growth.

## Step 28 — Launch sequence

DAY 0 final production verification; DAY 1 primary channel; DAY 2–7 secondary distribution, community participation, SEO indexing, directory submissions. No forced calendar — fit the product.

## Step 29 — Launch monitoring

Uptime, errors, signup, activation, core usage, payment, email, performance, support issues. No vanity-metric obsession.

## Step 30 — Incident response

SEVERITY 1 (critical outage/security/payment) / 2 (major broken flow) / 3 (minor bug) — each with detection, response, mitigation, communication, fix, postmortem if meaningful.

## Step 31 — Rollback

Simplest supported method: deployment version, migration rollback strategy, data safety, DNS fallback where relevant, feature-flag fallback where available. Never promise zero-downtime rollback that doesn't exist.

## Step 32 — Post-launch measurement

ACQUISITION (visits, sources, queries) → ACTIVATION (signup, first core action) → VALUE (successful core action) → MONETIZATION (trial, purchase, MRR) → RETENTION (returning usage, churn) → QUALITY (errors, support). Traffic is not product success.

## Step 33 — First iteration

TOP 3 user/product, acquisition, and technical problems — then FIX / IMPROVE / MEASURE / IGNORE / KILL each. Never build every request.

## Step 34 — Search feedback

High-impression/low-CTR, high-CTR/low-conversion, unexpected and emerging long-tail queries, winning/dead pages — fed back into the SEO workflow + Idea Radar. Never content for keyword's sake.

## Step 35 — Launch report

Write `products/<slug>/launch-report.md`: release date, production URL, domains, infrastructure, email/database/payment/SEO/indexing status, analytics, channels, directory submissions, results, errors, incidents, first metrics, known risks, next iteration. Distinguish MEASURED / ESTIMATED / UNKNOWN / NOT YET MEASURED.

## Step 36 — Post-launch memory

Update Memory.md: launched, production URL, launch status, actual infrastructure, important incidents, first evidence, next experiments, current phase. Concise.

## Step 37 — Release state

Exactly one: LIVE (accessible, checks passed) · ROLLED BACK (release reverted) · BLOCKED (critical issue) · PAUSED (waiting on evidence/decision).

## Step 38 — Do not force public launch

Technically complete may still mean NOT READY (legal gaps, critical bugs, no distribution, broken payment/email, bad performance, security concerns, missing core page, trust problems). BLOCKED/PAUSED is a valid ending.

## Step 39 — Launch quality gate

Launch only if: production build, domain, email/database/payment where required, critical browser tests, security, accessibility, acceptable performance/SEO, legal, assets, distribution plan, understood rollback — all pass.

## Step 40 — Final report

Product · release state · production URL · infrastructure · domain · email · database · payments · SEO · analytics · accessibility · performance · security · legal · launch channels · directory submissions · initial evidence · incidents · rollback status · next action. Never claim traffic, rankings, customers, revenue, conversions, backlinks, or AI citations unless measured.

## No hidden spend

$0 upfront holds. Any paid requirement discovered → document it and STOP until human approval. Never silently upgrade plans.

## No automatic future work

After launch: no auto-features, pricing/architecture changes, content scale-up, spam, or spend. Record evidence; stop at the post-launch decision point.
