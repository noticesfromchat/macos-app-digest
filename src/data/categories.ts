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
    description: 'Apps that keep attention on work, deadlines and healthy routines without adding noise.',
    tags: ['productivity', 'tasks', 'reminders']
  },
  {
    slug: 'communicate',
    title: 'Communicate',
    description: 'Tools for messaging, drafting, voice input and quick handoff between devices and apps.',
    tags: ['messages', 'writing', 'dictation', 'audio', 'clipboard', 'airdrop', 'export']
  },
  {
    slug: 'design',
    title: 'Design',
    description: 'Interface helpers and content tools that shape the look, feel and structure of a Mac workspace.',
    tags: ['accessibility', 'customization', 'dashboard', 'menubar', 'quicklook', 'markdown', 'notes', 'capture']
  },
  {
    slug: 'automate',
    title: 'Automate',
    description: 'Agents, shortcuts and command-line tools that collapse repetitive work into a few deliberate moves.',
    tags: ['automation', 'shortcuts', 'agents', 'cli', 'remote', 'ai']
  },
  {
    slug: 'organize',
    title: 'Organize',
    description: 'Apps that help sort files, windows, libraries and research into a dependable system.',
    tags: ['files', 'windows', 'finder', 'library', 'documents', 'ebooks', 'backup', 'research']
  },
  {
    slug: 'code',
    title: 'Code',
    description: 'Developer tools, local AI, search utilities and terminal workflows for people building on the Mac.',
    tags: ['developer', 'terminal', 'database', 'search', 'open-source', 'local', 'pdf', 'ios']
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
    description: 'System utilities that fine-tune privacy, keyboarding, networking and other Mac behaviors.',
    tags: ['utility', 'maintenance', 'privacy', 'keyboard', 'launcher', 'network', 'monitoring']
  }
];

export const categoryLabels = Object.fromEntries(
  categories.map((category) => [category.slug, category.title])
) as Record<string, string>;

export const getCategoryBySlug = (slug: string) =>
  categories.find((category) => category.slug === slug);
