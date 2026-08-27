# App Waypoint Development Workflow

This is the canonical path from a local edit to production. It applies to people,
Codex, Osaurus and other development agents.

## 1. Prepare the work

1. Open the repository root, not an empty parent folder.
2. Fetch the remote and start from the latest `main`.
3. Create a short-lived task branch. Do not edit or commit directly on `main`.
4. Read `AGENTS.md` and the task-relevant documentation:
   - `docs/STYLE_GUIDE.md` for any content or presentation change
   - `docs/ISSUE_TEMPLATE.md` for app or issue content
   - `docs/PUBLISHING.md` for weekly release work
   - `docs/OSAURUS.md` when using the local Osaurus agent
5. Inspect the current content schema, components and related content before editing.

Use repository-relative paths in committed files. Never commit a username, home
directory, local workspace location or machine-specific absolute path.

## 2. Develop locally

Install dependencies once with `npm ci`, then use `npm run dev` for local review.
Astro Content Collections are the editorial source of truth:

- app records: `src/content/apps/*.md`
- issue records: `src/content/issues/*.md`

Reuse existing records. Do not duplicate app data, hand-build generated detail pages
or edit generated output in `dist/`.

## 3. Validate before publishing

Run both commands from the repository root:

```bash
npm run validate
npm run build
```

Fix every error. Do not bypass schema, privacy or build failures. For presentation
changes, also review light and dark modes, desktop and mobile layouts, keyboard access
and reduced-motion behavior.

## 4. Pull request and preview

1. Commit only the intended files with a concise message.
2. Push the task branch and open a pull request.
3. Confirm the pull request targets `main`.
4. Wait for the repository validation/build check and
   `netlify/appwaypoint/deploy-preview` to pass.
5. Use the Netlify Deploy Preview URL attached to the pull request for review.
   The preview URL should look like
   `https://deploy-preview-{PR_NUMBER}--appwaypoint.netlify.app`.
6. Review the Deploy Preview when content, layout or publishing output changed.
7. Resolve review conversations and failures before merge.
8. Merge only after required checks pass and the change has the approval required by
   `docs/PUBLISHING.md`.

Batch related edits and push at meaningful milestones to conserve Netlify build
credits.

### Deployment contract

- Netlify is the only deployment target for App Waypoint.
- `netlify.toml` is the deployment source of truth: `npm run build` builds the site,
  Netlify publishes `dist`, and builds use Node 22.
- GitHub Pages must stay disabled. Do not enable GitHub Pages, add a Pages workflow,
  commit or upload `dist/`, use a `gh-pages` branch or manually publish generated
  HTML.
- Do not use `netlify deploy` to create the normal PR preview. The normal preview is
  Git-based: push the branch, open or update the PR, and wait for
  `netlify/appwaypoint/deploy-preview`.
- A manual Netlify CLI deploy is allowed only when the user explicitly asks for a
  one-off manual deploy. It does not replace the required PR Deploy Preview.

## 5. Production

Merging the approved pull request into `main` starts the Netlify production
deployment. Do not run a manual production deploy and do not use GitHub Pages. Do not
claim a change or issue is live until Netlify reports success. After deployment,
verify the production homepage and every changed permanent URL. Weekly releases must
also complete the reporting and email steps in `docs/PUBLISHING.md`.

## 6. Agent authority

Agents may inspect files, edit the task branch and run local checks within the task's
scope. They must not push, merge, close pull requests, deploy, send email or make other
external changes without explicit user approval or a previously authorized scheduled
workflow. When a tool cannot run a required check, the agent must report that fact and
must not describe the check as passing. GitHub checks are the final machine-verifiable
gate for merge.

## 7. Weekly release path

Thursday prepares the weekly issue, applies confirmed app-record changes, validates
and builds the release candidate, opens or updates the pull request, waits for GitHub
checks and the Netlify Deploy Preview, reviews that preview and records editor
approval. Friday only merges the reviewed, passing and approved pull request into
`main`, then verifies the Netlify production deployment and completes the reporting
and email steps. If Thursday review did not produce an approved candidate, Friday
must not create or publish a new issue directly. The full decision tree is in
`docs/PUBLISHING.md`.
