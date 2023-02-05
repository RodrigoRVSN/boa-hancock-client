const withPWA = (await import('next-pwa')).default({
  dest: 'public'
})

export default withPWA({
  reactStrictMode: false,
  images: {
    domains: [
      'avatars.githubusercontent.com'
    ]
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
})
