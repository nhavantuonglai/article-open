import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static',
  integrations: [react(), tailwind({ applyBaseStyles: false }), sitemap(), mdx()],
});