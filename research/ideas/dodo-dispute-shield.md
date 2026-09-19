# Idea Brief — Dodo Dispute Shield (INVESTIGATE)

- Category: BORING + WEDGE. Date: 2026-09-14. Run: dodo-shield-01.
- One-liner: helps Dodo Payments sellers detect suspicious payments and auto-refund before they become $30 disputes.
- Pain (FACT: byedispute.com observed 2026-09-14): Stripe sellers fear bans from dispute rate; ByeDispute sells "up to 80% less disputes, save $30 fee, 1-min no-code setup" at $69 / $119 / $219 tiers.
- Pain (FACT: IndieHackers "Banned by stripe!" 2019-06-14 by lightningrod): seller banned for excessive chargebacks on trial-to-paid subs, given 5 days to migrate.
- Pain (FACT: HN 2023-08-02 "Stripe force-closed my 9 year account" by jjoe): 9-year SaaS closed for risk after chargebacks despite remediation; payouts paused.
- Pain (FACT: reddit r/indiehackersindia 19d ago ~2026-08-26 by tarunyadav9761): "Dodo Payments suspended my account and refunded all my customers without warning... Just a banner saying we are unable to continue supporting your account."
- Dodo context (FACT: docs.dodopayments.com/features/transactions/disputes observed 2026-09-14): $30 per dispute, Visa RDR enabled by default $100 threshold, RDR-resolved still charges fee, VDMP at 0.9% / 100 disputes/mo with fines up to $50k+/mo. MoR handles network process; seller controls access + evidence via support@dodopayments.com, 10-day response window.
- Wedge (HYPOTHESIS): first pre-dispute rule layer for Dodo (disposable email, velocity, card-testing failed→succeeded, high-ticket first payment, geo mismatch) → email alert + auto-refund via POST /refunds.
- $100 MRR: $19 × 6 sellers or $29 × 4 sellers — arithmetic fine, Dodo-seller WTP unproven.
- Solo check: PASS (webhooks Standard Webhooks + Dodo Node SDK refunds.create + Resend + Postgres/Supabase free). AI: none needed.
- Competition: ByeDispute (Stripe-only, indie); Chargeflow/Chargeback.io/Justt (enterprise, 25% recovery / alert fees); Stripe Radar ($10–$70/mo + 0.4%); Dodo built-in fraud + RDR (post-initiation, fee still applies). No Dodo-native prevention tool found.
- Verdict: **INVESTIGATE** — questions: 5 Dodo sellers with dispute pain + WTP; webhook payload has enough signals (email/IP/velocity) for rules; refund-within-30-days constraint acceptable.
