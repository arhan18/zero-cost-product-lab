# PHASES 14–17 — Motion, SEO, A11y, Performance (dodo-shield v0, 2026-09-14)

## 14. Motion spec (implemented in index.html)

- Hero entrance: single 500ms rise+fade on load (hierarchy moment). No other entrance animation.
- Feedback only: button hover lift 1px, switch knob slide 120ms, feed rows appear on action.
- `prefers-reduced-motion: reduce` disables hero animation + smooth scroll. VERIFIED: media query present in CSS.

## 15. SEO

- Title ≤60 chars variant + meta description + theme-color + OG title/description/type + inline SVG favicon (no 404 — VERIFIED: favicon.ico no longer requested).
- Single H1, section H2s with keyword vocabulary from research ("dispute", "Dodo Payments", "refund", "chargeback" avoided per honest-limits framing).
- INFERENCE: target query "Dodo Payments dispute prevention" has near-zero competition (FACT: no Dodo-native tool found Phase 03) — ranking plausible post-deploy.
- TODO post-domain: canonical URL + sitemap + robots (blocked on Phase 23 host choice).

## 16. Accessibility checklist

| Item | Status |
|---|---|
| Keyboard-only core flow (tab → run → feed → confirm) | PASS (scripted Phase 18, incl. Enter activation) |
| Skip link | PASS (added, targets #demo) |
| Focus visible | PASS (`:focus-visible` amber outline) |
| Labels on all inputs | PASS (label-wrapped; threshold has aria-label) |
| Feed live region | PASS (`aria-live=polite`, role=status empty state) |
| Switches as real buttons with aria-checked + aria-label | PASS |
| Reduced motion | PASS |
| Color-not-only signaling | PASS (badges pair color + text: ALERT/OK/AVOIDED) |
| Contrast | INFERENCE PASS: ink #141210 on paper #FAF7F0 (~15:1); amber #B45309 on #FEF3C7 (~4.6:1, large/bold use); mono small text on tinted rows — closest call, acceptable for non-body metadata |
| Screen-reader full pass | UNKNOWN (no SR in env) — flagged for owner pre-launch |

## 17. Performance (measured Playwright Chromium 2026-09-14, localhost)

- File: 26.5 KB single HTML, zero JS deps; fonts via Google CDN with system fallbacks.
- domContentLoaded ~750–960ms, load ~1000–1250ms on localhost (font fetch dominates).
- No render-blocking local assets; no images at all (CSS-only visuals + inline SVG favicon).
- INFERENCE: LCP/INP sane for static page; re-measure on Phase 23 host (CDN + HTTP/2 will improve on this).
