import type { AstroCookies } from 'astro'

const COOKIE_NAME = 'admin_token'
const SESSION_EXPIRE = 86400 // 24 horas em segundos

export interface SessionData {
  token: string
  username: string
  expiresAt: Date
}

/**
 * Define o cookie de sessão do admin
 */
export function setSessionCookie(cookies: AstroCookies, token: string): void {
  cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'strict',
    maxAge: SESSION_EXPIRE,
    path: '/',
  })
}

/**
 * Obtém o token do cookie de sessão
 */
export function getSessionToken(cookies: AstroCookies): string | undefined {
  return cookies.get(COOKIE_NAME)?.value
}

/**
 * Remove o cookie de sessão (logout)
 */
export function clearSessionCookie(cookies: AstroCookies): void {
  cookies.delete(COOKIE_NAME, {
    path: '/',
  })
}

/**
 * Verifica se há um token de sessão válido
 */
export function hasSession(cookies: AstroCookies): boolean {
  const token = getSessionToken(cookies)
  return !!token
}
