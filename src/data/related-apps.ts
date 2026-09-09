import type { CollectionEntry } from 'astro:content';

type AppEntry = CollectionEntry<'apps'>;

type ScoredRelatedApp = {
  entry: AppEntry;
  score: number;
  sharedTags: string[];
  sharedCategories: string[];
  sharedCollections: string[];
};

export const RELATED_APP_LIMIT = 6;

export const weakSimilarityTags = new Set([
  'ai',
  'local',
  'open-source',
  'productivity',
  'utility'
]);

const sharedValues = (a: readonly string[] = [], b: readonly string[] = []) => {
  const values = new Set(b);
  return a.filter((value) => values.has(value));
};

const tagFrequency = (apps: AppEntry[]) => {
  const counts = new Map<string, number>();

  for (const app of apps) {
    for (const tag of app.data.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return counts;
};

const rareTagWeight = (tag: string, frequency: Map<string, number>) => {
  if (weakSimilarityTags.has(tag)) return 1;

  const count = frequency.get(tag) ?? 1;
  if (count <= 6) return 8;
  if (count <= 12) return 6;
  if (count <= 24) return 4;
  return 2;
};

export function scoreRelatedApps(app: AppEntry, apps: AppEntry[]): ScoredRelatedApp[] {
  const frequencies = tagFrequency(apps);

  return apps
    .filter((entry) => entry.id !== app.id)
    .map((entry) => {
      const sharedTags = sharedValues(entry.data.tags, app.data.tags);
      const meaningfulSharedTags = sharedTags.filter((tag) => !weakSimilarityTags.has(tag));
      const sharedCategories = sharedValues(entry.data.categories, app.data.categories);
      const sharedCollections = sharedValues(entry.data.collections ?? [], app.data.collections ?? []);
      const onlyBroadMatch = meaningfulSharedTags.length === 0 && sharedCollections.length === 0;

      const tagScore = sharedTags.reduce(
        (score, tag) => score + rareTagWeight(tag, frequencies),
        0
      );
      const collectionScore = sharedCollections.length * 2;
      const categoryScore = sharedCategories.length;
      const broadOnlyPenalty = onlyBroadMatch ? 4 : 0;

      return {
        entry,
        score: tagScore + collectionScore + categoryScore - broadOnlyPenalty,
        sharedTags,
        sharedCategories,
        sharedCollections
      };
    })
    .filter(({ score, sharedTags, sharedCategories, sharedCollections }) =>
      score > 0
      && (sharedTags.length > 0 || sharedCollections.length > 0 || sharedCategories.length > 1)
    )
    .sort((a, b) =>
      b.score - a.score
      || b.sharedTags.length - a.sharedTags.length
      || b.sharedCategories.length - a.sharedCategories.length
      || a.entry.data.name.localeCompare(b.entry.data.name, undefined, { sensitivity: 'base' })
    );
}

export function relatedAppsFor(app: AppEntry, apps: AppEntry[], limit = RELATED_APP_LIMIT) {
  return scoreRelatedApps(app, apps)
    .slice(0, limit)
    .map(({ entry }) => entry);
}
