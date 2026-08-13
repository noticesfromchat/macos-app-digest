import { getCollection } from 'astro:content';

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const formatRssDate = (slug: string) => {
  const parsed = new Date(`${slug}T00:00:00Z`);
  return Number.isNaN(parsed.getTime()) ? new Date().toUTCString() : parsed.toUTCString();
};

export async function GET(context: { site?: URL }) {
  const site = context.site ?? new URL('https://appwaypoint.netlify.app');
  const issues = (await getCollection('issues'))
    .slice()
    .sort((a, b) => b.data.slug.localeCompare(a.data.slug));

  const items = issues
    .map((issue) => {
      const permalink = new URL(`/issues/${issue.data.slug}/`, site).href;
      const title = `App Waypoint — ${issue.data.date}`;
      const description = issue.data.dek;
      const pubDate = formatRssDate(issue.data.slug);

      return `
        <item>
          <title>${escapeXml(title)}</title>
          <description>${escapeXml(description)}</description>
          <link>${escapeXml(permalink)}</link>
          <guid isPermaLink="true">${escapeXml(permalink)}</guid>
          <pubDate>${pubDate}</pubDate>
        </item>`;
    })
    .join('\n');

  const latestIssue = issues[0];
  const lastBuildDate = latestIssue ? formatRssDate(latestIssue.data.slug) : new Date().toUTCString();
  const feedLink = new URL('/rss.xml', site).href;
  const homeLink = new URL('/', site).href;
  const description = 'App Waypoint is a curated weekly guide to exceptional Mac apps, productivity tools, automation utilities, AI software and worthwhile reading.';

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>App Waypoint</title>
    <description>${escapeXml(description)}</description>
    <link>${escapeXml(homeLink)}</link>
    <atom:link href="${escapeXml(feedLink)}" rel="self" type="application/rss+xml" />
    <language>en-US</language>
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
