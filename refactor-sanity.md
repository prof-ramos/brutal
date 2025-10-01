# Refatoração Pendente: Sanity → Astro Content Collections

## Status Atual
✅ BlogFilters.astro - COMPLETO

## Arquivos Restantes para Refatorar

### Componentes
1. ❌ `src/components/blog/BlogList.astro`
2. ❌ `src/components/blog/BlogSummaryCard.astro`
3. ❌ `src/components/generic/RecentBlogPosts.astro`

### Páginas
4. ❌ `src/pages/blog/[slug].astro`
5. ❌ `src/pages/blog/index.astro`
6. ❌ `src/pages/blog/category/[category].astro`
7. ❌ `src/pages/blog/tags/[tag].astro`
8. ❌ `src/pages/v1/generate/og/[slug].png.ts`
9. ❌ `src/pages/feed.xml.js`
10. ❌ `src/pages/admin/posts/index.astro`

## Padrão de Refatoração

### 1. Imports
```diff
- import { client } from '@/lib/sanity'
- import type { SanityPost } from '@/lib/sanity'
+ import { getAllPosts, getPostBySlug } from '@/lib/posts'
+ import type { BlogPost } from '@/lib/posts'
```

### 2. Estrutura de Dados
```diff
- post.title → post.data.title
- post.description → post.data.description
- post.publishedAt → post.data.pubDate
- post.slug.current → post.slug
- post.categories → post.data.category (string único)
- post.tags → post.data.tags
```

### 3. Renderização de Conteúdo
```diff
- <div set:html={portableTextToHtml(post.body)} />
+ const { Content } = await post.render()
+ <Content />
```

### 4. Funções
```diff
- getSanityPosts() → getAllPosts()
- getSanityPostBySlug(slug) → getPostBySlug(slug)
- client.fetch(groq`...`) → Use funções específicas de posts.ts
```

## Próximos Passos

1. Refatorar cada arquivo seguindo o padrão acima
2. Testar build após cada mudança: `pnpm build`
3. Verificar se não há erros de TypeScript
4. Confirmar que todos os imports foram atualizados
5. Remover qualquer referência a @sanity nos imports

## Comando para Verificar Progresso
```bash
grep -r "from.*sanity\|@sanity" src/ --include="*.astro" --include="*.ts" --include="*.tsx" --include="*.js"
```
