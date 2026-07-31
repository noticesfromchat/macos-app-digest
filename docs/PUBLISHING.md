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
6. Run `npm run validate` and `npm run build` against the combined branch.
7. Fix every validation or build error before continuing.
8. Push the completed release candidate once and wait for the refreshed Netlify
   Deploy Preview to report ready or success.
9. Merge the PR into `main` once. Do not first merge improvements and then make a
   second issue commit to `main`.
10. Confirm the Netlify production deployment succeeds before claiming the issue is
    live or sending the weekly email.

Routine issue content added to an already approved release candidate does not require
another manual approval after all checks pass. Do not add new unapproved design,
architecture or functionality changes during this run.

### No approved release candidate

When no approved release candidate exists:

1. Leave every unapproved or experimental preview untouched.
2. Create the weekly issue from the latest `main`.
3. Run `npm run validate` and `npm run build`.
4. Commit the routine issue directly to `main` after both checks pass.
5. Confirm the Netlify production deployment succeeds before sending the email.

### Multiple ambiguous previews

When multiple previews still exist on Friday and no Thursday direction was received:

1. Do not guess which preview to merge.
2. Do not combine, close or modify the previews.
3. Publish the routine weekly issue directly to `main` after validation and build
   checks pass.
4. Report the unresolved previews separately. Preview ambiguity must not delay the
   weekly issue.

## Production completion

After the production deployment reports success:

1. Verify the homepage and permanent issue URL.
2. Send the editorial email with the issue summary, three strongest app highlights,
   the production homepage and the permanent issue link.
3. Report validation, build, merge or commit, production deployment and email status.

Never use GitHub Pages, manually publish generated HTML or claim an issue is live
before Netlify reports a successful production deployment.
