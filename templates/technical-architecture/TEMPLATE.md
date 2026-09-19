# Template — Technical Architecture

Used in **Phase 11**. Choose the smallest architecture that delivers the locked scope.

## TECHNICAL ARCHITECTURE

| Field | Value |
|---|---|
| Product slug | |
| Date | |
| Scope lock reference (Phase 07) | |

## 1. Decision: what runs where

- Hosting/deploy target + free tier (record **current limits + date**, §24)
- Data storage + free tier limits + the exact schema
- Backend need: none / serverless / minimal container
- Auth: none / provider-X free plan
- Payments (only if revenue-phase): provider + fee model (MUST be fee-after-revenue, §25)

## 2. Stack & dependencies

Every dependency listed WITH a reason. Anything not on the list is rejected on arrival (Ponytail ladder, §20).

## 3. Trade-offs documented

Choices and what we gave up (e.g., "client-side only → no auth" or "serverless → cold start").

## 4. Free-tier snapshot

Service · plan · limits (storage/requests/bandwidth) · date recorded · renewal check-in.

## Rule
A static page or a single serverless function can do it → that is what we build. No speculative services.