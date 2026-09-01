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
  mono:
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'
    fontSize: "0.94rem"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "0"
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
  ml: "14px"
  lg: "16px"
  xl: "18px"
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

**The Eyebrow Binding Rule.** An eyebrow names the block beneath it, so the gap that binds the two is one value for the whole site: `--eyebrow-gap`, 11px. Every eyebrow on every surface uses it, whether it comes from the `.eyebrow` margin in normal flow or from a grid `gap` where the group is laid out as a grid. A surface that sets its own number drifts out of the pair, and that is exactly how the app-detail rail ended up with 14px inside its groups while the rest of the site sat at 11px, and 40px before one eyebrow against 22px before the next.

The rhythm is two values, not one. **11px binds an eyebrow to its content; 24px separates one labelled group from the next.** That contrast is what makes a rail read as three groups rather than one list, and it is why the separation never needs a rule drawn between the groups. Note that 11px sits between the `sm` and `md` steps of the spacing scale: it is the established value across every existing surface, held in a token rather than repeated, and worth revisiting only as a deliberate site-wide pass.

**The One Measure Rule.** All prose runs to `--measure` (52ch) and nothing else. Because `ch` scales with the element's own font size, the same token holds roughly seventy characters at the dek's 17.9px, at body's 16px, and at the footnote's 13.4px — a pixel column cannot do that, it just widens as the type shrinks. Every prose surface is on it: deks, About, footnotes, best-for, panel copy, feature-card copy, and category descriptions. A fixed-pixel `max-width` on running text is a bug.

**The One Page Title Rule.** Every page opens the same way: the title in Headline at `--type-page-title`, hard against the shell's `--page-start-space`, with no margin of its own, and the dek 15px beneath it at `--type-dek`. App detail pages are not an exception — the app name is a page title, not a bigger thing. A page that wants more presence gets it from its composition below the fold, never from a private type scale.

**The Plain Dash Rule.** Public editorial copy uses no em dash and no en dash. Restructure to a period, a comma, a colon, or parentheses, and set number and date ranges with a plain hyphen: `August 5-19, 2026`, not `August 5–19, 2026`. The em dash is the clearest tell of machine-drafted prose, and this publication is human-led by design. Three things sit outside the rule and stay as they are. Page-title separators are an SEO and publishing convention and are indexed, so `Archive — App Waypoint` is correct. Quoted external titles in source notes and reading lists keep their own punctuation, because changing it misquotes the source; source notes stopped being published on 2026-09-01 but are still written and still validated, so the exception still governs how they are recorded. Code comments are not copy and no reader sees them. The rule governs the site's public copy, not this repository's documentation. General frontend guidance in `.agents/skills/taste-skill` states a blanket zero-tolerance ban covering titles as well; that is a marketing-page heuristic, this narrower rule is what governs here, and the vendored skill is deliberately left unedited so it stays diffable against upstream.

**The Serif-Utility Split.** Serif type carries the editorial voice; the system sans carries the operational voice. Mixing them casually weakens both jobs. The mono face is the third voice and the narrowest: it is for data a reader might copy, which today means the RSS feed URL and nothing else. It is not a costume for looking technical.

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

The shape language is rounded but disciplined. Two radii sit outside the scale on purpose: the app icon frames at 11px and 13px are proportional to the icon they hold, roughly 22% of its side, which is what keeps a rendered mark reading as a macOS icon rather than a rounded box.

 Cards use 12px corners, search overlays sit at 14px on mobile and 18px on desktop, and control menus stay close to 10px so they feel compact rather than playful. Buttons and tag chips go all the way to pills, while the logo and footer mark stay circular. The result is friendly without becoming bubbly.

The system prefers clipped rectangles, thin borders, and deliberate rounding over ornate silhouettes. Geometry stays stable so the content can carry the personality.

## Motion

Motion is used sparingly and always to mark passage: where the reader is in a page, and what they have just reached. The vocabulary is four easing tokens and everything on the site uses one of them. `ease-standard` (180ms) for routine state changes on buttons, links, and cards. `ease-quick` (120ms) for micro-feedback such as search-result highlighting. `ease-emphasis` (240ms) for the hero-aware header states. `ease-settle` (320ms on `cubic-bezier(.16, 1, .3, 1)`) for card hover elevation, an exponential ease-out that settles instead of snapping.

**The Struck Light Rule.** The Editor's Pick card in the hero is lit by the featured app's own colour, and that light moves. Two continuous animations, both on pseudo-elements of that one card: a wide, soft wash that drifts across the interior over 28s, and a gleam that travels the card's edge over 11s like light crossing a struck plate. Nothing else on the site does this, and nothing else should; the effect is reserved for the one app an issue argues for.

Four things hold it inside the design system:

1. **The colour is normalised, never raw.** Across the current picks the dominant icon hues run from a fully saturated magenta to a near-black brown. `scripts/extract-icon-accent.mjs` fixes every pick to one lightness and chroma in OKLCh, so the card reads at the same weight whichever app is featured. The result is committed to the app record as `iconAccent` and reviewed like an icon.
2. **The Beacon Rule survives.** Blue still owns actions, links, focus and active states. The pick colour is light on a single card. It never reaches a control, a link or a state.
3. **It degrades to nothing.** A pick whose icon is absent, an SVG, or carries no usable hue has no `iconAccent`, and the card renders exactly as it did before. The treatment never half-applies.
4. **The wash is its own layer.** It sits on a pseudo-element at negative z-index inside the card's stacking context, not in the card's background. The shared hover contract sets the `background` shorthand, which would drop a background image, and routing the gradient through an intermediate custom property stops the drift resolving at all. Both were real bugs; the layer avoids both.

Because the card rests at Hover Lift rather than Ambient Card, it cannot answer the pointer with elevation the way The One Hover Rule describes. It answers with light instead: an accent-tinted depth under the card. Both loops pause when the card is off screen and stop entirely under reduced motion.

**The buoy stays the one authored moment.** The mark on the content divider flashes once as the reader passes it. That is deliberate, and it is the motion on the page with a voice, alongside the light on the Editor's Pick card and the archive timeline in the closer. That third one is the sequence that used to draw the source notes: it retired with them on 2026-09-01 and came back the same day on the list of past issues, which is the thing it was always describing. A buoy chain marks a route, and a route back through the archive is a truer subject for it than a list of research sources ever was. The move was not an animation being owed a replacement; it was the animation finding its content.

**The Swell Rule.** The water moves, and it is the only thing on the page that moves without wanting to be noticed. Both wave bands, the hero's waterline and the content divider's, breathe: the crests hold their positions while the height of the water and the weight of its second harmonic settle and return, on periods of 23 and 31 seconds that do not divide into one another, so the band never repeats a state the eye can catch.

Each line is four components, and the two carrying most of its height travel in **opposite directions at almost the same wavelength**. They beat against each other, so crests build and dissolve where they are instead of marching across. That is the part that reads as water.

Two earlier versions got this wrong in opposite ways, and both were measured rather than argued about. Amplitude breathing alone moved a crest 5px over 23 seconds, roughly a clock's minute hand: running, and invisible. A single travelling wave was legible but 83% of its motion was pure translation, so it read as a picture being dragged sideways. The counter-travelling pair puts 70% of the motion into shape change and cuts the residual drift from 25px every two seconds to 10.

The pair is deliberately unequal, 0.46 against 0.32, because an even pair cancels to a flat line at the bottom of each beat. Unequal, the water calms without going still, and since each line carries its own phase offset the calm never crosses the whole band at once.

Two things keep it ambient rather than a fourth animation competing for attention. **It is slow**: a crest takes over two minutes to cross the band, so the eye reads it as atmosphere and never tracks it. **The still painting is the high-water mark**, not the midpoint; the swell only ever calms below it. That is not an aesthetic choice but a structural one, because the band was already tuned so the topmost crest clears its canvas by 7px, and a swing either side of the still level spent that margin and flattened the crests against the edge. **Each band is drawn only while it is on screen**, the loop stops when the tab is hidden, and reduced motion leaves the water painted once and still. Component weights are kept small because four waves can align where two could not: at their first values the band cut straight through the top of its canvas at the narrowest hero, where `--sea-h` clamps to 78px. Any change to a weight has to be checked against every height that clamp can produce, not just the widest.

The hero previously stated that its atmosphere never moved. That was true of the star field, which is still painted once, and it is the right instinct for a page that should feel calm. It was wrong about the water: a harbour whose sea is frozen reads as a photograph of a harbour.

## Components

### Buttons
Buttons are quiet, pill-shaped workhorses: obvious, tactile, and not over-embellished.
- **Shape:** 999px pill for the primary and secondary CTA buttons.
- **Primary:** outlined, not filled. A 1px blue border and a blue label over the page, 44px minimum height, 23px horizontal padding, and a small icon gap. A button is as wide as its label — never a fixed box padded out to a round number. It carried a blue fill with white text until the dark palette exposed why that could not hold: Buoy Blue is tuned to be legible as ink *on* the dark surface, so inverting it into a ground put white text at 2.62:1, well under AA, and made the button the brightest object on the page. As a label the same blue clears AA in both themes (5.17:1 light, 7.54:1 dark).
- **Hover / Focus:** the blue deepens on hover, and focus is handled with a clear accessible outline rather than a visual stunt.
- **Secondary:** transparent fill, ink text, and a borderless or low-border utility presence.
- **Icon Buttons:** the header search, archive, and theme controls are 38px squares on desktop, but expand to 44px targets on mobile and coarse-pointer devices.

**The Target Floor Rule.** Anything a reader taps carries a minimum target: 24px, and the 44px the control system already gives every pill on a coarse pointer. This is not only for pills. Footer navigation, the explore section links, the carousel's directory link and the feature card's outbound link were each the height of their own text, 16 to 21px, because a bare link has no box unless it is given one.

An icon link too small to grow gets its hit area expanded around it instead of being padded out, so the line it sits in is undisturbed. The Editor's Pick mark beside an app name works that way, and stops at 24px rather than 44px because a larger area would start taking taps meant for the title. A link inside a sentence is exempt and stays inline; the RSS link in the subscribe copy is the one that qualifies.

**The Two Control Heights.** Every pill control is built the same way — inline-flex, a `min-height`, horizontal padding, no vertical padding — and stands at one of two heights: **44px** for a primary action and **38px** for a secondary one, rising to 44px on coarse pointers. Rank comes from the height and from whether the border and label carry the accent or the neutral line, never from a fill and never from a different construction. Nothing on the site is a filled control. A control that sets vertical padding instead of a min-height will drift out of the pair the moment its type changes.

### Collection Badges
The collection badge on an app detail page is a link to a curated collection, and it is the rarest fact on that page: six of a hundred apps carry one. It is an honour marker, not a chip. It was a 38px outlined pill sitting above the primary button, where it read as a second, weaker control; it now opens the detail rail.
- **Style:** the collection's mark beside its name in ink at Metadata weight 700. Built exactly like a category row: no container, no ring, no fill, and the glyph simply inherits the row's colour and turns blue with it on hover. A ring around the mark made the mark the loud thing rather than the honour.
- **Rank:** first item in the rail, above Categories and Tags. Rank comes from position, from the label sitting in ink at weight 700 where a category label sits muted at 600, and from a 44px row against the category rows' 34px. Never from a colour of its own.
- **Named, like its neighbours.** The group carries a `Collections` eyebrow and 18px of clear space beneath it. It was the only unlabelled group in the rail, which is why it read as orphaned: every other group on the site is named by an eyebrow, and this one had opted out of the house's own strongest device. Setting the names in the display serif at Title was tried for the same reason and rejected; the rail keeps one voice.
- **Marks:** 19px, the same as a category mark. Lucide scales its stroke with the glyph, so an icon set larger here would render a heavier stroke and put one icon family at two weights in a single column.
- **Separation:** space alone divides it from the taxonomy below. A rule there reads as a container seam and competes with the thing it is meant to set apart.
- **State:** hover tints the label blue and the mark follows it. Focus adds the accent outline the carousel already uses, because colour alone is not a focus indicator.

### Tag Chips
Tag chips are compact chips rather than buttons. They read as metadata first.
- **Style:** soft Shell Quiet fill, muted text, 999px radius, lowercase labels. The chip reads as a label with a soft ground behind it, never as a button.
- **State:** hover and focus tint the chip toward blue without making it feel selected. The label takes the accent's *hover* value, not the accent itself, so the text still clears 4.5:1 against the tinted pill (5.50:1) — the plain accent lands at 3.89:1 there and is not legible enough.

### Cards
Cards are the primary container language for apps, readings, and archive entries. Apparatus and secondary matter are set under a hairline instead, so a card always means a thing worth looking at rather than a thing worth reading past. An app card carries three regions and nothing else: the summary, the best-for line, and the tags. It used to end with a source credit; that was provenance for the editor rather than information for the reader, and removing it took a whole region off every card.
- **Corner Style:** 12px radius on most cards.
- **Background:** the surface color — white by day — with a faint border and soft shadow.
- **Internal Padding:** usually 24px, with denser or looser variants where the content demands it.
- **Behavior:** hover deepens the shadow and shifts the border toward blue on pointer devices, settling over 320ms rather than snapping.

**The One Card Height Rule.** Every app card on a page is the same height, and the regions inside them line up across the whole grid rather than only within a row. The grid defines three repeating tracks and each card spans them as a subgrid, so a card agrees with the one beside it and the one two rows below it.

The floors are what the tallest record in the catalogue actually needs, measured across all 102: `230/149/122` where the three columns are narrowest, settling to `205/99/88` above 1100px once the content column stops growing.

**The floors only apply where the grid is multi-column.** Below 921px each card is its own height. A single column has no neighbour to agree with, so a floor buys nothing there and costs a great deal: the budgets are sized for a card about 270px wide, while a one-column card is 351px and wraps far less, so on a phone they were adding a median of 159px to every card and 17,000px of scrolling to the directory. The first and last include the card's 24px padding, because a subgrid item's padding comes out of the tracks it spans. They are `minmax(floor, auto)` rather than fixed heights, so a future record that outgrows its budget makes its own band taller instead of being clipped.

This replaced a set of fixed `min-height` budgets on each region. Those were guesses, and any card that overflowed one — a second line of tags was the usual culprit — pushed everything below it out of step with the rest of the row.

**Reading cards are the exception, and align on their own terms.** They carry `.app-card` too, but hold three parts inside a wrapper rather than three children, so the card and the wrapper both subgrid onto the shared rows. They take no floors: a reading card should be as tall as the longest of the three and no taller. Their own `min-height` budgets were doing the same job far worse, reserving three lines of title space for a one-line headline and leaving the card half again as tall as it needed to be.

**The One Hover Rule.** Every card that leads somewhere shares one hover contract: rest at Ambient Card, move to Hover Lift and a border of `color-mix(in srgb, var(--accent) 42%, var(--line))`, cross over 320ms on `cubic-bezier(.16, 1, .3, 1)`, and do it only under `(hover: hover) and (pointer: fine)`. App cards, feature cards, reading cards, archive rows, and category directory rows are all on it, the last two through `.archive-card`. A card that carries a category accent keeps that accent in its resting border and gives it up on hover; nothing else about the contract changes per card type.

Three things are deliberately outside it. The app-detail rail's category rows are links in a list rather than cards, so they answer the pointer with the accent over 180ms and take no lift; they were bordered cards until the rail replaced them. Cards that are containers rather than destinations — the explore utility and subscribe cards, which hold their own links and controls — stay flat, because a lift would promise a click the card does not accept. And the explore carousel suppresses the lift on its stacked cards, since a shadow change fights the rotation and depth the stack is already using to say the same thing.

### Browse-all Carousel
The explore page ends in a stack of three app cards, one centred and two rotated behind it, that the reader swipes through. The centre card is the same object as a card in the directory grid, at the same 376x424 footprint, so the module reads as the grid at an angle rather than an outsized cousin. The track's height follows the card plus the 18px the flanking cards are dropped by; it is not a number of its own.

- **Recession:** a flanking card sits between the page and the centre card, which is what makes it read as set back rather than as a smudge. Dark lands at luminance 21 between the page's 18 and the centre's 26; light takes Drift Mist at 246 between the page's 236 and the white centre's 255. Light carries no dimming filter: that palette is near-neutral by design, so brightness can only drag a card toward grey, and the surface change does the work instead.
- **Desaturation belongs to the icon, not the card.** `saturate()` on the slot drains the card's own surface too: on dark it took a 63%-saturated navy down to 16% and painted a flat grey. The card only dims; the app icon takes `saturate(.15)`, and the card's contents fade to `.7`.
- **Opacity is binary, 0 off stage and 1 on it.** A slot that fades up from a partial value while its z-index has already jumped to the front lets the outgoing card show through the incoming one mid-swipe. The fade lives on the card's contents, so the card's own background stays fully opaque at every position.
- **Only the centre follows the drag.** The flanking cards carry no `--carousel-drag`, so the stack holds still and only the card under the finger moves. This has to hold in the responsive overrides as well as the base rule.
- **Icons are primed in a window.** Every slot but the three on stage is hidden and stacked at the same point, so a lazy icon has no reason to fetch until its card arrives, and icons turned up late or not at all part way through a swipe. `paintCarousel` marks the slots from -2 to +2 as eager: roughly five images in flight rather than 98 on load.

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
Search is a centered overlay over a frosted backdrop, with a bright, controlled surface.
- **Shape:** 18px radius on desktop, 14px on mobile.
- **Structure:** input row, result count, then a scrollable result list.
- **Behavior:** the backdrop blurs, the modal remains narrow enough to feel deliberate, the app index loads on demand, and results behave like normal focusable links rather than a custom combobox.

**The One Scrim Rule.** Search, the navigation menu and the subscribe dialog share one backdrop, `--scrim`, and it follows the theme. All three were a near-black navy in both themes, which is right over a dark page and turns a light one grey; light now takes Harbor Fog at 62%, so the page stays bright and the blur does the obscuring. The blur is the same in all three at `blur(12px) saturate(110%)`; the nav menu had drifted to 10px for no reason anyone recorded. A panel separates from the scrim on its own shadow, not on the scrim being dark.

### App Detail Page
The detail page answers three questions in order: what is this, is it for me, and where do I get it. The masthead carries that path and the rail carries everything that files the app rather than describes it.
- **Masthead:** the app's own icon and the page title form one lockup, the icon scaling from 56px to 76px against the title's cap height at the documented `md` radius. Then the dek, then Best For, then the single Homepage button. An app with no icon takes a category mark on the documented missing-icon colour, stable from the app ID so a card and its detail page always agree. Which category is the app's first by default, or whichever `iconCategory` names when the editor has directed otherwise.
- **Rail:** a 400px column holding three labelled groups, Collections then Categories then Tags, each built the same way: an eyebrow, `--eyebrow-gap` beneath it, then its items at 2px. 24px separates the groups. Nothing is divided by a rule. It occupies what used to be empty space beside a 900px masthead on a 1160px page. The width is set by the tag chips: measured across all 102 apps a tag set needs 311px at the median and 399px at the 95th percentile, so 400px keeps 95% of the catalogue on a single line. The longest set needs 473px, and buying that last 2% would cost 60px of the prose column.
- **Taxonomy rank:** categories are the most generic fact an app carries and read at Metadata scale in muted ink, as 34px rows with their marks. They were 22.4px serif inside 80px bordered cards, which made the least meaningful metadata the largest thing on the page after the title. Tags stay chips at Label scale. Nothing here outranks the app's own name, dek or Best For.
- **One axis:** every mark in the rail shares a centre and every label starts at the same x, because the badge and the category rows use the same 34px icon column and 12px gap. Their glyphs are both 19px.
- **Collapse:** at 920px, where the whole site drops to one column, the rail stacks under the masthead and keeps its DOM order, so reading and focus order do not change. No rule divides them, and none divides the badge from the taxonomy: inside the rail the separation is space. The only rule on the page closes the hero against the related apps below.

### Homepage Hero

There is one hero. Issue pages render the same composition as the homepage; the only difference is which element carries the `h1` and whether the eyebrow reads *Current* or *Archived issue*.
A full-bleed band whose content sits on the shared page shell, so the wordmark aligns with every section heading below it. It carries no artwork.

- **Structure:** identity (wordmark, wave rule, tagline) over a hairline, then the issue block; the Editor's Pick renders beside it as a real `AppCard`, the only card in the fold.
- **Atmosphere:** two drawn layers — a star field (night only) and an engraved wave band. The stars stop at the water, and the horizon is measured from the sea canvas rather than taken as a fraction of the hero's height. Below 920px the sea stops being absolutely positioned and becomes a block in the flow with the Editor's Pick beneath it, so a fixed fraction put stars under the waterline on every phone. All canvas, no image request, painted once and repainted only on theme change or resize. The day sky above the water stays empty; a cloud bank was drawn there and removed for adding noise rather than calm.
- **The waterline.** The band's ground fades to the page colour across the wave band and the strokes taper to nothing, so the hero ends on the colour the next section begins with. A single `--sea-h` drives the canvas height, the bottom padding, and the fade distance.
- **Motion:** the star field is painted once and never moves, and there is no load-in entrance. The waterline swells under The Swell Rule, quietly enough that it reads as atmosphere rather than as animation. The Editor's Pick card is the one thing in the fold that moves for attention, under The Struck Light Rule, and it earns that by being the app the issue is arguing for.
- **The pick title is clipped, never removed.** Above 920px the eyebrow and the card carry
  the meaning, so `One app worth a closer look` is not shown, but it is hidden with the
  `sr-only` clip rather than `display: none`. Removing it took the h2 out of the document
  and ran the desktop homepage straight from h1 to the app card's h3, a heading-sequence
  break that existed only at the widths most readers use and disappeared on mobile, which is
  why review kept missing it. A heading that orders the outline stays in the outline at every
  width.
- **Call to action:** two anchors, one hidden per breakpoint. Above 920px *Start Reading* goes to the first section; below it — where the pick has stacked underneath — it goes to the pick. 920px is where the hero collapses to one column, so the swap and the stack happen together.

### End-of-Issue Closer

An issue ends; the publication does not. The foot of every issue page, on the homepage and
on every archived issue alike, carries a `Keep Exploring` section holding two cards: one
into the archive, one into the app catalogue.

It replaced the Source Notes section on 2026-09-01. Those notes listed where the week's
picks came from, and the argument against them is the one already made for the app card's
source credit in Cards above: provenance for the editor rather than information for the
reader, and carrying no links, so they asked to be trusted rather than checked. The notes
are still written into each issue's frontmatter, where they remain the editorial audit
trail. What changed is that the last thing a reader meets is a way further in.

**It is a section, not a footnote.** A first version set it in a quieter register, on the
reasoning that a way out should not compete with the issue. That was wrong in practice: it
read as foreign to a page whose every other block carries an eyebrow, a title and cards, and
looking unlike the site is a worse failure than looking prominent. It now takes the ordinary
section grammar. Restraint on this page is expressed by the cards' own contents, not by
opting out of the page's language.

- **The cadence comes first.** Under the section title, above the cards, one line naming
  the Friday rhythm and a `Subscribe` button on the shared RSS dialog. The closer shipped
  without it, and a critique on 2026-09-01 named the omission its worst fault: a reader who
  has just finished an issue is asking when the next one arrives, and the page answered with
  eight browse links while the cadence sat 5,400px away in the hero, stated once. The promise
  and the control that acts on it now precede the routes rather than following them.
- **Two destinations, two names.** The card links read `Archive` and `Explore Apps`, exactly
  as the header and footer name them. They read `Browse archives` and `Explore all apps`
  until the same critique observed that four labels for two destinations, inside one screen,
  make a reader wonder whether they differ.
- **Topology:** two peer cards, not a primary and a secondary. The archive is a route
  through time and the catalogue a route through subject; a reader who has finished an issue
  may want either, and nothing in the content ranks them. They share a row and their onward
  links share a baseline, pinned with `margin-top: auto` so the pair agrees across the gap
  however unequal the content above it.
- **Which issues the archive card names:** the three newest that are not the one being read.
  The first is featured, with its dek; the other two are bare linked lines.
  On the homepage that resolves to the previous three; on an archived page it pulls in newer
  issues, which is the more useful pointer from a page a reader arrived at late. One
  rule, and it degrades cleanly: with no other issue the card does not render and the row
  collapses to the catalogue alone.
- **The heading follows the contents, not the other way round.** Because that rule offers
  newer issues on an archived page, a fixed `View past issues` was false on six of the eight
  issue pages, most starkly on the oldest, which offered Issues 08, 07 and 06 as the reader's
  past. The card reads `View past issues` only when every issue it offers predates the one
  being read, and `Recent issues` otherwise. The selection rule was right; the label was
  lying about it.
- **Type ranks content over label.** The section title leads, each card heading names its
  door at label rank, and the largest thing inside a card is its content. The headings were
  set at subhead first, which inverted the order: `View past issues` and `Explore Mac Apps`
  became the loudest type in the block while the featured issue's own title sat smaller than
  its dek. A card heading carries nothing the section title has not already said, so it is a
  label; the featured issue takes display serif at 1.38rem, the treatment the identical
  object already has on `/archive/`, because one object met on two pages should not be two
  objects.
- **The rank is the dek.** One issue argues for itself; the ones before it only need to be
  reachable. That split is also what balances the pair. A single issue left 73px of dead space
  under it, and two full issues moved the same hole into the catalogue card. One featured plus
  two bare lines brings the two cards to 349px against 342px, and the residual worst case is
  27px at 960px where the dek takes an extra line. The list is the adjustable part: if the
  cards drift apart, change how many bare lines it carries, not the featured issue's copy.
- **The featured block is one target.** Title, date and dek are a single link to that issue:
  the title's anchor stretches over the whole entry with a pseudo-element rather than a second
  overlay anchor, so the block is clickable while the accessible name stays the issue's own
  line and the card gains no duplicate link. It overhangs the entry by 6px and 8px, giving a
  120px hit area, and still clears the buoy chain below it by 16px so those rows keep their
  own clicks.

  An earlier version closed the dek with a `Read now` link instead. It read as stray emphasis
  in the middle of prose and put a second accent item in a card that should have one call to
  action, competing with `Browse archives` directly beneath it. Each card now ends on exactly
  one accent link, and the block carries the click. The one cost is that the dek can no longer
  be selected as text, which is the ordinary price of a stretched link and the same trade the
  app cards already make.

  Every target outside that block takes the 44px coarse-pointer minimum, and the block itself
  deliberately does not. It carried one briefly, which bought nothing, since the stretched
  anchor is already a 120px target, while inflating the issue line's box until the gap inside
  the featured group exceeded the gap between that group and the chain. On every touch device
  that inverted the proximity this card depends on, its only separator being the spacing
  ratio. A minimum height does not belong on an element whose neighbours are grouped by
  rhythm.
- **Grouping by rhythm, not by rule.** Inside the archive card, 10px binds an issue's line to
  its own dek and 22px separates the featured issue from the chain below it. The ratio does the grouping, so the
  card needs no internal hairline; the catalogue card uses one only because collections are a
  different kind of door from categories, not merely the next item.
- **Inside the catalogue card:** all six categories in a two-column grid, then a hairline,
  then the two collections. Collections are a different kind of door from categories, so they
  are separated rather than appended as two more rows. Every row carries its `MetaIcon` at
  20px in `--muted`, label and icon crossing to the accent together on hover.
- **No counts.** An early draft put an app count beside each category. The six hold 33, 23,
  27, 67, 71 and 26 apps against a catalogue of 102, because apps carry several categories at
  once. The numbers neither sum to anything a reader can trust nor separate the doors: two of
  the six describe most of the catalogue. Names alone.
- **No whole-card hover.** The shared card hover in Cards answers a pointer for a card that
  is one target. The catalogue card holds nine, and lifting the whole surface would promise a
  click the card does not honour. The rows and the onward links answer individually instead.
  This is the one place a card deliberately sits out that contract.
- **Colour:** labels take `--text` and both onward links take `--accent`, so the two links
  that leave the section are the ones the Beacon Rule lights.
- **Motion:** one moment, in the archive card only, and it is the buoy's own. Each row
  rises out of the water rather than wiping in from the side: up from 15px, past the mark
  to -4.5px, then settling through 2.5, -1.4 and 0.7. The amplitudes halve each pass,
  which is what a damped float does and what keeps the settle reading as water rather than
  as a bounce. The ring and its label carry the same keyframes on the same delay, so the
  row floats as one object instead of two things out of phase; the second row follows
  420ms behind the first, and the connector draws down between them once both ends are up.
  The animation rides an inner span rather than the link itself, so a focus ring is never
  transformed with it. The connector's geometry is written against 50% and 100% of a row
  rather than fixed pixels, so it still meets the next buoy when the rows grow to the 44px
  touch minimum, clearing it by 2.5px at both ends. The ring's inner ground is `--surface`,
  not `--bg`: this buoy floats on a card. Under reduced motion the chain renders in its
  resting state with no animation at all. The catalogue card stays still. See The Buoy Rule
  in Motion.
- **Separator:** a middle dot between the issue number and its date, in both the featured
  line and the chain. It sits at half height, so it divides the two facts without landing
  on the baseline as another word would, and it is hidden from assistive technology.
- **Responsive:** two cards become one column at 920px, where the hero already collapses, so
  the page changes shape once rather than twice. The category grid drops to one column at
  520px. Every row clears 24px, and 44px on a coarse pointer, as a nav target rather than
  prose.

### Not Found

Every route that does not exist renders `src/pages/404.astro` on the same page shell as the
rest of the site: page title, dek, then four ways out — the current issue as the one
outlined button, then the archive, Explore, and the search dialog as text links.

It exists because the archive is meant to be permanent while the tag routes are not. Five
tags were retired and redirected in a single week against a hand-maintained list in
`netlify.toml`, and any rule that gets missed used to land a reader on the host's own grey
error page: no brand, no navigation, no way back, on a property whose whole asset is trust.
A dead link now stays inside the publication.

## Do's and Don'ts

### Do:
- **Do** keep the fog-grey field, white paper, deep-sea text, and blue accent in a tight relationship.
- **Do** reuse the shared page shell so archive, tag, collection, about, and app pages line up.
- **Do** keep shadows soft and ambient.
- **Do** let serif headlines carry the editorial voice while system sans handles utility.
- **Do** keep the defining tag or collection locked when it is the page’s own context.
- **Do** keep the uppercase eyebrow above section and card headings. General design guidance treats a kicker above a heading as filler; here it is load-bearing house style — it names the issue section, the pick, and the current-issue block, and it is the documented Label role. This is a deliberate, standing exception.

### Don't:
- **Don't** introduce loud secondary colors just to add energy.
- **Don't** reintroduce warm sand or cream into the light theme; the day palette is white and Deep-Sea-tinted grey.
- **Don't** replace the soft shadow system with hard offsets or heavy glow.
- **Don't** use tinted text as neutral gray on colored surfaces.
- **Don't** make chips, filters, or buttons feel like separate UI worlds.
- **Don't** let the brand wordmark typography spread into body copy.
- **Don't** use em dashes or en dashes in public editorial copy.
- **Don't** let the Editor's Pick accent leave that one card, or reach a link, control or state. It is light, not a second accent.
- **Don't** hand-write an `iconAccent`. Generate it so every pick lands in the same lightness and chroma band.
- **Don't** let taxonomy outrank identity. On any page, an app's categories and tags are quieter than its name, its dek and what it is best for.
