# ENGINEERING-STACK

Engineering, motion, UI-ingredients, infrastructure, email, and brand-production policy for every product experiment. Stands with DESIGN-STACK.md (design) and ZERO-COST-POLICY.md (cost). Where any file conflicts, SYSTEM.md wins.

## 1. Motion hierarchy (Part I)

Motion is a **function of the product**, not decoration. Apply in this order; escalate only when the previous tier clearly can't do the job:

1. **Native CSS / browser defaults**: transitions, `transform`, `opacity`, `@media (prefers-reduced-motion)`. Enough for 90% of marketing surfaces.
2. **`motion` (the Motion.dev React animation library)**: the default React animation library — `whileHover`, `whileInView`, springs, entrance/reveal, layout. For scroll-scrubbed hero demos (D5 in DESIGN-STACK).
3. **Ready-made animation components** (e.g. Motion Primitives / Animate UI) *only when they materially improve the result* — checked against Part J rules (no pasted demos).
4. **GSAP + Lenis** — only when justified:
   - Lenis = **sophisticated smooth-scroll**, not default.
   - GSAP = **advanced choreography** (timeline-driven, pinned, scrubbed, complex sequences), not default.
   - Admission ticket: "this effect will measurably help the specific product's story." Otherwise reject.

**Hard rule:** no animation for its own sake. Motion must support clarity, trust, or the product artifact (benchmark pattern A7: low-motion apps, motion-led marketing). Respect `prefers-reduced-motion`.

## 2. UI ingredients vs. design (Part J)

Component libraries are **ingredients, not design**. They provide building blocks; the product's own token system (typography, color, spacing, radius, shadow, motion) is the design.

- Allow (evaluate per project): **shadcn/ui** (default starter), **React Bits**, **Motion Primitives**, **Magic UI**, **Aceternity UI**, **21st.dev**, **Theme Factory**.
- **Rules:**
  - No pasted demo/components unchanged — never a "Frankenstein UI" of one component from each site.
  - Every project defines its own **token system** BEFORE assembling components: type scale, palette, spacing scale, radius, shadow, motion rhythm.
  - Theme Factory = yes for themes, but locate/verify the actual plugin auth method ($0 claim must be verified, not assumed — it may require VS Code sign-in).
- These go under the DESIGN-STACK gate: pattern files are consulted, nothing is copied wholesale.

## 3. Design modes (Part K)

Three production modes, chosen early per product:

- **Mode A — MARKETING / BRAND**: storytelling pages, hero-artifact-first, emotional/typographic space. Uses motion-led marketing (GSAP/Lenis allowed here where justified; benchmark buckets 1+4).
- **Mode B — PRODUCT / APPLICATION**: app UI, dense-but-calm, low motion, whitespace system, status clarity. (Benchmark bucket 2; AI-native 5.)
- **Mode C — HYBRID**: product-first site with working demo embedded; most modern indie SaaS (bucket 3). Default for utility tools.

Every product states its mode in its design doc; QA mode-specific (Part M/N).

## 4. Anti-slop rules (Part L)

Non-negotiable. Design derives from **PRODUCT + CUSTOMER + USE CASE + BRAND PERSONALITY**.

- **No**: purple/blue gradient blobs + glowing orbs; glassmorphism for its own sake; excessive rounded containers everywhere; pointless bento grids; fake dashboards/testimonials/logos/metrics/reviews; generic pill/tag soups; arbitrary shadows/animations; "AI-powered" as a differentiator; Linear/Vercel/Stripe clone pages; generic 3-column feature cards.
- **Yes**: real product artifact, real screenshots, real numbers, specific copy, one accent, living hierarchy via space, opinionated constraint (see benchmark-patterns A/H).

## 5. QA flow (Part M + N)

Default minimal cycle (the minimum relevant, from `templates/qa`):

1. PRODUCT TRUTH (serves one person/task/job) → 2. LAYOUT/HIERARCHY → 3. CONTENT/COPY (specific, real) → 4. INTERACTION/MOTION (mode-appropriate, reduced-motion) → 5. RESPONSIVE/STATE (mobile-first, empty/loading/error) → 6. ACCESSIBILITY gate (Part O — semantic HTML, keyboard, focus, labels, contrast, headings) → 7. PERFORMANCE basics → 8. LAUNCH READY.

**Browser QA (Part N):** use `agent-browser`/Playwright to check the RENDERED page — not just source code. **"SOURCE CODE IS NOT THE FINAL TRUTH."** Automated checks for: viewport/responsive, default + hover/focus + empty/error states, keyboard tab order + visible focus, console errors, network/A11y basics (axe-style), screenshot review (mobile/tablet/desktop), reduced-motion. Seed templates from a shared QA checklist.

## 6. Infrastructure (Part U) — see ZERO-COST-POLICY §2

Cloudflare → Turso (default DB) → Resend + React Email → Cloudflare Email Routing (inbound). D1 optional, never alongside Turso without a reason. Verify current limits before each product. **No dual DBs.**

AI compute follows ZERO-COST-POLICY §3: $0 upfront for the builder; customer-funded variable AI spend allowed only with bounded usage, gateway enforcement, and healthy per-customer/per-plan margins (`templates/ai-economics/AI-ECONOMICS.md`).

## 7. Email system (Part V)

Standard per-product structure under the product folder: `emails/` with `components/`, `templates/`, `previews/`.

Ten standard email types (React Email + Resend):
1. Welcome / onboarding
2. Verification (email confirm)
3. Magic link / sign-in
4. Purchase receipt / invoice
5. Payment failed / dunning
6. Trial ending / renewing
7. Product update / changelog
8. Support / reply confirmation
9. Invite / collaborator
10. Reactivation / comeback

Spec: professional, responsive, on-brand (Part W tokens), **one CTA**, accessible (text contrast, link text), Web-safe font fallbacks, **plain-text fallback** for every template, and Inbox-ready (plain text + HTML parts, no heavy images, DKIM/SPF via Resend). Product-brandable without rebuilding infra — templates consume a small brand token file.

## 8. Brand asset production (Part W) — see DESIGN-STACK

Per-product `brand/` folder with code-generated / free assets: logo.svg, logo-mark.svg, favicon.svg, pfp-1x1.png, social-card-1200x630.png, x-banner.png, linkedin-banner.png, og-image.png, email-logo.png, brand-guidelines.md (voice, palette, type, spacing, radius, shadow, icon, illustration, photo, motion rules + examples). Prefer SVG + code generation + free tools over paid design. Every social/OG asset is generated from the brand tokens, so it stays consistent.

## 9. References

- DESIGN-STACK.md (design decision framework + token workflow).
- ZERO-COST-POLICY.md (cost + infra gates).
- PRODUCT-GATES.md (engineering + launch gates).
- `templates/technical-architecture` + `templates/qa` (per-product templates).
- Part N browser QA + Part O access + Part P SEO workflow live in DESIGN-STACK / engineering QA notes.