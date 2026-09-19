# Design.md — Renewal Tracker (includes ROUND 0 direction)

## ROUND 0 — Product design direction

- Target user: time-poor technical admin who owns renewals alongside everything else.
- Primary job: answer "what needs action, by when, by whom, at what cost" in one glance.
- Personality: calm, operational, trustworthy, sharp, fast, useful, slightly opinionated.
  The product has a point of view: the cancel-by deadline is the real date; everything else
  is commentary.
- Emotional response: relief ("nothing is silently renewing on me") + control.
- Mental model: WHAT → WHEN → WHO → HOW MUCH → WHAT ACTION. Urgency-sorted, never alphabetical.
- Visual personality: ops-console "Renewal Radar" — dark ink console, mono data labels, tabular
  numerals, urgency as color + language (ACT amber, OVERDUE red, later neutral, UNSURE dashed).
  No sidebar; single ops column; hero = next-action countdown, not a metrics dashboard.
- Typography: serif display for the product voice + mono for dates/costs/labels + system sans
  for body. Tabular numerals everywhere money/dates appear.
- Color: deep ink-teal canvas, paper ops-cards, amber action accent, red overdue, lume-green
  ok-states. No purple/blue AI gradient, no glass, no bento.
- Density: airy hero, compact list rows; mobile stacks to full-width cards.
- Responsive: 660px single column → wider centers; touch targets ≥44px; urgency pills readable
  at 390px.
- Motion: restrained reveals + status transitions only; all gated under prefers-reduced-motion.
- Anti-patterns: generic admin sidebar+table, card-soup metrics, fake savings counters,
  procurement jargon, random animation, component collage.

## Round 1 — ThreeUI foundation (recorded after build)

- Inspected (live, threeui.com): dark immersive canvas treatments, pill CTA/buttons,
  mono label treatments, card/section composition, result/vault emphasis patterns.
- Selected → adapted (hand CSS, static-compatible; exact WebGL/React imports blocked by
  zero-dependency single-file constraint — recorded per source-first rules):
  canvas + faint grid field + top beam; floating paper ops-cards; beam-gradient primary CTA;
  luminous "next-action" vault (countdown climax); mono kickers + tabular numerals.
- License: patterns reimplemented, no source copied; nothing Pro-gated used.
- REVISE (Gate 1 feedback, 2026-09-13): first pass wrongly reused the freelance-calc green
  ledger — retokened to a distinct ink-teal/phosphor radar identity with dark ops panels
  (no paper cards), plus a live interactive radar scope: canvas sweep with renewals as blips
  (radius = days out, color = urgency, pulse on ACT/OVERDUE, click blip → scrolls to its card;
  static frame under reduced-motion). Zero deps, zero network preserved.
- ThreeUI-establishes-language check: hero (next-action vault), background, buttons, list
  composition, status pills, empty state, responsive — all carry the same system.
