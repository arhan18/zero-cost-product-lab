# UX ARCHITECTURE

| Field | Value |
|---|---|
| Product slug | dodo-shield |
| Date | 2026-09-14 |

## 1. Core flow

Landing → Connect → Rules → Feed → Dodo-manual-refund. Text flow:

```
hero (promise + honest limits) → [Connect Dodo test] → paste key → copy webhook URL
→ toggle 4 rules → [Send test payment] → feed row appears → [Open in Dodo] → done
```

- The kill point: webhook registration in Dodo Dashboard (copy URL + select events). Mitigate with 3-bullet checklist + event list pre-selected text + verify badge.

## 2. Screens / states inventory

- `/` landing: purpose = promise + honest limits + live demo (rule toggles + test payment simulator). Primary: Start test. Secondary: Read Dodo limits.
- `/connect`: purpose = key + webhook URL. Primary: Verify. States: empty (no key), loading (verifying), error (bad signature format), repeat (saved badge).
- `/rules`: 4 toggles + thresholds. Primary: Save. Secondary: Reset defaults. States: all-off warning ("no protection"), saved toast.
- `/feed`: prevented-feed table (time, payment_id, rule, amount, Dodo link, alert status). States: empty (Run test payment button), loading, error (webhook failed), repeat (filter by rule).
- `/docs`: Dodo $30/RDR/30-day/balance facts + test steps. No auth needed.

## 3. Information hierarchy

1. First: "Alert before the bank files — you refund manually in Dodo." 2. Second: live simulator proving rules fire. 3. Third: honest limits (RDR still $30, 30-day window). Why: trust before activation; no inflated "80% less" claims.

## 4. Decisions & language

- User words reused: "suspended without warning", "banned", "dispute fee", "refund manually" (from Phase 04 quotes).
- No destructive actions in v0 (no auto-refund) → no confirmation needed. "Open in Dodo" is external link with `rel=noopener`.
- Visual direction input: indie-ledger aesthetic — paper-white, ink-black, one signal-amber accent; monospace payment IDs; staggered hero reveal only.
