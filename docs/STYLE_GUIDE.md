# macOS App Digest Style & Brand Guide

This document is the design and publishing source of truth for the macOS App Digest website. It should be read before creating a new issue or changing any page, component or shared asset.

## 1. Brand direction

The site should feel like a small, premium editorial publication for experienced Mac users.

### Core qualities

- Mac-native
- restrained
- editorial rather than dashboard-like
- highly legible
- technically polished
- calm, useful and slightly playful

### Avoid

- excessive decoration
- emoji as interface controls
- saturated color used for every interactive element
- icons on every card or navigation item
- heavy gradients
- oversized shadows
- inconsistent card heights or misaligned metadata
- language that addresses the reader as “your” unless necessary

Blue is reserved primarily for meaningful links and selective accents. Surfaces, metadata, tags and dark-mode elevation should remain mostly neutral.

## 2. Page system

The site includes four page types:

1. Homepage / latest issue
2. Permanent issue pages
3. Tag landing pages
4. Archive page

All pages share the same header, footer, theme behavior, typography and visual vocabulary.

### Shared content width

Primary page content uses:

```css
width: min(1120px, calc(100% - 40px));
margin: 0 auto;
```

The 20px minimum side margin must be preserved on narrow screens.

## 3. Color palette

The current implementation uses CSS custom properties. Do not hard-code replacements throughout individual pages.

### Light mode

| Token | Value | Purpose |
|---|---:|---|
| `--bg` | `#f5f5f7` | Page background |
| `--surface` | `#ffffff` | Cards and controls |
| `--surface-strong` | `#fbfbfd` | Raised secondary surface |
| `--text` | `#1d1d1f` | Primary text |
| `--muted` | `#6e6e73` | Supporting text |
| `--line` | `#d2d2d7` | Borders and separators |
| `--accent` | `#0066cc` | Links and selective emphasis |
| `--accent-soft` | `#e8f1ff` | Informational note surface |
| `--note-text` | `#2f4f7f` | Informational note text |
| `--header-bg` | `rgba(245, 245, 247, 0.86)` | Sticky translucent header |

### Dark mode

The dark theme is charcoal, not black.

| Token | Value | Purpose |
|---|---:|---|
| `--bg` | `#242528` | Charcoal page background |
| `--surface` | `#2e3034` | Card background |
| `--surface-strong` | `#373a3f` | Raised secondary surface |
| `--text` | inherited light text | Primary text |
| `--muted` | `#b8bbc3` | Supporting text |
| `--line` | `#4a4e56` | Borders and separators |
| `--accent` | existing blue accent | Links only |
| `--accent-soft` | `#23364d` | Informational note surface |
| `--header-bg` | `rgba(36, 37, 40, 0.9)` | Sticky translucent header |

### Dark-mode interaction rule

Card elevation must remain grayscale. Never mix `--accent` into dark-mode card borders.

Use:

```css
border-color: #6b6f76;
```

for highlighted dark-mode desktop hover and mobile in-view states.

## 4. Typography

Use the system font stack so the site feels native on Apple platforms and remains fast.

```css
--sans: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif;
--display: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif;
```

### Hierarchy

- Large hero title: display stack, very bold, tight line height
- Section titles: display stack, bold
- Card titles: display stack, approximately `1.35rem`
- Body copy: sans stack, normal weight
- Labels and eyebrow text: uppercase, compact, increased tracking
- Metadata and sources: smaller and muted

Do not introduce custom webfonts unless explicitly approved.

## 5. Header and navigation

The header is sticky, translucent and blurred.

### Brand lockup

- Use the inline Lucide `Apple` SVG before `macOS App Digest`.
- Do not use the red apple emoji.
- The Apple SVG inherits `currentColor`.
- The brand links to the homepage.
- Keep the icon visually aligned with the brand text.

### Page headings

Large page headings use text only:

```text
macOS App Digest
macOS App Digest Archive
```

Do not prefix them with an apple emoji or interface icon.

### Primary navigation

Keep navigation minimal. Current items:

- Archive
- Theme toggle

### Theme toggle

The theme toggle is icon-only:

- Light mode displays the Lucide `Moon` SVG because clicking it switches to dark mode.
- Dark mode displays the Lucide `Sun` SVG because clicking it switches to light mode.
- No text label is visible.
- No emoji.
- No pill, border or background.
- Use an invisible `40px × 40px` hit area.
- SVG size: approximately `20px`.
- Preserve an accessible `aria-label` and `title`.
- Preserve a visible keyboard focus outline.

## 6. Hero and section spacing

### Hero

The hero should feel spacious but not wasteful.

Desktop homepage hero top padding is intentionally reduced relative to the original oversized layout. Avoid introducing excessive blank space above titles.

### Archive page

The archive page top padding is fixed near `40px`, not the large responsive hero padding.

### Sections

Use clear horizontal separators and consistent vertical rhythm. Section headings should sit close enough to the cards that the relationship is obvious.

## 7. App cards

App cards are the primary repeated component.

### Content order

Each app card contains:

1. Linked app title
2. One-sentence description
3. `Best for:` sentence
4. Tag pills
5. Source line

The app title itself links directly to the official app homepage.

Do not add a separate `Homepage` link at the bottom.

### Desktop alignment

Cards in the same row must align visually.

- Titles and descriptions begin at the same top position.
- `Best for:` blocks reserve consistent vertical space.
- Tag areas reserve enough fixed space for up to two rows.
- Source lines begin at the same vertical position.
- Wrapped source text should not push adjacent cards out of alignment.

Current shared layout targets include:

```css
.app-card:has(.best-for) .tag-list {
  height: 86px;
  min-height: 86px;
}

.app-card:has(.best-for) .source-line {
  min-height: 52px;
}
```

Use these as implementation references. Adjust only when the entire card system is reviewed together.

### Mobile

Remove artificial fixed heights on mobile. Cards should expand naturally with content.

## 8. Weekend Reading cards

Weekend Reading cards use the same visual family as app cards but have different content.

### Content order

1. Linked article title
2. Publication/source
3. Description

The title itself links to the article.

Do not add a separate `Read article` link.

### Desktop alignment

Cards in a row should align title, source and description blocks. Current reference minimums are:

```css
.reading-card h3 { min-height: 108px; }
.reading-card .reading-source { min-height: 30px; }
.reading-card .reading-description { min-height: 108px; }
```

## 9. Tag pills

Tags are metadata, not calls to action.

### Shape

- Keep the pill shape.
- Compact padding.
- No strong visible border.
- Medium-light type weight.
- Slight letter spacing is acceptable.

### Light mode

```css
background: #f1f2f4;
color: #5a5a5e;
```

Hover/focus:

```css
background: #e2e4e7;
color: #3f4146;
```

### Dark mode

```css
background: #3a3d43;
color: #c6c9ce;
```

Hover/focus:

```css
background: #4a4e55;
color: #f0f1f2;
```

### Behavior

- Smooth `180ms` color/background transition.
- Do not use blue text or a blue fill.
- Do not make tags more visually prominent than titles.
- Tag landing page headings use normal capitalization even though tag labels themselves remain lowercase.

## 10. Card interaction and motion

### Desktop hover

App cards, feature cards and archive cards receive a subtle lift:

```css
transform: translateY(-5px) rotate(-0.25deg);
```

Also increase the shadow and gently brighten the border.

In dark mode the border must use neutral gray `#6b6f76`, never blue.

### Mobile scroll reaction

Touch devices do not have hover. App cards may receive an `is-in-view` state when they pass through the middle portion of the viewport.

Current treatment:

```css
transform: translateY(-3px) scale(1.012);
```

The effect should be subtle and should clear as the card leaves the active viewport zone.

### Reduced motion

Always honor `prefers-reduced-motion: reduce`:

- disable transitions
- disable card transforms
- preserve all content and functionality

## 11. Links

### App titles

- Link directly to official homepages.
- Default appearance should resemble the heading, not a traditional underlined link.
- Hover/focus may fade to the accent blue.

### Article titles

- Link directly to the article.
- Use the same smooth title transition.

### Other links

Use blue selectively for links where link identity needs to remain obvious. Do not turn card borders, tags or general chrome blue.

## 12. Icons

Use inline Lucide SVGs for interface icons.

Approved current icons:

- `Apple` for the site brand
- `Moon` for switching from light to dark
- `Sun` for switching from dark to light

### Icon rules

- Use `fill="none"`, `stroke="currentColor"` and rounded Lucide stroke settings.
- Decorative SVGs use `aria-hidden="true"` and `focusable="false"`.
- Interactive controls receive an accessible label on the parent element.
- Do not load an entire icon library for only a few icons.
- Do not use emoji as interface icons.
- Use additional icons sparingly and only when they improve comprehension.

## 13. Archive page

- Heading: `macOS App Digest Archive`
- No apple emoji in the heading.
- Reduced top whitespace.
- Archive cards use the same restrained hover elevation as other cards.
- Dark-mode archive hover borders remain grayscale.

## 14. Tag landing pages

- Tag label in the page heading uses normal capitalization.
- Include a concise one-sentence page descriptor.
- App listings match issue-page app listings exactly.
- App title links to the app homepage.
- Do not show irrelevant `Read issue` or `Homepage` CTAs.
- Preserve card alignment and tag styling.

## 15. Responsive behavior

Breakpoint reference: approximately `820px`.

Below the breakpoint:

- card grids become one column
- hero titles may wrap
- fixed desktop content heights are removed
- footer may stack
- all tap targets remain usable
- no horizontal scrolling

Above the breakpoint:

- three-column card grids may be used
- card content alignment rules apply
- headings may remain on one line when space permits

## 16. Accessibility

Every change must preserve:

- semantic headings
- meaningful link text
- keyboard navigation
- visible focus states
- sufficient contrast in both themes
- `aria-label` for icon-only controls
- `aria-hidden` for decorative icons
- reduced-motion support
- readable text without relying on color alone

Do not remove visible focus indication merely for aesthetic reasons.

## 17. Content style

### Voice

- concise
- informed
- useful to experienced Mac users
- editorial rather than promotional
- specific about what an app does and who it is for

### App descriptions

- one sentence
- explain the job the app performs
- avoid empty marketing language

### Best-for lines

- begin with bold `Best for:`
- describe a recognizable user or workflow
- avoid generic wording such as “anyone who wants to be productive”

### Sources

- cite the discovery source and official homepage where relevant
- source text is metadata and remains visually subdued

### Wording preference

Avoid unnecessary use of “your” throughout the site.

## 18. Shared-file integrity

`assets/js/theme.js` is currently responsible for multiple design-system behaviors. It must never be replaced from a partial fetch or excerpt.

Before updating it:

1. Fetch the entire file.
2. Preserve every existing feature.
3. Write the entire updated file.
4. Fetch it again and verify the ending is present.
5. Confirm the theme toggle works.

The same principle applies to `assets/css/styles.css`.

## 19. Asset cache versioning

When shared CSS or JavaScript changes, update the `?v=` query string in page references when practical so GitHub Pages and mobile browsers do not continue serving stale assets.

New pages should use the latest shared asset versions already used by the newest published page.

## 20. New issue publishing checklist

Before publishing a new digest, verify all of the following.

### Structure

- [ ] Homepage displays the newest issue.
- [ ] A permanent issue page exists under `issues/`.
- [ ] Archive page includes the new issue.
- [ ] Relevant tag pages include the new apps.
- [ ] Tag page descriptions and capitalization remain correct.

### Header and theme

- [ ] Lucide Apple icon appears in the brand lockup.
- [ ] No apple emoji appears in the large heading.
- [ ] Theme toggle is icon-only.
- [ ] Moon appears in light mode.
- [ ] Sun appears in dark mode.
- [ ] Theme preference persists after reload.

### App cards

- [ ] App names link to official homepages.
- [ ] No separate Homepage links appear.
- [ ] Titles, tags and source lines align on desktop.
- [ ] Cards expand naturally on mobile.
- [ ] Tags use quiet grayscale pills.
- [ ] Sources are present and subdued.

### Weekend Reading

- [ ] Article titles link directly to articles.
- [ ] No separate Read article links appear.
- [ ] Reading-card content aligns on desktop.

### Interaction

- [ ] Desktop cards lift smoothly on hover.
- [ ] Dark-mode borders remain gray, not blue.
- [ ] Mobile app cards react as they pass through the viewport center.
- [ ] Reduced-motion mode removes transforms and transitions.

### Quality

- [ ] Light mode reviewed visually.
- [ ] Dark mode reviewed visually.
- [ ] Desktop width reviewed.
- [ ] Mobile width reviewed.
- [ ] No shared file was truncated.
- [ ] No stale asset version is referenced.
- [ ] No broken or redundant links remain.

## 21. Updating this guide

When a design decision becomes permanent, update this file in the same change. Conversation history is not the source of truth; this document is.
