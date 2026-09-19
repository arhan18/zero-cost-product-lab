# PRODUCT REQUIREMENTS

| Field | Value |
|---|---|
| Product slug | dodo-shield |
| One-sentence promise | helps Dodo Payments sellers auto-refund suspicious payments before they become $30 disputes |
| Success metric (Phase 27 measures this) | Prevented-count per seller + activation (1 rule live in test mode within 10 min) |
| Date / owner | 2026-09-14 / owner Gate-07: REDUCE to alert-only |

## 1. Users

- Served: solo SaaS/AI seller on Dodo (1–3 products, global cards/UPI, lives in Dodo Discord/X). Non-goal: enterprise risk teams, non-Dodo Stripe sellers, buyers/cardholders.

## 2. The core task (happy path)

1. Seller connects Dodo test key + registers webhook (paste URL in Dodo Dashboard → Developer → Webhooks, select `payment.succeeded/failed`, `dispute.*`, `refund.*`).
2. Seller toggles 4 rules ON (disposable email, velocity >3/email/30min, failed→succeeded card-testing, first-payment high-ticket >$79).
3. Test payment arrives → matching rule fires → dashboard row appears in prevented-feed + email alert queued.
4. Seller clicks through to Dodo Dashboard to refund manually (v0 has NO auto-refund; deep link only).
5. Seller sees honest "alert before the bank files" value and enables rules.

## 3. Scope

- **In scope** (MVP): connect screen (key + webhook URL copy), 4 rule toggles with thresholds, webhook receiver (Standard Webhooks verify), prevented-feed (payment_id, rule, amount, status, Dodo link), manual-approve refund button (test mode first), email alert via Resend free, honest docs page (Dodo $30/RDR/30-day limits).
- **Explicit non-goals**: `POST /refunds` execution (deferred until alert traction), fighting disputes via API, subscription domino auto-refund, multi-seller teams, native Dodo App Store listing, AI scoring, fake testimonials/metrics.

## 4. Edge cases & states

- empty: no payments yet → sample test event button. loading: webhook verifying spinner. error: bad signature → 401 + log; insufficient balance → "refund failed: low balance" hint; >30-day payment → "ineligible, manual review" state. offline: queue retries. repeat: idempotency on webhook-id. deleted: rule off → past rows retained, marked rule-off.

## 5. Pricing plan

- Model: HYPOTHESIS indie-credit pack $19/2k prevented-checks + $29/mo unlimited-rules after traction; fee-only-after-revenue via Dodo/Lemon-compatible provider TBD at Gate-22/24 (SYSTEM §25). No charge during experiment.
- Mark: HYPOTHESIS to be tested post-launch via pay-attempt button (never fake paid users).

## 6. Content & copy

- Own words: "Refund the $1 problem before it becomes a $30 dispute." No ByeDispute copy, no "80% less" claim (unproven for Dodo), no invented user counts. Honest lines: "RDR still charges $30 — we catch it before the bank files." All claims trace to evidence/dodo-shield/research-report.md.

## 7. Kill criteria planning

- See scope.md Gate-07 arithmetic: kill if <2 live-test activations in 14 days post-launch, or 0 pay-attempts at $19 with 10+ active testers, or Dodo schema lacks email/IP signals.
