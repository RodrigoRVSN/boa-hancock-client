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

export default withSentryConfig(PWAConfig, {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  // Suppresses source map uploading logs during build
  silent: true,

  org: 'me-5s',
  project: 'me-5s'
}, {
  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Transpiles SDK to be compatible with IE11 (increases bundle size)
  transpileClientSDK: true,

  // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
  tunnelRoute: '/monitoring',

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true
})
