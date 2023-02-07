import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
  dsn: SENTRY_DSN || 'https://6b53bf98c5f449eca5ad3d3f3b636f07@o1047037.ingest.sentry.io/4504635778400256',
  tracesSampleRate: 1.0
})
