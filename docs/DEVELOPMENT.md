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
3. Wait for the repository validation/build check and Netlify Deploy Preview.
4. Review the Deploy Preview when content, layout or publishing output changed.
5. Resolve review conversations and failures before merge.
6. Merge only after required checks pass and the change has the approval required by
   `docs/PUBLISHING.md`.

Batch related edits and push at meaningful milestones to conserve Netlify build
credits. Never use GitHub Pages or manually publish `dist/`.

## 5. Production

Merging the pull request into `main` starts the Netlify production deployment. Do not
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

Thursday selects any approved release candidate. Friday adds the issue either to that
candidate or to a separate weekly-issue branch. In every case, production changes go
through a pull request and protected `main`. The full decision tree is in
`docs/PUBLISHING.md`.
