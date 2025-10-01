import type { APIRoute } from 'astro'
import { getPostBySlug, updatePost, deletePost } from '@lib/posts'

export const GET: APIRoute = async ({ params }) => {
  try {
    const { id } = params

    if (!id) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Slug do post não fornecido',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const post = await getPostBySlug(id)

    if (!post) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Post não encontrado',
        }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: {
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
          heroImageAlt: post.data.heroImageAlt,
          featured: post.data.featured,
          draft: post.data.draft,
          readingTime: post.data.readingTime,
          difficulty: post.data.difficulty,
          targetAudience: post.data.targetAudience,
          humorLevel: post.data.humorLevel,
          relatedSigns: post.data.relatedSigns,
          body: post.body,
        },
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.error('Get post error:', error)
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Erro ao buscar post',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}

export const PUT: APIRoute = async ({ params, request }) => {
  try {
    const { id } = params

    if (!id) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Slug do post não fornecido',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const data = await request.json()
    const result = await updatePost(id, data)

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
        message: 'Post atualizado com sucesso',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.error('Update post error:', error)
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Erro ao atualizar post',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}

export const DELETE: APIRoute = async ({ params }) => {
  try {
    const { id } = params

    if (!id) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Slug do post não fornecido',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const result = await deletePost(id)

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
        message: 'Post excluído com sucesso',
        deletedId: id,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.error('Delete post error:', error)
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Erro ao excluir post',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
