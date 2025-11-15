import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const workCollections = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            image: image(),
        }),
});

const photoCollections = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/photo" }),
    schema: () => z.object({
        title: z.string(),
        date: z.string(),
        image: image(),
    }),
});

export const collections = {
    work: workCollections,
    photo: photoCollections,
};