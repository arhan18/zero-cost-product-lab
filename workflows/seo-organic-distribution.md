# SEO + ORGANIC DISTRIBUTION

Operating workflow (not system policy): treats SEO as a product/distribution system for products where organic discovery can materially contribute to acquisition. Combines search intent, SEO, AI-search readability, technical SEO, directory distribution, search data, and iteration. Never force SEO where search is clearly irrelevant. No product code, no deploys, no spend.

## When to use

Product has meaningful search demand; users search problems it solves; alternative/comparison searches exist; educational pages can lead to discovery; directories matter; answer engines may surface it; programmatic/search-driven acquisition is plausible.

## Step 1 — Search intent discovery

Research what the target customer actually searches: problem, solution, alternative, comparison, how-to, troubleshooting, pricing, "best X," "X alternative," "why is X happening," workflow, integration queries. Sources: Google/results, Reddit, X, forums, PH, HN, GitHub, competitor pages, autocomplete, post-launch Search Console. Never invent search demand.

## Step 2 — Ownable query map

Build `research/ideas/<slug>/seo/query-map.md`. Classify: CORE, HIGH INTENT, INFORMATIONAL, COMPARISON, ALTERNATIVE, LONG-TAIL, LOW VALUE, TOO COMPETITIVE. Per query: intent, target user, competition, product relevance, conversion potential, can-we-make-a-genuinely-useful-page, realistically ownable. Never chase volume alone.

## Step 3 — One intent → one useful page

SEARCH INTENT → SPECIFIC PAGE → CLEAR ANSWER → PRODUCT VALUE → CTA. No thin-page farms; every page has a genuine purpose and answers its question directly without forced copy journeys.

## Step 4 — Page architecture

Only justified page classes: homepage, product, feature, use-case, alternative, comparison, integration, docs, troubleshooting, educational articles, glossary, templates/tools where genuinely useful. Programmatic SEO is never a page-count strategy.

## Step 5 — Direct answer principle

Answer clearly near the beginning; then explanation, evidence, detail, examples, product relevance, next action. Never bury answers under generic introductions.

## Step 6 — AI-search readability

Clear headings, concise factual answers (self-contained ~130–170-word answer blocks cite well), semantic HTML, explicit entities, structured information, descriptive links, schema where appropriate, consistent terminology, meaningful titles, direct answers. No manipulative AI-search tactics — goal is CLEAR INFORMATION, not tricking citations.

## Step 7 — Structured data

Evaluate only where appropriate: Organization, WebSite, SoftwareApplication, Product, Article, BreadcrumbList, FAQPage only where genuinely appropriate (note: no Google rich-result benefit since May 2026 — keep only for non-Google/internal semantics), Review/AggregateRating only when legitimate. Never add schema for its own sake; all markup must describe visible, content-supported information.

## Step 8 — Technical SEO checklist

Title, meta description, canonical, robots.txt, sitemap.xml, indexability, semantic HTML, heading hierarchy, internal linking, image alt/sizing/modern formats, font loading, caching, redirects, 404 behavior, OpenGraph/social metadata, URL structure, mobile responsiveness.

## Step 9 — Performance (measure-first)

Never chase "100" scores for screenshots. Measure Core Web Vitals, JS/image weight, fonts, layout shift, interaction latency, third-party scripts, waterfall, mobile. Prefer minimal JS, optimized modern images, efficient fonts, limited third parties, static/server-rendered content.

## Step 10 — Accessibility as SEO quality

Semantic HTML, landmarks, headings, links, forms, keyboard, focus, contrast, reduced motion. Fix as product-quality issues, not just SEO issues.

## Step 11 — Search Console / Webmaster Tools

Free measurement setup: Google Search Console + Bing Webmaster Tools — verification, sitemap submission, indexing/query/CTR/performance monitoring. Never claim data before the property is connected.

## Step 12 — IndexNow

Evaluate where useful; never assume equal benefit across engines. If implemented, document what it does, supported engines, implementation, limits, actual value.

## Step 13 — SEO tool evaluation (claude-seo verdict)

Inspected 2026-09-12: `github.com/AgriciDaniel/claude-seo` (16.8k★, 308 commits, v2.3.1, MIT license). 25 sub-skills + 18 agents + 32 `/seo` commands covering technical SEO, E-E-A-T, schema, GEO, local, e-commerce, i18n. Core works local-only with no keys (free); Google API tiers add field data free; MCP extensions (Ahrefs, DataForSEO, Firecrawl, SE Ranking, Profound) require paid accounts. Installs isolated Python env + optional Playwright Chromium via install.sh; five agents pinned to Opus (cost note: heavier than Sonnet-class runs). NOT OpenCode-compatible as-is: Claude plugin manifests, `/plugin` install flow, Claude hooks, no `.opencode` path. Verdict: DO NOT install; record as external/reference tooling. Adaptable ideas already reflected in this workflow: P0–P3 audit prioritization (Step 14), falsifiability per finding, GEO citability blocks (Step 6), FAQPage guidance (Step 7). Logged in SKILL-SCOUT.md.

## Step 14 — Audit prioritization

Never fix everything at once. P0: critical indexing/crawl/rendering. P1: high-impact page/performance/structured-data. P2: meaningful content/UX. P3: minor optimization. High impact first.

## Step 15 — Directory distribution

Research before launch (PH, Show HN, IH, AlternativeTo, SaaSHub, G2, Capterra, BetaList, Uneed, Fazier, Microlaunch, Peerlist, niche/category directories). Never submit everywhere. Per directory record: audience relevance, discovery value, submission requirements, moderation, cost, backlink characteristics, direct acquisition value, product relevance.

## Step 16 — Directory listing quality

Unique product-specific copy per listing: what it is, who it's for, problem solved, key differentiator, URL, screenshots/assets. No keyword stuffing, no copy-paste descriptions.

## Step 17 — Category-specific distribution

Match the product: Mac app → Mac directories/communities/AlternativeTo; dev tool → GitHub/HN/dev communities; creator → creator communities/directories/X; B2B → niche directories/industry communities/search. Never PH-by-default.

## Step 18 — Community distribution

Check rules, self-promotion policy, audience fit, norms before recommending any post. Genuinely useful answers, transparent context, educational material, honest Show HN-style launches. Never spam.

## Step 19 — Search-data feedback loop (post-launch)

QUERY → IMPRESSION → CTR → ENGAGEMENT → CONVERSION → NEW QUERY DISCOVERY → NEW/IMPROVED PAGE. Hunt: high-impression/low-CTR, high-CTR/low-conversion, unexpected and emerging long-tail queries, traction pages, dead pages. Never create pages to inflate count.

## Step 20 — AI-search feedback loop

Where measurable, check citability/discoverability in answer engines, AI search, agentic browsers. Never claim inclusion unobserved. Levers: factual structure, accessible content, semantic HTML, entities, direct answers, strong source context.

## Step 21 — SEO content system

Reusable brief chain: CONTENT BRIEF → SEARCH INTENT → QUESTION → DIRECT ANSWER → EVIDENCE → SUPPORTING INFORMATION → PRODUCT CONNECTION → CTA → INTERNAL LINKS. Every piece answers a real query; no generic SEO articles.

## Step 22 — Internationalization

If in scope: English-first, currency, payment availability, date/time, locale, international accessibility, regional legal where applicable. Never force multilingual SEO without demand evidence.

## Step 23 — SEO product gate

For organic-reliant products require: (1) clear intent, (2) ownable queries, (3) useful page architecture, (4) technical SEO, (5) justified structured data, (6) performance, (7) accessibility, (8) console measurement, (9) directory/distribution plan where relevant. Otherwise mark SEO NON-CORE and keep necessary technical SEO only.

## Step 24 — SEO artifacts (per product, when relevant)

`products/<product-slug>/seo/`: strategy.md, query-map.md, page-architecture.md, technical-checklist.md, content-plan.md, directory-plan.md, measurement.md.

## Step 25 — Integration with Product Requirements

Usable BEFORE frontend implementation: requirements reference target intent, page architecture, ownable queries, required public pages. Design reflects real content needs, never decorative marketing pages first. (See `workflows/product-requirements.md`; that file unchanged.)

## Step 26 — Integration with launch

Launch includes: sitemap, Search Console, Bing Webmaster Tools, indexing verification, relevant directories, category communities, initial search pages, measurement. Never claim launch success before actual indexing/measurement. (Launch template unchanged.)

## Final honesty rule

Never claim rankings, traffic, backlinks, indexed pages, AI citations, conversions, or directory traffic without evidence. Use NOT YET MEASURED where necessary.
