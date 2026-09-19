# POST-LAUNCH GROWTH

Operating workflow (not system policy): begins AFTER a product is LIVE. Turns real post-launch evidence into disciplined decisions — FIX, IMPROVE, EXPERIMENT, PIVOT, or KILL. Goal is not endless features. Foundation stays frozen; no fabrication, ever.

## Entry gate

Product must have: release report, production URL, functioning measurement where applicable, and actual post-launch data OR explicitly documented lack of data. Not live → STOP.

## Step 1 — Evidence ingestion

Read launch-report.md, Memory.md, PRD, Architecture, Design, Phases, SEO artifacts, analytics/Search-Console/Bing data, error/uptime data, payment data, support/issues, public feedback (Reddit/X/community). Separate MEASURED / ESTIMATED / INFERRED / UNKNOWN. Never turn assumptions into metrics.

## Step 2 — Acquisition

Visitors, sources, search impressions/clicks, referral/directory/social/direct traffic where measurable. Name TOP ACQUISITION CHANNELS and NON-PERFORMING CHANNELS. Never optimize a channel without evidence.

## Step 3 — Activation

PRD-defined activation event: VISITOR → SIGNUP → ACTIVATION → CORE OUTCOME. Unmeasurable → ACTIVATION NOT MEASURED. Never invent a rate.

## Step 4 — Core value

Successful and repeated core actions, time to value, completion/failure rates — compared against the actual product promise.

## Step 5 — Retention

Where data suffices: returning users, repeat usage, retention, churn, cancellations. Window fits usage frequency — never forced arbitrary windows.

## Step 6 — Monetization

Trial starts, paid conversions, active subscriptions, MRR, churn, failed payments, refunds. PRICE × PAYING CUSTOMERS = MRR. Free users, signups, and trials are never revenue.

## Step 7 — $100 MRR track

Current MRR, remaining gap, customers required, price required, conversion assumptions (e.g. $40 → $100 needs $60 more). Diagnose the gap as primarily ACQUISITION, ACTIVATION, PRICING, RETENTION, or PRODUCT VALUE.

## Step 8 — Product quality

Error rate, failed workflows, support requests, browser/mobile bugs, accessibility, performance, email/payment failures. User-blocking issues first.

## Step 9 — SEO feedback loop

High-impression/low-CTR queries, high-CTR/low-conversion pages, new queries, gaining/losing pages, unexpected intent. Map QUERY → PAGE → CTR → ACTIVATION → CONVERSION. Never content for volume's sake.

## Step 10 — AI search / agent discovery

Where measurable: mentions, citations, agentic browsing, answer-engine visibility. Never claim visibility unobserved. Feed findings into clarity, semantic structure, answer-first content, entity consistency, structured data.

## Step 11 — User feedback

Support messages, comments, reviews, GitHub issues, Reddit/X threads, feature requests, complaints. Classify BUG / FRICTION / MISSING CAPABILITY / MISUNDERSTANDING / PRICING / TRUST / PERFORMANCE / UX / FEATURE REQUEST / PRAISE. Feature requests are not roadmap requirements.

## Step 12 — Request frequency

Per repeated request: independent-user count, user type, frequency, business impact, core-problem connection. One request is not validation; repeated independent requests are stronger.

## Step 13 — Root-cause analysis

For significant problems ask WHY before fixing symptoms. Locate the cause: product, UX, onboarding, positioning, pricing, distribution, performance, reliability, trust, or architecture.

## Step 14 — Experiment design

Before major changes: HYPOTHESIS, CHANGE, METRIC, SUCCESS CRITERION, TIME/WINDOW, RISK, REVERSIBILITY. Small reversible experiments preferred.

## Step 15 — No random features

Nothing added because competitors have it, one user asked, AI suggested it, it looks impressive, or it's easy. Evidence must tie to customer outcome, retention, activation, monetization, acquisition, or reliability.

## Step 16 — Prioritization

P0 critical bug/security/revenue blocker · P1 major activation/value problem · P2 meaningful growth/product improvement · P3 nice-to-have. Never P3 while P0/P1 lives.

## Step 17 — Change decision

Every major change gets one state: FIX (clear defect) · IMPROVE (evidenced weakness) · EXPERIMENT (uncertain hypothesis) · PIVOT (problem/customer/wedge change) · KILL (investment unjustified) · IGNORE (insufficient evidence/low priority).

## Step 18 — Pivot check

Consider PIVOT on: different desired outcome, different segment, better audience via distribution, pricing-shifted behavior, repeated requests revealing another wedge, poor retention despite acquisition, product useful for a different job. Never on one negative comment.

## Step 19 — Kill check

Consider KILL on: repeated acquisition failure, weak activation, structural retention failure, vanished pay evidence, excess maintenance, failed economics, inaccessible distribution, lost wedge, excessive opportunity cost. Reuse original kill arithmetic where possible.

## Step 20 — Competitor response

Watch pricing, features, positioning, free tiers, integrations, policy, acquisitions. Ask whether our wedge materially weakened. No panic over routine updates.

## Step 21 — Solo-maintainability

Measure actual burden: support hours, incidents, manual data work, integrations, moderation, infrastructure, customer exceptions. Outgrowing value → REDUCE / AUTOMATE / REPRICE / KILL.

## Step 22 — AI-margin monitoring

Per customer: AI cost, credits consumed, heavy-user percentage, gross margin, failed requests, model usage, abuse, provider incidents, top-up behavior, BYOK adoption, cost/revenue ratio. Material divergence from assumptions → CREATE AN AI ECONOMICS DECISION: REPRICE, REDUCE LIMITS, CHANGE MODEL, ADD CREDITS, ADD BYOK, OPTIMIZE, REMOVE FEATURE, PIVOT, or KILL.

## Step 23 — Search / directory feedback

Directory traffic/conversions, backlinks where measurable, search traffic/conversions, high-performing pages. Stop low-value activities; double down only on evidence.

## Step 24 — Weekly / periodic review

WHAT CHANGED? WHAT WORKED? WHAT FAILED? WHAT BROKE? WHAT DID USERS DO/NOT DO? WHAT DID WE LEARN? WHAT SHOULD (NOT) CHANGE? No report without meaningful data → NO NEW EVIDENCE.

## Step 25 — Decision record

Per major decision write `products/<slug>/growth/decision-YYYY-MM-DD.md`: evidence, hypothesis, decision, reason, metric, expected/actual outcome, follow-up.

## Step 26 — Memory update

Durable context only: new evidence, important decisions, current metrics/risks, experiments, next action. Never an analytics dump.

## Step 27 — Experiment log

Maintain `products/<slug>/growth/experiments.md`: hypothesis, change, start/end, metric, result, interpretation, decision per experiment.

## Step 28 — Health scorecard

Maintain `products/<slug>/growth/scorecard.md`: ACQUISITION, ACTIVATION, CORE VALUE, RETENTION, MONETIZATION, QUALITY, SEO, DISTRIBUTION, OPERATIONS, AI MARGIN — each MEASURED / UNKNOWN / NOT APPLICABLE. Estimates labeled or absent.

## Step 29 — Portfolio learning

Across products extract: best channels, niches, pricing, MVP shapes, SEO patterns, recurring ops problems, common failure reasons. Feed back into Idea Radar, Opportunity Validation, Product Requirements — by recording proposed changes first, never silent edits.

## Step 30 — Release / iteration loop

LAUNCH → MEASURE → LEARN → FIX → EXPERIMENT → MEASURE → IMPROVE → PIVOT OR DOUBLE DOWN → KILL IF WARRANTED.

## Step 31 — No vanity loop

Never optimize impressions, likes, followers, traffic, pageviews, or stars unless they serve acquisition/value. Prefer activated, paying, retained users, successful core outcomes, MRR, qualified acquisition, reduced support burden.

## Step 32 — Growth gate

Is the product worth growing? Broken activation/value/retention → FIX PRODUCT FIRST. Never pour traffic into a broken funnel.

## Step 33 — Pause state

PAUSED when evidence is insufficient, capacity constrained, a dependency unresolved, an experiment pending, or the market temporarily unattractive. Pause is not failure — document why.

## Step 34 — Final decision

Every major review ends: DOUBLE DOWN / ITERATE / PIVOT / PAUSE / KILL. (Experiment-track products use the same five states per `workflows/experiment-track.md`; graduation to full product re-enters via Product Requirements with experiment evidence.) Observed behavior outranks pre-launch predictions on direct conflict — in both directions (SYSTEM.md §17c); state strength WEAK / EMERGING / STRONG / DECISIVE.

## Step 35 — Output report

Write `products/<slug>/growth/review-YYYY-MM-DD.md`: current state, acquisition, activation, value, retention, monetization, quality, SEO, distribution, maintenance, AI economics, experiments, competitor changes, major evidence, decision, next actions — labeled MEASURED / ESTIMATED / INFERRED / UNKNOWN.

## No fabrication

Never invent users, traffic, revenue, conversions, retention, rankings, testimonials, feedback, experiments, or purchases. No data → NOT MEASURED.

## No automatic feature building

Decisions only. Material changes re-enter PRD / Architecture / Phases / Implementation; minor fixes may use the implementation workflow.

## Final principle

Not BUILD MORE — LEARN FASTER + BUILD LESS + IMPROVE WHAT MATTERS + KILL WHAT DOES NOT WORK.
