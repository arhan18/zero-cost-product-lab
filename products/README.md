# Products

This folder holds the lab's portfolio. One subfolder per product.

## Portfolio rule (SYSTEM.md §26)

The goal is **not one giant startup**. It is a portfolio of small, useful, monetizable products that *collectively* reach **at least $100 MRR**. Products can be SaaS, developer tools, utilities, micro-products, APIs, web tools, creator tools, research tools, or workflow products — **every one must solve a real problem**.

## How a product lives here

Each product gets a slug folder: `products/<slug>/`.

Minimal per-product contents:

```
products/<slug>/
├── STATUS.md        <- phase it is currently in (see SYSTEM.md §18)
├── README.md        <- one-sentence promise + link to its evidence folder
├── PRD.md           <- from templates/product-docs/PRD-TEMPLATE.md (Phase 06)
├── Architecture.md  <- from Architecture-TEMPLATE.md (Phase 11)
├── Rules.md         <- from Rules-TEMPLATE.md (before any code; local constitution)
├── Phases.md        <- from Phases-TEMPLATE.md (one phase at a time, verified)
├── Design.md        <- from Design-TEMPLATE.md (Phase 09/10; visual source of truth)
├── Memory.md        <- from Memory-TEMPLATE.md; ONLY after implementation begins
└── code/            <- the actual implementation (only when it passes phase 05+)
```

The companion evidence lives in `evidence/<slug>/` (graded research, reports, screenshots, QA logs).

## Product documentation layer

Every product uses the same six documents, copied from `templates/product-docs/` and filled per product:

SYSTEM.md (global lab rules) → PRD.md (what) → Architecture.md (how built) → Rules.md (how AI must behave) → Phases.md (what next) → Design.md (look and feel) → Memory.md (what happened so far).

- `Memory.md` is created ONLY once implementation begins — never during initialization. Updated after every meaningful phase; concise and current, never a codebase dump.
- Conflict order: 1. safety/correctness · 2. global lab rules (SYSTEM.md) · 3. PRD · 4. Architecture · 5. product Rules · 6. Design · 7. current phase · 8. implementation preference.
- Full lifecycle this serves: RESEARCH → UNDERSTAND → SPECIFY → DESIGN → IMPLEMENT → TEST → REFINE → SHIP → LEARN.

## Suggested workflow

1. Idea passes Opportunity Scoring (Phase 05, human gate) → create `products/<slug>/` with STATUS = 01.
2. Files advance down the pipeline; `STATUS.md` is updated at each gate.
3. Every launched product tracks its metrics in `evidence/<slug>/metrics/` (Phase 27).
4. Killed products are archived (moved or tagged), not deleted — the lab learns from them.

## Revenue ledger

A running table of the portfolio should be maintained here (or linked from here), showing: product, status, launch date, current MRR, next decision gate. The target: **sum of MRR ≥ $100**.