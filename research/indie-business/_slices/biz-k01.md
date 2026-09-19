# Indie-Business Slice — k01

> Developer / technical SaaS A. 10 verified records. Condensed from `k01.json` (68 fields each); full data in `indie-business-dataset.json`.

## Tower Git client (https://www.git-tower.com/)

- **productName**: Tower Git client
- **url**: https://www.git-tower.com/
- **founder**: Tobias Günther and Alexander Rinass (co-founders, Fournova, Germany)
- **teamSize**: Small team — CONTRADICTION: Tracxn lists 13 employees (official) vs 5 employees Dec 2020/2021; acquired by SaaS.group Feb 2021.
- **launchYear**: 2010 (work started 2010, first Mac version shipped 2011 per CTO interview)
- **category**: Developer tools / Git GUI client
- **targetCustomer**: Developers, designers and teams using Git on Mac/Windows.
- **coreProblem**: Git's CLI is powerful but error-prone and hard to learn, slowing everyday version-control work.
- **productSolution**: Fast native Mac/Windows Git client with drag-and-drop, undo, conflict wizard and pull-request workflows.
- **coreFeature**: Visual Git operations (interactive rebase, single-line staging, conflict wizard, undo) inside fast native apps.
- **initialMVP**: Mac-only Git client (Tower 1, 2011) covering commit/branch/history basics; Windows version shipped 2016.
- **featuresNotInMVP**: Windows version, pull-request management, stacked branches, AI commits, team management, SSO.
- **pricingModel**: Annual subscription per user (moved from perpetual licenses with Tower 3, June 2018).
- **pricingTiers**: Basic $69/yr, Pro $129/yr, Enterprise $149/yr per user; free for students/educators.
- **freeTier**: No free tier; 30-day full Pro trial, no credit card; old perpetual v1/v2 licenses keep working.
- **trial**: 30-day free trial of Pro on all plans; 30-day money-back guarantee.
- **revenueEvidence**: REVENUE NOT PUBLICLY DISCLOSED; Paddle reports subscription launch outperformed prior major releases with +96% YoY revenue growth.
- **validationMethod**: Scratch-own-itch: founders built the Git client they wanted; early Mac-dev community feedback.
- **firstUserAcquisition**: UNKNOWN in detail; early Mac-dev community plus founder Git-education content (Smashing Magazine Git intro, July 2011).
- **first100Users**: NOT PUBLICLY DISCLOSED; 50,000+ customers by Oct 2015, 100,000+ claimed later.
- **mainDistribution**: Content/SEO: free Git ebooks, webinars, tutorials and Learn section drawing devs to the product.
- **techStack**: Native per platform: Objective-C/Swift plus Apple frameworks (Mac); C#/WPF/.NET (Windows).
- **zeroUpfront**: POSSIBLY (prototype: basic Git GUI buildable with free tooling; operate-at-scale needs support/billing infra)
- **mrr100**: MEDIUM ($69/yr ≈ $5.75/mo needs ~18 users for $100 MRR; Pro $129/yr needs ~9)
- **learn**: Content marketing (free Git education) can carry a paid dev tool; native polish justifies premium pricing over free GUIs.
- **notCopy**: Do not copy subscription-only licensing without grandfathering goodwill; dual-platform native development doubles maintenance.
- **evidenceGrade**: SECONDARY
- **sources**: git-tower.com (pricing, about, CTO interview blog); Paddle Tower case study (bootstrapped, +96% YoY, 75% renewal); Perforce 2015 press release (50k customers); HN v3-subscription threads. Smashing Magazine author bio names Tobias Günther co-founder of Tower; Tower blog interview names Alexander Rinass CTO and co-founder; Paddle case study names Fournova as the bootstrapped company behi

## Dash docs app (https://kapeli.com/dash)

- **productName**: Dash docs app
- **url**: https://kapeli.com/dash
- **founder**: Bogdan Popescu (solo indie developer, Kapeli, Romania)
- **teamSize**: 1 (solo; described in contemporary coverage as a one-man software project).
- **launchYear**: 2012 (founder CS graduate 2012 turned indie; Dash 3 shipping by 2016 per founder blog)
- **category**: Developer tools / offline API documentation browser + snippet manager
- **targetCustomer**: macOS developers needing instant offline API documentation.
- **coreProblem**: Looking up API docs online is slow and impossible offline; context-switching to a browser breaks flow.
- **productSolution**: Instant offline search across 200+ API docsets plus snippet manager, integrated into editors.
- **coreFeature**: Fuzzy instant offline search over downloadable versioned docsets.
- **initialMVP**: Mac API-doc browser with a handful of scraped docsets and a global search hotkey.
- **featuresNotInMVP**: Snippet manager, 200+ docsets, cheat sheets, user docset generator, IDE plugins, iOS app, MCP/AI integration.
- **pricingModel**: One-time perpetual license per major version (paid upgrades); direct sales after App Store exit.
- **pricingTiers**: $29.99 one-time (Mac); Dash 4 upgrade $14.99; iOS version discontinued.
- **freeTier**: Free trial download; no permanent free tier.
- **trial**: Free to download and try; pay to keep.
- **revenueEvidence**: REVENUE NOT PUBLICLY DISCLOSED in absolute terms; founder: 2017 revenue +30% vs prior best year (2015); 2016 App Store revenue fully migrated to direct sales with slight increase.
- **validationMethod**: Scratch-own-itch solo build; direct sales from day one.
- **firstUserAcquisition**: Mac developer community and word of mouth; Mac App Store distribution initially.
- **first100Users**: NOT PUBLICLY DISCLOSED.
- **mainDistribution**: Mac App Store until removal Oct 2016, then direct sales via kapeli.com; word of mouth.
- **techStack**: Native macOS app (Objective-C); docset feed tooling in Python/Ruby.
- **zeroUpfront**: YES (prototype: solo dev plus free tooling; operate: modest server costs scaled with sales)
- **mrr100**: LOW (one-time ~$30 licenses generate no recurring revenue; needs constant new sales)
- **learn**: One person can run a beloved dev tool for a decade; surviving platform exile (App Store) via direct sales plus loyal users.
- **notCopy**: Do not depend single-channel on an app store; one-time pricing caps lifetime revenue per user.
- **evidenceGrade**: PRIMARY
- **sources**: blog.kapeli.com (About page; 2017 year-in-review with revenue relativities; 100-days-without-App-Store post); kapeli.com/dash (features page); GitHub @kapeli. Kapeli blog About page: 'My name is Bogdan Popescu and I'm the indie developer behind Kapeli... I handle support, marketing and whatever else'; GitHub @kapeli (1.5k followers); contemporary coverage c

## Dead Man's Snitch (https://deadmanssnitch.com/)

- **productName**: Dead Man's Snitch
- **url**: https://deadmanssnitch.com/
- **founder**: Randy Schmidt (original solo builder); acquired by Collective Idea (Daniel Morrison) July 2013
- **teamSize**: Small consultancy team (Collective Idea, ~8-11 people); product run inside the agency.
- **launchYear**: 2012 (site copyright from 2012; Collective Idea users 'for almost a year' by July 2013)
- **category**: Developer tools / cron and scheduled-task monitoring
- **targetCustomer**: Devs/teams with cron jobs, backups, Heroku Scheduler tasks.
- **coreProblem**: Silent failures: cron jobs that do not run produce no output, so nobody notices missed backups or emails.
- **productSolution**: Dead-man's-switch monitoring: unique ping URL per job, alert when check-in missing.
- **coreFeature**: Interval-based dead-man's-switch alerts via curl-able unique URLs.
- **initialMVP**: Name plus interval plus alert email plus curl ping URL (Randy Schmidt original).
- **featuresNotInMVP**: Smart Alerts, Field Agent with error logs, integrations, API, team members, Heroku add-on.
- **pricingModel**: Monthly subscription by snitch count.
- **pricingTiers**: Free 1 snitch; Little Birdy $5/mo (3); Private Eye $19/mo (100); Surveillance Van $49/mo (300).
- **freeTier**: Yes: 1 snitch free (The Lone Snitch).
- **trial**: Try-free via free tier; paid trial terms NOT PUBLIC in detail.
- **revenueEvidence**: REVENUE NOT PUBLICLY DISCLOSED.
- **validationMethod**: Scratch-own-itch (Randy Schmidt); dogfooded by Collective Idea client work pre-acquisition.
- **firstUserAcquisition**: Indie launch by solo founder; Collective Idea discovered it as users before acquiring.
- **first100Users**: NOT PUBLICLY DISCLOSED.
- **mainDistribution**: Heroku add-on marketplace plus cron-monitoring SEO content (docs, cron.help).
- **techStack**: Ruby API client (Snitcher gem); backend stack NOT PUBLIC (GitHub org shows Go/Ruby/Shell tooling).
- **zeroUpfront**: YES (prototype: ping endpoint plus mailer on free tiers; operate: needs reliable schedulers)
- **mrr100**: HIGH ($19/mo plan needs ~5-6 customers for $100 MRR)
- **learn**: Consultancy-built micro-SaaS can run 14+ years; dead-man's-switch is a durable one-feature wedge.
- **notCopy**: Do not expect venture scale from single-feature monitoring; free tier must be genuinely useful (1 snitch is thin).
- **evidenceGrade**: PRIMARY
- **sources**: deadmanssnitch.com (pricing, FAQ naming Collective Idea, docs); Collective Idea acquisition blog post (July 2013); Heroku add-on listing; Tracxn (founded 2012). Collective Idea blog 'Collective Idea Acquires Dead Man's Snitch' by Daniel Morrison, July 30 2013: taking over from Randy Schmidt; DMS FAQ: 'a product of Collective Idea, Holland, Michigan'.

## Healthchecks.io (https://healthchecks.io/)

- **productName**: Healthchecks.io
- **url**: https://healthchecks.io/
- **founder**: Pēteris Caune (solo founder, SIA Monkey See Monkey Do, Latvia)
- **teamSize**: 1 (solo; founder: 'the ops team consists of a single person').
- **launchYear**: 2015 (launched July 2015)
- **category**: Developer tools / open-source cron monitoring
- **targetCustomer**: Developers and teams needing alerts when scheduled tasks do not run.
- **coreProblem**: Silent scheduled-task failures; plus devs want an open-source/self-hostable monitoring option.
- **productSolution**: Open-source dead-man's-switch service: ping URLs, grace periods, multi-channel alerts.
- **coreFeature**: Check-based monitoring with period plus grace time and many notification integrations.
- **initialMVP**: Solo side project: ping endpoint plus missed-check email alerts (2015).
- **featuresNotInMVP**: SMS/WhatsApp/phone alerts, log histories, team access, badges, comparison docs, self-host packaging.
- **pricingModel**: Freemium monthly/annual subscription by check count.
- **pricingTiers**: Hobbyist $0 (20 jobs); Supporter $5; Business $20/mo (100 jobs); Business Plus $80/mo (1000); annual minus 20%.
- **freeTier**: Yes: 20 jobs free; free Business plan for open-source/nonprofit projects.
- **trial**: Free tier instead of trial; paid plans cancel anytime, no prorated refunds.
- **revenueEvidence**: Founder-disclosed: $24,000 MRR (about page, Sep 2026); $14,043 MRR with 652 paying customers (July 2024); ~$700/mo with ~90 payers (Aug 2018).
- **validationMethod**: Built as side project while contracting; open-sourced to build trust.
- **firstUserAcquisition**: UNKNOWN in detail; open-source GitHub repo plus founder blog plus HN-adjacent dev channels.
- **first100Users**: NOT PUBLICLY DISCLOSED (about 90 paying by year 3 implies slow early ramp).
- **mainDistribution**: SEO/comparison content (cron-monitoring comparisons ranking on Google) plus open-source discovery.
- **techStack**: Python (ping handler), PostgreSQL; 'simple and boring' technology choices.
- **zeroUpfront**: YES (prototype: free-tier hosting plus open code; operate: Hetzner-scale costs covered by $5-20 plans)
- **mrr100**: HIGH ($20/mo Business needs 5 customers for $100 MRR)
- **learn**: Boring tech plus radical transparency (public MRR, open source) compounds; part-time solo can reach $24k MRR in 11 years.
- **notCopy**: Do not copy single-person on-call without honest status communication; manual failover is a stated risk.
- **evidenceGrade**: PRIMARY
- **sources**: healthchecks.io/about (solo founder, open metrics: MRR, accounts, pings); founder blog (2018 $700/mo, 2024 $14,043 MRR, 2023 vendor comparison); pricing page. healthchecks.io/about: 'currently a one-man software and consulting company. The one man is Pēteris Caune'; founder blog publishes MRR posts (2018, 2024).

## ConfigCat (https://configcat.com/)

- **productName**: ConfigCat
- **url**: https://configcat.com/
- **founder**: Zoltan David, Gergely Sinka, Lajos Szoke (plus Péter Csajtai per Crunchbase) — Budapest, Hungary
- **teamSize**: Small bootstrapped team (6 in 2021 per founder; ~10-13 per Tracxn/Dealroom; 11-50 bucket).
- **launchYear**: 2018 (founded; first paying customer 2019)
- **category**: Developer tools / feature flags + remote config
- **targetCustomer**: Software teams needing safe rollouts without redeploys.
- **coreProblem**: Releasing features requires redeploys; risky launches with no kill-switch or targeting.
- **productSolution**: Hosted feature-flag service with client-side evaluation, targeting, percentage rollouts, open-source SDKs.
- **coreFeature**: Dashboard-managed flags with targeting/rollouts evaluated client-side via SDKs.
- **initialMVP**: Dashboard plus flag API/SDKs with on/off toggles (2018-2019; first customer bought $200 highest plan).
- **featuresNotInMVP**: Segmentation engine, A/B testing, 20+ SDKs, integrations (Slack, Jira...), SSO/SCIM, SLA tiers, on-prem.
- **pricingModel**: Tiered monthly/annual subscription by usage (downloads/traffic), unlimited seats.
- **pricingTiers**: Forever Free $0; Pro $110/mo; Smart $325/mo; Enterprise $900/mo; Dedicated $4,500/mo.
- **freeTier**: Yes: Forever Free with full feature set (10 flags, 2 envs, 5M downloads/mo).
- **trial**: Free plan instead of trial; no credit card; startup/education discounts.
- **revenueEvidence**: REVENUE NOT PUBLICLY DISCLOSED (absolute); founder: 5x growth 2020, 3x 2021; ~200 paying customers (2022); 6-8B requests/mo.
- **validationMethod**: Built on hunch from SaaS-scale experience; early payers arrived unprompted via AlternativeTo listing.
- **firstUserAcquisition**: AlternativeTo (LaunchDarkly-alternative listing by an acquaintance) — first payers all cited it.
- **first100Users**: NOT PUBLICLY DISCLOSED in staged detail ('a customer every month' early on).
- **mainDistribution**: Alternative-to/SEO comparison traffic vs LaunchDarkly; developer word of mouth.
- **techStack**: Multi-language open-source SDKs; hosted CDN flag delivery; detail NOT PUBLIC.
- **zeroUpfront**: POSSIBLY (prototype: flags API on free hosting; operate-at-scale: CDN plus multi-SDK maintenance needs revenue)
- **mrr100**: HIGH (Pro $110/mo needs 1 customer for $100 MRR; Free-to-paid conversion is the work)
- **learn**: List on alternative-to directories early; unlimited-seats pricing is a wedge against per-seat incumbents.
- **notCopy**: Do not race LaunchDarkly on enterprise features; ConfigCat won by being cheaper, simpler, kinder.
- **evidenceGrade**: PRIMARY
- **sources**: configcat.com (pricing, homepage); ConfigCat blog founder interview (July 2022: first $200 customer, AlternativeTo, 5x/3x growth, ~200 payers); CB Insights 2021 Gergely Sinka interview (bootstrapped, team of 6). ConfigCat blog founder interview (July 2022, Zoltan on first customer, AlternativeTo, growth); CB Insights 2021 interview: Gergely Sinka: 'ConfigCat is totally bootstrapped... team of 6'. CONTRADICTIO

## Fork git client (https://fork.dev/)

- **productName**: Fork git client
- **url**: https://fork.dev/
- **founder**: Danil (Dan) Pristupov plus Tanya Pristupova (family team)
- **teamSize**: 2 (couple-run indie).
- **launchYear**: 2016 (first releases mid-2010s; free until paid switch ~2020; no official founding date published)
- **category**: Developer tools / Git GUI client
- **targetCustomer**: Developers wanting a fast friendly Git client on Mac/Windows.
- **coreProblem**: Same Git-usability pain as Tower, plus subscription fatigue for desktop tools.
- **productSolution**: Fast native Git client (Mac Swift/Cocoa, Windows .NET/WPF) with one-time pricing.
- **coreFeature**: Speed plus native feel: interactive rebase, image diffs, conflict resolver, quick-launch palette.
- **initialMVP**: Free Mac Git client built 'for ourselves and our friends' (per about page).
- **featuresNotInMVP**: Windows version, pull-request creation, LFS locking, GPG, paid licensing.
- **pricingModel**: One-time perpetual license per platform ($59.99), free evaluation.
- **pricingTiers**: $59.99 Mac, $59.99 Windows (was $49.99 at 2020 paid switch per HN).
- **freeTier**: Free evaluation; no permanent free tier.
- **trial**: Free evaluation version (exact terms NOT PUBLIC in detail).
- **revenueEvidence**: REVENUE NOT PUBLICLY DISCLOSED.
- **validationMethod**: Scratch-own-itch; friends as first users.
- **firstUserAcquisition**: Friends/colleagues, then organic dev-community spread.
- **first100Users**: NOT PUBLICLY DISCLOSED.
- **mainDistribution**: Word of mouth plus dev-community recommendation (HN, Reddit, Twitter).
- **techStack**: Swift/Cocoa (Mac); .NET/WPF (Windows) — native per platform.
- **zeroUpfront**: YES (prototype: free dev tools; operate: license-sales costs minimal)
- **mrr100**: LOW (one-time $59.99 generates no MRR; needs ~2 sales/mo to match $100 MRR)
- **learn**: One-time pricing is itself the marketing against subscriptions; 'built for ourselves' origin story sells authenticity.
- **notCopy**: Do not promise perpetual free then switch without the goodwill Fork banked first.
- **evidenceGrade**: SECONDARY
- **sources**: fork.dev/about (family team, origin story, $59.99 pricing); HN thread on paid switch (2020, $49.99, Tower price comparison); release-notes cadence. fork.dev/about: 'We are a family of software developers crafting Fork full-time. Dan Pristupov (Swift, Cocoa); Tanya Pristupova (.NET, WPF)'.

## Charles Proxy (https://www.charlesproxy.com/)

- **productName**: Charles Proxy
- **url**: https://www.charlesproxy.com/
- **founder**: Karl von Randow (solo, XK72 Ltd, New Zealand)
- **teamSize**: 1 (solo; XK72 one-person company; founder separately co-founded Letterboxd/Cactuslab).
- **launchYear**: 2002 (initial release per Wikipedia; v5.x current)
- **category**: Developer tools / HTTP debugging proxy
- **targetCustomer**: Web and mobile developers debugging HTTP/HTTPS traffic.
- **coreProblem**: Invisible network traffic: devs cannot see what apps/browsers actually send and receive.
- **productSolution**: Cross-platform Java debugging proxy: view/decrypt/throttle/rewrite HTTP(S) traffic, mobile included.
- **coreFeature**: SSL proxying with structured viewers (JSON/XML/SOAP) plus breakpoints plus bandwidth throttling.
- **initialMVP**: Java HTTP proxy viewer (2002, Flash-era debugging aids).
- **featuresNotInMVP**: HTTP/2 support, mobile device proxying, repeat/edit requests, remote-file mapping, iOS app.
- **pricingModel**: One-time per-user license (trialware).
- **pricingTiers**: ~$50 per user license (long-standing price); iOS app ~$8.99.
- **freeTier**: No free tier; trial version offered.
- **trial**: Trial version offered (trialware license); exact trial limits NOT VERIFIED.
- **revenueEvidence**: REVENUE NOT PUBLICLY DISCLOSED.
- **validationMethod**: Scratch-own-itch developer tool; sustained by working-developer demand.
- **firstUserAcquisition**: UNKNOWN (early-2000s web-dev community, pre-social era).
- **first100Users**: NOT PUBLICLY DISCLOSED.
- **mainDistribution**: Longevity plus tutorial citations (every 'debug mobile HTTP' guide names Charles); word of mouth.
- **techStack**: Java (cross-platform desktop); iOS edition native.
- **zeroUpfront**: YES (prototype: solo code on commodity hardware; operate: near-zero marginal cost)
- **mrr100**: LOW (one-time ~$50 generates no MRR; needs ~2 sales/mo to match $100 MRR)
- **learn**: A single durable tool can pay a solo dev for 24 years; tutorial-embedded distribution outlives every channel.
- **notCopy**: Do not expect fast growth from one-time desktop licenses; Java cross-platform trades polish for reach.
- **evidenceGrade**: SECONDARY
- **sources**: Wikipedia (author, 2002 release, features); GitHub @karlvr (creator bio, XK72); X bio corroboration. Pricing from long-standing public price lists (SECONDARY). Wikipedia Charles Proxy: original author/developer Karl von Randow; GitHub @karlvr bio: 'Creator of Charles Proxy' (XK72 Ltd); X bio corroborates.

## Sublime Text (https://www.sublimetext.com/)

- **productName**: Sublime Text
- **url**: https://www.sublimetext.com/
- **founder**: Jon Skinner (Sublime HQ Pty Ltd, Sydney, Australia)
- **teamSize**: Tiny (~4: Jon plus Will Bond, Dylan, Benjamin per founder HN comment; Tracxn lists 2).
- **launchYear**: 2008 (v1.0 Jan 18 2008, Windows; per Wikipedia)
- **category**: Developer tools / code editor (plus Sublime Merge git client)
- **targetCustomer**: Programmers needing a blazing-fast extensible editor.
- **coreProblem**: Editors of the era were slow, bloated or platform-locked; devs wanted speed plus extensibility.
- **productSolution**: Blazing-fast cross-platform editor with Python API, multi-caret, Goto Anything, huge package repo.
- **coreFeature**: Speed: instant startup, huge-file handling, GPU-rendered UI, 'Goto Anything' navigation.
- **initialMVP**: Windows-only fast editor v1.0 (2008) with tabs, minimap, snippets.
- **featuresNotInMVP**: Mac/Linux ports, Python plugin API depth, Package Control ecosystem, Sublime Merge, 4.0 GPU UI.
- **pricingModel**: One-time per-user license with years of updates (renewal optional).
- **pricingTiers**: $99 per license (Text; usable on all OSes); Merge licensed separately.
- **freeTier**: Unlimited evaluation with occasional nag; no forced paywall.
- **trial**: Indefinite free evaluation (nag dialogs); license removes nags.
- **revenueEvidence**: REVENUE NOT PUBLICLY DISCLOSED; no funding raised (Tracxn: unfunded).
- **validationMethod**: Scratch-own-itch; public betas with registered-user feedback loops.
- **firstUserAcquisition**: Windows dev forums/blogs; famed speed demos; TextMate-alternative buzz.
- **first100Users**: NOT PUBLICLY DISCLOSED.
- **mainDistribution**: Word of mouth plus 'fastest editor' reputation; Package Control ecosystem lock-in.
- **techStack**: Custom C++ UI toolkit (cross-platform), Python 3.8 plugin API.
- **zeroUpfront**: YES (prototype: solo code; operate: tiny team funded by license flow)
- **mrr100**: LOW (one-time $99 generates no MRR; needs ~1 sale/mo to match $100 MRR)
- **learn**: Performance is a feature users pay for even against free giants; indefinite trial converts on love, not lockout.
- **notCopy**: Do not fight VS Code head-on today; Sublime's window was the pre-free-editor era — wedge must differ now.
- **evidenceGrade**: PRIMARY
- **sources**: sublimetext.com/about (founder/company); Wikipedia (2008 v1.0, features); founder HN comment (team of 4, 2018); Tracxn/Crunchbase (unfunded, solo founder). sublimetext.com/about: 'Sublime Text was created by Jon Skinner — a product of Sublime HQ Pty Ltd'; HN Sep 2018: founder 'Jon Skinner here, I made Sublime Text... alongside Will, Dylan and Benjamin'.

## Paw (RapidAPI for Mac) (https://paw.cloud/)

- **productName**: Paw (RapidAPI for Mac)
- **url**: https://paw.cloud/
- **founder**: Micha Mazaheri (founder/CEO, Tallinn, Estonia; 'Mizaheri' spelling variant in acquirer release)
- **teamSize**: Small indie team (Lucky Marmot / Paw Cloud OU; exact headcount NOT PUBLIC); privately funded until 2020 acquisition.
- **launchYear**: 2014 (founded; Mac API client)
- **category**: Developer tools / API design + testing client
- **targetCustomer**: Mac developers designing/testing REST/GraphQL APIs.
- **coreProblem**: Testing APIs via curl/typing is slow; Postman felt clunky/non-native to Mac devs.
- **productSolution**: Native macOS HTTP client: visual request builder, dynamic values chaining, code generation, team sync.
- **coreFeature**: Dynamic Values (chain auth tokens/hashes across requests) plus native Mac speed/polish.
- **initialMVP**: Mac-only visual HTTP client with request builder and code generation.
- **featuresNotInMVP**: Team sync/Teams product, OpenAPI/Swagger export depth, GraphQL tooling, Windows/Linux/Web versions (added post-acquisition).
- **pricingModel**: Paid Mac app historically (one-time/team tiers); now free download under RapidAPI with Teams upsell.
- **pricingTiers**: Historic paid Mac licenses (exact tiers NOT PUBLIC now); current: FREE download, Teams/Enterprise upsell.
- **freeTier**: Yes currently (free Mac download under RapidAPI); historic free terms NOT PUBLIC.
- **trial**: Historic trial offered; current terms NOT PUBLIC in detail.
- **revenueEvidence**: REVENUE NOT PUBLICLY DISCLOSED; 'privately funded until acquisition end of 2020' (official release).
- **validationMethod**: Mac-dev scratch-own-itch; design-forward native niche vs Postman.
- **firstUserAcquisition**: Mac developer community/design press; exact first users NOT PUBLIC.
- **first100Users**: NOT PUBLICLY DISCLOSED.
- **mainDistribution**: Mac App Store plus Mac-dev press/design reputation; post-2021 RapidAPI marketplace cross-sell.
- **techStack**: Native macOS app; JavaScript extension API; Web/Win/Linux versions added post-acquisition.
- **zeroUpfront**: POSSIBLY (prototype: native client with free tooling; operate: sync cloud plus multi-platform needs funding — hence acquisition)
- **mrr100**: UNKNOWN (current pricing obscured by parent bundling)
- **learn**: Being the best-loved niche client is an acquirable asset; native-craft beats feature-count for Mac devs.
- **notCopy**: Do not stay Mac-only if TAM caps you — but going cross-platform by acquisition means losing control.
- **evidenceGrade**: SECONDARY
- **sources**: Business Wire acquisition release (Feb 2021: founder quote, 6-year traction, privately funded); VentureBeat (Tallinn 2014, terms undisclosed); HN acquisition thread; paw.cloud (current free status, v4.5.x 2025 maintenance). Business Wire acquisition release (Feb 2021) quotes 'Micha Mizaheri, founder and CEO of Paw'; VentureBeat: 'founded out of Tallinn, Estonia in 2014'; official release: 'privately funded until acquisit

## Pagoda Box (https://pagodabox.com/)

- **productName**: Pagoda Box
- **url**: https://pagodabox.com/
- **founder**: Tyler Flint (co-founder/CEO; team incl. Steve/Scott per Slim Framework thanks)
- **teamSize**: Tiny Idaho team (11-50 bucket per Crunchbase; ~1 now per Tracxn).
- **launchYear**: 2011 (public launch; private beta 2010-2011)
- **category**: Developer tools / PHP PaaS hosting (FAILED — deadpooled)
- **targetCustomer**: PHP developers wanting Heroku-like deploy without sysadmin.
- **coreProblem**: Deploying/scaling PHP apps meant managing servers; Heroku did not serve PHP well.
- **productSolution**: Git-push PHP PaaS on SoftLayer: component slider scaling, dashboard analytics, shared writable storage.
- **coreFeature**: Point-and-click component scaling plus real-time infra/billing dashboard.
- **initialMVP**: PHP-only PaaS: git push deploy, dashboard, 200MB free RAM plus 10MB MySQL.
- **featuresNotInMVP**: Ruby/Python support (promised 'soon'), reserved bare-metal option, advanced analytics.
- **pricingModel**: Pay-for-what-you-use component pricing (free tier plus usage meter).
- **pricingTiers**: Free 200MB RAM tier; paid per-component (exact tiers NOT PUBLIC/archived).
- **freeTier**: Yes historically (200MB RAM free plus 10MB MySQL).
- **trial**: Free tier served as trial.
- **revenueEvidence**: REVENUE NOT PUBLICLY DISCLOSED; 8,000+ customers Sep 2011 (TechCrunch); $4M enterprise value (Dealroom ESTIMATE).
- **validationMethod**: Developer-community beta; framework-author endorsements (Slim Framework hosted on it, Feb 2012).
- **firstUserAcquisition**: PHP community private beta; framework authors (Slim) as lighthouse users.
- **first100Users**: NOT PUBLICLY DISCLOSED (beta waitlist mechanics UNKNOWN).
- **mainDistribution**: Tech press (TechCrunch 2012) plus PHP framework community endorsements.
- **techStack**: PHP PaaS control plane; git-based deploys; SoftLayer cloud.
- **zeroUpfront**: NO (operate-at-scale: PaaS infra plus 24/7 ops cannot run at zero cost — prototype-only YES)
- **mrr100**: UNKNOWN (historical usage pricing; a few active apps likely sufficed)
- **learn**: TechCrunch called the exact failure mode in 2012 (giants converging); bootstrapped infra businesses need a moat beyond UX.
- **notCopy**: Do not build single-cloud single-language PaaS against Heroku-plus-AWS without funding or an escape plan.
- **evidenceGrade**: SECONDARY
- **sources**: TechCrunch Sep 2012 (bootstrapped claim, founder, 8000 customers, named clients); Tracxn (deadpooled status, founded 2011, $330K raised); Dealroom (absorbed note, $4M EV); Slim Framework blog (lighthouse customer, Feb 2012). TechCrunch Sep 2012: 'co-founder Tyler Flint says Pagoda Box is bootstrapped... based in Idaho'; Tracxn: founded 2011 by Tyler Flint; Dealroom: launch Oct 2010. STATUS CONTRADICTION: Tracxn 'Deadpoole
