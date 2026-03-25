import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://astropath.com.br',
  output: 'static',
  adapter: vercel(),
});
