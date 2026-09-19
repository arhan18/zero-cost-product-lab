# Validation — Membership/Service-Agreement Tracker

Original: `research/ideas/membership-tracker.md` ($49/mo member billing + renewal + visit scheduling). Untouched. Date: 2026-09-12. Central question: recurring workflow painful enough to own as a dedicated product?

## 1-2. Problem / customer

Owner/office manager at 4-tech-scale shops (100–300 agreements): Excel + Calendar + phone chasing; "managing them on excel is going to drive me up the wall"; Sunday-night spreadsheet sessions; calendar-repeat glitches dropping follow-ups (FACT-pattern: r/ProHVACR, r/smallbusiness, r/pestcontrol threads).

## 3-4. Workflow

Sell 3-tier annual/monthly plan → log anniversary in Excel + Calendar repeat → schedule 2× seasonal tune-ups → chase renewal 30/7 days out by call/text/email → bill in QuickBooks. Owner/office-manager-owned; phone-heavy (call renews at 75–85% vs email-only 40–55% per trade research, INFERENCE-grade source).

## 5-7. Pain / frequency / severity

Real seasonal pain with dollar impact (LevelCFO: median renewal 35–50%, expired > active ACV, 2–4x repair pull-through; $300 agreement ≈ $900 with pull-through — INFERENCE-grade, vendor-adjacent sources). Frequency physics FAIL: tracker opened seasonally + billing exceptions, not daily — tax-software churn physics at $49/mo.

## 8-9. Alternatives / why they fail

ServiceTitan (deepest, top-tier-gated, $5–15k implementation, ETF to $46k); HCP (recurring plans Max-only $329); Jobber (recurring jobs + autopay from Connect, thinner lifecycle); FieldPulse (custom-quote opacity); Kickserv ($60–199, dated); QuickBooks recurring + Calendar (already-paid, zero migration — the TRUE competitor for micro-shops); Everfit-pattern (model proof, other vertical).

## 10. WTP evidence

WEAK as standalone: suites gate agreements as premium modules; small shops complain but keep suite/Incumbent; explicit upgrade threshold ("wouldn't jump to Titan until 4 vans + 300–500 agreements"); no verifiable 2025–26 from→to agreement-tracker quotes retrievable this pass (agent-marked, Reddit fetch blocked). Complaint ≠ WTP. Standalone plausible only as wedge for QB+spreadsheet micro-shops with <50 agreements — UNPROVEN.

## 11. Distribution

Trade subs, "service agreement software" SEO, listing/SEO inbound (INFERENCE on reach; conversions unobserved).

## 12-14. Technical / $0 / $100-MRR

Buildable (FACT-pattern). $49 × 3 (HVAC/plumbing/cleaning archetypes via inbound) — acquisition unproven AND retention physics hostile (2×/year opens). Arithmetic is not validation.

## 15. Solo-maintainability

MEDIUM build, LOW-MEDIUM ops (billing + reminders + calendar; no fleet/real-time). The burden isn't ops — it's churn: a product opened twice a year cannot hold subscriptions without becoming the billing system of record, which requires trust + migration no micro-shop grants a 4th system for ("aren't going to change CRM" verbatim).

## 16-19. AI / risks / contradictions / unknowns

No AI core. Risks: frequency physics; 4th-system rejection; trivial incumbent response (recurring billing + reminders + calendar view — HCP/Jobber already ship it); migration burden (pricebook 3x expectations, automation rebuilds, 2-week parallel runs). Contradictions: "driven up the wall" pain vs 2×/year usage; "$329 hate" vs keeping it; "standalone plausible" vs no observed standalone buyer. Unknowns: sub-50-agreement micro-shop WTP (the only untested pocket).
