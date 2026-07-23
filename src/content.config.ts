import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: z.object({
    name: z.string().min(1).max(50),
    description: z.string().min(40).max(240),
    bestFor: z.string().min(25).max(180),
    tags: z.array(z.string().min(1).max(30)).min(2).max(6),
    source: z.string().min(1).max(140),
    homepage: z.string().url()
  })
});

const issues = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/issues' }),
  schema: z.object({
    number: z.string().regex(/^\d{3}$/),
    slug: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    date: z.string().min(1).max(40),
    dek: z.string().min(80).max(320),
    sections: z.array(z.object({
      eyebrow: z.string().min(1).max(40),
      title: z.string().min(1).max(100),
      apps: z.array(z.string().min(1)).min(1).max(6)
    })).min(1).max(6),
    editorsPick: z.object({
      app: z.string().min(1),
      reason: z.string().min(40).max(280)
    }).optional(),
    video: z.object({
      title: z.string().min(1).max(140),
      creator: z.string().min(1).max(80),
      description: z.string().min(40).max(280),
      url: z.string().url()
    }),
    readings: z.array(z.object({
      title: z.string().min(1).max(100),
      publication: z.string().min(1).max(60),
      description: z.string().min(40).max(240),
      url: z.string().url()
    })).min(1).max(5),
    sourceNotes: z.array(z.string().min(1).max(180)).min(1).max(10)
  })
});

export const collections = { apps, issues };
