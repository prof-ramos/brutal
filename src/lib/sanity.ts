import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Sanity client configuration
export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  useCdn: true, // Enable CDN for faster response times
  apiVersion: '2024-09-29', // Use current date or later
})

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Common GROQ queries for the astrology blog
export const queries = {
  // Get all published blog posts
  allPosts: `*[_type == "blogPost" && !draft] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    publishedAt,
    updatedAt,
    heroImage,
    author->{
      name,
      slug,
      image
    },
    categories[]->{
      title,
      slug,
      color
    },
    zodiacSign->{
      name,
      slug,
      symbol
    },
    tags,
    readingTime,
    difficulty,
    targetAudience,
    humorLevel,
    featured
  }`,

  // Get a single post by slug
  postBySlug: `*[_type == "blogPost" && slug.current == $slug && !draft][0] {
    _id,
    title,
    slug,
    description,
    publishedAt,
    updatedAt,
    heroImage,
    body,
    author->{
      name,
      slug,
      image,
      bio,
      zodiacSign->{
        name,
        symbol
      }
    },
    categories[]->{
      title,
      slug,
      color
    },
    zodiacSign->{
      name,
      slug,
      symbol,
      element,
      traits
    },
    relatedSigns[]->{
      name,
      slug,
      symbol
    },
    tags,
    readingTime,
    difficulty,
    targetAudience,
    humorLevel,
    featured
  }`,

  // Get posts by zodiac sign
  postsByZodiacSign: `*[_type == "blogPost" && zodiacSign->slug.current == $slug && !draft] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    publishedAt,
    heroImage,
    author->{
      name,
      slug
    },
    zodiacSign->{
      name,
      slug,
      symbol
    },
    tags,
    readingTime,
    humorLevel
  }`,

  // Get posts by category
  postsByCategory: `*[_type == "blogPost" && $categorySlug in categories[]->slug.current && !draft] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    publishedAt,
    heroImage,
    author->{
      name,
      slug
    },
    categories[]->{
      title,
      slug,
      color
    },
    zodiacSign->{
      name,
      symbol
    },
    tags,
    readingTime
  }`,

  // Get featured posts
  featuredPosts: `*[_type == "blogPost" && featured == true && !draft] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    description,
    publishedAt,
    heroImage,
    author->{
      name,
      slug
    },
    zodiacSign->{
      name,
      symbol
    },
    humorLevel
  }`,

  // Get all zodiac signs
  allZodiacSigns: `*[_type == "zodiacSign"] | order(name asc) {
    _id,
    name,
    slug,
    symbol,
    element,
    modality,
    rulingPlanet,
    dateRange,
    traits,
    strengths,
    weaknesses,
    color,
    description
  }`,

  // Get all categories
  allCategories: `*[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    color,
    icon
  }`,

  // Get all authors
  allAuthors: `*[_type == "author"] {
    _id,
    name,
    slug,
    image,
    bio,
    zodiacSign->{
      name,
      symbol
    },
    specialties
  }`,
}

// Helper functions
export async function getAllPosts() {
  return await client.fetch(queries.allPosts)
}

export async function getPostBySlug(slug: string) {
  return await client.fetch(queries.postBySlug, { slug })
}

export async function getPostsByZodiacSign(slug: string) {
  return await client.fetch(queries.postsByZodiacSign, { slug })
}

export async function getPostsByCategory(categorySlug: string) {
  return await client.fetch(queries.postsByCategory, { categorySlug })
}

export async function getFeaturedPosts() {
  return await client.fetch(queries.featuredPosts)
}

export async function getAllZodiacSigns() {
  return await client.fetch(queries.allZodiacSigns)
}

export async function getAllCategories() {
  return await client.fetch(queries.allCategories)
}

export async function getAllAuthors() {
  return await client.fetch(queries.allAuthors)
}