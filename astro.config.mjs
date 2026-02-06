import { defineConfig } from 'astro/config';
import expressiveCode from "astro-expressive-code";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
  site: 'https://0f01c1.com',
  integrations: [expressiveCode(), mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [remarkGfm]
  }
});