import { defineCollection, z } from 'astro:content';

// Psychology blog schema with comprehensive metadata
const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    // Basic metadata
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string(),

    // Psychology-specific categories
    category: z.enum([
      'cognitive-psychology',
      'behavioral-psychology',
      'clinical-psychology',
      'developmental-psychology',
      'social-psychology',
      'neuropsychology',
      'positive-psychology',
      'therapy-techniques',
      'mental-health',
      'research-insights',
      'case-studies',
      'wellness-tips'
    ]).optional(),

    // Tags for better content discovery
    tags: z.array(z.string()),

    // Content metadata
    readingTime: z.number().optional(), // minutes
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),

    // Images and media
    heroImage: image().optional(),
    heroImageAlt: z.string().optional(),

    // SEO and social
    draft: z.boolean().optional(),
    featured: z.boolean().optional(),

    // Psychology-specific metadata
    targetAudience: z.enum([
      'general-public',
      'students',
      'professionals',
      'researchers',
      'clinicians'
    ]).optional(),

    // Content warnings for sensitive topics
    contentWarning: z.array(z.string()).optional(),

    // Related content
    relatedPosts: z.array(z.string()).optional(),

    // Scientific validation
    references: z.array(z.object({
      title: z.string(),
      authors: z.string(),
      journal: z.string().optional(),
      year: z.number(),
      doi: z.string().optional(),
      url: z.string().url().optional()
    })).optional(),
  })
});

export const collections = {
  'blog': blogCollection,
};