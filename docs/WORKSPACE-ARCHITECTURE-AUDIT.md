# Workspace Architecture Audit

## Executive Summary

The zero-cost-product-lab is a flat, loosely organized workspace containing 5 products, global research, and AI agent infrastructure. It works today but has zero discoverability for new agents. The math-pdf-converter product has grown large (150+ untracked files) without any structural conventions. There is no global git repo — only math-pdf-converter has a git repo.

**Key problems:**
- Root is cluttered with docs that belong in subdirectories
- No global git repo
- 4,476 macOS `._*` artifacts everywhere (not tracked, but noisy)
- Product structure is inconsistent — some use flat files, some use subdirectories
- Benchmark reports are deep in `products/math-pdf-converter/benchmark/` — not discoverable
- No docs/ at root (we just created it)
- research/ideas/ has 80+ product ideas, some corresponding to actual products in products/

**Verdict:** The proposed target structure (from the task) is close to right but needs minor adjustments.

---

## 1. Current Structure

```
zero-cost-product-lab/
├── .opencode/              # OpenCode config + skills (KEEP)
├── opencode.json           # OpenCode config (KEEP)
├── README.md               # Lab README
├── AGENT-RULES.md          # Agent behavior rules
├── DESIGN-STACK.md         # Design system reference
├── SYSTEM.md               # System architecture doc
├── SKILL-REGISTRY.md       # AI skill registry
├── PRODUCT-GATES.md        # Product gates
├── RESEARCH-PROTOCOL.md    # Research methodology
├── ZERO-COST-POLICY.md     # Cost policy
├── 3D-IMPLEMENTATION-CHECKLIST.md  # 3D checklist
├── Global-Frontend-3D-Skill-Comparison.md
├── Global-Frontend-Design-3D-Experience-Workflow.md
├── SKILL-SCOUT.md
├── ENGINEERING-STACK.md
├── prompt-only-access-by-user.txt
├── decisions/              # 7 dated decision records
├── evidence/               # dodo-shield evidence only
├── experiments/            # Empty (just README)
├── products/               # 5 products
│   ├── math-pdf-converter/ # Active, has git repo
│   ├── dodo-shield/        # HTML/worker project
│   ├── freelance-rate-calc/ # HTML project
│   ├── renewal-tracker/    # HTML project
│   └── scenica/            # Design doc + HTML
├── research/               # Global research (80+ ideas, benchmarks)
├── templates/              # AI prompt templates
└── workflows/              # AI workflow docs
```

### Root-Level Files (what's there now)

| File | Classification |
|------|---------------|
| README.md | A — Must remain |
| AGENT-RULES.md | D — Should move to docs/ |
| DESIGN-STACK.md | D — Should move to docs/ |
| SYSTEM.md | D — Should move to docs/ |
| SKILL-REGISTRY.md | D — Should move to docs/ |
| PRODUCT-GATES.md | D — Should move to docs/ |
| RESEARCH-PROTOCOL.md | D — Should move to docs/ |
| ZERO-COST-POLICY.md | D — Should move to docs/ |
| 3D-IMPLEMENTATION-CHECKLIST.md | F — Experiment/task, move to experiments/ |
| Global-Frontend-3D-Skill-Comparison.md | E — Research, move to research/ |
| Global-Frontend-Design-3D-Experience-Workflow.md | E — Research, move to research/ |
| SKILL-SCOUT.md | D — Should move to docs/ |
| ENGINEERING-STACK.md | D — Should move to docs/ |
| prompt-only-access-by-user.txt | I — Unknown/temporary |
| opencode.json | A — Must remain |
| .opencode/ | A — Must remain |

---

## 2. Product Boundaries

### Products that actually exist

| Product | Status | Has Git | Has Source | Has Docs | Has Tests |
|---------|--------|---------|------------|----------|-----------|
| math-pdf-converter | **Active** | Yes | Yes (mathpipe/, converter.py) | Yes (benchmark/) | Yes (benchmark/p5/) |
| dodo-shield | Draft | No | HTML + worker | evidence/dodo-shield/ | No |
| freelance-rate-calc | Draft | No | index.html | Memory.md | No |
| renewal-tracker | Draft | No | index.html | PRD.md, Design.md | No |
| scenica | Draft | No | design docs + HTML | Yes (extensive) | No |

**math-pdf-converter is the only product with real code.** The others are HTML prototypes or design docs.

### Where product-specific material lives

- **math-pdf-converter**: `products/math-pdf-converter/` (self-contained, has its own git)
- **dodo-shield**: `products/dodo-shield/` + `evidence/dodo-shield/` + `decisions/*dodo-shield*`
- **scenica**: `products/scenica/` + `research/ideas/scenica/`
- **freelance-rate-calc**: `products/freelance-rate-calc/` + `research/ideas/freelance-rate-calc.md`
- **renewal-tracker**: `products/renewal-tracker/` + `research/ideas/t3-saas-renewal-tracker/`

---

## 3. Math PDF → DOCX Project Deep Dive

This is the most complex product. Here's where everything lives:

| What | Current Location |
|------|-----------------|
| Source code | `products/math-pdf-converter/mathpipe/*.py` + `converter.py` |
| Web server | `products/math-pdf-converter/server.py`, `app.py` |
| Tests | `products/math-pdf-converter/benchmark/p5/test_*.py` |
| Benchmark reports | `products/math-pdf-converter/benchmark/*.md` (30+ reports) |
| Benchmark data | `products/math-pdf-converter/benchmark/p5/*.json` |
| Benchmark scripts | `products/math-pdf-converter/benchmark/p*_run.py` |
| Test corpus PDFs | `products/math-pdf-converter/benchmark/corpus/` |
| Test inputs | `products/math-pdf-converter/benchmark/inputs/` |
| Golden set | `products/math-pdf-converter/benchmark/golden_math/` |
| Architecture docs | `products/math-pdf-converter/AUDIT.md`, `MASTER-IMPLEMENTATION-PLAN.md`, `RESEARCH.md` |
| Deploy config | `products/math-pdf-converter/render.yaml`, `Dockerfile` |
| Pricing | `products/math-pdf-converter/PRICING.md` |
| Economics | `products/math-pdf-converter/econ/` |

**Problems:**
- Tests live inside `benchmark/` not `tests/`
- Benchmark reports mixed with benchmark scripts and data
- Architecture docs (AUDIT.md, RESEARCH.md) at product root, not in docs/
- `converter.py` is 153KB — single massive file

---

## 4. Duplication

- `._*` macOS artifacts: 4,476 files across the workspace. Not tracked by git but pollute directory listings.
- `products/math-pdf-converter/` has `._*` copies of every file (40+ per directory)
- Root-level `Global-Frontend-*.md` files are research that belongs in `research/`
- `evidence/dodo-shield/` has `._*` copies of all its markdown files

---

## 5. AI Agent Output Contract

### Where agents should save things (proposed)

| What | Global | Product-specific |
|------|--------|-----------------|
| Research report | `research/` | `products/<product>/research/` |
| Architecture proposal | `docs/` | `products/<product>/docs/` |
| Benchmark report | — | `products/<product>/benchmark/` |
| Test result | — | `products/<product>/tests/` |
| Decision | `decisions/` | `products/<product>/decisions/` |
| Experiment result | `experiments/` | — |
| Reusable prompt | `templates/` | — |
| Workflow | `workflows/` | — |
| Product documentation | — | `products/<product>/docs/` |
| Code | — | `products/<product>/src/` |

---

## 6. Git / Version Control

- **No global git repo** — only `products/math-pdf-converter/` has one
- math-pdf-converter git: modified `converter.py`, 100+ untracked files (benchmark reports, tests, docs)
- `.gitignore` covers: `__pycache__/`, `*.pyc`, `*.docx`, `uploads/`, `outputs/`, `venv/`, `.env`, `._*`, `.DS_Store`
- **Missing from .gitignore**: `*.json` benchmark results, `benchmark/p*/` intermediate outputs, `benchmark/forensics/`, `benchmark/h2h/`

---

## 7. Proposed Canonical Structure

```
zero-cost-product-lab/
├── .opencode/                    # OpenCode config (KEEP)
├── opencode.json                 # OpenCode config (KEEP)
├── README.md                     # Lab README
├── docs/                         # Global documentation
│   ├── AGENT-RULES.md
│   ├── DESIGN-STACK.md
│   ├── SYSTEM.md
│   ├── SKILL-REGISTRY.md
│   ├── PRODUCT-GATES.md
│   ├── RESEARCH-PROTOCOL.md
│   ├── ZERO-COST-POLICY.md
│   ├── SKILL-SCOUT.md
│   ├── ENGINEERING-STACK.md
│   └── WORKSPACE-ARCHITECTURE-AUDIT.md  # This file
├── research/                     # Global research (keep as-is)
├── experiments/                  # Experiments (keep as-is)
├── decisions/                    # Decisions (keep as-is)
├── evidence/                     # Evidence (keep as-is)
├── templates/                    # AI prompts (keep as-is)
├── workflows/                    # AI workflows (keep as-is)
└── products/
    ├── math-pdf-converter/
    │   ├── src/                  # Source code (move from root)
    │   │   ├── mathpipe/
    │   │   └── converter.py
    │   ├── tests/                # Tests (move from benchmark/p5/)
    │   ├── benchmark/            # Benchmark reports + data (keep as-is)
    │   ├── docs/                 # Product docs (move from root)
    │   │   ├── AUDIT.md
    │   │   ├── RESEARCH.md
    │   │   ├── MASTER-IMPLEMENTATION-PLAN.md
    │   │   ├── PRICING.md
    │   │   └── DEPLOY_NOTES.md
    │   ├── econ/                 # Economics (keep as-is)
    │   ├── server.py             # Web server (keep as-is)
    │   ├── app.py                # Web app (keep as-is)
    │   ├── render.yaml           # Deploy config (keep as-is)
    │   ├── Dockerfile            # Docker config (keep as-is)
    │   └── README.md             # Product README
    ├── dodo-shield/
    │   ├── src/                  # Source (HTML + worker)
    │   └── docs/                 # Design docs
    ├── freelance-rate-calc/
    │   ├── src/                  # Source (HTML)
    │   └── docs/                 # Docs
    ├── renewal-tracker/
    │   ├── src/                  # Source (HTML)
    │   └── docs/                 # PRD, Design, etc.
    └── scenica/
        ├── src/                  # Source (HTML)
        └── docs/                 # Design docs
```

---

## 8. Migration Plan

### Phase 1: Root cleanup (no code changes)
1. Create `docs/` at root (done)
2. Move root-level `.md` docs to `docs/`
3. Move `Global-Frontend-*.md` to `research/`
4. Move `3D-IMPLEMENTATION-CHECKLIST.md` to `experiments/`

### Phase 2: math-pdf-converter restructure
1. Create `products/math-pdf-converter/src/` and move `mathpipe/` + `converter.py` into it
2. Create `products/math-pdf-converter/tests/` and move `benchmark/p5/test_*.py` into it
3. Create `products/math-pdf-converter/docs/` and move `AUDIT.md`, `RESEARCH.md`, `MASTER-IMPLEMENTATION-PLAN.md`, `PRICING.md`, `DEPLOY_NOTES.md` into it
4. Update imports in `tests/` to reflect new paths

### Phase 3: Git setup
1. Initialize global git repo at root
2. Add `.gitignore` at root (ignore `._*`, `.DS_Store`, `__pycache__/`, `*.pyc`)
3. Add math-pdf-converter as submodule OR restructure to monorepo

### Phase 4: macOS cleanup
1. Run `find . -name "._*" -delete` to remove all AppleDouble files
2. Add `._*` to global `.gitignore`

---

## 9. Migration Risk Matrix

| Move | Risk | Notes |
|------|------|-------|
| Root .md → docs/ | Low | No code references them |
| Global-Frontend-*.md → research/ | Low | No code references them |
| mathpipe/ → src/mathpipe/ | **Medium** | Tests import from `mathpipe` — need to update PYTHONPATH or imports |
| test_*.py → tests/ | **Medium** | Same import issue |
| AUDIT.md → docs/ | Low | No code references it |
| Add global git | Low | New repo, no conflicts |
| Remove ._* files | Low | Not tracked by git |

**Highest risk:** Moving `mathpipe/` breaks test imports. Must update `sys.path.insert` in all test files, or use a proper package setup.

---

## 10. Open Questions

1. Should math-pdf-converter stay as its own git repo, or become part of a monorepo?
2. Should we adopt `src/` layout for all products, or keep flat for simple ones?
3. Do we need a global `requirements.txt` or `pyproject.toml`?
4. Should benchmark reports be version-controlled (currently untracked)?
5. How do we handle the 80+ product ideas in `research/ideas/` — keep as archive or prune?

---

## 11. Recommended Next Task

**Start with Phase 1 (root cleanup)** — zero risk, immediate clarity. Move the 10+ root-level docs to `docs/` and the 2 research files to `research/`. This alone will reduce root clutter from 20+ items to ~5.
