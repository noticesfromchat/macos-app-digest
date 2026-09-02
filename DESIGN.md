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
- **Control Label** (700, .84rem): the text on something you press — `.button`, and the Filter and Sort triggers. It is the only small role that is neither tracked nor uppercase, because a control is read as a word and not as a heading.
- **Metadata** (600, .84rem, 1.45): counts, sources, and secondary operational information. The directory's live count is the tracked variant of this role, at 700 with .04em and muted, sitting one step *below* the controls beside it so a readout is not mistaken for something to press.

**The two small roles use the opposite tokens to their names.** Control Label is delivered by `--type-meta` and the count's metadata variant by `--type-label`. This is backwards and it is deliberate for now: the tokens are plain sizes used across dozens of rules, and renaming them to match the roles is a site-wide pass, not a footnote to this one. Read the role from the entry above, never from the token name, and do not "correct" a measured page back toward the token that names it.
- **Brand** (500, fluid 1.35-2rem): the App Waypoint wordmark set in the same editorial serif as the headline system.

**The Even Rule Rule.** A horizontal rule carries the same space above it as below it. That space is `--section-space` — clamp(26px, 3.8vw, 40px), one value for the whole site — and it belongs to whatever sits on either side, which means a page's opening block pays the bottom half before the first divider. A rule that hugs the content above it is the tell that a block forgot to close on the rhythm. The rhythm is close rather than airy on purpose: the pages are dense and the rules are hairlines, so a wide gap reads as a gap rather than as a division. The only blocks that sit tighter are the ones that follow a drawn divider instead of a rule, where there is no rule to be symmetric with.

**The Eyebrow Binding Rule.** An eyebrow names the block beneath it, so the gap that binds the two is one value for the whole site: `--eyebrow-gap`, 11px. Every eyebrow on every surface uses it, whether it comes from the `.eyebrow` margin in normal flow or from a grid `gap` where the group is laid out as a grid. A surface that sets its own number drifts out of the pair, and that is exactly how the app-detail rail ended up with 14px inside its groups while the rest of the site sat at 11px, and 40px before one eyebrow against 22px before the next.

The rhythm is two values, not one. **11px binds an eyebrow to its content; 24px separates one labelled group from the next.** That contrast is what makes a rail read as three groups rather than one list, and it is why the separation never needs a rule drawn between the groups. Note that 11px sits between the `sm` and `md` steps of the spacing scale: it is the established value across every existing surface, held in a token rather than repeated, and worth revisiting only as a deliberate site-wide pass.

**The One Measure Rule.** All prose runs to `--measure` (52ch) and nothing else. Because `ch` scales with the element's own font size, the same token holds roughly seventy characters at the dek's 17.9px, at body's 16px, and at the footnote's 13.4px — a pixel column cannot do that, it just widens as the type shrinks. Every prose surface is on it: deks, About, footnotes, best-for, panel copy, feature-card copy, and category descriptions. A fixed-pixel `max-width` on running text is a bug.

**The One Page Title Rule.** Every page opens the same way: the breadcrumb trail at the shell's `--page-start-space`, the title in Headline at `--type-page-title` 11px beneath it, and the dek 15px beneath that at `--type-dek`. The title carries no margin of its own; the trail owns the gap, at `--eyebrow-gap`, because it names the page under it exactly as an eyebrow does. Until 2026-09-02 the title itself sat hard against `--page-start-space` and nothing preceded it. That changed when the trail arrived, and it changed on every page at once rather than on the deep ones only, so the opening stayed one shape. App detail pages are not an exception — the app name is a page title, not a bigger thing. A page that wants more presence gets it from its composition below the fold, never from a private type scale.

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

**The buoy stays the one authored moment.** The mark on the content divider flashes once as the reader passes it. That is deliberate, and it is the motion on the page with a voice, alongside the light on the Editor's Pick card. The old archive timeline in the removed `Keep Exploring` closer retired with that section on 2026-09-01, leaving the issue page calmer at the finish.

**The Swell Rule.** The water moves, and it is the only thing on the page that moves without wanting to be noticed. Both wave bands, the hero's waterline and the content divider's, breathe: the crests hold their positions while the height of the water and the weight of its second harmonic settle and return, on periods of 23 and 31 seconds that do not divide into one another, so the band never repeats a state the eye can catch.

Each line is four components, and the two carrying most of its height travel in **opposite directions at almost the same wavelength**. They beat against each other, so crests build and dissolve where they are instead of marching across. That is the part that reads as water.

Two earlier versions got this wrong in opposite ways, and both were measured rather than argued about. Amplitude breathing alone moved a crest 5px over 23 seconds, roughly a clock's minute hand: running, and invisible. A single travelling wave was legible but 83% of its motion was pure translation, so it read as a picture being dragged sideways. The counter-travelling pair puts 70% of the motion into shape change and cuts the residual drift from 25px every two seconds to 10.

The pair is deliberately unequal, 0.46 against 0.32, because an even pair cancels to a flat line at the bottom of each beat. Unequal, the water calms without going still, and since each line carries its own phase offset the calm never crosses the whole band at once.

Two things keep it ambient rather than a fourth animation competing for attention. **It is slow**: a crest takes over two minutes to cross the band, so the eye reads it as atmosphere and never tracks it. **The still painting is the high-water mark**, not the midpoint; the swell only ever calms below it. That is not an aesthetic choice but a structural one, because the band was already tuned so the topmost crest clears its canvas by 7px, and a swing either side of the still level spent that margin and flattened the crests against the edge. **Each band is drawn only while it is on screen**, the loop stops when the tab is hidden, and reduced motion leaves the water painted once and still. Component weights are kept small because four waves can align where two could not: at their first values the band cut straight through the top of its canvas at the narrowest hero, where `--sea-h` clamps to 78px. Any change to a weight has to be checked against every height that clamp can produce, not just the widest.

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
- **Primary:** outlined, not filled. A 1px blue border and a blue label over the page, 44px minimum height, 23px horizontal padding, and a small icon gap. A button is as wide as its label — never a fixed box padded out to a round number. It carried a blue fill with white text until the dark palette exposed why that could not hold: Buoy Blue is tuned to be legible as ink *on* the dark surface, so inverting it into a ground put white text at 2.62:1, well under AA, and made the button the brightest object on the page. As a label the same blue clears AA in both themes (5.17:1 light, 7.54:1 dark).
- **Hover / Focus:** the blue deepens on hover, and focus is handled with a clear accessible outline rather than a visual stunt.

**Text fields are the exception to the focus outline.** The search modal's input and the
directory's filter field both take `outline: 0` and no ring. A caret is already a focus
indicator, and it is the one a person typing actually reads; an accent border around a
field they have just clicked into announces something they know and draws the eye away
from the text they are entering. The exception covers text inputs only. Every control
without a caret, which is every button, chip, link and checkbox on the site, keeps its
outline, because for those colour alone is not a focus indicator.
- **Secondary:** transparent fill, ink text, and a borderless or low-border utility presence.
- **Icon Buttons:** the header search and theme controls are 44px circles on desktop, mobile and coarse-pointer devices.

**The Target Floor Rule.** Anything a reader taps carries a minimum target: 24px, and the 44px the control system already gives every pill on a coarse pointer. This is not only for pills. Footer navigation, the explore section links and the feature card's outbound link were each the height of their own text, 16 to 21px, because a bare link has no box unless it is given one.

An icon link too small to grow gets its hit area expanded around it instead of being padded out, so the line it sits in is undisturbed. The Editor's Pick mark beside an app name works that way, and stops at 24px rather than 44px because a larger area would start taking taps meant for the title. A link inside a sentence is exempt and stays inline; the RSS link in the subscribe copy is the one that qualifies.

**The Two Control Heights.** Every pill control is built the same way — inline-flex, a `min-height`, horizontal padding, no vertical padding — and stands at one of two heights: **44px** for a primary action and **38px** for a secondary one, rising to 44px on coarse pointers. Rank comes from the height and from whether the border and label carry the accent or the neutral line, never from a fill and never from a different construction. Nothing on the site is a filled control. A control that sets vertical padding instead of a min-height will drift out of the pair the moment its type changes.

### Collection Badges
The collection badge on an app detail page is a link to a curated collection, and it is the rarest fact on that page: six of a hundred apps carry one. It is an honour marker, not a chip. It was a 38px outlined pill sitting above the primary button, where it read as a second, weaker control; it now opens the detail rail.
- **Style:** the collection's mark beside its name in ink at Metadata weight 700. Built exactly like a category row: no container, no ring, no fill, and the glyph simply inherits the row's colour and turns blue with it on hover. A ring around the mark made the mark the loud thing rather than the honour.
- **Rank:** first item in the rail, above Categories and Tags. Rank comes from position, from the label sitting in ink at weight 700 where a category label sits muted at 600, and from a 44px row against the category rows' 34px. Never from a colour of its own.
- **Named, like its neighbours.** The group carries a `Collections` eyebrow and 18px of clear space beneath it. It was the only unlabelled group in the rail, which is why it read as orphaned: every other group on the site is named by an eyebrow, and this one had opted out of the house's own strongest device. Setting the names in the display serif at Title was tried for the same reason and rejected; the rail keeps one voice.
- **Marks:** 19px, the same as a category mark. Lucide scales its stroke with the glyph, so an icon set larger here would render a heavier stroke and put one icon family at two weights in a single column.
- **Separation:** space alone divides it from the taxonomy below. A rule there reads as a container seam and competes with the thing it is meant to set apart.
- **State:** hover tints the label blue and the mark follows it. Focus adds the accent outline, because colour alone is not a focus indicator.

### Tag Chips
Tag chips are compact chips rather than buttons. They read as metadata first.
- **Style:** soft Shell Quiet fill, muted text, 999px radius, lowercase labels. The chip reads as a label with a soft ground behind it, never as a button.
- **State:** hover and focus tint the chip toward blue without making it feel selected. The label takes the accent's *hover* value, not the accent itself, so the text still clears 4.5:1 against the tinted pill (5.50:1) — the plain accent lands at 3.89:1 there and is not legible enough.

### Cards
Cards are the primary container language for apps, readings, and archive entries. Apparatus and secondary matter are set under a hairline instead, so a card always means a thing worth looking at rather than a thing worth reading past. An app card carries three regions and nothing else: the summary, the best-for line, and the tags. Its single app destination is the generated detail page; the title link and stretched pointer overlay go to the same internal URL, while the official homepage lives on the detail page. It used to end with a source credit; that was provenance for the editor rather than information for the reader, and removing it took a whole region off every card.
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

Three things are deliberately outside it. The app-detail rail's category rows are links in a list rather than cards, so they answer the pointer with the accent over 180ms and take no lift; they were bordered cards until the rail replaced them. Cards that are containers rather than destinations — the explore utility and subscribe cards, which hold their own links and controls — stay flat, because a lift would promise a click the card does not accept.

### Explore Directory

Explore carries the catalogue itself, not a sample of it: the taxonomy card, then
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

- **Order:** taxonomy, then catalogue. The card teaches the six lanes; the directory is
  the thing itself. The subscribe card closes the page rather than interrupting it at a
  third of the way down, where it used to sit between two app shelves.
- **The count is stated, once.** The directory's filter bar carries it and keeps it live as
  filters narrow. The hero carried it too until 2026-09-02, which meant the page opened by
  announcing a number and then restated it a screen later; the dek now describes what the
  page holds and the count belongs to the control that changes it. The page previously
  never said how many apps existed at all.
- **The directory controls are a row, not a grid.** The live count leads and Search apps,
  Filter and Sort sit at the end, pushed there by the count's own auto right margin. It was a
  six-track grid until 2026-09-02, with the count spanning tracks 1-2, the menus at 5 and
  6, and tracks 3 and 4 existing only as spacers. Six tracks for three items reads as a
  layout right up until a fourth control arrives, and then it reads as a puzzle.
  Text query is always visible because exact-app lookup should not require opening Filter
  experimentally. Collections and Tags remain inside Filter. Filter and Sort keep stable
  labels, and only collection and tag selections contribute to the Filter count badge. When
  the card grid collapses, count and search each take a full row while Filter and Sort share
  the row beneath them, preserving DOM and focus order. Each visible control stays flat with
  a border and no lift.
- **Mobile taxonomy keeps the lane, not the lecture.** Below 680px, Explore swaps each full
  category description for its approved shorter line and removes the desktop row floor. The
  full descriptions remain on larger screens and category pages. Categories, Collections and
  Popular tags explain their roles in muted copy directly below each heading, in normal flow,
  so help never covers the first link or depends on hover.
- **Directory state is shareable.** Query, optional collections, optional tags and a
  non-default sort are written to the query string and restored on load. Typing uses
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
  in front of it reads as two dots rather than as a mark. The site already carries its nautical world in the buoy lockup and the wave
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
The header is sticky, translucent, and restrained. The brand wordmark uses the same editorial serif as the headline system, while the icon controls stay compact and monochrome until hover or focus gives them blue.
- **Desktop:** brand on the left, then Explore Apps, Archive, About, an icon-only Lucide Search control and the icon-only theme toggle on the right.
- **Mobile:** the header keeps the brand and theme toggle visible, then moves Search, Explore Apps, Archive, About and Subscribe into the navigation dialog.
- **Hover / Active:** navigation links shift to the accent on hover, focus and current-page state. Icon controls stay circular and borderless, with the same accent response.
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

### Issue Subscribe Card

Every issue page, including the homepage and archived issues, closes with the shared RSS
subscribe card after `Weekend Reading`. It is the same object used on Explore because the
reader's question is the same in both places: when does the next issue arrive, and what URL
goes into an RSS reader?

The public `Keep Exploring` closer was removed on 2026-09-01. The archive and catalogue
remain available through the header and footer, but the issue page no longer repeats them
as a large final browse module. The finish should now be simpler: read the issue, read the
supporting links, then subscribe if the cadence is useful.

The card renders as a standalone section with its own `h2`, rather than as a subordinate
block inside another closer. It keeps the Explore card's layout, copy, copy-to-clipboard
control and interaction states so there is one maintained subscription pattern across the
site. The issue placement only adds extra bottom padding so the final card has a deliberate
landing before the footer.

The Source Notes section remains retired from the public page. `sourceNotes` still belongs
in issue frontmatter as the editorial audit trail, but nothing renders it.

### Not Found

Every route that does not exist renders `src/pages/404.astro` on the same page shell as the
rest of the site: the `Page Not Found` eyebrow, page title, dek, then one bordered recovery
panel spanning the full page shell. The panel reuses the Explore mega card's container,
spacing, two-column discovery grid, typography and Lucide icon tiles. Its four destinations
are Search, Explore, Archive, then About. The tile itself does not get a row hover wash; only
the title and icon respond, exactly like the Explore discovery links.

It exists because the archive is meant to be permanent while the tag routes are not. Five
tags were retired and redirected in a single week against a hand-maintained list in
`netlify.toml`, and any rule that gets missed used to land a reader on the host's own grey
error page: no brand, no navigation, no way back, on a property whose whole asset is trust.
A dead link now stays inside the publication.

### Search Surface Type

The search modal, the mobile nav search and the RSS dialog run on their own type sizes
rather than the page scale: the nav search at 1.05rem, the search input at
`clamp(1.1rem, 2vw, 1.45rem)`, the two search-result treatments at 1.18rem and .9rem, and
the RSS dialog heading at its own clamp on each of two breakpoints. Seven values in
`src/styles/search.css`, all deliberate.

They are deliberate because that surface is not the page. It opens over everything, it is
read at arm's length in a hurry, and its input is the reference the directory filter bar
now matches for height. Snapping them back onto the page scale would change how the modal
and the dialog look in order to satisfy a detector advisory, which is the wrong way round.
The mobile search input's explicit 16px is load-bearing for a different reason: anything
smaller makes iOS Safari zoom the page when the field takes focus.

The mechanical detector reports these seven as `design-system-font-size` advisories on
every run. That is expected. Treat a change in the count as the signal, not the count.

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
