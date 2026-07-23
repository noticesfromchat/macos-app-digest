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
