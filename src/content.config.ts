import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { categorySlugs } from './data/categories';

const categoryEnum = z.enum(categorySlugs as [string, ...string[]]);

const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: z.object({
    name: z.string().min(1).max(50),
    description: z.string().min(40).max(240),
    bestFor: z.string().min(25).max(180),
    tags: z.array(z.string().min(1).max(30)).min(2).max(6),
    categories: z.array(categoryEnum).min(1).max(categorySlugs.length)
      .refine((value) => new Set(value).size === value.length, {
        message: 'categories must not contain duplicates'
      }),
    collections: z.array(z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)).max(10).optional(),
    /* The SERP line. `description` is written for a card and runs to 240, past the
       ~160 Google shows, so a page whose description would truncate sets this instead.
       Only one app needs it today; the schema caps it at the limit rather than trusting
       the writer to count. */
    metaDescription: z.string().min(70).max(160).optional(),
    source: z.string().min(1).max(140),
    homepage: z.string().url(),
    icon: z.string().regex(/^\/[A-Za-z0-9/_-]+\.(?:png|jpg|jpeg|webp|svg|ico)$/).optional(),
    iconStyle: z.enum(['plain', 'backed', 'contain']).default('plain'),
    /* The light an Editor's Pick strikes in the hero. Normalised from the app's own
       icon to a fixed lightness and chroma, so every pick reads at the same weight.
       Only the pick card uses it. Generate with scripts/extract-icon-accent.mjs. */
    iconAccent: z.string().regex(/^#[0-9a-f]{6}$/).optional(),
    /* Which category's mark an icon-less app falls back to. The default is the first
       entry in categories, but that line is derived from tags and rewritten by
       scripts/sync-app-categories.mjs, so it cannot carry an editorial decision.
       This can. It must name one of the app's own categories. */
    iconCategory: categoryEnum.optional()
  })
});

const issues = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/issues' }),
  schema: z.object({
    number: z.string().regex(/^\d{3}$/),
    slug: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    date: z.string().min(1).max(40),
    dek: z.string().min(80).max(320),
    /* The SERP line, when the dek runs past the ~160 Google shows. The dek is published
       standfirst copy and is not shortened to suit a search result; this carries the
       shorter form instead. Same contract as an app's metaDescription. */
    metaDescription: z.string().min(70).max(160).optional(),
    rss: z.object({
      title: z.string().min(4).max(90),
      cta: z.string().min(4).max(40).default('Read this issue')
    }),
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
    /* Recorded, not published. The issue page stopped rendering source notes on
       2026-09-01; they stay in frontmatter as the editorial audit trail, the same
       way an app record's `source` field is provenance rather than reader copy. */
    sourceNotes: z.array(z.string().min(1).max(180)).min(1).max(10).optional()
  })
});

export const collections = { apps, issues };
