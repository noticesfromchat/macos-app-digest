---
name: App Waypoint
description: A weekly editorial guide to curated Mac apps for experienced users.
colors:
  harbor-sand: "#e7ddcd"
  drift-cream: "#f4ebdd"
  surf-foam: "#faf4e9"
  shell-strong: "#eee2d0"
  deep-sea: "#092443"
  tide-slate: "#4d5762"
  line-water: "rgba(9, 35, 66, 0.2)"
  beacon-blue: "#0862d8"
  beacon-blue-hover: "#004caf"
  header-fog: "rgba(244, 235, 221, 0.96)"
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
    fontFamily: "Iowan Old Style, Baskerville, \"Times New Roman\", serif"
    fontSize: "clamp(4rem, 8vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: "0"
  headline:
    fontFamily: "Iowan Old Style, Baskerville, \"Times New Roman\", serif"
    fontSize: "clamp(3.25rem, 5.1vw, 4.25rem)"
    fontWeight: 500
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  subhead:
    fontFamily: "Iowan Old Style, Baskerville, \"Times New Roman\", serif"
    fontSize: "clamp(1.9rem, 2.4vw, 2.35rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Iowan Old Style, Baskerville, \"Times New Roman\", serif"
    fontSize: "1.4rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"Segoe UI\", sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"Segoe UI\", sans-serif"
    fontSize: ".78rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: ".1em"
  metadata:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"Segoe UI\", sans-serif"
    fontSize: ".84rem"
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: ".02em"
  brand:
    fontFamily: "Seamless, Philippine, Iowan Old Style, serif"
    fontSize: "clamp(1.35rem, 2.45vw, 2rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: ".08em"
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
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.deep-sea}"
    rounded: "{rounded.pill}"
    padding: "0 23px"
  tag-chip:
    backgroundColor: "{colors.shell-strong}"
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

App Waypoint feels like a calm dock at first light: warm paper, deep-water text, and a single reliable blue used sparingly so the page never shouts. It is editorial rather than promotional, organized like a magazine, but laid out like a utility. Dense information sits inside soft cards and quiet section breaks instead of loud banners.

The language prefers stable geometry, soft depth, and generous breathing room. Serif headlines carry the authority; the system sans supports the utility layers, controls, and metadata. The result is familiar and trustworthy, with enough atmosphere to feel considered but not styled for its own sake.

**Key Characteristics:**
- Warm sand-and-cream surfaces with navy ink.
- Beacon blue reserved for actions and current states.
- Serif headlines, system-sans utility.
- Soft 10-18px radii and ambient shadows.
- Dense content organized through cards, chips, and careful spacing.

## Colors

The palette is a two-mode harbor system: sand, cream, and navy by day, with deep water and moon ink by night. Blue is the only strong accent and stays carefully rationed.

### Primary
- **Beacon Blue** (#0862d8): primary buttons, links, active states, and key affordances.
- **Buoy Blue** (#57a2ff): the dark-theme accent and lighter emphasis layer.

### Neutral
- **Harbor Sand** (#e7ddcd): the outer page field and warm base wash.
- **Drift Cream** (#f4ebdd): header and footer atmosphere.
- **Surf Foam** (#faf4e9): the primary surface color for cards and panels.
- **Shell Strong** (#eee2d0): subtle surface contrast for chips and quiet controls.
- **Deep Sea** (#092443): the primary light-theme ink.
- **Tide Slate** (#4d5762): secondary text and metadata.
- **Line Water** (rgba(9, 35, 66, 0.2)): borders and separators.
- **Header Fog** (rgba(244, 235, 221, 0.96)): the light sticky header.

### Night Shift
- **Night Harbor** (#091321): the dark page field.
- **Abyss** (#020b18): the darkest surrounding canvas.
- **Midnight Surface** (#0b1c30): the primary dark surface.
- **Midnight Surface Strong** (#10253b): the dark surface contrast tone.
- **Moon Ink** (#f3ecdf): the main dark-theme foreground.
- **Fog Mist** (#afb6bf): muted dark-theme copy.
- **Night Line** (rgba(217, 229, 240, 0.2)): borders and separators in dark mode.
- **Buoy Blue Hover** (#81b8ff): the brighter dark-theme hover state.
- **Night Header Fog** (rgba(4, 20, 38, 0.96)): the dark sticky header.

### Atmosphere
These are drawn, not printed: they exist only inside the homepage hero's canvas layers and never carry text, controls, or state.

- **Sea Ink** (`9 35 66` by day, `226 236 250` at night): RGB triples rather than hex so the wave band and star field can vary alpha per line. They are Deep Sea and a pale moon tone, not new colours.

**The Beacon Rule.** Blue is reserved for actions, links, focus, and active states. It should not become page chrome or decorative noise. The palette carries no warm accent: a light wash behind the hero was tried and removed for drawing attention to itself rather than to the pick it sat behind.

## Typography

**Display Font:** Iowan Old Style, Baskerville, "Times New Roman", serif
**Body Font:** -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif
**Label/Brand Font:** Seamless, Philippine, Iowan Old Style, serif

The type system is split between a classic editorial serif for the headlines and a practical system sans for everything that carries utility, metadata, or navigation. The Seamless brand face is kept for the wordmark and footer lockup so it feels special instead of repetitive.

### Hierarchy
- **Display** (500, clamp(4rem, 8vw, 6rem), 0.92): the largest page titles and high-authority hero moments.
- **Headline** (500, clamp(3.25rem, 5.1vw, 4.25rem), 0.96): hero titles, section titles, and major page headings.
- **Subhead** (600, fluid 1.9-2.35rem, 1.1): the hero's issue number and its Editor's Pick title — the step between a hero headline and a card title.
- **Title** (600, 1.4rem, 1.15): card titles and app names.
- **Body** (400, 1rem, 1.55): descriptions, explanations, and editorial copy.
- **Label** (800, .78rem, .1em, uppercase): eyebrows, small UI labels, and control legends.
- **Metadata** (600, .84rem, 1.45): counts, sources, and secondary operational information.
- **Brand** (400, fluid 1.35-2rem): the Seamless/Philippine wordmark role only.

**The Serif-Utility Split.** Serif type carries the editorial voice; the system sans carries the operational voice. Mixing them casually weakens both jobs.

## Layout

The site uses a shared centered shell with a maximum width of 1160px and responsive gutters that resolve to 20px on desktop and 12px on mobile. The same shell is used across app detail, tag, collection, archive, and about pages so the directory feels like one system instead of separate templates.

The homepage opens wider and more scenic, but its content still obeys the same page rhythm: full-width header and footer, then a controlled interior with sections separated by thin rules. Desktop cards usually live in a three-column grid; below 920px the grid collapses to one column and the pages stop pretending they are desktops. Around 680px the mobile gutters tighten, the header simplifies further, and coarse-pointer contexts inherit larger hit targets even when they are wider than a phone.

App detail pages use the same shell but a more editorial composition: a large title, a two-column best-for/tags panel, and a narrower related-apps grid. Section spacing is generous but disciplined, with more space above headings than below them.

## Elevation & Depth

Depth is soft and ambient rather than structural. Surfaces stay flat at rest, then gain soft shadows, border contrast, and subtle hover lift when they need separation. The sticky header and search overlay add atmosphere with blur and translucency, but the system never relies on hard offsets or gimmicky glow.

### Shadow Vocabulary
- **Ambient Card** (`box-shadow: 0 18px 55px rgba(27, 35, 42, 0.08)`): resting cards and surface containers.
- **Hover Lift** (`box-shadow: 0 26px 68px rgba(27, 35, 42, 0.14)`): hovered cards and callout surfaces.
- **Night Ambient** (`box-shadow: 0 20px 60px rgba(0, 0, 0, 0.24)`): dark-theme resting surfaces.
- **Night Hover** (`box-shadow: 0 28px 72px rgba(0, 0, 0, 0.42)`): dark-theme hover elevation.

**The Soft Hull Rule.** Surfaces lift with a soft shadow and a border change, not with hard edges or dramatic offsets.

## Shapes

The shape language is rounded but disciplined. Cards use 12px corners, search overlays sit at 14px on mobile and 18px on desktop, and control menus stay close to 10px so they feel compact rather than playful. Buttons and tag chips go all the way to pills, while the logo and footer mark stay circular. The result is friendly without becoming bubbly.

The system prefers clipped rectangles, thin borders, and deliberate rounding over ornate silhouettes. Geometry stays stable so the content can carry the personality.

## Components

### Buttons
Buttons are quiet, pill-shaped workhorses: obvious, tactile, and not over-embellished.
- **Shape:** 999px pill for the primary and secondary CTA buttons.
- **Primary:** blue fill, white text, 44px minimum height, 23px horizontal padding, and a small icon gap.
- **Hover / Focus:** the blue deepens on hover, and focus is handled with a clear accessible outline rather than a visual stunt.
- **Secondary:** transparent fill, ink text, and a borderless or low-border utility presence.
- **Icon Buttons:** the header search, archive, and theme controls are 38px squares on desktop, but expand to 44px targets on mobile and coarse-pointer devices.

### Tag Chips
Tag chips are compact chips rather than buttons. They read as metadata first.
- **Style:** soft surface-strong fill, muted text, 999px radius, lowercase labels.
- **State:** hover and focus tint the chip toward blue without making it feel selected.

### Cards
Cards are the primary container language for apps, readings, and archive entries. Apparatus — source notes and other secondary matter — is set as footnotes under a hairline instead, so a card always means a thing worth looking at rather than a thing worth reading past.
- **Corner Style:** 12px radius on most cards.
- **Background:** warm surface color with a faint border and soft shadow.
- **Internal Padding:** usually 24px, with denser or looser variants where the content demands it.
- **Behavior:** hover deepens the shadow and nudges the card upward slightly on pointer devices.

### Site Header and Navigation
The header is sticky, translucent, and restrained. The brand uses the Seamless wordmark, while the icon controls stay compact and monochrome until hover or focus gives them blue.
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
A full-bleed band whose content sits on the shared page shell, so the wordmark aligns with every section heading below it. It carries no artwork.

- **Structure:** identity (wordmark, wave rule, tagline) over a hairline, then the issue block; the Editor's Pick renders beside it as a real `AppCard`, the only card in the fold.
- **Atmosphere:** two drawn layers — a star field (night only) and an engraved wave band. All canvas, no image request, painted once and repainted only on theme change or resize.
- **The waterline.** The band's ground fades to the page colour across the wave band and the strokes taper to nothing, so the hero ends on the colour the next section begins with. A single `--sea-h` drives the canvas height, the bottom padding, and the fade distance.
- **Motion:** none. The hero is still; its atmosphere is drawn once and does not animate.
- **Call to action:** two anchors, one hidden per breakpoint. Above 920px *Start Reading* goes to the first section; below it — where the pick has stacked underneath — it goes to the pick. 920px is where the hero collapses to one column, so the swap and the stack happen together.

## Do's and Don'ts

### Do:
- **Do** keep the warm paper base, deep-sea text, and blue accent in a tight relationship.
- **Do** reuse the shared page shell so archive, tag, collection, about, and app pages line up.
- **Do** keep shadows soft and ambient.
- **Do** let serif headlines carry the editorial voice while system sans handles utility.
- **Do** keep the defining tag or collection locked when it is the page’s own context.
- **Do** keep the uppercase eyebrow above section and card headings. General design guidance treats a kicker above a heading as filler; here it is load-bearing house style — it names the issue section, the pick, and the current-issue block, and it is the documented Label role. This is a deliberate, standing exception.

### Don't:
- **Don't** introduce loud secondary colors just to add energy.
- **Don't** replace the soft shadow system with hard offsets or heavy glow.
- **Don't** use tinted text as neutral gray on colored surfaces.
- **Don't** make chips, filters, or buttons feel like separate UI worlds.
- **Don't** let the brand wordmark typography spread into body copy.
