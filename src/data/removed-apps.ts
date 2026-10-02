/**
 * Apps taken out of the catalogue that a published issue still names. The issue keeps the
 * app's id in its section, which keeps the section at three cards, and the site draws the
 * removed-app card in its place instead of an app card. The record and its icon are deleted
 * and the app's route redirects in `netlify.toml`, so this list is the only trace left.
 * An id here must have no record in `src/content/apps/`; the validator checks it.
 */
export const removedApps: Record<string, { removedOn: string }> = {
  filemaster: { removedOn: '2026-09-29' }
};

export const isRemovedApp = (id: string) => id in removedApps;
