# SKILL-SCOUT

How the lab discovers, inspects, and admits third-party skills and reference sources. No skill or source is used or installed before inspection is recorded in `SKILL-REGISTRY.md` (SYSTEM.md §15). Scouting is a gate, not a hobby: it exists to keep the lab at $0 with minimal dependencies, and it stops as soon as a decision is reachable.

## 1. When to scout

- A pipeline phase needs a capability the lab does not have (named gap, e.g. "browser QA for Phase 18").
- A candidate is proposed (by the owner, an agent, or a benchmark record) as better than the current tool.
- A registered item needs re-verification (license change, pricing change, deprecation, conflicting evidence).
- Never on vague curiosity ("cool new animation lib") without a phase-backed need.

## 2. What sources to search (in order)

1. Official source: repo README, docs, pricing/terms pages, LICENSE file, changelog.
2. Package registries: npm/PyPI metadata (version, downloads, maintenance date, dependents).
3. Maintainer channels: founder blog/X, GitHub issues/discussions (open vs fixed).
4. Independent evidence: interviews, benchmarks, and the lab's own benchmark corpus — never SEO listicles as primary.
5. Prior lab records: `SKILL-REGISTRY.md` table + this file's log, so candidates are not re-scouted from zero.

## 3. How to evaluate candidates

Write a scout note with: what it is, what need it serves, official URL + version inspected + date, then the reviews below (§4–§8), then a verdict. Grade factual claims `FACT / INFERENCE / UNKNOWN`; mark anything unverifiable `UNKNOWN` rather than guessing.

## 4. License verification

- Read the actual LICENSE file or terms page; never trust "MIT" claims in third-party articles.
- No license file or unclear license = risk flagged in the registry (cf. deep-research, ui-ux-pro-max).
- Proprietary-but-free (e.g. Aceternity free components) is usable only with the exact grant recorded and redistribution limits noted.
- Copyleft (GPL/AGPL) components require explicit human approval before any product use.

## 5. Security review

- What code executes on install or first use (scripts, lifecycle hooks, MCP servers, plugins)?
- What network calls does it make, and to where (e.g. guideline fetches, API endpoints)?
- What credentials/tokens does it need, and where are they stored (project-local only)?
- Anything that modifies global agent/OpenCode configuration = rejected until a project-local path exists.

## 6. Cost review

- Free tier: exact limits + date recorded (requests, seats, generations, domains).
- Paid upsell path named with prices; paid tiers must NEVER become hidden requirements of a product.
- Rule: if the free ceiling cannot cover the phase's need, verdict is Defer or Reject — never "adopt and hope".
- Re-verify pricing when evidence conflicts (pricing pages vs third-party listings; official page wins).

## 7. Compatibility review

- Skill format valid for the agent host; required tools exist in the lab (websearch/webfetch, browser, node, python).
- Stack fit: React/Next.js + Tailwind + shadcn/ui unless the candidate justifies otherwise.
- Output quality check where applicable (e.g. generated code must still pass Ponytail + Playwright + accessibility + Design QA).
- Research sources vs implementation tools kept separate: inspiration must never become a dependency.

## 8. Overlap / duplication review

- If two registered items solve nearly the same problem, keep the strongest/simplest and record the overlap.
- Prefer the original repository over forks, mirrors, and repackaged copies (check stars, commit recency, maintainer identity).
- Name collisions resolved explicitly (e.g. "animasteribrary" → Animate UI vs Animata; "three ui" → no canonical project).

## 9. Decision: install / defer / reject

- **Approved — installed**: safe, needed now → copy project-local into `.opencode/skills/`, record in registry.
- **Approved — defer**: safe but unneeded → registry entry only, install at first use.
- **Pending**: blocked item listed (e.g. ponytail: clone + review hooks first).
- **Rejected**: fails §15, adds cost/complexity, or loses to a simpler incumbent — recorded with reason so it is not re-proposed.
- Reference-only outcomes (galleries, courses) are recorded as sources, never installed.

## 10. Preference for original repositories

Adopt from the maintainer's own repo/site. Treat awesome-lists, marketplaces, and re-uploads as discovery pointers only — the inspection in §4–§7 always runs against the original.

## 11. Project-local installation

- Copy the skill folder into `.opencode/skills/`; never edit global OpenCode/agent config.
- Never modify the originals outside the workspace; the lab's copies are canonical.
- Adapt, never blindly trust: a skill is a tool with an opinion, not a source of truth.

## 12. Stopping criteria

Stop scouting when any of these is met — scouting must not become endless:
- A candidate passes §4–§8 and a decision (§9) is recorded.
- All known candidates for the need are verdict-recorded (even if all Rejected — the gap stays named, work proceeds without it).
- Two independent official sources agree on the blocking fact (e.g. price, license); a third search adds nothing.
- Timebox hit: one focused pass per candidate; unresolved items go to the registry as Pending with the named blocker, not into another round.

## Scout log

| Date | Candidate | Verdict | Registry row |
|---|---|---|---|
| 2026-09-12 | Refero / Recent Design / Aceternity / Anima / three-ui candidates / Animate UI+Animata / Motion / GSAP / Lenis / animations.dev | Adopt-with-caveat set; rejections recorded (three-ui default, paid tiers) | SKILL-REGISTRY.md "DESIGN REFERENCE SOURCES" |
| — | (prior) frontend-design, web-design-guidelines, checklist-design, deep-research, ponytail, ui-ux-pro-max, agent-browser, a11y tooling | See registry table | SKILL-REGISTRY.md "Registry" |

## Research-tool candidates (from indie-business benchmark, NOT evaluated — §15 inspection owed before any use)

| Candidate | Use | Source |
|---|---|---|
| SaaS Heaven (github.com/VulcanWM/saasheaven) | Failed-SaaS archive + post-mortems + read-only API for failure-quota sourcing | k10 report |
| TheyGotAcquired.com | Indie exit price/terms case studies with founder interviews | k05 report |
| Superframeworks case studies | Bootstrapped revenue timelines with funnel math | k09 report |
| Prospeo teardown pages | Aggregated reviews + pricing/benchmarks per tool; stalled-product signals | k04 report |
| Instatus `/open` pattern | Live MRR/stack disclosure template for open-startup verification | k02 report |
| Tracxn company pages | Funding-stage/founder/headcount triage (secondary only — conflicts recorded) | k06/k07 reports |
| Coachway comparison guides | Live pricing + shutdown histories for vertical niches | k08 report |
| cron.help | Cron-expression explainer for schedule-MVP validation | k01 report |
| claude-seo (github.com/AgriciDaniel/claude-seo, EVALUATED 2026-09-12) | 25 sub-skills + 18 agents + 32 `/seo` commands; MIT; core free local-only; paid MCP extensions extra | Verdict: DO NOT INSTALL — Claude Code plugin format (manifests, `/plugin` flow, hooks, Opus-pinned agents), no `.opencode` path. External/reference tooling only; adaptable ideas (P0–P3 triage, falsifiability, GEO citability) already in `workflows/seo-organic-distribution.md` |
