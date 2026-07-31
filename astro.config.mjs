import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://appwaypoint.netlify.app',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()]
});
