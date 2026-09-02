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

### Vendored skills

- `.claude/skills/seo/` is the [Agentic SEO Skill](https://github.com/Bhanunamikaze/Agentic-SEO-Skill)
  (MIT), vendored for SEO audits of the site and of the GitHub repository. It is third-party
  code: review the diff when updating it, and do not edit it in place.
- Its analysis scripts need Python packages this repository does not otherwise use.
  Install them only if you intend to run those scripts:
  `python3 -m pip install --user requests beautifulsoup4 lxml`.
- The skill is tooling, not site content. It is never built, never copied into `dist/`, and
  must not be treated as a source of truth for editorial or presentation decisions —
  `docs/STYLE_GUIDE.md` and `DESIGN.md` still govern those, and an SEO recommendation that
  conflicts with them is a conflict to raise, not to apply.

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

**Documentation first, always.** Read the relevant documentation before making any
decision, not only before writing code. This includes decisions about approach,
branching, where a rule belongs, and whether something is already solved here. A
decision made from general knowledge or from another project's conventions, when this
repository documents its own, is a defect even when the resulting code works. Assume a
convention exists and go find it before inventing one.

The minimum read for any presentation or content change:

| Document | Owns |
|---|---|
| `docs/STYLE_GUIDE.md` | Visual system, page structure, responsive and interaction rules, editorial punctuation, publishing conventions |
| `DESIGN.md` | Tokens, named house rules, motion, the committed visual world |
| `docs/DEVELOPMENT.md` | Local-to-production path, validation, preview and deploy contract |
| `docs/GIT_BRANCHING.md` | Branching, release branches, what Netlify can and cannot preview |
| `docs/ISSUE_TEMPLATE.md` | App and issue frontmatter |
| `docs/PUBLISHING.md` | Weekly release work |

When adding a rule or convention, put it where its siblings already live. Editorial
punctuation belongs in `docs/STYLE_GUIDE.md` beside the Oxford comma rule and is
enforced by `scripts/check-editorial-style.mjs`. Design rules belong in `DESIGN.md` as
named rules, and in `.impeccable/design.json` so `context.mjs` surfaces them. A rule
documented somewhere new, next to nothing related, will not be found again.

**Collect multi-part approvals on a decision sheet.** When work produces more than two
or three choices for the editor — audit findings, app-record changes, review comments,
a migration — do not ask for them in prose. Publish one sheet with a card per decision,
each carrying the concrete change and its already-verified consequence, and an approve,
reject or free-text alternative. Present only options whose effects have been checked;
a sheet is for verified changes, not guesses. Apply the answers in one pass, then
**delete the sheet as part of finishing the work** — a sheet still listing decisions
that have shipped misleads whoever reads it next. `docs/TAG_AUDIT.md` section 8 shows
the pattern in use.

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

## Standard issue structure

Every issue must use the same regular app-section spine, in this order:

1. `New Discoveries`
2. `Trending`
3. `Old Favorites`
4. `AI & Automation`
5. `Up and Coming`

Do not rename, omit, reorder or add regular app sections during scheduled issue
preparation. The optional `editorsPick` module is the only app feature outside that
spine, and when present it renders between `Trending` and `Old Favorites`. If the
slate does not yet contain three eligible apps for a required section, keep the
section name and ask the editor to choose replacements with checkbox options in
Notion before building the preview.

## Deployment authority

- Netlify is the only deployment target for this repository.
- GitHub Pages must remain disabled. Do not enable Pages, create a Pages workflow,
  upload `dist/` to Pages, commit generated `dist/` output or use `gh-pages`.
- Netlify uses the Git-connected site configuration in `netlify.toml`: build command
  `npm run build`, publish directory `dist`, Node 22.
- A Netlify Deploy Preview is created only by pushing a task branch and opening or
  updating a pull request. Do not use `netlify deploy` as a substitute for the PR
  Deploy Preview unless the user explicitly asks for a one-off manual Netlify deploy.
- After every preview-relevant push, wait for GitHub checks and
  `netlify/appwaypoint/deploy-preview` to pass, then review the Deploy Preview URL
  shown on the pull request.
- Production deployment happens only when the approved pull request is merged into
  `main`. Do not deploy production with GitHub Pages or a manual CLI command.

## Weekly release coordination

Treat Thursday as the editorial check and Deploy Preview review day, and Friday as
the single production deployment point. Follow the complete workflow in
[`docs/PUBLISHING.md`](docs/PUBLISHING.md).

- On Thursday, research candidate apps, links and sources for the upcoming issue,
  then propose the Friday slate for editor review.
- For each proposed app, include draft description, `bestFor`, tags, source or
  homepage and any collection recommendations.
- Proposed issue slates must preserve the standard section spine:
  `New Discoveries`, `Trending`, `Old Favorites`, `AI & Automation`,
  `Up and Coming`. Do not substitute alternate section names such as utility,
  workbench or themed catchall sections.
- Every app placed in an `Old Favorites` section must include `community-favorites`
  in its app record's `collections` array. Preserve any existing collection entries.
- During the Thursday check, audit existing tags for underuse, duplication, vague
  labels, overly narrow labels and apps that appear mistagged or undertagged. Follow
  `docs/TAG_AUDIT.md`, which defines the method, the protected single-app tags and the
  rule for a record at the six-tag ceiling.
- Ask whether the editor wants any changes to existing app records before preparing
  the release candidate. Check the Notion
  [Editor's Picks note](https://app.notion.com/p/Editor-s-Picks-3c8d6482d47f80c4bbc6ce99ed84d908?source=copy_link)
  first for pending Editor's Pick direction, then check GitHub issues, pull request
  comments, prior Thursday reports and other explicit scheduled-task context; report
  any direction found and ask the editor to confirm, change, reorder or remove it
  before preparing the release candidate. Ask whether the editor has a new Editor's
  Pick only when no pending Notion direction or previously confirmed direction
  exists.
- Also on Thursday, inspect every open App Waypoint pull request and its Netlify
  Deploy Preview. If more than one preview exists, ask the editor which preview
  should accompany Friday's issue even when one preview already appears approved.
  Report the purpose, approval state and Netlify status of each preview and recommend
  a path forward.
- Do not combine, close, merge or otherwise resolve competing previews without the
  editor's direction.
- When exactly one approved release-candidate preview exists, the Friday automation
  may use it without another approval request.
- On Thursday, prepare the weekly issue from the Thursday-reviewed slate and apply
  confirmed app-record changes. Add the issue and any new app records to the selected
  release-candidate branch, validate the complete site, wait for its refreshed
  Deploy Preview to succeed, review it and ask the editor for final approval to use
  that candidate for Friday's production deployment.
- On Friday, merge only the reviewed, passing and editor-approved release-candidate
  PR into `main`, then verify the Netlify production deployment and complete the
  reporting and email steps.
- If no reviewed, passing and editor-approved release candidate exists on Friday,
  do not create, build, merge or publish a new issue directly on Friday. Report the
  missing review state and ask whether to run a new review cycle before deployment.
- If multiple previews remain ambiguous on Friday because no Thursday direction was
  received, leave every preview untouched and do not publish. Preview ambiguity must
  block production deployment until it is resolved.
- Never add unapproved design, architecture or functionality changes during the
  autonomous Thursday issue-preparation or Friday deployment run.

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

Pending Editor's Pick direction should be pulled first from the Notion
[Editor's Picks note](https://app.notion.com/p/Editor-s-Picks-3c8d6482d47f80c4bbc6ce99ed84d908?source=copy_link).
Previously provided Editor's Pick direction in that note, GitHub issues, pull
request comments, prior Thursday reports or other explicit scheduled-task context
counts as editor-provided direction only after the Thursday check reports it and
asks the editor to confirm, change, reorder or remove it. Do not hard-code app names
in scheduled-task prompts, and do not infer or auto-promote Editor's Picks from an
old queue unless the editor explicitly confirmed that queue is still active. Friday
may use only the Editor's Pick confirmed during Thursday review.

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
- Before adding a tag to any app record, check `docs/TAG_AUDIT.md`. Reuse an existing
  tag wherever one already covers the reader intent, and never use a tag from its
  retired list without an explicit editorial reason stated in the pull request. A new
  tag that applies to one app is a feature, not a discovery tag.
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
- Source note: hard maximum 140 characters. Unpublished since 2026-09-01, so the limit
  keeps the record readable rather than fitting a layout.

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
- Credit every source used for the final slate in `sourceNotes`. The field is recorded,
  not published: the issue page stopped rendering source notes on 2026-09-01, and they
  remain in frontmatter as the editorial audit trail.

## Editor attribution

- Public website content must never identify the editor by personal name.
- Use `Editor`, `Editor's Pick` or similarly role-based language for attribution.
- Personal names may remain in private workflow instructions, but not in app records,
  issue content or generated page copy.

## Non-negotiable presentation rules

- App cards and app titles link to the generated App Waypoint app detail page.
- Official homepage links belong on app detail pages, not beneath app cards.
- Weekend Reading titles link directly to articles.
- Do not show a separate `Read article` link beneath reading cards.
- Tag pills remain quiet, grayscale metadata rather than primary calls to action.
- Dark-mode card emphasis remains grayscale, not blue.
- App cards share one height on a page and their regions line up across the whole
  grid, not only within a row. This is subgrid, not per-region `min-height` budgets.
  See The One Card Height Rule in `DESIGN.md`. Reading cards are the exception.
- App cards show no source credit. The record's `source` field is editorial
  provenance, not reader-facing copy.
- Mobile cards expand naturally with content.
- The site header uses the App Waypoint buoy logo. Large page headings use text only, with no emoji.
- The theme toggle is icon-only with no pill, no text and no emoji.
- Do not introduce emoji as interface icons.
- Do not add visual clutter or icons to every card.
- Public editorial copy uses no em dash and no en dash; date and number ranges take a plain
  hyphen. Page titles, quoted external titles and code comments are outside the rule. See
  The Plain Dash Rule in `DESIGN.md`.

## Change safety

### Local dev server

- Check whether a dev server is already running before starting one:
  `curl -s -o /dev/null -w '%{http_code}\n' http://localhost:4321/`. A `200` means one is
  serving; use it rather than starting another.
- Never run a second server. Astro silently takes the next free port, so you review
  `:4322` while the editor watches `:4321` and the two diverge on the next edit.
- Never kill or restart a server you did not start. When a change needs a restart to take
  effect, `astro.config.mjs` among them, say so and let the editor restart it.
- See `docs/DEVELOPMENT.md` section 2 for the full local-to-production path.

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
