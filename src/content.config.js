import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const workCollections = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
    schema: ({ image }) =>
        z.object({
            name: z.string(),

        }),
});

const photoCollections = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/photo" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),

    }),
});

const QuotesCard = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/quotes" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
    }),
});

const ExtrasCard = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/extras" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),

    }),
});

export const collections = {
    work: workCollections,
    photo: photoCollections,
    quotes: QuotesCard,
    extras: ExtrasCard,
};