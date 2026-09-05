# Init flow

`init` captures durable product truth in PRODUCT.md. It does not invent a visual world and does not write DESIGN.md; [new-work.md](new-work.md) creates or expands one, and [document.md](document.md) records an incumbent one. Existing runnable web projects may also receive `.impeccable/live/config.json`.

## Step 1: Load current state

Use the PRODUCT.md path resolved by context.mjs. Update it instead of creating a competing authority. In a child app inheriting root context, confirm shared versus app-specific scope before writing.

- **No PRODUCT.md:** inspect the brief and project, then write the supported facts when setup is in scope.
- **PRODUCT.md exists:** preserve confirmed fields; ask only about a material unresolved gap in the requested update.
- **Legacy PRODUCT.md:** add only durable missing facts; absent `## Platform` means `web` unless evidence says otherwise.
- **Only DESIGN.md exists:** leave it untouched and create PRODUCT.md.
- **Redesign/rebrand request:** preserve confirmed product truth unless the user changes it. Visual replacement happens later in new-work, not here.

Never silently overwrite an existing file or offer DESIGN.md during init. If another request invoked init, finish PRODUCT.md and resume it. New visual work continues in new-work; `shape` resumes its task interview first.

## Step 2: Explore the project

Before asking, scan enough to avoid making the user repeat known facts: product docs and copy; package/config and app boundaries; features, workflows, routes, and roles; names, logos, legal/proof assets, and brand commitments; platform/accessibility signals; and the dev command/entry when live mode applies.

Treat repository evidence as a hypothesis, not user approval. Note visual maturity without documenting, extending, or replacing the world.

Form a platform hypothesis: `web`, `ios`, `android`, or `adaptive` (one product that genuinely adapts its design language per OS). Mobile web remains `web`; a native wrapper around a website does not make its design language native.

## Step 3: Interview for product truth

Use the available question tool only for material gaps the request and repository
cannot resolve. If the facts are already supplied, proceed without a confirmation
round. Keep supported facts, assumptions and unknowns distinct. A missing answer or
tool timeout does not grant approval for a decision that requires it.

Start with the unknowns that most change future product decisions:

1. Who is the primary user, in what situation, and what job are they doing?
2. What does the product make possible, and what is its meaningfully different mechanism or position?
3. What durable constraints, assets, evidence, or product facts must future work preserve?

Confirm ambiguous platform separately. When the project has no framework or scaffold and the request implies building, choose a suitable stack from the brief unless the choice has a material unresolved consequence; ask then, and record the outcome under `## Stack`. Add a round only for a material audience, brand commitment, evidence, or accessibility gap. Record undecided facts instead of inventing them.

Do not ask for an aesthetic direction, emotional feel, visual references, colors, typography, or style during init. If the user volunteers a binding visual constraint, record it without expanding it.

### What belongs here

- users, jobs, workflows, purpose, success, positioning, and operating context;
- capabilities, constraints, terminology, evidence, platform, and accessibility;
- confirmed voice, assets, and brand commitments.

### What does not belong here

- visual worlds, palettes, typography, components, or page concepts;
- visitor mode, narrative, CTA/proof sequence, or other surface strategy;
- invented testimonials, customers, benchmarks, pricing, licensing, or deployment claims;
- a requirement to decide every optional field.

## Step 4: Write PRODUCT.md

Write only confirmed facts and explicitly marked open decisions. Omit irrelevant sections rather than filling them with generic prose.

```markdown
# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
[Greenfield only: the user's answer to the stack question, e.g. "static HTML/CSS", "Astro", or "delegated: <what you chose and why>". Omit the section when an existing codebase already answers it.]

## Users
[Primary users, their situation, and job. Add other audiences only when confirmed.]

## Product Purpose
[What the product does, why it exists, and what success means.]

## Positioning
[The product mechanism or claim a neighboring product could not truthfully copy.]

## Operating Context
[Workflows, environments, tools, documents, materials, and rituals that are factual parts of using or evaluating the product.]

## Capabilities and Constraints
[Confirmed functionality, technical constraints, terminology, and explicitly undecided product facts.]

## Brand Commitments
[Existing name, voice, assets, personality, identity constraints, and references the user explicitly made binding. Omit when none exist.]

## Evidence on Hand
[Real content, data, demonstrations, testimonials, case studies, press, or assets, with paths where applicable. State absences that future work must not fabricate.]

## Product Principles
[Three to five durable strategic principles derived from confirmed answers; no visual recipes.]

## Accessibility & Inclusion
[Known user needs or required standard. Omit when no product-specific requirement was established.]
```

Platform is the bare value `web`, `ios`, `android`, or `adaptive`. Preserve useful legacy headings. New files go at `PROJECT_ROOT/PRODUCT.md`; otherwise update the resolved file. Write it before any visual-world or surface-concept work.

Copy the `impeccable:product-schema` comment verbatim, including when you update an older file. It records which version of the product record this file follows, so later versions can tell a deliberately short record from one written before a section existed, and never propose an interview the user has already sat through. Update the number only when this reference's template changes it. Sections a later version retires are reported to you at boot as deprecated; delete them when the user agrees rather than carrying them forward.

When the platform you just recorded is `ios`, `android`, or `adaptive`, load [ios.md](ios.md), [android.md](android.md), or both before any design work. On a project that had no PRODUCT.md, context.mjs could not know the platform and so never loaded them; init is the only place that learns the answer.

### Completion gate

Before loading new-work or resuming shape/build, verify that PRODUCT.md exists at the resolved path and contains the confirmed product record. If the file is absent, init is incomplete. Do not substitute interview notes, a planning packet, or later design prose for the file.

## Step 5: Record workflow defaults

Honor a saved `buildPath` unless the current request overrides it. Without a saved preference, choose the path required by the task: direct implementation is the default; use supplied or generated comps when requested or useful to resolve a material design uncertainty. An unset preference is valid and does not require a question.

Persist `"buildPath": "comp"` or `"buildPath": "code"` in `.impeccable/config.json` only when the user asks to save that preference. Preserve other keys. A task-specific choice does not establish a permanent preference. Without image generation, use supplied references or build directly.

Then configure live mode when useful: skip native or non-runnable projects and leave existing config untouched. Otherwise follow [live.md](live.md)'s first-time setup. Any CSP source edit still requires its stated consent.

## Step 6: Wrap up or resume

Summarize captured and deliberately undecided facts. Do not offer DESIGN.md merely because it is missing.

Recommend the next action from the actual project state:

- Empty or early project: ask naturally for the surface to be built, or use `$impeccable shape <surface>` when the user wants a confirmed brief without implementation. New-work will establish a visual world only when the requested work needs one.
- Existing coherent interface without DESIGN.md: `$impeccable document` if the user wants the incumbent system recorded independently of a new build.
- Existing surface needing work: name the most relevant scoped command.
- Web project ready for visual iteration: `$impeccable live` when configured.

If init was invoked by another request, resume without rerunning context.mjs; the native reference above is the one thing that run could not have given you, and new-work owns later visual decisions.
