import type {
  PortableText,
  PortableTextBlock,
  PortableTextMarkDef,
  PortableTextSpan,
} from '@lib/sanity'
import {urlFor} from './sanity'

const htmlEscapeMap: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => htmlEscapeMap[char])
}

function escapeAttribute(value?: string) {
  if (!value) return ''
  return escapeHtml(value)
}

function renderSpan(span: PortableTextSpan, markDefs: PortableTextMarkDef[] = []) {
  let content = escapeHtml(span.text ?? '')
  if (!span.marks?.length) return content

  return span.marks.reduce((acc, mark) => {
    if (mark === 'strong') return `<strong>${acc}</strong>`
    if (mark === 'em') return `<em>${acc}</em>`
    if (mark === 'code') return `<code>${acc}</code>`

    const def = markDefs.find((definition) => definition._key === mark)
    if (def?.href) {
      const href = escapeAttribute(def.href)
      return `<a href="${href}" target="_blank" rel="noopener noreferrer">${acc}</a>`
    }
    return acc
  }, content)
}

function renderChildren(block: PortableTextBlock) {
  const markDefs = block.markDefs ?? []
  return (block.children ?? []).map((child) => renderSpan(child, markDefs)).join('')
}

function renderBlock(block: PortableTextBlock) {
  const content = renderChildren(block)
  switch (block.style) {
    case 'h1':
      return `<h1>${content}</h1>`
    case 'h2':
      return `<h2>${content}</h2>`
    case 'h3':
      return `<h3>${content}</h3>`
    case 'h4':
      return `<h4>${content}</h4>`
    case 'h5':
      return `<h5>${content}</h5>`
    case 'h6':
      return `<h6>${content}</h6>`
    case 'blockquote':
      return `<blockquote>${content}</blockquote>`
    default:
      return `<p>${content}</p>`
  }
}

function renderImage(block: Record<string, any>) {
  if (!block?.asset) return ''
  const src = urlFor(block).width(1200).url()
  const alt = escapeAttribute(block.alt ?? block.caption)
  const caption = block.caption ? `<figcaption>${escapeHtml(block.caption)}</figcaption>` : ''
  return `<figure class="portable-image"><img src="${src}" alt="${alt}" loading="lazy" />${caption}</figure>`
}

export function portableTextToHtml(blocks: PortableText = []) {
  if (!Array.isArray(blocks) || blocks.length === 0) return ''

  let html = ''
  let inList = false
  let currentListTag: 'ul' | 'ol' | null = null

  blocks.forEach((block) => {
    if (typeof block !== 'object' || !block) return

    if ((block as {asset?: unknown}).asset) {
      if (inList && currentListTag) {
        html += `</${currentListTag}>`
        inList = false
        currentListTag = null
      }
      html += renderImage(block as Record<string, any>)
      return
    }

    const portableBlock = block as PortableTextBlock
    if (portableBlock.listItem) {
      const listTag = portableBlock.listItem === 'number' ? 'ol' : 'ul'
      if (!inList || currentListTag !== listTag) {
        if (inList && currentListTag) {
          html += `</${currentListTag}>`
        }
        html += `<${listTag}>`
        inList = true
        currentListTag = listTag
      }
      html += `<li>${renderChildren(portableBlock)}</li>`
      return
    }

    if (inList && currentListTag) {
      html += `</${currentListTag}>`
      inList = false
      currentListTag = null
    }

    html += renderBlock(portableBlock)
  })

  if (inList && currentListTag) {
    html += `</${currentListTag}>`
  }

  return html
}
