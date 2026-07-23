# Agent Instructions

This repository contains the **App Waypoint** website. Before creating, editing, publishing or regenerating any page or issue, read and follow [`docs/STYLE_GUIDE.md`](docs/STYLE_GUIDE.md) and [`docs/ISSUE_TEMPLATE.md`](docs/ISSUE_TEMPLATE.md).

## Source of truth

- `docs/STYLE_GUIDE.md` defines the visual system, content limits, page structure, responsive behavior, interaction rules and publishing conventions.
- `docs/ISSUE_TEMPLATE.md` defines the current app and issue frontmatter, including the optional Editor's Pick structure.
- Astro components, layouts and styles are the implementation source of truth for presentation.
- Markdown files under `src/content/` are the source of truth for editorial content.
- Existing published pages are useful references, but the style guide takes precedence when older markup conflicts with current standards.

## Astro content model

- Apps live in `src/content/apps/*.md`.
- Issues live in `src/content/issues/*.md`.
- Each app should exist once. Issues reference app IDs rather than duplicating app content.
- Homepage, archive, issue pages and tag pages are generated from Astro Content Collections.
- Do not hand-build duplicate HTML pages or app cards.
- Do not put app data back into a shared TypeScript data file unless explicitly approved.

## Required workflow

1. Read `docs/STYLE_GUIDE.md` before making changes.
2. Inspect the relevant component, content schema and current content before editing.
3. Create or update Markdown content rather than copying page markup.
4. Preserve light mode, dark mode, mobile behavior, keyboard access and reduced-motion behavior.
5. Run the Astro build before publishing. A schema or build failure must be fixed rather than bypassed.
6. Review the Netlify deploy preview before merging substantial layout or publishing changes.
7. Before publishing a new issue, complete the checklist in `docs/STYLE_GUIDE.md`.

## User-provided Editor's Pick

When the user explicitly provides an app to feature as the Editor's Pick:

1. Treat that app as the authoritative selection. Do not substitute a different app merely because another candidate seems stronger.
2. Use the issue the user names. If no issue is named, add it to the next issue currently being prepared.
3. Search `src/content/apps/` by app name and homepage before creating anything. Reuse the existing app ID when the app is already present.
4. If the app is new, verify its official homepage or canonical repository and create one standard app file under `src/content/apps/`. Follow the normal description, `bestFor`, tag, source and homepage rules.
5. Add the app to the issue only through the optional `editorsPick` object:

   ```yaml
   editorsPick:
     app: app-id
     reason: A concise 12-45 word editorial explanation of why this app stands out.
   ```

6. Write the reason in App Waypoint's editorial voice. Explain the practical quality, distinctive capability or workflow value that earned the selection; do not repeat the description or use generic marketing praise.
7. Do not also place the Editor's Pick in a regular section. An app may appear only once per issue.
8. If the issue already has an Editor's Pick, replace it only when the user's request clearly calls for replacement; otherwise report the conflict.
9. Run validation and the Astro build. If the app or issue cannot pass the documented requirements, stop and report the specific problem rather than silently choosing another app.

The Editor's Pick is optional and limited to one app per issue. Omit the entire
`editorsPick` block when the user has not supplied a pick and editorial judgment does
not call for one.

## Required editorial limits

These limits protect card alignment and are not optional unless the complete card system is being redesigned.

### App files

- `name`: preferably 2–28 characters; hard maximum 40 characters.
- `description`: one sentence, preferably 90–150 characters; hard maximum 180 characters.
- `bestFor`: one sentence, preferably 85–150 characters; hard maximum 180 characters.
- `tags`: 3–5 concise lowercase tags; hard maximum 6.
- Individual tag: preferably one word; hard maximum 20 characters.
- `source`: preferably 25–80 characters; hard maximum 110 characters.
- `homepage`: official app homepage or canonical project page.

### Issue files

- `dek`: one sentence, preferably 120–220 characters; hard maximum 260 characters.
- Section eyebrow: 1–4 words; hard maximum 30 characters.
- Section title: preferably 4–10 words; hard maximum 70 characters.
- Video title: hard maximum 100 characters.
- Video description: one sentence, preferably 120–220 characters; hard maximum 260 characters.
- Reading title: hard maximum 110 characters.
- Reading description: one sentence, preferably 100–190 characters; hard maximum 220 characters.
- Source note: hard maximum 140 characters.

If text exceeds a preferred range, rewrite it before adjusting CSS. Exceeding a hard maximum requires an explicit exception and visual review.

## Non-negotiable presentation rules

- App titles link directly to official app homepages.
- Do not show a separate `Homepage` link beneath app cards.
- Weekend Reading titles link directly to articles.
- Do not show a separate `Read article` link beneath reading cards.
- Tag pills remain quiet, grayscale metadata rather than primary calls to action.
- Dark-mode card emphasis remains grayscale, not blue.
- Card rows on desktop align titles, tags, sources and lower content consistently.
- Mobile cards expand naturally with content.
- The site header uses the App Waypoint buoy logo. Large page headings use text only, with no emoji.
- The theme toggle is icon-only with no pill, no text and no emoji.
- Do not introduce emoji as interface icons.
- Do not add visual clutter or icons to every card.

## Change safety

When modifying a shared component, layout, stylesheet, schema or documentation file:

- fetch the complete current file
- preserve unrelated behavior
- write the complete resulting file
- verify the file after the write
- run a build and inspect the deploy preview when presentation may change

If a requested change conflicts with the style guide, update the style guide in the same change or explain the conflict before proceeding.
