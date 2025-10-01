import type { APIRoute } from 'astro'
import { z } from 'zod'
import { getAllPosts, createPost } from '@lib/posts'

const QuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
  status: z.enum(['published', 'draft', 'all']).default('all'),
  category: z.string().optional(),
  zodiacSign: z.string().optional(),
  search: z.string().optional(),
  orderBy: z.enum(['pubDate', 'title']).default('pubDate'),
  order: z.enum(['desc', 'asc']).default('desc'),
})

const CreatePostSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(50).max(300),
  author: z.string().min(1),
  category: z.string().optional(),
  zodiacSign: z.string().optional(),
  tags: z.array(z.string()).optional(),
  content: z.string().min(1),
  draft: z.boolean().optional(),
  featured: z.boolean().optional(),
  readingTime: z.number().optional(),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
  targetAudience: z.string().optional(),
  humorLevel: z.enum(['subtle', 'moderate', 'savage', 'brutal']).optional(),
  relatedSigns: z.array(z.string()).optional(),
})

export const GET: APIRoute = async ({ url }) => {
  try {
    const params = Object.fromEntries(url.searchParams.entries())
    const validatedParams = QuerySchema.parse(params)

    let posts = await getAllPosts()

    // Filtrar por status
    if (validatedParams.status === 'published') {
      posts = posts.filter((p) => !p.data.draft)
    } else if (validatedParams.status === 'draft') {
      posts = posts.filter((p) => p.data.draft)
    }

    // Filtrar por categoria
    if (validatedParams.category) {
      posts = posts.filter((p) => p.data.category === validatedParams.category)
    }

    // Filtrar por zodiacSign
    if (validatedParams.zodiacSign) {
      posts = posts.filter((p) => p.data.zodiacSign === validatedParams.zodiacSign)
    }

    // Filtrar por busca
    if (validatedParams.search) {
      const searchLower = validatedParams.search.toLowerCase()
      posts = posts.filter(
        (p) =>
          p.data.title?.toLowerCase().includes(searchLower) ||
          p.data.description?.toLowerCase().includes(searchLower)
      )
    }

    // Ordenar
    posts.sort((a, b) => {
      if (validatedParams.orderBy === 'pubDate') {
        const dateA = a.data.pubDate ? new Date(a.data.pubDate).getTime() : 0
        const dateB = b.data.pubDate ? new Date(b.data.pubDate).getTime() : 0
        return validatedParams.order === 'desc' ? dateB - dateA : dateA - dateB
      } else {
        const titleA = a.data.title?.toLowerCase() || ''
        const titleB = b.data.title?.toLowerCase() || ''
        return validatedParams.order === 'desc'
          ? titleB.localeCompare(titleA)
          : titleA.localeCompare(titleB)
      }
    })

    // Paginação
    const total = posts.length
    const totalPages = Math.ceil(total / validatedParams.limit)
    const offset = (validatedParams.page - 1) * validatedParams.limit
    const paginatedPosts = posts.slice(offset, offset + validatedParams.limit)

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          posts: paginatedPosts.map((post) => ({
            id: post.slug,
            slug: post.slug,
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.pubDate,
            updatedDate: post.data.updatedDate,
            author: post.data.author,
            category: post.data.category,
            zodiacSign: post.data.zodiacSign,
            tags: post.data.tags,
            heroImage: post.data.heroImage,
            featured: post.data.featured,
            draft: post.data.draft,
            readingTime: post.data.readingTime,
            difficulty: post.data.difficulty,
            targetAudience: post.data.targetAudience,
            humorLevel: post.data.humorLevel,
          })),
          pagination: {
            page: validatedParams.page,
            limit: validatedParams.limit,
            total,
            totalPages,
            hasNext: validatedParams.page < totalPages,
            hasPrev: validatedParams.page > 1,
          },
        },
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.error('Get posts error:', error)
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Erro ao buscar posts',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json()
    const validated = CreatePostSchema.parse(data)

    const result = await createPost(validated)

    if (!result.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: result.error,
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          filename: result.filename,
        },
        message: 'Post criado com sucesso',
      }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.error('Create post error:', error)
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Erro ao criar post',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
