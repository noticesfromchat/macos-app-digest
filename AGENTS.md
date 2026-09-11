# App Waypoint agent instructions

App Waypoint is an Astro publication for experienced Mac users. Current explicit
user instructions take precedence over repository conventions and skill defaults;
system and tool permission boundaries still apply. Preserve prior approvals within
their stated scope rather than requesting them again.

## Read for the task

Read the relevant sections before deciding or editing. A small copy or code fix does
not require the full publishing workflow or a complete repository map. Reuse context
already read unless the underlying files changed.

| Task | Source of truth |
|---|---|
| Local development, checks, preview or deployment | [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) |
| Selecting or changing a branch, combining release work | [docs/GIT_BRANCHING.md](docs/GIT_BRANCHING.md) |
| Editorial copy, page structure, attribution or icons | Relevant sections of [docs/STYLE_GUIDE.md](docs/STYLE_GUIDE.md) |
| Layout, tokens, components or motion | Relevant sections of [DESIGN.md](DESIGN.md) and [docs/STYLE_GUIDE.md](docs/STYLE_GUIDE.md) |
| App or issue records, field limits, Editor's Pick | [docs/ISSUE_TEMPLATE.md](docs/ISSUE_TEMPLATE.md) and `src/content.config.ts` |
| Tags and collections | [docs/TAG_AUDIT.md](docs/TAG_AUDIT.md) |
| Weekly research, slate review or release | [docs/PUBLISHING.md](docs/PUBLISHING.md), issue template and style-guide publishing checklist |
| Audience or product decisions | [PRODUCT.md](PRODUCT.md) |

Astro components, layouts and styles govern presentation implementation. Markdown
under `src/content/` governs editorial content. Older published pages are references,
not overrides of the current style guide.

## Working boundaries

- Propose a branch and wait for the editor's answer unless the conversation already
  selects one. New task branches start from the latest `main`; weekly branches use
  `issue-NNN-weekly-update`. Never make production changes directly on `main`.
- On the selected branch, inspect, make scoped local edits, run checks and fix
  failures caused by the change without asking for each step. Inspect enough context
  to preserve unrelated behavior; use focused patches, then inspect the resulting diff.
- Complete the authorized implementation and relevant verification before returning
  for review. Stop for missing essential information, a real permission boundary or
  a user-requested review point, not an arbitrary number of passes.
- Pushing, merging, closing PRs, deploying, sending email and other external changes
  require explicit approval or an already authorized scheduled workflow.
- For multiple editorial decisions, use one decision sheet with concrete changes,
  verified consequences and approve, reject or free-text alternatives. Apply the
  answers together and remove the temporary sheet once the decisions are resolved.
  See [docs/TAG_AUDIT.md](docs/TAG_AUDIT.md#8-report-then-apply).

## Content and presentation invariants

- Apps exist once in `src/content/apps/*.md`; issues in `src/content/issues/*.md`
  reference app IDs. Do not duplicate app data in shared TypeScript or hand-built pages.
- Preserve the five regular issue sections and their order. The optional Editor's
  Pick is separate and appears once. The issue template owns the full requirements.
- Respect supplied Editor's Picks. The publishing guide owns Thursday confirmation
  of pending direction and Friday's reviewed-candidate requirement.
- Preserve light/dark modes, mobile flow, keyboard access and reduced motion.
  House styles outrank generic design-skill recipes. Social cards use the single
  renderer `src/data/og-card.ts`; never author a one-off replacement.
- New editorial rules belong beside their siblings in the style guide and its
  checker. Named design rules belong in DESIGN.md and `.impeccable/design.json`.

## Validation and release

Use checks relevant to the change during local work. Before committing or preparing
publication, run `npm run validate` and `npm run build`. Fix failures rather than
bypassing them. Once checks pass, repeat them only after further changes or evidence
of a remaining problem. Report any check that could not run.

Netlify is the only deployment target. Keep GitHub Pages disabled and never commit
`dist/`. Normal previews come from a branch push and PR, not a manual Netlify deploy.
After a preview-relevant push, wait for required GitHub checks and
`netlify/appwaypoint/deploy-preview`, then review that preview before merging
presentation or publishing changes. Production requires an approved PR merge and
successful Netlify deployment verification.

Thursday prepares and reviews the release; Friday merges only that reviewed,
passing, editor-approved candidate. Missing approval or ambiguous competing previews
blocks publication. Use the publishing guide for the full procedure and email steps.

## Local safety

Before starting a dev server, check `http://localhost:4321/`; HTTP 200 means reuse it.
Never start a second server, or stop/restart a server you did not start. Report a
needed restart to the editor. Development guide section 2 explains local social-card
URLs and other server behavior.

Use repository-relative paths in committed files. Never commit local home paths,
usernames, workspace locations or secrets; use `$HOME` or `<project-root>` in examples.

## Skills

Impeccable is the automatic frontend router. Its 23 local shortcuts and 13 specialist
skills are explicit-only in Codex; invoke them by name when requested. The alternative
aesthetic skills do not replace the established App Waypoint design system.

The vendored `.claude/skills/seo/` is third-party audit tooling, not site content or
visual authority. Do not edit it in place or copy it into `dist/`. Review upstream
diffs before updates. Install its Python dependencies (`requests beautifulsoup4 lxml`)
only when running those scripts. Raise recommendations conflicting with house style.

## Design Context

Impeccable reads this section to build project-specific personas for `critique`. Everything
here is drawn from PRODUCT.md and the style guide rather than invented; if the two disagree,
PRODUCT.md wins and this section is the thing that is wrong.

**Audience.** Experienced Mac users who already run a considered set of software. They are
not looking for a first app in a category, they are deciding whether this week's pick earns
a place next to something they already trust, so the question a page has to answer is what
this app does that theirs does not. They arrive on a Friday, read on a Mac, and are
comfortable with the platform's own conventions.

**Job.** Discover useful Mac software and related reading, once a week, without having to
sift. Success is a reader who returns next Friday.

**Brand.** Editorial, practical and selective, never promotional. The edge is human
curation: apps are chosen one at a time by an editor, and AI is editorial support and never
the final decision-maker. Copy is human-led by design, which is what the Plain Dash Rule
protects. The voice states a judgment and gives the reason for it.

**What that implies for a critique.** Persuasion is not the mode here; this site does not
sell, it recommends and expects to be checked. Trust comes from the selection being legible
as a person's, from the reasoning being present, and from the catalogue being honest about
its size and shape. Treat calm as a requirement rather than a preference: the most kinetic
object on any page should be justifiable, and a device that moves for its own sake is a
defect on a publication that asks to be read.
