import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.{mdx, md}',
    base: 'src/content/blog',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      intro: z.string(),
      seoDescription: z.string().trim().min(1).optional(),
      publishedAt: z.date(),
      updatedAt: z.date().optional(),
      tags: z.array(z.string()),
      heroImage: image(),
      draft: z.boolean().default(false).optional(),
    }),
});

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.{mdx, md}',
    base: 'src/content/projects',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      intro: z.string(),
      seoDescription: z.string().trim().min(1).optional(),
      featured: z.boolean().default(false),
      order: z.number().optional(),
      tags: z.array(z.string()),
      heroImage: image().optional(),
      githubUrl: z.string().optional(),
      siteUrl: z.string().optional(),
      techStack: z
        .array(
          z.object({
            name: z.string(),
            imagePath: image().optional(),
          }),
        )
        .optional(),
    }),
});

const workProjects = defineCollection({
  loader: glob({
    pattern: '**/*.{mdx, md}',
    base: 'src/content/work-projects',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      intro: z.string(),
      seoDescription: z.string().trim().min(1).optional(),
      publishedAt: z.date(),
      heroImage: image(),
      companySite: z.string().optional(),
      draft: z.boolean().default(false).optional(),
    }),
});

const experience = defineCollection({
  loader: glob({
    base: 'src/content/experience',
    pattern: '**/*.{mdx, md}',
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    from: z.date(),
    to: z.date().nullish(),
    isPresent: z.boolean().default(false),
    jobCount: z.number(),
  }),
});

const talks = defineCollection({
  loader: glob({
    pattern: '**/*.{mdx, md}',
    base: 'src/content/talks',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      intro: z.string(),
      seoDescription: z.string().trim().min(1).optional(),
      publishedAt: z.date(),
      location: z.string(),
      slideUrl: z.string(),
      videoUrl: z.string().optional(),
      heroImage: image().optional(),
      draft: z.boolean().default(false).optional(),
    }),
});

export const collections = { blog, projects, workProjects, experience, talks };
