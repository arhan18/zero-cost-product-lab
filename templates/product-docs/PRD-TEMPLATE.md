# Template — Product PRD.md

Copy to `products/<slug>/PRD.md` at Phase 06. Must be specific enough that an AI coding agent can act without inventing product behavior. Every claim a decision rests on carries an evidence grade (`FACT / INFERENCE / HYPOTHESIS / UNKNOWN`).

## 1. Product
One-sentence promise: helps [person] do [task]. Links: STATUS.md, evidence folder.

## 2. Problem
The pain in the sufferer's words (quote primary sources where possible). Frequency + urgency.

## 3. Target customer
Specific segment (not "everyone"). Who is explicitly NOT the customer.

## 4. Desired outcome
What success looks like for the user, stated observably ("user can ___ in under ___").

## 5. Value proposition
Why this product vs. today's workaround. One paragraph, own words, no invented claims.

## 6. Core features
Numbered list. Each feature: what it does, for whom, and which user story it serves.

## 7. MVP (locked scope reference → Phases.md)
The irreducible scope per Phase 07 scope lock. Pointer to the signed scope + kill criteria.

## 8. Non-goals
Explicit list of what this version will NOT do. (Agents: items here are rejected on arrival.)

## 9. User stories
`As a [user], I want [action] so that [benefit].` Cover happy path + empty/loading/error/offline/repeat-use states.

## 10. Acceptance criteria
Per story: observable pass/fail conditions. No adjectives without thresholds.

## 11. Constraints
$0 policy, free-tier limits with dates, platform/browser targets, time budget.

## 12. Success metrics
The numbers Phase 27 will measure, with the kill thresholds from scope lock.

## 13. Assumptions
Each labeled `HYPOTHESIS` until proven, with how it will be tested.

## 14. Evidence
Exact paths to graded artifacts in `evidence/<slug>/` backing each section above.
