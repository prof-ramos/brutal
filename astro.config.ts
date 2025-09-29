import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import UnoCSS from 'unocss/astro'
import sanity from '@sanity/astro'
import react from '@astrojs/react'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const readEnvValue = (key: string): string | undefined => {
  if (process.env[key]) return process.env[key]

  try {
    const envPath = resolve(process.cwd(), '.env')
    const file = readFileSync(envPath, 'utf8')

    for (const rawLine of file.split('\n')) {
      const line = rawLine.trim()

      if (!line || line.startsWith('#')) continue

      const [lineKey, ...valueParts] = line.split('=')
      if (lineKey === key) return valueParts.join('=').trim()
    }
  } catch {
    // Ignore missing env file and fall back to defaults
  }

  return undefined
}

const sanityProjectId = readEnvValue('PUBLIC_SANITY_PROJECT_ID') || 'ocywki9g'
const sanityDataset = readEnvValue('PUBLIC_SANITY_DATASET') || 'production'

export default defineConfig({
  // used to generate images
  site:
    process.env.VERCEL_ENV === 'production'
      ? 'https://brutal.elian.codes/'
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}/`
        : 'https://localhost:3000/',
  trailingSlash: 'ignore',
  integrations: [
    react(),
    sitemap(),
    UnoCSS({ injectReset: true }),
    sanity({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      useCdn: false,
      studioBasePath: '/admin',
    }),
  ],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
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
