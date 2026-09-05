/**
 * How a lane names and describes itself.
 *
 * Categories and collections keep their copy in `categories.ts`, but the tag and
 * collection pages derived their own titles and deks inline, which meant anything
 * else that wanted to name a lane had to derive them again. The Open Graph cards
 * are the second such surface, so the derivations moved here rather than being
 * copied: a card that called a lane something other than its own heading would be
 * the same defect the issue label had.
 */
import { collectionLabels } from './categories';

/**
 * Tags that sentence case gets wrong. Initialisms are not words, and neither are the
 * product names the platform spells its own way, so `Ai`, `Cli`, `Ios`, `Pdf`,
 * `Airdrop`, `Menubar` and `Quicklook` were all shipping in page titles, headings and
 * social cards. `rss` was the only one handled, as a special case in the function
 * below; a map is what stops the next one needing another branch.
 */
const tagDisplayNames: Record<string, string> = {
  ai: 'AI',
  airdrop: 'AirDrop',
  cli: 'CLI',
  ios: 'iOS',
  menubar: 'Menu bar',
  pdf: 'PDF',
  quicklook: 'Quick Look',
  rss: 'RSS'
};

export const tagTitle = (tag: string) =>
  tagDisplayNames[tag] ?? tag.charAt(0).toUpperCase() + tag.slice(1);

/**
 * The differentiator in a tag page's title, which reads
 * `{tag} Mac Apps — {tagline} — App Waypoint`. All 54 tag titles ran between 26 and 37
 * characters against the roughly 60 a search result shows, the widest gap of any page
 * type here. Says what the lane collects; the budget is what the tag's own name leaves,
 * and the longest leaves 20. Categories deliberately have no equivalent: their titles
 * already run to 53, so four of the six have no room for one.
 */
const tagTaglines: Record<string, string> = {
  accessibility: 'assistive tools',
  agents: 'autonomous assistants',
  ai: 'models and assistants',
  airdrop: 'quick file sending',
  audio: 'sound and routing',
  automation: 'rules and workflows',
  backup: 'copies and restores',
  battery: 'power monitoring',
  calendar: 'scheduling tools',
  capture: 'screenshots and video',
  cli: 'command-line tools',
  clipboard: 'copy and paste history',
  customization: 'system tweaks',
  dashboard: 'at-a-glance views',
  database: 'clients and browsers',
  developer: 'coding tools',
  dictation: 'speech to text',
  documents: 'files and PDFs',
  downloads: 'managers and queues',
  ebooks: 'readers and libraries',
  files: 'managers and finders',
  finance: 'money and markets',
  finder: 'Finder enhancements',
  health: 'breaks and wellbeing',
  ios: 'iPhone and iPad links',
  keyboard: 'shortcuts and input',
  launcher: 'app and command launch',
  local: 'on-device processing',
  maintenance: 'cleanup and upkeep',
  maps: 'places and navigation',
  markdown: 'editors and previews',
  menubar: 'always-there tools',
  messages: 'chat and SMS tools',
  monitoring: 'system stats',
  network: 'connections and speed',
  notes: 'capture and organize',
  'open-source': 'free and inspectable',
  pdf: 'reading and editing',
  privacy: 'local and private',
  productivity: 'focus and workflow',
  quicklook: 'preview extensions',
  reading: 'articles and feeds',
  reminders: 'tasks and alerts',
  remote: 'access from anywhere',
  research: 'sources and citations',
  rss: 'readers and feed tools',
  search: 'find files and text',
  shortcuts: 'Apple Shortcuts tools',
  tasks: 'to-dos and planning',
  terminal: 'shells and emulators',
  utility: 'small system tools',
  video: 'players and recorders',
  windows: 'layout and switching',
  writing: 'drafting and editing'
};

export const tagTagline = (tag: string) => tagTaglines[tag];

/** The same, for the two collection lanes. */
const collectionTaglines: Record<string, string> = {
  'editors-picks': 'standout software',
  'community-favorites': 'reader picks'
};

export const collectionTagline = (slug: string) => collectionTaglines[slug];

export const tagDek = (tag: string) =>
  tag === 'rss'
    ? 'RSS readers and tools to help with RSS feeds.'
    : `Mac apps selected for their relevance to ${tagTitle(tag).toLowerCase()} workflows.`;

const collectionDescriptions: Record<string, string> = {
  'editors-picks':
    'Explore Mac apps singled out by the editor for exceptional utility, thoughtful design or a distinctive approach to a familiar workflow.',
  'community-favorites':
    'Explore Mac apps the community keeps recommending for practical workflows, dependable utility and standout execution.'
};

export const collectionTitle = (slug: string) =>
  collectionLabels[slug as keyof typeof collectionLabels]
    ?? slug.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

export const collectionDek = (slug: string) =>
  collectionDescriptions[slug]
    ?? `Explore ${collectionTitle(slug).toLowerCase()} for experienced Mac users, with concise recommendations and links to official developer websites.`;

/**
 * What a lane's social card says above its name: what kind of page this is and how
 * much is on it. The count is the one fact a reader cannot get from the title, and
 * it is the honest answer to whether a lane is worth opening.
 */
export const laneEyebrow = (kind: string, count: number, noun = 'app') =>
  `${kind} · ${count} ${noun}${count === 1 ? '' : 's'}`;
