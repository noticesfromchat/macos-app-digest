# App Waypoint Style & Brand Guide

This document is the design and publishing source of truth for the App Waypoint website. Read it before creating a new issue or changing any page, component, shared asset or content entry.

## 1. Brand direction

The site should feel like a small, premium editorial publication for experienced Mac users.

### Core qualities

- Mac-native
- restrained
- editorial rather than dashboard-like
- highly legible
- technically polished
- calm, useful and slightly playful

## 2. Optional Editor's Pick

- An issue may name zero or one Editor's Pick with the `editorsPick` object.
- The object contains an existing `app` ID from `src/content/apps/` and a concise
  12-45 word `reason` explaining why the app stands out in that issue.
- When the user supplies an app specifically for this feature, use that selection for
  the named issue—or the next issue being prepared if none is named. Do not replace it
  with an agent-selected alternative.
- Reuse an existing app record when one exists. Otherwise, verify the official homepage
  or canonical repository and create one standard app file before referencing it.
- The selected app's file must include `collections: [editors-picks]`, preserving any
  other collection entries already present. Collections express editorial curation;
  `editors-picks` must not be added to the app's functional tags.
- App copy is never duplicated in the issue file.
- The reason should explain a concrete quality, distinctive capability or practical
  workflow value. It should not repeat the description or read like marketing copy.
- The selected app must not also appear in a regular issue section.
- When present, the module renders between Trending and AI & Automation.
- It uses the standard section eyebrow and heading, followed by one full-width card.
- The full-width card displays the Lucide `book-heart` icon beside the app title when
  the app belongs to the `editors-picks` collection. The icon links to
  `/collections/editors-picks/`. Otherwise the card's existing layout, typography,
  spacing and styling remain unchanged.
- The app description is followed by `Best for`, then the issue-specific “Why it was
  chosen” note, tags and source information.
- The “Why it was chosen” heading and copy align flush left with the rest of the card.
  A horizontal divider may separate the note, but do not indent it or use a vertical
  rule.
- Omit the object entirely when the issue has no Editor's Pick.

## 3. Tag and collection directories

- Tag and collection pages share the same sortable app-directory component.
- Apps default to A–Z order.
- Available sorting options are A–Z, Z–A and Date featured.
- Date featured sorts by the app's most recent issue appearance, newest first, with
  app name as the tie-breaker.
- Filter-option counts are contextual to the page's starting app set. On a tag page,
  each count is the number of apps that share that page tag; on a collection page,
  each count is the number of apps within that collection.
- Place a compact grid toolbar immediately above the app cards on every viewport:
  show the app count on the left and keep the sort control right-aligned.
- Keep the toolbar visually connected to the grid with a 16px gap.
- Do not display a separate “Sort apps” label.

## 4. Weekend Reading

- Weekend Reading covers the wider Mac app ecosystem, not only Apple company or
  platform news.
- At least two of the three selections should primarily concern apps, app discovery,
  app workflows or app developers.
- Good candidates include substantive app stories, credible must-try or best-app
  lists, practical workflows, developer posts, notable releases and unusually
  high-signal discussions from `r/macapps`.
- Apple coverage may be included when it has a meaningful connection to Mac apps or
  software workflows.
- Prefer original, specific and useful sources. Avoid thin listicles, routine news
  summaries and promotional posts whose popularity does not translate into reader
  value.

## 5. Up and Coming

- `Up and Coming` is a standard three-card app section sourced from the current
  `r/macapps` App Pile megathread's moderator-authored top-three block.
- Render it after AI & Automation and before the route divider, video and reading
  features.
- Use the standard app-card grid without a special badge, icon or alternate card style.
- Preserve the order published by the megathread.
- The section title should describe the three selections as community discoveries
  without implying that App Waypoint independently ranked them.
