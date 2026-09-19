# Template — Product Phases.md

Copy to `products/<slug>/Phases.md` after Architecture.md. The agent works ONE phase at a time and may not start the next until the current phase's verification passes. Never attempt the whole product in one generation.

## How to run
- Current phase tracked in STATUS.md and Memory.md (once it exists).
- Each phase ends with verification evidence filed in `evidence/<slug>/`; a phase with no evidence is not done.

## Phase 1 — Foundation
- **Objective:**
- **Tasks:**
- **Dependencies:**
- **Expected output:**
- **Acceptance criteria:**
- **Verification:**
- **Completion state:** NOT-STARTED / IN-PROGRESS / DONE (+ date + evidence path)

## Phase 2 — Authentication (or next slice; delete phases that don't apply, never add speculative ones)
- **Objective:**
- **Tasks:**
- **Dependencies:**
- **Expected output:**
- **Acceptance criteria:**
- **Verification:**
- **Completion state:**

## Phase 3 — Core workflow
(same fields)

## Phase 4 — Database integration
(same fields)

## Phase 5 — Billing (only if the product charges; otherwise delete)
(same fields)

## Phase 6 — Polish
(same fields; motion/micro-interactions per Design.md, reduced-motion included)

## Phase 7 — QA
(same fields; browser QA + Checklist Design + Web Interface Guidelines + accessibility + performance + Ponytail review)

## Rules
- Smallest executable order: core task before polish, always.
- A failed verification stops the line: fix, re-verify, then proceed.
- Scope changes mid-phase go back to PRD.md + human approval (Rules.md §14), not into the phase silently.
