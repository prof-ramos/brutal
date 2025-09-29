// TinaCMS utilities for Astro content collections integration
import type { TinaBlogPost, ZodiacSign } from '../types/tina';
import { ZODIAC_SIGNS } from '../types/tina';

/**
 * Convert TinaCMS blog post data to Astro content collection format
 */
export function tinaToAstroContent(tinaPost: TinaBlogPost) {
  return {
    title: tinaPost.title,
    description: tinaPost.description,
    pubDate: new Date(tinaPost.pubDate),
    updatedDate: tinaPost.updatedDate ? new Date(tinaPost.updatedDate) : undefined,
    author: tinaPost.author,
    category: tinaPost.category,
    tags: tinaPost.tags || [],
    readingTime: tinaPost.readingTime,
    difficulty: tinaPost.difficulty,
    heroImage: tinaPost.heroImage,
    heroImageAlt: tinaPost.heroImageAlt,
    draft: tinaPost.draft || false,
    featured: tinaPost.featured || false,
    zodiacSign: tinaPost.zodiacSign,
    targetAudience: tinaPost.targetAudience,
    humorLevel: tinaPost.humorLevel,
    relatedSigns: tinaPost.relatedSigns || [],
    relatedPosts: tinaPost.relatedPosts || [],
  };
}

/**
 * Generate a slug from title following the existing pattern
 */
export function generateSlug(title: string): string {
  const date = new Date().toISOString().split('T')[0];
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50)
    .replace(/-+$/, '');
  return `${date}-${slug}`;
}

/**
 * Get zodiac sign display information
 */
export function getZodiacDisplay(sign: ZodiacSign) {
  return ZODIAC_SIGNS[sign];
}

/**
 * Get zodiac sign color based on element
 */
export function getZodiacColor(sign: ZodiacSign): string {
  const element = ZODIAC_SIGNS[sign].element;
  switch (element) {
    case 'Fire': return '#FF6B00'; // accent (orange)
    case 'Earth': return '#4CA6DF'; // primary (blue)
    case 'Air': return '#BFFF00'; // secondary (lime)
    case 'Water': return '#5E18EB'; // deep (purple)
    default: return '#EE99B8'; // tertiary (pink)
  }
}

/**
 * Convert TinaCMS rich text to markdown
 */
export function tinaRichTextToMarkdown(body: any): string {
  if (!body || !body.children) return '';

  return body.children
    .map((child: any) => {
      switch (child.type) {
        case 'h1':
          return `# ${child.children?.map((c: any) => c.text).join('') || ''}`;
        case 'h2':
          return `## ${child.children?.map((c: any) => c.text).join('') || ''}`;
        case 'h3':
          return `### ${child.children?.map((c: any) => c.text).join('') || ''}`;
        case 'h4':
          return `#### ${child.children?.map((c: any) => c.text).join('') || ''}`;
        case 'p':
          return child.children?.map((c: any) => {
            if (c.type === 'text') {
              let text = c.text || '';
              if (c.bold) text = `**${text}**`;
              if (c.italic) text = `*${text}*`;
              if (c.code) text = `\`${text}\``;
              return text;
            }
            if (c.type === 'a') {
              return `[${c.children?.map((cc: any) => cc.text).join('') || ''}](${c.url || ''})`;
            }
            return c.text || '';
          }).join('') || '';
        case 'ul':
          return child.children?.map((item: any) =>
            `- ${item.children?.map((c: any) => c.children?.map((cc: any) => cc.text).join('')).join('') || ''}`
          ).join('\n') || '';
        case 'ol':
          return child.children?.map((item: any, index: number) =>
            `${index + 1}. ${item.children?.map((c: any) => c.children?.map((cc: any) => cc.text).join('')).join('') || ''}`
          ).join('\n') || '';
        case 'blockquote':
          return `> ${child.children?.map((c: any) => c.children?.map((cc: any) => cc.text).join('')).join('\n> ') || ''}`;
        case 'code_block':
          return `\`\`\`${child.lang || ''}\n${child.children?.map((c: any) => c.text).join('') || ''}\n\`\`\``;
        case 'hr':
          return '---';
        case 'img':
          return `![${child.alt || ''}](${child.url || ''})`;
        default:
          return child.children?.map((c: any) => c.text).join('') || '';
      }
    })
    .filter(Boolean)
    .join('\n\n');
}

/**
 * Validate blog post data
 */
export function validateBlogPost(post: Partial<TinaBlogPost>): string[] {
  const errors: string[] = [];

  if (!post.title?.trim()) {
    errors.push('Title is required');
  }

  if (!post.description?.trim()) {
    errors.push('Description is required');
  }

  if (!post.author?.trim()) {
    errors.push('Author is required');
  }

  if (!post.pubDate) {
    errors.push('Publication date is required');
  }

  if (post.readingTime && (post.readingTime < 1 || post.readingTime > 120)) {
    errors.push('Reading time must be between 1 and 120 minutes');
  }

  return errors;
}

/**
 * Format date for display
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Get humor level emoji
 */
export function getHumorEmoji(level?: string): string {
  switch (level) {
    case 'subtle': return '😏';
    case 'moderate': return '😄';
    case 'savage': return '🔥';
    case 'brutal': return '💀';
    default: return '😊';
  }
}

/**
 * Generate content metadata for SEO
 */
export function generateSEOMetadata(post: TinaBlogPost) {
  const zodiacInfo = post.zodiacSign ? ZODIAC_SIGNS[post.zodiacSign] : null;

  return {
    title: `${post.title} | Psicóloga em Outra Dimensão`,
    description: post.description,
    keywords: [
      ...post.tags,
      ...(post.zodiacSign ? [post.zodiacSign, zodiacInfo?.element.toLowerCase()] : []),
      'astrologia',
      'signos',
      'horóscopo',
    ].filter(Boolean),
    author: post.author,
    publishedTime: post.pubDate,
    modifiedTime: post.updatedDate || post.pubDate,
    category: post.category,
    tags: post.tags.join(', '),
  };
}