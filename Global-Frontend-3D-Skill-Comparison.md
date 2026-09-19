# Global Frontend 3D Skill Comparison

Inspected 2026-09-14. Source → Capabilities → Overlap → License → Recommendation.

---

## 1. Agentic Awesome — 3d-web-experience

**Source**: `github.com/sickn33/agentic-awesome-skills` → `skills/3d-web-experience/SKILL.md`
**License**: Repo MIT; skill declares `source: vibeship-spawner-skills (Apache 2.0)`
**Files**: SKILL.md only (single file, no bundles/assets)

### Capabilities
- 3D stack selection decision tree (Spline → R3F → Three.js vanilla → Babylon.js)
- Spline integration (fastest start)
- React Three Fiber patterns (Canvas, useGLTF, OrbitControls)
- 3D model pipeline (format selection, optimization, GLB/GLTF compression via gltf-transform)
- Scroll-driven 3D (R3F ScrollControls, GSAP + Three.js)
- Performance optimization (instancing, LOD, DPR cap, mobile detection, fallback)
- Anti-patterns (3D for 3D's sake, desktop-only, no loading state)
- Validation checks (5 items: loading indicator, WebGL fallback, model compression, OrbitControls scroll, mobile DPR)
- Collaboration/delegation triggers

### Quality
High. Well-structured patterns with code examples, decision trees, performance targets, and validation checks. Covers the full pipeline from stack selection through optimization.

### Recommendation
**INSTALL** — primary 3D web experience skill.

---

## 2. Agentic Awesome — scroll-experience

**Source**: `github.com/sickn33/agentic-awesome-skills` → `skills/scroll-experience/`
**License**: Repo MIT; skill declares `source: vibeship-spawner-skills (Apache 2.0)`
**Files**: SKILL.md + `references/detailed-guide.md` (comprehensive reference)

### Capabilities
- Scroll animation stack comparison (GSAP ScrollTrigger, Framer Motion, Locomotive, Lenis, CSS scroll-timeline)
- Parallax storytelling (layer speeds, depth creation, story beats)
- Sticky sections (CSS sticky, GSAP pin, horizontal scroll)
- Performance optimization (60fps rule, GPU-friendly properties, lazy loading, mobile considerations)
- Accessibility (reduced motion, content-first, keyboard navigation, screen readers)
- Sharp edges / validation checks (scroll jank, mobile parallax, accessibility, content hiding)
- Collaboration/delegation triggers

### Quality
Very high. The detailed guide is extensive (~500 lines) covering real-world patterns, mobile fixes, iOS-specific issues, and accessibility. Strong anti-pattern guidance.

### Overlap with 3d-web-experience
Minimal. Scroll-experience focuses on 2D scroll choreography (parallax, sticky, reveals). 3d-web-experience covers scroll-driven 3D (R3F ScrollControls, GSAP + Three.js camera). Complementary, not duplicate.

### Recommendation
**INSTALL** — scroll choreography is a distinct capability from 3D.

---

## 3. Agentic Awesome — premium-3d-website

**Source**: `github.com/sickn33/agentic-awesome-skills` → `skills/premium-3d-website/SKILL.md`
**License**: Repo MIT; skill declares `source: self` (author: Rsmiyani). No explicit skill-level license file.
**Files**: SKILL.md only

### Capabilities
- Custom GLSL shader materials (liquid/wavy effects)
- Post-processing pipeline (EffectComposer, Bloom, DepthOfField, Vignette)
- Physics-based interactions (Cannon.js, Rapier, spring animations)
- Interactive preloaders
- DPR capping, antialiasing management
- Best practices (bake AO/lighting, instance rendering, Draco compression)

### Quality
Good. More advanced/specialized than 3d-web-experience. Focuses on premium visual effects (shaders, post-processing, physics) rather than general 3D pipeline.

### Overlap with 3d-web-experience
Some overlap on performance and loading. Premium-3d-website adds shaders, post-processing, and physics — capabilities not in 3d-web-experience. Complementary for advanced use cases.

### Recommendation
**REFERENCE ONLY** — do not install as primary skill. Useful for advanced shader/post-processing patterns, but the lab's 3D needs are better served by 3d-web-experience + scroll-experience. Could be installed later if a product genuinely needs custom GLSL shaders.

---

## 4. Happycapy — 3d-web-experience

**Source**: `github.com/happycapy-ai/Happycapy-skills` → `skills/3d-web-experience/`
**License**: Repo MIT; skill declares `source: vibeship-spawner-skills (Apache 2.0)`
**Files**: SKILL.md + README.md

### Capabilities
Identical to Agentic Awesome 3d-web-experience. Same patterns, same code examples, same structure. The README is a summary of the SKILL.md content.

### Overlap with Agentic Awesome 3d-web-experience
Near-total duplicate. Both derive from the same `vibeship-spawner-skills` source. Happycapy version is missing the validation checks and collaboration triggers that Agentic Awesome includes.

### Recommendation
**DO NOT INSTALL** — Agentic Awesome version is more complete (includes validation checks and delegation triggers). Happycapy version adds nothing new.

---

## 5. MCP Market — 3D Web Experience

**Source**: `mcpmarket.com/tools/skills/3d-web-experience`
**License**: Apache 2.0 (attributed to vibeship-spawner-skills)
**Author**: claudiodearaujo

### Findings
This is a marketplace listing, not a separate skill. It presents the same `vibeship-spawner-skills` content with the same SKILL.md structure. The MCP Market page provides additional context (use cases, key features summary) but the underlying skill is identical.

### Recommendation
**DO NOT INSTALL** — marketplace duplicate of the same source. Refer to the MCP Market listing for documentation if needed, but no separate installation required.

---

## Selection Decision

| Skill | Action | Reason |
|---|---|---|
| `3d-web-experience` (Agentic Awesome) | **INSTALL** | Primary 3D skill. Most complete version with validation checks. |
| `scroll-experience` (Agentic Awesome) | **INSTALL** | Distinct scroll choreography capability. Detailed guide included. |
| `premium-3d-website` (Agentic Awesome) | **REFERENCE ONLY** | Advanced shaders/post-processing. Not needed for standard 3D. |
| `3d-web-experience` (Happycapy) | **DO NOT INSTALL** | Duplicate of Agentic Awesome version (less complete). |
| 3D Web Experience (MCP Market) | **DO NOT INSTALL** | Marketplace listing of same source. |

**Selected set**: 2 skills installed, 1 reference, 2 rejected.
**Principle**: maximum capability with minimum duplication.

---

## License Verification

| Skill | Repo License | Skill Source License | SKILL.md Copy OK? | Assets/Code License |
|---|---|---|---|---|
| `3d-web-experience` (Agentic Awesome) | MIT | Apache 2.0 (vibeship-spawner-skills) | Yes — MIT repo, Apache skill | Code examples in SKILL.md are illustrative, not bundled dependencies |
| `scroll-experience` (Agentic Awesome) | MIT | Apache 2.0 (vibeship-spawner-skills) | Yes — MIT repo, Apache skill | Code examples in SKILL.md + references/detailed-guide.md are illustrative |
| `premium-3d-website` (Agentic Awesome) | MIT | Self (no explicit license in SKILL.md) | Yes — MIT repo covers file copying | Code examples are illustrative |

Both Apache 2.0 and MIT permit copying SKILL.md into `.opencode/skills/`. No bundled assets, binaries, or proprietary code detected. All code examples are inline illustrative snippets, not executable dependencies.
