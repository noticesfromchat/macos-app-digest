/* Plausible custom events. The script only loads on the production site, so on deploy
   previews and the dev server `window.plausible` is missing and these calls do nothing.
   Each event name needs a matching goal in Plausible, and each prop key an entry under
   Custom properties, or the dashboard will not show it. */

type Plausible = (event: string, options?: { props?: Record<string, string> }) => void;

export const track = (event: string, props?: Record<string, string>) => {
  const plausible = (window as Window & { plausible?: Plausible }).plausible;
  if (typeof plausible !== 'function') return;
  plausible(event, props ? { props } : undefined);
};
