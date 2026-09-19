# COMPETITOR ANALYSIS

| Field | Value |
|---|---|
| Product / idea | dodo-shield |
| Date | 2026-09-14 |
| Competitors reviewed (≥5 or documented "none found") | 7: ByeDispute, Chargeflow, Chargeback.io, Justt, Stripe Radar, Dodo built-in + RDR, Paddle (MoR reference) |

## Per competitor

| Competitor | URL | Positioning | Pricing | Strengths | Gaps | Distribution signals | Notes (dates) |
|---|---|---|---|---|---|---|---|
| ByeDispute | https://byedispute.com | Stripe-only no-code chargeback protection for solopreneurs | FACT: $69/10k, $119/30k, $219/100k txns; code September -30% (observed 2026-09-14) | 1-min setup, disposable-email + EFW + domino rules, email+refund actions, 2071 users claimed | Stripe-only; no Dodo/Paddle support; INFERENCE: single-founder scale limits | IndiePage, X/Marc Lou audience, PH | Direct pattern source; do not copy assets (§14) |
| Chargeflow | https://chargeflow.io | AI fully-automated recovery + prevention for SaaS/ecom | FACT: 25% of recovered + alert/scan fees; 4x ROI claim | Verifi/Ethoca alert automation <24h, evidence automation, 20k merchant network | Enterprise price/shape; overkill for $10–$50 MRR sellers; INFERENCE: onboarding friction | Shopify/Stripe/BigCommerce integrations, SEO content farm | pattern: alert→refund-in-24h SLA |
| Chargeback.io (Midigator) | https://chargeback.io | Alert-driven prevention on autopilot | FACT: SaaS pricing per-alert; "prevent 91%" claim | RDR/CDRN coverage, zero-duplication guarantee, Shopify/Stripe/Airwallex apps | No Dodo app; wallet payments hard to match; INFERENCE: SMB-midmarket focus | Partner portal, Stripe App Store | pattern: prevented-txn feed |
| Justt | https://justt.ai | SaaS subscription chargeback recovery | FACT: enterprise/custom, % of recovered | Subscription-specific evidence (usage, billing history), AI mass-custom docs, ROI predictions | Post-filing only; no pre-dispute rules for indie; expensive | SaaS vertical content | pattern: usage-data evidence pack |
| Stripe Radar | https://stripe.com/radar | Native ML fraud scoring + rules | FACT: Standard $20/mo, Plus $44/mo, Pro $70/mo (platform); 0.4%/txn Chargeback Protection; $15+$15 dispute fees | Network-trained on $1.9T volume, card-testing prevention, 3DS, risk scores 0–99 | Stripe-locked; INFERENCE: doesn't cover disposable-email/domino nuances ByeDispute sells against | Native to Stripe Dashboard | pattern: risk level + score + allow/blocklists |
| Dodo built-in + Visa RDR | https://docs.dodopayments.com/features/transactions/disputes | MoR built-in fraud + auto-resolution | FACT: $30/dispute incl. RDR; RDR default $100 threshold; $1/refund; VDMP 0.9%/100/mo | Zero setup, MoR liability, 3DS, velocity/geo checks, RDR keeps ratio down | Black-box; RDR still charges $30; post-initiation only; no seller rules/alerts; 30-day refund limit; balance-gated refunds | Native to Dodo Dashboard | This is the incumbent to complement, not replace |
| Paddle (MoR ref) | https://paddle.com | MoR for SaaS with dispute handling | FACT: ~$20/£20/€20 chargeback fee, non-refunded on win (Chargeflow comparison, 2026-09-08) | Handles tax + disputes as seller of record | Same gap: no seller-controlled pre-dispute rules; higher fee | SaaS boilerplates | Confirms MoR-prevention gap is category-wide |

## Synthesis

1. **Patterns worth borrowing** — pattern: 3-step hero (detect → auto-act → save fee), borrowed from: ByeDispute. pattern: rule toggles + live prevented-feed, borrowed from: ByeDispute/Chargeback.io. pattern: alert→refund SLA badge, borrowed from: Chargeflow. pattern: reason-code reporting, borrowed from: Stripe docs. pattern: usage-evidence log, borrowed from: Justt. All patterns reworded/rebuilt, no assets copied (§14).
2. **The gap** — FACT: zero Dodo-native prevention apps found (search 2026-09-14). Concrete: Dodo sellers get $30 fee even on RDR "saves" + 10-day dashboard evidence scramble + no disposable-email/velocity/card-testing rules they control. ByeDispute proves indie WTP on Stripe; nothing serves the Dodo indie cohort (IndieKit, Indian solo builders rejected by Stripe).
3. **Monetization landscape** — FACT: indie accepts $69–$219 one-time/credit packs (ByeDispute); SaaS accepts $10–$70/mo + % (Radar); enterprise pays 25% recovery. INFERENCE: Dodo-shield fits $15–$29/mo or $69/10k-credit indie pack; fee-only-after-revenue compliant (Payment Policy §25).
4. **Why-would-anyone-switch** — from nothing/manual: 1-click vs. weeks of Stripe-API reading (ByeDispute FAQ claim, INFERENCE: plausible for Dodo too); $1 refund vs. $30 fee math; rate protection under 0.9% VDMP; multi-product coverage in one dashboard. If Dodo sellers don't feel dispute pain (HYPOTHESIS), switch reason collapses — must validate in Phase 04.
