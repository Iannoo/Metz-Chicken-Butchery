<template>
  <div class="min-h-screen flex flex-col">
    <!-- Floating WhatsApp Button -->
    <FloatingWhatsApp />

    <header class="bg-white shadow-sm sticky top-0 z-30">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="flex-shrink-0 flex items-center" aria-label="Metz Chicken Butchery home">
              <span v-if="!logoUrl" class="text-xl font-bold text-red-600" aria-hidden="true">METZ</span>
              <img v-else class="h-8 w-auto" :src="logoUrl" alt="Metz Chicken Butchery" />
            </NuxtLink>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NuxtLink to="/" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors" :class="$route.path === '/' ? 'text-gray-900 border-red-600' : ''">
                Home
              </NuxtLink>
              <NuxtLink to="/products" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors" :class="$route.path === '/products' ? 'text-gray-900 border-red-600' : ''">
                Products
              </NuxtLink>
              <NuxtLink to="/about" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors" :class="$route.path === '/about' ? 'text-gray-900 border-red-600' : ''">
                About
              </NuxtLink>
              <NuxtLink to="/contact" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors" :class="$route.path === '/contact' ? 'text-gray-900 border-red-600' : ''">
                Contact
              </NuxtLink>
            </div>
          </div>
          <div class="flex items-center">
            <a href="https://wa.me/254734448745?text=Hi%20Metz%20Chicken%20Butchery%2C%20I%20would%20like%20to%20place%20an%20order." class="hidden md:inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors mr-4" target="_blank" rel="noopener noreferrer" title="Quick order via WhatsApp">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.231l-.356.192-3.68-.966.984 3.595-.235.364a9.86 9.86 0 -1.51-13.227 9.868 9.868 0 0 5.782 1.795l.349.074 3.526-1.01-.976 3.551a9.882 9.882 0 0 3.248 5.394 9.86 9.86 0 0 0 1.254-14.178z"/></svg>
              <span>Order Now</span>
            </a>
            <NuxtLink to="/order" class="text-gray-500 hover:text-gray-700 transition-colors" title="View order page">
              <span class="sr-only">Order</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer is now handled by individual pages for consistency -->
  </div>
</template>

<script setup lang="ts">
  const route = useRoute()
  const logoUrl = import.meta.client ? '/logo.png' : ''

  // Set html lang attribute for accessibility
  useHead({
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {
        name: 'theme-color',
        content: '#dc2626'
      }
    ]
  })
</script>

<style scoped>
  header {
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.95);
  }
</style> 
