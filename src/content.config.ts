import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/blogs",
    generateId: ({ entry }) => entry.replace(/\/index\.(md|mdx)$/, "").replace(/\.(md|mdx)$/, ""),
  }),
  schema: z.object({
    date: z.string(),
    title: z.string(),
    description: z.string().optional(),
    author: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
