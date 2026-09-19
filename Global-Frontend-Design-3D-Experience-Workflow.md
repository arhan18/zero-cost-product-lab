# GLOBAL FRONTEND DESIGN + 3D EXPERIENCE WORKFLOW

This is a **GLOBAL workflow**.

It applies to every frontend project, website, SaaS, landing page, product, portfolio, experiment, interactive marketing site, and web application we build.

It is NOT specific to any single product.

The goal is:

> **Research the best available design and implementation sources, use free/open resources first, directly integrate strong reusable source implementations where legally permitted, experiment creatively, combine technologies when useful, test everything in a real browser, and optimize for the final experience rather than loyalty to any single library.**

This file is the canonical reference for the Product Lab's frontend design toolbox, 3D capability, source-discovery logic, and implementation philosophy. It integrates with DESIGN-STACK.md (standing design policy), SKILL-REGISTRY.md (approved tools), and SYSTEM.md (pipeline).

---

## FRONTEND DESIGN DECISION LOOP — QUICK REFERENCE

```
DESIGN PROBLEM
      ↓
WHAT TYPE?
visual / scroll / functional / 3D / cinematic / research
      ↓
CHECK EXISTING SKILL / MCP
      ↓
CHECK BEST FREE SOURCE
      ↓
LICENSE CHECK
      ↓
SELECT ONE OR COMBINE
      ↓
DIRECT INTEGRATE
      ↓
BROWSER TEST
      ↓
HUMAN REVIEW
```

**Classification → Source → License → Integrate → Test → Review.**

This is the operational path. For detailed capabilities, toolbox entries, and rules, continue below.

---

## 1. CORE DESIGN TOOLBOX

Use these as the default design-source toolbox.

### THREEUI

Primary visual / hero foundation.

Best for:

* hero experiences
* standout visual components
* premium buttons
* visual backgrounds
* immersive sections
* atmospheric effects
* high-impact interactions

### SKIPER UI

Scroll choreography + transitions + cinematic interaction.

Best for:

* pinned scrolling
* scroll storytelling
* scrub timelines
* kinetic typography
* transitions
* reveals
* preloaders
* scroll-linked transformations

### REACT BITS / MAGIC UI

Creative interaction + polish.

Best for:

* micro-interactions
* hover states
* animated controls
* creative transitions
* visual polish
* supporting effects

### WATERMELON UI / SHADCN

Robust functional primitives.

Best for:

* forms
* dialogs
* inputs
* tabs
* selectors
* menus
* tooltips
* settings
* pricing controls
* accessible primitives

### VENGEANCE UI

Landing-page sections + micro-interactions.

### ANIMMASTER

Animation utilities + animation-system patterns.

### CULT UI

Interesting/specialized source components.

### REFERO + STYLES.REFERO.DESIGN

UX and design-system research.

Study:

* real products
* onboarding
* editors
* builders
* navigation
* information architecture
* typography
* spacing
* component systems
* motion systems

### SHADERGRADIENT

Specialized visual backgrounds and atmospheric environments.

---

## 2. NEW FIRST-CLASS CAPABILITY: 3D WEB EXPERIENCE

3D is now a **global capability**.

When a product could materially benefit from:

* 3D
* spatial interfaces
* interactive scenes
* WebGL
* product configurators
* immersive hero experiences
* 3D storytelling
* scroll-controlled objects
* cinematic environments

you MUST consider the 3D workflow.

Do NOT add 3D merely because it looks impressive.

Ask:

> Does 3D materially improve the user's understanding, emotion, interaction, or product demonstration?

If yes, use it.

If no, prefer CSS/SVG/video/frame sequences.

---

## 3. INSTALL / ENABLE 3D WEB SKILLS

Install the following skills into the OpenCode skill ecosystem.

### SOURCE A — Agentic Awesome Skills

Repository:

`https://github.com/sickn33/agentic-awesome-skills`

Primary skill:

`skills/3d-web-experience`

Also inspect:

`skills/scroll-experience`

and, where available/relevant:

`premium-3d-website`

The repository describes `3d-web-experience` as the skill for immersive Three.js / React Three Fiber experiences, and its bundle documentation also identifies `scroll-experience` as a related immersive workflow.

### SOURCE B — Happycapy Skills

Repository:

`https://github.com/happycapy-ai/Happycapy-skills`

Primary skill:

`skills/3d-web-experience`

Happycapy describes its skills as self-contained folders with `SKILL.md`, including a dedicated 3D web experience skill.

### SOURCE C — MCP Market

Inspect:

`https://mcpmarket.com/tools/skills/3d-web-experience`

This source describes the 3D Web Experience skill as covering:

* Three.js
* React Three Fiber
* Spline
* WebGL optimization
* GLB/GLTF
* product configurators
* interactive 3D scenes
* scroll-driven 3D
* mobile performance

and identifies the skill source as Apache 2.0.

### IMPORTANT

Do NOT blindly install duplicate copies of the same skill.

Install the strongest repository sources into OpenCode, then compare the contents.

If the MCP Market version is materially different, preserve its useful guidance as a reference.

If it is effectively the same skill, do not create unnecessary duplication.

---

## 4. OPENCODE SKILL INSTALLATION

Use OpenCode's supported skill directories.

Preferred global location:

`~/.config/opencode/skills/`

Each skill must ultimately look like:

```text
~/.config/opencode/skills/
└── skill-name/
    └── SKILL.md
```

OpenCode officially discovers skills from its global and project skill locations.

For project-specific experiments, use:

```text
.opencode/skills/<skill-name>/SKILL.md
```

Do not install duplicate names that shadow each other unpredictably.

---

## 5. 3D SKILL USAGE RULE

When the task involves 3D:

Load and use the relevant 3D skill before implementation.

Do not simply rely on general frontend knowledge.

The 3D skill should inform:

* stack selection
* scene architecture
* asset pipeline
* loading
* optimization
* interaction
* scroll integration
* mobile fallback
* accessibility
* performance

---

## 6. 3D STACK DECISION

Choose the simplest appropriate stack.

### OPTION A — CSS 3D

Use when:

* geometry is simple
* depth is mostly visual
* interaction is lightweight

### OPTION B — SVG

Use when:

* shapes are vector-like
* procedural illustration is enough
* no true geometry is required

### OPTION C — DOM / layered imagery

Use when:

* visual depth can be achieved with layered assets

### OPTION D — Frame sequence

Use when:

* cinematic motion is needed
* true real-time interaction is unnecessary

### OPTION E — VIDEO

Use when:

* cinematic movement is the primary requirement
* user does not need arbitrary spatial interaction

### OPTION F — Three.js / R3F

Use when:

* actual spatial interaction is valuable
* camera movement matters
* objects need true 3D behavior
* lighting/materials contribute materially
* configurators or spatial worlds are required

### OPTION G — Spline

Use when:

* a designer-friendly interactive scene is the fastest appropriate route
* the scene can be embedded efficiently
* the licensing/hosting model fits the project

The 3D skill itself presents Spline as a quick-start option and R3F/Three.js as higher-control options.

---

## 7. TRUE 3D VS PSEUDO-3D

Always decide explicitly:

```text
TRUE 3D
or
PSEUDO-3D
```

Do not build true WebGL if CSS, SVG, video, or frame sequences deliver the same perceived result.

The objective is:

> **maximum perceived richness with minimum technical cost.**

---

## 8. 3D ASSET SOURCING WORKFLOW

When a scene needs 3D assets, search in this order:

### 1. Existing open-source/free project assets

### 2. Free 3D libraries

### 3. Spline free library

Spline currently states its library's free 3D scenes and objects can be used commercially.

### 4. Poly Haven / CC0 resources

### 5. Khronos / glTF sample assets

Khronos provides glTF sample assets and documents individual model licensing; some are CC0 while others are CC-BY or have other terms, so check each model.

### 6. Sketchfab downloadable assets

But:

**CHECK THE INDIVIDUAL MODEL LICENSE.**

Do not assume every downloadable model is commercially reusable.

### 7. AI-generated assets

Use only when appropriate and when the generation tool/license permits the intended commercial use.

---

## 9. AI 3D GENERATION

When we need custom 3D assets, search for the best currently available free/open option.

Possible approaches include:

* Hunyuan3D
* TRELLIS
* free/freemium generation tools
* local generation if hardware permits
* commercial free tiers when their license allows our intended use

Current research identifies Hunyuan3D and TRELLIS as open-source approaches that can be run locally, while Meshy and Tripo have free/freemium options; always verify current licensing before commercial use.

Do not assume:

> free generation = unrestricted commercial rights.

Verify.

---

## 10. MODEL OPTIMIZATION PIPELINE

Raw 3D assets must NOT be dropped blindly into production.

Preferred pipeline:

```text
SOURCE / GENERATE
      ↓
GLTF / GLB
      ↓
inspect geometry
      ↓
reduce unnecessary polygons
      ↓
optimize materials
      ↓
compress textures
      ↓
Draco / Meshopt where appropriate
      ↓
test loading
      ↓
browser performance test
```

Use appropriate tools such as:

* gltf-transform
* Blender
* glTF tooling
* Draco
* Meshopt
* image/texture compressors

The 3D skill recommends GLB/GLTF for web delivery and an optimization flow involving polygon reduction, texture/material optimization and compression.

---

## 11. 3D PERFORMANCE RULES

Always consider:

* file size
* geometry count
* draw calls
* texture memory
* DPR
* shader complexity
* post-processing
* GPU load
* CPU load
* mobile thermals
* loading time

Cap rendering resolution where necessary.

For example:

```js
renderer.setPixelRatio(
  Math.min(window.devicePixelRatio, 2)
);
```

The premium 3D skill specifically recommends capping pixel ratio and using loading managers/preloaders to avoid severe performance and loading problems.

---

## 12. POST-PROCESSING

Use post-processing selectively.

Possible tools:

* bloom
* depth of field
* ambient occlusion
* film grain
* color grading
* distortion

Never add all of them automatically.

Each effect must earn its GPU cost.

Ask:

> Does this materially improve the visual result?

---

## 13. LOADING EXPERIENCE

Never show:

* blank canvas
* broken WebGL
* layout collapse
* unexplained waiting

For heavy 3D:

Implement:

* preloader
* loading progress
* poster/static fallback
* scene initialization state

The 3D skill specifically recommends loading managers and interactive preloaders for heavy assets.

---

## 14. SCROLL-DRIVEN 3D

When 3D should respond to scroll:

First inspect:

* Skiper UI
* 3d-web-experience skill
* scroll-experience skill
* GSAP ScrollTrigger
* R3F ScrollControls

Potential architecture:

```text
PAGE SCROLL
   ↓
normalized progress
   ↓
timeline
   ↓
camera / model / lights / scene
```

R3F/Drei provides `ScrollControls`, while GSAP + ScrollTrigger can control camera/scene animation.

The interaction should feel like storytelling, not scroll hijacking.

---

## 15. DO NOT HIJACK NATURAL SCROLL

Use:

* scrub
* pin
* interpolation
* progress-based animation

Avoid forcing unnatural scroll behavior.

The existing scroll-experience guidance explicitly warns against scroll hijacking and favors natural scrolling with scrub animations.

---

## 16. MOUSE / POINTER INTERACTION

When useful, use subtle pointer tracking.

Possible effects:

* camera parallax
* light movement
* object rotation
* depth shift
* material highlight
* environmental response

Do not make every object chase the cursor.

Aim for:

> subtle spatial presence.

---

## 17. MOBILE FALLBACK

Every 3D experience must define:

### Desktop

Full experience.

### Tablet

Reduced complexity.

### Mobile

Lower complexity / simplified scene.

### Reduced motion

Static or minimally animated fallback.

Examples:

Desktop:
real-time scene

Mobile:
poster + layered parallax

Reduced motion:
static poster / simplified transform

---

## 18. VIDEO + AI VIDEO WORKFLOW

Study the MindStudio workflow as a reference for producing cinematic web experiences.

The useful principles include:

* AI-generated visual assets
* video backgrounds
* GSAP/ScrollTrigger
* pinned sequences
* mouse-driven 3D effects
* Three.js for selective true 3D
* asset compression
* reduced-motion fallback
* mobile fallbacks

MindStudio's workflow explicitly demonstrates pinned scroll sequences, GSAP/ScrollTrigger, video backgrounds, CSS 3D interaction and optional Three.js.

Do NOT reproduce its exact implementation.

---

## 19. FREE ALTERNATIVE MEDIA PIPELINE

When a paid AI media service is suggested:

First search for free/open alternatives.

For video generation, investigate current options such as:

* open-source video generation models
* local image/video models
* free tiers
* self-hosted inference
* local FFmpeg processing

For 3D generation, investigate:

* Hunyuan3D
* TRELLIS
* other currently strong open models

Never assume the tool available today is still the best option six months later.

Research current options when the task begins.

---

## 20. VIDEO OPTIMIZATION

For cinematic web videos:

Prefer:

* MP4/H.264 where appropriate
* WebM/AV1 or VP9 where appropriate
* compressed poster image
* muted autoplay when appropriate
* `playsinline`
* lazy/preloaded behavior based on importance

Large video files must not destroy Core Web Vitals.

MindStudio's guide recommends compressing hero video and notes a 1080p loop should generally be kept lightweight; treat exact size as a benchmark rather than a universal law.

---

## 21. CINEMATIC WEB EXPERIENCE RECIPE

When a product genuinely benefits from a premium animated/3D website, consider:

```text
DESIGN DIRECTION
      ↓
3D / VISUAL STORY
      ↓
ASSET SOURCING
      ↓
ASSET OPTIMIZATION
      ↓
SCENE ARCHITECTURE
      ↓
MOUSE INTERACTION
      ↓
SCROLL CHOREOGRAPHY
      ↓
VIDEO / FRAME SEQUENCES
      ↓
POST-PROCESSING
      ↓
MOBILE FALLBACK
      ↓
REDUCED MOTION
      ↓
PERFORMANCE QA
      ↓
REAL BROWSER REVIEW
```

---

## 22. THE AGENT MUST LEARN WHEN IT DOESN'T KNOW

This is mandatory.

If you encounter a technology, library, animation technique, 3D format, MCP, skill, model, API, browser behavior, or implementation pattern that you do not understand sufficiently:

**DO NOT GUESS.**

Research it.

Minimum research expectation:

### 5–10 independent sources

depending on the importance/complexity of the subject.

Prefer:

1. official documentation
2. official GitHub
3. official examples
4. authoritative technical docs
5. reputable engineering articles
6. high-quality open-source implementations
7. credible community discussions

Then synthesize:

```text
WHAT IT IS
HOW IT WORKS
WHEN TO USE IT
WHEN NOT TO USE IT
PERFORMANCE COST
ACCESSIBILITY CONCERNS
LICENSE
BEST IMPLEMENTATION APPROACH
```

For a critical architectural choice, go deeper than five sources when necessary.

Do not blindly trust the first tutorial.

---

## 23. RESEARCH SOURCE QUALITY

Prefer:

**Official documentation**

over:

**SEO article**

Prefer:

**actual GitHub source**

over:

**screenshot tutorial**

Prefer:

**multiple independent technical sources**

over:

**one person's opinion**

---

## 24. LICENSE RESEARCH IS PART OF TECHNICAL RESEARCH

For every external asset or code source:

check:

* license
* attribution requirement
* commercial-use permissions
* redistribution restrictions
* model-specific restrictions
* API terms
* hosting restrictions

Do not assume the repository license applies to every asset inside it.

The Khronos asset repository is a good example: its assets have individual licensing metadata, and the collection contains both CC0 and CC-BY assets among other terms.

---

## 25. MCP / SKILL DISCOVERY BEFORE REBUILDING

Before implementing a complex task manually:

check:

1. installed skills
2. available MCPs
3. existing project tools
4. free component sources
5. open-source implementations
6. web research

Only rebuild from scratch when necessary.

---

## 26. CREATIVE SOURCE MIXING

The source hierarchy is NOT rigid.

A final implementation may use:

```text
THREEUI
+
SKIPER
+
R3F
+
GSAP
+
SHADERGRADIENT
+
CUSTOM LOGIC
```

or:

```text
CSS 3D
+
VIDEO
+
GSAP
```

or:

```text
SHADCN
+
REACT BITS
+
CUSTOM MOTION
```

Choose based on the experience.

---

## 27. SOURCE-FIRST IMPLEMENTATION

When you find an excellent permitted implementation:

**COPY / INTEGRATE IT FIRST.**

Then:

**RUN IT.**

Then:

**REVIEW IT.**

Then:

**CUSTOMIZE IT.**

Do not spend an hour reinventing an excellent open-source component before testing the original.

---

## 28. BUT NEVER COPY RESTRICTED SOURCE

Never:

* bypass paywalls
* bypass authentication
* scrape inaccessible source
* extract proprietary code
* circumvent licensing
* pretend restricted code is open source

Study public behavior and independently implement the concept instead.

---

## 29. BROWSER OUTPUT IS THE SOURCE OF TRUTH

For every significant visual task:

run the site in a browser.

Check:

* desktop
* tablet
* mobile
* motion
* interaction
* loading
* performance
* reduced motion
* accessibility

A component is not "done" because it compiles.

---

## 30. HUMAN REVIEW

For major visual changes:

STOP after the first real implementation.

Let the human judge:

* visual quality
* interaction quality
* originality
* usefulness
* whether 3D is actually earning its complexity

Do not automatically advance to another design round.

---

## 31. DESIGN TOOLBOX REMAINS

The global design toolbox is:

**ThreeUI → primary visual/hero foundation**

**Skiper UI → scroll choreography + transitions + cinematic interaction**

**React Bits / Magic UI → creative interaction + polish**

**Watermelon UI / shadcn → robust UI primitives**

**Vengeance UI → landing-page sections + micro-interactions**

**AnimMaster → animation utilities/system patterns**

**Cult UI → interesting source components**

**Refero + styles.refero.design → UX/design-system research**

**ShaderGradient → specialized visual backgrounds**

PLUS:

**3D Web Experience skills → Three.js / R3F / Spline / WebGL / GLB / scroll-driven 3D / optimization**

---

## 32. FINAL PRINCIPLE

Do not optimize for:

> "Which library should we use?"

Optimize for:

> **"What is the best experience we can build?"**

Research widely.

Use free/open sources first.

Check MCPs and skills.

Directly integrate excellent permitted source code.

Experiment with combinations.

Use 3D only when it earns its complexity.

Use AI-generated media when it meaningfully improves the experience.

Research unfamiliar technology across multiple sources.

Test everything in the browser.

Then make the result feel original.
