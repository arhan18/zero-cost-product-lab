# 3D IMPLEMENTATION CHECKLIST

Derived execution checklist for the Product Lab. Agents must follow this when implementing any 3D, pseudo-3D, scroll-driven, or cinematic web experience.

Sources: `.opencode/skills/3d-web-experience/SKILL.md`, `.opencode/skills/scroll-experience/SKILL.md`, `.opencode/skills/scroll-experience/references/detailed-guide.md`, `Global-Frontend-Design-3D-Experience-Workflow.md`.

---

## A. BEFORE IMPLEMENTATION

- [ ] **3D justified?** Does the product genuinely benefit from 3D? Ask: "Does 3D materially improve understanding, emotion, interaction, or product demonstration?" If no → use CSS/SVG/video/frame sequences.
- [ ] **TRUE 3D vs PSEUDO-3D?** Decide explicitly. Do not build true WebGL if CSS, SVG, video, or frame sequences deliver the same perceived result.
- [ ] **Simplest viable medium chosen?** CSS 3D → SVG → DOM/layered imagery → Frame sequence → Video → Three.js/R3F → Spline. Pick cheapest capable option.
- [ ] **Interaction requirements defined?** Spatial interaction needed? Camera movement? Object manipulation? Configurator? Or just visual depth?
- [ ] **Device requirements defined?** Desktop/tablet/mobile/reduced-motion all considered?
- [ ] **Performance expectations set?** Target FPS and triangle budget per device class (see §11).
- [ ] **Asset requirements assessed?** Need custom 3D models? Existing open-source assets? AI-generated? Spline scene?
- [ ] **Browser support confirmed?** WebGL support needed? Fallback for non-WebGL devices?
- [ ] **Accessibility/reduced-motion planned?** `prefers-reduced-motion` handling defined before implementation starts.
- [ ] **Scroll choreography needed?** If yes → load scroll-experience skill and follow §7.
- [ ] **Existing sources checked?** Can installed skills, MCPs, or open-source components solve the problem?
- [ ] **License verified?** Any external asset/code source checked for license, attribution, commercial-use permission, redistribution restrictions.

---

## B. SOURCE + ASSET RESEARCH

- [ ] **Official documentation consulted** for chosen stack (Three.js docs, R3F docs, Spline docs, GSAP docs).
- [ ] **Open-source implementations inspected** for similar use cases.
- [ ] **Asset repositories searched** in priority order:
  1. Existing project assets
  2. Free 3D libraries
  3. Spline free library
  4. Poly Haven / CC0
  5. Khronos / glTF sample assets (check individual model license)
  6. Sketchfab (CHECK individual model license)
  7. AI-generated (verify tool/license permits commercial use)
- [ ] **License verified per asset.** Do not assume repository license covers every asset inside it.
- [ ] **Attribution requirements documented.**
- [ ] **Dependencies reviewed.** No paid APIs, no restricted packages.
- [ ] **Direct source integration used** where legally permitted. Copy/integrate first → run → review → customize. Do NOT rebuild from scratch before testing original.
- [ ] **Research rule followed.** If uncertain about any technology, library, format, or technique → research 5–10 independent sources before implementing. DO NOT GUESS.

---

## C. 3D ASSET PIPELINE

```
SOURCE / GENERATE
→ GLB / GLTF
→ INSPECT
→ OPTIMIZE
→ COMPRESS
→ LOAD
→ TEST
```

- [ ] **Format correct.** GLB/GLTF preferred for web (smallest size). FBX/OBJ/USDZ only when required by source tool.
- [ ] **Geometry inspected.** Poly count < 100K for web. Reduce unnecessary geometry.
- [ ] **Materials optimized.** Bake textures where possible. Combine materials.
- [ ] **Textures compressed.** WebP or compressed format. Texture size appropriate for web.
- [ ] **Compression applied.** Draco or Meshopt via gltf-transform where appropriate.
- [ ] **File size acceptable.** < 5MB ideal for individual models.
- [ ] **Loading tested.** Model loads without errors. Loading progress visible.
- [ ] **Multiple assets checked for cumulative load.** Total 3D asset budget considered.

---

## D. SCENE ARCHITECTURE

- [ ] **Scene setup clean.** Single scene or properly managed multiple scenes.
- [ ] **Camera configured.** Appropriate FOV, position, responsive resize handling.
- [ ] **Lights minimal.** Ambient + one directional preferred. No excessive light sources.
- [ ] **Materials appropriate.** Not overusing PBR where simple materials suffice.
- [ ] **Environment considered.** Background, fog, environment map — only if materially improving.
- [ ] **Object hierarchy organized.** Groups, naming, no orphaned objects.
- [ ] **Responsive camera.** Camera adapts to viewport size changes.
- [ ] **Object scaling.** Objects scale appropriately across viewports.
- [ ] **Scene cleanup/disposal.** Geometry, materials, textures disposed on unmount. No memory leaks.
- [ ] **Lifecycle management.** Scene initializes, pauses, resumes, and destroys properly.
- [ ] **Animation architecture planned.** Keyframes, timelines, or procedural — defined before coding.

---

## E. INTERACTION

### Pointer interaction
- [ ] **Mouse tracking intentional.** Subtle parallax, light movement, or object rotation — not every element chasing cursor.
- [ ] **Pointer response restrained.** Aim for "subtle spatial presence," not gimmick.
- [ ] **Camera parallax justified** if used. Adds depth perception or just noise?
- [ ] **Object response to pointer** is smooth, not jerky. Uses lerp/spring, not raw position.
- [ ] **Lighting response** to pointer (if any) is subtle and performance-safe.

### Scroll interaction
- [ ] **Scroll progress mapped** to animation timeline. Normalized 0→1 progress used.
- [ ] **Pinned sections** only where narrative requires it. Pin duration justified.
- [ ] **Scrub behavior** links animation to scroll position (not time-based).
- [ ] **Timeline appropriate** to content length. Not too long, not too short.
- [ ] **ScrollTrigger or R3F ScrollControls** used correctly per stack choice.
- [ ] **No scroll hijacking.** Users scroll naturally. Animations respond to scroll, not override it.

### State interaction
- [ ] **Hover states** smooth and intentional.
- [ ] **Click/tap interactions** have clear feedback.
- [ ] **Drag interactions** (if any) have bounds and momentum.
- [ ] **Toggle/play-pause** controls exist for continuous animations.
- [ ] **Scene transitions** are smooth, not jarring.

> **Do not make every element chase the cursor.**

---

## F. SCROLL EXPERIENCE CHECKLIST

Derived from `scroll-experience` skill.

- [ ] **Narrative intent defined.** Story beats planned: Hook → Context → Journey → Climax → Resolution.
- [ ] **Natural scrolling preserved.** Users scroll at their own pace. Animations respond to scroll, not fight it.
- [ ] **Pinning deliberate.** Pinned sections have clear narrative purpose. Duration proportional to content.
- [ ] **Progress mapping correct.** Scroll position maps cleanly to animation progress.
- [ ] **Scrub behavior confirmed.** Animation pauses when user pauses scrolling.
- [ ] **Section transitions smooth.** Visual continuity between sections. No jarring jumps.
- [ ] **Stage progression clear.** User understands where they are in the story.
- [ ] **Mobile degradation planned.** Reduced parallax, fewer layers, simpler animations on mobile.
- [ ] **Reduced motion handled.** Animations disabled or minimized when `prefers-reduced-motion: reduce`.
- [ ] **No scroll hijacking.** Navigation still works. User can exit at any point. Skip links available.
- [ ] **GPU-friendly properties used.** Animate `transform` and `opacity` only. Avoid `width`, `height`, `top`, `left`, `margin`, `padding`.
- [ ] **Scroll events throttled.** Use `requestAnimationFrame` or GSAP (handles automatically).
- [ ] **Content accessible without animation.** Key message visible without scrolling. CTA accessible.

**Final test**: Can the user experience the section naturally without the animation fighting the browser's scroll behavior?

---

## G. CINEMATIC EXPERIENCE

- [ ] **Composition intentional.** Rule of thirds, leading lines, visual hierarchy in 3D space.
- [ ] **Camera movement purposeful.** Camera path tells a story or reveals information. Not random.
- [ ] **Depth created.** Foreground/midground/background layers. Atmospheric perspective.
- [ ] **Lighting atmospheric.** Lighting supports mood and hierarchy. Not flat, not excessive.
- [ ] **Atmosphere considered.** Fog, particles, environment — only where adding emotional weight.
- [ ] **Pacing appropriate.** Not too fast (user can't follow), not too slow (user gets bored).
- [ ] **Transitions smooth.** Between scenes/sections. No hard cuts unless intentional.
- [ ] **Visual hierarchy clear.** User knows where to look. Focal point defined.
- [ ] **Interaction restrained.** Every interactive element earns its complexity.
- [ ] **Motion communicates product.** The motion serves the product's message, not just visual spectacle.

> Do not equate "more effects" with higher quality.

---

## H. POST-PROCESSING

- [ ] **Post-processing actually needed?** Default: no. Only add when materially improving result.
- [ ] **Bloom justified?** Adds glow/haze that serves the design? Or just looks "cool"?
- [ ] **DOF justified?** Focus hierarchy needed? Or just adding blur?
- [ ] **AO justified?** Contact shadows add realism? Or just GPU cost?
- [ ] **Color grading justified?** Mood/atmosphere that can't be achieved with materials?
- [ ] **Grain/distortion justified?** Cinematic quality that serves the experience?
- [ ] **GPU cost measured?** Each effect has measurable cost. Total must be acceptable.
- [ ] **Mobile fallback defined.** Reduce or disable post-processing on mobile/low-end.
- [ ] **Reduced-motion behavior defined.** Post-processing effects respect reduced motion preference.

Every effect must earn its GPU cost.

---

## I. LOADING EXPERIENCE

- [ ] **Preloader implemented.** Visual loading state present before 3D scene is ready.
- [ ] **Loading progress shown** where meaningful (multiple heavy assets).
- [ ] **Poster/static fallback** shown while 3D loads. Not blank canvas.
- [ ] **Initialization state** handled. Scene warming up, not showing black screen.
- [ ] **Failure state** handled. WebGL not supported? Asset failed to load? Graceful fallback.
- [ ] **No blank WebGL canvas** at any point during loading.
- [ ] **No layout shift** where avoidable. 3D container sized before content loads.
- [ ] **Scene starts only when appropriate.** After page interactive, not blocking initial render.

---

## J. PERFORMANCE

- [ ] **Bundle size acceptable.** Three.js/R3F dependency cost justified.
- [ ] **3D asset size within budget.** Individual models < 5MB. Total 3D assets within network budget.
- [ ] **Geometry count within targets.**

| Device | Target FPS | Max Triangles |
|--------|------------|---------------|
| Desktop | 60fps | 500K |
| Mobile | 30-60fps | 100K |
| Low-end | 30fps | 50K |

- [ ] **Draw calls minimal.** Instancing used for repeated objects. Merged geometries where possible.
- [ ] **Texture memory controlled.** Compressed textures. Appropriate resolution. No 4K textures on mobile.
- [ ] **DPR capped.** `Math.min(window.devicePixelRatio, 2)` — lower on mobile.
- [ ] **Shader complexity appropriate.** No unnecessary uniform calculations. No expensive fragment shaders without justification.
- [ ] **Post-processing cost measured** (see §H).
- [ ] **Animation cost controlled.** Animations using transform/opacity only. No layout-triggering properties.
- [ ] **CPU usage acceptable.** No heavy JS on scroll. No expensive per-frame calculations.
- [ ] **GPU usage acceptable.** No excessive overdraw. No expensive render passes without justification.
- [ ] **Mobile thermals considered.** Continuous animation won't drain battery/cause overheating.
- [ ] **Network budget considered.** 3D assets lazy-loaded or prioritized appropriately.
- [ ] **Initialization time acceptable.** Scene ready within reasonable time. Not 10+ seconds.

> Browser performance must be tested, not estimated from code.

---

## K. RESPONSIVE

### Desktop
- [ ] Full experience implemented and tested.

### Tablet
- [ ] Reduced complexity where necessary. Fewer particles, simpler shaders, lower poly.
- [ ] Touch interaction works (no hover-only interactions).

### Mobile
- [ ] Deliberate simplified experience defined. Not "desktop but smaller."
- [ ] Lower DPR (1 recommended).
- [ ] Reduced parallax intensity. Fewer animated layers.
- [ ] 3D may be disabled on very low-end devices.
- [ ] Static fallback or poster image available.

### Reduced motion
- [ ] Static or minimally animated fallback implemented.
- [ ] `prefers-reduced-motion: reduce` respected.
- [ ] Content still accessible and meaningful without motion.

> The checklist requires an explicit decision per breakpoint, not accidental shipping of a broken mobile scene.

---

## L. ACCESSIBILITY

- [ ] **`prefers-reduced-motion`** checked and animations disabled/minimized when set.
- [ ] **Keyboard accessibility** — interactive 3D controls (if any) are keyboard navigable.
- [ ] **Accessible labels** — canvas has `aria-label` or `aria-hidden` as appropriate.
- [ ] **Focus states** — focusable elements within/near 3D experience have visible focus.
- [ ] **Non-motion fallback** — content accessible without any animation or 3D.
- [ ] **Semantic HTML outside canvas** — headings, text, links in DOM, not hidden in WebGL.
- [ ] **Meaningful loading states** — screen readers announce loading/completion.
- [ ] **No critical information exists only inside motion** — all key content readable without animation.

---

## M. BROWSER QA

Run after every significant 3D implementation:

- [ ] **Chromium desktop** — scene renders, interaction works, no console errors.
- [ ] **Tablet viewport** — responsive layout, reduced complexity, touch works.
- [ ] **Mobile viewport** — simplified scene, acceptable performance, no crashes.
- [ ] **Interaction test** — pointer/click/hover/drag all respond correctly.
- [ ] **Scroll test** — scroll-driven animations work, no scroll jank, no hijacking.
- [ ] **Loading test** — preloader shows, scene loads, no blank canvas.
- [ ] **Resize test** — scene adapts to viewport changes. Camera responsive.
- [ ] **Reduced-motion test** — animations respect `prefers-reduced-motion`.
- [ ] **Keyboard test** — core task completable via keyboard where applicable.
- [ ] **Console errors** — no WebGL errors, no uncaught exceptions.
- [ ] **Network errors** — assets load. No 404s for models/textures.
- [ ] **Visual glitches** — no z-fighting, no flickering, no broken geometry.
- [ ] **Stuck animations** — no animations running when they should have stopped.
- [ ] **Memory/GPU symptoms** — no memory leaks, no GPU hangs on prolonged use.

> The agent must actually inspect the result in a browser. Code compiling does not equal design success.

---

## N. COMMON 3D FAILURE MODES

| Failure | Mitigation |
|---------|-----------|
| **Unnecessary WebGL** | CSS/SVG/video delivers same result. Use 3D only when it earns complexity. |
| **Giant GLB** | Compress with Draco/Meshopt. Reduce poly count. Split large models. Target < 5MB. |
| **Too many textures** | Bake textures. Reduce resolution. Use texture atlases. |
| **Excessive draw calls** | Use instancing (`Instances`/`Instance`). Merge geometries. Reduce unique materials. |
| **Overuse of particles** | Limit particle count. Use GPU-computed particles. Reduce on mobile. |
| **Expensive post-processing** | Each effect must justify GPU cost. Disable on mobile. Reduce pass count. |
| **Uncontrolled DPR** | Cap at 2 (desktop) or 1 (mobile). `Math.min(window.devicePixelRatio, 2)`. |
| **Cursor gimmicks** | Do not make every element chase cursor. Subtle spatial presence only. |
| **Scroll hijacking** | Use scrub animations. Let users scroll naturally. No forced scroll behavior. |
| **Broken mobile experience** | Define explicit mobile fallback. Reduce complexity. Consider disabling 3D. |
| **Missing reduced-motion fallback** | Add `prefers-reduced-motion` check. Provide static fallback. |
| **Blank loading state** | Implement preloader. Show poster image. Never show empty WebGL canvas. |
| **No cleanup/disposal** | Dispose geometry, materials, textures on component unmount. Prevent memory leaks. |
| **Animation running offscreen** | Pause animations when not visible. Use IntersectionObserver or ScrollTrigger. |
| **Scene active when hidden** | Pause rendering loop when tab hidden or component out of view. |

---

## O. DECISION TREE

### 3D Stack Selection
```
Does the experience need real spatial interaction?
        │
       NO
        ↓
CSS / SVG / DOM / Video / Frame Sequence

       YES
        ↓
Need designer-friendly scene?
        │
       YES → Spline candidate
        │
       NO
        ↓
Need programmatic control?
        │
       YES → Three.js / R3F
        │
       NO → Spline or R3F
```

### Scroll System Selection
```
Does scroll control the experience?
        │
       NO → No scroll system needed
        │
       YES
        ↓
Using React?
        │
       YES → R3F ScrollControls (for 3D) or Framer Motion (for 2D)
        │
       NO
        ↓
Complex timeline animations?
        │
       YES → GSAP ScrollTrigger
        │
       NO → CSS scroll-timeline or Lenis
```

### Source Selection
```
Need 3D web experience guidance?
        → Load 3d-web-experience skill

Need scroll choreography guidance?
        → Load scroll-experience skill + detailed-guide.md

Need advanced shaders/post-processing?
        → Reference premium-3d-website patterns
```

---

## P. WHEN NOT TO USE 3D

Prefer these instead of 3D when:

- **CSS** — geometry is simple, depth is mostly visual, interaction is lightweight.
- **SVG** — shapes are vector-like, procedural illustration is enough, no true geometry required.
- **DOM / layered imagery** — visual depth can be achieved with layered assets.
- **Image** — a well-composed photograph or illustration communicates better than a 3D render.
- **Frame sequence** — cinematic motion is needed, true real-time interaction is unnecessary.
- **Video** — cinematic movement is the primary requirement, user does not need arbitrary spatial interaction.

> **Maximum perceived richness with minimum technical complexity.**

---

## Q. HUMAN REVIEW GATE

> After the first strong 3D implementation, STOP for human review when the project workflow requires a design gate.

The agent must not automatically move to another visual round.

Human review evaluates:
- [ ] Visual quality
- [ ] Interaction quality
- [ ] Originality
- [ ] Performance (actual browser test, not code estimate)
- [ ] Whether 3D actually earns its complexity

---

## R. SOURCE REPORT

Every substantial 3D implementation must include:

```
3D TECHNOLOGY:
ASSETS:
SOURCE:
LICENSE:
DIRECT SOURCE USED:
DEPENDENCIES:
OPTIMIZATION:
INTERACTION:
SCROLL SYSTEM:
MOBILE FALLBACK:
REDUCED MOTION:
PERFORMANCE TEST:
KNOWN LIMITATIONS:
```

---

## S. VALIDATION AGAINST INSTALLED SKILLS

Cross-checked against:

- [x] `3d-web-experience/SKILL.md` — stack selection, model pipeline, scroll-driven 3D, performance targets, validation checks, anti-patterns all covered.
- [x] `scroll-experience/SKILL.md` — scroll animation stack, parallax storytelling, sticky sections, performance, accessibility all covered.
- [x] `scroll-experience/references/detailed-guide.md` — GPU-friendly properties, mobile-safe parallax, iOS fixes, content-first design, validation checks all covered.

**Unresolved items**: None. All major requirements from the source skills are captured in this checklist.
