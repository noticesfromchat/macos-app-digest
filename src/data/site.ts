export type App = {
  name: string;
  description: string;
  bestFor: string;
  tags: string[];
  source: string;
  homepage: string;
};

export type Reading = {
  title: string;
  publication: string;
  description: string;
  url: string;
};

export const issue = {
  number: '001',
  slug: '2026-07-10',
  date: 'July 10, 2026',
  dek: 'This issue highlights local AI writing tools, Mac-first agent workflows, notch utilities, cross-device launchers and small apps that remove everyday friction.',
  sections: [
    {
      eyebrow: 'New Discoveries',
      title: 'Fresh tools with a clear power-user job',
      apps: [
        {
          name: 'Cotypist',
          description: 'A local Apple Silicon autocomplete layer that predicts the next words inside everyday Mac apps.',
          bestFor: 'Writers, operators and prompt-heavy users who want AI assistance without leaving the text field.',
          tags: ['writing', 'ai', 'local', 'productivity'],
          source: 'Mac Power Users #854 and official homepage',
          homepage: 'https://cotypist.app/'
        },
        {
          name: 'Choclift',
          description: 'Turns an iPhone or Vision Pro into a touch launcher for Mac apps, Shortcuts, websites and emoji.',
          bestFor: 'People who like Stream Deck-style workflows but want to use devices already on the desk.',
          tags: ['launcher', 'shortcuts', 'ios', 'productivity'],
          source: 'Mac Power Users #854 and official homepage',
          homepage: 'https://choclift.com/'
        },
        {
          name: 'Menu Drop',
          description: 'A Sindre Sorhus menu bar utility for AirDropping files, folders, links and clipboard text by dropping them on an icon.',
          bestFor: 'Mac users who send things between Apple devices constantly and want AirDrop to be one gesture faster.',
          tags: ['menubar', 'airdrop', 'files', 'utility'],
          source: 'Mac Power Users #854 and official homepage',
          homepage: 'https://sindresorhus.com/menu-drop'
        }
      ] as App[]
    },
    {
      eyebrow: 'Trending',
      title: 'Interfaces trying to make the Mac feel more personal',
      apps: [
        {
          name: 'Glaze by Raycast',
          description: 'A Mac-first AI app builder that turns plain-language requests into desktop apps that run locally on the Mac.',
          bestFor: 'Raycast users and automation-minded teams who want tiny internal tools without starting a full coding project.',
          tags: ['ai', 'automation', 'developer', 'productivity'],
          source: 'Product Hunt, Raycast and official homepage',
          homepage: 'https://www.glaze.app/'
        },
        {
          name: 'MacNotch',
          description: 'A configurable productivity hub that puts widgets, shortcuts and drag-and-drop actions around the MacBook notch.',
          bestFor: 'Notch MacBook owners who want glanceable controls without opening another dashboard window.',
          tags: ['notch', 'menubar', 'dashboard', 'productivity'],
          source: 'Product Hunt and official homepage',
          homepage: 'https://macnotch.io/'
        },
        {
          name: 'AgentPeek',
          description: 'Shows live Claude Code, Codex, Cursor and other coding-agent sessions from the Mac notch or menu bar.',
          bestFor: 'Developers running multiple local AI agents who need prompt approvals, token usage and dev servers at a glance.',
          tags: ['ai', 'developer', 'menubar', 'local'],
          source: 'Product Hunt and official homepage',
          homepage: 'https://agentpeek.app/'
        }
      ] as App[]
    },
    {
      eyebrow: 'AI & Automation',
      title: 'Local intelligence and workflow acceleration',
      apps: [
        {
          name: 'Shortcuts Playground',
          description: "Federico Viticci's Claude Code and Codex plugin for generating, validating, signing and remixing Apple Shortcuts.",
          bestFor: 'Automation users who have ideas for Shortcuts but do not want to hand-build fragile action graphs from scratch.',
          tags: ['automation', 'shortcuts', 'ai', 'open-source'],
          source: 'MacStories and GitHub',
          homepage: 'https://github.com/viticci/shortcuts-playground-plugin'
        },
        {
          name: 'SmartClipboard',
          description: 'An open-source SwiftUI clipboard manager with Gemini-powered semantic search and sequential multi-paste.',
          bestFor: 'Users who want a native menu bar clipboard with AI search rather than another heavyweight productivity suite.',
          tags: ['clipboard', 'ai', 'menubar', 'open-source'],
          source: 'GitHub search and repository',
          homepage: 'https://github.com/saihgupr/SmartClipboard'
        },
        {
          name: 'Wispr Flow',
          description: 'System-wide AI dictation that turns spoken thoughts into polished text across Mac apps.',
          bestFor: 'People who draft messages, notes, prompts and documents faster by speaking than by typing.',
          tags: ['dictation', 'ai', 'writing', 'productivity'],
          source: 'Mac Power Users #854 and official homepage',
          homepage: 'https://wisprflow.ai/'
        }
      ] as App[]
    }
  ],
  video: {
    title: '10 Mac Apps That Will Change How You Use macOS in 2026',
    creator: 'MacRumors',
    description: 'A broad companion watch for seeing how utility categories such as Finder helpers, window tools and productivity tweaks are being framed for mainstream Mac users.',
    url: 'https://www.youtube.com/watch?v=LtuUwACZdsQ'
  },
  readings: [
    {
      title: 'macOS 27 Golden Gate: The MacStories Overview',
      publication: 'MacStories',
      description: 'A wide platform read on where Apple is pushing Mac automation, AI and quality-of-life features next.',
      url: 'https://www.macstories.net/news/macos-27-golden-gate-the-macstories-overview/'
    },
    {
      title: 'WWDC26: As Foretold, macOS 27 Golden Gate Drops Intel Support',
      publication: '512 Pixels',
      description: 'A useful compatibility checkpoint for anyone still maintaining Intel-era workflows or app dependencies.',
      url: 'https://512pixels.net/2026/06/wwdc26-macos27-drops-intel-support/'
    },
    {
      title: 'macOS 28 Will Remove Support for Encrypted HFS+ Volumes',
      publication: '512 Pixels',
      description: 'A small but important storage-format warning for people with old archives, external disks or long-lived backup habits.',
      url: 'https://512pixels.net/2026/07/macos-28-will-remove-support-for/'
    }
  ] as Reading[],
  sourceNotes: [
    'Mac Power Users #854: Obscure (and Excellent) Mac Apps',
    'Product Hunt Mac, productivity and AI launches',
    'MacStories coverage and Shortcuts Playground materials',
    'GitHub searches for macOS, SwiftUI, clipboard, menu bar and automation projects',
    'Official app homepages for every selected app',
    'Reddit searches across the requested Mac communities, which did not return usable indexed evidence for this run'
  ]
};

export const allApps = issue.sections.flatMap((section) => section.apps);
export const allTags = [...new Set(allApps.flatMap((app) => app.tags))].sort();
