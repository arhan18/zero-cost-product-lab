# LAUNCH — dodo-shield v0 (GO + LIVE, 2026-09-14)

- Live: https://dodo-shield.pages.dev (VERIFIED: title + alert flow pass in production Chromium).
- Kill clock STARTED 2026-09-14: K1 <2 test-mode activations in 14 days (by 2026-09-28) → kill/pivot.

- Decision: GO (owner). Host: Cloudflare Pages. Channel order: Dodo Discord + X → IndieHackers → r/indiehackersindia.
- Kill clock STARTS on public URL live: K1 <2 test-mode activations in 14 days → kill/pivot.
- Deploy steps (owner, ~5 min, $0):
  1. https://dash.cloudflare.com → Workers & Pages → Create → Pages → Upload assets.
  2. Project name: `dodo-shield`. Drag in `products/dodo-shield/` (single index.html).
  3. Deploy → live at `https://dodo-shield.pages.dev` (or custom domain later).
  4. Send me the URL + I record free-tier limits snapshot (Phase 23 completion).
- Operator email for legal footer: STILL PENDING — send it and I patch the footer same session.

## Copy-paste launch assets (honest, no fake proof)

### X post
> I sell via @dodopayments and got tired of fearing the $30/dispute + 0.9% tripwire.
> So I built Dodo Shield (v0 experiment, free): 4 pre-dispute rules → instant alert or capped auto-refund, before the bank files.
> Live demo runs in your browser, test mode only. Roast it: [URL]
> #buildinpublic

### Dodo Discord (#showcase / help-adjacent, value-first)
> Hey all — v0 experiment for sellers here: Dodo Shield watches payment.succeeded, flags disposable-email / velocity / card-testing / first-payment-high-ticket, then alerts you or auto-refunds under a cap you set. RDR still bills $30 even on "saves", so this acts before filing. Free, test-mode, runs in browser: [URL]. Looking for 2 sellers to try the test flow — what rule am I missing?

### IndieHackers (after first feedback)
> Title: I built ByeDispute-style dispute alerts for Dodo Payments (v0, free)
> Body: problem (MoR suspension + $30 fee threads) → what it does (4 rules, alert or opt-in capped auto-refund) → honest limits (RDR bills $30, 30-day refunds, test-mode only) → ask: which rule would have saved you last time? [URL]
