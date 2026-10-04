import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://aluguel-de-cacambas-guarulhos.vercel.app',
  output: 'static',
  adapter: vercel(),
  integrations: [
    tailwind()
  ],
  compressHTML: true,
  image: {
    domains: ['aluguel-de-cacambas-guarulhos.vercel.app'],
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
