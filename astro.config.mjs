import { defineConfig } from "astro/config";
import { fileURLToPath, URL } from "node:url";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  vite: {
    resolve: {
      alias: {
        "@/*": ["src/*"],
      },
    },
  },
});
