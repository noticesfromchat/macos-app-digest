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

/** `rss` is an initialism, not a word, so it does not take sentence case. */
export const tagTitle = (tag: string) =>
  tag === 'rss' ? 'RSS' : tag.charAt(0).toUpperCase() + tag.slice(1);

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
