import { defineCollection, z } from "astro:content";

// Define una colección para el blog que incluye todas las entradas
const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        lang: z.string() // Para filtrar por idioma
    })
});

export const collections = {
    blog: blogCollection // Colección única para el blog
};
