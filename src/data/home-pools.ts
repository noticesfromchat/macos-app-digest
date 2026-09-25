/* The candidate pools for the homepage rows, built from the issue and app records. The page
   uses them to render the build's own draw; `/home-pools.json` hands the same pools to the
   browser so it can redraw for the reader's UTC day. */
import { getCollection } from 'astro:content';
import { fallbackIconCategory, fallbackIconColor } from './app-icon';
import type { Pools } from './daily-rows';

export type CardData = {
  name: string;
  description: string;
  icon?: string;
  iconStyle?: string;
  fallback?: { color: string; icon: string };
};

export async function homePools() {
  const issues = [...await getCollection('issues')].sort((a, b) => b.data.slug.localeCompare(a.data.slug));
  const apps = await getCollection('apps');
  const byId = new Map(apps.map((entry) => [entry.id, entry]));
  const latest = issues[0].data;
  const known = (ids: string[]) => ids.filter((id) => byId.has(id));
  const sectionApps = (issue: (typeof issues)[number]) => issue.data.sections.flatMap((section) => section.apps);
  const inCollection = (slug: string) => apps
    .filter((entry) => entry.data.collections?.includes(slug))
    .map((entry) => entry.id)
    .sort();

  /* Every pool is in a fixed order before the draw shuffles it, so the build and the
     browser start from the same list. */
  const pools: Pools = {
    /* The Trending sections of the latest two issues. */
    trending: known(issues.slice(0, 2)
      .flatMap((issue) => issue.data.sections.filter((section) => section.eyebrow === 'Trending'))
      .flatMap((section) => section.apps)),
    /* Every app in the latest three issues' sections. */
    recent: known([...new Set(issues.slice(0, 3).flatMap(sectionApps))]),
    favorites: inCollection('community-favorites'),
    picks: inCollection('editors-picks')
  };

  const cards: Record<string, CardData> = {};
  for (const id of new Set(Object.values(pools).flat())) {
    const app = byId.get(id)!.data;
    const fallbackCategory = fallbackIconCategory(app);
    cards[id] = {
      name: app.name,
      description: app.description,
      ...(app.icon ? { icon: app.icon, iconStyle: app.iconStyle } : {}),
      ...(fallbackCategory ? { fallback: { color: fallbackIconColor(id), icon: fallbackCategory.icon } } : {})
    };
  }

  return { pools, cards, pickId: latest.editorsPick?.app };
}
