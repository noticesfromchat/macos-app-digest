import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    bestFor: z.string(),
    tags: z.array(z.string()),
    source: z.string(),
    homepage: z.string().url()
  })
});

const issues = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/issues' }),
  schema: z.object({
    number: z.string(),
    slug: z.string(),
    date: z.string(),
    dek: z.string(),
    sections: z.array(z.object({
      eyebrow: z.string(),
      title: z.string(),
      apps: z.array(z.string())
    })),
    video: z.object({
      title: z.string(),
      creator: z.string(),
      description: z.string(),
      url: z.string().url()
    }),
    readings: z.array(z.object({
      title: z.string(),
      publication: z.string(),
      description: z.string(),
      url: z.string().url()
    })),
    sourceNotes: z.array(z.string())
  })
});

export const collections = { apps, issues };
