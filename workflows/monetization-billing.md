# MONETIZATION + BILLING

Operating workflow (not system policy): decides and specifies pricing, plans, entitlements, subscriptions, trials, credits, limits, top-ups, BYOK, payments, webhooks, refunds, failures, cancellation, and access control — for NON-AI and AI products alike. Never assumes subscriptions. Foundation stays frozen; no code beyond spec artifacts, no spend.

## Entry gate

Starts after PRD.md and Architecture.md exist. Read PRD, Architecture, Rules, AI-ECONOMICS.md where applicable, validation.md, decision.md, competitor research, $100 MRR analysis. Monetization irrelevant or intentionally deferred → STOP and record MONETIZATION NOT REQUIRED YET.

## Step 1 — Monetization model

Select FREE, ONE-TIME, SUBSCRIPTION, USAGE-BASED, CREDIT-BASED, HYBRID, BYOK, MARKETPLACE, SERVICE-ASSISTED, or OTHER — from value, frequency, customer behavior, cost, retention, support, and product nature. Never by competitor mimicry.

## Step 2 — Customer value

Define what the customer pays for: time saved, revenue generated, risk reduced, workload removed, output produced, infrastructure replaced, convenience, access, collaboration, automation. Never price on "our API costs $X" alone.

## Step 3 — Pricing unit

Most meaningful unit: account, workspace, seat, project, usage, credits, workflow, document, transaction, API call, storage, outcome. No per-seat for tiny businesses where seats ≠ value; no anxiety-inducing usage pricing.

## Step 4 — Plan design

Per plan (FREE/STARTER/PRO/BUSINESS or other): price, customer, features, usage, credits, limits, support, eligibility. Every feature/limit needs a reason.

## Step 5 — Free tier

Optional; only for acquisition, product-led growth, viral loops, evaluation, SEO, or conversion. Never a free tier with large variable costs; AI products prefer limited credits or low-cost functionality.

## Step 6 — Trial

Time-, usage-, or credit-based. Define starting entitlement, expiration, conversion, cancellation, post-trial access. Never unbounded AI trials.

## Step 7 — AI credit economics

PLAN REVENUE − payment fees − expected AI cost − other variable cost = CONTRIBUTION. Simulate light, expected, heavy, extreme users. Heavy destroys economics → credit limits, top-ups, BYOK, model routing, cheaper models, feature restrictions, repricing. (Method: `templates/ai-economics/AI-ECONOMICS.md`.)

## Step 8 — Entitlement model

PLAN → FEATURES + CREDITS + RATE LIMITS + SEATS + STORAGE + SUPPORT. Enforced server-side — never trust client-side plan data.

## Step 9 — Credit ledger

Auditable ledger: grant, usage, refund, adjustment, top-up, expiration. Never a single mutable balance for important accounting. No negative balances unless explicitly supported and economically safe.

## Step 10 — Usage metering

Usage event, unit, aggregation window, limit, enforcement, reporting. Records auditable.

## Step 11 — Top-ups

Optional; only if economics or UX materially improve. Define quantity, price, expiration, refund behavior, usage order, interface, receipt.

## Step 12 — BYOK

Optional economic lever, never standalone differentiation. Define providers, key storage/encryption, validation, switching, revocation, error behavior, security. Never store raw keys insecurely.

## Step 13 — Payment provider

Select on country, customer geography, pricing, payouts, tax, subscriptions, webhooks, refunds, no-upfront-cost requirement. Record CURRENT PRICING VERIFIED: YES / NO. Never hard-code unverified pricing.

## Step 14 — Checkout

Flow, customer creation, plan, currency, success, cancellation, failed payment, retry. No payment UI before entitlements are defined.

## Step 15 — Webhooks

Required events: subscription created/updated/canceled, payment success/failure, refund, chargeback where relevant. Every webhook: signature verification, idempotency, validation, logging, safe retry. Never trust unverified payloads.

## Step 16 — Access state machine

ACTIVE, TRIAL, PAST_DUE, GRACE, CANCELED, EXPIRED, SUSPENDED — only relevant states. Define effects on login, core features, credits, data, exports, billing portal.

## Step 17 — Cancellation

Immediate vs end-of-period, remaining credits, data retention, export, reactivation, confirmation. Never trap customers.

## Step 18 — Refunds

Rules, partials where applicable, credit treatment, AI-usage treatment, post-refund access. No invented legal policy — align with actual terms.

## Step 19 — Payment failure

Retry, notification, grace period, feature downgrade, suspension, data retention. Never delete user data over one failed payment.

## Step 20 — Tax / legal check

Seller/customer location, product type, digital goods/services, provider. No legal certainty without evidence; flag REQUIRES PROFESSIONAL REVIEW when needed.

## Step 21 — Price experiments

Hypothesis, variants, eligibility, measurement, duration, decision criteria. Never random pricing changes.

## Step 22 — $100 MRR model

price × customers = MRR; then MRR − payment fees − AI/variable costs − other opex = contribution, on actual assumptions.

## Step 23 — Monetization failure check

Watch: too-low prices, expensive usage, free-tier abuse, support burden, weak WTP, hard conversion, refunds, high fees, confusion. Responses: REPRICE, REPACKAGE, LIMIT, REMOVE, ADD CREDIT, ADD BYOK, PIVOT, KILL.

## Step 24 — Billing security

Webhook signing, authorization, plan enforcement, credit manipulation, replay/duplicate/race attacks, refund/coupon abuse, account sharing where relevant.

## Step 25 — Product UX

Billing UI shows current plan, usage, remaining credits, renewal date, limits, top-ups, payment status, cancellation, invoice/history. No hidden-limit surprises.

## Step 26 — AI usage transparency

Communicate what consumes credits, approximate usage, limits, exhaustion behavior, top-ups, BYOK. Never hide variable-cost mechanics.

## Step 27 — Billing tests

Checkout success, failed payment, duplicate webhook, cancellation, renewal, refund, downgrade, upgrade, credit grant/usage/insufficiency, top-up, BYOK — only what the chosen model needs.

## Step 28 — Implementation artifacts

Write `products/<slug>/`: monetization.md, entitlements.md, billing.md, usage-metering.md — plus credit-ledger.md only if credits used, byok.md only if BYOK used.

## Step 29 — Pre-implementation audit

Verify the chain holds: PRD → pricing → entitlements → billing → webhooks → access state; AI usage → credits → AI cost → margin. All consistent.

## Step 30 — Zero-cost gate

NO UPFRONT BUILDER COST unless explicitly approved. Provider setup must not force monthly costs. AI API costs only under the AI Economics framework.

## Step 31 — Final monetization gate

Proceed to implementation only if: customer value clear · pricing justified · entitlements defined · billing flow defined · limits defined where needed · AI economics pass where applicable · heavy usage survivable · failure/refund behavior defined · security defined · legal uncertainty documented · $100 MRR math understood.

## Final output (returned, not filed)

Monetization model · pricing · pricing unit · plans · free/trial policy · entitlements · AI credits if applicable · top-ups · BYOK · payment provider · webhook events · access state machine · refund behavior · payment-failure behavior · $100 MRR model · contribution economics · risks · unresolved questions. No product built, no money spent, unrelated workflows untouched.
