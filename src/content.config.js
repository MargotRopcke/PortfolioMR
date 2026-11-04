import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const workCollections = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            image: image(),
            video: z.string().optional(),
            categories: z.array(z.enum([
                "UX Research",
                "Visual Design",
                "Motion Design",
                "Development",
            ])).optional(),
            madeWith: z.array(z.string()).optional(),
            assignment: z.string().optional(),
        }),
});

const ExtrasCard = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/extras" }),
    schema: ({ image }) => z.object({
        title: z.string(),
    }),
});

const aboutCollection = defineCollection({
    type: "data",
    schema: z.object({
        development: z.array(z.string()).optional(),
        visual: z.array(z.string()).optional(),
        ux: z.array(z.string()).optional()
    })
});

export const collections = {
    work: workCollections,
    extras: ExtrasCard,
    about: aboutCollection,
};