import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://appwaypoint.app',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      /* Issue pages are the only URLs whose freshness a crawler can act on: the site
         publishes one every Friday and never edits an old one. Their own date is the
         honest lastmod. Everything else is generated from content that changes on no
         schedule, so it carries none rather than a lie. `changefreq` and `priority`
         are omitted on purpose; Google ignores both. */
      serialize(item) {
        const issue = item.url.match(/\/issues\/(\d{4}-\d{2}-\d{2})\/$/);
        if (issue) item.lastmod = `${issue[1]}T00:00:00.000Z`;
        return item;
      }
    })
  ]
});
