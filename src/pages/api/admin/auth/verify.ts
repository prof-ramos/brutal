import type { APIRoute } from 'astro'
import { verifyToken } from '@lib/admin/auth'
import { getSessionToken } from '@lib/admin/session'

export const GET: APIRoute = async ({ cookies, request }) => {
  try {
    // Obter token do cookie ou header
    let token = getSessionToken(cookies)

    if (!token) {
      const authHeader = request.headers.get('Authorization')
      if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.substring(7)
      }
    }

    if (!token) {
      return new Response(
        JSON.stringify({
          valid: false,
          error: 'Token não fornecido',
        }),
        {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
    }

    // Verificar token
    const verifyResult = await verifyToken(token)

    if (!verifyResult.valid) {
      return new Response(
        JSON.stringify({
          valid: false,
          error: verifyResult.error || 'Token inválido',
        }),
        {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
    }

    return new Response(
      JSON.stringify({
        valid: true,
        username: verifyResult.username,
        expiresAt: verifyResult.expiresAt,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  } catch (error) {
    console.error('Verify error:', error)
    return new Response(
      JSON.stringify({
        valid: false,
        error: 'Erro no servidor ao verificar token',
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
