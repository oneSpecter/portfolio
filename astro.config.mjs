import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/portfolio/',
  site: 'https://onespecter.github.io/portfolio/',
  integrations: [tailwind()],
  outDir: 'dist',
  output: 'static',
});
