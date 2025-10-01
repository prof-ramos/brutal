import type { APIRoute } from 'astro'
import { clearSessionCookie } from '@lib/admin/session'

export const POST: APIRoute = async ({ cookies }) => {
  try {
    // Limpar cookie de sessão
    clearSessionCookie(cookies)

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Logout realizado com sucesso',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  } catch (error) {
    console.error('Logout error:', error)
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Erro no servidor ao processar logout',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
}
