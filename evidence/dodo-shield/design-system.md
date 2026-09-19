# DESIGN SYSTEM — dodo-shield (Phase 10)

- Tokens: --paper:#FAF7F0; --ink:#141210; --muted:#6B6259; --line:#E7DFD3; --amber:#B45309; --moss:#3F6212; --card:#FFFFFF.
- Type: Fraunces (display, 600) + system body + IBM Plex Mono (IDs, tabular numbers). Fallbacks if offline: Georgia, ui-monospace.
- Spacing scale: 4/8/16/24/48/96. Radius 10 (cards), 999 (pills). Shadow: single 1px line + 8px soft on feed card only.
- Components: button-primary (ink bg, paper text), button-ghost (line border), rule-row (toggle + threshold input), feed-table (mono IDs, amber ALERT pill, moss OK pill), notice (amber left-border for Dodo limits).
- Motion: one 400ms hero stagger on load; toggle/feedback transitions 120ms; `prefers-reduced-motion` disables stagger.
