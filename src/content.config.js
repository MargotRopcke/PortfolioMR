import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const workCollections = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
    schema: z.object({
            name: z.string(),
            pic: image(),
        }),
});

const photoCollections = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/photo" }),
    schema: z.object({
            title: z.string(),
            date: z.string(),
            pic: image(),
        }),
});

export const collections = {
    workCollections,
    photoCollections,
};