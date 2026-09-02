---
target: the Explore page
total_score: 18
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 4
timestamp: 2026-09-02T03-27-38Z
slug: src-pages-explore-index-astro
---
Method: dual-agent (A: design review · B: detector + browser evidence)

Visitor mode: **Operate**. The visitor arrives to complete a browse-and-find task across a 102-app catalogue, so heuristics 7 and 10 stay in scope rather than being marked n/a. The page presents as Operate and ships none of the operating controls, and that gap drives most of what follows. Judged as a Read surface it would score in the high twenties.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Catalogue size appears nowhere; the carousel has no position, counter or live region across 102 items. |
| 2 | Match System / Real World | 3 | Plain, Mac-native, jargon-free, but category, collection and tag are never defined and only one of the three carries counts. |
| 3 | User Control and Freedom | 2 | Grids reshuffle every load, so Back from an app page returns a different Explore; no exit from the carousel to a list. |
| 4 | Consistency and Standards | 2 | Two card templates already drifted; carousel arrows are 24px where every icon button is 44px; arrow focus is colour-only. |
| 5 | Error Prevention | 2 | Flanking carousel cards look like cards, carry `cursor: grab`, and advance the stack instead of opening the app. |
| 6 | Recognition Rather Than Recall | 2 | The discovery card is a real recognition aid; the reshuffle and the carousel undo it. |
| 7 | Flexibility and Efficiency | 1 | No search, sort, filter, count or A-Z on a 7,222px page. Every child page has more power than the front door. |
| 8 | Aesthetic and Minimalist Design | 2 | High craft, but eight interchangeable bands, 126 app cards and 808 anchors in one document. |
| 9 | Error Recovery | 1 | The only error path is the clipboard copy, and on failure the button is left visually unchanged with no message. |
| 10 | Help and Documentation | 1 | Nothing explains the three taxonomies; the carousel's only instruction is touch-only on a desktop-first page. |
| **Total** | | **18/40** | **Poor (45%), at the top of the band** |

## Design Specificity Verdict

Split, and structurally more generic than the issue page. The content is unmistakably App Waypoint: the category copy is written for the real reader, the hero dek is a genuine key to the page's own architecture, and the subscribe card names the publication's actual spine. That copy could not be lifted anywhere else.

The structure and interaction could. A discovery mega-card, eight identical three-card shelves each closing on an uppercase "More X", and a rotated-card carousel is stock catalogue furniture. Swap the six category names and the page ships unchanged for a plugin marketplace. Nothing in the composition argues that a human chose these 102 apps rather than a crawler, which is the entire positioning. The catalogue size never appears; neither does "weekly" or "curated".

The carousel is the sharpest failure, because it is not merely neutral but against the brand: the style guide says the site is calm and close to still and that motion is reserved, and the most kinetic object on the site lives on the page with the least editorial reason for motion.

## Overall Impression

The technical floor is again clean and independently confirmed: zero markup findings across the page and components, zero horizontal overflow at three viewports, zero images missing alt, zero console errors, zero failed requests, and a heading outline that is byte-identical at 1440, 900 and 375. The One Card Height Rule holds exactly, at 424px, across all eight grids and survives the client re-render.

The link check that motivated this run came back completely clean. Across the whole site, 24,665 internal references resolve, with zero missing, and `netlify.toml` carries 301s for every retired index route whose destinations all resolve. Deleting the two orphaned pages was done properly.

What is wrong is structural, and the largest problem is a direct consequence of that deletion. The catalogue front door no longer contains an index of the catalogue.

## What's Working

- The discovery mega-card is the best-designed object on the page and teaches six unfamiliar lanes in one screen: 44px icon tiles, category names in serif, a real one-sentence description per lane at 7.35:1, hairline seams, and a hover that tints only the label rather than lifting the container.
- Card discipline is exact rather than approximate. Every card in all eight grids measures 424px, and the subgrid survives the client-side re-render.
- The subscribe card extraction was correct and the component is well made: the copy button swaps its icon, updates its `aria-label`, resets after two seconds, and carries a real `execCommand` fallback.
- The carousel's `aria-hidden` bookkeeping is almost entirely right: 101 of 102 slots are hidden with every focusable child correctly given `tabindex="-1"`.

## Priority Issues

### [P1] There is no longer any way to see all 102 apps as a list

`src/pages/apps/index.astro` rendered `AppDirectory` over the full catalogue with filter, sort and count. It was deleted in `61ddba8`, and the same commit removed the carousel's escape hatch to it. Explore never absorbed the component. The only all-catalogue surface left reveals one app per interaction: 101 steps to see the catalogue.

Every child page is now more capable than its parent. A category page shows a count, a filter and a sort; Explore shows none of the three. The style guide states that Explore is the only browse index, and it currently is not an index at all.

Fix: render `AppDirectory` on Explore in place of, or immediately below, the carousel, and put the catalogue count in the hero dek.

### [P1] The page paints one set of apps, then throws it away

Confirmed by code inspection: `pickRandom` runs at build for all eight grids, the full pools are serialised to the client, `pickRandom` runs again in the browser, and `grid.innerHTML` overwrites every grid. Twenty-four server-rendered cards are discarded on every load, and the two selections disagree.

Three costs: a visible content swap on first paint; irreproducibility, since following a card and pressing Back returns a different Explore; and an argument against the product's own positioning, because a publication whose edge is human-curated selection shows a shuffle where its selection should be.

Fix: pick one mechanism. Dropping the client renderer makes the build's selection static, cacheable, indexable and Back-safe, and removes the next issue for free.

### [P1] Two card templates, already drifted

`renderCard` in the client script hand-duplicates `AppCard.astro` and has diverged: server cards carry `data-tags`, `data-collections` and `data-featured-date`; client cards carry none. Nothing consumes those attributes today, so this is latent rather than broken, but the style guide already carries a rule about this template drifting before. Dropping the client renderer deletes the duplicate.

### [P1] The carousel arrows fail the site's own focus rule and its own control standard

`:focus-visible` sets `outline: 0`, leaving focus signalled only by a colour change of roughly 1.4:1 — effectively invisible. The design system states in its own Collection Badges entry that colour alone is not a focus indicator. The arrows are also 24 by 24 at every breakpoint including coarse pointers, where the system says every icon button is a 44px circle, and on desktop they sit outside the 1160px page shell, 700px from the card they control.

Fix: use the same focus outline the carousel viewport already applies, give them 44px on coarse pointers, and bring them inside the stage.

### [P2] The three taxonomies are presented as peers and never distinguished

Six categories, two collections and 53 tag destinations sit side by side with no statement of what separates them. The card's own construction shows the gap: categories and collections get descriptions, tags get only counts, and only tags get counts at all, so the three cannot be compared by size. The deleted `categories/index.astro` already rendered a count per category and that information was simply lost.

### [P2] Eight interchangeable bands, with the conversion ask dropped into the middle

Measured section heights at 1440: 633, 634, 633, 634, 634, 634, 634, 656. Same heading weight, same grid, same closing link. Every taxonomy destination on the page is linked exactly twice, once in the discovery card and once as a "More X", so the discovery card is a table of contents for a page that then repeats itself. The subscribe card lands at 32% scroll depth, mid-browse, where nothing has concluded.

### [P2] The centre carousel card is focusable while marked hidden from assistive technology

Detector-caught and traced to source. The template emits the full-card overlay link with `tabindex="-1"` and a hardcoded `aria-hidden="true"`, and `setCardPosition` then strips `tabindex` from every anchor in the centre card, including that overlay link, while its `aria-hidden` is never updated. One element at a time, but it follows the centre card, so every card exhibits it in turn.

### [P2] Popular tag counts fail AA in light theme only

The two assessments disagreed here and both were half right. The chip label passes comfortably at 7.61:1 dark and 6.61:1 light. The count `span` inside it carries `opacity: .72`, which the label measurement did not account for. Computed against the chip ground: **4.64:1 in dark, which passes, and 3.47:1 in light, which fails** the 4.5:1 required at 12.48px. It is a genuine failure, and only in one theme.

### [P2] The footer RSS link is below the minimum target size

Measured 29.9 by 19px at every viewport, with no `::before` or `::after` enlarging it, against WCAG 2.5.8's 24px minimum. Sitewide rather than Explore-specific.

### [P3] Seven font sizes outside the documented type scale

All in `search.css`, which loads on this page, and none covered by any exception in the design system: the mobile nav search, the search input, two search-result treatments, and the RSS modal heading at two breakpoints.

## Persona Red Flags

**The documented audience, an experienced Mac user.** Comes to find a menu-bar utility. No search field on the page, no sort, no filter, no A-Z, no count. Scrolls eight screens past 24 sample cards to reach "Browse all apps", which turns out to be one card at a time. The only accelerator, arrow keys on the carousel, is undocumented and is the 177th of 191 tab stops. The fastest path is a tag chip on some card, which is signposted nowhere.

**Keyboard and screen reader.** 176 tab presses to reach the carousel. The arrows have no visible focus indicator at all. The carousel is a region with no `aria-roledescription`, no live region and no counter, so advancing announces a new card with no indication of position or that 102 exist.

**Mobile, one-handed.** The document is 13,737px, about 17 screens at 375. The carousel starts at y=12,949. Once there: two 24px chevrons 10px apart, and flanking cards bleeding off both screen edges clipped mid-word at 70% opacity. The centre card hides its tags and clamps its description, so it shows strictly less than the grid card it imitates. The RSS URL also clips 95px at this width.

## Minor Observations

- Dead code from the subscribe extraction: `Check`, `Copy` and `Rss` are still imported on Explore and never used, and `@keyframes explore-card-in` has no consumer anywhere.
- The carousel card still uses fixed `min-height` budgets on the summary, best-for and tag rows, the mechanism the design system replaced with subgrid everywhere else.
- Flanking cards carry `cursor: grab` rather than `pointer`, are plain hidden divs with no role, and clicking one advances the stack instead of opening that app: three identical-looking cards, two different click outcomes, one cursor.
- The design system is stale in two places about this page: it describes the centre card as sharing the grid card's footprint, true only above 920px, and still cites the carousel's directory link that `61ddba8` deleted.
- `/apps/` and `/categories/` 404 on the dev server. The Netlify 301s make production correct, but local review and deploy previews land on the 404 page.
- The hero wastes its right half: the dek measures 586px in a 1160px shell, and the fold carries no count, no cadence and no curation claim.
- "Still scrolling?" apologises for the page's length rather than fixing it.

## False Positives Dismissed

- Two `design-system-radius` advisories on the app icon frames at 11px and 13px. The design system names both explicitly as a deliberate exception, proportional to the icon they hold.
- 112 `gray-on-color` overlay hits on this page, and 81 and 25 on two comparison pages. Every hit is the tag chip in dark theme, measured at 7.61:1 against a 4.5 requirement. It is a stylistic rule about desaturated text on tinted grounds, not a contrast failure, and it is sitewide rather than an Explore problem.
- A `gpt-thin-border-wide-shadow` hit that fires on every page in both themes: it is the skip link in the shared layout.
- A naive link scan reporting `/apps/${app.id}/` as missing. That is a regex matching into an inline script's template literal, not a real link; all 102 app ids and all 53 tags resolve.

## Run Notes

- Target `src/pages/explore/index.astro`, slug `src-pages-explore-index-astro`. First run for this target. No ignore list present.
- Assessments A and B ran as isolated parallel sub-agents; neither saw the other's output.
- CLI detector ran on the page, components and layouts, returning zero findings, and separately on both stylesheets.
- Browser overlay ran: mutable injection confirmed, live server on port 8400, the detector injected into three routes across both themes, server stopped and verified.
- Both themes were tested by setting the stored theme key and reloading. One assessment explicitly avoided the runtime theme-flip that produced phantom contrast failures in the previous run.
- The contrast conflict between the two assessments was resolved by direct computation of the blended value, not by preferring one report.
- Not observed: the render swap as a frame-level event. It is proven by code inspection and by diffing served HTML against the live DOM, but its on-screen duration was not measured.
- Reduced motion was verified through the CSSOM rather than by live emulation, which the browser tooling does not expose.
