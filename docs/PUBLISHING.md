# App Waypoint Publishing

App Waypoint publishes one coordinated release each Friday. The preferred release
contains the weekly issue plus any site improvements that the editor approved in
advance, merged to `main` once so Netlify performs one production deployment.

## Deployment contract

- Netlify is the only deployment target for App Waypoint.
- GitHub Pages must remain disabled. Never enable Pages, create a Pages workflow,
  publish from a `gh-pages` branch, upload generated files or commit `dist/`.
- Netlify previews are created by GitHub pull requests. Push the release-candidate
  branch, open or update the PR against `main`, then wait for
  `netlify/appwaypoint/deploy-preview` to pass.
- The preview URL for PR `{PR_NUMBER}` should be
  `https://deploy-preview-{PR_NUMBER}--appwaypoint.netlify.app`.
- The repository's `netlify.toml` defines the build command, publish directory and
  Node version. Do not override those settings during release work unless the editor
  explicitly approves a deployment-configuration change.
- Use `netlify deploy` only for an explicitly requested one-off manual deploy. It is
  not the normal preview workflow and does not satisfy the required pull request
  Deploy Preview review.
- Production deployment happens only by merging the reviewed, passing and
  editor-approved PR into `main`.

## Thursday editorial check

The Thursday check prepares and reviews the Friday issue before production
deployment. It combines candidate research, app metadata review, tag maintenance,
Editor's Pick collection, release-candidate coordination, validation and Deploy
Preview review.

1. Research candidate apps, links and sources for the upcoming Friday issue.
2. Propose a Friday issue slate for editor review. For each proposed app, include
   the draft description, `bestFor`, tags, source or homepage and any collection
   recommendations. Also report whether the app record already has a suitable icon,
   whether a new official icon is needed and which `iconStyle` should be used.
3. Preserve the standard issue section spine exactly:
   `New Discoveries`, `Trending`, `Old Favorites`, `AI & Automation`,
   `Up and Coming`. Do not rename, omit, reorder or add regular app sections.
   The optional Editor's Pick is the only app module outside that spine and, when
   present, belongs between `Trending` and `Old Favorites`.
4. Audit tags across existing app records. Identify underused, duplicate, vague or
   overly broad tags, and flag apps that appear mistagged or would benefit from
   additional tags.
5. Ask whether the editor wants any changes to existing app records before preparing
   the release candidate.
6. Pull pending Editor's Pick direction from the Notion
   [Editor's Picks note](https://app.notion.com/p/Editor-s-Picks-3c8d6482d47f80c4bbc6ce99ed84d908?source=copy_link),
   then check the current workflow context for other previously provided direction,
   including GitHub issues, pull request comments, prior Thursday reports or other
   explicit scheduled-task context. Report any prior direction found and ask the
   editor to confirm, change, reorder or remove it before preparing the release
   candidate. Do not hard-code app names in scheduled-task prompts and do not infer
   or auto-promote Editor's Picks from an old queue unless the editor explicitly
   confirmed that queue is still active.
7. Ask whether the editor has a new app to contribute as the upcoming Editor's Pick
   when no pending Notion direction or previously confirmed direction exists.
8. Inspect every open pull request for `noticesfromchat/macos-app-digest` and its
   Netlify Deploy Preview.
9. Record each preview's purpose, explicit approval state and current Netlify status.
10. If more than one preview exists, ask the editor which preview should accompany the
   Friday issue. Do this whether none, one or several previews appear approved.
11. Recommend whether to select one preview, consolidate approved work or leave the
   previews separate.
12. Create or update the selected release-candidate branch from the latest `main`
    with the Thursday-reviewed issue slate, confirmed app-record changes, required
    app records and one issue Markdown file.
13. For every app added to or newly featured in the issue, add or confirm a local
    icon under `public/app-icons/` when an official app icon is available. Use
    `iconStyle: plain` for finished square app icons, `backed` for transparent
    artwork that needs a white backing and `contain` for non-square marks that
    should not crop. If no suitable official icon is available, omit `icon` and
    allow the app card to use the first-category fallback tile.
14. For every app in the required `Old Favorites` section, add `community-favorites` to the app
    record's `collections` array while preserving any existing collection entries.
15. Include the issue `rss` block with a short issue-specific title and the standard
    `Read this issue` CTA. The feed summary is generated from the issue `dek`, so do
    not duplicate that summary in the `rss` block.
16. Write `sourceNotes` in concise editorial language that explains where the issue's
    app selections and supporting links came from. Include all selected apps, grouped
    by source type when useful. Avoid internal agent or process wording such as
    “checked against records,” “during the research pass,” or “before preparing the
    release candidate.” Keep validation, duplicate checks and workflow details in
    Production Notes instead of Source Notes.
17. Run `npm run validate` and `npm run build`, fix every error and verify the built
    `/rss.xml` feed includes the new issue correctly.
18. Review new or changed icons in light mode, dark mode and mobile before asking for
    approval. Confirm square app icons do not show unwanted backing edges,
    transparent icons remain legible and archived issue pages still render their app
    cards cleanly after any all-app icon rollout.
19. Push the release candidate once, wait for required GitHub checks and the Netlify
    Deploy Preview to succeed, then review the Deploy Preview.
20. Ask the editor for final approval to use that reviewed release candidate for
    Friday's production deployment.
21. Do not merge, close, consolidate or otherwise alter competing previews without
    the editor's direction.

An idle preview may remain open without creating another build. Minimize Netlify
credit use by validating locally, batching related changes and pushing only at a
meaningful review or release milestone.

## Friday production deployment

Friday should be a narrow production step. The issue, app records, validation, build,
RSS verification, pull request checks and Deploy Preview review should already be
complete from Thursday.

Use the following order of operations:

### Reviewed and approved release candidate

When exactly one reviewed, passing and editor-approved release-candidate PR exists:

1. Confirm the PR still has passing required GitHub checks and a ready/successful
   Netlify Deploy Preview.
2. Confirm no unresolved editor direction or competing preview ambiguity remains.
3. Confirm the release candidate uses only the Editor's Pick direction confirmed
   during Thursday review. If no Editor's Pick was confirmed, the issue must omit
   the `editorsPick` block.
4. Merge the approved PR into `main` once. Do not add new content or app-record
   changes on Friday unless the editor explicitly pauses deployment and asks for a
   new Thursday-style review cycle.
5. Confirm the Netlify production deployment succeeds before claiming the issue is
   live or sending the weekly email.

Routine issue content added to an already approved release candidate does not require
another manual approval after all checks pass. Do not add new unapproved design,
architecture or functionality changes during this run.

### No reviewed release candidate

When no reviewed, passing and editor-approved release candidate exists on Friday:

1. Do not build, publish or merge a new weekly issue directly on Friday.
2. Report that the release is not ready because Thursday review, checks or Deploy
   Preview approval is missing.
3. Ask whether to run a new review cycle before deploying.

### Multiple ambiguous previews

When multiple previews still exist on Friday and no Thursday direction was received:

1. Do not guess which preview to merge.
2. Do not combine, close or modify the previews.
3. Do not build, publish or merge a separate weekly issue directly on Friday.
4. Report the unresolved previews and ask which candidate should enter a new review
   cycle. Preview ambiguity must block production deployment until it is resolved.

## Production completion

After the production deployment reports success:

1. Verify the homepage and permanent issue URL.
2. Send the editorial email with the issue summary, three strongest app highlights,
   the production homepage and the permanent issue link.
3. Report validation, build, merge or commit, production deployment and email status.

Never use GitHub Pages, manually publish generated HTML or claim an issue is live
before Netlify reports a successful production deployment.

## Generated app pages

Every app Markdown record automatically generates a permanent detail page at
`/apps/{app-id}/`. App cards and search results should route to these internal detail
pages. Explicit homepage links and app-title links remain outbound to the official
app homepage or canonical repository.

When adding or updating app Markdown, make the description, `bestFor`, tags, source
and homepage strong enough to support both issue cards and the generated app detail
page. Do not duplicate app details in issue files or manually maintain per-app HTML.
When adding or updating app icons, use local files under `public/app-icons/` and
confirm they render correctly everywhere the shared app card appears, including
homepage cards, current and archived issue pages, app directories, tag pages,
collection pages and related-app sections.
If an app intentionally has no icon, confirm its first category is the correct
fallback symbol and check the fallback color in both themes. After shared card
changes, also inspect Explore because its randomized sections use a browser-rendered
card template that must stay aligned with `AppCard`.
