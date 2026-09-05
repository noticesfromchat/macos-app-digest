# Visualize: Direction Comps & Asset Production

Load this from [new-work.md](new-work.md) on a comp-led build, when image generation is available (a harness-native tool or the API fallback context.mjs reports). A code-led contract skips this file by design, not by drift; do not load it then. PRODUCT.md and DESIGN.md are preconditions. New-work has already resolved the visual world; this file must not reopen it. A surface-scope structure round that already put three visualized cards before the user (new-work.md, established world) has discharged this round: the locked card's comp is the approved comp, so record the approval and continue at After approval; generate nothing new.

A probe tests composition, narrative, hierarchy, density, focal moment, signature use, and image requirements. It is not a second identity workshop. Keep DESIGN.md's palette, typography direction, material language, component character, imagery stance, and motion grammar fixed.

## Generate composition references

Use existing or supplied comps when they answer the design question. Otherwise
generate the number of images needed for the requested coverage; three alternatives
are useful for an open exploration, not a requirement for a settled brief. Save
references under `.impeccable/mocks/`, using the target viewport and actual content.
When using the measured phase tools, initialize their build state before generation
and follow [measured-build.md](measured-build.md). Open images through the current
harness's supported file paths.

- A comp is a designed surface, not a picture of the subject. Lead the prompt with the surface's own structure: the regions this design has, named in order with their scale relationships; a page with no navigation says so instead of inventing one, and an unconventional surface states its unconventional skeleton. A prompt that leads with atmosphere gets a vignette back: the model paints the fish market instead of the fish market's website. Self-check every render: if it could hang as a poster, or reads as a photograph with some text on it, it is not a comp; regenerate with the layout scaffold stated more literally.
- The inverse is also a failure: a surface with none of its subject in it. The subject appears as the content the regions hold; the world dresses the frame and never displaces what the frame shows. The deletion usually rides in on the prompt's exclusion list, so exclusions bind invented claims, and a medium ban belongs to the committed imagery stance, never to caution. Before accepting a render, point at the subject; a render that depicts everything about the world and nothing of the subject fails however faithful its atmosphere. Regenerate with the subject's content named region by region.
- Judge a comp as the shipped screen: the visitor's job must be readable from the image alone. Name the surface's mode from the render with no caption; a render whose mode cannot be read back is art direction without a surface. Regenerate with the visitor's job as the prompt's spine.
- Commitment is depth, not coverage. The world enters through one dominant move plus the material, type, and spacing that support it; the remaining regions hold still so that move can be read. A region that simply does its job in the world's grammar carries the direction further than a region performing the concept. The check cuts competition, never content: a quieted region keeps its information and stops performing. A second element competing with the named focal moment at the same scale means the comp is shouting; with no named focal moment, several regions performing the concept at once is the same shout. Regenerate keeping the strongest move and quieting the rest. Busy is louder, not bolder.
- When the user shortlisted multiple concepts, spread the requested options across them.
- When one direction is committed, vary the structural uncertainty an image can resolve: topology, sequence, density, hierarchy, focal composition, or interaction framing.
- Show enough beyond the opening moment to prove the concept can govern the whole surface.
- Do not generate a palette artifact, ask new atmosphere questions, introduce a different type voice, or invent a new motif. If the committed world cannot support the concept, return to the concept shortlist rather than changing the world.

Each comp is a direction test, not a screenshot specification. Core UI text, responsive behavior, accessibility, semantics, and interaction states remain implementation responsibilities.

## Respect the decision boundary

Reuse an already selected or approved reference. If the user requested approval
before implementation, or the choice changes a material unresolved requirement, show
the relevant options and wait for the answer. Otherwise choose from the brief and
continue the authorized implementation, recording that the choice was agent-selected.

Tool failure, silence or timeout never constitutes approval or delegated authority.
For the measured workflow, record `approved: true` only for an actual approved comp
or a choice the user explicitly delegated. If its gate needs approval not yet given,
ask for that concrete approval rather than manufacturing it.

After approval, record the choice where tools can find it: the approved comp's path goes in the surface brief, and its `.json` prompt sidecar gains `"approved": true` (every comp generated through `generate-image.mjs` has one; create it if a native tool didn't). The sidecar travels with the mocks folder, so the approval survives sessions and machines that never see the brief, and it is what `build-phase.mjs advance` reads to close the comps phase. Summarize the composition and the parts of the comp that must not be literalized, use measured-build.md for a selected measured implementation, then build.

## After approval: the comp becomes a spec

The approved comp is a north star for translation into semantic, responsive, accessible code, never a license to recompose: keeping the palette and mood while redrawing the topology is a second art direction. Do not rasterize core UI text or controls. Do not substitute a different visual driver after approval without asking.

What the comp shows is measured, not remembered. measured-build.md runs the build as phases (`build-phase.mjs`): the spec phase turns the comp into region boxes with sampled palettes (`comp-spec.mjs`), and the medium of every region follows from what the pixels are, never from what feels buildable: a figure, a product object, machinery, any illustration with perspective, shading, or drawing skill in it, and any texture by name (woven cloth, paper grain, fabric, leather, brushed metal) is a `plate` / `image` / `texture` region and ships as a raster; text, controls, chrome, diagrams with countable elements, flat shape systems, and anything that must move, scale, or respond are semantic. Writing "CSS" for a sculpted panel's finish, or a many-vertex `clip-path` for a torn edge, is the quiet deletion of the approved design; the detector's organic-clip-path and buried-raster rules and the hero gate's region scores catch it. Dropping an image-native region is a scope decision the user makes at the approval point, never a silent flattening after it. Generated imagery is a material, not a claim: evidence rules bind assertions, specs, testimonials, and photographs presented as real, never render fidelity.

## Plates and provenance

Every raster region's plate is produced in the plates phase, before any page code, by the shipped asset producer or in the current thread (`generate-image.mjs --plate <id>`, or the harness image tool with the crop as input and the spec's plate prompt). Generation context is part of the asset: after generating any image with any tool, run `node .agents/skills/impeccable/scripts/embed-prompt.mjs <image> --prompt "<prompt>"` with the exact string the tool received (`generate-image.mjs` does this itself), so the intent lives inside the file; `--read` recovers it, `--scan <dir>` lists rasters still missing one. The embedded prompt plus the region's row in the spec is the raster's **provenance**, and every raster the artifact references carries it; a sourced, stock, or pre-existing raster embeds its origin instead. A raster created or replaced later, in a fix batch or a reviewer's rebuild, is produced the same way; a raster a fix abandons is deleted in the same batch.

Convert images with a converter context.mjs reported at boot (the IMAGE_TOOLS line); probe only when it reported none, at most once per session, never per image.

Return to [new-work.md](new-work.md) for the direction contract, the phased build, and the finishing pass.
