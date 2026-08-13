# App Waypoint Publishing

App Waypoint publishes one coordinated release each Friday. The preferred release
contains the weekly issue plus any site improvements that the editor approved in
advance, merged to `main` once so Netlify performs one production deployment.

## Thursday release check

The Thursday check combines Editor's Pick collection with release-candidate
coordination.

1. Ask whether the editor has an app to contribute as the upcoming Editor's Pick.
2. Inspect every open pull request for `noticesfromchat/macos-app-digest` and its
   Netlify Deploy Preview.
3. Record each preview's purpose, explicit approval state and current Netlify status.
4. If more than one preview exists, ask the editor which preview should accompany the
   Friday issue. Do this whether none, one or several previews appear approved.
5. Recommend whether to select one preview, consolidate approved work or leave the
   previews separate.
6. Do not merge, close, consolidate or otherwise alter competing previews without the
   editor's direction.

An idle preview may remain open without creating another build. Minimize Netlify
credit use by validating locally, batching related changes and pushing only at a
meaningful review or release milestone.

## Friday release selection

Use the following order of operations:

### One approved release candidate

When exactly one approved release-candidate PR exists, or the editor selected one on
Thursday:

1. Confirm the PR contains only approved site improvements and its existing Deploy
   Preview succeeded.
2. Sync the release-candidate branch with the latest `main` before adding content.
3. Research and prepare the weekly issue using the branch's current components,
   layouts, styles and content schema.
4. Reuse existing app Markdown records and add new app records only when necessary.
5. Add one issue Markdown file plus any required new app Markdown files to the
   release-candidate branch.
6. Include the issue `rss` block with a short issue-specific title and the standard
   `Read this issue` CTA. The feed summary is generated from the issue `dek`, so do
   not duplicate that summary in the `rss` block.
7. Do not manually create or edit app detail pages. Astro generates `/apps/{app-id}/`
   from `src/content/apps/` during the build.
8. Run `npm run validate` and `npm run build` against the combined branch.
9. Fix every validation or build error before continuing.
10. Verify the built `/rss.xml` feed includes every published issue exactly once,
   ordered newest-first, with stable GUIDs, correct publication dates and correct
   permanent issue URLs, the issue-specific RSS title, the issue-number-prefixed
   summary and the linked CTA. Confirm the latest issue appears automatically during
   the normal build without any manual RSS-generation step.
11. Push the completed release candidate once and wait for the refreshed Netlify
   Deploy Preview to report ready or success.
12. Merge the PR into `main` once. Do not first merge improvements and then make a
   second issue commit to `main`.
13. Confirm the Netlify production deployment succeeds before claiming the issue is
   live or sending the weekly email.

Routine issue content added to an already approved release candidate does not require
another manual approval after all checks pass. Do not add new unapproved design,
architecture or functionality changes during this run.

### No approved release candidate

When no approved release candidate exists:

1. Leave every unapproved or experimental preview untouched.
2. Create a dedicated weekly-issue branch from the latest `main`.
3. Add the weekly issue, its `rss` block and any required app records, then open a
   pull request.
4. Run `npm run validate` and `npm run build`.
5. Verify the built `/rss.xml` feed includes the issue-specific RSS title, the
   issue-number-prefixed summary and the linked `Read this issue` CTA.
6. Wait for required GitHub checks and the Netlify Deploy Preview to succeed.
7. Merge the pull request into `main` once.
8. Confirm the Netlify production deployment succeeds before sending the email.

### Multiple ambiguous previews

When multiple previews still exist on Friday and no Thursday direction was received:

1. Do not guess which preview to merge.
2. Do not combine, close or modify the previews.
3. Create a separate weekly-issue branch and pull request from the latest `main`.
4. Add the weekly issue with its required `rss` block.
5. Validate, build, verify `/rss.xml` and review its Netlify Deploy Preview, then
   merge it once the required checks pass.
6. Report the unresolved previews separately. Preview ambiguity must not delay the
   weekly issue.

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
