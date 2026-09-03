/**
 * The Open Graph card contract: what a card says, how big it is and where it
 * lives. Kept apart from the renderer in `og-card.ts` so a page can name its own
 * card without pulling Satori and resvg into the page's module graph.
 *
 * Both the endpoint that draws the cards and the pages that point at them read
 * their paths from here, so a card and its `og:image` cannot disagree.
 */

/** Serves Open Graph and a Twitter `summary_large_image` from one file. */
export const OG_SIZE = { width: 1200, height: 630 } as const;

export type OgCard =
  /* The homepage takes the masthead itself: wordmark, water, tagline. */
  | { layout: 'brand'; dek: string }
  /* Issues and About open the way a page does, under an eyebrow. */
  | { layout: 'page'; eyebrow: string; title: string; dek: string }
  /* An app page carries its own identity block: the icon on its plate, the name,
     what it does, and who it is for. Every field is already in the app record. */
  | {
      layout: 'app';
      name: string;
      description: string;
      bestFor: string;
      icon: OgAppIcon;
    };

/** How an app's mark is drawn, mirroring `iconStyle` and the category fallback. */
export type OgAppIcon =
  | { kind: 'plain' | 'backed' | 'contain'; src: string }
  /* No icon of its own: the first category's mark, white on its stable colour. */
  | { kind: 'fallback'; lucide: string; background: string };

export const appOgSlug = (id: string) => `app-${id}`;

export const ogPath = (slug: string) => `/og/${slug}.png`;

/* Prefixed so two lanes that share a name cannot collide: an app, a tag and a
   category could all reasonably be called "shortcuts". */
export const tagOgSlug = (tag: string) => `tag-${tag}`;
export const categoryOgSlug = (slug: string) => `category-${slug}`;
export const collectionOgSlug = (slug: string) => `collection-${slug}`;

export const issueOgSlug = (number: string) => `issue-${number}`;
