/** Read-only browser assertions. Pass this function to a browser evaluate call.
 * Run on home, Explore, About, an app and an issue at 390/800/921/1000/1280px,
 * with search and Filter open for their checks. Also run with keyboard focus on
 * a search result. No mutations, network calls or test-only application hooks.
 */
export function inspectRenderedDesign() {
  const failures = [];
  let checks = 0;
  const number = s => +s.replace('px', '');
  const near = (a, b, name) => {
    checks++;
    if (!(Math.abs(a - b) < 0.1)) failures.push(`${name}: ${a} != ${b}`);
  };
  const visible = s => [...document.querySelectorAll(s)].filter(e => e.getBoundingClientRect().width > 0);
  const radius = e => {
    const r = getComputedStyle(e).borderTopLeftRadius;
    return r.endsWith('%') ? +r.replace('%', '') * e.getBoundingClientRect().width / 100 : number(r);
  };
  near(document.documentElement.scrollWidth, innerWidth, 'page overflow');
  for (const e of visible('.app-card, .feature-card')) {
    near(radius(e), number(getComputedStyle(e).paddingTop), `card inset/corner ${e.className}`);
  }
  for (const e of visible('.app-icon-frame')) {
    near(radius(e), e.getBoundingClientRect().width / 4, 'icon proportion');
  }
  for (const e of visible('.editors-pick-card.has-pick-accent')) {
    const rim = getComputedStyle(e, '::after');
    if (rim.content !== 'none') near(number(rim.borderTopLeftRadius), radius(e) + number(getComputedStyle(e).getPropertyValue('--pick-rim')), 'pick rim');
  }
  const filter = visible('.directory-filter')[0], sort = visible('.directory-sort')[0];
  const card = visible('.directory-grid .app-card')[0];
  if (filter && sort && card) {
    const f = filter.getBoundingClientRect(), s = sort.getBoundingClientRect();
    near(s.right - f.left, card.getBoundingClientRect().width, 'toolbar/card span');
    const panel = visible('.directory-filter-panel')[0];
    if (panel) {
      near(panel.getBoundingClientRect().left, f.left, 'panel left');
      near(panel.getBoundingClientRect().right, s.right, 'panel right');
      near(radius(panel), radius(filter), 'panel family corner');
    }
  }
  const modal = visible('.search-modal')[0], result = visible('.search-result')[0];
  if (modal && result) {
    near(radius(result), Math.max(0, radius(modal) - (result.getBoundingClientRect().left - modal.getBoundingClientRect().left)), 'nested search corner');
  }
  if (document.activeElement.matches('.search-result')) {
    checks++;
    const s = getComputedStyle(document.activeElement);
    if (s.outlineStyle === 'none' || number(s.outlineWidth) <= 0) failures.push('search result has no focus ring');
  }
  for (const e of visible('.eyebrow, .archive-card time, .search-result-copy strong, .rss-description')) {
    const line = number(getComputedStyle(e).lineHeight);
    const step = 4 * number(getComputedStyle(document.documentElement).fontSize) / 16;
    near(line / step, Math.round(line / step), 'fixed role line box');
  }
  for (const e of visible('.explore-lane-collection')) {
    near(e.scrollWidth, e.clientWidth, 'collection label fit');
  }
  return { path: location.pathname, width: innerWidth, checks, failures };
}
