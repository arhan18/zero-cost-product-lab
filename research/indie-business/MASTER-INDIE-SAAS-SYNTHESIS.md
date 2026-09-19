# MASTER INDIE-SAAS SYNTHESIS

100 real small software businesses (corpus: `research/indie-business/`, grades PRIMARY 74 / SECONDARY 25 / UNKNOWN 1). Every conclusion below traces to records; citations are file+record level, full evidence in `indie-business-dataset.json`.

## 1. Executive findings

- Solo/small-team software businesses are real, numerous, and durable: 62/100 $0-feasible YES, 55/100 $100-MRR HIGH.
- The binding constraints are distribution and unit economics — never code volume (technical complexity LOW 33 / MEDIUM 59 / HIGH 8).
- Revenue is founder-claimed and unaudited almost everywhere; aggregators are wrong often enough to be unusable for decisions (25-item contradiction log).
- Failure is structural (platform rent, negative margins, convergence), rarely executional — the 10+ failure records are the highest-value part of the corpus.
- AI wrappers can print money with metering (Chatbase $0→$10M ARR) and die structurally without it (Super AI, Vibe AI postmortems).

## 2. Problem patterns (TOP 20)

Own-itch dev pain · agency-client pain productized · creator growth grind · newsletter/email overload · scheduling awkwardness · analytics privacy backlash · form/feedback friction · proposal/invoice drudgery · outreach deliverability · podcast production overhead · church/nonprofit admin · fitness-client management · pet-booking chaos · support ticket overload · meeting-note loss · spreadsheet workflows · social-media consistency · testimonial collection · job-board noise · interior/photo visualization cost.

## 3. Customer patterns (TOP 20)

Solo developers · indie hackers · agencies · creators · newsletter writers · podcasters · churches · nonprofits · gyms/coaches · groomers · home services · SMB marketers · recruiters · realtors · freelancers · remote teams · developers-at-SMBs · community managers · course sellers · AI-curious consumers.

## 4. MVP patterns (TOP 20)

See `mvp-patterns.md` (nights/weekends builds, internal-tool productization, no-code origins, single-feature wedges, pre-sells, open-source cores, LTD launches, desktop-zero-infra, maintenance-mode endings, failure-shaped MVPs + 10 more).

## 5. Validation patterns (TOP 20)

See `validation-patterns.md` (dogfooding dominant; agency pull; pre-sell; waitlists; 84-person lists; concierge-first; audience-first; build-in-public; outreach; community posts; AppSumo-as-validation; open-source adoption; accidental demand + 7 more). Launch spikes ≠ validation.

## 6. Distribution patterns (TOP 20)

See `distribution-patterns.md` (SEO 51, community 46, blog 25, WoM 22, affiliates 20, podcasts 17, integrations 15, embedded virality, launch stacking, audience reuse, outbound, LTD communities, newsletter moats, open-source, vertical networks + 5 more). Paid ads absent day-one everywhere.

## 7. Pricing

Subscription default (75), freemium funnels (22), one-time desktop (17), meter-by-cost-dimension, LTD→recurring paths, quota-priced AI. Full: `pricing-patterns.md`.

## 8. Monetization

Subscriptions · one-time licenses · platform/transaction fees · exits (lempire, Paystone, Jasper, Tithe.ly, DaySmart) · LTD cash events · donations/tips · maintenance fees · affiliate payouts as channel cost. Structural losers: subsidized consumer AI, price-war commodities, unlicensed arbitrage.

## 9. Technical patterns (TOP 20)

See `technical-patterns.md` (boring stacks, desktop-zero-infra, OSS-core+cloud, cron backends, SQLite-first, static+serverless, no-code origins, API passthrough, BYOK, webhooks, email-infra honesty, mobile-only-where-job, self-host trust, single-region, no-collab-till-revenue, late payments, minimal observability, maintenance-mode, handoff-over-shutdown, inference-as-server-bill).

## 10. $0 feasibility (TOP 20)

See `zero-dollar-feasibility.md` (YES 62 / POSSIBLY 29 / NO 7). Safest: desktop, static, OSS-core, cron, quota-metered AI, BYOK, directories, LTD launches. Never: X-API clones, subsidized consumer inference, GPU-heavy low-price consumer, 24/7 fleets without revenue.

## 11. $100 MRR relevance (HIGH 55 / MEDIUM 16 / LOW 15 / UNKNOWN 14)

$10→10, $25→4, $100→1 customer math per record. One-time-license businesses score LOW-as-MRR by construction — judge as revenue milestones. Structurally unmonetized products need paid tiers first.

## 12. Failure patterns

Platform-rent repricing (Blackmagic $500K→$128K on X $42K/mo tier) · convergence death (Super AI, Pagoda Box) · negative unit economics (Vibe AI) · IP liability (Voicify/Jammable) · raised-and-stalled (Nudge Coach $4.41M → shutdown) · sunset-by-acquisition (ShortlyAI, Elvanto) · decline-phase (FindThatLead, Bidsketch) · category handoff (Espresso). Common thread: working products, structural causes.

## 13. Contradictions

25 items in `contradictions.md`. Meta-pattern: founders vs aggregators (founders win ~every time evidence is comparable); official pages vs official pages (ChurchTrac, Breeze); brief-vs-evidence (all resolved, surnames included).

## 14. Lessons for our Product Lab

`lessons.md` (15 learn + 10 do-not-copy). Warranted workflow changes (evidence-strong only): (a) briefs need ≥2-source rule (caught 6 misattributions); (b) Gate 07 kill arithmetic (Max-MRR-ceiling); (c) Phase 15 ownable queries + embedded viral surface mandatory; (d) Gate 11 solo-maintainability veto + free-tier-shaped schema; (e) AI records: inference-margin proof before scope lock. No global rewrites — these are additive checks.

## 15. Things we should explicitly avoid

X-API-dependent architectures · unpriced inference · price-war commodities · one-time-only revenue without renewal story · VC-scale categories at indie scope · unlicensed content arbitrage · aggregator-cited decisions · launch-once-then-stop · building for "everyone" · confusing prototype-free with operate-free.

## Cross-reference vs existing research

- PATTERNS THAT REPEAT: niche-down wedge; SEO compounding; boring stacks; pre-sell speed; audience reuse; subscription default; aggregators-wrong; patience-with-reviews.
- PATTERNS THAT CONFLICT: website corpus celebrates motion-led marketing; business corpus shows chrome-still + demo-only motion (cost + focus reasons). Founders corpus lionizes shipping speed; business corpus adds maintenance-mode and deliberate non-building as equal virtues.
- NEW PATTERNS (unique to small SaaS): LTD-as-capital; vertical-network distribution; open-source-as-funnel; BYOK margin design; quota-priced AI; handoff-over-shutdown; AppSumo-as-validation.
- SURPRISING OUTLIERS: SnippetsLab (11 yrs, no payment path, users begging); Healthchecks 5% dependency donations; Taplio influencer-equity board; ConfigCat AlternativeTo-first-funnel; Bear Blog one-feature $2K/mo.
- COMMON AI-ERA PATTERNS: wrapper economics bifurcate on metering; GPU bills disclosed only by Levels-class operators; inference cost forces the business model (quotas, trials, no free tier, BYOK).
- COMMON INDIE-HACKER PATTERNS: dogfood-first; agency-origin; audience-first; exit-as-return; postmortem generosity (Super/Vibe AI).

## Spotlight lists

- 10 exceptionally simple: Dead Man's Snitch, Healthchecks.io, Bear Blog, SnippetsLab, TastyIgniter, ChurchTrac-core, ConfigCat-v1, Podsqueeze-v1, Formula Bot-v1, WIP.co.
- 10 strongest distribution: Transistor, Taplio, Evaboot, Chatbase, Healthchecks (donations story), Hypefury-era, AppSumo-launched Plutio, AlternativeTo-led ConfigCat, newsletter-moat 4dayweek-class, church-network Planning Center.
- 10 strongest pricing/monetization: Gymdesk fairness framing, ServiceM8 job-volume, Fathom-premium lineage, quota-priced AI (Chatbase/Numerous), LTD-to-recurring (Plutio), annual-cash events, BYOK (TypingMind-class), transaction fees (Donorbox/RunSignup), maintenance fees (desktop tails), affiliate engines.
- 10 strongest niche-positioning: Planning Center (churches), Time To Pet (groomers), Gymdesk (micro-gyms), Donorbox (nonprofits), ChurchTrac (small churches), Pet Sitter Plus (sitters), Hexfit (kinesiologists), Groups.io (listserv refugees), Flocknote (parishes), Moeg-class avoided — Time To Pet instead.
- 10 strongest founder-market-fit: Palley (schedulers), Jackson/Buda (podcasters), Levels (AI portfolio), Dinh (power-user tools), Louis-Lucas (growth loopers), Rohan-class monitor builders, church-member founders (Breeze/Flocknote), coach-founders (Everfit/Gymdesk), groomer-software (Time To Pet), support-led founders (HelpSpot/Crisp-class).
- 10 failed/struggling: Pagoda Box, Espresso(handoff), Friends+Me, Revue, Elvanto, FindThatLead, Nudge Coach, ShortlyAI, Super AI, Vibe AI (+ Voicify/Jammable IP-death as 11th).
- 10 most $100-MRR-relevant: Healthchecks-class monitors, Evaboot-class outreach, Bear Blog-class single-feature, ConfigCat-class dev tools, Donorbox-class fee tools, Podsqueeze-class repurposers, Chatbase-class metered AI, Transistor-class niche hosts, Time To Pet-class verticals, Invoice Ninja-class OSS funnels.
