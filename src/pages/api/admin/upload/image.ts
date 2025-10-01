import type { APIRoute } from 'astro'
import { uploadImage } from '@lib/posts'

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData()
    const file = formData.get('image') as File
    const alt = (formData.get('alt') as string) || ''

    if (!file) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Nenhum arquivo fornecido',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // Validar tipo de arquivo
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
    if (!allowedTypes.includes(file.type)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Formato de arquivo inválido. Use JPG, PNG, WebP ou GIF.',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // Validar tamanho (5MB máximo)
    const maxSize = 5 * 1024 * 1024 // 5MB
    if (file.size > maxSize) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Arquivo muito grande. Tamanho máximo: 5MB',
        }),
        {
          status: 413,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    const result = await uploadImage(file, alt)

    if (!result.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: result.error,
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          url: result.url,
        },
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.error('Upload image error:', error)
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Erro ao fazer upload da imagem',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
