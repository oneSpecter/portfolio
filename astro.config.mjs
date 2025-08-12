import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://oneSpecter.github.io',
  base: '/portfolio/',
  outDir: 'dist',
  output: 'static',
});
