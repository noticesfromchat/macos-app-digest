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
  /* Issues share the editorial cover without a taxonomy icon. */
  | { layout: 'issue'; eyebrow: string; title: string; dek: string }
  /* General pages open under an eyebrow; taxonomy pages add an icon. */
  | { layout: 'page'; eyebrow: string; title: string; dek: string; icon?: string }
  /* A lane posted to X as media rather than as a link: its mark and name over a
     portrait list of its apps, each icon beside its own description. It has no
     page of its own and no overlay to clear, so it carries no brand row. */
  /* An issue has no mark of its own, so it names itself instead: the issue number and
     date in a small label above the headline. A fixed `height` and each app's
     `opacity` and `rise` exist for the animated issue GIF, whose frames are this same
     card with its rows part way into place; a still card sets none of them. */
  | {
      layout: 'list';
      title: string;
      icon?: string;
      eyebrow?: string;
      height?: number;
      apps: { name: string; description: string; icon: OgAppIcon; opacity?: number; rise?: number }[];
    }
  /* An app posted to X as media: the list layout's header with the app's own
     icon in place of a lane mark, then what it does and who it is for. */
  | { layout: 'feature'; name: string; icon: OgAppIcon; description: string; bestFor: string }
  /* An app page carries its own identity block: the icon on its plate, the name,
     and what it does. Every field is already in the app record. */
  | {
      layout: 'app';
      name: string;
      description: string;
      icon: OgAppIcon;
    };

/** How an app's mark is drawn, mirroring `iconStyle` and the category fallback. */
export type OgAppIcon =
  /* `inset` is the transparent margin some sources draw around the icon, as a
     fraction of the side. The plate crops it so every icon fills the same frame. */
  | { kind: 'plain' | 'backed' | 'contain'; src: string; inset?: number }
  /* No icon of its own: the first category's mark, white on its stable colour. */
  | { kind: 'fallback'; phosphor: string; background: string };

export const appOgSlug = (id: string) => `app-${id}`;

export const ogPath = (slug: string) => `/og/${slug}.png`;

/* Prefixed so two lanes that share a name cannot collide: an app, a tag and a
   category could all reasonably be called "shortcuts". */
export const tagOgSlug = (tag: string) => `tag-${tag}`;
export const categoryOgSlug = (slug: string) => `category-${slug}`;
export const collectionOgSlug = (slug: string) => `collection-${slug}`;

export const issueOgSlug = (number: string) => `issue-${number}`;
