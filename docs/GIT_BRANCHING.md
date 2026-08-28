# Git Branching Reference

This guide explains how to work on separate local branches, combine approved work,
and open one pull request that Netlify can preview.

## Mental Model

- A local branch exists only on your computer until you push it.
- GitHub and Netlify do not see a purely local branch.
- A pull request has one source branch and one target branch.
- To ship several local branches together, merge them into one release branch, push
  that release branch, then open one pull request to `main`.
- Netlify creates the normal Deploy Preview from the pull request, not from a purely
  local branch.
- Production goes live only when the approved pull request merges into `main`.

## Start From Main

Run this before creating a new work branch.

```bash
git switch main
git pull
```

What this does:

- `git switch main` moves you to the production branch.
- `git pull` updates your local `main` with the latest GitHub version.

## Create Separate Local Work Branches

Use separate branches for separate streams of work, such as a hero redesign, tag
audit, or new page.

```bash
git switch main
git pull
git switch -c hero-redesign
```

What this does:

- Starts `hero-redesign` from the latest `main`.
- Keeps the work separate from other experiments.
- Does not create a GitHub pull request or Netlify preview yet.

Commit your work on that branch:

```bash
git status
git add path/to/changed-file
git commit -m "Describe the change"
```

What this does:

- `git status` shows changed files.
- `git add` stages the files you want in the commit.
- `git commit` saves a local checkpoint on the current branch.

Repeat the same pattern for other branches:

```bash
git switch main
git pull
git switch -c tag-audit
```

```bash
git switch main
git pull
git switch -c new-page-development
```

## Push A Single Branch For Review

When one branch is ready for its own preview:

```bash
git push -u origin hero-redesign
```

What this does:

- Sends the local branch to GitHub.
- Sets the GitHub branch as the default upstream for later pushes.
- Does not merge anything into `main`.

After pushing, open a pull request from `hero-redesign` to `main`. GitHub will run
the repository checks, and Netlify will create a Deploy Preview for that pull
request.

## Combine Several Branches Into One Release Branch

Use this when several approved branches should ship together.

```bash
git switch main
git pull
git switch -c release/issue-08
```

What this does:

- Starts a fresh release branch from the latest `main`.
- Gives you one branch that will become the final pull request.

Merge approved work into the release branch:

```bash
git merge hero-redesign
git merge tag-audit
git merge new-page-development
```

What this does:

- Copies the committed work from each branch into `release/issue-08`.
- Keeps the original branches intact.
- Gives GitHub and Netlify one combined branch to review.

If Git reports a conflict, stop and resolve the conflicted files before continuing.
After resolving conflicts:

```bash
git status
git add path/to/resolved-file
git commit
```

What this does:

- Shows which files still need attention.
- Stages the resolved files.
- Completes the merge commit.

## Validate The Combined Release Branch

Run checks before pushing the release branch.

```bash
npm run validate
npm run build
```

What this does:

- Confirms content, schema, privacy, and generated site output are valid.
- Catches problems before spending a Netlify preview build.

## Push The Combined Release Branch

```bash
git push -u origin release/issue-08
```

What this does:

- Sends the combined release branch to GitHub.
- Makes it available for one pull request into `main`.

Open one pull request:

```text
release/issue-08 -> main
```

GitHub will run the required checks. Netlify will create one Deploy Preview that
contains all work merged into the release branch.

## Update A Branch After More Local Commits

If the branch already has a pull request:

```bash
git switch release/issue-08
git status
git add path/to/changed-file
git commit -m "Describe the update"
git push
```

What this does:

- Adds the new commit to the existing branch.
- Updates the existing pull request.
- Triggers a refreshed Netlify Deploy Preview.

## Keep A Branch Current With Main

If `main` changes before your branch merges:

```bash
git switch main
git pull
git switch release/issue-08
git merge main
npm run validate
npm run build
git push
```

What this does:

- Brings the newest production changes into your release branch.
- Re-runs local checks.
- Updates the pull request and Netlify preview.

## Merge To Production

Merge only after the pull request is reviewed, approved, and passing required
checks.

```text
Merge the approved pull request into main using GitHub.
```

What this does:

- Updates `main`.
- Starts the Netlify production deployment.
- Publishes the combined work only after Netlify production succeeds.

Do not use GitHub Pages, `gh-pages`, manual `dist/` uploads, or a manual production
deploy for the normal App Waypoint release flow.

## Common Patterns

Use one branch when the changes are part of the same review:

```text
hero mobile spacing + hero nav animation + hero copy cleanup
```

Use separate branches when the work could be reviewed or shipped separately:

```text
hero redesign
tag audit
new page development
weekly issue
```

Use one combined release branch when approved work should go live together:

```text
release/issue-08
```

That release branch is the branch that gets the final pull request and Netlify
Deploy Preview.
