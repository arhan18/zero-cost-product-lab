# ZERO-COST-POLICY

Standing policy: **every product experiment runs at $0 until human-approved otherwise.** This consolidates SYSTEM.md §24 (compliance) and §25 (payment policy) and Part U (infrastructure) of the master update into one reference. Where it conflicts with SYSTEM.md, SYSTEM.md wins.

## 1. The rule

- No spend on the default path: hosting, database, email, domains, branding, legal templates, research tools.
- **Any external spend (even $1) requires human approval** (PRODUCT-GATES, PART AA). Free tiers do not trigger approval; paid usage or upgrades do.
- Time is the only unbounded asset; money requires a gate.

## 2. Default $0 infrastructure stack (Part U)

- **Hosting**: Cloudflare (Pages/Workers) — free tier, generous limits, global CDN. Verified $0.
- **Database**: **Turso** as the default (free tier: ~9 GB, 500M row reads/mo, 5M row writes/mo). **D1 is optional**, not automatic — never run both without a stated reason. Verify current free-tier limits before each new product (limits change).
- **Transactional email**: **Resend** free tier (3,000 emails/mo, 100/day) via **React Email** for templates. Do not auto-enable both Resend and other senders.
- **Incoming email**: **Cloudflare Email Routing** (free) — forward/catch-all, no mailbox.
- **Custom domain**: free `.dev`-style subdomains first; custom domain only when revenue justifies (or free domain via hosting provider).

### Paid-infra trigger (documented, not default)
If a product actually launches and grows, the FIRST spend candidates (in order) are: custom domain → paid email volume → database scale. Each requires a human gate. Until then `$0`.

## 3. Upfront vs variable cost (AI compute rule)

$0 UPFRONT FOR THE BUILDER is unchanged. Separately, CUSTOMER-FUNDED VARIABLE AI COMPUTE IS ALLOWED — paid model APIs may serve paying customers when: the payment/entitlement system functions, usage is bounded (credits/quotas/caps), exposure is controlled (gateway checks before expensive calls, no negative balances), margins stay healthy per-customer AND per-plan, and provider terms permit the model. Allowed shapes: subscription + included credits (A); + top-ups (B); + BYOK (C); + both (D). Never unlimited AI by default. Customer payment does not erase cash-flow risk (fees, refunds, disputes, settlement delays) — cap MAX EXPECTED OUTSTANDING AI EXPOSURE at a safe fraction of settled revenue, chosen per product. Full method: `templates/ai-economics/AI-ECONOMICS.md`.

## 4. Cost audit hygiene

- Before choosing any service, look up its CURRENT free-tier terms — they drift every year and every prior "we checked" reference is stale.
- Record the verified free-tier facts (with date) in the product's `technical-architecture` doc.
- Never auto-upgrade; never sign up for a paid plan for a lab experiment.

## 5. What $0 does NOT mean

- Free tools still enforce their own rules (rate limits, content policy, ToS). Compliance with third-party terms is still required (Part X legal).
- $0 is a constraint on cost, not on correctness: security, correctness, accessibility, validation, data integrity, error handling, and privacy are never skipped (Part T / Ponytail).

## 6. References

- SYSTEM.md §24 compliance, §25 payment policy.
- ENGINEERING-STACK.md (infra detail, email system, brand asset production).
- PRODUCT-GATES.md (spend + pricing + launch gates).