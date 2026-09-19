# Validation — Flat-Rate SMB Support Bot

Original: `research/ideas/ai-support-bot-flat.md` ($49–99 flat bot for 1–20-person SMBs). Untouched. Date: 2026-09-12. Three evidence passes aimed at the 14 named risks.

## 1-2. Exact problem / customer

1–20-person SMBs run support on founder inbox, shared Gmail, WhatsApp (4–5 devices max), Instagram DMs in separate tabs: overlaps, >24hr resolution, burial during busy hours (FACT-pattern: IH solo accounts, phone still top-2 for 63%). Narrowest pressure point: e-commerce WISMO/WISMR tickets (30–50% of volume) and micro-SaaS founder support load.

## 3-4. Current workflow

Founder batching ~1hr/day + docs page + phone for under-40 chat/self-serve preference split. Workarounds: free tiers (Crisp/Tidio free, Chatwoot self-hosted), shared inboxes, VA replies. Manual inbox is the dominant competitor (FACT-pattern).

## 5-7. Pain / frequency / severity

Daily low-grade load with spikes (order seasons, outages). Severity MEDIUM: time tax + slow replies, rarely existential — except WISMO-heavy stores where tickets scale with sales (FACT: Gorgias 33% WISMO + 18% shipping data).

## 8-9. Alternatives / why they fail users

Chatbase ($32–150/mo credit tiers + $99 debrand; 2.1 Trustpilot vs 4.4 G2; "credit system ridiculous," hallucinations, "bait and switch") · Fin ($49 base + $0.99/outcome incl. assumed resolutions; SMB avg $37k/yr; Salesforce ~$3.6B acquisition) · Tidio ($68–97 stacks; "quadrupled price," double-billing, suspensions) · Crisp ($45–95, AI capped below Plus) · Freshdesk ($57–106 stacks) · Dante/MyAskAI/SiteGPT ($40–129 bands). Failure modes users cite: per-resolution/meter traps, price hikes, wrong answers, suspensions, support opacity.

## 10. Willingness-to-pay evidence

Category spend PROVEN: Chatbase $10M ARR / 8k+ paying (FACT); stack totals $70–220/mo typical, ~$1k/yr AI budgets (FACT-pattern); switching for price documented (Intercom→Crisp/Freshdesk/Tidio). Switch-FOR drivers ranked: price predictability > accuracy > WhatsApp/IG+Shopify actions > 10-min setup > handoff+debrand. Gap exists: $49–99 flat unlimited without credits/seat trap — every incumbent meters there (FACT-pattern). BUT: gap ≠ demand; no observed switching INTO a flat-unlimited bot specifically.

## 11. Distribution

"Intercom/Crisp/Tidio alternative" SEO, SMB communities, Shopify ecosystem, agencies. First channel: grievance-thread replies + alternative-SEO (INFERENCE on engagement; conversions unobserved).

## 12-14. Technical / $0 / $100-MRR feasibility

Buildable on free tiers (FACT-pattern). Inference trivial: ~$0.001–0.007/resolution; 500 queries ≈ $1–5, 5,000 ≈ $10–35 + $25–50 vector DB (FACT-pattern operator math). $100 MRR = $49 × 3 (plumber + dental + cafe archetypes, cold-reachable) — winnable once, retainability unproven (INFERENCE).

## 15. Solo-maintainability

MEDIUM-HIGH burden: per-tenant indexes, doc re-syncs, stale-answer liability (Air Canada precedent: owner liable, C$812), abuse (prompt injection, token-burn spam), non-technical support load, onboarding as retention lever. Mitigations (retrieval-only + citations, refuse-when-unsure, handoff, evals) work but kill the zero-ops premise (FACT-pattern).

## 16. AI-margin

Headroom enormous at flat pricing (see §14). Model-deprecation treadmill documented (Assistants API shutdown Aug 2026, snapshot retirements) + token price-war volatility — prompts re-tune without notice (FACT-pattern). Manageable, not ignorable.

## 17-19. Risks / contradictions / unknowns

Risks: saturation (dozens sub-$99 down to $19), incumbent vertical templates + white-label already shipped, free compression (free tiers, Chatwoot), SMB SaaS ~3%/mo endemic churn + 20–30% first-90-day churn, urgency WEAK (nice-to-have, AI budgets maxed 2026), platform dependence. Contradictions: "huge margins" vs liability/ops costs that eat them; "flat gap exists" vs no observed flat-switching; "verticalization differentiates" vs proven ONLY in ecom-actions. Unknowns: flat-tier churn curves; SMB TCPA/SMS viability; conversion rate of grievance threads.
