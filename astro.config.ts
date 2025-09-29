import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';

export default defineConfig({
  // used to generate images
  site:
    process.env.VERCEL_ENV === 'production'
      ? 'https://brutal.elian.codes/'
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/`
      : 'https://localhost:3000/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
    define: {
      // Make TinaCMS environment variables available in the client
      'process.env.NEXT_PUBLIC_TINA_CLIENT_ID': JSON.stringify(process.env.NEXT_PUBLIC_TINA_CLIENT_ID),
      'process.env.TINA_TOKEN': JSON.stringify(process.env.TINA_TOKEN),
      'process.env.TINA_PUBLIC_IS_LOCAL': JSON.stringify(process.env.TINA_PUBLIC_IS_LOCAL),
    },
  },
  server: {
    headers: {
      'X-Frame-Options': 'SAMEORIGIN', // Changed from DENY to allow TinaCMS iframe
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      'Content-Security-Policy':
        "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://app.tina.io; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://app.tina.io; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; frame-src 'self' https://app.tina.io; connect-src 'self' https://app.tina.io https://graphql.tina.io https://content.tinajs.io;",
    },
  },
});
