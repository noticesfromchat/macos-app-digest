import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

import { renderOgCard } from '../../data/og-card';
import { tagIcons } from '../../data/tag-icons';
import {
  appOgSlug,
  categoryOgSlug,
  collectionOgSlug,
  issueOgSlug,
  tagOgSlug,
  type OgAppIcon,
  type OgCard
} from '../../data/og';
import { categories, collections as collectionMetadata } from '../../data/categories';
import { collectionDek, collectionTitle, laneEyebrow, tagDek, tagTitle } from '../../data/lanes';
import { issueLabel } from '../../data/issue';
import { siteCopy } from '../../data/site-copy';
import { fallbackIconColor, fallbackIconCategory } from '../../data/app-icon';

/**
 * One Open Graph card per page. Every URL in the sitemap now carries its own,
 * so nothing falls back to a shared brand image any more.
 *
 * Three shapes cover them: the homepage masthead, the app identity block, and the
 * page opening that issues, About and every lane share. A lane's eyebrow carries
 * its count, which is the one fact its title cannot give a reader deciding whether
 * to open it.
 *
 * The cards are generated rather than authored so a new issue arrives with its
 * own card on the Friday it publishes, with no separate asset step to forget.
 */
/* The plate an app's mark sits on, resolved from the same record fields and the
   same fallback helpers the app card and detail page already share, so a card
   cannot show a different mark from the page it represents. */
const appIcon = (app: { id: string; data: { icon?: string; iconStyle: string; categories: string[]; iconCategory?: string } }): OgAppIcon => {
  if (app.data.icon) {
    return { kind: app.data.iconStyle as 'plain' | 'backed' | 'contain', src: app.data.icon };
  }
  const category = fallbackIconCategory(app.data);
  return {
    kind: 'fallback',
    phosphor: category?.icon ?? 'robot',
    background: missingIconBackground[fallbackIconColor(app.id)]
  };
};

/* The five fallback tile colours, from `.app-icon-color-*` in global.css. They
   live as literals in the stylesheet, so this is the one place they are mirrored;
   a change there has to be made here too. */
const missingIconBackground = {
  green: '#2f8f5b',
  orange: '#c66a22',
  blue: '#2f75d6',
  purple: '#8b5cc7',
  pink: '#c24b7a'
} as const;

export async function getStaticPaths() {
  const issues = await getCollection('issues');
  const apps = await getCollection('apps');

  const tags = [...new Set(apps.flatMap((app) => app.data.tags))].sort();
  const collections = [...new Set(apps.flatMap((app) => app.data.collections ?? []))].sort();
  const countBy = (predicate: (app: (typeof apps)[number]) => boolean) => apps.filter(predicate).length;

  const pages: { slug: string; card: OgCard }[] = [
    {
      slug: 'home',
      card: {
        layout: 'brand',
        /* Not the homepage's own tagline: its second sentence is the line the card
           footer already carries, and a card should not say Friday twice. */
        dek: siteCopy['home.cardDek']
      }
    },
    {
      slug: 'about',
      card: {
        layout: 'page',
        eyebrow: 'About',
        /* Both lines are claims the About page actually makes today. It does not
           yet publish a selection rubric, so this card must not promise one. */
        title: siteCopy['about.cardTitle'],
        dek: siteCopy['about.cardDek']
      }
    },
    {
      /* The layout's fallback, for any page added later that names no card of its
         own. It replaced `harbor-hero-clean.webp`, a 1200x800 photograph that every
         page shared and that no page had used as a hero since the redesign. */
      slug: 'default',
      card: {
        layout: 'brand' as const,
        dek: siteCopy['home.cardDek']
      }
    },
    {
      slug: 'not-found',
      card: {
        layout: 'page' as const,
        eyebrow: '404',
        /* The title matches the page's own h1 so the card and the page state the same
           fact. The dek stays written for a card seen without the page, where "the links
           below" names nothing. */
        title: 'Page not found',
        dek: siteCopy['notFound.cardDek']
      }
    },
    {
      slug: 'explore',
      card: {
        layout: 'page' as const,
        eyebrow: laneEyebrow('Explore', apps.length),
        title: siteCopy['explore.cardTitle'],
        dek: siteCopy['explore.cardDek']
      }
    },
    {
      slug: 'archive',
      card: {
        layout: 'page' as const,
        eyebrow: laneEyebrow('Archive', issues.length, 'issue'),
        title: siteCopy['archive.cardTitle'],
        dek: siteCopy['archive.cardDek']
      }
    },
    ...categories.map((category) => ({
      slug: categoryOgSlug(category.slug),
      card: {
        layout: 'page' as const,
        eyebrow: laneEyebrow('Category', countBy((app) => app.data.categories.includes(category.slug))),
        title: category.title,
        icon: category.icon,
        dek: category.description
      }
    })),
    ...collections.map((collection) => ({
      slug: collectionOgSlug(collection),
      card: {
        layout: 'page' as const,
        eyebrow: laneEyebrow('Collection', countBy((app) => app.data.collections?.includes(collection) ?? false)),
        title: collectionTitle(collection),
        icon: collectionMetadata.find((item) => item.slug === collection)?.icon,
        dek: collectionDek(collection)
      }
    })),
    ...tags.map((tag) => ({
      slug: tagOgSlug(tag),
      card: {
        layout: 'page' as const,
        eyebrow: laneEyebrow('Tag', countBy((app) => app.data.tags.includes(tag))),
        title: tagTitle(tag),
        icon: tagIcons[tag],
        dek: tagDek(tag)
      }
    })),
    ...apps.map((app) => ({
      slug: appOgSlug(app.id),
      card: {
        layout: 'app' as const,
        name: app.data.name,
        description: app.data.description,
        icon: appIcon(app)
      }
    })),
    ...issues.map((issue) => ({
      slug: issueOgSlug(issue.data.number),
      card: {
        layout: 'issue' as const,
        eyebrow: `Issue ${issueLabel(issue.data.number)} · ${issue.data.date}`,
        title: issue.data.rss.title,
        dek: issue.data.dek
      }
    }))
  ];

  return pages.map(({ slug, card }) => ({ params: { slug }, props: { card } }));
}

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOgCard(props.card as OgCard);
  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' }
  });
};
