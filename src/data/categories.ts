export type CategorySlug =
  | 'ai-agents'
  | 'developer-tools'
  | 'files-research-documents'
  | 'mac-utilities-customization'
  | 'productivity-workflow'
  | 'writing-notes-reading';

export type Category = {
  slug: CategorySlug;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  accent: string;
};

export type CollectionMeta = {
  slug: 'community-favorites' | 'editors-picks';
  title: string;
  icon: string;
};

export const categories: Category[] = [
  {
    slug: 'ai-agents',
    title: 'AI & Agents',
    description: 'Local models, agent tools and AI-powered search that make Mac workflows more capable without losing focus.',
    tags: ['ai', 'agents', 'agent', 'search'],
    icon: 'sparkles',
    accent: 'color-mix(in srgb, var(--accent) 12%, var(--surface-strong))'
  },
  {
    slug: 'developer-tools',
    title: 'Developer Tools',
    description: 'Terminal utilities, databases, CLIs and coding helpers built for people shipping software on the Mac.',
    tags: ['developer', 'terminal', 'database', 'cli'],
    icon: 'code-2',
    accent: 'color-mix(in srgb, var(--accent) 10%, var(--surface-strong))'
  },
  {
    slug: 'files-research-documents',
    title: 'Files, Research & Documents',
    description: 'Tools for finding, capturing, annotating, exporting and organizing the documents and files that keep work moving.',
    tags: ['files', 'finder', 'documents', 'research', 'pdf', 'ebooks', 'library', 'backup', 'downloads', 'capture', 'airdrop', 'export', 'cloud'],
    icon: 'folder-search',
    accent: 'color-mix(in srgb, var(--accent) 8%, var(--surface-strong))'
  },
  {
    slug: 'mac-utilities-customization',
    title: 'Mac Utilities & Customization',
    description: 'Menu bar tools, window managers, launchers and system tweaks that make the Mac feel more responsive and personal.',
    tags: ['utility', 'menubar', 'customization', 'privacy', 'launcher', 'windows', 'keyboard', 'accessibility', 'audio', 'network', 'monitoring', 'maintenance', 'battery', 'dashboard', 'remote', 'ios'],
    icon: 'sliders-horizontal',
    accent: 'color-mix(in srgb, var(--accent) 9%, var(--surface-strong))'
  },
  {
    slug: 'productivity-workflow',
    title: 'Productivity & Workflow',
    description: 'Task managers, reminders, automation and scheduling tools that help Mac users reduce friction in repeat work.',
    tags: ['productivity', 'tasks', 'reminders', 'automation', 'calendar'],
    icon: 'route',
    accent: 'color-mix(in srgb, var(--accent) 11%, var(--surface-strong))'
  },
  {
    slug: 'writing-notes-reading',
    title: 'Writing, Notes & Reading',
    description: 'Writing environments, note tools, dictation and reading apps for people who spend their days moving through text.',
    tags: ['writing', 'notes', 'markdown', 'dictation', 'clipboard', 'messages', 'reading', 'rss'],
    icon: 'notebook-pen',
    accent: 'color-mix(in srgb, var(--accent) 7%, var(--surface-strong))'
  }
];

export const collections: CollectionMeta[] = [
  {
    slug: 'editors-picks',
    title: "Editor's Picks",
    icon: 'book-heart'
  },
  {
    slug: 'community-favorites',
    title: 'Community Favorites',
    icon: 'heart'
  }
];

export const categorySlugs = categories.map((category) => category.slug) as CategorySlug[];

export const categoryLabels = Object.fromEntries(
  categories.map((category) => [category.slug, category.title])
) as Record<CategorySlug, string>;

export const categoryTags = new Set(categories.flatMap((category) => category.tags));

export const categoryTagMap = new Map(
  categories.flatMap((category) =>
    category.tags.map((tag) => [tag, category.slug] as const)
  )
);

export const collectionLabels = Object.fromEntries(
  collections.map((collection) => [collection.slug, collection.title])
) as Record<CollectionMeta['slug'], string>;

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getCategoriesForTags(tags: string[]) {
  return [
    ...new Set(
      tags.flatMap((tag) => {
        const category = categoryTagMap.get(tag);
        return category ? [category] : [];
      })
    )
  ];
}

export function getPopularTags(
  apps: Array<{ tags: string[] }>,
  {
    exclude = ['health', 'finance', 'local', 'open-source'],
    limit = 12
  }: {
    exclude?: string[];
    limit?: number;
  } = {}
) {
  const counts = new Map<string, number>();

  for (const app of apps) {
    for (const tag of app.tags) {
      if (exclude.includes(tag)) continue;
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([tag, count]) => ({ tag, count }));
}
