import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://cacambasguarulhos.com.br',
  output: 'static',
  adapter: vercel(),
  integrations: [
    tailwind(),
    sitemap()
  ],
  compressHTML: true,
  image: {
    domains: ['cacambasguarulhos.com.br'],
  },
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'esbuild',
      chunkSizeWarningLimit: 1000,
    }
  }
});
