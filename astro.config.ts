import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import UnoCSS from 'unocss/astro'
import react from '@astrojs/react'
import { resolve } from 'node:path'

export default defineConfig({
  // used to generate images
  site:
    process.env.VERCEL_ENV === 'production'
      ? 'https://brutal.elian.codes/'
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}/`
        : 'https://localhost:3000/',
  trailingSlash: 'ignore',
  output: 'server',
  integrations: [
    react(),
    sitemap(),
    UnoCSS({ injectReset: true }),
  ],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
    resolve: {
      alias: {
        '@lib': resolve('./src/lib'),
      },
    },
  },
  server: {
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      'Content-Security-Policy':
        "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:;",
    },
  },
})
