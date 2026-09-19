# Template — Product Emails

Copy the needed types into `products/<slug>/emails/` (ENGINEERING-STACK §7: `components/`, `templates/`, `previews/`). React Email + Resend. One brand skin per product (tokens file), never a separate email engineering system per product.

## Per-email requirements (all 10 types)

Professional · responsive · on-brand · accessible (contrast, link text) · concise · **one primary CTA** · plain-text fallback · Web-safe font fallbacks · inbox-ready (HTML+text parts, no heavy images, DKIM/SPF via Resend).

## The 10 types (outline each before writing)

1. **Welcome/onboarding** — what happens next, one first action.
2. **Verification** — confirm email; code/link, expiry stated.
3. **Magic link / sign-in** — single-use, expiry stated, no password confusion.
4. **Purchase receipt/invoice** — what was bought, amount, where to manage.
5. **Payment failed / dunning** — what failed, how to fix, what happens if not.
6. **Trial ending/renewing** — date, what changes, cancel path (honest, one click from account).
7. **Product update/changelog** — what changed, why it matters to this user.
8. **Support/reply confirmation** — ticket received, expected response window.
9. **Invite/collaborator** — who invited, to what, accept/decline.
10. **Reactivation/comeback** — what's new since they left, one reason to return.

## Rules

- Every claim in an email must already be true in the product (no fake receipts, no invented features).
- Transactional emails never carry marketing unsubscribe-burden tricks; marketing emails always carry a real unsubscribe.
- Dark-mode: verify contrast in both schemes before launch.
