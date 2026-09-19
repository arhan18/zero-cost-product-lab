# Infrastructure Audit

$0 stack as recorded (ZERO-COST-POLICY.md §2; ENGINEERING-STACK.md §6). No infra changes made this pass.

- Hosting: Cloudflare Pages/Workers (free tier, CDN).
- Database: Turso default (~9 GB, 500M reads/mo, 5M writes/mo as last recorded); D1 optional, never both without reason.
- Email out: Resend free (3,000/mo, 100/day) + React Email templates; email in: Cloudflare Email Routing (free).
- Domain: free subdomains first; custom domain only on revenue justification.
- Paid triggers (in order, each human-gated): custom domain → email volume → database scale.
- Hygiene rule stands: verify CURRENT limits with dates per product; never auto-upgrade.
- Freshness caveat: live re-verification deferred this pass (search rate-limited); mandated at first product infra selection. Treat recorded numbers as last-known, not current.
- ToS compliance required regardless of $0 (providers' terms honored; Part X legal).
