import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const JWT_SECRET = import.meta.env.JWT_SECRET || process.env.JWT_SECRET || ''
const ADMIN_USERNAME = import.meta.env.ADMIN_USERNAME || process.env.ADMIN_USERNAME || 'admin'
const ADMIN_PASSWORD = import.meta.env.ADMIN_PASSWORD || process.env.ADMIN_PASSWORD || ''
const SESSION_EXPIRE = 86400 // 24 horas em segundos

export interface TokenPayload {
  username: string
  iat: number
  exp: number
}

export interface VerifyResult {
  valid: boolean
  username?: string
  expiresAt?: string
  error?: string
}

/**
 * Gera um hash bcrypt para uma senha
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10)
}

/**
 * Compara uma senha com um hash bcrypt
 */
export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

/**
 * Autentica usuário com username e password
 * Retorna token JWT se credenciais válidas
 */
export async function authenticateUser(
  username: string,
  password: string
): Promise<{ success: boolean; token?: string; expiresIn?: number; error?: string }> {
  try {
    // Verificar username
    if (username !== ADMIN_USERNAME) {
      return {
        success: false,
        error: 'Credenciais inválidas',
      }
    }

    // Verificar se a senha do .env é um hash ou senha plana
    let isValid = false
    if (ADMIN_PASSWORD.startsWith('$2a$') || ADMIN_PASSWORD.startsWith('$2b$')) {
      // É um hash bcrypt
      isValid = await comparePassword(password, ADMIN_PASSWORD)
    } else {
      // É senha plana - comparar diretamente (não recomendado em produção)
      isValid = password === ADMIN_PASSWORD
    }

    if (!isValid) {
      return {
        success: false,
        error: 'Credenciais inválidas',
      }
    }

    // Gerar JWT token
    const token = jwt.sign({ username }, JWT_SECRET, {
      expiresIn: SESSION_EXPIRE,
    })

    return {
      success: true,
      token,
      expiresIn: SESSION_EXPIRE,
    }
  } catch (error) {
    console.error('Authentication error:', error)
    return {
      success: false,
      error: 'Erro ao autenticar',
    }
  }
}

/**
 * Verifica se um token JWT é válido
 */
export async function verifyToken(token: string): Promise<VerifyResult> {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload

    return {
      valid: true,
      username: decoded.username,
      expiresAt: new Date(decoded.exp * 1000).toISOString(),
    }
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return {
        valid: false,
        error: 'Token expirado',
      }
    }

    return {
      valid: false,
      error: 'Token inválido',
    }
  }
}

/**
 * Gera um novo token JWT
 */
export function generateToken(username: string): string {
  return jwt.sign({ username }, JWT_SECRET, {
    expiresIn: SESSION_EXPIRE,
  })
}
