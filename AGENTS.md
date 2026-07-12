# Agent Instructions

This repository contains the **macOS App Digest** website. Before creating, editing, publishing or regenerating any page, read and follow [`docs/STYLE_GUIDE.md`](docs/STYLE_GUIDE.md).

## Source of truth

- `docs/STYLE_GUIDE.md` defines the visual system, page structure, responsive behavior, interaction rules and content conventions.
- Existing published pages are useful implementation references, but the style guide takes precedence when older markup conflicts with current standards.
- Shared behavior and visual overrides currently live in `assets/js/theme.js`; shared structural styles live in `assets/css/styles.css`.

## Required workflow

1. Read `docs/STYLE_GUIDE.md` before making changes.
2. Inspect the complete current contents of every shared file before editing it.
3. Never replace a shared file with a partial excerpt. Preserve unrelated code and all existing functionality.
4. Apply structural changes consistently to:
   - the homepage
   - permanent issue pages
   - tag pages
   - the archive page, when applicable
5. Preserve light mode, dark mode, mobile behavior, keyboard access and reduced-motion behavior.
6. After any change to `assets/js/theme.js`, verify that the file is complete and that all of these still work:
   - light/dark theme switching
   - Lucide Apple header icon
   - Lucide sun/moon toggle icons
   - linked app and article titles
   - removed redundant Homepage and Read article links
   - desktop card hover animation
   - mobile card in-view animation
   - tag styling and hover transitions
7. Do not introduce emoji as interface icons. Use inline Lucide SVGs for interface iconography.
8. Do not add visual clutter or icons to every card. The site should remain editorial and restrained.
9. Keep asset version query strings current when shared CSS or JavaScript changes so browsers do not retain stale files.
10. Before publishing a new issue, complete the checklist in `docs/STYLE_GUIDE.md`.

## Non-negotiable implementation rules

- App titles link directly to the app homepage.
- Do not show a separate `Homepage` link beneath app cards.
- Weekend Reading titles link directly to the article.
- Do not show a separate `Read article` link beneath reading cards.
- Tag pills remain quiet, grayscale metadata rather than primary calls to action.
- Dark-mode card emphasis must remain grayscale, not blue.
- Card rows on desktop must align titles, tags, sources and lower content consistently.
- Mobile cards may react as they pass through the center of the viewport.
- The site header uses a Lucide Apple icon. Large page headings use text only, with no apple emoji.
- The theme toggle is icon-only with no pill, no text and no emoji.

## Change safety

When modifying a shared file:

- fetch the entire current file
- edit the full file
- preserve all existing sections
- write the full resulting file once
- fetch it again after the write and confirm it is not truncated

If a requested change conflicts with the style guide, update the style guide in the same commit or clearly explain the conflict before proceeding.
