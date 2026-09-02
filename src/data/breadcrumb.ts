/* One trail per page, used twice: once for the visible list and once for the
   BreadcrumbList in the page's JSON-LD graph. They are built from the same array on
   purpose. Google's guidance is that structured data describes what a reader can see,
   and the only way to keep that true over time is to give the two one source.

   App pages route through Explore rather than a category. 92 of the 102 apps carry more
   than one category (up to four), and the `categories` array is derived from tags and
   rewritten by scripts/sync-app-categories.mjs, so its first entry carries no editorial
   meaning and would change under the page without anyone deciding it had. Explore is the
   honest parent: it is the one page that contains every app. */

export type Crumb = {
  label: string;
  /** Omitted on the last crumb, which is the page you are on and is not a link. */
  href?: string;
};

const HOME: Crumb = { label: 'Home', href: '/' };
const EXPLORE: Crumb = { label: 'Explore', href: '/explore/' };
const ARCHIVE: Crumb = { label: 'Archive', href: '/archive/' };

export const appTrail = (name: string): Crumb[] => [HOME, EXPLORE, { label: name }];

export const issueTrail = (number: string): Crumb[] => [
  HOME,
  ARCHIVE,
  { label: `Issue ${number}` }
];

/** Categories, collections and tags are the three lanes Explore opens onto. */
export const laneTrail = (title: string): Crumb[] => [HOME, EXPLORE, { label: title }];

export const exploreTrail = (): Crumb[] => [HOME, { label: 'Explore' }];

/** The BreadcrumbList node for the page's JSON-LD graph. */
export const breadcrumbSchema = (trail: Crumb[], site: URL | undefined) => ({
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.label,
    /* The last crumb is the current page and carries no `item`, which is what Google
       expects for the end of a trail. */
    ...(crumb.href ? { item: new URL(crumb.href, site).href } : {})
  }))
});
