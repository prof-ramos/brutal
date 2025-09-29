import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ??
  import.meta.env.PUBLIC_SANITY_PROJECT_ID ??
  'ocywki9g'

const dataset =
  process.env.SANITY_STUDIO_DATASET ??
  import.meta.env.PUBLIC_SANITY_DATASET ??
  'production'

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: '2024-09-29',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export interface SanityCategory {
  _id?: string
  title?: string
  slug?: string
  color?: {hex?: string}
}

export interface SanityAuthor {
  name?: string
  slug?: string
  image?: SanityImageSource
  bio?: unknown
  zodiacSign?: SanityZodiacSign
}

export interface SanityZodiacSign {
  name?: string
  slug?: string
  symbol?: string
  element?: string
  traits?: string[]
}

export interface PortableTextMarkDef {
  _key: string
  _type: string
  href?: string
}

export interface PortableTextSpan {
  _key: string
  _type: 'span'
  text: string
  marks?: string[]
}

export interface PortableTextBlock {
  _key: string
  _type: string
  style?: string
  children?: PortableTextSpan[]
  markDefs?: PortableTextMarkDef[]
  listItem?: 'bullet' | 'number'
  level?: number
}

export type PortableText = (PortableTextBlock | Record<string, unknown>)[]

export interface SanityPost {
  id: string
  slug: string
  title: string
  description?: string
  publishedAt?: string
  updatedAt?: string
  heroImage?: SanityImageSource
  author?: SanityAuthor
  categories?: SanityCategory[]
  zodiacSign?: SanityZodiacSign
  tags?: string[]
  readingTime?: number
  difficulty?: string
  targetAudience?: string
  humorLevel?: string
  featured?: boolean
  body?: PortableText
  relatedSigns?: SanityZodiacSign[]
}

const queries = {
  allPosts: `*[_type == "blogPost" && !draft] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    updatedAt,
    heroImage,
    author->{
      name,
      "slug": slug.current,
      image
    },
    categories[]->{
      _id,
      title,
      "slug": slug.current,
      color
    },
    zodiacSign->{
      name,
      "slug": slug.current,
      symbol
    },
    tags,
    readingTime,
    difficulty,
    targetAudience,
    humorLevel,
    featured
  }`,
  postBySlug: `*[_type == "blogPost" && slug.current == $slug && !draft][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    updatedAt,
    heroImage,
    body,
    author->{
      name,
      "slug": slug.current,
      image,
      bio,
      zodiacSign->{
        name,
        symbol,
        "slug": slug.current
      }
    },
    categories[]->{
      _id,
      title,
      "slug": slug.current,
      color
    },
    zodiacSign->{
      name,
      "slug": slug.current,
      symbol,
      element,
      traits
    },
    relatedSigns[]->{
      name,
      "slug": slug.current,
      symbol
    },
    tags,
    readingTime,
    difficulty,
    targetAudience,
    humorLevel,
    featured
  }`,
  postsByZodiacSign: `*[_type == "blogPost" && zodiacSign->slug.current == $slug && !draft] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    heroImage,
    author->{
      name,
      "slug": slug.current
    },
    zodiacSign->{
      name,
      "slug": slug.current,
      symbol
    },
    tags,
    readingTime,
    humorLevel
  }`,
  postsByCategory: `*[_type == "blogPost" && $categorySlug in categories[]->slug.current && !draft] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    publishedAt,
    heroImage,
    author->{
      name,
      "slug": slug.current
    },
    categories[]->{
      _id,
      title,
      "slug": slug.current,
      color
    },
    zodiacSign->{
      name,
      "slug": slug.current,
      symbol
    },
    tags,
    readingTime
  }`,
  allZodiacSigns: `*[_type == "zodiacSign"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
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
  allCategories: `*[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    color,
    icon
  }`,
  allAuthors: `*[_type == "author"] {
    _id,
    name,
    "slug": slug.current,
    image,
    bio,
    zodiacSign->{
      name,
      "slug": slug.current,
      symbol
    },
    specialties
  }`,
}

function normalizeSlug(slug?: unknown, fallback?: string) {
  if (!slug) return fallback
  if (typeof slug === 'string') return slug
  if (typeof slug === 'object' && 'current' in slug && typeof (slug as {current?: unknown}).current === 'string') {
    return (slug as {current?: string}).current ?? fallback
  }
  return fallback
}

function normalizeCategory(category?: Record<string, any>): SanityCategory {
  if (!category) return {}
  return {
    _id: category._id ?? category._ref,
    title: category.title,
    slug: normalizeSlug(category.slug),
    color: category.color,
  }
}

function normalizeAuthor(author?: Record<string, any>): SanityAuthor | undefined {
  if (!author) return undefined
  return {
    name: author.name,
    slug: normalizeSlug(author.slug),
    image: author.image,
    bio: author.bio,
    zodiacSign: normalizeZodiac(author.zodiacSign),
  }
}

function normalizeZodiac(sign?: Record<string, any>): SanityZodiacSign | undefined {
  if (!sign) return undefined
  return {
    name: sign.name,
    slug: normalizeSlug(sign.slug),
    symbol: sign.symbol,
    element: sign.element,
    traits: sign.traits,
  }
}

function normalizePost(doc: Record<string, any>): SanityPost {
  const slug = normalizeSlug(doc.slug, doc._id)
  return {
    id: doc._id,
    slug: slug ?? doc._id,
    title: doc.title ?? 'Untitled',
    description: doc.description,
    publishedAt: doc.publishedAt,
    updatedAt: doc.updatedAt,
    heroImage: doc.heroImage,
    author: normalizeAuthor(doc.author),
    categories: Array.isArray(doc.categories)
      ? doc.categories.map((category: Record<string, any>) => normalizeCategory(category))
      : undefined,
    zodiacSign: normalizeZodiac(doc.zodiacSign),
    tags: Array.isArray(doc.tags) ? doc.tags : undefined,
    readingTime: doc.readingTime,
    difficulty: doc.difficulty,
    targetAudience: doc.targetAudience,
    humorLevel: doc.humorLevel,
    featured: Boolean(doc.featured),
    body: doc.body,
    relatedSigns: Array.isArray(doc.relatedSigns)
      ? (doc.relatedSigns
          .map((sign: Record<string, any>) => normalizeZodiac(sign))
          .filter(Boolean) as SanityZodiacSign[])
      : undefined,
  }
}

export async function getAllPosts(): Promise<SanityPost[]> {
  const posts = await client.fetch<Array<Record<string, any>>>(queries.allPosts)
  return posts.map((post) => normalizePost(post))
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  const post = await client.fetch<Record<string, any> | null>(queries.postBySlug, {slug})
  return post ? normalizePost(post) : null
}

export async function getPostsByZodiacSign(slug: string): Promise<SanityPost[]> {
  const posts = await client.fetch<Array<Record<string, any>>>(queries.postsByZodiacSign, {slug})
  return posts.map((post) => normalizePost(post))
}

export async function getPostsByCategory(categorySlug: string): Promise<SanityPost[]> {
  const posts = await client.fetch<Array<Record<string, any>>>(queries.postsByCategory, {categorySlug})
  return posts.map((post) => normalizePost(post))
}

export async function getAllZodiacSigns() {
  return client.fetch(queries.allZodiacSigns)
}

export async function getAllCategories() {
  return client.fetch(queries.allCategories)
}

export async function getAllAuthors() {
  return client.fetch(queries.allAuthors)
}
