## i06 slice: Privacy-First Analytics / Lightweight Telemetry (Indie)

**Research date:** September 2026
**Niche:** Privacy-first web analytics, event tracking, uptime/monitoring — bootstrapped/indie (Plausible and Umami excluded: covered in i04)
**Products researched:** 10 verified real products (8 live, 2 dead-ends)

---

## Fathom Analytics (https://usefathom.com/)

**Evidence:** INFERENCE — product/founding history is FACT across founder blogs (V2 rebuild, buyout, customer counts); revenue is deliberately undisclosed, all current figures third-party guesses. 7 sources reviewed.

**Revenue:** The Company-of-One archetype. $100K+ ARR by Nov 2020 (~2 years, founder milestones); thousands of paying customers and 450,000+ sites tracked (2023, founder). Never published exact revenue — on purpose, as brand. Third-party guesses range $5–10M ARR (Founder Ventures) to an implausible '$1M+/mo' (Beancount.io blog). The only anchored number is $100K ARR (2020); everything else is order-of-magnitude. Profitable throughout; Jack Ellis self-financed Paul Jarvis's buyout (deal negotiated in 24h, effective Dec 1, 2024) with zero outside money.

**MVP:** Paul Jarvis's tweet mockup (Apr 2018) → open-source Go version with Danny van Kooten (millions of downloads, 6,000+ stars) → paid Fathom Pro → near-death when Danny exited (Dec 2018, shutdown considered) → Jack Ellis rebuilt V2 on Laravel/Heroku/Redis (Nov 2019), tripling MRR. Each stage gated on proven demand.

**Distribution:** Viral mockup → open-source popularity → paid conversion; Product Hunt (#4); developer word-of-mouth and SEO; 25%-for-life affiliate program with super-low churn; zero ad spend.

**Takeaway for zero-cost lab:** Demand-gated bootstrapping is the method: never build the next stage until the current one proves demand. Premium pricing ($14→$45/mo) against a FREE giant works when privacy is identity, not feature. The 2024 self-financed succession proves profitable-small beats funded-big for founder freedom.

### Contradictions

- Founder Ventures $5–10M ARR (unverified estimate) vs Beancount.io '$1M+/mo' (2026, unverified, implausible) vs company: zero published figures. Most conservative anchor: $100K ARR (2020, founder).
- No founder-side contradictions on history; the V2 near-death story is told consistently.

---

## Simple Analytics (https://www.simpleanalytics.com/)

**Evidence:** FACT — founder-published ledger ($30K ARR 2019 → $6.7K MRR 2020 → 35.5–36K MRR 2024, 1,330 customers) plus third-party convergence (~$39.6K MRR, ~$500K/yr). 8 sources reviewed.

**Revenue:** Slow-compound textbook. $30K ARR (Oct 2019) → ~$80K ARR / 471 customers (mid-2020) → stalled at ~$11K MRR until marketer Iron Brands joined (2022) → $30K+ MRR → 35.5–36K MRR, +36% YoY, $0 funding (2024). Third parties: ~$39.6K MRR / 1,317 subs (Systemaic 2026), ~$500K/yr (RightBlogger 2026). Seven years, almost entirely SEO + word-of-mouth.

**MVP:** Two months idea-to-launch: a pageview graph plus top-pages/referrals/screens lists — no visitor tracking at all. Launched on HN from an Amsterdam bench (#1, 9 hours, ~30K pageview spike) → first 30 paying customers day one.

**Distribution:** SEO is #1 ('Google Analytics alternative'); serial HN relaunches at every milestone ($30K ARR, $4K MRR, $100K ARR posts); Product Hunt (370 upvotes); open /metrics page as content engine; affiliates; embeddable dashboards; principled refusal of Google/Facebook ads; later direct business outreach.

**Takeaway for zero-cost lab:** Distribution, not product, was the bottleneck — three product-only years stalled at $11K MRR; adding a marketing co-founder unlocked 3x. Transparency (open MRR/costs page) is a growth channel you can turn down once it works. And 'quit your job to force motivation' only worked because freelancing 1 day/week funded the gap — the clean story omits the messy cash bridge.

### Contradictions

- Starter Story's '1300+ users, $32K MRR within months of launch' conflates later scale with launch era (launch = ~30 paying customers). Founder timeline wins.
- Systemaic ~$39.6K MRR vs RightBlogger ~$500K/yr: directionally consistent (~$475K ARR), both approximate.

---

## Pirsch (https://pirsch.io/)

**Evidence:** FACT — founder-published recaps at every stage ($76 MRR 2021 → $542 MRR 2022 → ~$11K MRR 2024 → ~$14.3K MRR 2025, subscriber counts, net volumes). 7 sources reviewed.

**Revenue:** Honest mid-compound. $76 MRR / 10 customers (Jun 2021) → $542 MRR / 49 subs (Jan 2022, past server-cost breakeven) → ~$6K→~$11K MRR, ~$114K net volume, 432→553 subs (2024; founder full-time) → ~$11K→~$14.3K MRR, ~$130K volume, 553→627 subs (2025, +1 health-sector enterprise client). Two Germans, one GmbH, zero VC.

**MVP:** Internal tool for their own products (Emvi Software) → public v1.0 with simple frontend/backend integration → content marketing only, no paid ads.

**Distribution:** Content from day one; Indie Hackers milestone posts; brutally honest year-recaps as marketing; EU data-residency positioning ('data stays in Germany'); integrated link shortener as attribution hook; slow enterprise land-and-expand.

**Takeaway for zero-cost lab:** The 'too rich to die, too poor to live' framing is the most quotable middle-stage indie psychology anywhere: profitable, free, fun — but sub-senior-salary income. Internal-tool-first means zero marginal build cost; breakeven at $542 MRR. Enterprise additions (not more self-serve) are what moves the needle at this stage.

### Contradictions

- GetLatka $62.5K ARR (2023) undershoots the founder trajectory (~$72K ARR run-rate entering 2024). Aggregator undercount confirmed; founder recaps authoritative. No founder-side conflicts.

---

## Cabin (https://withcabin.com/)

**Evidence:** INFERENCE — company/product/pricing verified via primary sources (pricing page fetched, independence post, docs, privacy policy); revenue completely undisclosed. 7 sources reviewed.

**Revenue:** UNKNOWN — no figures published anywhere. Survived ~5 years as a studio-subsidized passion project, now a sole-operator commercial product (Free / $14 / $45 tiers). Treat all monetization as early-stage inference.

**MVP:** Studio side-project with the slice's most rigorous technical bet: identifier-free unique-visitor counting via an HTTP Last-Modified browser-cache trick (no cookies, no UIDs, no fingerprinting — published write-up), plus carbon-footprint reporting from the start and an aggregate-only data model.

**Distribution:** Studio-client halo (IKEA, Spotify, BBC, Logitech); deep technical GDPR/cookieless content; comparison pages (vs GA/Plausible/Matomo); 'How Green Is Your Website' tool; agency channel via branded client dashboards on the $45 Scale tier; early MCP/AI-agent-traffic monitoring.

**Takeaway for zero-cost lab:** Studio-incubation is a replicable zero-cost path — fund 5 years of R&D with client work, then commercialize. The agency Scale tier (branded client dashboards) is the monetization pattern to copy. Legal candor (admitting in-memory IP processing IS processing) is itself a trust moat.

### Contradictions

- Brief named founder 'Nico Cernek' — every primary source (blog, privacy policy, UK company 08625310) names NIC MULVANEY. 'Nico Cernek' appears in no primary source; recorded as misattribution, corrected.
- Cabin is ALIVE (Aug 2026 policy update, active changelog) — any 'dead' rumors are false; no substitution made.

---

## Beam Analytics (https://beamanalytics.io/)

**Evidence:** FACT — founders' launch economics ($20 MRR, $40 burn) plus official shutdown notice (closes September 1, 2026) on their own domain. 7 sources reviewed.

**Revenue:** $20 MRR at launch (Feb 2023, ~100 users) → ~200 websites (Mar 2023) → shutdown announced 2026. A LinkedIn directory claims $201.8K annual revenue — irreconcilable with founder sources and the shutdown; recorded as directory noise. Final revenue UNKNOWN.

**MVP:** Two part-timers, full-time jobs, built in ~3 months (not ~12) by buying infrastructure: ClickHouse via telemetry.sh (Events + Query APIs), EU Hetzner hosting, one-line script — standard metrics PLUS funnels/cohorts/custom events from day one.

**Distribution:** Launch tweet thread; Starter Story; Tinybird co-marketing (case study + Q&A); competitor price-comparison table as linkbait; JR's indie-hacker audience halo.

**Takeaway for zero-cost lab:** The cautionary pole of this slice — same category as Fathom, opposite strategy ('supermarket house brand': $11/mo + $2/100K pageviews, unlimited domains/seats) and opposite outcome. Zero-dollar start ≠ zero-dollar survival: low margins left no buffer, part-time focus never compounded, price-war positioning without scale is fatal. Read against Fathom's premium success.

### Contradictions

- LinkedIn '$201,765 annual revenue, 1 employee' vs founders '$20 MRR' (2023) + shutdown (2026). Verbatim both sides; founder sources win — the LinkedIn figure is unverified directory data describing a 2-founder side project as a 1-employee firm.

---

## LogSnag (https://logsnag.com/)

**Evidence:** INFERENCE — founding/validation/conversion mechanics are FACT across founder and press sources; exact revenue never published (Starter Story's '$0' is a scraper placeholder beside 'Profitable: Yes'). 8 sources reviewed.

**Revenue:** Profitable within ~2 months of monetization (founder via Bootstrappers, 2022); 28% free→paid conversion once users hit limits; ~1,200 free users at full launch (Apr 2022). Exact MRR/ARR UNKNOWN.

**MVP:** Scratch-own-itch from Checkride (pilot marketplace) pain: Slack/Discord notification band-aids couldn't show per-user history. December build (~120 days total): single POST endpoint + real-time timeline + push notifications, cross-platform (React/Capacitor/Electron; Node/TS/Go; MongoDB + ClickHouse on DigitalOcean).

**Distribution:** Reddit launch posts (300 waitlist signups in 2 days); Twitter build-in-public (70→2K followers Jan–Apr 2022, →25K over 2 years; 950 waitlist); SEO/programmatic content; Indie Hackers; Bubble/no-code tutorial ecosystem; minimal dev docs (cURL/Python/JS).

**Takeaway for zero-cost lab:** The 28%-on-limit-hit conversion is the standout mechanic in the slice: meter free so usage growth forces upgrade ('nobody comes in straight to professional — everyone starts free'). Pricing took iterations (wrong audience + free-loader trap → API-call metering, free cap 200→2,500 events over time). Flexibility paid off — users invented the feedback-collection use case.

### Contradictions

- Starter Story '$0/mo revenue' + 'Profitable: Yes' simultaneously — the $0 is missing-data placeholder, not a claim; Bootstrappers confirms profitability. No real conflict.
- Free-tier drift (200 → 1,000 → 2,500 events/mo across 2022–2025 sources) reflects pricing iteration, not contradiction.

---

## Splitbee (https://splitbee.io/) — FAILURE CASE

**Evidence:** FACT — acquisition (Vercel blog + BusinessWire, Oct 25, 2022) and sunset (own domain now a thank-you page) are primary-sourced. No revenue ever published. 7 sources reviewed.

**Revenue:** UNKNOWN — terms undisclosed; talent/product acqui-hire, not a revenue event. LinkedIn's '$1M–$10M range' is unverified directory noise.

**MVP:** Tobias's first releases (visits + conversion basics) → brother Timo joined for a full design facelift (bee logo, landing, mobile dashboard) → expanded to all-in-one: funnels, A/B tests, email automations. Vienna, 2020–2022.

**Distribution:** Design-led virality (polished screenshots, beloved brand); indie-hacker Twitter; Next.js ecosystem fit — which became the exit: Vercel needed first-party privacy-friendly analytics, and audience metrics shipped to every Vercel customer weeks after the deal.

**Takeaway for zero-cost lab:** The honest dead-end, recorded per brief without diminishing the founders (both now lead analytics/design at Vercel — Tobias built the Observability/Web Analytics/Speed Insights/Logs org). Lesson: scope too broad for 2 people + no public revenue traction + perfect ecosystem fit = acqui-hire, i.e. success for founders, death for the product. Contrast with Fathom/Simple Analytics independence. Ecosystem-fit exits are a strategy — but name them as exits, not independence.

### Contradictions

- Interpretive, not factual: acquisition framed as triumph ('thrilled to join forces') vs lab framing as dead-end (product killed, brand a thank-you page, users migrated). Both true simultaneously.

---

## GoatCounter (https://www.goatcounter.com/)

**Evidence:** INFERENCE — open-source reality, founder, donation model verified via primary sources (site, 'why' essay, GitHub, Sponsors page); revenue never published; paid-tier existence disputed between secondaries. 6 sources reviewed.

**Revenue:** UNKNOWN. Donation-funded (GitHub Sponsors $5–$100/mo tiers); founder works full-time on it with 'little other source of income'. No verified subscription revenue.

**MVP:** Solo-built Go single binary: pageviews, referrers, campaigns, browsers, countries, screen sizes, events, filtering — SQLite default (PostgreSQL for scale). Same codebase hosted + self-hosted; no crippled community edition.

**Distribution:** GitHub discovery; Hacker News; indie-dev word-of-mouth; accessibility-first positioning (the category differentiator); 'de-Google-fy the internet' mission; zero paid marketing. Free hosted use ('reasonable' — 'millions of pageviews/day isn't') keeps the barrier near zero.

**Takeaway for zero-cost lab:** The purest zero-cost product in the slice — free for users, ~$5/mo VPS to self-host, open-source. The anti-monetization pole against Fathom's premium pole: proves one person can serve the non-commercial web on donations. The sustainability question is the founder's income, not the tech. Honesty-as-pricing ('I need to pay the bills' essay) is itself the business model.

### Contradictions

- MakerStack (2026) describes a '$15/mo Business' tier vs unsubbed.co (2026) 'There is no paid tier' vs primary site (free + donations only). Paid-tier existence UNVERIFIED from primary sources — do not cite $15/mo as fact.

---

## Tinylytics (https://tinylytics.app/)

**Evidence:** INFERENCE — early validation figures FACT (founder: €160 MRR day 17, 10 subs in 48h); current revenue unpublished; 2026 pricing/unlimited-hits verified via docs + changelog. 7 sources reviewed.

**Revenue:** €160 MRR (~$180), ~€400 total at day 17 (Jun–Jul 2023; yearly plans outsold expectations). Current MRR UNKNOWN — active iteration through Feb 2026 (unlimited-hits announcement, pricing tweaks) implies sustained operation.

**MVP:** Weekend build, live Monday: pageview stats with 10x Plausible's headroom at half the cost. Teased vaguely → 20 accounts day one → 100 in 2 weeks → subscriptions added → 10 paid in 48h. Fastest validation in the slice.

**Distribution:** Founder blog + launch post (first sub from the blog); Plausible-switcher testimonials; public changelog as marketing; live demo of own stats; planned indie-podcast ads; SEO comparison posts.

**Takeaway for zero-cost lab:** Site-count pricing ($7/$14/$29 for 2/20/50 sites) + unlimited-hits-forever is the viable anti-metering wedge against every usage-priced rival — same analytics on all plans, pay for sites not permission. 'Drop free, keep trial' ('we cannot compete on free… bootstrapped for the long run') is the counter-lesson to LogSnag/GoatCounter free funnels. JOMO (joy of missing out) positioning + fun (90s hit counter, kudos) differentiates an anxiety-inducing category.

### Contradictions

- None found. Gap is absence (no current revenue), not conflict. Founder identity (Vincent Ritter), 2023 launch, and early figures consistent across independent sources (GrowthArchive, customer testimonial, changelog voice).

---

## Oh Dear (https://ohdear.app/)

**Evidence:** FACT — founder-claimed trajectory ($1.5K MRR 2018 → $1M ARR 2025) across two independent interviews plus 8-year public revenue-sharing history; scale stats (14B+ checks) founder-published. 7 sources reviewed.

**Revenue:** ~$1.5K MRR at end of launch month (Jan 2018, 32 customers — profitable month one) → >$83K/mo, $1M ARR (Sep 2025 IH post) → confirmed in 2026 SaaSrat interview. Two founders, zero employees, zero VC. (GetLatka claims $126.5K — see Contradictions.)

**MVP:** Uptime + cert-expiry alerts + a search-engine-style whole-site crawler (broken links, mixed content) — the day-one wedge over homepage-pingers. Evenings/weekends on Laravel Spark; dogfooded on Spatie + Nucleus sites; open-source laravel-uptime-monitor (2016) as prototype.

**Distribution:** Audiences built BEFORE product (Twitter, cron.weekly ~11K + Freek's ~7K newsletters, blogs/RSS) → 500-person pre-launch list → 10% converted (~20 paying, ~$1.5K MRR day one); Laravel News pickup; Product Hunt Product of the Day; API-first + framework integrations (CraftCMS/Statamic/Laravel Nova) as channels. Paid ads and outsourced content: near-zero ROI, founder-regretted.

**Takeaway for zero-cost lab:** The $1M ARR / 2-founder / 0-employee proof — and the complete operating system: boring stack (Laravel/MySQL/Redis/ClickHouse, ~50 VMs), no free tier ('free users cost money and rarely convert'), no employees, audience-before-product. The 500-list → $1.5K-MRR-day-one funnel is the most replicable zero-cost launch in this slice. Profitable from month one because time was 'free' and the first income covered hosting.

### Contradictions

- DIRECT CLASH: founders '$1M ARR / >$83K/mo' (2025–2026) vs GetLatka '$126.5K revenue 2024 (up from $100K 2023)'. Founder side (two independent interviews + public revenue-sharing history + 14B-check scale) outweighs scraper estimate; GetLatka likely stale/modeled. Early $1.5K MRR consistent across founder sources.

---

## Footer: Substitutions, Discoveries, Blind Spots, and Future Suggestions

### Substitutions Made
- **Cabin kept, founder corrected** — brief named 'Nico Cernek'; all primary sources name NIC MULVANEY (Nic Mulvaney LTD). No substitution: product is alive and verified.
- **Slots 8–10 (own choice): GoatCounter** (open-source/donation pole), **Tinylytics** (joyful indie + unlimited-hits wedge), **Oh Dear** (uptime/monitoring + $1M ARR two-founder proof). Spread covers pageview analytics, event telemetry (LogSnag), uptime (Oh Dear), and error-adjacent health (Oh Dear cron/app-health) with real indie operators.
- **No dead-product substitution needed** — Cabin survived verification; Beam and Splitbee retained deliberately as the slice's two failure cases.

### Discoveries
1. **Demand-gated bootstrapping** (Fathom): never build the next stage until the current one proves demand — tweet → open-source → paid → rebuild.
2. **Distribution was the bottleneck, not product** (Simple Analytics): 3 years stalled at $11K MRR; a marketing co-founder unlocked 3x. Fix product AND distribution.
3. **'Too rich to die, too poor to live'** (Pirsch): the honest psychology of mid-stage indie SaaS at ~$11–14K MRR — profitable but sub-salary.
4. **28%-on-limit-hit conversion** (LogSnag): meter free so usage growth forces upgrade; everyone starts free, nobody starts paid.
5. **Price-war fatality vs premium success** (Beam vs Fathom): same category, opposite pricing, opposite outcomes — 'house brand' margins leave no buffer.
6. **Audience-before-product** (Oh Dear): 500-list → 10% → $1.5K MRR day one; years of free audience-building preceded the launch.
7. **Unlimited-hits + site-count pricing** (Tinylytics): pay for sites, not permission — a viable wedge against every metered rival.
8. **Studio-incubated independence** (Cabin): fund R&D with client work, commercialize later — a distinct zero-cost path.
9. **Acqui-hire as honest dead-end** (Splitbee): ecosystem-fit exit is a strategy, but record it as product death, not independence.
10. **Transparency as a dial, not a vow** (Simple Analytics, Pirsch, Oh Dear): publish revenue while it markets you; all three dialed it back or reframed it later.

### Blind Spots
- **Geography**: 7 of 10 founder teams are EU-based (NL, DE, UK, BE, AT); only LogSnag (US) and Beam (US Bay Area) are American; zero Asia/LatAm/Africa representation — partly documentation bias, partly GDPR tailwind concentrating this niche in Europe.
- **Gender**: all identified founders male; documentation bias uncorrected.
- **Revenue opacity**: 4 of 10 (Fathom, Cabin, GoatCounter, Tinylytics-current, LogSnag, Splitbee — six) lack verified current revenue; the slice leans on early milestones and third-party guesses for half its records.
- **No error-tracking pure-play**: slot 10 went to uptime/monitoring (Oh Dear) for evidence strength; a Honeybadger-style indie error-tracker remains uncovered.
- **Survivorship tilt**: 8 live vs 2 dead; the dead (Beam, Splitbee) died by shutdown/acqui-hire, not by slow churn-out — the most common indie death is still undocumented.

### Future Suggestions
1. **Indie error-tracking slice**: Honeybadger, Flare (Spatie), Exceptionless-level bootstrapped players with verified revenue.
2. **Slow-death slice**: analytics/telemetry products that faded via churn (not shutdown) to document the modal indie failure.
3. **Pricing-model shootout**: metered (Pirsch/Beam) vs site-count (Tinylytics/Oh Dear) vs premium-flat (Fathom) vs donation (GoatCounter) vs free-funnel (LogSnag) — conversion and ceiling comparison.
4. **GDPR-tailwind quantification**: how much of 2018–2023 EU privacy-analytics growth was regulation-driven (AT/FR/IT rulings) vs product-driven; is the window closed?
5. **Non-Western telemetry slice**: uptime/analytics builders from India, SEA, LatAm, Africa to fill the geography gap.
