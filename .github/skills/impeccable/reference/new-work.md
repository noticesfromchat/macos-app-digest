# New visual work

Use this workflow for a new surface or a requested redesign. PRODUCT.md describes
product truth; DESIGN.md records the established visual system. Inspect the relevant
implementation and supplied references before deciding what changes.

## Scope and direction

An addition to an existing surface inherits its identity. A redesign changes only
the visual and functional scope the user authorized. Missing documentation alone is
not a reason to invent a new identity or hold up implementation.

Infer audience, job, content, states and constraints from the brief and existing
project. Ask a focused question only when missing information materially changes the
result. Continue independent work while waiting; do not repeat settled questions.
If product documentation is requested or needed for durable new decisions, use
[init.md](init.md). A local refinement does not need an init interview.

Choose a direction using content hierarchy, audience and the established brand.
A readable publication, an operating tool and a campaign have different needs.
For open exploration, consider materially different structures and explain the useful
tradeoff. The optional `concept-seed.mjs` tool can help when random exploration is
requested; its draw is inspiration, not authority over the brief.

Present alternatives when requested or when a meaningful choice needs the user's
judgment. Otherwise state the reasonable direction and complete the authorized work.
Do not invent a mandatory tournament, image quota or approval round. An explicitly
requested planning-only or approval-first task still stops at its requested boundary.

## Choose references and implementation

Use supplied images and existing assets first. Generate design comps when requested
or when they resolve a material visual uncertainty. Choose the number and format for
that uncertainty, not a fixed quota. A user's saved build-path preference applies
unless the current request changes it; tool availability alone does not select a path.
With no preference or need for comps, implement directly in the existing stack.

- For generated composition references, use [visualize.md](visualize.md).
- For a selected measured comp-led implementation, use [measured-build.md](measured-build.md).
- For functional interfaces and reading surfaces, use [operate.md](operate.md) when needed.

Use semantic components and live text and controls. Preserve factual content,
accessibility, responsive behavior and project requirements. Give motion a purpose;
a static interface is valid. Include reduced-motion behavior for any added movement.
Do not add testimonials, performance claims or other facts without evidence.

Record durable, authorized system changes in DESIGN.md and its sidecar using
[document.md](document.md). A small implementation fix does not require rewriting the
whole design system. Surface-specific decisions belong in the surface brief.

## Inspect and complete

Run the project's required checks. Inspect the affected interface at relevant desktop
and mobile sizes, themes and interaction states. Compare a supplied comp at a useful
scale, including detail crops when needed. Validate captures before using them as
evidence; an empty or animation-hidden screenshot is not proof of a missing component.

Fix material failures, then rerun the affected checks. Batch work rather than taking
a screenshot after each tweak. Continue while fixes make progress; do not halt because
a fixed pass count elapsed, or begin new defect hunts after acceptance criteria pass.
Report a concrete blocker if progress stops. Distinguish checked facts from inference.

Use independent review for complex work when delegation is authorized and useful.
The optional [finish-reviewer workflow](degraded/finish-reviewer.md) can guide that
review; it is not required for every edit. A requested review-only task reports
findings without implementing them. An implementation task includes fixes and relevant
verification before the final report. Production approval remains a separate boundary.
