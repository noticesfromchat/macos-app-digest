/* The palette an app falls back to when it has no icon of its own. Documented in
 * docs/STYLE_GUIDE.md section 11 as intentional editorial metadata rather than a
 * broken state, so the colour has to be stable from the app ID: cards must not
 * reshuffle between builds, and the same app must look the same on a card and on
 * its own detail page. */
import { getCategoryBySlug } from './categories';

export const missingIconColors = ['green', 'orange', 'blue', 'purple', 'pink'] as const;

export type MissingIconColor = (typeof missingIconColors)[number];

export function fallbackIconColor(seed: string): MissingIconColor {
  let hash = 0;
  for (const char of seed) {
    hash = Math.imul(31, hash) + char.charCodeAt(0);
  }
  hash ^= hash >>> 16;
  hash = Math.imul(hash, 0x7feb352d);
  hash ^= hash >>> 15;
  hash = Math.imul(hash, 0x846ca68b);
  hash ^= hash >>> 16;
  return missingIconColors[(hash >>> 0) % missingIconColors.length];
}

/* The mark an icon-less app falls back to. Always the first entry in the app
 * record's own categories array, per docs/STYLE_GUIDE.md section 11: the editor
 * puts the most representative category first precisely so this can use it.
 *
 * Kept here because the alternative is each surface deriving it again, and the
 * app detail page did exactly that, filtering the global category list instead.
 * That returns the app's categories in the global order, so an app whose record
 * led with a later category showed one mark on its cards and another on its
 * detail page. */
export function fallbackIconCategory(app: { icon?: string; categories: string[] }) {
  if (app.icon) return undefined;
  return getCategoryBySlug(app.categories[0]);
}
