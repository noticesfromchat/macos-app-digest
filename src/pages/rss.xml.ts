import { getCollection } from 'astro:content';

import { issueName } from '../data/issue';
import { issueAppsOgSlug, ogPath } from '../data/og';
import { siteCopy } from '../data/site-copy';

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

/* Noon UTC on the issue's Friday. Midnight UTC is still Thursday evening across the
   Americas, which is where most readers are, so every issue was listed a day early. */
const formatRssDate = (slug: string) => {
  const parsed = new Date(`${slug}T12:00:00Z`);
  return Number.isNaN(parsed.getTime()) ? new Date().toUTCString() : parsed.toUTCString();
};

const countWords = ['', 'one', 'two', 'three', 'four', 'five', 'six'];

const escapeCdata =(value: string) => value.replaceAll(']]>', ']]]]><![CDATA[>');

/**
 * The item body is a table of contents, not the issue. A reader sees which apps are
 * in it, each linked to its page here, while what makes the issue worth reading, the
 * reasoning for each pick, stays on the site. Until 2026-10 the item carried the dek
 * and one link, which gave a subscriber nothing to click on but the issue as a whole.
 *
 * Every link in the body is tagged so feed visits are counted apart from direct ones.
 * `<link>` and `<guid>` stay clean: they are the item's identity, and readers that
 * deduplicate by URL would see a tagged one as a different item.
 */
export async function GET(context: { site?: URL }) {
  const site = context.site ?? new URL('https://appwaypoint.app');
  const [issues, apps] = await Promise.all([getCollection('issues'), getCollection('apps')]);
  const appById = new Map(apps.map((app) => [app.id, app]));
  const sortedIssues = issues.slice().sort((a, b) => b.data.slug.localeCompare(a.data.slug));

  const items = sortedIssues
    .map((issue) => {
      const permalink = new URL(`/issues/${issue.data.slug}/`, site).href;
      const tagged = (path: string) => {
        const url = new URL(path, site);
        url.searchParams.set('utm_source', 'rss');
        url.searchParams.set('utm_medium', 'feed');
        url.searchParams.set('utm_campaign', `issue-${issue.data.number}`);
        return escapeXml(url.href);
      };
      const issueLink = tagged(`/issues/${issue.data.slug}/`);
      const appLink = (id: string) => {
        const app = appById.get(id);
        return app ? `<a href="${tagged(`/apps/${id}/`)}">${escapeXml(app.data.name)}</a>` : '';
      };

      const title = issue.data.rss?.title ?? `App Waypoint — ${issue.data.date}`;
      const name = issueName(issue.data.number);
      const imageUrl = new URL(ogPath(issueAppsOgSlug(issue.data.number)), site).href;
      const pick = issue.data.editorsPick && appById.get(issue.data.editorsPick.app);
      const extras = [
        issue.data.video && `a ${issue.data.video.creator} video`,
        issue.data.readings?.length && `${countWords[issue.data.readings.length] ?? issue.data.readings.length} ${issue.data.readings.length === 1 ? 'piece' : 'pieces'} worth reading`
      ].filter(Boolean);

      const content = [
        `<p><a href="${issueLink}"><img src="${escapeXml(imageUrl)}" alt="${escapeXml(`The apps in ${name}`)}" width="1200" height="630" /></a></p>`,
        `<p>${escapeXml(issue.data.dek)}</p>`,
        pick && `<h3>Editor's Pick</h3>\n<p>${appLink(pick.id)}</p>`,
        ...issue.data.sections.map((section) =>
          `<h3>${escapeXml(section.eyebrow)}</h3>\n<p><em>${escapeXml(section.title)}</em><br />${section.apps.map(appLink).filter(Boolean).join(', ')}</p>`),
        extras.length > 0 && `<p>Plus ${extras.join(' and ')}.</p>`,
        `<p><a href="${issueLink}"><strong>${escapeXml(issue.data.rss?.cta ?? 'Read this issue')}</strong></a></p>`
      ].filter(Boolean).join('\n');

      return `
        <item>
          <title>${escapeXml(title)}</title>
          <description>${escapeXml(`${name} · ${issue.data.dek}`)}</description>
          <content:encoded><![CDATA[${escapeCdata(content)}]]></content:encoded>
          <media:content url="${escapeXml(imageUrl)}" medium="image" type="image/png" width="1200" height="630" />
          <link>${escapeXml(permalink)}</link>
          <guid isPermaLink="true">${escapeXml(permalink)}</guid>
          <pubDate>${formatRssDate(issue.data.slug)}</pubDate>
        </item>`;
    })
    .join('\n');

  const latestIssue = sortedIssues[0];
  const lastBuildDate = latestIssue ? formatRssDate(latestIssue.data.slug) : new Date().toUTCString();
  const feedLink = new URL('/rss.xml', site).href;
  const homeLink = new URL('/', site).href;
  const imageUrl = new URL('/icon-512.png', site).href;
  const description = siteCopy['site.feedDescription'];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>App Waypoint</title>
    <description>${escapeXml(description)}</description>
    <link>${escapeXml(homeLink)}</link>
    <atom:link href="${escapeXml(feedLink)}" rel="self" type="application/rss+xml" />
    <language>en-US</language>
    <image>
      <url>${escapeXml(imageUrl)}</url>
      <title>App Waypoint</title>
      <link>${escapeXml(homeLink)}</link>
    </image>
    <generator>App Waypoint</generator>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600'
    }
  });
}
