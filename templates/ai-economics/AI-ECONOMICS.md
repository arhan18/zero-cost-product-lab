# Template — AI Economics

Copy to `products/<slug>/AI-ECONOMICS.md` for every AI-heavy product (Gate-11/AI-economics proof input). Numbers from provider pricing verified at planning time; unverifiable → AI COST NOT VERIFIED. No invented pricing.

## 1. Product + plans

Product, plans with prices, what AI usage each includes, what happens at exhaustion.

## 2. AI operations table

Per operation: model, provider, input/output units, est. cost/request, expected + worst-case frequency, est. cost/customer/month.

## 3. Contribution margin (per customer AND per plan)

REVENUE − payment fees − expected AI cost − infra − email/storage − support allowance − safety reserve = EXPECTED CONTRIBUTION MARGIN. Show expected AND heavy-user cases.

## 4. Margin class

GREEN (healthy at heavy usage) · YELLOW (profitable only with controls) · RED (fails even with controls → KILL or redesign economics).

## 5. Controls in force

Credits design (operation→credit costs derived from provider cost + margin + usage) · quotas · top-ups (price/quantity/expiry/refund/description) · BYOK policy · model routing (deterministic→none, cheap→simple, mid→normal, premium→complex) · caching/batching/dedup · rate/daily/monthly/concurrency limits · abuse controls · free-trial caps (fixed credits, low-cost models, or BYOK trial — never unbounded).

## 6. Metering architecture

CUSTOMER → SUBSCRIPTION/PURCHASE → ENTITLEMENT → CREDIT WALLET → USAGE CHECK → AI GATEWAY → MODEL ROUTER → PROVIDER → USAGE RECORD → CREDIT DEDUCTION → UPDATED BALANCE. Gateway blocks unauthorized use. Usage record: user/product/subscription/operation/provider/model I/O units, est.+actual cost, credits before/used/after, timestamp, request ID (no sensitive prompt/output hoarding). Ledger (grant/consume/refund/adjust/top-up/expire), every change traceable. Safety: CHECK entitlement + balance + limits + account status before expensive calls; insufficient → STOP with clear user message.

## 7. Heavy-user simulation

LOW / EXPECTED / HEAVY / EXTREME-ABUSIVE users: revenue, AI cost, other opex, margin each. Unprofitable heavy case → cap, reprice, remodel, credits, BYOK, cut, or redesign.

## 8. Cash-flow + provider notes

Fees, refunds/disputes, settlement delays; MAX EXPECTED OUTSTANDING AI EXPOSURE capped at a safe fraction of settled revenue (chosen per product risk, never a universal %). Provider billing/limits verified; fallback + secret handling; reconcile estimates vs actual billing (ACTUAL COST NOT AVAILABLE if unobservable). No provider hard-coding beyond justified need (Ponytail).

## 9. Decision

Economics: GREEN / YELLOW (controls listed) / RED · open assumptions · re-check triggers (repricing, abuse spike, margin drift) · verdict: PROCEED / PROCEED-WITH-CONTROLS / KILL-OR-REDESIGN.
