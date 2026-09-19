# Zero-Cost Product Lab — Workspace Reorganization Plan

## 1. Executive Summary

This plan converts the findings of `docs/WORKSPACE-ARCHITECTURE-AUDIT.md` into a precise, staged, low-risk reorganization blueprint.

**Governing principles:**
- **Structure follows product maturity.** `math-pdf-converter` is the only real product and gets different treatment from HTML prototypes.
- **Low risk first.** No migration step may touch `mathpipe/` imports, test behavior, or production.
- **MathPipe stays where it is.** Import analysis (Section 6) shows tests resolve the product root via `os.path.dirname(os.path.dirname(os.path.abspath(__file__)))` and import `from mathpipe.X import ...`. Any move of `mathpipe/` breaks 13+ test files and benchmark scripts. Migration of `mathpipe/` is deferred to a dedicated future task (option B), never performed here.
- **Less bureaucracy.** HTML prototypes get at most a `README.md` note — no empty `src/`, `tests/`, `benchmark/` folders.
- **Credentials are out of scope.** No key, token, or secret is inspected, reported, or reproduced.

**Out of scope for this document (planning only):**
- Moving, renaming, deleting, or editing any file.
- Modifying source, tests, configuration, `.gitignore`, or Git state.
- Reading or touching any credential value.

---

## 2. Current Architecture

```
zero-cost-product-lab/
├── .opencode/                      # OpenCode skills + config
├── opencode.json                   # OpenCode provider config
├── README.md                       # Lab README (canonical)
├── AGENT-RULES.md                  # → docs/
├── DESIGN-STACK.md                 # → docs/
├── SYSTEM.md                       # → docs/
├── SKILL-REGISTRY.md               # → docs/
├── PRODUCT-GATES.md                # → docs/
├── RESEARCH-PROTOCOL.md            # → docs/
├── ZERO-COST-POLICY.md             # → docs/
├── SKILL-SCOUT.md                  # → docs/
├── ENGINEERING-STACK.md            # → docs/
├── 3D-IMPLEMENTATION-CHECKLIST.md  # → experiments/
├── Global-Frontend-3D-Skill-Comparison.md       # → research/
├── Global-Frontend-Design-3D-Experience-Workflow.md  # → research/
├── prompt-only-access-by-user.txt  # UNKNOWN — decide later
├── decisions/                      # 7 dated records
├── evidence/                       # only dodo-shield
├── experiments/                    # empty (README only)
├── products/
│   ├── math-pdf-converter/         # ACTIVE, own git repo — DO NOT RESTRUCTURE blindly
│   ├── dodo-shield/                # HTML + worker
│   ├── freelance-rate-calc/        # HTML
│   ├── renewal-tracker/            # HTML
│   └── scenica/                    # design docs + HTML
├── research/                       # 80+ ideas, benchmarks, market data
├── templates/                      # AI prompt templates
└── workflows/                      # AI workflow docs
```

**Notable facts from the audit:**
- 4,476 macOS `._*` artifacts scattered across all directories.
- math-pdf-converter is the only git-tracked subtree; 100+ untracked files there.
- Tests live at `products/math-pdf-converter/benchmark/p5/test_*.py`.
- Root-level docs number ~12 markdown files that belong in `docs/` or `research/`.

---

## 3. Target Architecture

Final canonical structure (no `src/` churn, no empty folders):

```
zero-cost-product-lab/
├── .opencode/                      # UNCHANGED
├── opencode.json                   # UNCHANGED
├── README.md                       # Lab index — links to docs/ and products/
├── docs/                           # Global documentation (EXISTS)
│   ├── AGENT-RULES.md              # moved from root
│   ├── DESIGN-STACK.md             # moved from root
│   ├── SYSTEM.md                   # moved from root
│   ├── SKILL-REGISTRY.md           # moved from root
│   ├── PRODUCT-GATES.md            # moved from root
│   ├── RESEARCH-PROTOCOL.md        # moved from root
│   ├── ZERO-COST-POLICY.md         # moved from root
│   ├── SKILL-SCOUT.md              # moved from root
│   ├── ENGINEERING-STACK.md        # moved from root
│   ├── WORKSPACE-ARCHITECTURE-AUDIT.md          # (exists)
│   └── WORKSPACE-REORGANIZATION-PLAN.md         # this file
├── decisions/                      # Global decisions (EXISTS, keep)
├── evidence/                       # Global evidence (EXISTS, keep)
├── experiments/                    # Global experiments (EXISTS, keep)
├── research/                       # Global research (EXISTS, keep)
│   └── frontend-3d/                # NEW — collects the 2 Global-Frontend-*.md files
├── templates/                      # AI prompts (EXISTS, keep)
├── workflows/                      # AI workflows (EXISTS, keep)
├── products/                       # UNCHANGED top-level, per-product rules below
└── README.md
```

**What we deliberately do NOT create:**
- No root `docs/` sub-bureaucracy (no `docs/research/`, `docs/decisions/`).
- No `src/` inside HTML prototypes.
- No `tests/` move for math-pdf-converter in this plan.
- No global git repo initialization in this plan (deferred, Section 13).

---

## 4. Folder-by-Folder Definitions

### `docs/` — GLOBAL DOCUMENTATION
- **Belongs here:** lab-wide reference, policy, process, architecture, audit, and planning documents that describe the lab itself — not a single product.
- **Does NOT belong here:** product docs (→ `products/<product>/`); research findings (→ `research/`); mutable benchmarks (→ product `benchmark/`).
- **Examples:** this file, `AGENT-RULES.md`, `SYSTEM.md`, `RESEARCH-PROTOCOL.md`.
- **Global or product-specific?** Global.

### `research/` — GLOBAL RESEARCH
- **Belongs here:** market research, competitor research, idea inventory, cross-product synthesis, evidence corpora.
- **Does NOT belong here:** product-specific research that only matters to one product (→ `products/<product>/research/` if the product is mature).
- **Examples:** `MASTER-RESEARCH-SYNTHESIS.md`, `research/ideas/*`.
- **Global or product-specific?** Global by default; product-specific only when a mature product earns its own `research/`.

### `decisions/` — DECISION RECORDS
- **Belongs here:** dated, precedential decisions about lab-level architecture, process, or policy.
- **Does NOT belong here:** product-specific implementation decisions (→ product `docs/` or product `decisions/` once a product is mature).
- **Examples:** existing `2026-09-14-dodo-shield-*.md` records.
- **Global or product-specific?** Global; product decisions may spring off later.

### `evidence/` — VALIDATED EVIDENCE
- **Belongs here:** verified results, QA logs, launch/validation evidence, reproduction artifacts that back claims.
- **Does NOT belong here:** raw scratch/transient logs; benchmark intermediate JSON.
- **Example:** `evidence/dodo-shield/`.
- **Global or product-specific?** Both — global evidence at root, product evidence under `evidence/<product>/` (existing pattern) OR under `products/<product>/evidence/` for the mature product, at human discretion.

### `experiments/` — EXPERIMENTS
- **Belongs here:** one-off explorations, discarded approaches, completion reports for things not shipped.
- **Does NOT belong here:** long-term product assets.
- **Example:** `3D-IMPLEMENTATION-CHECKLIST.md` after move.
- **Global or product-specific?** Global.

### `templates/` — REUSABLE PROMPTS
- **Belongs here:** reusable prompt templates, brief templates, QA templates.
- **Does NOT belong here:** working product files, filled-in outputs.
- **Global or product-specific?** Global.

### `workflows/` — AI WORKFLOWS
- **Belongs here:** reusable multi-step AI workflows (idea-discovery, validation, implementation, launch).
- **Does NOT belong here:** single-product runbooks.
- **Global or product-specific?** Global.

### `products/` — PRODUCTS
- **Belongs here:** one folder per product, containing the product's code, docs, tests, benchmark, and decisions.
- **Does NOT belong here:** lab-wide research or lab-wide policy.
- **Structure: follows product maturity** (Section 5).
- **Global or product-specific?** Product-specific.

---

## 5. Product Structure

### 5.1 math-pdf-converter (ACTIVE product)
**No structural changes recommended in this plan.** Rationale:

- Product root already self-contains source (`mathpipe/`, `converter.py`, `server.py`, `app.py`), benchmark, `econ/`, deploy config, and product docs.
- It has its own git repo. Restructuring its internals now (before Git boundary decision, Section 13) compounds risk.
- Tests import `from mathpipe.X import ...` with the product root injected into `sys.path` by each test file. Moving `mathpipe/` requires editing 13+ files — deferred.

**Deferred (option B) — not performed now:**
- Create `tests/` at product root and relocate `benchmark/p5/test_*.py` — only after updating the path-derivation logic in every test (they currently resolve product root via `dirname(dirname(abspath(__file__)))`).
- Create `docs/` at product root and move `AUDIT.md`, `RESEARCH.md`, `MASTER-IMPLEMENTATION-PLAN.md`, `PRICING.md`, `DEPLOY_NOTES.md` — LOW risk, can be done in an early phase as a pure file move if human approves (no code depends on them; verified by grep in the audit).

### 5.2 HTML prototypes (dodo-shield, freelance-rate-calc, renewal-tracker, scenica)
**Minimal structure:**
- Keep files where they are.
- Add a single `README.md` (or extend existing) describing: status, what to run, where docs/evidence live.
- Do NOT create `src/`, `tests/`, `benchmark/`, `backend/`.

**Evidence split observation:**
- `dodo-shield` prose currently lives in `evidence/dodo-shield/` (research, prd, architecture, launch) while code lives in `products/dodo-shield/`. This is a real ambiguity. **Recommendation:** leave as-is for now; decide in the Git-phase whether `evidence/dodo-shield/` moves under `products/dodo-shield/evidence/`.
- `scenica` docs are co-located with the product — this is already correct.
- `freelance-rate-calc` and `renewal-tracker` have flat products with in-folder docs — already correct for prototype maturity.

---

## 6. MathPipe Safety Analysis

### 6.1 What depends on the current location
- **Tests (13+ files)**: `benchmark/p5/test_*.py` all do:
  `sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))` → product root → then `from mathpipe.X import ...`.
  Moving `mathpipe/` off the product root breaks every one of these imports.
- **Test subprocess runner**: `benchmark/p5/test_math_in_prose_p8a.py` invokes `python3 benchmark/p5/test_*.py` with `cwd=product-root`. Relative paths are hardcoded.
- **Benchmark run scripts**: `benchmark/p*_run.py` import `mathpipe` modules the same way.
- **App/server**: `server.py`, `app.py`, `converter.py` import `mathpipe.*`.
- **Render pipeline**: `mathpipe/pipeline.py` uses relative intra-package imports (`from .timeouts import ...`, `from . import blocks as B`). Those survive an intra-root move but not a root change.

### 6.2 Import/reference inventory (grep-verified)
| Consumer | Import style | Breaks if `mathpipe/` moves? |
|----------|--------------|------------------------------|
| `benchmark/p5/test_*.py` (13 files) | `sys.path.insert` → product root; `from mathpipe.X import ...` | YES |
| `benchmark/p*_run.py` (p0–p5) | same | YES |
| `converter.py` | `import mathpipe ...` | YES |
| `server.py` / `app.py` | same | YES |
| intra-mathpipe imports | `from . import ...` | NO (package-relative) |

### 6.3 Decision
- **A (leave permanently):** RECOMMENDED for now. Zero risk. Keeps import resolution intact.
- **B (migrate under dedicated task):** Possible only if a future task (a) updates sys.path logic in all 13 tests + all run scripts, (b) updates server/app, (c) re-runs the full P8-A suite (10/10) and P7 regression suites (17+14+13+16+8+4+8) as gate. Not performed in this plan.

---

## 7. Root-Level Migration Plan

Each item: current → proposed → category → reason → risk → dependency check.

### 7.1 Move to `docs/`
| File | Reason | Risk | Dep. check needed? |
|------|--------|------|---------------------|
| `AGENT-RULES.md` | agent policy is global doc | LOW | no |
| `DESIGN-STACK.md` | global design reference | LOW | no |
| `SYSTEM.md` | global system architecture | LOW | no |
| `SKILL-REGISTRY.md` | global skill inventory | LOW | no |
| `PRODUCT-GATES.md` | global process policy | LOW | no |
| `RESEARCH-PROTOCOL.md` | global research method | LOW | no |
| `ZERO-COST-POLICY.md` | global policy | LOW | no |
| `SKILL-SCOUT.md` | global skill docs | LOW | no |
| `ENGINEERING-STACK.md` | global stack reference | LOW | no |

### 7.2 Move to `research/frontend-3d/`
| File | Category | Reason | Risk |
|------|----------|--------|------|
| `Global-Frontend-3D-Skill-Comparison.md` | research | comparative research | LOW |
| `Global-Frontend-Design-3D-Experience-Workflow.md` | research | research workflow | LOW |

### 7.3 Move to `experiments/`
| File | Category | Reason | Risk |
|------|----------|--------|------|
| `3D-IMPLEMENTATION-CHECKLIST.md` | experiment artifact | task-specific checklist, not canonical policy | LOW |

### 7.4 Hold (UNKNOWN)
| File | Status |
|------|--------|
| `prompt-only-access-by-user.txt` | UNKNOWN origin/purpose — requires human review before any decision |

### 7.5 Keep in place
`README.md`, `opencode.json`, `.opencode/`

**Global dependency check:** none of the root `.md` files are imported by code (audit grep confirmed no code references to `research/`, `experiments/`, `decisions/`, or `evidence/` from product Python files). Risk is effectively zero for all root moves.

---

## 8. AI-Agent Save Contract

Canonical rule set (global by default; product-scoped only for mature products):

| Agent produces… | Save to… |
|-----------------|----------|
| Global research / market / competitor research | `research/` |
| Product-specific research (mature product only) | `products/<product>/research/` |
| Architecture proposal / global doc | `docs/` |
| Product architecture / product docs | `products/<product>/docs/` OR flat product folder for prototypes |
| Global decision record | `decisions/<YYYY-MM-DD>-<topic>.md` |
| Product decision | `politique: risk` → for prototypes: `products/<product>/`; for math-pdf-converter: human-approved location |
| Benchmark report / evidence | `products/<product>/benchmark/` (existing home) |
| Validation evidence | `evidence/<product>/` or global `evidence/` |
| Experiment result / exploration | `experiments/` |
| Reusable prompt | `templates/` |
| Reusable AI workflow | `workflows/` |
| Code | **existing safe source location** — never move code as part of report workflow |
| Temporary / scratch analysis | `/tmp` or a clearly marked `scratch/`, NEVER committed |

---

## 9. AI Report Naming Convention

Adopt the pattern already in use successfully by math-pdf-converter:

```
<PHASE>-<TASK>-FINAL.md          (final reports)
<PHASE>-<TASK>-RECON.md / RECON-REPORT.md   (reconnaissance)
<PHASE>-<TASK>-VERIFY.md         (verification)
<PHASE>-<TASK>-RESULTS.md        (results)
```

Examples already present and confirmed working:
- `P8-A-FINAL.md`, `P8-A-VERIFY.md`, `P7D-C-RECON.md`, `F12-RECON-REPORT.md`.

**Rule for future agents:**
- Global reports → `docs/` with a descriptive kebab-case name, e.g. `WORKSPACE-REORGANIZATION-PLAN.md`.
- Product phase reports → keep the existing `<PHASE>-<TASK>-<KIND>.md` convention in the product's benchmark dir.
- Always end "final"/"results" reports with a status line: `Status: ✅ COMPLETE` or `⛔ BLOCKED`.

---

## 10. Research / Evidence / Decision Rules

- **Research:** global research never lives inside a product. Products link out (relative doc links) rather than duplicate.
- **Evidence:** evidence is immutable once validated. Never overwrite an existing evidence file; write a new dated file.
- **Decisions:** a decision needs (a) date in filename, (b) "Decision:", (c) "Context:", (d) "Status:". Follow the existing 7-record format.
- **Retroactive decisions:** if a change is indistinguishable from a decision, record it in `decisions/` after the fact with `Status: retrospective`.

---

## 11. HTML Prototype Rules

- **Never** create `src/`, `tests/`, `benchmark/`, `backend/` for a single-file HTML prototype.
- If a prototype grows a backend (e.g., dodo-shield worker), keep the already-present `worker/` folder — do not rename.
- Add/extend a `README.md` per prototype with: 1-line description, run instructions, pointer to docs/evidence location.
- Keep product docs co-located (scenica is the model to follow over freelance-rate-calc's flat Memory.md).

---

## 12. macOS Artifact Remediation Plan

**Current state:** 4,476 `._*` (AppleDouble) files; `products/math-pdf-converter/.gitignore` already ignores `._*`. Root has no `.gitignore`.

**Determination:**
- Safe to ignore — they are sidecar resource-fork metadata, not source.
- Safe to remove later — `._*` files are never the original file (the real file always exists alongside). Verify with: `find . -name '._*' -size +1k` should return nothing meaningful; originals always co-exist.
- **Order:** clean macOS artifacts AFTER structural migration completes, to avoid confusion during moves (a move that is undone may regenerate them).
- **Regeneration risk:** any future copy/sync from an APFS/HFS volume (e.g., copying from this mounted volume) can regenerate `._*` sidecars. Add `._*` (and `.DS_Store`) to a root `.gitignore` once a global repo exists.

**Plan (future, not now):**
1. Add root `.gitignore` with `._*`, `.DS_Store`, `/__pycache__/`, `*.pyc`, `.env`.
2. Run `find . -name '._*' -delete` and `find . -name '.DS_Store' -delete`.
3. Spot-check: `ls -la products/math-pdf-converter/` should be free of `._*`.
4. Confirm `.gitignore` already ignores them in math-pdf-converter (it does).

---

## 13. Git Architecture Options

**Current state:** no root repo; math-pdf-converter has own repo with 100+ untracked files.

**Option 1 — Monorepo (recommended direction):**
- Pros: single history, cross-product links stable, predictable for agents.
- Cons: math-pdf-converter history is currently separate; a merge rewrites paths.
- Requires: deciding how to import existing math-pdf-converter history (subtree merge vs fresh start).

**Option 2 — Root repo + product submodules:**
- Pros: preserves product independence, keeps history.
- Cons: submodule friction for agents (extra `--recurse-submodules` steps); inconsistent with "predictable for AI agents" goal.

**Option 3 — Keep per-product repos, no root repo:**
- Pros: zero migration.
- Cons: root-level research/decisions/docs remain unversioned; agents can't trust root content provenance.

**What must be decided before implementation (evidence insufficient to decide here):**
- Whether root documents (docs/, decisions/, research/) need version control now.
- Whether a fresh monorepo history is acceptable vs history preservation.
- Where benchmark JSON results and generated DOCX outputs should live (tracked vs ignored).

---

## 14. Migration Dependency Matrix

| Proposed move | Risk | Dependencies to check before acting |
|---------------|------|--------------------------------------|
| Root `.md` → `docs/` | LOW | none (grep-verified no imports) |
| `Global-Frontend-*.md` → `research/frontend-3d/` | LOW | none |
| `3D-IMPLEMENTATION-CHECKLIST.md` → `experiments/` | LOW | none |
| Product docs `*.md` → `products/math-pdf-converter/docs/` | LOW | none for code; check none of the product docs cross-reference each other by relative path |
| `benchmark/p5/test_*.py` → `tests/` | **HIGH** | sys.path resolution in every test; P8-A subprocess runner paths `benchmark/p5/test_*`; run.sh/CI if exists |
| `mathpipe/` → `src/` | **HIGH** | all import consumers listed in Section 6.2 |
| Init global git repo | MEDIUM | decide monorepo vs submodules first (Section 13) |
| Delete `._*` files | LOW | verify originals co-exist first |
| Move `evidence/dodo-shield/` → product | MEDIUM | cross-links in `decisions/*dodo-shield*`; git status of untracked files |

---

## 15. Migration Phases

```
PHASE 0 — Freeze
──────────────
- Confirm no active conversion/research tasks that would collide with moves.
- Record baseline `git status` snapshots for products that have repos.
- Human approval gate: review Sections 7.4 (UNKNOWN file) and 13 (Git).

PHASE 1 — Canonical documentation locations
──────────────
- `docs/` already exists.
- Create `research/frontend-3d/` (empty) and `experiments/` placeholder README update (optional).
- Move root markdown docs → `docs/` (9 files, Section 7.1).
- Move 2 Global-Frontend files → `research/frontend-3d/`.
- Move `3D-IMPLEMENTATION-CHECKLIST.md` → `experiments/`.
- Verify: `ls` at root should show only README.md, opencode.json, .opencode/, dirs.
- RISK: LOW. Rollback = trivial `mv` back.

PHASE 2 — Product documentation organization (LOW risk)
──────────────
- (Optional, human-approved) create `products/math-pdf-converter/docs/`; move AUDIT.md, RESEARCH.md, MASTER-IMPLEMENTATION-PLAN.md, PRICING.md, DEPLOY_NOTES.md.
- Do NOT touch mathpipe/, converter.py, tests, benchmark scripts.
- Verify all P7/P8 suites still pass (they should — zero code touched).
- RISK: LOW.

PHASE 3 — Research organization
──────────────
- Review `research/ideas/` naming (`.md` vs folder pairs) for agent predictability.
- No automated action; human-in-the-loop classification only.
- RISK: LOW.

PHASE 4 — Benchmark/evidence structure
──────────────
- math-pdf-converter benchmark stays in place (working system).
- Decide (human) whether `evidence/dodo-shield/` merges into `products/dodo-shield/`.
- RISK: MEDIUM (only if moved).

PHASE 5 — macOS artifact cleanup
──────────────
- AFTER all structural moves, delete `._*` + `.DS_Store` (Section 12).
- RISK: LOW.

PHASE 6 — Git boundary review
──────────────
- Decide Option 1/2/3 (Section 13).
- If monorepo: add root `.gitignore` (Section 12 list), commit root docs/decisions/research.
- Handle math-pdf-converter untracked files (100+) deliberately.
- RISK: MEDIUM (architecture decision, not file risk).

PHASE 7 — Final architecture verification
──────────────
- Re-run full P8-A suite (expect 10/10), P7D-A, and all regression suites.
- Confirm root tree matches Section 3.
- Confirm zero `._*` files remain.
- Confirm git status is clean/expected.
```

**Phase ordering rule:** never run Phase 2's product-doc move before Phase 1; never run Phase 5 before Phase 2. Phase 4 and 6 are decision-gated, not mechanical.

---

## 16. Rollback Strategy

- Every migration is implemented as **pure `mv` of whole files, one phase at a time**, so rollback is symmetric `mv`.
- Before each phase: capture file listing (`ls` snapshot) into a dated scratch note.
- Phase 1 rollback: `mv docs/X.md .` for each moved file.
- Phase 2 rollback: `mv products/<p>/docs/X.md products/<p>/` .
- Phase 5 rollback: n/a (deletions of `._*` are safe; originals intact).
- No phase touches `mathpipe/`, `converter.py`, or test code, so the primary rollback risk (broken product) does not arise.
- **Highest-risk action in the entire plan is explicitly deferred** (mathpipe move — Section 6 option B), giving us a zero-code-touch guarantee for all executed phases.

---

## 17. Verification Checklist

After each phase:

- [ ] Root `ls` matches expected tree (Section 3).
- [ ] `find . -name '._*'` count stable or decreasing (0 by end of Phase 5).
- [ ] `python3 benchmark/p5/test_apply_scripts_p7d.py` → 4/4 PASS (unchanged behavior).
- [ ] `python3 benchmark/p5/test_math_in_prose_p8a.py` → 10/10 PASS with all P7 regressions green.
- [ ] No Python file, no `mathpipe/`, no `.gitignore`, no `opencode.json` modified or moved.
- [ ] No credential value printed, logged, or written anywhere.

---

## 18. Open Decisions Requiring Human Approval

1. **`prompt-only-access-by-user.txt`** — origin and disposition (keep/delete/relocate). Currently UNKNOWN.
2. **Global git repo vs per-product repos** (Section 13) — monorepo, submodules, or none.
3. **math-pdf-converter's 100+ untracked files** — which become tracked, which stay ignored.
4. **`evidence/dodo-shield/` relocation** — merge into product or leave.
5. **mathpipe migration (option B)** — accept permanently as-is, or schedule a dedicated migration task with full test gates.
6. **Benchmark JSON outputs** — tracked (reproducibility) vs ignored (churn).
7. **`research/ideas/` pruning** — archive stale ideas vs keep everything.

---

## 19. Recommended Next Task

Execute **Phase 1 (root cleanup)** as the first implementation:

1. `mkdir -p research/frontend-3d`
2. Move the 9 root docs → `docs/` (list in 7.1).
3. Move 2 Global-Frontend files → `research/frontend-3d/`.
4. Move `3D-IMPLEMENTATION-CHECKLIST.md` → `experiments/`.
5. Leave `prompt-only-access-by-user.txt` pending decision #1.
6. Run the Phase 1 verification checklist.

This is the lowest-risk, highest-clarity first step: it touches zero code, breaks zero imports, and immediately restores root-level predictability. MathPipe, tests, production, and all credentials remain untouched.