# New Issue Template

Copy the frontmatter below into a new file named `src/content/issues/YYYY-MM-DD.md`. The filename and `slug` must match.

Before creating the issue, add a Markdown file under `src/content/apps/` for every app ID that does not already exist. Reuse existing app IDs rather than duplicating app records.

```yaml
---
number: '002'
slug: 2026-07-17
date: July 17, 2026
dek: Write one concise 18-45 word sentence that previews the issue without listing every item.
sections:
  - eyebrow: New Discoveries
    title: A concise editorial section title
    apps: [first-app-id, second-app-id, third-app-id]
  - eyebrow: Trending
    title: A concise editorial section title
    apps: [fourth-app-id, fifth-app-id, sixth-app-id]
  - eyebrow: AI & Automation
    title: A concise editorial section title
    apps: [seventh-app-id, eighth-app-id, ninth-app-id]
  # Read the current r/macapps App Pile megathread and use its moderator-authored
  # “Top 3 From Last Month's Megathread” selections in the published order.
  - eyebrow: Up and Coming
    title: Three community favorites worth watching
    apps: [first-app-pile-id, second-app-pile-id, third-app-pile-id]
# Optional: omit this block when the issue does not have an Editor's Pick.
# The selected app renders once in a full-width card between Trending and AI & Automation.
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

```yaml
---
name: App Name
description: Write exactly one concrete 12-35 word sentence explaining the app's primary job.
bestFor: Write exactly one 8-24 word sentence describing a recognizable user or workflow.
tags: [productivity, utility, menubar]
# Optional editorial curation. Required for an Editor's Pick; preserve other values.
# collections: [editors-picks]
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

`editorsPick` is optional and accepts exactly one app ID plus a 12-45 word editorial
reason. The app must already exist in `src/content/apps/` and must not also appear in
one of the issue's regular sections.

Weekend Reading must follow the curation rules in `AGENTS.md`: cover the broader Mac
app ecosystem, make at least two selections primarily about apps, and use general
Apple coverage only when it has a meaningful connection to Mac software or workflows.
High-signal `r/macapps` discussions are valid sources when the post is substantive and
unusually useful or popular.

The `Up and Coming` section is sourced specifically from the current `r/macapps` App
Pile megathread. Check that thread on every weekly run and copy its explicit
moderator-authored “Top 3 From Last Month's Megathread” selections in order. Verify
their official links, reuse existing app records, create missing records, and credit
the thread in `sourceNotes`. Do not substitute apps based on raw votes. If the thread
does not publish an official top three, omit the section rather than guessing.

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
