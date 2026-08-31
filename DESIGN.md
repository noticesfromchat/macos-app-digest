---
name: App Waypoint
description: A weekly editorial guide to curated Mac apps for experienced users.
colors:
  harbor-fog: "#e8ecf1"
  drift-mist: "#f4f6f9"
  surf-foam: "#ffffff"
  shell-strong: "#e3e8ee"
  shell-quiet: "#f0f3f7"
  deep-sea: "#092443"
  tide-slate: "#4d5762"
  line-water: "rgba(9, 35, 66, 0.2)"
  beacon-blue: "#0862d8"
  beacon-blue-hover: "#004caf"
  header-fog: "rgba(244, 246, 249, 0.96)"
  night-harbor: "#091321"
  abyss: "#020b18"
  midnight-surface: "#0b1c30"
  midnight-surface-strong: "#10253b"
  moon-ink: "#f3ecdf"
  fog-mist: "#afb6bf"
  night-line: "rgba(217, 229, 240, 0.2)"
  buoy-blue: "#57a2ff"
  buoy-blue-hover: "#81b8ff"
  night-header-fog: "rgba(4, 20, 38, 0.96)"
  sea-ink-day: "9 35 66"
  sea-ink-night: "226 236 250"
typography:
  display:
    fontFamily: 'Iowan Old Style, Baskerville, "Times New Roman", serif'
    fontSize: "clamp(4rem, 8vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: "0"
  headline:
    fontFamily: 'Iowan Old Style, Baskerville, "Times New Roman", serif'
    fontSize: "clamp(3.25rem, 5.1vw, 4.25rem)"
    fontWeight: 500
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  subhead:
    fontFamily: 'Iowan Old Style, Baskerville, "Times New Roman", serif'
    fontSize: "clamp(1.9rem, 2.4vw, 2.35rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: 'Iowan Old Style, Baskerville, "Times New Roman", serif'
    fontSize: "1.4rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  sectionTitle:
    fontFamily: 'Iowan Old Style, Baskerville, "Times New Roman", serif'
    fontSize: "clamp(2.2rem, 4vw, 3.8rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.03em"
  dek:
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif'
    fontSize: "clamp(1.12rem, 1.4vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.58
    letterSpacing: "normal"
  body:
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif'
    fontSize: ".78rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: ".1em"
  metadata:
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif'
    fontSize: ".84rem"
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: ".02em"
  brand:
    fontFamily: 'Iowan Old Style, Baskerville, "Times New Roman", serif'
    fontSize: "clamp(1.35rem, 2.45vw, 2rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0"
  displayAsset:
    fontFamily: 'Philippine, Iowan Old Style, Baskerville, "Times New Roman", serif'
    fontSize: "clamp(3.25rem, 5.1vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "0"
rounded:
  xs: "8px"
  sm: "10px"
  md: "12px"
  lg: "18px"
  pill: "999px"
spacing:
  xs: "6px"
  sm: "10px"
  md: "14px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
  3xl: "40px"
  4xl: "56px"
  5xl: "72px"
components:
  button-primary:
    backgroundColor: "{colors.beacon-blue}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0 23px"
    minHeight: "44px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.deep-sea}"
    rounded: "{rounded.pill}"
    padding: "0 23px"
  collection-badge:
    backgroundColor: "transparent"
    textColor: "{colors.deep-sea}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    minHeight: "38px"
  tag-chip:
    backgroundColor: "{colors.shell-quiet}"
    textColor: "{colors.tide-slate}"
    rounded: "{rounded.pill}"
    padding: "7px 10px"
  card:
    backgroundColor: "{colors.surf-foam}"
    textColor: "{colors.deep-sea}"
    rounded: "{rounded.md}"
    padding: "24px"
  input-search:
    backgroundColor: "transparent"
    textColor: "{colors.deep-sea}"
    rounded: "{rounded.lg}"
    padding: "18px 20px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.deep-sea}"
    rounded: "{rounded.sm}"
    padding: "9px 0"
---

# Design System: App Waypoint

## Overview

**Creative North Star: "Quiet harbor editorial"**

App Waypoint feels like a calm dock under overcast light: cool paper, deep-water text, and a single reliable blue used sparingly so the page never shouts. It is editorial rather than promotional, organized like a magazine, but laid out like a utility. Dense information sits inside soft cards and quiet section breaks instead of loud banners.

The language prefers stable geometry, soft depth, and generous breathing room. Serif headlines carry the authority; the system sans supports the utility layers, controls, and metadata. The result is familiar and trustworthy, with enough atmosphere to feel considered but not styled for its own sake.

**Key Characteristics:**
- White paper on a cool fog-grey field, with navy ink.
- Beacon blue reserved for actions and current states.
- Serif headlines, system-sans utility.
- Soft 10-18px radii and ambient shadows.
- Dense content organized through cards, chips, and careful spacing.

## Colors

The palette is a two-mode harbor system: white paper on fog grey with navy ink by day, deep water and moon ink by night. The light-mode greys sit on Deep Sea's hue rather than on a neutral ramp, so the field reads as harbor weather instead of default UI grey. Blue is the only strong accent and stays carefully rationed.

### Primary
- **Beacon Blue** (#0862d8): primary buttons, links, active states, and key affordances.
- **Buoy Blue** (#57a2ff): the dark-theme accent and lighter emphasis layer.

### Neutral
- **Harbor Fog** (#e8ecf1): the outer page field, a cool grey on the ink's own hue.
- **Drift Mist** (#f4f6f9): header and footer atmosphere.
- **Surf Foam** (#ffffff): the primary surface color for cards and panels. Foam is the brightest thing in the harbor, so the card surface is true white and every other light tone sits below it.
- **Shell Strong** (#e3e8ee): the control fill — hover and focus feedback on icon buttons, nav items, search rows, and the filter count badge.
- **Shell Quiet** (#f0f3f7): the chip fill, one step quieter than the control fill. Tag chips are metadata that should recede on a card, not controls asking to be pressed, so they sit at roughly half Shell Strong's distance from the card surface — the same step the night theme already gives them.
- **Deep Sea** (#092443): the primary light-theme ink.
- **Tide Slate** (#4d5762): secondary text and metadata.
- **Line Water** (rgba(9, 35, 66, 0.2)): borders and separators.
- **Header Fog** (rgba(244, 246, 249, 0.96)): the light sticky header.

### Night Shift
- **Night Harbor** (#091321): the dark page field.
- **Abyss** (#020b18): the darkest surrounding canvas.
- **Midnight Surface** (#0b1c30): the primary dark surface.
- **Midnight Surface Strong** (#10253b): the dark surface contrast tone, and the value Shell Quiet resolves to at night — the night chip was already sitting at the quiet step, which is why only the day chip had to move.
- **Moon Ink** (#f3ecdf): the main dark-theme foreground.
- **Fog Mist** (#afb6bf): muted dark-theme copy.
- **Night Line** (rgba(217, 229, 240, 0.2)): borders and separators in dark mode.
- **Buoy Blue Hover** (#81b8ff): the brighter dark-theme hover state.
- **Night Header Fog** (rgba(4, 20, 38, 0.96)): the dark sticky header.

### Atmosphere
These are drawn, not printed: they exist only inside the homepage hero's canvas layers and never carry text, controls, or state.

- **Sea Ink** (`9 35 66` by day, `226 236 250` at night): RGB triples rather than hex so the wave band and star field can vary alpha per line. They are Deep Sea and a pale moon tone, not new colours.

**The Fog Rule.** Every light-mode neutral sits on Deep Sea's hue — OKLCH hue 253–258, the ink's own axis — at a chroma of 0.010 or less: Surf Foam 0.000, Drift Mist 0.005, Harbor Fog 0.008, Shell Strong 0.010, Shell Quiet 0.006. That is what keeps the field reading as harbor weather rather than default UI grey. A neutral off that axis, or any warm tone reintroduced into the light theme, breaks the day palette. The ink, the hairline, and the blue are shared with the old warm scheme and did not move.

**The Beacon Rule.** Blue is reserved for actions, links, focus, and active states. It should not become page chrome or decorative noise. The palette carries no warm accent: a light wash behind the hero was tried and removed for drawing attention to itself rather than to the pick it sat behind.

## Typography

**Display Font:** Iowan Old Style, Baskerville, "Times New Roman", serif
**Body Font:** -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif
**Label Font:** -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif

The type system is split between a classic editorial serif for the headlines and a practical system sans for everything that carries utility, metadata, or navigation. The App Waypoint wordmark uses the same editorial serif as the headline system so the brand voice stays consistent.

### Hierarchy
- **Display** (500, clamp(4rem, 8vw, 6rem), 0.92): held in reserve. Nothing currently uses it — the app detail title was its last user and now takes Headline like every other page title. Reintroduce it only for a surface that genuinely outranks a page title.
- **Headline** (500, clamp(3.25rem, 5.1vw, 4.25rem), 0.96): every page title — archive, explore, about, tag, collection, category, and app detail. Delivered through `--type-page-title`, which steps down to clamp(2.8rem, 12vw, 3.75rem) below 680px so long titles wrap instead of overflowing.
- **Section Title** (500, clamp(2.2rem, 4vw, 3.8rem), 1.0, -0.03em): the heading that opens a section within a page, on every page including About. Delivered through `--type-section-title`. A heading nested *inside* a card is a rank below this and sets its own smaller size.
- **Subhead** (600, fluid 1.9-2.35rem, 1.1): the hero's issue number, its Editor's Pick title, and headings nested inside a card — the step between a section title and a card title.
- **Title** (600, 1.4rem, 1.15): card titles, app names, and the name of a category or collection wherever it appears — app detail, explore, and the category directory all set it at this one size.
- **Dek** (400, clamp(1.12rem, 1.4vw, 1.25rem), 1.58): the standfirst under a title, page or section. One clear step above body — never level with it — muted in colour, and identical everywhere. Delivered through `--type-dek`.
- **Body** (400, 1rem, 1.55): descriptions, explanations, and editorial copy.
- **Label** (800, .78rem, .1em, uppercase): eyebrows, small UI labels, control legends, and counts inside chips. There is no size below this one — a label that felt it needed to be smaller was drift, not a role.
- **Metadata** (600, .84rem, 1.45): counts, sources, and secondary operational information.
- **Brand** (500, fluid 1.35-2rem): the App Waypoint wordmark set in the same editorial serif as the headline system.

**The Even Rule Rule.** A horizontal rule carries the same space above it as below it. That space is `--section-space` — clamp(26px, 3.8vw, 40px), one value for the whole site — and it belongs to whatever sits on either side, which means a page's opening block pays the bottom half before the first divider. A rule that hugs the content above it is the tell that a block forgot to close on the rhythm. The rhythm is close rather than airy on purpose: the pages are dense and the rules are hairlines, so a wide gap reads as a gap rather than as a division. The only blocks that sit tighter are the ones that follow a drawn divider instead of a rule, where there is no rule to be symmetric with.

**The One Measure Rule.** All prose runs to `--measure` (52ch) and nothing else. Because `ch` scales with the element's own font size, the same token holds roughly seventy characters at the dek's 17.9px, at body's 16px, and at the footnote's 13.4px — a pixel column cannot do that, it just widens as the type shrinks. Every prose surface is on it: deks, About, footnotes, best-for, panel copy, feature-card copy, and category descriptions. A fixed-pixel `max-width` on running text is a bug.

**The One Page Title Rule.** Every page opens the same way: the title in Headline at `--type-page-title`, hard against the shell's `--page-start-space`, with no margin of its own, and the dek 15px beneath it at `--type-dek`. App detail pages are not an exception — the app name is a page title, not a bigger thing. A page that wants more presence gets it from its composition below the fold, never from a private type scale.

**The Plain Dash Rule.** Public editorial copy uses no em dash and no en dash. Restructure to a period, a comma, a colon, or parentheses, and set number and date ranges with a plain hyphen: `August 5-19, 2026`, not `August 5–19, 2026`. The em dash is the clearest tell of machine-drafted prose, and this publication is human-led by design. Three things sit outside the rule and stay as they are. Page-title separators are an SEO and publishing convention and are indexed, so `Archive — App Waypoint` is correct. Quoted external titles in source notes and reading lists keep their own punctuation, because changing it misquotes the source. Code comments are not copy and no reader sees them. The rule governs the site's public copy, not this repository's documentation. General frontend guidance in `.agents/skills/taste-skill` states a blanket zero-tolerance ban covering titles as well; that is a marketing-page heuristic, this narrower rule is what governs here, and the vendored skill is deliberately left unedited so it stays diffable against upstream.

**The Serif-Utility Split.** Serif type carries the editorial voice; the system sans carries the operational voice. Mixing them casually weakens both jobs.

## Layout

The site uses a shared centered shell with a maximum width of 1160px and responsive gutters that resolve to 20px on desktop and 12px on mobile. The same shell is used across app detail, tag, collection, archive, and about pages so the directory feels like one system instead of separate templates.

About is not a special case: its headings sit in ordinary `.section` blocks at full shell width, and only its paragraphs take `--measure`. A section rule is always flanked symmetrically by `--section-space` (clamp(26px, 3.8vw, 40px), so 40px on desktop and 26px on a phone — the cap lands exactly on the 3xl spacing step), including the first rule on a page — a page's opening block closes on that same space so the rule lands centred rather than hugging the paragraph above it. The homepage opens wider and more scenic, but its content still obeys the same page rhythm: full-width header and footer, then a controlled interior with sections separated by thin rules. Desktop cards usually live in a three-column grid; below 920px the grid collapses to one column and the pages stop pretending they are desktops. Around 680px the mobile gutters tighten, the header simplifies further, and coarse-pointer contexts inherit larger hit targets even when they are wider than a phone.

Prose everywhere runs to `--measure`, so the reading column is the same width in characters on every page regardless of the type size sitting in it. App detail pages use the same shell and the same page-title and dek roles as every other interior page; what makes them editorial is the composition below the title — content set directly on the page field rather than in a card, a two-column best-for/tags panel, and a narrower related-apps grid. Section spacing is generous but disciplined, with more space above headings than below them.

## Elevation & Depth

Depth is soft and ambient rather than structural. Surfaces stay flat at rest, then gain soft shadows, border contrast, and subtle hover lift when they need separation. The sticky header and search overlay add atmosphere with blur and translucency, but the system never relies on hard offsets or gimmicky glow.

### Shadow Vocabulary
- **Ambient Card** (`box-shadow: 0 18px 55px rgba(27, 35, 42, 0.08)`): resting cards and surface containers.
- **Hover Lift** (`box-shadow: 0 26px 68px rgba(27, 35, 42, 0.11)`): hovered cards and callout surfaces. The light-theme lift is deliberately shallow — a 1.4x step over the resting shadow rather than a new weight — because the white card already separates from the fog field on value alone.
- **Night Ambient** (`box-shadow: 0 20px 60px rgba(0, 0, 0, 0.24)`): dark-theme resting surfaces.
- **Night Hover** (`box-shadow: 0 28px 72px rgba(0, 0, 0, 0.42)`): dark-theme hover elevation.

**The Soft Hull Rule.** Surfaces lift with a soft shadow and a border change, not with hard edges or dramatic offsets. The lift settles rather than snaps: cards cross to their hover state over 320ms on `cubic-bezier(.16, 1, .3, 1)`, the same exponential ease-out the brand wordmark uses.

## Shapes

The shape language is rounded but disciplined. Cards use 12px corners, search overlays sit at 14px on mobile and 18px on desktop, and control menus stay close to 10px so they feel compact rather than playful. Buttons and tag chips go all the way to pills, while the logo and footer mark stay circular. The result is friendly without becoming bubbly.

The system prefers clipped rectangles, thin borders, and deliberate rounding over ornate silhouettes. Geometry stays stable so the content can carry the personality.

## Motion

Motion is used sparingly and always to mark passage: where the reader is in a page, and what they have just reached. The vocabulary is four easing tokens and everything on the site uses one of them. `ease-standard` (180ms) for routine state changes on buttons, links, and cards. `ease-quick` (120ms) for micro-feedback such as search-result highlighting. `ease-emphasis` (240ms) for the hero-aware header states. `ease-settle` (320ms on `cubic-bezier(.16, 1, .3, 1)`) for card hover elevation, an exponential ease-out that settles instead of snapping.

**The Passing Waypoint Rule.** Content fades in as the reader reaches it, at one duration and one curve for the whole site: 400ms on `cubic-bezier(.16, 1, .3, 1)`, opacity only. No stagger, no directional movement, no per-section variation. A staggered cascade across a grid reads as a left-to-right sweep and was tried and removed for exactly that reason. One `IntersectionObserver` in `BaseLayout.astro` drives every page, and pages opt in through two attributes:

- `data-reveal` fades the element itself. Use it where a page is built from sections: the issue spine, the explore rows, the app-detail related block.
- `data-reveal-items` fades each child instead. Use it where one long grid of cards is the whole page, as on the tag, category, collection, and all-apps directories, where the card rather than the section is the unit the reader arrives at.

Three properties of the implementation are load-bearing and should not be changed casually:

1. **Content ships visible.** The `is-motion-ready` class that hides content is added by script, never written into the markup. A failed script, an old browser, or a crawler gets a finished page instead of an empty one.
2. **It is an animation, not a transition.** A transition would have to declare `opacity` and `transform` on the card itself, and that declaration outranks `.app-card:hover` for the rest of the session, silently breaking The One Hover Rule. The keyframe fills `backwards`, so it leaves no value behind once it has run and the hover contract survives intact.
3. **Each target is released as it fires.** A fully read page is observing nothing.

Reduced motion is guarded twice: the observer never arms itself, and a `@media (prefers-reduced-motion: reduce)` block restores full opacity for a reader who turns the preference on after the page has loaded.

**The Struck Light Rule.** The Editor's Pick card in the hero is lit by the featured app's own colour, and that light moves. Two continuous animations, both on pseudo-elements of that one card: a wide, soft wash that drifts across the interior over 28s, and a gleam that travels the card's edge over 11s like light crossing a struck plate. Nothing else on the site does this, and nothing else should; the effect is reserved for the one app an issue argues for.

Four things hold it inside the design system:

1. **The colour is normalised, never raw.** Across the current picks the dominant icon hues run from a fully saturated magenta to a near-black brown. `scripts/extract-icon-accent.mjs` fixes every pick to one lightness and chroma in OKLCh, so the card reads at the same weight whichever app is featured. The result is committed to the app record as `iconAccent` and reviewed like an icon.
2. **The Beacon Rule survives.** Blue still owns actions, links, focus and active states. The pick colour is light on a single card. It never reaches a control, a link or a state.
3. **It degrades to nothing.** A pick whose icon is absent, an SVG, or carries no usable hue has no `iconAccent`, and the card renders exactly as it did before. The treatment never half-applies.
4. **The wash is its own layer.** It sits on a pseudo-element at negative z-index inside the card's stacking context, not in the card's background. The shared hover contract sets the `background` shorthand, which would drop a background image, and routing the gradient through an intermediate custom property stops the drift resolving at all. Both were real bugs; the layer avoids both.

Because the card rests at Hover Lift rather than Ambient Card, it cannot answer the pointer with elevation the way The One Hover Rule describes. It answers with light instead: an accent-tinted depth under the card. Both loops pause when the card is off screen and stop entirely under reduced motion.

**The buoy stays the one authored moment.** The mark on the content divider flashes once as the reader passes it, and the source-note timeline draws itself in sequence. Those are deliberate and they are the only motion on the page with a voice. The section fades are quiet on purpose so that nothing competes with them. The hero does not move at all: it sits above the fold, there is no passage to mark, and its atmosphere is painted once.

**Adding a page.** A new page that renders app cards or content sections gets the matching attribute in its markup and needs nothing else registered. A page whose sections are left unmarked simply will not fade, which reads as broken beside the pages that do. The archive index and the category index are currently unmarked on purpose: they list issue cards and category cards rather than app cards.

## Components

### Buttons
Buttons are quiet, pill-shaped workhorses: obvious, tactile, and not over-embellished.
- **Shape:** 999px pill for the primary and secondary CTA buttons.
- **Primary:** blue fill, white text, 44px minimum height, 23px horizontal padding, and a small icon gap. A button is as wide as its label — never a fixed box padded out to a round number.
- **Hover / Focus:** the blue deepens on hover, and focus is handled with a clear accessible outline rather than a visual stunt.
- **Secondary:** transparent fill, ink text, and a borderless or low-border utility presence.
- **Icon Buttons:** the header search, archive, and theme controls are 38px squares on desktop, but expand to 44px targets on mobile and coarse-pointer devices.

**The Two Control Heights.** Every pill control is built the same way — inline-flex, a `min-height`, horizontal padding, no vertical padding — and stands at one of two heights: **44px** for a primary action and **38px** for a secondary one, rising to 44px on coarse pointers. Rank comes from the height and the fill, never from a different construction. A control that sets vertical padding instead of a min-height will drift out of the pair the moment its type changes.

### Collection Badges
The collection badge on an app detail page is a link to a curated collection: a 38px outlined pill carrying an icon and a Title-case name.
- **Style:** transparent fill over the page, 1px `--line` border, ink text at Metadata weight, pill radius, 14px horizontal padding.
- **Rank:** it sits directly above the primary button in the app-detail stack, and reads as the quieter of the pair — same pill, one height down, no fill.
- **State:** hover and focus move the border toward blue and tint the label, the same move a card makes.

### Tag Chips
Tag chips are compact chips rather than buttons. They read as metadata first.
- **Style:** soft Shell Quiet fill, muted text, 999px radius, lowercase labels. The chip reads as a label with a soft ground behind it, never as a button.
- **State:** hover and focus tint the chip toward blue without making it feel selected. The label takes the accent's *hover* value, not the accent itself, so the text still clears 4.5:1 against the tinted pill (5.50:1) — the plain accent lands at 3.89:1 there and is not legible enough.

### Cards
Cards are the primary container language for apps, readings, and archive entries. Apparatus — source notes and other secondary matter — is set as footnotes under a hairline instead, so a card always means a thing worth looking at rather than a thing worth reading past.
- **Corner Style:** 12px radius on most cards.
- **Background:** the surface color — white by day — with a faint border and soft shadow.
- **Internal Padding:** usually 24px, with denser or looser variants where the content demands it.
- **Behavior:** hover deepens the shadow and shifts the border toward blue on pointer devices, settling over 320ms rather than snapping.

**The One Hover Rule.** Every card that leads somewhere shares one hover contract: rest at Ambient Card, move to Hover Lift and a border of `color-mix(in srgb, var(--accent) 42%, var(--line))`, cross over 320ms on `cubic-bezier(.16, 1, .3, 1)`, and do it only under `(hover: hover) and (pointer: fine)`. App cards, feature cards, reading cards, archive rows, category directory rows, and the app-detail category cards are all on it. A card that carries a category accent keeps that accent in its resting border and gives it up on hover; nothing else about the contract changes per card type.

Two things are deliberately outside it. Cards that are containers rather than destinations — the explore utility and subscribe cards, which hold their own links and controls — stay flat, because a lift would promise a click the card does not accept. And the explore carousel suppresses the lift on its stacked cards, since a shadow change fights the rotation and depth the stack is already using to say the same thing.

### Site Header and Navigation
The header is sticky, translucent, and restrained. The brand wordmark uses the same editorial serif as the headline system, while the icon controls stay compact and monochrome until hover or focus gives them blue.
- **Desktop:** brand on the left, search/archive/theme controls on the right.
- **Mobile:** the navigation compresses and some links hide outside the issue page context.
- **Hover / Active:** navigation links underline on hover and active state, with accent color reserved for the current page.

### Directory Filter Menu
The filter menu is a compact popover, not a modal. It is designed to support fast scanning and quick edits to the current page state.
- **Shape:** 10px control radius with a clipped popover edge.
- **Behavior:** the menu closes when an optional filter is chosen, but stays open when a filter is cleared.
- **States:** disabled controls mark the defining tag or collection so the page cannot be unselected away from itself.

### Search Modal
Search is a centered overlay with a frosted dark backdrop and a bright, controlled surface.
- **Shape:** 18px radius on desktop, 14px on mobile.
- **Structure:** input row, result count, then a scrollable result list.
- **Behavior:** the backdrop blurs, the modal remains narrow enough to feel deliberate, the app index loads on demand, and results behave like normal focusable links rather than a custom combobox.

### Homepage Hero

There is one hero. Issue pages render the same composition as the homepage; the only difference is which element carries the `h1` and whether the eyebrow reads *Current* or *Archived issue*.
A full-bleed band whose content sits on the shared page shell, so the wordmark aligns with every section heading below it. It carries no artwork.

- **Structure:** identity (wordmark, wave rule, tagline) over a hairline, then the issue block; the Editor's Pick renders beside it as a real `AppCard`, the only card in the fold.
- **Atmosphere:** two drawn layers — a star field (night only) and an engraved wave band. All canvas, no image request, painted once and repainted only on theme change or resize. The day sky above the water stays empty; a cloud bank was drawn there and removed for adding noise rather than calm.
- **The waterline.** The band's ground fades to the page colour across the wave band and the strokes taper to nothing, so the hero ends on the colour the next section begins with. A single `--sea-h` drives the canvas height, the bottom padding, and the fade distance.
- **Motion:** the band and its atmosphere are still, and that stillness is the documented exception to The Passing Waypoint Rule. Everything below the fold fades in as the reader reaches it; the hero does not, because it sits above the fold, there is no passage to mark, and its atmosphere is painted once rather than animated. Do not add a load-in entrance here to make it match the sections below. The Editor's Pick card is the single moving thing in the fold, under The Struck Light Rule, and it earns that by being the one app the issue is arguing for.
- **Call to action:** two anchors, one hidden per breakpoint. Above 920px *Start Reading* goes to the first section; below it — where the pick has stacked underneath — it goes to the pick. 920px is where the hero collapses to one column, so the swap and the stack happen together.

## Do's and Don'ts

### Do:
- **Do** keep the fog-grey field, white paper, deep-sea text, and blue accent in a tight relationship.
- **Do** reuse the shared page shell so archive, tag, collection, about, and app pages line up.
- **Do** keep shadows soft and ambient.
- **Do** let serif headlines carry the editorial voice while system sans handles utility.
- **Do** keep the defining tag or collection locked when it is the page’s own context.
- **Do** mark new sections and card grids with `data-reveal` or `data-reveal-items` so a new page fades in like the rest of the site.
- **Do** keep the uppercase eyebrow above section and card headings. General design guidance treats a kicker above a heading as filler; here it is load-bearing house style — it names the issue section, the pick, and the current-issue block, and it is the documented Label role. This is a deliberate, standing exception.

### Don't:
- **Don't** introduce loud secondary colors just to add energy.
- **Don't** reintroduce warm sand or cream into the light theme; the day palette is white and Deep-Sea-tinted grey.
- **Don't** replace the soft shadow system with hard offsets or heavy glow.
- **Don't** use tinted text as neutral gray on colored surfaces.
- **Don't** make chips, filters, or buttons feel like separate UI worlds.
- **Don't** let the brand wordmark typography spread into body copy.
- **Don't** stagger, slide, or otherwise vary the scroll reveal per section. One fade, one duration, one curve, everywhere.
- **Don't** write the reveal's hidden state into the markup. It is added by script so the page ships visible.
- **Don't** use em dashes or en dashes in public editorial copy.
- **Don't** let the Editor's Pick accent leave that one card, or reach a link, control or state. It is light, not a second accent.
- **Don't** hand-write an `iconAccent`. Generate it so every pick lands in the same lightness and chroma band.
