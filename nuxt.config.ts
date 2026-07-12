import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // Add development optimizations
  vite: {
    build: {
      // Faster builds in development
      minify: true
    },
    optimizeDeps: {
      include: ['@heroicons/vue']
    }
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
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
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
      title: 'Metz Chicken Butchery',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Premium free-range chicken from Metz Chicken Butchery' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  experimental: {
    payloadExtraction: false
  },
  dir: {
    pages: 'pages'
  }
})

// Print runtime config in dev mode for debugging
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-console
  console.log('Loaded runtimeConfig:', JSON.stringify(import.meta.env, null, 2))
}
