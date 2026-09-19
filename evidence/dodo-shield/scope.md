# SCOPE LOCK — dodo-shield (Phase 07, REDUCED per owner 2026-09-14)

Date: 2026-09-14. Status: SIGNED-REDUCED, amended same day — opt-in auto-refund ADDED per owner ("like byedispute"). Owner decision: Reduce scope → amend with guarded auto option.

## Promised MVP (alert-only, no refund execution)

1. `/connect` — paste Dodo test key, copy webhook URL, verify signature check passes.
2. `/rules` — 4 toggles + thresholds, persisted local + Supabase free.
3. `/feed` — prevented-feed with per-row outcome: AUTO-REFUND (rule opted in + under cap) or ALERT + "Open in Dodo → refund manually" deep link + "I refunded it" confirm. Live `POST /refunds` stays behind backend (Phase 12); v0 demo simulates both paths honestly labeled.
4. `/rules` — refund-mode block: global "allow auto-refund" (default OFF) + per-rule opt-in + max-amount cap (default $100). Over-cap hits fall back to manual.
5. One working deploy on free tier with deploy record.

## Deferred (not lost)

- Auto-refund live mode, domino-sub refunds, team workspaces, App Store listing, AI scoring, advanced reason-code analytics, one-click Dodo OAuth (paste-key first).

## Kill criteria (numbers that mean stop)

- K1: <2 sellers complete test-mode connect→rule→prevented-row within 14 days of launch → KILL/PIVOT.
- K2: 10+ testers but 0 pay-attempts at $19 honest button within 30 days → REDUCE (alert-only free) or KILL.
- K3: Dodo `payment.succeeded` lacks usable email/domain/IP/country → REDUCE to dispute-webhook logger or KILL.
- K4: Weekly burden >5 hrs for <6 users → REDUCE scope or KILL.

## Kill arithmetic (PRODUCT-GATES §8)

- $19×6 = $114 MRR. Acquisition: HYPOTHESIS 2 Discord + 2 X + 2 IndieKit/mo @ ~2hrs each. Retention: HYPOTHESIS monthly saved-report + live launches. Burden: ~2–3 hrs/wk. Verdict if fails: REDUCE/PIVOT/KILL, never sunk-code build.

## Gate-07 ask

Approve scope + kill criteria to proceed to Phase 08 UX → 09 Visual Direction (gate) → 10–13 minimal build. No spending, no legal interpretation, test-mode only.
