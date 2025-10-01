import { defineMiddleware } from 'astro:middleware'
import { verifyToken } from './lib/admin/auth'
import { getSessionToken } from './lib/admin/session'

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url

  // Rotas que não precisam de autenticação
  const publicRoutes = ['/admin/login', '/api/admin/auth/login']

  // Verificar se é uma rota admin (mas não a página de login)
  if (pathname.startsWith('/admin') && !publicRoutes.includes(pathname)) {
    const token = getSessionToken(context.cookies)

    if (!token) {
      // Redirecionar para login se não houver token
      return context.redirect('/admin/login')
    }

    const verified = await verifyToken(token)
    if (!verified.valid) {
      // Redirecionar para login se token inválido
      return context.redirect('/admin/login')
    }

    // Adicionar informações do usuário ao context.locals
    context.locals.user = {
      username: verified.username || '',
      authenticated: true,
    }
  }

  // Verificar APIs protegidas (exceto login)
  if (
    pathname.startsWith('/api/admin') &&
    !publicRoutes.includes(pathname) &&
    pathname !== '/api/admin/auth/login'
  ) {
    const token = getSessionToken(context.cookies)

    if (!token) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Não autenticado',
        }),
        {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
    }

    const verified = await verifyToken(token)
    if (!verified.valid) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Token inválido ou expirado',
        }),
        {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
    }

    // Adicionar informações do usuário ao context.locals
    context.locals.user = {
      username: verified.username || '',
      authenticated: true,
    }
  }

  return next()
})
