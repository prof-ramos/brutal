import { getCollection, type CollectionEntry } from 'astro:content'
import { writeFile, readFile, unlink, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join } from 'node:path'

export type BlogPost = CollectionEntry<'blog'>

/**
 * Obtém todos os posts do blog
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog')
  return posts.sort((a, b) => {
    const dateA = a.data.pubDate ? new Date(a.data.pubDate).getTime() : 0
    const dateB = b.data.pubDate ? new Date(b.data.pubDate).getTime() : 0
    return dateB - dateA
  })
}

/**
 * Obtém um post por slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getCollection('blog')
  return posts.find((post) => post.slug === slug)
}

/**
 * Obtém posts por categoria
 */
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getCollection('blog')
  return posts.filter((post) => post.data.category === category)
}

/**
 * Obtém posts por signo
 */
export async function getPostsByZodiacSign(sign: string): Promise<BlogPost[]> {
  const posts = await getCollection('blog')
  return posts.filter((post) => post.data.zodiacSign === sign)
}

/**
 * Obtém posts por tag
 */
export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getCollection('blog')
  return posts.filter((post) => post.data.tags?.includes(tag))
}

/**
 * Gera slug a partir do título
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Remove hífens duplicados
    .trim()
}

/**
 * Gera nome do arquivo markdown
 */
export function generateFilename(title: string, date?: Date): string {
  const dateStr = date ? date.toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
  const slug = generateSlug(title)
  return `${dateStr}-${slug}.md`
}

/**
 * Cria frontmatter YAML
 */
export function createFrontmatter(data: Record<string, any>): string {
  const lines = ['---']

  for (const [key, value] of Object.entries(data)) {
    if (value === undefined || value === null) continue

    if (typeof value === 'string') {
      // Escapar strings com aspas duplas se contiverem caracteres especiais
      const needsQuotes = value.includes(':') || value.includes('#') || value.includes('"')
      lines.push(`${key}: ${needsQuotes ? `"${value.replace(/"/g, '\\"')}"` : value}`)
    } else if (typeof value === 'boolean') {
      lines.push(`${key}: ${value}`)
    } else if (typeof value === 'number') {
      lines.push(`${key}: ${value}`)
    } else if (value instanceof Date) {
      lines.push(`${key}: ${value.toISOString()}`)
    } else if (Array.isArray(value)) {
      lines.push(`${key}: [${value.map(v => `"${v}"`).join(', ')}]`)
    } else {
      lines.push(`${key}: ${JSON.stringify(value)}`)
    }
  }

  lines.push('---')
  return lines.join('\n')
}

/**
 * Cria um novo post em markdown
 */
export async function createPost(data: {
  title: string
  description: string
  author: string
  category?: string
  zodiacSign?: string
  tags?: string[]
  content: string
  draft?: boolean
  featured?: boolean
  readingTime?: number
  difficulty?: string
  targetAudience?: string
  humorLevel?: string
  relatedSigns?: string[]
}): Promise<{ success: boolean; filename?: string; error?: string }> {
  try {
    const filename = generateFilename(data.title)
    const filepath = join(process.cwd(), 'src', 'content', 'blog', filename)

    // Verificar se já existe
    if (existsSync(filepath)) {
      return {
        success: false,
        error: 'Já existe um post com este título e data',
      }
    }

    const frontmatter = createFrontmatter({
      title: data.title,
      description: data.description,
      pubDate: new Date().toISOString(),
      author: data.author,
      category: data.category,
      zodiacSign: data.zodiacSign,
      tags: data.tags,
      readingTime: data.readingTime,
      difficulty: data.difficulty,
      targetAudience: data.targetAudience,
      humorLevel: data.humorLevel,
      draft: data.draft ?? false,
      featured: data.featured ?? false,
      relatedSigns: data.relatedSigns,
    })

    const fileContent = `${frontmatter}\n\n${data.content}`

    await writeFile(filepath, fileContent, 'utf-8')

    return {
      success: true,
      filename,
    }
  } catch (error) {
    console.error('Error creating post:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido',
    }
  }
}

/**
 * Atualiza um post existente
 */
export async function updatePost(
  slug: string,
  data: Partial<{
    title: string
    description: string
    author: string
    category: string
    zodiacSign: string
    tags: string[]
    content: string
    draft: boolean
    featured: boolean
    readingTime: number
    difficulty: string
    targetAudience: string
    humorLevel: string
    relatedSigns: string[]
  }>
): Promise<{ success: boolean; error?: string }> {
  try {
    const posts = await getCollection('blog')
    const post = posts.find((p) => p.slug === slug)

    if (!post) {
      return {
        success: false,
        error: 'Post não encontrado',
      }
    }

    const filepath = join(process.cwd(), 'src', 'content', 'blog', `${post.id}`)

    // Ler conteúdo atual
    const currentContent = await readFile(filepath, 'utf-8')
    const [, currentBody] = currentContent.split('---\n').slice(1)

    // Mesclar dados
    const updatedData = {
      ...post.data,
      ...data,
      updatedDate: new Date().toISOString(),
    }

    const frontmatter = createFrontmatter(updatedData)
    const newContent = data.content !== undefined ? data.content : currentBody.trim()
    const fileContent = `${frontmatter}\n\n${newContent}`

    await writeFile(filepath, fileContent, 'utf-8')

    return {
      success: true,
    }
  } catch (error) {
    console.error('Error updating post:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido',
    }
  }
}

/**
 * Exclui um post
 */
export async function deletePost(slug: string): Promise<{ success: boolean; error?: string }> {
  try {
    const posts = await getCollection('blog')
    const post = posts.find((p) => p.slug === slug)

    if (!post) {
      return {
        success: false,
        error: 'Post não encontrado',
      }
    }

    const filepath = join(process.cwd(), 'src', 'content', 'blog', `${post.id}`)

    await unlink(filepath)

    return {
      success: true,
    }
  } catch (error) {
    console.error('Error deleting post:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido',
    }
  }
}

/**
 * Upload de imagem
 */
export async function uploadImage(
  file: File,
  alt: string = ''
): Promise<{ success: boolean; url?: string; error?: string }> {
  try {
    const uploadDir = join(process.cwd(), 'public', 'images', 'blog')

    // Criar diretório se não existir
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }

    // Gerar nome único
    const timestamp = Date.now()
    const ext = file.name.split('.').pop()
    const filename = `${timestamp}-${generateSlug(file.name.replace(`.${ext}`, ''))}.${ext}`
    const filepath = join(uploadDir, filename)

    // Salvar arquivo
    const buffer = Buffer.from(await file.arrayBuffer())
    await writeFile(filepath, buffer)

    return {
      success: true,
      url: `/images/blog/${filename}`,
    }
  } catch (error) {
    console.error('Error uploading image:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido',
    }
  }
}
