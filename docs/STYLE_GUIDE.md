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

### Motion

- The site is calm and close to still. Motion is reserved, not decorative.
- The divider buoy and the source-note timeline are the only motion with a voice on an
  issue page, alongside the light on the Editor's Pick card in the hero. Do not add a
  fourth.
- The homepage hero band itself stays still.
- See The Struck Light Rule in `DESIGN.md` for the pick card, and the easing tokens in
  the Motion section there for everything else.

### Editorial punctuation

- Do not use Oxford commas in App Waypoint editorial copy. In lists of three or
  more, write `A, B and C`, not `A, B, and C`.
- Do not use em dashes or en dashes in App Waypoint editorial copy. Restructure to a
  period, a comma, a colon or parentheses. Date and number ranges take a plain hyphen:
  `August 5-19, 2026`, not `August 5-19, 2026` with an en dash.
- Three things sit outside the rule. Page-title separators are an indexed SEO and
  publishing convention, so `Archive - App Waypoint` keeps its em dash. Quoted external
  titles in source notes and Weekend Reading keep the source's own punctuation, because
  changing it misquotes the source. Code comments are not copy.
- `npm run validate` enforces this across `src/content`, skipping `title:` lines so
  quoted external titles pass. See The Plain Dash Rule in `DESIGN.md` for the reasoning.

## 2. Standard Issue Structure

Every issue uses the same regular app-section spine, in this order:

1. `New Discoveries`
2. `Trending`
3. `Old Favorites`
4. `AI & Automation`
5. `Up and Coming`

These section eyebrows are fixed publication structure, not weekly theme labels. Do
not rename, omit, reorder or add regular app sections for a single issue. Weekly
editorial variation belongs in each section's `title`, app selection and supporting
copy.

Each regular app section contains exactly three app cards. If a draft lacks three
eligible apps for any required section, the issue is not ready for preview. Ask the
editor to select replacements or approve specific app-record changes before building
the release candidate.

The optional `editorsPick` module is the only app feature outside the regular
section spine. When present, it renders between `Trending` and `Old Favorites`.

## 3. Optional Editor's Pick

- An issue may name zero or one Editor's Pick with the `editorsPick` object.
- The object contains an existing `app` ID from `src/content/apps/` and a concise
  12-45 word `reason` explaining why the app stands out in that issue.
- When the user supplies an app specifically for this feature, use that selection for
  the named issue—or the next issue being prepared if none is named. Do not replace it
  with an agent-selected alternative.
- During Thursday review, pull pending Editor's Pick direction first from the Notion
  [Editor's Picks note](https://app.notion.com/p/Editor-s-Picks-3c8d6482d47f80c4bbc6ce99ed84d908?source=copy_link),
  then ask the editor to confirm, change, reorder or remove that direction before
  preparing the release candidate.
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
  `/collections/editors-picks/`.
- In the homepage hero only, the pick card carries the Struck Light treatment: it is lit
  by the featured app's own colour, drawn from the app record's `iconAccent`. The colour
  belongs to that one card and never reaches a link, control or state. Everywhere else,
  including the pick as it appears on an archived issue page, the card's layout,
  typography, spacing and styling remain unchanged.
- A pick whose app has no `iconAccent` renders the ordinary card. That is a valid result,
  not a missing step. See The Struck Light Rule in `DESIGN.md`.
- The app description is followed by `Best for`, then the issue-specific “Why it was
  chosen” note, then tags. App cards do not show a source credit: the app record's
  `source` field is editorial provenance for the review process, not reader-facing
  copy, and it is still required on every record.
- The “Why it was chosen” heading and copy align flush left with the rest of the card.
  A horizontal divider may separate the note, but do not indent it or use a vertical
  rule.
- Omit the object entirely when the issue has no Editor's Pick.

## 4. Page width and gutters

- Standalone content pages use the shared `page-shell` container rather than defining
  page-specific outer widths or horizontal padding.
- The page shell is capped at 1,160px, centered, and uses a 20px gutter on larger
  viewports and a 12px gutter on mobile.
- App detail, tag, collection, archive and about pages must use this same shell.
- Page sections may use narrower reading measures inside the shell, but app-card grids,
  archive lists and navigation callouts may use its full width.
- New standalone pages must adopt the shared shell so responsive gutters remain
  consistent across the publication.

## 5. Tag and collection directories

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

## 6. App detail pages

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
- The page is a masthead and a rail. The masthead carries the app's icon and name as one
  lockup, then the dek, Best For and the Homepage button. The rail carries the collection
  badge, categories and tags. At 920px the rail stacks under the masthead.
- The app's icon appears beside the page title. An app with no icon uses its first
  category's mark on the missing-icon colour, exactly as its cards do.
- Metadata never outranks identity. Categories read at Metadata scale as compact rows,
  tags as Label-scale chips, and the collection badge leads the rail because it is the
  rarest fact on the page. See the App Detail Page and Collection Badges entries in
  `DESIGN.md`.

## 7. Weekend Reading

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

## 8. Old Favorites

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
- Do not replace `Old Favorites` with another utility, productivity or daily-helper
  section. If a week does not yet have three eligible established apps, continue
  research or ask the editor to choose replacements before preview work proceeds.

## 9. Up and Coming

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

## 10. Editor attribution

- Refer to the editor by role only in all public website content.
- Never display the editor's personal name in app sources, issue copy, notes or
  generated pages.

## 11. App icons

App icons are part of the app record, not issue-specific markup. They should support
recognition without making cards feel like an app-store grid.

- Store app icons locally under `public/app-icons/` and reference them from app
  records with a root-relative path such as `/app-icons/app-slug.png`.
- Use official app assets from the app homepage, canonical repository or official
  product files. Prefer high-resolution product icons or Apple touch icons over small
  favicons.
- Do not use generic marketplace favicons, Product Hunt marks, GitHub organization
  avatars or unrelated publisher logos unless that asset is clearly the app's own
  identity.
- Default to `iconStyle: plain` for finished square app icons. Plain icons render
  without an added background or border so their own rounded edges stay clean.
- Use `iconStyle: backed` only for transparent icons, loose product artwork or
  identity marks that need a white backing to remain legible in dark mode. Backed
  icons use contained fitting and should not crop important artwork.
- Use `iconStyle: contain` for non-square logos or wide/tall marks that should avoid
  cropping but do not need a white backing.
- Each app icon should visually fill the fixed icon slot with the app's actual mark
  or native rounded-square icon, not a tiny mark floating inside a larger source
  canvas. If the source artwork has excessive outer whitespace, crop the local asset
  so the app identity fills the slot cleanly.
- Do not rely on extra card padding, a white backing or `contain` fitting to
  compensate for a source image that is framed poorly. Adjust the local asset,
  choose a better official source or ask the editor for direction.
- During icon review, flag any app whose icon appears too small, over-cropped,
  blurry, off-center, backed by a visible unwanted edge, mismatched to the app's
  identity or otherwise visibly weaker than the source. If the correct treatment is
  not obvious, note the specific problem and ask the editor whether to crop the
  asset, find a better official source, switch `iconStyle` or use the category
  fallback.
- Both halves of the fallback, the mark and the colour, come from
  `src/data/app-icon.ts`: `fallbackIconCategory` and `fallbackIconColor`. Do not derive
  either again in a component. The app detail page did, filtering the global category
  list, which returns an app's categories in the global order rather than the record's,
  so two apps showed one mark on their cards and a different one on their detail page.
- When no suitable official icon is available, omit the app's `icon` field. App
  cards will render the app's first category icon in a stable fallback color from
  the missing-icon palette: green `#2F8F5B`, orange `#C66A22`, blue `#2F75D6`,
  purple `#8B5CC7` or pink `#C24B7A`.
- The fallback icon is intentional editorial metadata, not a temporary broken state.
  Use it when the available homepage, repository, marketplace or search-result image
  is generic, blurry, cropped, misleading or not clearly owned by the app.
- Fallback tiles use the first entry in the app record's `categories` array, so place
  the most representative category first when an app depends on the fallback. The
  fallback color is stable from the app ID so cards do not reshuffle visually between
  builds.
- An app that may be featured as an Editor's Pick also carries `iconAccent`, the colour
  its hero card is lit with. Generate it with `node scripts/extract-icon-accent.mjs
  <app-id> --write` rather than choosing a value by hand, so every pick lands in the same
  lightness and chroma band. The script reads PNG icons; an SVG icon or an icon with no
  usable hue needs an editor decision, and leaving `iconAccent` off is a valid answer.
- Review a new `iconAccent` on the homepage in light mode, dark mode and mobile. The
  colour should read as light falling across the card, never as a coloured panel.
- When an app appears in a new issue, check whether its app record already has a
  suitable icon. Add or update the icon during the same app-record pass when it is
  missing, generic, cropped, blurry or visually misleading.
- Review every new or changed icon in light mode, dark mode and mobile. Confirm
  transparent icons remain legible, square app icons do not show unwanted backing
  edges and app names stay vertically centered beside the icon.
- The all-app icon rollout applies to every app-card view, including the homepage,
  current issue, archived issues, app directory, tag pages, collection pages and
  related-app cards.
- When changing the app card icon structure, keep any client-rendered card templates
  in sync with the shared `AppCard` component. The Explore page re-renders randomized
  sections in the browser and must preserve icon images, fallback tiles, category
  icons and `iconStyle` behavior.

## 12. Issue publishing checklist

Complete every item before merging a new issue:

- [ ] The issue follows `docs/ISSUE_TEMPLATE.md` and references existing app IDs.
- [ ] The issue preserves the standard app-section spine exactly:
      `New Discoveries`, `Trending`, `Old Favorites`, `AI & Automation`,
      `Up and Coming`.
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
- [ ] Every app featured in the issue has a reviewed icon record, or a documented
      reason the icon is intentionally deferred.
- [ ] The Editor's Pick app has a reviewed `iconAccent`, or a documented reason the pick
      renders without the Struck Light treatment.
- [ ] The issue includes an `rss` block with a concise issue-specific title and the
      standard `Read this issue` CTA.
- [ ] The built `/rss.xml` feed includes every published issue exactly once, newest-
      first, with stable GUIDs, correct publication dates, correct issue URLs, the
      issue-specific RSS title, the issue-number-prefixed summary and the linked CTA.
- [ ] Copy meets the editorial limits, avoids Oxford commas, avoids em dashes and en
      dashes, and uses role-based editor attribution.
- [ ] Light mode, dark mode, mobile layout, keyboard access and reduced motion remain
      intact.
- [ ] `npm run validate` passes, including the repository privacy check.
- [ ] `npm run build` passes.
- [ ] Required GitHub checks and the Netlify Deploy Preview succeed.
- [ ] The production homepage and permanent issue URL are verified after merge and
  Netlify production deployment.
