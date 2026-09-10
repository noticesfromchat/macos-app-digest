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
  harbor-body: "#40546a"
  harbor-chip-ink: "#384d63"
  line-water: "rgba(9, 35, 66, 0.2)"
  beacon-blue: "#0862d8"
  beacon-blue-hover: "#004caf"
  header-fog: "rgba(244, 246, 249, 0.96)"
  night-harbor: "#091321"
  abyss: "#020b18"
  midnight-surface: "#0b1c30"
  midnight-surface-strong: "#10253b"
  moon-ink: "#f3ecdf"
  current-mist: "#aebdca"
  moon-current: "#9fb4ca"
  moon-chip-ink: "#b0c0d2"
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
    lineHeight: 1.5
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
    fontFamily: 'Iowan Old Style, Baskerville, "Times New Roman", serif'
    fontSize: "clamp(3.25rem, 5.1vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "0"
rounded:
  sm: "8px"
  md: "16px"
  lg: "24px"
  pill: "999px"
spacing:
  base: "8px"
  s1: "8px"
  s2: "16px"
  s3: "24px"
  s4: "32px"
  s5: "40px"
  s6: "48px"
  s7: "56px"
  s8: "64px"
  s9: "72px"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.beacon-blue}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    minHeight: "48px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.deep-sea}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    minHeight: "48px"
  collection-badge:
    backgroundColor: "transparent"
    textColor: "{colors.deep-sea}"
    rounded: "0"
    padding: "0"
    minHeight: "48px"
  tag-chip:
    backgroundColor: "{colors.shell-quiet}"
    textColor: "{colors.harbor-chip-ink}"
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

**Implementation references:** use [the current component reference](docs/COMPONENT_REFERENCE.md)
for production markup, styles and review routes. The handwritten component gallery was
retired on 2026-09-07; the active sidecar retains tokens and rules, with no copied previews.

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
- **Tide Slate** (#4d5762): light-theme metadata and utility text.
- **Harbor Body** (#40546a): light-theme reading copy below primary Deep Sea ink.
- **Harbor Chip Ink** (#384d63): light-theme text carried by Shell Quiet chips.
- **Line Water** (rgba(9, 35, 66, 0.2)): borders and separators.
- **Header Fog** (rgba(244, 246, 249, 0.96)): the light sticky header.

### Night Shift
- **Night Harbor** (#091321): the dark page field.
- **Abyss** (#020b18): the darkest surrounding canvas.
- **Midnight Surface** (#0b1c30): the primary dark surface.
- **Midnight Surface Strong** (#10253b): the dark surface contrast tone, and the value Shell Quiet resolves to at night — the night chip was already sitting at the quiet step, which is why only the day chip had to move.
- **Moon Ink** (#f3ecdf): the main dark-theme foreground.
- **Current Mist** (#aebdca): dark-theme metadata and utility text.
- **Moon Current** (#9fb4ca): dark-theme reading copy, derived from the navy surface hue.
- **Moon Chip Ink** (#b0c0d2): dark-theme text carried by Midnight Surface Strong chips.
- **Night Line** (rgba(217, 229, 240, 0.2)): borders and separators in dark mode.
- **Buoy Blue Hover** (#81b8ff): the brighter dark-theme hover state.
- **Night Header Fog** (rgba(4, 20, 38, 0.96)): the dark sticky header.

### Atmosphere
These are drawn, not printed: they exist only inside the homepage hero's canvas layers and never carry text, controls, or state.

- **Sea Ink** (`9 35 66` by day, `226 236 250` at night): RGB triples rather than hex so the wave band and star field can vary alpha per line. They are Deep Sea and a pale moon tone, not new colours.

**The Fog Rule.** Every light-mode neutral sits on Deep Sea's hue — OKLCH hue 253–258, the ink's own axis — at a chroma of 0.010 or less: Surf Foam 0.000, Drift Mist 0.005, Harbor Fog 0.008, Shell Strong 0.010, Shell Quiet 0.006. That is what keeps the field reading as harbor weather rather than default UI grey. A neutral off that axis, or any warm tone reintroduced into the light theme, breaks the day palette. The ink, the hairline, and the blue are shared with the old warm scheme and did not move.

**The Beacon Rule.** Blue is reserved for actions, links, focus, and active states. It should not become page chrome or decorative noise. The palette carries no warm accent: a light wash behind the hero was tried and removed for drawing attention to itself rather than to the pick it sat behind.

**The Surface Ink Rule.** Primary reading copy, chip text and metadata are separate semantic
roles: `--body-text`, `--chip-text` and `--muted`. Each theme maps those roles onto the
surface's own blue axis instead of dropping a neutral grey over a chromatic ground. Primary
descriptions, explanations and editorial prose use `--body-text`; tag labels use
`--chip-text`; dates, counts, breadcrumbs, sources and operational hints use `--muted`.
Beacon Blue remains reserved for actions, focus, active states and the established eyebrow
labels. Every mapping clears AA on each surface where it appears.

## Typography

**Display Font:** Iowan Old Style, Baskerville, "Times New Roman", serif
**Body Font:** -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif
**Label Font:** -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif

The type system is split between a classic editorial serif for the headlines and a practical system sans for everything that carries utility, metadata, or navigation. The App Waypoint wordmark uses the same editorial serif as the headline system so the brand voice stays consistent.

### Hierarchy
Every role is a family, a size, a weight **and a line box**, defined together. A size
changed without its leading is how the same role ends up in two different boxes: mobile
search titles sat in a 21.97px box until 2026-09-07 because a breakpoint moved the size
and left the ratio behind. Leading is unitless so it survives a reader's zoom.

The sizes below are the **implemented** scale, confirmed against the running site on
2026-09-07. This file previously described page titles at 52-68px and section titles at
35.2-60.8px, a scale nothing had rendered for weeks; a correction made faithfully against
that text would have enlarged every title on the site by roughly seventy per cent. The
implemented scale is the baseline and this table is now the record of it.

| Role | Size | Line box | Weight | Token |
| --- | --- | --- | --- | --- |
| Page Title | 30-40px fluid | .96 — exempt | 500 | `--type-page-title` |
| Section Title | 24-33px fluid | 1 — exempt | 500 | `--type-section-title` |
| Subhead | 22-28px fluid | 1.08-1.1 — exempt | 600 | `--type-subhead` |
| Card Title | 23px | **28px** (1.2174) | 600 | `--type-card-title` |
| Tile Title | 18px | **24px** (1.3333) | 600 | `--type-tile-title` |
| Dek | 19px | **32px** (1.6842) | 400 | `--type-dek` |
| Body | 16px | **24px** (`--leading-body`) | 400 | — |
| Metadata | 14px | **20px** (`--leading-meta`) | 600 | `--type-meta` |
| Label | 12px | **16px** (`--leading-label`) | 800 | `--type-label` |

**Fluid display type is exempt from the step.** Page Title, Section Title and Subhead set
their size with `clamp()`, so no single leading can put them on a 4px box across the range.
They keep tight ratios instead. Every fixed role lands on a 4px step, which is what The
Line Box Rule allows and what makes an interval after a label predictable.

**Leading is a token, not a literal.** `--leading-label` (1.3333) and `--leading-meta`
(1.4286) both existed in the stylesheet before 2026-09-07 as correct numbers typed at two
use sites — `.tag` and `.breadcrumb` — while nine other uses of the same two roles inherited
body's 1.5 and landed on 18px and 21px boxes. The values did not change; naming them did.
A repeated eyebrow was adding 18px to a stack built on 8px, which is why an 8px margin
after one never produced a regular interval.

There is no size below Label. A label that felt it needed to be smaller was drift, not a
role.

**The two small roles use the opposite tokens to their names.** Control Label is delivered by `--type-meta` and the count's metadata variant by `--type-label`. This is backwards and it is deliberate for now: the tokens are plain sizes used across dozens of rules, and renaming them to match the roles is a site-wide pass, not a footnote to this one. Read the role from the entry above, never from the token name, and do not "correct" a measured page back toward the token that names it.
- **Brand** (500, fluid 1.35-2rem): the App Waypoint wordmark set in the same editorial serif as the headline system.

**No section draws a rule.** Content is separated by the grid, not by hairlines. A hairline between two blocks already a full section apart states the boundary twice, and once the spacing scale was doing the work honestly the rules had nothing left to say. They went from issues and About on 2026-09-05, then from the archive, Explore and app detail pages the same day; the site now draws no horizontal rule that divides content anywhere.

A hairline that *constitutes a control* is not a divider and stays: the RSS URL card's edge, the filter panel's structure, an input's border. The test is whether removing it would make something harder to operate rather than merely less ruled.

This replaced **The Even Rule Rule**, which asked that a rule carry the same space above it as below — `--section-space`, one value for the whole site, paid half by each side. That rule was sound and it is recorded because it was load-bearing for a year: it is the reason section spacing was ever symmetric, and why removing the lines meant re-deriving the intervals rather than simply deleting a border. Sections now sit on one interval instead of two halves flanking a line, and the padding is asymmetric so that interval can be an odd number of steps.

**The Base Unit.** Every *structural vertical* spacing value on the site is a whole
multiple of 8px, held as `--base` with the scale `--space-1` through `--space-9` running
8 to 72. Adopted 2026-09-05; made a real dependency 2026-09-07.

The wording matters, and it is narrower than this rule used to claim. It said every
spacing value, **dimension** and radius, which was not true of three things at once: the
field grid's 180px is 22.5 units, an app icon frame's corner is 25% of its own side, and
line boxes step on 4. The horizontal grid is a separate system and does not divide by the
vertical base; that is the two-grid model, not a violation of it.

**The scale is calculated, not typed.** `--space-3` is `calc(var(--base) * 3)` and
`--eyebrow-gap` is `var(--space-1)`. Until 2026-09-07 every step repeated its own pixel
literal, so the values agreed with the base by coincidence and changing `--base` changed
nothing at all. They are now a dependency: setting the base to 10px moves the whole scale,
and consumers must use the tokens too. Shared styles and scoped page styles now take
vertical spacing from this scale; horizontal field gutters remain independent.

Before that the scale existed only in this file, as prose, while every value was typed
literally at its use site. The stylesheet carried 11, 13, 14, 18, 20, 22, 27, 30, 34 and
38px all at once, and from the outside there was no way to tell which of those were
hard-won decisions and which were accidents nobody had caught. The scale is now a
mechanism rather than a description of what happened, and that is the whole point of it: a
rule that cannot be read from the code is not a rule, it is a memory.

**Structural vertical spacing steps; it does not interpolate.** `--section-space`,
`--page-start-space`, the hero's own padding and the footer's margin were all `clamp()`
expressions, so the one value the whole site uses for a section boundary was whatever the
viewport made it — 38px at a 1000px viewport, 60px between the last section and the footer.
Each now takes a token that steps at 921px and 1100px, the site's own breakpoints, landing
on the values the clamps reached at their floor, middle and cap: the boundary is 24 / 32 /
40, the hero opens 32 / 40 / 48 and closes 32 / 48 / 56, and the footer stands off 48 / 64
/ 72. A width between two breakpoints now gets a spacing decision rather than an
interpolation.

Fluid values that remain are horizontal and are exceptions by the two-grid model rather
than by oversight: the shell's own gutter, the column gaps in the homepage hero and the
app-detail rail, and the icon frame that scales with its page. Fluid *display type* is also
kept, under The Line Box Rule. Overlay placement is a separate viewport-fitting
exception: search opens at min(9vh, 12 base units), RSS at min(10vh, 12 base units),
and mobile overlays respect safe-area insets. These offsets position dialogs in the
viewport; they do not set the vertical rhythm of page content.

Four things sit outside the base deliberately. Hairlines and optical nudges of 4px and
under keep their own values, because a 1px border is not a spacing decision. Line boxes
step on 4px, half the base, for the reason given below. Touch targets round up and never
down for coarse-pointer controls; the role-specific heights below define their targets. And one derived width stays odd: the filter
panel's `calc(200% + 20px)` is what makes its right edge land exactly on the Sort control's,
and snapping that 20 to 16 would break the alignment by 4px.

An exception is only legible when there is a rule to depart from. That is as much of the
argument for a base unit as consistency is — 8px is what makes an odd number mean something.

**The Line Box Rule.** What stacks on a page is not the font size, it is the line box: the
strip each line occupies, whose height is the line-height. Body is 16px at 1.5, so its line
box is 24px, three base units, and a three-line paragraph is exactly 72px every time.

Every fixed-size role is set so its line box lands on a 4px step. Tag chips go 12px to a
16px box, card titles 23px to 28, deks 19px to 32, meta text 14px to 20. Forcing all of
them onto a full 8px step would distort real type — a 23px title wants about 28px of
leading, and 24 is too tight while 32 is too loose — so the half-step is the working
compromise, and most roles land on 8 anyway.

The values are unitless ratios rather than pixel leadings, so the whole system scales when
a reader enlarges text in their browser instead of the line box staying fixed while the
type grows out of it.

Two kinds of text are exempt. Fluid display type sets its size with `clamp()` — the page
title, section headings, the wordmark — so no single leading can sit on the base across the
range; those keep their ratios. And an element that carries its own height is measured by
its box, not its line box: the footer's nav links have a 21px line box inside a 24px
`min-height` set for WCAG 2.2 target size, so the box already lands on the base and the
line box inside it is the wrong thing to measure.

**The Radius Scale.** Three steps on the base, `--radius-sm` 8px, `--radius-md` 16px and
`--radius-lg` 24px, with `--radius` aliasing the large one, plus the pill and the circle. A
component's radius matches its own inset: ordinary and video cards use one
`--card-inset: var(--space-3)` for both padding and radius (24px). The Editor's Pick
uses `--pick-inset: var(--space-4)` for its 32px padding, corner and accent rim.
The radius scale itself derives from the spacing tokens.

**Concentric corners.** An element nested N px inside another takes the parent's radius
minus N, so the two curves stay parallel rather than showing a second arc where they
diverge. Three places had drifted out of this by 2026-09-05 and all three were visible.
The Editor's Pick accent rim computed 13.5px around a 24px card, because `--pick-radius`
had been written against the old 12px corner and never followed it; it now takes
`--pick-inset` through `--pick-radius`, with the ordinary radius as a fallback. The Filter trigger sat at 8px one pixel inside a 16px
wrapper, and now takes `calc(var(--radius-md) - 1px)`. Its dropdown sat at 8px beneath a
16px control, and now takes the full `--radius-md` at every width so trigger and panel read as one object.
The mobile panel spans the page shell, not the viewport, and keeps that same 16px corner.
Search result rows use the sitewide `--radius-sm` at 8px. Their one-pixel difference from
the mathematically concentric 7px inner corner is less visible than a fourth radius value
appearing in the interface, so consistency with other small nested elements wins here.
Their hover and focus fills sit 16px inside the search panel, matching the horizontal field
gutter used by the result count; the row's own 16px padding remains inside that boundary.

**The Eyebrow Binding Rule.** An eyebrow names the block beneath it, so the gap that binds the two is one value for the whole site: `--eyebrow-gap`, 8px, one base unit. Every eyebrow on every surface uses it, whether it comes from the `.eyebrow` margin in normal flow or from a grid `gap` where the group is laid out as a grid. A surface that sets its own number drifts out of the pair, and that is exactly how the app-detail rail ended up with 14px inside its groups while the rest of the site sat at the shared value, and 40px before one eyebrow against 22px before the next.

The rhythm is two values, not one. **8px binds an eyebrow to its content; 24px separates one labelled group from the next.** That contrast is what makes a rail read as three groups rather than one list, and it is why the separation never needs a rule drawn between the groups. The gap was 11px until 2026-09-05, a value that sat between two steps of the old scale. This file used to note it was worth revisiting only as a deliberate site-wide pass; the base-unit adoption was that pass, and it moved to 8px, exactly one unit.

**The One Measure Rule.** Prose uses `--measure` (52ch), except for About's named reading-column exception below. The `ch` unit follows the element's font and size, so the current 19px dek and 16px body derive their own widths from the same token; it does not guarantee an exact character count. Deks, footnotes, best-for, panel copy, feature-card copy and category descriptions use this shared measure. Metadata is currently 14px and is a separate role, not a prose-width reference.

**About is that exception, and it is named.** Its column is `--about-measure`, 624px, and the title, the dek, the section headings and the prose all take it. On this page the column and the reading measure are the same number: a page with no grid to fill has nothing to span, so the rules and headings must sit with the text rather than reaching past it, and at 624px the line runs about 73 characters — inside the 65-75 the craft floor asks for, and slightly wider than the 62 that 52ch was giving. It is a width rather than a character count because the *column* is what is being set here, and the measure follows from it.

This file used to claim About was on `--measure` like everything else. It never was, and the title was not even on the column: About carries `.archive-page` as well as `.about-page`, so `.archive-page h1`'s 920px cap outranked `.about-page > *` and the heading ran 296px past the text beneath it until 2026-09-07. The width is now defined once and every element on the page stops at the same edge.

**The One Page Title Rule.** Every page opens the same way: the breadcrumb trail in a 16px band at the top of the shell — `--page-start-space` above it and 16px below — then the title in Headline at `--type-page-title`, and the dek 16px beneath that at `--type-dek`. The title carries no margin of its own; the trail owns the gap. Until 2026-09-02 the title itself sat hard against `--page-start-space` and nothing preceded it. That changed when the trail arrived, and it changed on every page at once rather than on the deep ones only, so the opening stayed one shape. A page that wants more presence gets it from its composition below the fold, never from a private type scale.

**The trail sits in an even band, and that band is 16px.** The gap above the trail and the gap below it are the same number on every page and at every width. The trail spans the distance between the header and the page it names and belongs to neither, so an uneven band reads as the trail having fallen toward whichever side is closer rather than as a deliberate opening.

It took `--eyebrow-gap` beneath it until 2026-09-09, on the reading that the trail names the page under it exactly as an eyebrow names its block. That is true of what the trail *says* and not of where it *sits*: an eyebrow is set inside its own block and shares that block's ground, while the trail has ground on both sides. App detail pages had already been carrying 16px beneath the trail for their taller icon lockup, which was the same conclusion reached one page at a time. The eyebrow token is unchanged and still binds every actual eyebrow at 8px; only the trail moved off it.

Above the trail, `--page-start-space` went 36px → 24px (2026-09-04) → 16px, and it no longer steps up to 32px below 680px. A band that means one thing has to measure one thing at every width, so the phone opening that was deliberately wider than desktop's is now the same as it. The homepage and 404 carry no trail; they still open on `--page-start-space` and simply have no band to balance.

**A control beside the title does not get to set the title's position.** The archive puts its search on the opening rather than on a row of its own, and while that was a flex row shared with the title it made the row as tall as the control — 48px against the title's 38.4px line, 56px against 30px at the widths where controls grow. Centred, the row paid half that difference into the gap above the title and half into the gap below, so the archive opened 20.8px under its trail where Explore and About open at 16, and 29.6px at mid widths; once the row wrapped, the search dropped between the title and the dek and made that gap 88px. The title and the dek now own the rows and the search spans both and centres against the pair, so it can be taller than either without moving them, and below 680px it takes its own row beneath the dek. Every page that opens with a title now opens on the same two steps at every width. Fixed 2026-09-09.

**The Plain Dash Rule.** Public editorial copy uses no em dash and no en dash. Restructure to a period, a comma, a colon, or parentheses, and set number and date ranges with a plain hyphen: `August 5-19, 2026`, not `August 5–19, 2026`. The em dash is the clearest tell of machine-drafted prose, and this publication is human-led by design. Three things sit outside the rule and stay as they are. Page-title separators are an SEO and publishing convention and are indexed, so `Archive — App Waypoint` is correct. Quoted external titles in source notes and reading lists keep their own punctuation, because changing it misquotes the source; source notes stopped being published on 2026-09-01 but are still written and still validated, so the exception still governs how they are recorded. Code comments are not copy and no reader sees them. The rule governs the site's public copy, not this repository's documentation. General frontend guidance in `.agents/skills/taste-skill` states a blanket zero-tolerance ban covering titles as well; that is a marketing-page heuristic, this narrower rule is what governs here, and the vendored skill is deliberately left unedited so it stays diffable against upstream.

**The Two Digit Issue Rule.** An issue number is recorded three digits wide and published two: `Issue 08`, never `Issue 008`, and three digits only once there is a hundredth issue. `src/data/issue.ts` is the single place that produces the label, `issueLabel` for the digits and `issueName` for the whole phrase, and `scripts/check-editorial-style.mjs` fails the build on a literal three-digit form. Both of those exist because the rule was written down nowhere until 2026-09-03: it had been implemented three times over (the issue hero, the archive list, and the RSS summary by a different mechanism) and skipped in five more places, so the breadcrumb printed `Issue 008` directly above a heading reading `Issue 08`, and the archive's `ItemList` disagreed with the rows a reader could see. The record keeps its three digits, because the schema fixes the width and the frontmatter sorts on it; only the reader-facing form is two.

**The Serif-Utility Split.** Serif type carries the editorial voice; the system sans carries the operational voice. Mixing them casually weakens both jobs. The mono face is the third voice and the narrowest: it is for data a reader might copy, which today means the RSS feed URL and nothing else. It is not a costume for looking technical.

## Layout

The site uses a shared centered shell with a maximum width of 1160px and responsive gutters that resolve to 20px on desktop and 12px on mobile. The same shell is used across app detail, tag, collection, archive, and about pages so the directory feels like one system instead of separate templates.

**The Field Grid.** The shell is **twelve tracks on 16px gutters**, each track derived from
the width actually available: `track = (shell - 11 x 16) / 12`. At the 1160px maximum that
is 82px. Spans are what components ask for: a category tile takes 2 tracks (180px), an app
card and a collection tile take 4 (376px), and Filter and Sort take 2 each so the pair
covers 4 — one card — with the gutter between them.

It ran on six fixed 180px fields until 2026-09-07. The arithmetic was right at the maximum
width and only there: 180 x 6 + 16 x 5 = 1160, and a card was two fields plus a gutter. But
the fields were literals, so they stopped being fields the moment the shell shrank. At a
1000px viewport the cards measured 309.33px while Filter and Sort still measured 180 each
and their pair still measured 376, and the toolbar and the catalogue no longer shared an
edge. Twelve fluid tracks render the 1160px composition identically — every measured
position and width is unchanged — and hold it at every width below.

Twelve rather than six for growth as well as fluidity. Six held six categories at one field
and three collections at two, and had no span for a fourth collection, because 1.5 fields
does not exist. Twelve contains six, so nothing today moves, and it takes four collections
across at 3 tracks each when one ships. That is a future option requiring a label-fit test,
not automatic behaviour.

**What is on the grid, and what is not.** Field-aligned: the taxonomy rows, the directory
toolbar including its search field and Filter panel, and the card grid. Deliberate editorial
exceptions, within the same shell: the homepage hero, whose two columns are a .95/1.05 split
because the pick card and the copy are not a card grid; the app-detail rail at a fixed 400px,
sized from the tag sets it holds; and About's reading column, which is a measure decision
rather than a grid one. Those three are exceptions because a page composed for reading is
not a catalogue, not because the grid failed to reach them.

About is the one page that narrows its column. Its shell is the usual 1160px, so the page starts on the same left edge as every other page, but the blocks inside it cap at 620px, so its headings sit with its prose instead of spanning the full shell (its section rules did too, while it had any). Narrowing the shell itself would have centred the column and made About the one page whose content begins somewhere else. Everywhere else the shell is 1160px because a three-column card grid fills it, and a full-width rule there divides full-width content. About has nothing to fill it: its rules were running 1032px to head a 524px column, leaving a 508px dead field and a divider promising content to its right that was never coming. Prose still takes `--measure` inside that column, so the reading measure is unchanged at roughly seventy characters; what changed is that the dividers now match the thing they divide. This page previously followed the shell like every other, and that is recorded here because the uniformity was deliberate rather than accidental: the rule was written for pages the shell fits, and this is the one it does not. Issues and About draw no section rules. The grid separates their content, and a hairline
between two blocks already a full section apart was a second statement of the same boundary.
Their sections sit on one interval instead of two halves flanking a line, and the padding is
asymmetric so that interval can be an odd number of steps: the gap is one section's bottom
plus the next one's top, so a symmetric pair only reaches even multiples of 16. It also puts
more space above a heading than below the content it introduces, which is the rhythm these
pages already wanted.

An issue is a run of card sections, each already bounded by its own cards, so it reads at
**56px**, seven steps, from 32 above and 24 below. About is prose rather than cards, so it runs on a
three-step ladder of its own instead of a single section value.

**The About ladder.** Three intervals, each double the last, so every gap says which level
of grouping it marks: **8px binds** a heading to the content it introduces and one list item
to the next, **16px is paragraph rhythm** between siblings in a block, and **32px is a group
boundary** between the dek and the body, the intro and the first section, and one section and
the next. The section padding is 24 above and 8 below, which sums to that 32 while putting
three times as much space above a heading as beneath it.

**The Section Header Gap.** A section header — a section title, alone or under an uppercase
eyebrow — sits **24px above the content it names**, `--space-3`, on every surface that
draws one: the homepage, issue pages, Explore and app detail. It is one value in one place,
`.section-heading`, and one surface overrides it. That container holds either form; see The
Two Level Rule for which one a given section gets.

**About is the exception, and it is 8px.** `.about-page .section-heading` binds its heading
to the prose beneath at `--space-1`, not `--space-3`. A card section heads a grid that its
own cards already bound, so 24px reads as binding; About heads running prose, where the
heading and its first line are one block and 24px would read as the tail of the section
above. It is the same reasoning as The About ladder, where 8px is what binds a heading to
what it introduces, and it is why the override stayed scoped even after the site value came
down from 32 to 24. Preserved unchanged on 2026-09-09 when About moved onto `.section-title`.

The header is a lockup that names the block beneath it, so the gap that binds it to that
block has to read as shorter than the gap that separates one section from the next. On an
issue that separation is 56px, so at 32px the header was sitting closer to half way between
its own cards and the section above than to the cards it introduces, and a run of five card
sections read as one long list with labels floating in it rather than as five groups. 24px
against 56 states the hierarchy the page actually has. The value went from 32 to 24 on
2026-09-09.

App detail pages ran a private `--space-3` here from the start and reached the site value
from the other direction — the same eyebrow, the same section title and the same cards were
briefly on two rhythms while the base was 32. That override is gone; the page inherits.

**The Two Level Rule.** An eyebrow and a heading belong together only when **each level
contributes information the other cannot**. A fixed rubric above an issue-specific
editorial angle earns both: across 37 sections in nine issues there are five eyebrows and
37 titles that never repeat, so the eyebrow is the index a returning reader navigates by
and the title is what this week's three apps have in common. Current or archived issue over
the issue number earns both the same way, status over identity. The app detail rail's four
labels are a single level by construction: nothing sits beneath them but the block they
name.

Whether a string lives in a template or in a content record decides nothing. That test was
proposed and rejected on 2026-09-09: it would disqualify the rail labels, which are fixed
strings doing necessary work, while admitting any filler an editor happened to type. What
disqualifies a second level is saying nothing the first did not. Three failed that test and
are gone: `One app worth a closer look` under This Week's Editor's Pick, `Three reads for
Mac context` under Weekend Reading, and `You May Also Like` over `More apps like this`,
where the eyebrow went rather than the heading because it spoke in a recommendation
engine's register on the page whose whole claim is that a person chose these one at a time.

**A single heading is a supported form, not half a lockup.** It takes `.section-heading`
like any other section header, and its heading takes the explicit `.section-title` hook.
The hook exists because `.section h2` only reaches headings inside a `.section`, and
Explore's taxonomy sections are not one; lacking a way to say "Section Title" out loud,
they borrowed `.eyebrow` for its type ramp, which is how two of the page's three sibling
h2s came to render at 12px beside a third at 33px, on the rail's 8px binding rather than
this 24px gap.

**Which role a heading takes, and why it is not the heading level.** A heading that **opens
a standalone section** takes Section Title. A heading that **labels one featured card
inside the hero** may take the compact Label role, because there the app's own name is the
block's primary visual identity and a section-scale line above it would outrank the thing
it introduces. That is the whole of the exception: it explains the Editor's Pick heading
and it does not reach Explore's standalone sections. **Heading semantics stay independent
of visual size.** The level states document structure and is chosen for the outline; the
role states rank and is chosen for the eye. An h2 at Label scale is not a demoted heading,
and an h2 at Section Title scale on one page is not a promise about h2 on another.

**The label a reader sees and the heading assistive technology announces are one element.**
The Editor's Pick carried an eyebrow paragraph and a separate clipped h2 until 2026-09-09,
so above 920px sighted readers saw `This Week's Editor's Pick` while heading navigation
announced `One app worth a closer look`, and below 920px the filler heading appeared at
subhead scale and tied the app's own name at the same size. Two audiences, two different
words, one block. One heading now carries both jobs, and it is visible at every width.

**Card grids collapse into this gap, they do not add to it.** `.directory-grid` carries a
16px top margin for the directory surfaces, where it follows a filter toolbar rather than a
header. Where it follows a header the two are adjacent siblings, so the margins collapse to
24 and not 40. This file recorded the app detail gap as 40px and a 48px default until
2026-09-09; neither number was ever on the page, because both were written as a sum of two
margins that collapse. Any future change here is a change to one margin, not to a sum.

**About is the exception, and it is the ladder's own value rather than this one.** Its
headers sit at 8px because they head prose, where a heading and its first line are one
block, and because its sections run on the 32px ladder above rather than the 56px issue
interval. That the two numbers are now both drawn from the low end of the scale is not a
reason to merge them: they answer to different intervals above them.

Before this the page had one value doing nine jobs: 16px separated the title from the dek,
the dek from the body, paragraph from paragraph, a heading from its content, a list from its
lead-in, and one list item from the next, while sections sat at 24 — eight pixels more than a
paragraph break, which is not enough difference to mean anything. Every value was on the base
and the page still read as arbitrary, because a scale is only legible when the steps are far
enough apart to be told apart. Both fall back
to a symmetric `--space-3` and 48px below 920px, where a single column makes every section
long anyway.

The issue page has one wider boundary by design: an 80px `content-divider` sits between the
launches and video sections, so that gap measures 136px rather than 56. Both are whole steps at every
width, which the old pair was not — `--section-space` was a fluid clamp, so doubling it landed
on the base only at the clamp's endpoints and gave 76px at a 1000px viewport.

Explore, the archive and app detail pages were the last three surfaces still drawing section
rules, and they stopped on 2026-09-05. Each one had the same fault underneath: the rule was
carrying a boundary that the interval on either side of it was also carrying, so removing it
left the space doubled rather than correct. The app detail page was the clearest case — the
hero's `border-bottom` and `.section`'s `border-top` sat directly on each other, two hairlines
thick, with 40px of padding on each side. It resolved to one owner and one interval: the hero
carries no bottom padding, the section carries 32px, which is the step the issue page uses.
The homepage opens wider and more scenic, but its content obeys the same page rhythm: full-width header and footer, then a controlled interior whose sections are separated by space. Desktop cards usually live in a three-column grid; below 920px the grid collapses to one column and the pages stop pretending they are desktops. Around 680px the mobile gutters tighten, the header simplifies further, and coarse-pointer contexts inherit larger hit targets even when they are wider than a phone.

Prose everywhere runs to `--measure`, so the reading column is the same width in characters on every page regardless of the type size sitting in it. App detail pages use the same shell and the same page-title and dek roles as every other interior page; what makes them editorial is the composition below the title — content set directly on the page field rather than in a card, a two-column best-for/tags panel, and a narrower related-apps grid. Section spacing is generous but disciplined, with more space above headings than below them.

## Elevation & Depth

Depth is soft and ambient rather than structural. Surfaces stay flat at rest, then gain soft shadows, an inset accent ring, and subtle hover lift when they need separation. The sticky header and search overlay add atmosphere with blur and translucency, but the system never relies on hard offsets or gimmicky glow.

### Shadow Vocabulary
- **Ambient Card** (`box-shadow: 0 18px 55px rgba(27, 35, 42, 0.08)`): resting cards and surface containers.
- **Hover Lift** (`box-shadow: 0 26px 68px rgba(27, 35, 42, 0.11)`): hovered cards and callout surfaces. The light-theme lift is deliberately shallow — a 1.4x step over the resting shadow rather than a new weight — because the white card already separates from the fog field on value alone.
- **Night Ambient** (`box-shadow: 0 20px 60px rgba(0, 0, 0, 0.24)`): dark-theme resting surfaces.
- **Night Hover** (`box-shadow: 0 28px 72px rgba(0, 0, 0, 0.42)`): dark-theme hover elevation.

**The Soft Hull Rule.** Surfaces lift with a soft shadow and an inset ring, not with hard edges or dramatic offsets. The lift settles rather than snaps: cards cross to their hover state over 320ms on `cubic-bezier(.16, 1, .3, 1)`, an exponential ease-out. The header wordmark used to fade in on the same curve at 520ms; that wordmark was removed on 2026-09-06 and the curve is now stated by the cards alone.

## Shapes

The shape language is rounded but disciplined, and since 2026-09-05 it runs on three steps of the base unit rather than seven scattered values. App icon frames use one proportional `border-radius: 25%`, rather than a fixed radius: 25%
of the frame's side, which is what keeps a rendered mark reading as a macOS icon rather than
a rounded box. A 48px directory frame takes 12px and the 56px pick frame takes 14px, the
same proportion the old 44/11 and 52/13 pairs carried. The base-unit pass briefly put both
frames on `--radius-md` at 16px, which is 33% of a 48px side and visibly rounder; a
proportion is not a value to snap.

Ordinary and video cards derive 24px padding and corners from `--card-inset`; the Editor's Pick derives 32px from `--pick-inset`. Controls, menus and overlays use `--radius-md` at 16px. Nested elements derive corners from the parent geometry; other small elements use `--radius-sm` at 8px. App artwork frames stay at 25% across card, hero and detail sizes. Buttons and tag chips go all the way to pills, while the logo and footer mark stay circular. The result is friendly without becoming bubbly.

The system prefers clipped rectangles, thin borders, and deliberate rounding over ornate silhouettes. Geometry stays stable so the content can carry the personality.

## Motion

Motion is used sparingly and always to mark passage: where the reader is in a page, and what they have just reached. The vocabulary is four easing tokens and everything on the site uses one of them. `ease-standard` (180ms) for routine state changes on buttons, links, and cards. `ease-quick` (120ms) for micro-feedback such as search-result highlighting. `ease-emphasis` (240ms) for the hero-aware header states. `ease-settle` (320ms on `cubic-bezier(.16, 1, .3, 1)`) for card hover elevation, an exponential ease-out that settles instead of snapping.

**The Earned Motion Rule.** Motion is rationed by purpose, not by count. A surface may carry one moving thing or several; what disqualifies any of them is moving without a job. Motion earns its place when it acknowledges an action, makes a state change or a spatial relationship legible, preserves continuity through a change, or marks a moment the surface has genuinely earned. Movement that does none of those is animation debt however small, and one decorative flourish is worse than three devices that each explain something. Two obligations follow from the purpose rather than from a budget: every animation needs a `prefers-reduced-motion` path that reduces movement without erasing the meaning it carries, and anything that loops stops while it is off screen. Reserving a specific device to its own surface, which is what The Struck Light Rule does, is about not diluting that device; it is not a quota.

Until 2026-09-03 this was a count: the divider buoy and the Editor's Pick light were declared the two motions with a voice and a third was forbidden. That was arbitrary. It would have permitted a decorative third on another page and forbidden a fourth that explained something, which is backwards.

**The Struck Light Rule.** The Editor's Pick card in the hero is lit by the featured app's own colour, and that light moves. Two continuous animations, both on pseudo-elements of that one card: a wide, soft wash that drifts across the interior over 28s, and a gleam that travels the card's edge over 11s like light crossing a struck plate.

The effect is reserved for **arrivals**: a card the reader is meant to stop at, at most one per surface. Two carry it. In the hero it is the Editor's Pick, the one app an issue argues for, lit by that app's own normalised colour. On the archive it is the terminus, the card that says where the publication started, lit by the site accent rather than an app's colour because what is being marked there is the journey ending and no app is being argued for. Until 2026-09-03 the rule read that nothing else should ever carry it; that was a reservation to the hero specifically, and the terminus is the same kind of moment on a page that earns one. It stays scarce by that test, not by a list: a second lit card on either surface would dilute both.

Both arrival cards are built the same way, and until 2026-09-05 only the hero one was.
Each rests at Hover Lift rather than Ambient Card, because it is the block its page is
arguing for, and each takes the card radius so the accent rim stays concentric with the
corner it traces. The terminus had been sitting at a 16px radius while its rim was drawn
from `--pick-radius` at 24, so the two arcs diverged visibly at every corner, and it
carried a border and the resting shadow instead of the lift.

Four things hold it inside the design system:

1. **The colour is normalised, never raw.** Across the current picks the dominant icon hues run from a fully saturated magenta to a near-black brown. `scripts/extract-icon-accent.mjs` fixes every pick to one lightness and chroma in OKLCh, so the card reads at the same weight whichever app is featured. The result is committed to the app record as `iconAccent` and reviewed like an icon.
2. **The Beacon Rule survives.** Blue still owns actions, links, focus and active states. The pick colour is light on a single card. It never reaches a control, a link or a state.
3. **It degrades to nothing.** A pick whose icon is absent, an SVG, or carries no usable hue has no `iconAccent`, and the card renders exactly as it did before. The treatment never half-applies.
4. **The wash is its own layer.** It sits on a pseudo-element at negative z-index inside the card's stacking context, not in the card's background. The shared hover contract sets the `background` shorthand, which would drop a background image, and routing the gradient through an intermediate custom property stops the drift resolving at all. Both were real bugs; the layer avoids both.

Because the card rests at Hover Lift rather than Ambient Card, it cannot answer the pointer with elevation the way The One Hover Rule describes. It answers with light instead: an accent-tinted depth under the card. Both loops pause when the card is off screen and stop entirely under reduced motion.

**The buoy stays the one authored moment.** The mark on the content divider flashes once as the reader passes it. That is deliberate: it marks the passage the divider stands for, and it sits alongside the light on the Editor's Pick card. The old archive timeline in the removed `Keep Exploring` closer retired with that section on 2026-09-01, leaving the issue page calmer at the finish.

**The archive carried a route and a pilot until 2026-09-05.** Its issue cards sat in a
timeline: a vertical line down the left, a ring at each stop, and one lit dot that moved to
whichever stop the reader was nearest, plus a Landfall Ping when they reached the terminus.
It is recorded here because it was deliberate work and because its removal was a judgement
about reliability rather than taste.

The pilot's position was measured in script from the live geometry of every ring, and
re-measured on scroll, resize, search input, batch reveal and font load. Any of those could
leave it out of step, and in practice it did: the base-unit pass alone put a 16px dot inside
a 13px ring by changing the ring and the dot independently, because their sizes were derived
from each other in a comment rather than in the code. A decoration that has five ways to
desync and no way to fail visibly is a maintenance cost the page was paying every week.

The archive is now a plain column: cards span the full shell width and the reading order is
the order they are in. What the timeline expressed — that an archive is a route back through
the publication — the year headings and the dates already say. `beacon-ping` stays in the
stylesheet; the RSS mark still uses it.

**The Swell Rule.** The water moves, and it is the only thing on the page that moves without wanting to be noticed. Both wave bands, the hero's waterline and the content divider's, breathe: the crests hold their positions while the height of the water and the weight of its second harmonic settle and return, on periods of 23 and 31 seconds that do not divide into one another, so the band never repeats a state the eye can catch.

Each line is four components, and the two carrying most of its height travel in **opposite directions at almost the same wavelength**. They beat against each other, so crests build and dissolve where they are instead of marching across. That is the part that reads as water.

Two earlier versions got this wrong in opposite ways, and both were measured rather than argued about. Amplitude breathing alone moved a crest 5px over 23 seconds, roughly a clock's minute hand: running, and invisible. A single travelling wave was legible but 83% of its motion was pure translation, so it read as a picture being dragged sideways. The counter-travelling pair puts 70% of the motion into shape change and cuts the residual drift from 25px every two seconds to 10.

The pair is deliberately unequal, 0.46 against 0.32, because an even pair cancels to a flat line at the bottom of each beat. Unequal, the water calms without going still, and since each line carries its own phase offset the calm never crosses the whole band at once.

Two things keep it ambient rather than another animation competing for attention. **It is slow**: a crest takes over two minutes to cross the band, so the eye reads it as atmosphere and never tracks it. **The still painting is the high-water mark**, not the midpoint; the swell only ever calms below it. That is not an aesthetic choice but a structural one, because the band was already tuned so the topmost crest clears its canvas by 7px, and a swing either side of the still level spent that margin and flattened the crests against the edge. **Each band is drawn only while it is on screen**, the loop stops when the tab is hidden, and reduced motion leaves the water painted once and still. Component weights are kept small because four waves can align where two could not: at their first values the band cut straight through the top of its canvas at the narrowest hero, where `--sea-h` clamps to 78px. Any change to a weight has to be checked against every height that clamp can produce, not just the widest.

The hero previously stated that its atmosphere never moved. That was true of the star field, which is still painted once, and it is the right instinct for a page that should feel calm. It was wrong about the water: a harbour whose sea is frozen reads as a photograph of a harbour.

## Components

### Resets

Two declarations at the top of `global.css` are load-bearing for the whole site, and
neither of them shows up anywhere on a rendered page.

**`button { font-family: inherit }`.** A button does not inherit the page's font. Without
this it falls back to the browser's own default, which on this site meant 23 buttons on
Explore and 11 on an issue page silently rendering in Arial next to text set in the system
sans. Only one of them had visible text, which is why it survived so long. Any new control
element that can refuse inheritance belongs in this rule.

**`[hidden] { display: none !important }`.** The browser's own `[hidden]` rule is the
weakest kind of declaration there is, so any class that sets a `display` beats it and the
attribute quietly stops working. That is how a reveal control came to read "Show 0 more":
`.button` set `display: inline-flex`, and `hidden` did nothing. The site had collected
nine ad-hoc `[hidden] { display: none }` patches before anyone noticed the pattern. The
global rule is the fix; the `!important` is what makes it a rule rather than a tenth
patch. **Do not write another element-specific `[hidden]` rule.** If one appears to be
needed, something else is wrong. The last five were removed on 2026-09-02 for being
unreachable.

### Buttons
Buttons are quiet, pill-shaped workhorses: obvious, tactile, and not over-embellished.
- **Shape:** 999px pill for the primary and secondary CTA buttons.
- **Primary:** outlined, not filled. A 1px blue border and a blue label over the page, 48px minimum height, 24px horizontal padding, and a small icon gap. A button is as wide as its label — never a fixed box padded out to a round number. It carried a blue fill with white text until the dark palette exposed why that could not hold: Buoy Blue is tuned to be legible as ink *on* the dark surface, so inverting it into a ground put white text at 2.62:1, well under AA, and made the button the brightest object on the page. As a label the same blue clears AA in both themes (5.17:1 light, 7.54:1 dark).
- **Hover / Focus:** the blue deepens on hover, and focus is handled with a clear accessible outline rather than a visual stunt.

**Text fields are the exception to the focus outline.** The search modal's input and the
directory's filter field both take `outline: 0` and no ring. A caret is already a focus
indicator, and it is the one a person typing actually reads; an accent border around a
field they have just clicked into announces something they know and draws the eye away
from the text they are entering. The exception covers text inputs only. Every control
without a caret, which is every button, chip, link and checkbox on the site, keeps its
outline, because for those colour alone is not a focus indicator.
- **Secondary:** transparent fill, ink text, and a borderless or low-border utility presence.
- **Icon Buttons:** the header search and theme controls are 48px circles on desktop, mobile and coarse-pointer devices.

**The Target Floor Rule.** Standalone small targets have a 24px floor; links inside
sentences remain inline. Larger controls use the component-specific heights in Control
heights follow the grid below. Coarse-pointer adjustments grow small controls or their
hit areas without treating every pill as the same role.

An icon link too small to grow gets its hit area expanded around it instead of being padded out, so the line it sits in is undisturbed. The Editor's Pick mark beside an app name works that way, and stops at 24px rather than 48px because a larger area would start taking taps meant for the title. A link inside a sentence is exempt and stays inline; the RSS link in the subscribe copy is the one that qualifies.

**Control heights follow the grid.** Control dimensions use whole multiples of the 8px
base, with roles defined by the actual component. Both `.button` and `.button.secondary`
have a 48px minimum height with horizontal padding of 24px and no vertical padding. Header controls,
directory toolbar controls and collection badge rows are also 48px. Sort menu options
are 40px, rising to 48px on coarse pointers. Tags, active-filter chips, category rows,
filter options and reset controls use 32px; filter options and reset controls rise to
48px on coarse pointers. Mobile directory search and sort controls use 56px. Active-filter
chips retain their visible height and expand their hit area through a pseudo-element.
Standalone small targets have a 24px floor; links inside sentences remain inline.

Primary buttons use an accent border and label; secondary buttons use neutral ones.
Both are transparent at rest. On hover or keyboard focus, the primary gains a 10% accent
tint and both inherit a 1px lift; the secondary stays transparent. Reduced motion removes
the lift. These are existing button exceptions to the general colour-only hover rule.

**Historical:** this was called *The Two Control Heights* until 2026-09-06 and described
44px primary / 38px secondary controls. That pair is superseded by the component roles
above; it is not a recipe for new controls.

### Collection Badges
The collection badge on an app detail page is a link to a curated collection, and it is the rarest fact on that page: six of a hundred apps carry one. It is an honour marker, not a chip. It was a 38px outlined pill sitting above the primary button, where it read as a second, weaker control; it now opens the detail rail.
- **Style:** the collection's mark beside its name in ink at Metadata weight 700. Built exactly like a category row: no container, no ring, no fill, and the glyph simply inherits the row's colour and turns blue with it on hover. A ring around the mark made the mark the loud thing rather than the honour.
- **Rank:** first item in the rail, above Categories and Tags. Rank comes from position and from the label sitting in ink at weight 700 where a category label sits muted at 600. The rows use the same 32px rhythm as category rows so the spacing inside the rail stays even. Never from a colour of its own.
- **Named, like its neighbours.** The group carries a `Collections` eyebrow and 18px of clear space beneath it. It was the only unlabelled group in the rail, which is why it read as orphaned: every other group on the site is named by an eyebrow, and this one had opted out of the house's own strongest device. Setting the names in the display serif at Title was tried for the same reason and rejected; the rail keeps one voice.
- **Marks:** 24px (`--icon-md`) in the same 32px icon column as category marks. The shared glyph rule compensates for rendered size where stroked icons are used; Phosphor collection marks render as filled paths at the same glyph size.
- **Separation:** space alone divides it from the taxonomy below. A rule there reads as a container seam and competes with the thing it is meant to set apart.
- **State:** hover tints the label blue and the mark follows it. Focus adds the accent outline, because colour alone is not a focus indicator.

### Tag Chips
Tag chips are compact chips rather than buttons. They read as metadata first.
- **Style:** soft Shell Quiet fill, muted text, 999px radius, lowercase labels. The chip reads as a label with a soft ground behind it, never as a button.
- **State:** hover and focus tint the chip toward blue without making it feel selected. The label takes the accent's *hover* value, not the accent itself, so the text still clears 4.5:1 against the tinted pill (5.50:1) — the plain accent lands at 3.89:1 there and is not legible enough.

### Cards
Cards are the primary container language for apps, readings, and archive entries. Apparatus and secondary matter are set under a hairline instead, so a card always means a thing worth looking at rather than a thing worth reading past. An app card carries three regions and nothing else: the summary, the best-for line, and the tags. Its single app destination is the generated detail page; the title link and stretched pointer overlay go to the same internal URL, while the official homepage lives on the detail page. It used to end with a source credit; that was provenance for the editor rather than information for the reader, and removing it took a whole region off every card.
- **Corner Style:** `--radius` at 24px, the same as the card's inset.
- **Background:** the surface color — white by day — with a soft shadow and no border.
- **Internal Padding:** 24px, which is also the card's corner radius.
- **Summary Rhythm:** when an app icon is present, the description starts 24px below the
  icon-title row. The icon and title stay 16px apart inside that row.

An archive row is an app card in every respect that matters, and takes the same rest state
and the same hover contract. It set `box-shadow: none` until 2026-09-05, which was correct
while a border drew its edge and left it with no edge at all once borders went.

**Cards carry no border.** The surface fill and the resting shadow already separate a card
from the page; a hairline on top of both was a third signal saying the same thing. Adopted
2026-09-05.

The edge returns on hover, as an inset ring rather than a border. That is not a stylistic
preference: a border, even a transparent one held at rest, puts its 1px back into the
card's row arithmetic, and at two of the three floors that 1px crosses a rounding step and
costs 8px each — 16px of height on every card in the catalogue for an edge nobody sees
until they point at it. The ring is drawn inside the box and costs nothing.

The resting shadow carries a transparent ring layer of its own, so the hover transition
interpolates one shadow layer against one rather than none against one. Without it the
fade stutters on the first frame.
- **Behavior:** hover deepens the shadow and shifts the border toward blue on pointer devices, settling over 320ms rather than snapping.

**The One Card Height Rule.** Every app card on a page is the same height, and the regions inside them line up across the whole grid rather than only within a row. The grid defines three repeating tracks and each card spans them as a subgrid, so a card agrees with the one beside it and the one two rows below it.

The floors are what the tallest record in the catalogue actually needs, measured across all
118: `232/120/136` where the three columns are narrowest, settling to `184/96/96` above
1100px once the content column stops growing. Each is the measured maximum rounded up to
the base, never down, because a floor below the true maximum lets that row outgrow it and
the whole grid stops agreeing.

They are re-measured, not adjusted. Any change to type, padding or the catalogue itself
moves them, and on 2026-09-05 all three moved twice in one pass: once for the base unit
and once for the line boxes. A single record can set them for everyone — MacWhisper's
description was the only one of 118 running to five lines, which was adding 24px to every
card until it was trimmed to four.

**The floors only apply where the grid is multi-column.** Below 921px each card is its own height. A single column has no neighbour to agree with, so a floor buys nothing there and costs a great deal: the budgets are sized for a card about 270px wide, while a one-column card is 351px and wraps far less, so on a phone they were adding a median of 159px to every card and 17,000px of scrolling to the directory. The first and last include the card's 24px padding, because a subgrid item's padding comes out of the tracks it spans. They are `minmax(floor, auto)` rather than fixed heights, so a future record that outgrows its budget makes its own band taller instead of being clipped.

This replaced a set of fixed `min-height` budgets on each region. Those were guesses, and any card that overflowed one — a second line of tags was the usual culprit — pushed everything below it out of step with the rest of the row.

**Reading cards are the exception, and align on their own terms.** They carry `.app-card` too, but hold three parts inside a wrapper rather than three children, so the card and the wrapper both subgrid onto the shared rows. They take no floors: a reading card should be as tall as the longest of the three and no taller. Their own `min-height` budgets were doing the same job far worse, reserving three lines of title space for a one-line headline and leaving the card half again as tall as it needed to be.

**One Glyph Contract.** Interface and taxonomy icons use Phosphor. Every stroked icon on
the site is drawn by one rule, matched on the explicit `.icon` opt-in used by Phosphor and
the handful that are hand-written. It carries the four presentation properties — `fill`,
`stroke`, `stroke-linecap`, `stroke-linejoin` — and derives both size and weight from a
single custom property, so a caller sets `--icon-size` and nothing else. Six rules used to
restate those four properties and then choose their own size and weight, which is the
mechanism behind every icon drift found in the week to 2026-09-06: a 16px search mark
standing beside a 24px theme toggle, a modal icon silently inheriting its authored stroke
because no rule had claimed it. Phosphor regular icons are filled paths, so
`.phosphor-icon` opts back into `fill: currentColor` and `stroke: none` while preserving the
shared sizing contract.

**Two sizes, one line.** `--icon-sm` is 16 and `--icon-md` is 24, both on the base unit;
14, 21 and 27 were in use until 2026-09-06, each set locally to fit one spot. The default
glyph size is 24px. The smaller 16px token remains for compact controls such as directory
field marks and chevrons, while mobile menu rows, RSS close and copy controls, app detail
category rows and app detail collection badges now use the 24px token. `--icon-stroke` is
**1.5px as it lands on screen**, which is the number that had never been controlled. A
24-unit SVG viewBox scales authored strokes with the glyph: an authored width of 2 draws at
1.33px inside a 16px box and at 2px inside a 24px one, and `getComputedStyle` reports `2px`
for both. Dividing the authored width back out by the rendered size —
`calc(var(--icon-stroke) * 24 / var(--icon-size))` — holds the line steady at every size.
This is why the directory chevrons read heavier than the field's glyphs while every declared
number matched.

The rule is scoped, never applied to bare `svg`. The buoy mark, the hero wordmark and the
footer's social marks are filled rather than stroked, and a blanket `fill: none` would erase
all four. **An app icon frame's corner is also outside this system and outside the radius
scale**: it takes 25% of its own side — 12px on a 48px frame, 14px on the 56px pick frame —
which is what makes a rendered mark read as a macOS icon rather than a rounded box.

**The Beacon Rule has one semantic exception, and it is named.** Blue is the site's only
accent and marks action. **Failure is state, not emphasis**, so it takes `--error` —
`#9c2f2a` by day and `#ff8f86` by night, both clearing AA on the surface they appear on at
5.24:1 and 5.68:1. It was two hex literals repeated across four rules until 2026-09-07,
which left no way to tell a sanctioned exception from a stray colour.

Two decorative uses of the accent are also sanctioned and recorded here so the same question
does not have to be re-answered: the **subscribe mark**, which carries an accent fill and a
ping, and the **archive terminus**, which is the second use of The Struck Light Rule and is
argued for above. Anything else reaching for a colour outside the palette is drift.

**Design invariants are checked, not remembered.** `scripts/check-design-invariants.mjs`
runs in `npm run validate` and guards eight relationships that each broke silently in
practice: an SVG missing the glyph contract and rendering at 0×0, a fixed text role
inheriting its line box, structural spacing declared fluid, the spacing scale not deriving
from `--base`, a control declaring its own focus ring, a content divider returning through a
breakpoint, a state selector that does not match the markup, and a hover lift not reset
under reduced motion. Each check tests a *relationship between* declarations rather than
restating a literal — asserting that `--space-3` is 24px tells you nothing that reading the
line does not, and passes happily while the thing that value was meant to produce is broken.
Source checks also reject untokenized whole-step vertical spacing and suppressed non-caret focus rings, except the explicitly named dialog-container exception.
The read-only browser check in `scripts/check-rendered-design.mjs` verifies card inset/corner/rim, icon proportions, search nesting, directory edges and fixed-role leading against the actual DOM. Run it on the relevant pages, open panels and both sides of the responsive breakpoints; source checks alone cannot verify layout.

**The Editor's Pick variant owns its differences.** The pick is the one app an issue argues
for, so its card outranks the ones beside it: the title takes Subhead rather than Card Title,
and the card takes a 32px inset with the 32px corner that inset implies. Every selector in
the variant carries `.app-card` as well as its own class, so it beats the base by specificity
rather than by hoping to be read last.

The rim that traces it reads the same variable. `--pick-inset` is the card's inset, its
corner and the radius the accent rim is drawn from, so the three cannot diverge. They did,
briefly, on the day the inset moved: the rim tracked `--radius` directly and stayed at 24px
while the card went to 32, and the two arcs separated visibly at the corner. Three things
reading one variable is what keeps them concentric; three things repeating one literal is
how they come apart.

It did not, until 2026-09-07. `.editors-pick-card` and `.app-card` are each one class and the
base sits later in the file, so the base won every property they shared: the variant declared
`display: grid` and rendered flex, declared a fluid padding and rendered 24px, declared a
Subhead title and rendered Card Title. The code described a composition the browser had never
drawn, which is the most expensive kind of wrong — it reads as intent to anyone maintaining it.

The `grid-template-areas` that sat in that block were deleted rather than revived. They
ordered the card summary / best-for / note / tags while the markup emits summary / note /
best-for / tags, because the hero states its reason before its audience. Reviving them would
have reordered the card to match markup that no longer exists. The layout is a single column
in document order, which flex already does; what the variant needed was its inset, its corner
and its title, not a grid.

**The One Focus Ring.** Every control that takes keyboard focus draws the same ring:
`--focus-ring` (2px solid, the accent at 38%) at `--focus-offset` (3px). It is a token, not
a convention, because a convention is what the site had — nine different treatments across
six stylesheets on 2026-09-06, spanning four accent alphas, five offsets and two mechanisms,
each written by whoever added the control. Three of them drew the ring with `box-shadow`
behind `outline: 0`, which meant the ring did not follow the control's radius and vanished
in forced-colours mode. The one legitimate variation is the offset: menu and search-result rows inside a panel
take `-2px` so the ring sits inside the row rather than crossing its neighbours, and they
override only that. Colour is never the indicator on its own — a control that answers a
pointer with colour still owes a keyboard reader a ring. Adopted 2026-09-06.

**Colour is the hover language.** The default control response is a colour change. Cards and panel rows have their own responses: a **card** lifts, under The One
Hover Rule below, because the whole surface is the target; a **list row** inside a panel —
menu options, search results, filter rows — fills, because the row is the target and colour
alone would not show which of a stack of rows is live. Buttons retain the tint/lift exception specified under Control heights follow the grid. Other controls use colour. This was
already true of seventeen rules before it was written down, which is exactly why it kept
being broken: the dropdown triggers filled their shells and the secondary button invented a
surface it does not have at rest, both of them local decisions that nothing contradicted.
The primary `.button` is transparent at rest; its interaction tint arrives on hover or
keyboard focus. Describing it as filled at rest was an obsolete instruction, corrected
on 2026-09-07 without changing the treatment.

An **open** control stays lit. A dropdown trigger holds the accent, in its label and its
chevron, for as long as its panel is showing, so the trigger and the menu it opened read as
one object rather than two; it keeps a fill there as well, because a state that persists
after the pointer has left cannot rely on a hover to carry it. Adopted 2026-09-06.

**The One Hover Rule.** Every card that leads somewhere shares one hover contract: rest at Ambient Card, move to Hover Lift and an inset ring of `color-mix(in srgb, var(--accent) 42%, var(--line))`, cross over 320ms on `cubic-bezier(.16, 1, .3, 1)`, and do it only under `(hover: hover) and (pointer: fine)`. App cards, feature cards, reading cards, archive rows, and category directory rows are all on it, the last two through `.archive-card`. A card that carries a category accent keeps that accent in its resting ring and gives it up on hover; nothing else about the contract changes per card type.

Three things are deliberately outside it. The app-detail rail's category rows are links in a list rather than cards, so they answer the pointer with the accent over 180ms and take no lift; they were bordered cards until the rail replaced them. Cards that are containers rather than destinations — the explore utility and subscribe cards, which hold their own links and controls — stay flat, because a lift would promise a click the card does not accept.

### Explore Directory

Explore carries the catalogue itself, not a sample of it: category and collection cards, then
`AppDirectory` over all 102 apps with the count, filter and sort the tag, collection and
category pages already use. One component, four pages.

It replaced a Browse-all Carousel on 2026-09-01. That was a rotated three-card stack with
drag, arrows and 102 slots, and a critique the same day found it answered "show me
everything" with a device that showed one thing per gesture: 101 interactions to see the
catalogue, on the page whose whole job is browsing. It also cost the site its own motion
rule, being the most kinetic object on a site the style guide calls calm and close to
still, on the page with the least editorial reason for movement.

Two further problems went out with it, both by deletion rather than repair. The page had
picked its sample apps randomly at build and then randomly *again* in the browser,
overwriting all eight grids, so a reader who followed a card and pressed Back met a
different Explore and the publication appeared to change its mind about what it
recommended. And the client renderer carried a hand-copied duplicate of `AppCard.astro`
that had already drifted from it. Removing the shelves removed the renderer, and the
renderer took both with it.

- **Order:** categories, collections, then catalogue. The opening uses six category
  cards on the Field Grid's 16px gutters, with an icon, serif title and live app count.
  The collection row divides evenly among the existing collections; two occupy three
  fields each, and three occupy two each. Cards use 16px insets and matching corners,
  with 8px between each muted section label and its row and 24px between groups.
  The category row becomes three columns below 1100px, two below 680px and one below
  360px. Collections stack below 680px. This compact opening follows the editor's
  September 5 mockup; descriptions remain on category pages and tags in the directory filter.
- **The count is stated, once.** The directory's filter bar carries it and keeps it live as
  filters narrow. The hero carried it too until 2026-09-02, which meant the page opened by
  announcing a number and then restated it a screen later; the dek now describes what the
  page holds and the count belongs to the control that changes it. The page previously
  never said how many apps existed at all.
- **One glyph treatment across the control row.** Search, Filter and Sort are three 48px
  shells with a 1px border and a 16px radius, and the glyph in each — the magnifier, the
  clear ×, the two chevrons — is a 24 viewBox drawn at 16px on a stroke of 2, which is
  1.33px on screen. That was already true when the chevrons still looked heavier than the
  field's glyphs: they sat at full `--text` while the magnifier and the × were `--muted`,
  and brightness was doing the work that looked like weight. Every glyph in the row is muted
  now, and a chevron comes up to `--text` on hover, focus or while its menu is open. It does
  not go to the accent: blue is rationed, and a chevron acknowledging a pointer is not a
  thing being chosen. The words carry the ink; the glyphs label what the control is.
- **The directory controls are a row, not a grid.** The surface's own heading leads where it
  has one, and Search apps, Filter and Sort sit at the end, pushed there by the heading's auto
  right margin. The live count led that row until 2026-09-02, when it moved down to sit with
  the active-filter chips against the grid they describe; the row kept the mechanism and lost
  the element, which left 488px of empty field beside the controls until Explore's `All apps`
  took the place. A surface with no heading of its own passes none, keeps its screen-reader
  heading, and the row aligns to its end as before. It was a
  six-track grid until 2026-09-02, with the count spanning tracks 1-2, the menus at 5 and
  6, and tracks 3 and 4 existing only as spacers. Six tracks for three items reads as a
  layout right up until a fourth control arrives, and then it reads as a puzzle.
  Text query is always visible because exact-app lookup should not require opening Filter
  experimentally. Collections and Tags remain inside Filter. Filter and Sort keep stable
  labels, and only collection and tag selections contribute to the Filter count badge. When
  the card grid collapses, count and search each take a full row while Filter and Sort share
  the row beneath them, preserving DOM and focus order. Each visible control stays flat with
  a border and no lift.
- **The default order follows what the surface is doing.** Unnarrowed, the grid sorts by
  date featured; the moment a query or a filter is applied it sorts A-Z. Adopted
  2026-09-05, because the alphabet is a lookup order and this grid is not a lookup. With
  no query it put the same eighteen names on screen forever — Actions, Agent Mac,
  AgentPeek — chosen by nothing but their first letter, on the largest block of the page.
  Date featured is the publication's own order, it turns over completely with every issue
  at no editorial cost, and 117 of the 118 apps carry a date for it. Once a reader states
  what they are after, they are looking something up rather than browsing, and a narrowed
  set gains nothing from recency, so the index order returns.

  A lane page — a category, collection or tag — is narrowed from the first paint and stays
  A-Z throughout. It is detected as having been handed fewer apps than the catalogue holds,
  not from `defaultFilterType`: only collection and tag pages set that, because a category
  page passes its own subset and there is no category filter in the menu for it to pass.
  The subset test is the one fact all three share and there is no prop for a future lane to
  forget.

  Choosing from the Sort menu takes the control over permanently. After that the order is
  the reader's and stops moving when they type, which is the difference between a default
  and an override. Ties inside an issue fall back to the app name, so the order is total
  and the server and the client cannot disagree about it — the server renders the first
  eighteen cards and CSS caps the grid at parse time, so whatever it emits is what appears
  before any script runs.
- **Directory state is shareable.** Query, optional collections, optional tags and a
  sort that differs from the one the current state would derive are written to the query
  string and restored on load. A sort in the URL is treated as a choice the reader made,
  so it is honoured as an explicit one and does not move when they narrow further. Typing uses
  `replaceState`, so the browser history does not receive one entry per character. A tag,
  collection or category named by the path remains the page's immutable starting set;
  tag and collection controls stay checked and disabled, and no path-defining value is
  duplicated into the query string.
- **A batch at a time.** Rendering all 102 cards at once made the page 16,700px at 1280
  and 41,800px on a phone, worse than the sampled version it replaced. `AppDirectory` now
  ships the whole catalogue to the document and shows the first 24, with a control that
  reveals the next 24. Explore came back to 5,300px on desktop and 12,000px on a phone,
  which is shorter than the eight-shelf page ever was while holding everything.

  The mechanism is deliberately not virtualization. Every card stays in the document, so
  crawlers, the search index and a reader without JavaScript get the whole catalogue; only
  visibility changes. The cap is applied in CSS at parse time and handed to the script on
  load, so the first paint is already short rather than collapsing from full height once
  the module runs, and a `noscript` block lifts the cap entirely when there is no script to
  take over. Filtering resets to the first batch because it is a new result set; sorting
  keeps the batch and recomputes which cards fall inside it.

  It serves all four directory pages, not just Explore. The 71-app Productivity category
  went from about 35 screens on a phone to 12.

- **Where the reveal puts the keyboard.** Focus moves to the first newly revealed card,
  which takes a `-1` tabindex so it can receive focus without becoming a tab stop, putting
  the next Tab inside the new run. Not to anything inside the card: a card's full-surface
  link is deliberately `tabindex="-1"` and `aria-hidden="true"` for mouse convenience, so
  focusing it would land the keyboard on a node hidden from assistive technology, and the
  only other named link in a card leaves the site.

### Breadcrumb

A text trail above every page title on the 174 pages that sit below the root. It answers
one question, where am I, and it is the third time that question has been asked: an August
critique wanted "one restrained, product-specific orientation cue" and said explicitly not
badges or decorative clutter, and a September critique scored Visibility of System Status
2 of 4 citing no breadcrumbs and no sense of where an issue sits in the sequence.

- **It is a trail, not a drawn course.** Sentence case at `--type-meta`, muted, middle-dot
  separators between the ancestors. The gap before the last crumb carries the position
  marker instead of a separator: the marker is already a dot in that slot, so a middle dot
  in front of it reads as two dots rather than as a mark. The same test removed the middle
  dot from the archive card's scent line on 2026-09-05: that line is a flex row with a 16px
  column gap, so the space was already separating the pick from the count and the dot was a
  second separator in the same slot. A middle dot earns its place only where two facts share
  one text run with no gap between them, which is why the lane card eyebrows keep theirs. The site already carries its nautical world in the buoy lockup and the wave
  bands; a rope, a compass or a chart line here would be a fourth voice saying the same
  thing louder. The waypoint idea is in the marking of the current position, which is the
  one thing a chart does that a list of links does not.
- **One dot marks where you are.** The last crumb is not a link, carries `aria-current`,
  and takes a 7px filled dot in the accent, sized against the separator glyph's 4px so it reads as a mark and not as another separator. That is the only ornament. It keeps The Beacon
  Rule because a current-page marker is an active state, which is what the desktop nav
  already uses the accent for.
- **App pages route through Explore, not a category.** 92 of the 102 apps carry more than
  one category and up to four, and the `categories` array is derived from tags by
  `scripts/sync-app-categories.mjs`, so its first entry carries no editorial decision and
  would change under the page without anyone choosing it. Explore is the honest parent: the
  one page that holds every app. Trails are Home / Explore / App, Home / Archive / Issue,
  Home / Explore / lane, and Home / Explore, Home / Archive or Home / About for the three
  pages one hop from the root. Those three carry a trail for the same reason the deep ones
  do: the opening is one shape across the site, and Archive is already a parent in the
  issue trail, so a bare Archive page without one read as an oversight.
- **The homepage and the 404 have none.** The root has nowhere to point, and a not-found
  page is not in the hierarchy. The homepage renders through the same `IssuePage` component
  as an archived issue, so its trail is gated on the component's `homepage` flag rather
  than on the route.
- **The visible trail and the JSON-LD are one array.** `src/data/breadcrumb.ts` builds it,
  the page passes it to both `BaseLayout` (which emits `BreadcrumbList` into the graph) and
  the component. Google's guidance is that structured data describes what a reader can see,
  and a single source is the only thing that keeps that true after the next edit. All 174
  pages were verified to match name for name.
- **It wraps rather than truncates.** The middle crumb is the one carrying the orientation,
  so a trail that drops it to fit has given up the thing it exists for. The longest today,
  Home / Explore / Files, Research & Documents, still holds one line at 375px.
- **The issue page borrows the shell.** Its hero runs full bleed, so the trail sits in a
  `.page-shell` wrapper to line up with the wordmark, and pays `--page-start-space` above
  itself because the hero's own top padding sits below it.

### Site Header and Navigation
The header is sticky, translucent, and restrained. The brand is the buoy mark alone; the icon controls stay compact and monochrome until hover or focus gives them blue.

**The wordmark left the header on 2026-09-06.** It set "App Waypoint" in the editorial serif beside the mark, and on the homepage it was hidden until the reader scrolled past the hero's own large wordmark, then faded in over 520ms — a hand-off, so the name was never stated twice at once. The mark carries the brand on its own and the link keeps `aria-label="App Waypoint home"`, so nothing is lost to a screen reader. Removing it took the `is-homepage-brand` gate, the `is-brand-visible` state, the scroll listener that maintained it and the `--type-brand-nav` token with it: the whole apparatus existed to manage a conflict that no longer occurs. The hero wordmark on the homepage is untouched.
- **Desktop:** brand on the left, then Explore Apps, Archive, About, an icon-only Phosphor Search control and the icon-only theme toggle on the right.
- **Mobile:** the header keeps the brand and theme toggle visible, then moves Search, Explore Apps, Archive, About and Subscribe into the navigation dialog.
- **Hover / Active:** everything in the header answers a pointer the same way — the label
  or glyph shifts to the accent, and nothing else moves. The search button, menu toggle and
  theme toggle used to fill a circle behind their glyph on hover, so two of the five things
  in the row replied with a disc while the other three replied with colour. The discs went
  on 2026-09-06. Focus keeps a ring, because colour alone is not an adequate focus
  indicator: the shared `--focus-ring` uses `--focus-offset` (3px), following each control's
  radius. Historical: the theme toggle rotated 12° until 2026-09-06; it now changes colour
  only, with no hover rotation.
- **One glyph size, one weight.** Every icon in the header is 24px in a 48px control at
  a rendered 1.5px stroke, the menu toggle's lines included, and the search modal's input icon
  joins them: it is the same magnifier at the same size as the header button, so a reader
  who opens search sees the mark they clicked. The search mark was 16px against the theme
  toggle's 24px until 2026-09-06 — the two were declared in different stylesheets,
  `global.css` for the toggle's base and `search.css` for the button, which is how they
  drifted with nothing to catch it. The size and weight they must agree on are now stated
  once, in a rule that names them together, and `global.css`'s shadowed `.theme-toggle svg`
  block went with the fix rather than being left to describe a rendering that no longer
  happened. The modal's input icon had no stroke-width at all and fell through to its own
  authored `stroke-width="2"`, which made the heaviest glyph on the site one nobody had chosen.
- **One rendered stroke at every size.** `--icon-stroke: 1.5` defines the line that lands
  on screen for stroked marks. For the shared 24-unit SVG viewBox, authored stroke-width is
  `calc(var(--icon-stroke) * 24 / var(--icon-size, var(--icon-md)))`: 1.5 at 24px and
  2.25 at 16px. Phosphor's regular icons are filled paths, so they opt out of stroke while
  keeping the same 16px and 24px size tokens. Filled brand marks are outside this
  outline-glyph contract. Historical: the former 1.8/2 authored weights were superseded by
  this size compensation; do not restore them.
- **The directory's search field carries the site's own clear ×.** Both search inputs are
  `type="search"`, so WebKit drew a native cancel button in them, and it behaved differently
  per engine — Chrome reveals it on hover or focus, Safari whenever the field has text — so
  the affordance appeared and vanished for reasons a reader could not see, and it shipped
  with `cursor: default`, giving no sign it could be pressed. It is switched off on both
  fields. In its place the directory gets `.field-clear`: the site's X at 16px and stroke 2
  in a 24px control, muted at rest, accent on hover, present exactly when the field has a
  value. Clearing returns focus to the field, since the button it was on is about to be
  hidden. Adopted 2026-09-06.

  The search modal deliberately has no clear of its own. Its × dismisses the modal, its
  field empties on every open, and a second × beside the first read as two identical marks
  doing different things. The directory's query is the one worth a control: it survives
  navigation, it is shareable in the URL, and it is the one a reader arrives already holding.
  Both fields are grids with a track per control, and the clear's track exists only while
  the button does — the modal's close silently wrapped to a second row the first time a
  fourth child appeared in that row without one.
- **The modal close buttons take the same colour-only hover.** They filled a 32px disc and
  drew a ring around themselves on hover, which made the control that dismisses a modal the
  loudest thing in it. They shift to the accent now and nothing else moves, and the ring
  they kept is a focus ring, since the fill they had been relying on for focus is gone.
  Removed 2026-09-06 alongside the header's. The RSS copy button was already on colour plus
  a 1px lift and did not change.
- **The navigation menu is on the base unit.** Its rows carry a 16px inset, a 16px gap and a
  24px icon, but the space *between* them ran on 3px, and the two groups paid 4px each into
  their shared boundary — the two values the base unit exists to remove. Every step in it is
  now 8px or a multiple: rows are 40px, the gap between them is 8px, and the inset is 8px,
  which also makes the corners concentric, since the modal's 16px radius less that inset is
  the rows' own 8px. Search once led a group of its own, separated by a hairline and then by
  16px of space; it sits on the same 8px step as every other row now, so the menu reads as
  one list rather than an action above a list. The rows are the one control on the site under
  the 48px height, which is a deliberate trade for a shorter menu: 40px clears WCAG 2.2's
  24px minimum comfortably but is under the 44px Apple recommends for touch.
- **Skip link:** every page starts with a hidden-until-focused skip link that lands on the main content landmark.

### Directory Controls
The controls are always visible above every `AppDirectory` grid. They narrow the current
view in place and never compete with the Cmd+K search modal's navigation job.
- **Query:** the visible Search apps field matches the same fields as site search: name,
  description, Best For, source and tags. It reads the rendered card data, uses
  `String.includes` and does not fetch the search index. There is nothing to submit because
  the field filters on every keystroke, so Enter is prevented without navigating or moving
  focus.
- **Structure:** live count, visible search, then a Filter menu containing Collections and
  Tags, followed by Sort. A flex row: the count leads at its natural width and
  carries `margin: 0 auto 0 0`, which is what pushes the two menus to the end. The auto
  margin has to live in the shorthand, because a separate `margin-right` above the block's
  own `margin: 0` is silently reset by it and the controls collapse back to the left.
- **Shape:** search is a flat 280px text field and each menu is a flat 12px surface at a
  fixed 180px. The count is not a surface at all: no border, no fill and no padding. The
  Filter panel opens under both menus and its edges land exactly on theirs: 376px wide at
  `left: -1px`. Both numbers are corrections for the same thing. A
  percentage width and a `left` offset on an absolutely positioned box are measured from
  the containing block's *padding* box, which here is the trigger inside its own 1px
  borders, so `200%` falls 4px short of the two 180px menus and `left: 0` starts the panel
  a pixel inside the menu's left border. Until 2026-09-02 the rule paid neither back and
  the panel hung 3px short of Sort's right edge.
- **Behavior:** query, tags, collections and sort compose. Query and checkbox changes reset
  the result batch to 24; sort keeps the current batch. Filter opens onto the first available
  facet. Choosing an optional tag closes its menu, while clearing a tag leaves it open.
- **States:** disabled controls mark the defining tag or collection so the page cannot be
  unselected away from itself. The empty state names the query with `textContent` and clears
  only that query, preserving other active filters.

### Search Modal
Search is a centered overlay over a frosted backdrop, with a bright, controlled surface.
- **Shape:** `--radius-md`, 16px, at every size.
- **Structure:** input row, result count, then a scrollable result list.
- **The count owns its band.** The result count sits 16px below the input's rule and 16px above the first result, and it carries both halves as its own padding. The lower half used to be the list's `padding-top`, which travels with the content of a scroll container and so collapsed as soon as the list moved. The list keeps its 16px side and bottom inset and takes none at the top.
- **Behavior:** the backdrop blurs, the modal remains narrow enough to feel deliberate, the app index loads on demand, and results behave like normal focusable links rather than a custom combobox.

**The One Scrim Rule.** Search, the navigation menu and the subscribe dialog share one backdrop, `--scrim`, and it follows the theme. All three were a near-black navy in both themes, which is right over a dark page and turns a light one grey; light now takes Harbor Fog at 62%, so the page stays bright and the blur does the obscuring. The blur is the same in all three at `blur(12px) saturate(110%)`; the nav menu had drifted to 10px for no reason anyone recorded. A panel separates from the scrim on its own shadow, not on the scrim being dark.

### App Detail Page
The detail page answers three questions in order: what is this, is it for me, and where do I get it. The masthead carries that path and the rail carries everything that files the app rather than describes it.
- **Masthead:** the app's own icon and the page title form one lockup, the icon scaling from 56px to 80px against the title's cap height, with a corner of 25% of its own side. Then the dek, then Best For, then the single Homepage button. An app with no icon takes a category mark on the documented missing-icon colour, stable from the app ID so a card and its detail page always agree. Which category is the app's first by default, or whichever `iconCategory` names when the editor has directed otherwise.
- **Opening gap:** the breadcrumb sits 16px above the icon/title lockup, matching the 16px step from that lockup to the dek, so the trail, the lockup and the dek run one even ladder. This was a scoped override for the taller lockup until 2026-09-09; it is now simply the site value under The One Page Title Rule, and the page carries no rule of its own for it.
- **Rail:** a 400px column holding three labelled groups, Collections then Categories then Tags, each built the same way: an eyebrow, `--eyebrow-gap` beneath it, then its items at 2px. 24px separates the groups. Nothing is divided by a rule. It occupies what used to be empty space beside a 900px masthead on a 1160px page. The width is set by the tag chips: measured across all 102 apps a tag set needs 311px at the median and 399px at the 95th percentile, so 400px keeps 95% of the catalogue on a single line. The longest set needs 473px, and buying that last 2% would cost 60px of the prose column.
- **Taxonomy rank:** categories are the most generic fact an app carries and read at Metadata scale in muted ink, as 32px rows with their marks. They were 22.4px serif inside 80px bordered cards, which made the least meaningful metadata the largest thing on the page after the title. Tags stay chips at Label scale. Nothing here outranks the app's own name, dek or Best For.
- **One axis:** every mark in the rail shares a centre and every label starts at the same x, because the badge and the category rows use the same 32px icon column and 8px gap. Their glyphs are both 24px.
- **Related-app rhythm:** the gap from the related-app heading to the card grid is 24px, `--space-3`, the site value for a section header — see The Section Header Gap. The page carries no override of its own. `.section-heading`'s bottom margin and `.directory-grid`'s 16px top margin are adjacent siblings, so they collapse to the larger of the two rather than summing.
- **Collapse:** at 920px, where the whole site drops to one column, the rail stacks under the masthead and keeps its DOM order, so reading and focus order do not change. No rule divides them, and none divides the badge from the taxonomy: inside the rail the separation is space. The hero used to close against the related apps on a rule; since 2026-09-05 that boundary is 32px of the section's own top padding, and the page draws no rule at all.

### Homepage Hero

There is one hero. Issue pages render the same composition as the homepage; the only difference is which element carries the `h1` and whether the eyebrow reads *Current* or *Archived issue*.
A full-bleed band whose content sits on the shared page shell, so the wordmark aligns with every section heading below it. It carries no artwork.

- **Structure:** identity (wordmark, wave rule, tagline) over a hairline, then the issue block; the Editor's Pick renders beside it as a real `AppCard`, the only card in the fold.
- **Atmosphere:** two drawn layers — a star field (night only) and an engraved wave band. The stars stop at the water, and the horizon is measured from the sea canvas rather than taken as a fraction of the hero's height. Below 920px the sea stops being absolutely positioned and becomes a block in the flow with the Editor's Pick beneath it, so a fixed fraction put stars under the waterline on every phone. All canvas, no image request, painted once and repainted only on theme change or resize. The day sky above the water stays empty; a cloud bank was drawn there and removed for adding noise rather than calm.
- **The waterline.** The band's ground fades to the page colour across the wave band and the strokes taper to nothing, so the hero ends on the colour the next section begins with. A single `--sea-h` drives the canvas height, the bottom padding, and the fade distance.
- **The fade is eased at both ends, not just aimed at the right colour.** Landing on the page colour is what keeps the hero from ending on a step; easing out of it is what keeps the hero from ending on a *line*. A linear ramp meeting a flat field agrees with it in value and disagrees in slope, and the eye reads that corner as an edge — light mode showed a hairline under the water on phones while the hero's last row and the page's first row were both `--page`, which is why it survived a check that only compared the two colours. The ramp is a smoothstep, so its slope reaches zero at each end. Light mode also has only twelve levels of ink to spend across the fade, few enough to band in 8-bit; the easing puts the closest-spaced steps mid-fade where the water gives them texture to hide in, and the fade runs `--sea-h` plus 96px rather than 38px to buy back the steepness the easing adds there. Fixed 2026-09-09.
- **Motion:** the star field is painted once and never moves, and there is no load-in entrance. The waterline swells under The Swell Rule, quietly enough that it reads as atmosphere rather than as animation. The Editor's Pick card is the one thing in the fold that moves for attention, under The Struck Light Rule, and it earns that by being the app the issue is arguing for.
- **The pick carries one visible heading at every width.** `.home-hero-pick-title` is an
  `h2` set in the accent Label role, reading *This Week's Editor's Pick* on the homepage and
  *Editor's Pick* on an archived issue, with `--eyebrow-gap` beneath it to the card. It
  takes the Label role rather than Section Title because it names one featured card inside
  the hero and the app's own name is that block's identity; see The Two Level Rule.
  Until 2026-09-09 this was an eyebrow paragraph above a *clipped* h2 reading `One app worth
  a closer look`. That clip was the right answer to the wrong question: removing the h2 had
  run the desktop homepage from h1 to the app card's h3, so the clip kept the level in the
  outline, but it also left sighted readers and heading navigation with two different labels
  for one block above 920px, and below 920px the filler heading appeared at subhead scale and
  tied the app's own name. **A heading that orders the outline stays in the outline at every
  width, and the words it announces are the words on the screen.**

### Issue Subscribe Card

Every issue page, including the homepage and archived issues, closes with the shared RSS
subscribe card after `Weekend Reading`, and the archive index closes with the same object.
The reader's question is the same in both places: when does the next issue arrive, and what
URL goes into an RSS reader?

Explore carried the card until 2026-09-04 and no longer does. It is a browse index rather
than something a reader finishes, so the card was closing a page nobody reaches the end of,
and the offer already meets that reader in the header and the footer.

The public `Keep Exploring` closer was removed on 2026-09-01. The archive and catalogue
remain available through the header and footer, but the issue page no longer repeats them
as a large final browse module. The finish should now be simpler: read the issue, read the
supporting links, then subscribe if the cadence is useful.

The card renders as a standalone section with its own `h2`, rather than as a subordinate
block inside another closer. It keeps the layout, copy, copy-to-clipboard control and
interaction states the card has always had, so there is one maintained subscription pattern
across the site. The closing interval belongs to the shared issue section padding and footer spacing.
The old extra subscribe padding never won the cascade and was removed. The component and its `explore-subscribe-card` class
still carry the name of the page the markup started on; the name is history, not a location.

The Source Notes section remains retired from the public page. `sourceNotes` still belongs
in issue frontmatter as the editorial audit trail, but nothing renders it.

### Not Found

Every route that does not exist renders `src/pages/404.astro` on the same page shell as the
rest of the site: the page title `Page not found`, its dek, then one bordered recovery panel
spanning the full page shell. It carries no eyebrow. The diagnosis is the title, under The
One Page Title Rule, because until 2026-09-09 the fact sat in a 12px eyebrow above a 40px
line of voice and a dek that restated the voice a third time, leaving the smallest type on
the page carrying the only thing a lost reader came for. The generated social card states
the same fact under a `404` eyebrow, since a card seen away from the site cannot say "the
links below". The panel reuses the Explore mega card's container,
spacing, two-column discovery grid and Phosphor icon tiles. Its four recovery titles use the
23px/28px Card Title role rather than the Explore taxonomy name's private treatment. Its four destinations
are Search, Explore, Archive, then About. The tile itself does not get a row hover wash; only
the title and icon respond, exactly like the Explore discovery links.

It exists because the archive is meant to be permanent while the tag routes are not. Five
tags were retired and redirected in a single week against a hand-maintained list in
`netlify.toml`, and any rule that gets missed used to land a reader on the host's own grey
error page: no brand, no navigation, no way back, on a property whose whole asset is trust.
A dead link now stays inside the publication.

### Search Surface Type

The search modal, the mobile nav search and the RSS dialog run on their own named type tokens
rather than the page scale: `--type-mobile-nav-action`, `--type-search-input`,
`--type-search-result-title`, `--type-search-result-meta`, `--type-rss-title`, and mobile
overrides for the result and RSS titles. Their seven values live together at the top of
`src/styles/search.css` and retain the reviewed sizes exactly.

They are deliberate because that surface is not the page. It opens over everything, it is
read at arm's length in a hurry, and its input is the reference the directory filter bar
now matches for height. Snapping them back onto the page scale would change how the modal
and the dialog look in order to satisfy a detector advisory, which is the wrong way round.
The mobile search input's explicit 16px is load-bearing for a different reason: anything
smaller makes iOS Safari zoom the page when the field takes focus.

The tokens exist so the mechanical detector can distinguish this documented overlay system
from accidental literals. A new `design-system-font-size` advisory in `search.css` is now a
real signal rather than part of a standing count.

### Social Cards

**The Borrowed Type Rule.** A social card is the only surface that cannot use the site's own
typeface. Iowan Old Style is a macOS system font with no file to embed, so a build-time
renderer has nothing to load. Vollkorn stands in: it is the closest embeddable face measured
against Iowan on the two things that decide whether a line breaks the same way, x-height over
cap at +0.010 and the width of `Hamburgefonstiv` within 0.1% at 100px, and unlike the Charter
derivatives it ships the 500 and 600 weights this scale uses. Inter stands in for
`-apple-system`. Both are SIL OFL 1.1 and carry the licence in their package, which is the
standing condition for any font entering this repository: the Philippine files were deleted in
September 2026 for arriving without one. Nothing else on the site may substitute a typeface.

Cards are 1200x630, drawn by `src/data/og-card.ts` and generated at build time by
`src/pages/og/[slug].png.ts`, one for every URL in the sitemap: each issue, each app, each
category, collection and tag, plus the homepage, About, Explore, Archive and the 404. There
is no shared fallback image any more. `harbor-hero-clean.webp`, a 1200x800 photograph that
all 175 pages pointed at, was deleted on 2026-09-03: it had stopped being the homepage hero
at the redesign and was the wrong shape for a social card, so a scraper cropped roughly 85px
off the top and bottom of it. The layout's default is a generated card like any other. They are generated rather than authored so a Friday issue arrives
with its own card and no separate asset step to forget. The composition is the page's own
opening, in the page's own tokens: the buoy and wordmark, the eyebrow, the title, the buoy's
wave in Beacon Blue, then the dek at the house measure over a hairline footer. The mark
geometry comes from `src/data/mark.ts`, so a card and the site's header cannot drift.

There is one renderer and no second way to make a card. A card is never hand-authored, a
page never points `socialImage` at a one-off asset, and a surface with no card of its own
keeps the shared brand image rather than getting a bespoke one. That is the whole
consistency mechanism: not a template anyone follows, but a single function nobody
bypasses.

**A lane card puts its count in the eyebrow.** A category, collection, tag, Explore or the
Archive says what kind of page it is and how many things are on it, above its own name and
dek: `Category · 33 apps`, `Archive · 8 issues`. The count is the one fact the title cannot
give a reader deciding whether to open the link, and it is the same information scent the
archive critique asked for on the page itself. The titles and deks come from
`src/data/lanes.ts`, which the lane pages themselves also read, so a card cannot name a lane
something other than its own heading.

**An app card is the detail page's identity block:** the icon on its plate, the name, what
the app does, then who it is for. It carries no wave rule, because the icon is already the
anchor and the Best For eyebrow already divides; a third device would be decoration on a
card that has to read at thumbnail size. The mark is drawn at 112px rather than the ~160 the
canvas would take, because app icons top out at 128px source and upscaling them would undo
the payload work that put them there for a blurrier result. An icon-less app falls back to
its first category's Phosphor mark on the same stable colour its cards use, read out of the
`@phosphor-icons/core` package at build time rather than copied into this repository.

**Titles are never truncated; the type gives way instead.** A longer title steps down the
scale and takes a shorter dek with it. Deks may be trimmed at a word boundary, because a dek
is a standfirst and reads whole either way; a title is the editorial line itself.

## Do's and Don'ts

### Do:
- **Do** keep the fog-grey field, white paper, deep-sea text, and blue accent in a tight relationship.
- **Do** assign prose, chip labels and metadata through `--body-text`, `--chip-text` and `--muted` by meaning rather than by page.
- **Do** reuse the shared page shell so archive, tag, collection, about, and app pages line up.
- **Do** keep shadows soft and ambient.
- **Do** let serif headlines carry the editorial voice while system sans handles utility.
- **Do** keep the defining tag or collection locked when it is the page’s own context.
- **Do** keep the uppercase eyebrow where each level carries what the other cannot: the issue section's rubric over its title, current or archived over the issue number, and the app detail rail's labels. General design guidance treats a kicker above a heading as filler; on those it is load-bearing house style and a deliberate, standing exception. **Do** drop the second level where it only restates the first, and give a single heading `.section-heading` and `.section-title` rather than half a lockup. See The Two Level Rule.

### Don't:
- **Don't** introduce loud secondary colors just to add energy.
- **Don't** reintroduce warm sand or cream into the light theme; the day palette is white and Deep-Sea-tinted grey.
- **Don't** replace the soft shadow system with hard offsets or heavy glow.
- **Don't** use neutral gray on colored surfaces; derive secondary ink from the surface hue and give each reading role one semantic token.
- **Don't** make chips, filters, or buttons feel like separate UI worlds.
- **Don't** let the brand wordmark typography spread into body copy.
- **Don't** add a font to this repository without its licence file. See The Borrowed Type Rule.
- **Don't** use em dashes or en dashes in public editorial copy.
- **Don't** let the Editor's Pick accent leave that one card, or reach a link, control or state. It is light, not a second accent.
- **Don't** hand-write an `iconAccent`. Generate it so every pick lands in the same lightness and chroma band.
- **Don't** let taxonomy outrank identity. On any page, an app's categories and tags are quieter than its name, its dek and what it is best for.
