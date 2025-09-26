import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Astrology blog schema with zodiac and mystical metadata
const blogCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/blog",
    // Enable incremental cache for better performance
    cache: true,
    incremental: true
  }),
  schema: ({ image }) => z.object({
    // Basic metadata
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string(),

    // Astrology-specific categories
    category: z.enum([
      'zodiac-signs',
      'horoscopes',
      'compatibility',
      'birth-charts',
      'moon-phases',
      'planetary-transits',
      'tarot-readings',
      'crystal-healing',
      'spiritual-guidance',
      'cosmic-humor',
      'astro-memes',
      'sign-roasting'
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

    // Astrology-specific metadata
    zodiacSign: z.enum([
      'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
      'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'
    ]).optional(),

    targetAudience: z.enum([
      'astrology-beginners',
      'zodiac-enthusiasts',
      'spiritual-seekers',
      'cosmic-skeptics',
      'meme-lovers'
    ]).optional(),

    // Humor level for astrological content
    humorLevel: z.enum(['subtle', 'moderate', 'savage', 'brutal']).optional(),

    // Related signs or cosmic events
    relatedSigns: z.array(z.string()).optional(),

    // Related content
    relatedPosts: z.array(z.string()).optional(),
  })
});

export const collections = {
  'blog': blogCollection,
};
