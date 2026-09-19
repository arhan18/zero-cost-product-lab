# Benchmark Gaps

> Honest accounting of what the 100-product + 50-founder benchmark could NOT verify, where sources conflict, and what would close the gaps. Discipline: prefer "UNKNOWN" over invention — this file is the audit trail of everything left uncertain.

---

## 1. UNKNOWN-heavy fields (scores = records where the field could not be evidenced)

### Products (100 records)
| Field | UNKNOWN count | Why |
|-------|--------------|-----|
| accessibility | 86/100 | Requires live aXtree/Lighthouse audit or reading source; not visible in a static page screenshot. Single biggest gap. |
| performance | 71/100 | Requires live network/paint measurement; not assessable from content. Often only inferred from architecture. |
| typography | 39/100 | Fonts usually need live DOM inspection / font lookup; many sites were content-appraised, not pixel-audited. |
| motion | 37/100 | Needs live interaction/scroll observation; animation behavior documented only where clearly described or seen. |
| revenueEvidence | 36/100 | Public revenue data is rare in the wild; mostly founders annual reports, press, or secondary estimates. |
| mobile | 33/100 | Needs viewport testing; only obvious consumer-native products were reliably judged. |
| seo | 27/100 | Needs tooling (SERP/crawl analysis); recorded from observed on-page signals and reported traffic only. |

### Founders (50 records)
| Field | UNKNOWN count | Note |
|-------|--------------|------|
| redditStrategy | 40/50 | Nearly universally undocumented; founders rarely publish Reddit playbooks. High-evidence exceptions: Sol Orwell (r/Supplements), Pierre de Wulf (langsubs), Jonathan Wilke. |
| aiUsage | 27/50 | Concentrated in pre-AI-era founders (Tringas, Fried, O'Nolan, Täht, Arment…) — legitimately N/A, not a research failure. |
| phHnStrategy | 26/50 | Launch mechanics documented more than strategy; many founders treat PH as a spike, not a strategy. |
| stack | 14/50 | Solo founders rarely document toolchains; only OSS-heavy founders (Resend/React Email, Flask, Supabase-context) are reliable here. |
| xStrategy | 9/50 | Even X-heavy founders rarely formalize a "strategy"; build-in-public is often an unlabeled habit. |
| biggestMistake | 8/50 | Some founders never publish failures (or don't see them). |
| engineeringPhilosophy | 7/50 | Often folded into productPhilosophy; distinct evidence scarce. |
| teamSize | 6/50 | Shipping solo is often undocumented; only revenue/feature evidence implies scale. |

**Actionable**: `agent-browser` skill exists in the lab — a live-viewing pass over the highest-value product records (the missing accessibility/performance/typography/motion fields) would cut 6 of the top gaps. The raw slices already flag *which* pages are worth live-testing.

---

## 2. Category / coverage blind spots

- **Geography**: heavily US + one notable SEA builder (Daniel Nguyen, Vietnam). Zero founders from Africa and LatAm represented; no Middle East. Product brands skew US/EU (EU good: Fathom, Simple Analytics, Beehiiv, MailerLite, Postmark, when, Umami).
- **Gender**: female founders nearly absent. Documented: Amy Hoy, Marie Martens, Danielle (documented as Arvid Kahl's audience/growth engine, not founder). A dedicated female-founder slice (e.g. Cathy Jurewicz, Debbie Levitt, indie app women builders) would close this.
- **Era density**: founders concentrate 2011–2023; the classic "first internet era" is represented only by patio11 (2006), Bingo Card Creator, and Marco Arm… er, the 2000s more loosely. 
- **Category gaps in products**: no e-commerce storefront SaaS (only ShipFast-style), no heavy physical-goods/E-com beyond Liquid Death + CAH, no gaming SaaS (Tough Love Arena is a toy not a tool), no HR/payroll vertical. Far-field from the lab's zero-moat niche, so acceptable; flagged anyway.
- **AI-native founder scarcity**: 27/50 founders are pre-AI. The AI-era builder mindset (Danny Postma post-2023, Anton Osika, Daniel Nguyen, Genspark-era) is a thin, recent sample — the fastest-moving part of the corpus and the least covered.
- **Big-company → solo**: heavy coverage of "build your own"; thin on "operate from inside the whale" (Ronacher-at-Sentry is the only strong example).

---

## 3. Contradictions and unresolvable conflicts (audit trail)

These were NOT harmonized — both sides are recorded in the slices with grades, awaiting primaries:

| Id | Conflict | Resolution state |
|----|----------|------------------|
| C1 | Ahrefs live traffic counter read 19,887 vs 22,767 (different crawl sessions) | Snapshot-date discrepancy; flag, don't merge. |
| C2 | Webflow team-plan pricing (~$2,500/mo) vs listed site plans | Possible current tier or package; UNKNOWN pricing-resolution left open. |
| C3 | Height shut down Sep 24, 2025 mid-research | Excluded; replaced by Figma app-UI record (documented). |
| C4 | Superhuman pricing: "$25–40 mail" vs "Free/$12/$33 Suite" | Two product lines (Mail vs Suite); recorded as layered. |
| C5 | Maze pricing $49–249/mo (official) vs third-party figures; 6M vs 5M participants | Official page preferred; third-party noted. |
| C6 | Things 3 regional pricing (country-dependent App Store) | Recorded as "regional by store". |
| C7 | Drip: $2M ARR sale vs stray "$300K MRR" | $2M ARR (Rob Walling) preferred; anomaly logged. |
| C8 | Baremetrics exit year Nov 2020 vs 2021/2023 secondary | Found/documented: Nov 2020 (primary founder) preferred. |
| C9 | "Flascii" as Armin Ronacher project — FALSE; also "Sentry co-founder" FALSE | Corrupted by agent recollection; verified: Flask/Pocoo author, decade at Sentry, founder Earendil. Flagged in slice. |
| C10 | HeadshotPro "$300K MRR" — secondary-only source | Downgraded to INFERENCE; no primary verified. |
| C11 | Lavingia revenue post-2023 = Sacra estimates; founder stopped publishing financials late 2024 | Recorded as-sourced with recency caveat. |
| C12 | beehiiv LinkedIn-reported revenue contradicts INC figure | Both recorded; no consensus. |
| C13 | Jon Yongfook "$1M ARR" = INFERENCE; own docs top ~$53K MRR (2023) | Downgraded to INFERENCE. |
| C14 | Storemapper vs Storetasker: user prompt said "Storetasker"; all primary sources say Storemapper (store locator SaaS) | Weird; flag, don't invent. Recorded with typo note. |
| C15 | Buttondown founded 2008 (GetLatka) vs Dec 2016 (primary, founder + Starter Story) | GetLatka wrong; primary preferred. |
| C16 | Tringas exit MRR "~$40K" (spoken) vs "team of 5 / $50K MRR" (BuiltToSell blurb) | Different snapshots; both recorded. |
| C17 | Ben's Bites subs 110K (Dec 2024) / 148K (Substack) / ~170K (pricing page) | Snapshot drift; all recorded. |
| C18 | Zeno Rocha team size 10 (2024) → 28 (2025) → ~45 (YC page) | Growth range; recorded as range. |
| C19 | Resend new.email launched Feb 2025 → sunset Jul 2026 (17 months) | Product-line pivot; recorded as history with honest note. |
| C20 | Outbid.lol live revenue figures changed across crawls ($17K→$52,987→$120K press) | Spiking + bid-vs-revenue semantics; founder-reported. |
| C21 | Boot.dev revenue $110K (Oct 2023 "net rev", SFTROU) vs $441K MRR (Nov 2024, IH) vs $5.7M/yr (MoneyMakingStory) | Consistent run-rate, inconsistent wording; recorded as-sourced. |
| C22 | Sol Orwell founding 2011 (StartupAnatomy) vs 2015 incorporation (Wikipedia; Kamal Patel official co-founder, Kurtis Frank early) | Layered account preserved. |
| C23 | Justin Welsh price $150 (Starter Story) vs $79 and $179.97 (Kajabi) | Range recorded. |
| C24 | "Sharpen" unverified as Nicolas Cole product; flagship is Ship 30 for 30 | Seed corrected in slice; documented. |
| C25 | Buffer $10.5M ARR/2016-reset vs $22.3M ARR/2025 recovery | Two eras; same founder discipline both times. |
| C26 | Makerpad 10K users vs ~$500K exit — mind-share vs revenue mismatch | Noted as pattern, not error. |
| C27 | Amy Hoy "validate before build" vs Dmytro "I didn't validate" — both documented, both succeeded | Epistemology conflict: validation dogma != universal rule. Left as a finding. |

---

## 4. Structural gaps (method)

- **Evidence grading bias**: 82/100 products graded FACT, yet 86/100 accessibility-unknown — the grade measures *evidence availability*, not confidence in every field. A field-level confidence column would be more honest than a record-level grade; flagged for the next pipeline.
- **Timestamp drift**: combinations across snapshots (Linear revenue counter, Ahrefs counter, Outbid.lol) make "live" numbers irreconcileable. Re-verification dates should be stored per-slice.
- **Primary-vs-secondary for founder revenue**: ~6/50 founder revenueEvidence cells depend on secondary sources (GetLatka, Sacra, Growth In Reverse). A "revenue-confidence filter" was flagged in the slices to downgrade GetLatka-only figures.
- **No live browser testing pass yet**: accessibility/performance/typography/motion/mobile all need `agent-browser`. This is the single highest-yield next pass.
- **The lab only researches publicly-evidenced builders.** Zero documentation = not included; this biases toward transparent founders (which is arguably the target population of the benchmark, but must be stated).

---

## 5. What would close the gaps (ranked)

1. `agent-browser` live pass on ~40 highest-value product pages → fill accessibility, performance, typography, motion, mobile.
2. Dedicated **female-founder slice** (F11) + **non-Western slice** (F12) to fix gender/geography skew.
3. **AI-builder slice** (F13) focused on post-2024 solo builders shipping with AI stacks.
4. Store a **verified-date + snapshot-URL** per numeric claim to kill timestamp drift (re-audit camp at season boundary).
5. Implement the **GetLatka/secondary downgrade rule** in the grading rubric.
6. Consider field-level confidence (e.g. `evidenceGrade` per field) in the next schema revision.
7. A **product live-pass checklist** mapping the 6 low-evidence fields to specific observation prompts for `agent-browser`.