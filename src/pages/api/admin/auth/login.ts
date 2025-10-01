import type { APIRoute } from 'astro'
import { z } from 'zod'
import { authenticateUser } from '@lib/admin/auth'
import { setSessionCookie } from '@lib/admin/session'

const LoginSchema = z.object({
  username: z.string().min(1, 'Username é obrigatório'),
  password: z.string().min(1, 'Password é obrigatório'),
})

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const data = await request.json()

    // Validar dados
    const validationResult = LoginSchema.safeParse(data)
    if (!validationResult.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Dados inválidos',
          details: validationResult.error.flatten().fieldErrors,
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
    }

    const { username, password } = validationResult.data

    // Autenticar usuário
    const authResult = await authenticateUser(username, password)

    if (!authResult.success || !authResult.token) {
      return new Response(
        JSON.stringify({
          success: false,
          error: authResult.error || 'Credenciais inválidas',
        }),
        {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
    }

    // Definir cookie de sessão
    setSessionCookie(cookies, authResult.token)

    return new Response(
      JSON.stringify({
        success: true,
        token: authResult.token,
        expiresIn: authResult.expiresIn,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  } catch (error) {
    console.error('Login error:', error)
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Erro no servidor ao processar login',
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
