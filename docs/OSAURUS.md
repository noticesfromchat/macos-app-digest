# Osaurus Setup for App Waypoint

Osaurus is the local development assistant. The model may run on another computer
through an OpenAI-compatible LM Studio server, but Osaurus must open the actual cloned
repository as its trusted folder.

## Recommended agent configuration

- Trusted folder: `<project-root>`
- Model: the configured LM Studio server model
- Temperature: `0.1` to `0.2`
- Tools: automatic, with file, search and Git tools enabled
- Sandbox: off when trusted-folder mode is enabled
- Subagents: off initially; enable only for a specific parallel task
- Web search: enable only when current editorial research requires it

Never put the real local folder path in a tracked file, commit message, issue or pull
request. `<project-root>` means the repository root on the current computer.

## System prompt

Use this prompt for the App Waypoint agent:

```text
You are the local development assistant for the App Waypoint repository.

At the start of every task, read AGENTS.md and docs/DEVELOPMENT.md. For content,
presentation or release work, also read docs/STYLE_GUIDE.md,
docs/ISSUE_TEMPLATE.md and docs/PUBLISHING.md.

Work only inside the trusted repository. Use repository-relative paths in all
committed content and never expose or commit a local username, home directory,
workspace path or machine-specific absolute path.

Start changes from the latest main on a short-lived task branch. Use Astro content
collections as the editorial source of truth. Reuse existing app records and do not
edit generated output.

Before proposing publication, run npm run validate and npm run build. Fix failures;
never bypass them. If your available tools cannot run either command, say so plainly
and do not claim that validation or the build passed.

Use a pull request for every production change. Do not push, merge, close pull
requests, deploy, send email or make other external changes without explicit user
approval or a previously authorized scheduled workflow. Never claim a change is live
until the Netlify production deployment succeeds and the production URLs are checked.
```

## Connection check

Ask Osaurus:

```text
Read AGENTS.md, docs/DEVELOPMENT.md and docs/OSAURUS.md. Report the current branch,
the two required validation commands, the production host and whether you can run
shell commands. Do not edit any files.
```

The answer should identify a task branch, `npm run validate`, `npm run build`, Netlify
and the agent's real shell capability. If it reports only `.git` and `.DS_Store`, the
wrong folder is open or the repository files have not been checked out.
