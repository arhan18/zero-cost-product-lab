# Validation — BYOK SDR-lite

Original: `research/ideas/byok-sdr-lite.md` ($99/mo DIY prospecting, BYOK draft-and-approve). Untouched. Date: 2026-09-12. Three evidence passes aimed at the 12 named risks.

## 1-2. Exact problem / customer

Agencies/SMB sellers face unpredictable enrichment + sending costs (Clay dual credits/actions, 30–50% bill swings; Smartlead sticker-vs-real gaps). Narrowest ICP: 2–10-person done-for-you lead-gen shops, 3–10 B2B SMB clients at $1.5–2.5k retainers, 30–150k sends/mo (FACT-pattern: agency owner receipts, r/gtmengineering threads).

## 3-4. Current workflow

Clay (list/enrich drafting) → waterfall verifiers (MillionVerifier/Bouncer, pay-per-hit) → Smartlead/Instantly (sending via 2–3 inboxes/domain, SPF/DKIM/DMARC, 3–4-week warmup, 20–30/inbox/day) → CRM sync on high tiers. Manual Sheets + Apollo-free tier at the bottom end (FACT-pattern: agency stack teardowns).

## 5-7. Pain / frequency / severity

Pricing unpredictability is chronic and budgeted-painful (FACT: "pricing change breaking agency margins," 3 agencies moved off). Severity MEDIUM-HIGH on margins, but note: the pain is with Clay specifically, and leavers move to $25–55 tools, not upward (FACT-pattern).

## 8-9. Alternatives / why they fail users

Clay Launch $185/Growth $495 (+30% top-ups, CRM/API gated to Growth+); Smartlead $39–379 + white-label/server add-ons (real bill ~$385 for 5 clients vs $78 sticker); Instantly $37–358 + leads/CRM $47 each; 11x $45k/yr; MillionVerifier/Bouncer paygo verification. Failures per users: Clay credit burn + HTTP/CRM locks; Smartlead bill stacking; Instantly shared-warmup open-rate drops (30–40% in 2 wks); free-tier commercial limits.

## 10. Willingness-to-pay evidence

Switching for price is PROVEN (Clay→off threads with named moves; Smartlead→SendKit Jan 2026). BUT all observed switching lands in the $25–55 tier (FACT-pattern). Zero threads cite BYOK as a purchase reason — Clay's own "use your own API keys" is documented as a cost footnote everywhere (FACT-pattern). BYOK-as-advantage: UNPROVEN. Price complaint (Clay bills) ≠ willingness to pay US $99 (different tier, different buyer).

## 11. Distribution

r/agency (99k), r/gtmengineering (16k, +1,219% YoY, Clay #2 topic), r/coldemail, X outreach lists, "clay alternative/too expensive" SEO. First channel: teardown replies in Clay-pricing threads (INFERENCE from engagement patterns, not observed conversions).

## 12-14. Technical / $0 / $100-MRR feasibility

Technically buildable on free tiers (FACT-pattern). $0-feasible POSSIBLY: the product is cheap to build; operating it is not — see §15. $100 MRR = 2 × $99: gettable (two named agency archetypes via thread replies) but not retainable (INFERENCE) — retention is the failure point, not acquisition.

## 15. Solo-maintainability

THREAT ( kill-test): shared tracking-domain fate (one dirty 5k list burns all tenants); Gmail Nov-25 permanent 550 rejects + bulk-sender status; 2–5% typical bounces; "nightmare" 49-client support loads; CAN-SPAM/GDPR/CASL exposure requiring abuse desk, suppression lists, kill-switches. A solo founder becomes free deliverability support for unfixable-by-code problems (FACT-pattern).

## 16. AI-margin

BYOK makes inference margin-safe by construction (FACT-pattern economics) — but margin safety is irrelevant when demand and liability fail. AI was never the risk; noted as validated-non-issue.

## 17-19. Risks / contradictions / unknowns

Risks: saturation (10+ tools ≤$99), incumbent preemption (Clay BYOK + Smartlead unlimited mailboxes already shipped), free compression (Apollo/HubSpot free cover SDR-lite volume), platform dependence (Google caps, enforcement, vendor pricing). Contradictions: "Clay revolt proves demand" vs leavers landing at $25–55, not $99; "BYOK saves money" (true) vs "BYOK sells product" (unevidenced); "$100 MRR easy" vs retention cliff. Unknowns: exact churn curves; TCPA-compliant SMS viability; whether ANY buyer paid a premium for BYOK specifically.
