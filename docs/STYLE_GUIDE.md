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
- **Motion is rationed by purpose, not by count.** There is no budget of animations per
  page. An animation belongs if it acknowledges an action, makes a state change or a
  spatial relationship legible, preserves continuity through a change, or marks a moment
  the surface has earned. If it does none of those it is decoration, and being the only
  one on the page does not redeem it. See The Earned Motion Rule in `DESIGN.md`.
- Two things follow from that and are not negotiable: every animation needs a
  `prefers-reduced-motion` path that reduces movement without erasing the meaning it
  carries, and anything that loops stops while it is off screen.
- The archive carries two of its own. The pilot beacon marks which stop the reader is
  at, resting in a ring and moving once when that changes. The origin answers with a
  three-pulse ping when the reader reaches it, the same beacon the RSS mark uses. See
  The Pilot Rule and The Landfall Ping in `DESIGN.md`.
- The two wave bands are the exception, because they are not asking to be noticed. They
  swell without anything travelling, below the still water level, paused off screen and
  stopped under reduced motion. See The Swell Rule in `DESIGN.md`. Motion that wants
  attention still needs to earn it; ambience is held to a different test.
- The homepage hero band itself stays still.
- See The Struck Light Rule in `DESIGN.md` for the pick card, and the easing tokens in
  the Motion section there for everything else.

### Editorial punctuation

- Do not use Oxford commas in App Waypoint editorial copy. In lists of three or
  more, write `A, B and C`, not `A, B, and C`.
- **A list item takes no full stop at its end**, even when it runs to several
  sentences. Sentences inside the item are punctuated normally, so a bold lead-in
  keeps its own: `**It's alive.** Still being updated by someone paying attention`.
  A bullet is a fragment in a list, not a sentence in a paragraph, and the trailing
  stop is the tell that it was written as prose and then chopped up. The selection
  criteria on the About page are the pattern.
- Write an issue number two digits wide wherever a reader sees it: `Issue 08`, not
  `Issue 008`. The frontmatter keeps three digits because the schema fixes the width.
  Never format the number by hand: use `issueLabel` or `issueName` from
  `src/data/issue.ts`, which every surface reads from. See The Two Digit Issue Rule in
  `DESIGN.md`.
- Do not use em dashes or en dashes in App Waypoint editorial copy. Restructure to a
  period, a comma, a colon or parentheses. Date and number ranges take a plain hyphen:
  `August 5-19, 2026`, not `August 5-19, 2026` with an en dash.
- Three things sit outside the rule. Page-title separators are an indexed SEO and
  publishing convention, so `Archive - App Waypoint` keeps its em dash. Quoted external
  titles in source notes and Weekend Reading keep the source's own punctuation, because
  changing it misquotes the source; source notes are no longer published, but they are
  still written and still validated, so the exception still governs how they are
  recorded. Code comments are not copy.
- `npm run validate` enforces both rules across `src/content`, `src/pages`,
  `src/components`, `src/layouts` and `src/data`, so copy written straight into a
  component or a layout is checked like copy written into an issue file. The exemptions
  live in the checker rather than in the choice of folders: comments are stripped before
  a line is tested, with block state carried across lines so a multi-line comment stays
  exempt, and any line assigning or passing a `title` keeps its dash. See The Plain Dash
  Rule in `DESIGN.md` for the reasoning.

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

Across the full app slate, including the optional Editor's Pick, do not select more
than two apps from any single discovery source. Product Hunt, `r/macapps` and the
editor's
[App Selections note](https://app.notion.com/p/App-selections-3d1d6482d47f8069b146c4dfec0c0c43?source=copy_link)
each count as separate sources under this cap. Use the Notion review page to present
over-cap choices and verified alternates as checkbox decisions before building the
release candidate.

Below the spine every issue closes the same way, in this order: `Video of the Week`,
`Weekend Reading`, then the RSS subscribe card. The first two are authored in the
issue's frontmatter like any other section. The subscribe card is shared with Explore
and is generated by the issue template, so it needs no frontmatter, no per-issue
decision and no review. Do not write it into an issue file.

The public `Keep Exploring` closer was removed from issue pages on 2026-09-01, after
the `Source Notes` section had already retired from the page. `sourceNotes` is still
recorded in every issue's frontmatter as the editorial audit trail, and nothing renders
it. See Issue Subscribe Card in `DESIGN.md` for the structure and the reasoning.

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
  the app belongs to the `editors-picks` collection. The icon is an editorial marker,
  not a separate link.
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
- The global header exposes Explore Apps, Archive, About, an icon-only Lucide Search
  control and the icon-only theme toggle on desktop. Mobile keeps those destinations in
  the navigation dialog.
- Every page includes one keyboard skip link from the top of the document to the main
  content landmark.

## 5. Tag and collection directories

- Explore is the only browse index, and it contains the index: the taxonomy card over
  `AppDirectory` across the whole catalogue. Do not create standalone `/apps/`, `/tags/`,
  `/collections/` or `/categories/` index pages; those roots redirect to `/explore/`.
- Explore must never be less capable than the pages beneath it. It carried no count, no
  filter and no sort until 2026-09-01, while every tag, collection and category page had
  all three.
- Tag and collection pages share the same sortable app-directory component.
- **Tag and collection titles carry a tagline**, the same way app pages do:
  `{lane} Mac Apps — {tagline} — App Waypoint`. Tag titles ran between 26 and 37
  characters against the roughly 60 a search result shows, the widest gap of any page
  type here. Both maps live in `src/data/lanes.ts` beside the titles they extend.
- **Categories deliberately have none.** `Mac Utilities & Customization Mac Apps —
  App Waypoint` is already 53 characters, so four of the six have no room for one.
  Adding it to the two that do would make the page type inconsistent for little gain.
- **A tag's display name is not its slug sentence-cased.** Initialisms and product
  names spelled a particular way are held in `tagDisplayNames`: `ai` is AI, `ios` is
  iOS, `quicklook` is Quick Look. Until 2026-09-04 only `rss` was handled and the rest
  shipped as `Ai`, `Cli`, `Ios`, `Pdf`, `Airdrop`, `Menubar` and `Quicklook` in titles,
  headings and social cards alike. Add to the map rather than adding another branch.
- Apps default to A–Z order.
- Available sorting options are A–Z, Z–A and Date featured.
- Date featured sorts by the app's most recent issue appearance, newest first, with
  app name as the tie-breaker.
- Filter-option counts are contextual to the page's starting app set. On a tag page,
  each count is the number of apps that share that page tag; on a collection page,
  each count is the number of apps within that collection.
- Omit filter options whose contextual count is zero. Options and counts are generated
  automatically from app content during each Astro build.
- Place one always-visible directory-control group immediately above the app cards. The live
  count leads, followed by the visible `Search apps` field, Filter and Sort. Collections and
  Tags stay inside Filter. Keep the trigger labels as `Filter` and `Sort` regardless of
  selection, and count only selected facets in the Filter badge.
- The query narrows the current grid in place. It matches name, description, `bestFor`,
  source and tags, reads from rendered card data and does not navigate when Enter is pressed.
- Query, optional collection filters, optional tag filters and sort are shareable URL state.
  Restore them on load and use `replaceState` while typing. Never duplicate or clear the
  tag, collection or category already defined by the page path.
- Keep the controls visually connected to the grid with a 16px gap and use compact 52px
  desktop controls. When the app grid collapses to one column, give the count and search field
  their own full rows, then split Filter and Sort across the row beneath them. Keep a 16px
  mobile input floor.
- On Explore, keep the full category descriptions on larger screens and category pages. Below
  680px, substitute the approved shorter descriptions and remove fixed row height so the six
  category links remain useful without delaying the catalogue. Put taxonomy explanations in
  normal flow beneath their headings, never in overlays that cover the first result row.
- When a query produces no results, name the query safely with `textContent` and offer to
  clear only the query, preserving every other active filter.
- Do not display a separate “Sort apps” label.
- Prefer durable discovery tags over narrow implementation details. Before creating a
  new tag, check whether an existing tag already covers the reader intent. If a new
  tag is necessary, audit existing app records for the same tag during the same
  publishing pass.
- Run a tag audit every four issues, and produce a before/after map for editorial
  review before changing app records. Remove or consolidate tags that are redundant,
  too narrow, vague, or unlikely to remain useful as the catalog grows.
- `docs/TAG_AUDIT.md` is the method: how to take the census, how to judge a tag that
  carries a single app, how to rank the weakest tag on a record at the six-tag ceiling,
  and how to keep `src/data/categories.ts` and the Netlify redirects in step.
- Some single-app tags are protected and must not be retired in a routine audit. The
  list and the reason for each is in `docs/TAG_AUDIT.md`.

## 6. App detail pages

- Every app record generates an individual detail page at `/apps/{app-id}/`.
- App cards and app title links route internally to the generated detail page, giving
  each app card one app destination.
- Official homepage links remain outbound to the official app homepage or canonical
  repository and live on app detail pages.
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
- **The page title carries a `tagline`.** The pattern is
  `{name} for Mac — {tagline} — App Waypoint`. Without one the title ran to a median of
  31 characters against the roughly 60 a search result shows, so half of every result
  line went unused on the site's largest page type.
- Write the tagline for the title and nowhere else. It says what the app **is**, not who
  it is for: `bestFor` is audience-first and `description` is verb-first, which is why
  neither is derived into it. Keep it to about 16 to 20 characters. The budget is
  whatever the app's own name leaves behind, and the longest name leaves 11.
- Do not spend it on words the title already carries. It sits beside "for Mac" and the
  app's own name, so neither belongs in it: `Meta AI for Mac — Meta assistant for Mac`
  wastes a third of the line. Aim to land between 50 and 60 characters assembled, and
  never on 60 exactly, because the real limit is pixel width rather than a character
  count.

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
- **128px square is the target, and the ceiling is firm.** Anything larger is resized
  down, because the site renders icons at 44px and 76px and oversized files were once
  shipping 12 MB to do it. Below the target, prefer a better source: since 2026-09-03 the
  icon also carries the app's Open Graph card at 112px, where a 32px or 64px favicon is
  visibly soft. A smaller source that is the best available is resized up and used rather
  than refused. The category fallback is a vector mark and stays sharp at any size, so it
  is the right answer when a source is too poor to be worth showing, but it trades the
  app's own identity for that sharpness and 27 to 40 apps share each mark. Which loss is
  worse is a judgment about the artwork, not a consequence of a pixel count.
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
- Check that a new icon is what its extension claims. One file was a Windows ICO
  named `.png`: browsers sniff the content so it rendered, but the repository's own
  tooling could not read it, and an ICO's largest layer is usually 48px, which is
  favicon territory rather than a product icon.
- Keep icons at 8-bit. A 16-bit PNG carries no visible benefit at these sizes and one
  was 4.1MB on its own, for a mark that renders at 76px at most. 512px is generous.
- An icon exported onto an opaque canvas rather than onto transparency shows its
  background in the corners: invisible in dark mode, a hard frame around the mark in
  light. Check the corners of a new icon, not just how it looks in the theme you are
  in. App Store assets on Apple's own CDN are official product files and are usually
  exported correctly.
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
- Fallback tiles use the first entry in the app record's `categories` array, unless the
  editor directs otherwise with `iconCategory`. That field names which category's mark
  an icon-less app should carry, and it must be one of the app's own categories.
- Direct it with `iconCategory`, never by reordering `categories`. That line is derived
  from the app's tags and rewritten by `scripts/sync-app-categories.mjs`, so a manual
  reorder fails validation and would be overwritten on the next sync. MapOS is the
  worked example: its tags put `ai-agents` first, but it is a map app, so it carries
  `iconCategory: productivity-workflow`.
- The fallback color is stable from the app ID rather than the category, so directing
  the mark does not change the colour and cards do not reshuffle between builds.
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
- [ ] No discovery source contributes more than two apps to the issue's full app
      slate, including the optional Editor's Pick.
- [ ] The Editor's Pick, if present, was supplied or approved by the editor, appears
      only once and belongs to the `editors-picks` collection.
- [ ] Old Favorites contains exactly three eligible apps, highlights established
      apps that are still recommended, overlooked or exceptional, and every featured
      app belongs to the `community-favorites` collection.
- [ ] Weekend Reading contains three direct article links, with at least two focused
      primarily on apps, workflows or app developers.
- [ ] Up and Coming contains exactly three eligible apps and records its sources in
      `sourceNotes`, which is kept for review and is not rendered on the site.
- [ ] Every app featured in the issue has a reviewed icon record, or a documented
      reason the icon is intentionally deferred.
- [ ] The Editor's Pick app has a reviewed `iconAccent`, or a documented reason the pick
      renders without the Struck Light treatment.
- [ ] The `rss` title is a headline, not a sentence: title case and no full stop. It is
      also the issue page's title, sitting beside the issue label, so the assembled
      `{rss.title} — Issue NN — App Waypoint` stays under 60 characters. The 90-character
      schema cap is right for a feed entry and far too loose for a search result; issue
      09 shipped a 55-character sentence that assembled to 82.
- [ ] The issue includes an `rss` block with a concise issue-specific title and the
      standard `Read this issue` CTA.
- [ ] The built `/rss.xml` feed includes every published issue exactly once, newest-
      first, with stable GUIDs, correct publication dates, correct issue URLs, the
      issue-specific RSS title, the issue-number-prefixed summary and the linked CTA.
- [ ] Copy meets the editorial limits, avoids Oxford commas, avoids em dashes and en
      dashes, and uses role-based editor attribution.
- [ ] The issue's Open Graph card built at `/og/issue-NNN.png` and reads correctly. It is
      generated from the issue's own number, date, `rss.title` and dek, so there is no
      asset to prepare; the check is that the title fits the card and the dek reads well
      where it is trimmed. See Social Cards in `DESIGN.md`.
- [ ] Light mode, dark mode, mobile layout, keyboard access and reduced motion remain
      intact.
- [ ] `npm run validate` passes, including the repository privacy check.
- [ ] `npm run build` passes.
- [ ] Required GitHub checks and the Netlify Deploy Preview succeed.
- [ ] The production homepage and permanent issue URL are verified after merge and
  Netlify production deployment.
