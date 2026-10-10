import { defineConfig } from 'astro/config';
import expressiveCode from "astro-expressive-code";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://0f01c1.com',
  integrations: [expressiveCode(), mdx(), sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
