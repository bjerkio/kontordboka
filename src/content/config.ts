import { defineCollection, z } from "astro:content";

const termCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    no: z.string(),
    en: z.string(),
  }),
});

export const collections = {
  terms: termCollection,
};
