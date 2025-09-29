import rss from '@astrojs/rss'
import {getAllPosts} from '@lib/sanity'

export async function GET(context) {
  const posts = await getAllPosts()
  return rss({
    title: 'Brutal Blog',
    description: 'Brutal theme for Astro',
    stylesheet: false,
    site: context.site,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: post.publishedAt ? new Date(post.publishedAt) : new Date(),
      description: post.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: '<language>pt-br</language>',
    canonicalUrl: 'https://psicologaemoutradimensao.com',
  })
}
