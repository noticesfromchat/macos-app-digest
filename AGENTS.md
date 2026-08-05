# Agent Instructions

This repository contains the **App Waypoint** website. Start every task by reading
[`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md). Before creating, editing, publishing
or regenerating any page or issue, also read and follow
[`docs/STYLE_GUIDE.md`](docs/STYLE_GUIDE.md),
[`docs/ISSUE_TEMPLATE.md`](docs/ISSUE_TEMPLATE.md) and
[`docs/PUBLISHING.md`](docs/PUBLISHING.md).

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
- App `tags` describe what an app is. Optional `collections` record App Waypoint's
  editorial curation; do not use `editors-picks` as a tag.
- Homepage, archive, issue pages and tag pages are generated from Astro Content Collections.
- Do not hand-build duplicate HTML pages or app cards.
- Do not put app data back into a shared TypeScript data file unless explicitly approved.

## Required workflow

1. Start from the latest `main` and create a short-lived task branch. Never make a
   production change directly on `main`.
2. Read the task-relevant documentation before making changes.
3. Inspect the relevant component, content schema and current content before editing.
4. Create or update Markdown content rather than copying page markup.
5. Preserve light mode, dark mode, mobile behavior, keyboard access and reduced-motion behavior.
6. Run `npm run validate` and `npm run build`. A schema, privacy or build failure must be fixed rather than bypassed.
7. Push the branch and use a pull request for every production change.
8. Review the Netlify Deploy Preview before merging presentation or publishing changes.
9. Merge only after required checks pass and any required human approval is recorded.
10. Before publishing a new issue, complete the checklist in `docs/STYLE_GUIDE.md`.

## Weekly release coordination

Treat Thursday as the release-candidate decision point and Friday as the single
production release point. Follow the complete workflow in
[`docs/PUBLISHING.md`](docs/PUBLISHING.md).

- On Thursday, inspect every open App Waypoint pull request and its Netlify Deploy
  Preview while asking whether the editor has an Editor's Pick for the upcoming
  issue.
- If more than one preview exists, ask the editor which preview should accompany
  Friday's issue even when one preview already appears approved. Report the purpose,
  approval state and Netlify status of each preview and recommend a path forward.
- Do not combine, close, merge or otherwise resolve competing previews without the
  editor's direction.
- When exactly one approved release-candidate preview exists, the Friday automation
  may use it without another approval request.
- Add the weekly issue and any new app records to the selected release-candidate
  branch, validate the complete site, wait for its refreshed Deploy Preview to
  succeed and merge once. This single merge should publish the approved improvements
  and weekly issue together.
- If no approved release candidate exists, create a dedicated issue branch and PR
  from the latest `main`, then merge it after validation, build and preview checks pass.
- If multiple previews remain ambiguous on Friday because no Thursday direction was
  received, leave every preview untouched and publish the routine issue through a
  separate branch and PR. Preview ambiguity must not block the weekly publication.
- Never add unapproved design, architecture or functionality changes during the
  autonomous Friday issue run.

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

6. Ensure the corresponding app file includes the editorial collection:

   ```yaml
   collections: [editors-picks]
   ```

   Preserve any existing collection entries when adding `editors-picks`.
7. Write the reason in App Waypoint's editorial voice. Explain the practical quality, distinctive capability or workflow value that earned the selection; do not repeat the description or use generic marketing praise.
8. Do not also place the Editor's Pick in a regular section. An app may appear only once per issue.
9. If the issue already has an Editor's Pick, replace it only when the user's request clearly calls for replacement; otherwise report the conflict.
10. Run validation and the Astro build. If the app or issue cannot pass the documented requirements, stop and report the specific problem rather than silently choosing another app.

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

## Weekend Reading curation

Weekend Reading is about the wider Mac app ecosystem, not only Apple company or
platform news.

- Select three worthwhile links with a clear connection to Mac apps, software
  discovery, app workflows or the people who make Mac software.
- At least two of the three selections should primarily concern apps. Strong
  candidates include thoughtful app stories, practical workflows, developer essays,
  notable app releases, and credible “must-try” or best-app collections.
- Apple coverage remains welcome when it materially affects Mac apps or how people use
  them. Avoid filling the section with general Apple news that lacks a meaningful app
  angle.
- Check high-signal community sources, including `r/macapps`. An unusually popular,
  substantive post may be selected when its engagement and discussion indicate genuine
  reader value; popularity alone is not enough.
- Link directly to the original article, list, developer post or Reddit discussion.
  Prefer useful, specific material over press-release rewrites, thin listicles,
  promotional posts or routine news summaries.
- Keep the three selections varied in source and subject whenever the week's material
  allows.

## Up and Coming curation

Every weekly publishing run must check both the current `r/macapps` promotional
megathread, currently titled **The App Pile**, and recent launches from the approved
research sources. The section must never repeat an app from the immediately preceding
issue.

- Read the moderator-authored **Top 3 From Last Month's Megathread** block at the top
  of the current thread.
- Begin with those moderator selections when they are eligible, but exclude any app
  that appeared in the immediately preceding issue.
- Replace excluded or unavailable selections with credible recent discoveries from
  sources such as Product Hunt's recent Mac launches, substantive `r/macapps`
  discussions, GitHub activity or independent developer launch notes.
- Use the exact eyebrow `Up and Coming`. Do not infer rankings from raw comment order
  or votes.
- Verify each app's official homepage or canonical repository before adding it.
- Reuse an existing app record when the app already exists; otherwise create one
  standard Markdown app file following all normal content limits.
- The section must contain exactly three app IDs. Preserve the megathread's order for
  any eligible moderator selections, followed by verified alternates.
- Do not duplicate an app elsewhere in the same issue. If a selected app already
  appears in another section, move it into `Up and Coming` rather than listing it twice.
- Credit every source used for the final slate in `sourceNotes`.

## Editor attribution

- Public website content must never identify the editor by personal name.
- Use `Editor`, `Editor's Pick` or similarly role-based language for attribution.
- Personal names may remain in private workflow instructions, but not in app records,
  issue content or generated page copy.

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

### Repository path privacy

- Use repository-relative paths in every committed file.
- Never commit a local home directory, username, workspace location or machine-specific absolute path.
- Use placeholders such as `$HOME`, `<workspace>` or `<project-root>` when an absolute-path example is unavoidable.
- Run `npm run validate` before committing; it includes the repository privacy check.

When modifying a shared component, layout, stylesheet, schema or documentation file:

- fetch the complete current file
- preserve unrelated behavior
- write the complete resulting file
- verify the file after the write
- run a build and inspect the deploy preview when presentation may change

If a requested change conflicts with the style guide, update the style guide in the same change or explain the conflict before proceeding.
