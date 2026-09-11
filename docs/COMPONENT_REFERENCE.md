# Current component reference

Use the production components and their shared styles as implementation guidance.
Review the routes below on the local preview, in both themes and at the relevant
viewport widths. Paths are relative to the site origin.

| Component | Markup source | Style source | Where to review |
| --- | --- | --- | --- |
| Primary button | `src/pages/apps/[app].astro` | `src/styles/global.css` (`.button`) | `/apps/cleanshot/`, app actions |
| Secondary button | `src/pages/archive.astro` | `src/styles/global.css` (`.button.secondary`, `.archive-more`) | `/archive/`, Load More when further issues are available |
| Tag chip | `src/components/AppCard.astro` | `src/styles/global.css` (`.tag`) | `/explore/`, app card tags |
| App card | `src/components/AppCard.astro` | `src/styles/global.css` (`.app-card`) | `/explore/`, app grid |
| Site header | `src/layouts/BaseLayout.astro` | `src/styles/global.css`, `src/styles/search.css` | Any route; desktop navigation and mobile menu |
| Directory controls | `src/components/AppDirectory.astro` | `src/styles/global.css` | `/explore/`, search, Filter and Sort, including open panels |
| Search dialog | `src/layouts/BaseLayout.astro` | `src/styles/search.css` | Any route; open Search, enter a query and move through results |

The [design rules](../DESIGN.md) and current metadata in
`.impeccable/design.json` describe the contracts these components share. Labels and
content in the rendered page come from the publication, not a copied example.

## Retired gallery

On 7 September 2026, the seven handwritten `ds-*` previews were removed from the
active sidecar. Their dimensions, typography and focus treatments had diverged from
the website. The exact examples are preserved in
[the dated archive](archive/design-component-gallery-2026-09-07.json) for historical
comparison only. Do not copy their CSS into the site or restore them as current previews.

The Impeccable panel reads `sidecar.components` and only renders component tiles when
that array is nonempty. It now receives an empty array; its token and narrative sections
remain available. Its server and design detector still read the active sidecar at the
same path. No tooling is redirected to the archive, and no public website route imports it.

A future gallery should render the real Astro components with their production styles.
Until that exists, review components in the routes above rather than maintaining a
second set of HTML and CSS. The repository's existing validation checks do not constitute
a browser regression suite; that work remains a separate audit item.
