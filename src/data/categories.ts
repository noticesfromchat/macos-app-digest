export type Category = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
};

export const categories: Category[] = [
  {
    slug: 'focus',
    title: 'Focus',
    description: 'Apps that keep tasks, deadlines and reminders clear without adding noise.',
    tags: ['tasks', 'reminders']
  },
  {
    slug: 'communicate',
    title: 'Communicate',
    description: 'Tools for messaging, drafting, voice input and clipboard workflows between apps.',
    tags: ['messages', 'writing', 'dictation', 'clipboard']
  },
  {
    slug: 'design',
    title: 'Design',
    description: 'Tools for previewing visual and structured content within a Mac workflow.',
    tags: ['quicklook']
  },
  {
    slug: 'automate',
    title: 'Automate',
    description: 'Agents and shortcuts that collapse repetitive work into a few deliberate moves.',
    tags: ['automation', 'shortcuts', 'agents']
  },
  {
    slug: 'organize',
    title: 'Organize',
    description: 'Apps that arrange files, windows, documents, notes and research into a dependable system.',
    tags: ['files', 'windows', 'finder', 'library', 'documents', 'ebooks', 'backup', 'research', 'pdf', 'airdrop', 'notes', 'capture']
  },
  {
    slug: 'code',
    title: 'Code',
    description: 'Developer tools, search utilities and terminal workflows for people building on the Mac.',
    tags: ['developer', 'terminal', 'database', 'search', 'cli']
  },
  {
    slug: 'thrive',
    title: 'Thrive',
    description: 'Utilities for health and financial awareness that keep a Mac setup sustainable.',
    tags: ['health', 'finance']
  },
  {
    slug: 'tweak',
    title: 'Tweak',
    description: 'System tools that fine-tune privacy, keyboarding, networking and other Mac behaviors.',
    tags: ['maintenance', 'privacy', 'keyboard', 'launcher', 'network', 'monitoring', 'customization']
  }
];

export const categoryLabels = Object.fromEntries(
  categories.map((category) => [category.slug, category.title])
) as Record<string, string>;

export const getCategoryBySlug = (slug: string) =>
  categories.find((category) => category.slug === slug);
