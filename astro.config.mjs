import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/* Dev only: mounts the local catalogue editor at /edit on the dev server. The editor is a
   tool for this working tree and is not tracked, so a clone or a Netlify build without its
   files simply has no editor, and `astro build` never mounts it. The editor answers at the
   HTTP server itself, ahead of Astro's routing, because `trailingSlash: 'always'` makes that
   routing 404 /edit and the editor's API paths before any middleware can see them. Requests
   that are not the editor's pass straight through to the dev server. */
const catalogueEditor = () => ({
  name: 'catalogue-editor',
  hooks: {
    'astro:config:setup': async ({ command, updateConfig }) => {
      const file = new URL('./scripts/app-editor-handler.mjs', import.meta.url);
      if (command !== 'dev' || !existsSync(file)) return;
      const { createEditorHandler } = await import(file.href);
      const handle = createEditorHandler({ root: fileURLToPath(new URL('./', import.meta.url)), base: '/edit' });
      updateConfig({
        vite: {
          /* Tells the header the editor is mounted, so it shows the link to it. */
          define: { 'import.meta.env.CATALOGUE_EDITOR': 'true' },
          plugins: [{
            name: 'catalogue-editor-dev',
            configureServer(server) {
              const httpServer = server.httpServer;
              if (!httpServer) return;
              const listeners = httpServer.listeners('request');
              httpServer.removeAllListeners('request');
              httpServer.on('request', (request, response) => {
                handle(request, response).then(
                  (handled) => { if (!handled) for (const listener of listeners) listener.call(httpServer, request, response); },
                  () => { response.statusCode = 500; response.end(); }
                );
              });
            }
          }]
        }
      });
    }
  }
});

export default defineConfig({
  site: 'https://appwaypoint.app',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [
    catalogueEditor(),
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
