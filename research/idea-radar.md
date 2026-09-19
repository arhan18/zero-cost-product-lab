# IDEA RADAR

Specified system for surfacing future product ideas from real-world signals. Feeds Phase 01 (Idea Discovery) and Phase 05 (Opportunity Scoring). This is a specification — it runs continuously as a habit, not as a build.

## Sources (where useful)

X · Reddit · Indie Hackers · Product Hunt · Hacker News · GitHub · search trends · founder discussions · community complaints · tool requests · manual workflows · product launches.

File raw signals in `research/` by source (never synthesized on arrival).

## What to look for

Repeated pain · recurring manual work · underserved customers · willingness-to-pay · competitive gaps · emerging categories · distribution opportunities · ownable search intent.

Do NOT collect "trending ideas." Collect pains with evidence.

## The 10 questions (every candidate must answer before Phase 05)

1. WHO HAS THE PROBLEM? (specific, reachable)
2. HOW OFTEN? (frequency with evidence)
3. HOW PAINFUL? (cost in time/money/risk)
4. HOW DO THEY SOLVE IT NOW? (current workflow, incl. spreadsheets/manual)
5. WHY IS THAT BAD? (concrete deficiency, quoted where possible)
6. CAN WE REACH THEM? (first-10-users pool named)
7. WOULD THEY PAY? (evidenced signal, not assumed)
8. CAN WE DIFFERENTIATE? (wedge vs incumbents + workarounds)
9. CAN WE BUILD IT FOR $0 UPFRONT? (free-tier-shaped, per ZERO-COST-POLICY)
10. CAN ONE PERSON MAINTAIN IT? (Gate-11 veto preview)

Unanswerable questions are marked UNKNOWN — they become the Phase 02/04 research plan, not guesses.

## Output

One `templates/idea-brief` card per candidate, suspicion-tagged, routed to Opportunity Scoring. Killed cards stay filed (the radar learns what it over-rated).

## Discovery modes (boring capability kept; these add range)

- MODE A — BALANCED: boring micro-SaaS + proven-product wedges + trending AI + experimental, in one run.
- MODE B — TRENDING AI: new AI workflows, agents, wrappers with real demand, creator/coding/research/productivity/media/automation AI, viral products, recent launches.
- MODE C — CLONE + WEDGE: successful products with high pricing, bad UX, weak free tier, per-seat pain, missing integrations, poor onboarding, underserved niches, poor localization, excess complexity, or migration openings.
- MODE D — BORING PROFITABLE: repetitive workflows, niche B2B, utilities, vertical software, simple recurring-value products.
- MODE E — EXPERIMENTAL: unusual internet products, viral mechanics, weird utilities, novel interfaces, emerging behavior, short-lived trends.

Default: BALANCED. A balanced run reserves meaningful capacity for AI and clone candidates when evidence supports them — never collapses to boring-only. Explicit requests ("10 trending AI SaaS," "10 clone-with-wedge," "10 boring SaaS," "10 AI launches in 6 months") are honored as given.

## AI trend sourcing

X, Reddit, IH, PH, HN, GitHub, launch sites, founder posts, AI communities, model-release discussions, search trends. Prefer LAST 12 MONTHS; LAST 90–180 DAYS for fast movers. Hunt: rapid adoption, repeated requests, viral workflows, new behavior, repeated complaints, manual tool-assembly, capabilities unlocked by recent models, unusually fast attention, multi-competitor categories.

## AI idea types (never "wrapper" only)

Agents, workflows, copilots, automation, search, analysis, transformation, creation, personalization, monitoring, research, coding, media, voice, image, video, document processing, business operations.

## Clone wedges (valid)

Narrower ICP, simpler workflow, cheaper/flat-transparent pricing, better free tier, faster outcome, better onboarding/UX/integration, specific platform/industry, localization, privacy, self-hosting, BYOK, migration, automation, better SEO/distribution. "Add AI" alone is never a wedge; "same thing, cheaper" is a WEAK WEDGE unless price dominates proven unmet need.

## Output categories

Label every opportunity: BORING · AI · CLONE · CLONE + AI · EXPERIMENTAL · HYBRID.

## Bias rules

No anti-AI bias (crowded/AI/trendy/existing-competitors never auto-reject; judge demand + distribution + wedge + economics + time-to-MVP). No AI-hype bias (LLM/trendy/viral/discussed never auto-recommends; require problem + user + behavior + commercial evidence). Scores decide philosophy — the radar finds evidence, never picks boring-vs-trendy.
