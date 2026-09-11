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
  images: 'creating and finding',
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
  transcription: 'recordings to text',
  utility: 'small system tools',
  video: 'players and recorders',
  windows: 'layout and switching',
  writing: 'drafting and editing'
};

export const tagTagline = (tag: string) => tagTaglines[tag];

/** The same, for the two collection lanes. */
const collectionTaglines: Record<string, string> = {
  'editors-picks': 'standout software',
  'community-favorites': 'reader picks',
  'hidden-gems': 'underrated tools'
};

export const collectionTagline = (slug: string) => collectionTaglines[slug];

/**
 * The one line under a collection's name in the Explore menu. Separate from
 * `collectionDescriptions` below, which is page copy written for a collection's own
 * header and its search result. This says what membership means rather than what the
 * collection holds: the three collections are three different kinds of endorsement,
 * and a reader who cannot tell which is which reads them as three volume levels of
 * "good". No trailing full stop, because these render as list items.
 */
const collectionMenuDeks: Record<string, string> = {
  'editors-picks': 'Apps chosen by the editor',
  'community-favorites': 'What the Mac community keeps recommending',
  'hidden-gems': 'Small tools nobody is marketing at you'
};

export const collectionMenuDek = (slug: string) => collectionMenuDeks[slug];


const tagDescriptions: Record<string, string> = {
  "accessibility": "Tools that make the Mac easier to see and control, whatever you need from it.",
  "agents": "Assistants that do multi-step work, and the tools for watching them do it.",
  "ai": "Assistants and transcription that do more than chat. Some run locally, some don't.",
  "airdrop": "Getting a file from one device to another without emailing it to yourself.",
  "audio": "Send sound where you want it and hear what's actually playing.",
  "automation": "Set the boring thing up once, then let the Mac do it without you from then on.",
  "backup": "Scheduled copies of the disk, so there's a second version of everything.",
  "battery": "See what's draining it, and what that's doing to your runtime.",
  "calendar": "Check what's next without opening a whole calendar app to do it.",
  "capture": "Screenshots and screen recordings, plus the marking up you do right after.",
  "cli": "A command line onto things that normally only give you a window.",
  "clipboard": "Everything you've copied lately, still there when you need it back.",
  "customization": "Change how the Mac looks and behaves until it stops getting in your way.",
  "dashboard": "One screen with the numbers you'd otherwise open five apps to check.",
  "database": "A real window onto your data instead of a terminal prompt.",
  "developer": "The bench that sits around the code: editors, inspectors, clients, diff tools.",
  "dictation": "Turning speech into text, and the tools for delivering it out loud.",
  "documents": "Reading and editing the files people email you.",
  "downloads": "Queues and scheduling, for when the browser's own downloads aren't enough.",
  "ebooks": "A library of your own files rather than one you're renting from a store.",
  "files": "Finding, moving, renaming and clearing out what's on your disk.",
  "finance": "Money and markets on your desktop instead of your phone.",
  "finder": "Fixes for the app you use more than any other and think about least.",
  "health": "Nudges to stand up and stop working for a minute.",
  "images": "Making a picture, fixing one or finding the one you know is somewhere on the disk.",
  "ios": "Mac apps that talk to your iPhone or iPad, or bring something across from it.",
  "keyboard": "Remap the keys and stop reaching for the mouse.",
  "launcher": "Hit a key, type a few letters and you're there.",
  "local": "Processing that happens on your own machine rather than on someone's server.",
  "maintenance": "Clearing out the junk that piles up without anyone deciding it should.",
  "maps": "A map that lives on your Mac and works offline.",
  "markdown": "Writing in plain text and watching it come out looking right.",
  "menubar": "Small tools that sit up top and stay one click away all day.",
  "messages": "Searching and exporting the conversations already on your Mac.",
  "monitoring": "What your Mac is doing right now: CPU, memory, disk, temperature, all of it.",
  "network": "See how fast it is, and what's quietly phoning home.",
  "notes": "Somewhere to put a thought before it's gone.",
  "open-source": "Source you can read, from projects built in the open.",
  "pdf": "Reading, marking up, merging and getting text back out of PDFs.",
  "privacy": "Apps that work without shipping your data somewhere else.",
  "productivity": "Getting more done, or at least spending less time on the parts that don't count.",
  "quicklook": "Press space on a file and actually see what's inside it.",
  "reading": "Everything you've been meaning to get to, finally in one place.",
  "reminders": "Being told the thing at the moment you can actually do something about it.",
  "remote": "Your Mac on another screen, or another device's apps on yours.",
  "research": "Collecting sources and remembering where they came from.",
  "rss": "Readers and feed tools. The open web, still working the way it used to.",
  "search": "Find the file, or the sentence inside it, without remembering where you put it.",
  "shortcuts": "Extra actions and better tooling for Apple's Shortcuts app.",
  "tasks": "Lists that hold up once the list gets long.",
  "terminal": "Shells and emulators, and everything that makes the command line nicer to live in.",
  "transcription": "Turning a recording, a meeting or whatever the Mac just played into text you can search.",
  "utility": "Small apps that do one job and then stay out of the way.",
  "video": "Players and screen recorders, plus a way to subtitle what you're watching.",
  "windows": "Put windows where you want them and get back to the one you need.",
  "writing": "Drafting and editing, with less between you and the page."
};

export const tagDek = (tag: string) =>
  tagDescriptions[tag] ?? `Mac apps selected for their relevance to ${tagTitle(tag).toLowerCase()} workflows.`;

export const tagMetaDescription = (tag: string) =>
  `${tagDek(tag)} Each one comes with a short note on what it does and a link to its developer.`;

const collectionDescriptions: Record<string, string> = {
  'editors-picks':
    'Explore Mac apps singled out by the editor for exceptional utility, thoughtful design or a distinctive approach to a familiar workflow.',
  'community-favorites':
    'Explore Mac apps the community keeps recommending for practical workflows, dependable utility and standout execution.',
  'hidden-gems':
    'Explore Mac apps worth more attention than they get: small, well made tools that solve a real problem without a marketing budget behind them.'
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
