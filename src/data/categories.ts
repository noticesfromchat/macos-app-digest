export type CategorySlug =
  | 'ai-agents'
  | 'automation-shortcuts'
  | 'developer-tools'
  | 'files-research-documents'
  | 'mac-utilities-customization'
  | 'media-capture'
  | 'productivity-workflow'
  | 'writing-notes-reading';

export type Category = {
  slug: CategorySlug;
  title: string;
  description: string;
  mobileDescription: string;
  tags: string[];
  icon: string;
  accent: string;
};

export type CollectionMeta = {
  slug: 'community-favorites' | 'editors-picks' | 'hidden-gems';
  title: string;
  icon: string;
};

export const categories: Category[] = [
  {
    slug: 'ai-agents',
    title: 'AI & Agents',
    description: "Assistants and coding agents, plus the growing pile of tools for watching what they're up to. Some run on your Mac, some call out to a server.",
    mobileDescription: 'Assistants and coding agents, plus tools to watch them.',
    tags: ['ai', 'agents', 'search'],
    icon: 'robot',
    accent: 'color-mix(in srgb, var(--accent) 12%, var(--surface-strong))'
  },
  {
    slug: 'automation-shortcuts',
    title: 'Automation & Shortcuts',
    description: 'Build Shortcuts, set rules and connect actions so your Mac can handle the work you repeat. Set it up once, then let the machine remember it.',
    mobileDescription: 'Shortcuts and rules for the work you repeat.',
    tags: ['automation', 'shortcuts'],
    icon: 'flow-arrow',
    accent: 'color-mix(in srgb, var(--accent) 13%, var(--surface-strong))'
  },
  {
    slug: 'developer-tools',
    title: 'Developer Tools',
    description: 'The terminal you actually want, and the tools that sit around the code rather than in it. Editors, inspectors, clients, whatever else is on the bench.',
    mobileDescription: 'Terminals and the tools that sit around the code.',
    tags: ['developer', 'terminal', 'database', 'cli'],
    icon: 'code-block',
    accent: 'color-mix(in srgb, var(--accent) 10%, var(--surface-strong))'
  },
  {
    slug: 'files-research-documents',
    title: 'Files, Research & Documents',
    description: "Finding what's on your disk, and turning up the thing you saved six months ago. Plus the filing and searching that made it findable at all.",
    mobileDescription: 'Finding files, and finding them again later.',
    tags: ['files', 'finder', 'documents', 'research', 'pdf', 'ebooks', 'backup', 'downloads', 'airdrop', 'quicklook'],
    icon: 'files',
    accent: 'color-mix(in srgb, var(--accent) 8%, var(--surface-strong))'
  },
  {
    slug: 'mac-utilities-customization',
    title: 'Mac Utilities & Customization',
    description: "Menu bar extras, window managers, launchers and the small tweaks that make a Mac feel like yours instead of Apple's. Mostly small, mostly single-purpose.",
    mobileDescription: 'Menu bar extras and window managers that make a Mac yours.',
    tags: ['utility', 'menubar', 'customization', 'privacy', 'launcher', 'windows', 'keyboard', 'accessibility', 'network', 'monitoring', 'maintenance', 'battery', 'dashboard', 'remote', 'ios'],
    icon: 'sliders',
    accent: 'color-mix(in srgb, var(--accent) 9%, var(--surface-strong))'
  },
  {
    slug: 'media-capture',
    title: 'Media & Capture',
    description: 'Capture screens, work with images, record and play audio or video, then turn a recording into text you can actually search.',
    mobileDescription: 'Screens, images, audio and video, plus transcripts.',
    tags: ['capture', 'audio', 'video', 'images', 'transcription'],
    icon: 'camera',
    accent: 'color-mix(in srgb, var(--accent) 6%, var(--surface-strong))'
  },
  {
    slug: 'productivity-workflow',
    title: 'Productivity & Workflow',
    description: 'Task managers, reminders and calendars for the work you are trying to keep track of. Somewhere to put it down so you can stop carrying it around.',
    mobileDescription: 'Tasks, reminders and calendars for work you track.',
    tags: ['productivity', 'tasks', 'reminders', 'calendar'],
    icon: 'list-checks',
    accent: 'color-mix(in srgb, var(--accent) 11%, var(--surface-strong))'
  },
  {
    slug: 'writing-notes-reading',
    title: 'Writing, Notes & Reading',
    description: "For anyone whose day is mostly text: somewhere to draft it, catch it before it's gone, dictate it or read it back somewhere quieter later on.",
    mobileDescription: 'Somewhere to write it down, and somewhere to read it later.',
    tags: ['writing', 'notes', 'markdown', 'dictation', 'clipboard', 'messages', 'reading', 'rss'],
    icon: 'notepad',
    accent: 'color-mix(in srgb, var(--accent) 7%, var(--surface-strong))'
  }
];

export const collections: CollectionMeta[] = [
  {
    slug: 'editors-picks',
    title: "Editor's Picks",
    icon: 'star'
  },
  {
    slug: 'community-favorites',
    title: 'Community Favorites',
    icon: 'heart'
  },
  {
    slug: 'hidden-gems',
    title: 'Hidden Gems',
    icon: 'treasure-chest'
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
    /* Tags that would crowd the chips without helping anyone choose. `health` and
       `finance` are protected single-app tags. `local` and `open-source` are
       deliberate attributes carried by every record that qualifies. `utility` and
       `productivity` are here for the opposite reason: they are the two broadest
       tags in the catalogue, on 45 and 54 of 102 records, so they took the top two
       chips on merit and told a reader nothing. They still work as tags and as tag
       pages; they just no longer lead the list. See the retirement project. */
    exclude = ['health', 'finance', 'local', 'open-source', 'utility', 'productivity'],
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
