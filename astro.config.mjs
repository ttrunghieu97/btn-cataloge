import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://catalog.bachthaongan.com.vn',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'always'
  }
});
