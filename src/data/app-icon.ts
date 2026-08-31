/* The palette an app falls back to when it has no icon of its own. Documented in
 * docs/STYLE_GUIDE.md section 11 as intentional editorial metadata rather than a
 * broken state, so the colour has to be stable from the app ID: cards must not
 * reshuffle between builds, and the same app must look the same on a card and on
 * its own detail page. */
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
