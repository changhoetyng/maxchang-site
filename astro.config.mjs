import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import svgr from "vite-plugin-svgr";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  site: "https://maxchang.xyz",
  vite: {
    plugins: [svgr({ include: "**/*.svg?react" })],
  },
});
