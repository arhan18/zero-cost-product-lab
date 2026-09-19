# Template — Product Memory.md

> TIMING RULE: do NOT create during initialization. Create once implementation begins (first Phase with code). Purpose: preserve context across chats, agents, sessions, and context windows. Update after every meaningful phase. Concise and current — never a codebase dump.

Copy to `products/<slug>/Memory.md` when the first implementation phase starts.

## Current state
One paragraph: where the product stands right now + date of last update.

## Completed work
- [x] Phase N — one line each + evidence path.

## Active phase
Phase N — objective, what's done, what's next.

## Important architectural decisions
Decision → reason → date. (Superseded decisions struck through, never deleted silently.)

## Important design decisions
Decision → reason → date.

## Known bugs
Bug → reproduction → severity → status.

## Unresolved questions
Question → who must answer → blocking which phase.

## Changed requirements
What changed, when, who approved, which docs were updated to match.

## Failed approaches
What was tried, why it failed, what replaced it (so no future agent retries it blindly).

## Next tasks
Ordered, smallest-first, each pointing at its Phases.md acceptance criteria.

## Files/components affected
Touched areas per recent work (paths only, no code pasted).

## Maintenance rule
On every update: refresh Current state + Active phase + Next tasks first; prune anything no longer true. If this file exceeds ~150 lines, compress history into dated bullets.
