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
- When present, the module renders between Trending and Old Favorites.
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

## 3. Page width and gutters

- Standalone content pages use the shared `page-shell` container rather than defining
  page-specific outer widths or horizontal padding.
- The page shell is capped at 1,160px, centered, and uses a 20px gutter on larger
  viewports and a 12px gutter on mobile.
- App detail, tag, collection, archive and about pages must use this same shell.
- Page sections may use narrower reading measures inside the shell, but app-card grids,
  archive lists and navigation callouts may use its full width.
- New standalone pages must adopt the shared shell so responsive gutters remain
  consistent across the publication.

## 4. Tag and collection directories

- Tag and collection pages share the same sortable app-directory component.
- Apps default to A–Z order.
- Available sorting options are A–Z, Z–A and Date featured.
- Date featured sorts by the app's most recent issue appearance, newest first, with
  app name as the tie-breaker.
- Filter-option counts are contextual to the page's starting app set. On a tag page,
  each count is the number of apps that share that page tag; on a collection page,
  each count is the number of apps within that collection.
- Omit filter options whose contextual count is zero. Options and counts are generated
  automatically from app content during each Astro build.
- Place a compact grid toolbar immediately above the app cards on every viewport:
  show the app count on the left and keep the sort control right-aligned.
- Keep the toolbar visually connected to the grid with a 16px gap.
- Do not display a separate “Sort apps” label.
- Prefer durable discovery tags over narrow implementation details. Before creating a
  new tag, check whether an existing tag already covers the reader intent. If a new
  tag is necessary, audit existing app records for the same tag during the same
  publishing pass.
- Run a tag audit every four issues, and produce a before/after map for editorial
  review before changing app records. Remove or consolidate tags that are redundant,
  too narrow, vague, or unlikely to remain useful as the catalog grows.

## 5. App detail pages

- Every app record generates an individual detail page at `/apps/{app-id}/`.
- App cards link internally to the generated detail page.
- App title links and explicit homepage links remain outbound to the official app
  homepage or canonical repository.
- Search results link to generated app detail pages so search behaves as internal site
  navigation.
- Detail pages use the existing app Markdown fields; do not duplicate app copy in
  issue files or hand-authored page markup.
- Detail pages may show related apps based on shared tags and compact links to related
  tag landing pages.

## 6. Weekend Reading

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

## 7. Old Favorites

- `Old Favorites` is a standard three-card app section for established Mac apps
  that are still worth surfacing because they remain especially useful,
  overlooked or repeatedly recommended by the community.
- Favor apps that are not new, but still come up in forums, Reddit or Product
  Hunt comments as strong examples of useful software.
- Render it after the Editor's Pick and before AI & Automation.
- Use the standard app-card grid without a special badge, icon or alternate card
  style.
- Every featured app must belong to the `community-favorites` collection. Add
  `community-favorites` to each app record's `collections` array while preserving
  any existing collection entries.
- Keep the section focused on rediscovery and durable value rather than novelty.

## 8. Up and Coming

- `Up and Coming` is a standard three-card app section built from the current
  `r/macapps` App Pile moderator selections and other approved recent-launch sources.
- Never repeat an app from the immediately preceding issue. When an App Pile selection
  would repeat, replace it with a verified recent discovery from Product Hunt's Mac
  launches or another approved source.
- Render it after AI & Automation and before the route divider, video and reading
  features.
- Use the standard app-card grid without a special badge, icon or alternate card style.
- Preserve the megathread's order for eligible selections, then place alternates in
  editorial order.
- The section title should describe the three selections as community discoveries
  without implying that App Waypoint independently ranked them.

## 9. Editor attribution

- Refer to the editor by role only in all public website content.
- Never display the editor's personal name in app sources, issue copy, notes or
  generated pages.

## 10. Issue publishing checklist

Complete every item before merging a new issue:

- [ ] The issue follows `docs/ISSUE_TEMPLATE.md` and references existing app IDs.
- [ ] Every new app uses its official homepage or canonical repository.
- [ ] No app is duplicated within the issue or repeated from the immediately previous
  issue where the publishing rules prohibit it.
- [ ] The Editor's Pick, if present, was supplied or approved by the editor, appears
      only once and belongs to the `editors-picks` collection.
- [ ] Old Favorites contains exactly three eligible apps, highlights established
      apps that are still recommended, overlooked or exceptional, and every featured
      app belongs to the `community-favorites` collection.
- [ ] Weekend Reading contains three direct article links, with at least two focused
      primarily on apps, workflows or app developers.
- [ ] Up and Coming contains exactly three eligible apps and records its sources.
- [ ] The issue includes an `rss` block with a concise issue-specific title and the
      standard `Read this issue` CTA.
- [ ] The built `/rss.xml` feed includes every published issue exactly once, newest-
      first, with stable GUIDs, correct publication dates, correct issue URLs, the
      issue-specific RSS title, the issue-number-prefixed summary and the linked CTA.
- [ ] Copy meets the editorial limits and uses role-based editor attribution.
- [ ] Light mode, dark mode, mobile layout, keyboard access and reduced motion remain
      intact.
- [ ] `npm run validate` passes, including the repository privacy check.
- [ ] `npm run build` passes.
- [ ] Required GitHub checks and the Netlify Deploy Preview succeed.
- [ ] The production homepage and permanent issue URL are verified after merge and
  Netlify production deployment.
