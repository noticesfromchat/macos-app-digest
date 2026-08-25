# New Issue Template

Copy the frontmatter below into a new file named `src/content/issues/YYYY-MM-DD.md`. The filename and `slug` must match.

Before creating the issue, add a Markdown file under `src/content/apps/` for every app ID that does not already exist. Reuse existing app IDs rather than duplicating app records.

```yaml
---
number: '002'
slug: 2026-07-17
date: July 17, 2026
dek: Write one concise 18-45 word sentence that previews the issue without listing every item.
rss:
  title: Short issue-specific RSS title aligned with the issue theme
  cta: Read this issue
sections:
  - eyebrow: New Discoveries
    title: A concise editorial section title
    apps: [new-discovery-app-id-1, new-discovery-app-id-2, new-discovery-app-id-3]
  - eyebrow: Trending
    title: A concise editorial section title
    apps: [trending-app-id-1, trending-app-id-2, trending-app-id-3]
  # Optional: include a "Old Favorites" section for established apps that still
  # deserve attention because they are quietly excellent or frequently praised.
  # Each app record must include community-favorites in its collections array.
  - eyebrow: Old Favorites
    title: Three established apps worth revisiting
    apps: [old-favorites-app-id-1, old-favorites-app-id-2, old-favorites-app-id-3]
  - eyebrow: AI & Automation
    title: A concise editorial section title
    apps: [ai-automation-app-id-1, ai-automation-app-id-2, ai-automation-app-id-3]
  # Read the current r/macapps App Pile megathread and recent approved launch sources.
  # Never repeat an app from the immediately preceding issue; use verified alternates.
  - eyebrow: Up and Coming
    title: Three community favorites worth watching
    apps: [upcoming-app-id-1, upcoming-app-id-2, upcoming-app-id-3]
# Optional: omit this block when the issue does not have an Editor's Pick.
# The selected app renders once in a full-width card between Trending and Old Favorites.
editorsPick:
  app: editor-pick-app-id
  reason: Write one concise 12-45 word explanation of why this app stands out in this issue.
video:
  title: Video title
  creator: Creator or publication
  description: Write one concise sentence explaining why the video is useful to Mac users.
  url: https://example.com/video
readings:
  # Weekend Reading covers the wider Mac app ecosystem, not only Apple news.
  # At least two of the three links should primarily concern apps, such as app
  # stories, must-try lists, workflows, developer posts or a substantive,
  # unusually popular r/macapps discussion.
  - title: Article title
    publication: Publication
    description: Write one concise 12-35 word sentence describing the value of the article.
    url: https://example.com/article-one
  - title: Article title
    publication: Publication
    description: Write one concise 12-35 word sentence describing the value of the article.
    url: https://example.com/article-two
  - title: Article title
    publication: Publication
    description: Write one concise 12-35 word sentence describing the value of the article.
    url: https://example.com/article-three
sourceNotes:
  - Discovery source or research note
  - Official app homepages were checked before publishing
---
```

## App file template

Create new apps at `src/content/apps/app-slug.md`.
Each app file automatically generates `/apps/app-slug/`; do not create that page
manually.

```yaml
---
name: App Name
description: Write exactly one concrete 12-35 word sentence explaining the app's primary job.
bestFor: Write exactly one 8-24 word sentence describing a recognizable user or workflow.
tags: [productivity, utility, menubar]
# Optional editorial curation. Required for Editor's Pick and Old Favorites apps;
# preserve other values when adding either collection.
# collections: [editors-picks, community-favorites]
source: Discovery source and official homepage
homepage: https://example.com/
---
```

## Required checks

Run these before opening or merging a publishing pull request:

```bash
npm run validate
npm run build
```

The validator rejects unknown app IDs, duplicate apps within an issue, duplicate issue numbers or slugs, malformed URLs and content outside the approved editorial ranges.

Each issue should include an `rss` block. `rss.title` is a short, issue-specific
headline for feed readers. It may be polished, lightly witty or occasionally framed
as a question, but it must match the issue theme and avoid clickbait. `rss.cta`
should stay `Read this issue` unless the feed format is intentionally revised.
The RSS summary uses the existing issue `dek`, prefixed with the issue number, so do
not duplicate summary copy inside `rss`.

Astro generates the homepage, archive, issue pages, tag pages, collection pages and
individual app pages from Markdown content. Do not manually edit generated pages or
duplicate app copy in issue files.

`editorsPick` is optional and accepts exactly one app ID plus a 12-45 word editorial
reason. The app must already exist in `src/content/apps/` and must not also appear in
one of the issue's regular sections.

`Old Favorites` is a standard three-app section for established Mac apps that still
earn community attention because they are unusually useful, overlooked or
continuously recommended. Every referenced app must include `community-favorites` in
its app file's `collections` array, preserving any existing collection entries.

Weekend Reading must follow the curation rules in `AGENTS.md`: cover the broader Mac
app ecosystem, make at least two selections primarily about apps, and use general
Apple coverage only when it has a meaningful connection to Mac software or workflows.
High-signal `r/macapps` discussions are valid sources when the post is substantive and
unusually useful or popular.

The `Up and Coming` section starts with the current `r/macapps` App Pile megathread's
moderator-authored selections, but must not repeat an app from the immediately
preceding issue. Replace repeats or unavailable selections with verified discoveries
from Product Hunt's recent Mac launches or another approved source. Verify official
links, reuse existing app records, create missing records and credit every source used
in `sourceNotes`. Do not substitute apps based solely on raw votes.

## When the user supplies an Editor's Pick

1. Use the issue named by the user. If none is named, use the next issue being prepared.
2. Check `src/content/apps/` for the app name or homepage and reuse its existing ID.
3. If it is new, verify the official homepage or canonical repository, then create a
   standard app file using the template above.
4. Add the app ID and an original 12-45 word editorial reason to the `editorsPick`
   object. The reason should say what makes the app distinctive or especially useful,
   not repeat its description.
5. Add `editors-picks` to the app file's optional `collections` array. Preserve any
   existing collection entries. Do not add `editors-picks` to `tags`.
6. Keep the app out of all regular `sections[].apps` lists.
7. Do not substitute another app unless the user asks for an alternative. If the issue
   already has a different Editor's Pick and replacement is unclear, report the conflict.
8. Run the required validation and build checks before publishing.

Previously provided Editor's Pick direction in GitHub issues, pull request comments,
prior Thursday reports or other explicit scheduled-task context counts as
editor-provided direction only after the Thursday check reports it and asks the
editor to confirm, change, reorder or remove it. Do not hard-code app names in
scheduled-task prompts, and do not infer or auto-promote Editor's Picks from an old
queue unless the editor explicitly confirmed that queue is still active. Friday may
use only the Editor's Pick confirmed during Thursday review. If no Editor's Pick was
confirmed, omit the `editorsPick` block.

Use role-based attribution in public content. Never include the editor's personal name
in an app source, issue note or other generated page copy.
