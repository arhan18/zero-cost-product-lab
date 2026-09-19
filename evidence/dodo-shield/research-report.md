# RESEARCH REPORT

| Field | Value |
|---|---|
| Product / idea | dodo-shield — pre-dispute prevention for Dodo Payments sellers |
| Research question | Do Dodo sellers face ban-worthy dispute pain that a ByeDispute-style rule+refund layer would prevent, and does Dodo's API allow it at $0? |
| Date | 2026-09-14 |
| Sources used | byedispute.com (fetched 2026-09-14); docs.dodopayments.com disputes + webhooks + refunds (fetched 2026-09-14); dodopayments.com/payments/fraud-protection + chargeback-protection blog (websearch 2026-09-14); IndieHackers "Banned by stripe!" 2019-06-14; HN #36974034 2023-08-02 9-yr close; HN ArtificialStudio.ai suspension (~2025-11); reddit r/indiehackersindia Dodo suspension ~2026-08-26; chargeback.io / Stripe Radar pricing pages |

## 1. Domain map

- FACT: Dispute = cardholder questions charge with issuer → formal reversal + fee; lifecycle 2–3 months (Stripe support docs).
- FACT: Prevention stack has 3 timelines: pre-charge fraud scoring (Radar), pre-filing alerts (Verifi RDR / Ethoca — refund to stop filing), post-filing recovery (Chargeflow/Justt evidence).
- FACT: Dodo is Merchant of Record — legal seller, handles taxes/disputes/compliance; seller receives net payouts (Dodo MoR intro docs).
- FACT: Dodo dispute events: `dispute.opened/challenged/accepted/cancelled/expired/won/lost`; payment events: `payment.succeeded/failed/processing/cancelled`; refund events: `refund.succeeded/failed` (Dodo webhook-events-guide).
- FACT: Dodo refunds: `POST /refunds {payment_id, reason}`, full/partial, within 30 days, to original method, $1 per refund (Dodo refunds docs + pricing page).
- FACT: Dodo disputes: $30 per dispute incl. RDR-resolved; RDR auto-refunds Visa ≤ $100 threshold, appears as `dispute.lost + is_resolved_by_rdr:true`, does NOT count to Visa ratio (Dodo disputes docs + changelog v1.84.0 Feb 2026).

## 2. Problem shape

- FACT: ByeDispute positions "1 dispute in 5 payments = 20% → Stripe red flag; Visa/MC tolerate ~0.65%" and sells "up to 80% less disputes, save $30 fee" (byedispute.com hero + FAQ).
- FACT: Indie seller banned after trial-to-paid chargebacks, 5-day migration window (IndieHackers lightningrod, 2019-06-14).
- FACT: 9-year SaaS closed for "higher level of risk" after chargebacks despite fixes, payouts paused (HN jjoe, 2023-08-02).
- FACT: AI SaaS suspended after ~1 chargeback from accidental annual purchase despite instant refund + UX fix (HN markdoppler, ~2025-11).
- FACT: Dodo seller: "suspended my account and refunded all my customers without warning... unable to continue supporting your account" over voice-cloning IP claim using Apache-2.0 HF models (reddit tarunyadav9761, ~2026-08-26).
- INFERENCE: Ban/suspension fear transfers 1:1 from Stripe to Dodo; Dodo MoR can be harsher (platform-wide refund + closure, not just one account).
- INFERENCE: Highest pain is new/small sellers: 1–2 disputes spike rate above 0.9% VDMP threshold → fines, monitoring, closure.

## 3. Existing solutions

- FACT: ByeDispute — Stripe-only no-code rules (disposable email, Early Fraud Warning, domino disputes) → email + refund; $69/10k, $119/30k, $219/100k transactions; multi-account credits shared (byedispute.com pricing + FAQ).
- FACT: Stripe Radar Standard/Plus/Pro $10–$70/mo + Chargeback Protection 0.4%/txn; dispute fees $15+$15 (up to $30) (Stripe pricing pages, fetched via search 2026-09-14).
- FACT: Chargeflow = 25% of recovered + alert/scan fees; Chargeback.io alerts "prevent 91%"; Justt SaaS-specific evidence; SEON/Sift/Signifyd/Kount enterprise screening.
- FACT: Dodo built-in: real-time fraud detection, velocity/geo/failed-attempt checks, 3DS liability shift, RDR default $100, end-to-end dispute handling as MoR (Dodo fraud-protection page + chargeback blog).
- INFERENCE: Gap = no Dodo-native pre-dispute rule tool. Dodo built-in is invisible/black-box; RDR acts post-initiation and still charges $30. A seller-controlled pre-dispute refund ($1) saves $29 + rate hit.

## 4. Search / demand signals

- FACT: Repeated "banned by Stripe" threads on IndieHackers (2019), HN (2022, 2023, 2025), r/stripe (frozen funds 3+ weeks) — dispute-ban anxiety is durable, not one-off.
- FACT: Dodo wall-of-love shows indie love (fast setup, UPI, MoR taxes) AND the indie risk thread (rejections by Stripe/LemonSqueezy → Dodo as refuge; then Dodo suspension thread).
- HYPOTHESIS: Dodo sellers search "Dodo dispute fee / VDMP / refund before dispute" — unproven, no keyword volume pulled.
- UNKNOWN: How many Dodo sellers exceed 0.5% dispute rate; Dodo dispute volume; WTP for $19–$29/mo prevention.

## 5. Blocks the "obvious" reading

- CONTRADICTORY EVIDENCE: Dodo markets "fraud protection built-in, MoR liability coverage, zero friction" — suggests prevention already solved — vs. seller suspension thread + $30 RDR fee + 10-day evidence window showing residual seller risk.
- FACT: RDR still charges $30 fee even when it "prevents" the chargeback — INFERENCE: sellers may feel RDR is a tax, not a save; pre-dispute refund narrative must prove $1 < $30 + rate benefit.
- FACT: Dodo refunds only within 30 days and against available balance (insufficient-funds failures) — INFERENCE: domino-dispute auto-refund of 3-month subs may be partially ineligible.
- FACT: Dispute response is dashboard/email-based (10 days), not API evidence submit — INFERENCE: tool cannot "fight better", only prevent + revoke access + log.
- UNKNOWN: Does `payment.succeeded` webhook expose email domain, IP, country, card fingerprint sufficient for rules? Schema check required before BUILD.

## Open questions (UNKNOWN → how to resolve)

1. Webhook signal sufficiency — fetch Dodo payment webhook schema + test event (docs event catalog, 1 hr).
2. Dodo seller WTP — 5 outreach posts in Dodo Discord / X / IndieHackers with dispute-pain ask (Phase 04).
3. Refund economics at scale — confirm $1/refund + 30-day + balance-gating with 2 sellers (support thread).
4. Distribution — can we reach 10 Dodo sellers without paid ads? (Dodo Discord, X build-in-public, IndieKit boilerplate channel).
