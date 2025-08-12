import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://TUONOME.github.io',
  base: '/NOME-REPO/',
  outDir: 'dist',
  output: 'static',  
});
