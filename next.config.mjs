import { withSentryConfig } from '@sentry/nextjs'

const withPWA = (await import('next-pwa')).default({
  dest: 'public'
})

const PWAConfig = withPWA({
  reactStrictMode: false,
  images: {
    domains: [
      'avatars.githubusercontent.com'
    ]
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
})

export default withSentryConfig(
  {
    sentry: { hideSourceMaps: false },
    ...PWAConfig
  },
  {
    silent: true,
    authToken: process.env.SENTRY_AUTH_TOKEN
  }
)
