import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  // Add development optimizations
  vite: {
    build: {
      // Faster builds in development
      minify: true
    },
    optimizeDeps: {
      include: ['@heroicons/vue']
    },
    define: {
      __VITE_SUPPRESS_APP_MANIFEST_WARNING__: true
    },
    logLevel: 'warn',
    customLogger: {
      info(msg: string) {
        if (!msg.includes('#app-manifest')) console.log(msg)
      },
      warn(msg: string) {
        if (!msg.includes('#app-manifest')) console.warn(msg)
      },
      warnOnce(msg: string) {
        if (!msg.includes('#app-manifest')) console.warn(msg)
      },
      error(msg: string) {
        console.error(msg)
      },
      clearScreen() {
        // no-op
      },
      hasWarned: false
    } as any
  },
  // Disable type checking during dev for faster builds
  typescript: {
    strict: true,
    typeCheck: false
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.cjs',
    exposeConfig: false,
    injectPosition: 0,
    viewer: false,
  },
  // css is injected via tailwindcss.cssPath — no duplicate needed
  runtimeConfig: {
    // Private keys (only available on server-side)
    stripeSecretKey: process.env.STRIPE_SECRET_KEY || 'sk_test_dummy',
    resendApiKey: process.env.RESEND_API_KEY || 'resend_dummy',
    redisUrl: process.env.REDIS_URL || '',
    jwtSecret: process.env.JWT_SECRET || 'jwt_dummy',
    cookieSecret: process.env.COOKIE_SECRET || 'cookie_dummy',
    supabaseServiceKey: process.env.SUPABASE_SERVICE_KEY || 'supabase_service_dummy',
    // Add Supabase URL and Key for server-side
    supabaseUrl: process.env.SUPABASE_URL || 'https://dummy.supabase.co',
    supabaseKey: process.env.SUPABASE_KEY || 'supabase_key_dummy',
    // Public keys (exposed to client-side)
    public: {
      stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY || 'pk_test_dummy',
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
      supabaseUrl: process.env.SUPABASE_URL || 'https://dummy.supabase.co',
      supabaseKey: process.env.SUPABASE_KEY || 'supabase_key_dummy',
    }
  },
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        dir: 'ltr'
      },
      title: 'Metz Chicken Butchery | Fresh Kienyeji Chicken Delivery Eldoret',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Buy fresh kienyeji chicken in Eldoret from Metz Chicken Butchery. Fresh farm chicken, hygienic processing, affordable prices and reliable service.' },
        { name: 'theme-color', content: '#dc2626' },
        { property: 'og:title', content: 'Metz Chicken Butchery | Fresh Kienyeji Chicken Delivery' },
        { property: 'og:description', content: 'Fresh, quality kienyeji chicken delivered straight from our farm to your table in Eldoret.' },
        { property: 'og:type', content: 'business.business' },
        { property: 'og:image', content: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=1200&q=80' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'robots', content: 'index, follow' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://metz-chicken-butchery.vercel.app' }
      ]
    }
  },
  // Remove top-level i18n config, move to i18n module if needed
  // i18n: {
  //   locales: [
  //     { code: 'en', iso: 'en-US', name: 'English' },
  //     { code: 'es', iso: 'es-ES', name: 'Español' }
  //   ],
  //   defaultLocale: 'en',
  //   strategy: 'prefix_except_default',
  //   langDir: 'locales/'
  // },
  // If you need i18n, use the @nuxtjs/i18n module and move config under its options
  // i18n: undefined,
  build: {
    transpile: ['@heroicons/vue']
  },
  image: {
    dir: 'public/images'
  },
  experimental: {
    payloadExtraction: false,
    componentIslands: true,
    noScripts: false
  },
  dir: {
    pages: 'pages'
  },

  nitro: {
    preset: 'vercel',
    compatibilityDate: '2024-11-01',
    minify: true,
    sourceMap: false
  }
}, { strict: false } as any)
