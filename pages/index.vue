<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
    <!-- Hero Section -->
    <section class="relative py-16 px-4 overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-white md:py-24">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=1920&q=80"
          alt=""
          loading="lazy"
          width="1920"
          height="1080"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-red-600 mb-4">Fresh Kienyeji Chicken Delivered In Eldoret</h1>
        <p class="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Farm fresh chicken, hygienically processed and ready for your family. Quality you can trust, prices you'll love.
        </p>

        <!-- Primary CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="https://wa.me/254734448745?text=Hi%20Metz%20Chicken%20Butchery%2C%20I%20would%20like%20to%20place%20an%20order."
             class="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 active:bg-green-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors shadow-md hover:shadow-lg"
             aria-label="Order via WhatsApp"
             rel="noopener noreferrer"
             target="_blank">
            <svg class="w-5 h-5 md:w-6 md:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.231l-.356.192-3.68-.966.984 3.595-.235.364a9.86 9.86 0 -1.51-13.227 9.868 9.868 0 0 5.782 1.795l.349.074 3.526-1.01-.976 3.551a9.882 9.882 0 0 3.248 5.394 9.86 9.86 0 0 0 1.254-14.178z"/></svg>
            <span class="hidden sm:inline">Order Via</span> WhatsApp
          </a>
          <a href="tel:+254729441616"
             class="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-900 active:bg-gray-950 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors shadow-md hover:shadow-lg">
            <svg class="w-5 h-5 md:w-6 md:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span class="hidden sm:inline">Call Now:</span> 0729 441 616
          </a>
        </div>
      </div>
    </section>

    <!-- Why Choose Metz Section -->
    <section class="py-16 px-4 bg-white md:py-20">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-16">Why Choose Metz?</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 mb-2">Fresh Farm Chicken</h3>
            <p class="text-gray-600 text-sm">Direct from our farm to your table, never frozen</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 mb-2">Hygienic Processing</h3>
            <p class="text-gray-600 text-sm">Strict hygiene standards for your safety</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 mb-2">Affordable Pricing</h3>
            <p class="text-gray-600 text-sm">Best prices without compromising quality</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 mb-2">Reliable Delivery</h3>
            <p class="text-gray-600 text-sm">Fast, dependable delivery across Eldoret</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h-2m0 0H8m4 0v4m-4-4v4m0 0H6m2-4h6" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 mb-2">Available Always</h3>
            <p class="text-gray-600 text-sm">Always in stock when you need it</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-16 px-4 bg-gradient-to-br from-gray-50 to-white md:py-20">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-6">Premium Chicken Pricing</h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Quality kienyeji chicken at affordable prices. All products processed the same day for maximum freshness.</p>

        <!-- Full Chicken Meat -->
        <div class="mb-16">
          <h3 class="text-2xl font-semibold text-red-600 mb-8 text-center">Full Chicken Meat</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            <div class="bg-white p-4 md:p-6 rounded-lg text-center border border-red-200 hover:shadow-md transition-shadow">
              <h4 class="font-semibold text-gray-800 mb-3 text-sm md:text-base">0.6 - 0.9 kg</h4>
              <p class="text-xl md:text-2xl font-bold text-red-600">KSh 600 - 700</p>
            </div>
            <div class="bg-white p-4 md:p-6 rounded-lg text-center border border-red-200 hover:shadow-md transition-shadow">
              <h4 class="font-semibold text-gray-800 mb-3 text-sm md:text-base">1 kg</h4>
              <p class="text-xl md:text-2xl font-bold text-red-600">KSh 850</p>
            </div>
            <div class="bg-white p-4 md:p-6 rounded-lg text-center border border-red-200 hover:shadow-md transition-shadow">
              <h4 class="font-semibold text-gray-800 mb-3 text-sm md:text-base">1.1 - 2 kg</h4>
              <p class="text-xl md:text-2xl font-bold text-red-600">KSh 900-1600</p>
            </div>
            <div class="bg-white p-4 md:p-6 rounded-lg text-center border border-red-200 hover:shadow-md transition-shadow hidden md:grid place-items-center">
              <div>
                <p class="text-sm text-gray-600 mb-2">Best Value</p>
                <p class="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded">Farm Fresh Daily</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Chicken Pieces -->
        <div class="mb-16">
          <h3 class="text-2xl font-semibold text-red-600 mb-8 text-center">Chicken Pieces</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            <div class="bg-white p-4 md:p-6 rounded-lg text-center border border-orange-200 hover:shadow-md transition-shadow">
              <h4 class="font-semibold text-gray-800 mb-3 text-sm md:text-base">Wings</h4>
              <p class="text-xl md:text-2xl font-bold text-orange-600">KSh 100/kg</p>
            </div>
            <div class="bg-white p-4 md:p-6 rounded-lg text-center border border-orange-200 hover:shadow-md transition-shadow">
              <h4 class="font-semibold text-gray-800 mb-3 text-sm md:text-base">Quarter</h4>
              <p class="text-xl md:text-2xl font-bold text-orange-600">KSh 250/kg</p>
            </div>
            <div class="bg-white p-4 md:p-6 rounded-lg text-center border border-orange-200 hover:shadow-md transition-shadow">
              <h4 class="font-semibold text-gray-800 mb-3 text-sm md:text-base">Half</h4>
              <p class="text-xl md:text-2xl font-bold text-orange-600">KSh 450/kg</p>
            </div>
          </div>
        </div>

        <!-- Live Chicken & Services -->
        <div class="mb-8">
          <h3 class="text-2xl font-semibold text-red-600 mb-8 text-center">Services</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div class="bg-white p-6 rounded-lg text-center border border-yellow-200 hover:shadow-md transition-shadow">
              <h4 class="font-semibold text-gray-800 mb-2">Live Chicken</h4>
              <p class="text-gray-600 text-sm mb-3">Price varies by size</p>
              <a href="https://wa.me/254734448745?text=Hi%20Metz%20Chicken%20Butchery%2C%20I%20want%20to%20inquire%20about%20live%20chicken." class="text-yellow-600 font-semibold hover:text-yellow-700">Inquire now →</a>
            </div>
            <div class="bg-white p-6 rounded-lg text-center border border-yellow-200 hover:shadow-md transition-shadow">
              <h4 class="font-semibold text-gray-800 mb-2">Slaughtering Service</h4>
              <p class="text-xl md:text-2xl font-bold text-yellow-600">KSh 100</p>
              <p class="text-gray-600 text-xs mt-2">Hygienic processing</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location & Contact Section -->
    <section class="py-16 px-4 bg-gradient-to-br from-red-50 to-orange-50 md:py-20">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-gray-800 mb-16">Get In Touch</h2>

        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <!-- Location -->
          <div class="bg-white p-8 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">📍 Location</h3>
            <p class="text-gray-600">Rock Center<br />Eldoret, Kenya</p>
          </div>

          <!-- Phone -->
          <div class="bg-white p-8 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">📞 Call Us</h3>
            <a href="tel:+254729441616" class="text-red-600 hover:text-red-700 font-semibold">0729 441 616</a>
          </div>

          <!-- WhatsApp -->
          <div class="bg-white p-8 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">💬 WhatsApp</h3>
            <a href="https://wa.me/254734448745" class="text-green-600 hover:text-green-700 font-semibold">0734 448 745</a>
          </div>
        </div>

        <!-- Social Media -->
        <div>
          <h3 class="text-xl font-semibold text-gray-800 mb-6">Follow Metz Chicken Butchery</h3>
          <div class="flex justify-center gap-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-colors" aria-label="Follow us on Facebook">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://twitter.com/shadielagat" target="_blank" rel="noopener noreferrer" class="bg-black hover:bg-gray-800 text-white p-4 rounded-full transition-colors" aria-label="Follow us on X (Twitter)">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@metzchickenbutchery" target="_blank" rel="noopener noreferrer" class="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full transition-colors" aria-label="Follow us on TikTok">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 class="text-xl font-bold mb-4 text-red-500">Metz Chicken</h3>
            <p class="text-gray-400 text-sm">Your trusted source for premium kienyeji chicken in Eldoret.</p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink></li>
              <li><NuxtLink to="/products" class="hover:text-white transition-colors">Products</NuxtLink></li>
              <li><NuxtLink to="/about" class="hover:text-white transition-colors">About</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:text-white transition-colors">Contact</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Contact</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="tel:+254729441616" class="hover:text-white transition-colors">0729 441 616</a></li>
              <li><a href="https://wa.me/254734448745" class="hover:text-white transition-colors">WhatsApp Order</a></li>
              <li>Rock Center, Eldoret</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Hours</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li>Mon-Fri: 7:00 AM - 7:00 PM</li>
              <li>Sat: 8:00 AM - 5:00 PM</li>
              <li>Sun: 9:00 AM - 3:00 PM</li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Metz Chicken Butchery. All rights reserved. | Premium kienyeji chicken delivery in Eldoret</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
  definePageMeta({
    title: 'Metz Chicken Butchery | Fresh Kienyeji Chicken Delivery Eldoret',
    description: 'Buy fresh kienyeji chicken in Eldoret from Metz Chicken Butchery. Farm fresh, hygienically processed, affordable prices.'
  })

  useHead({
    meta: [
      {
        name: 'description',
        content: 'Buy fresh kienyeji chicken in Eldoret from Metz Chicken Butchery. Fresh farm chicken, hygienic processing, affordable prices and reliable service.'
      },
      {
        property: 'og:url',
        content: 'https://metz-chicken-butchery.vercel.app/'
      },
      {
        property: 'og:locale',
        content: 'en_KE'
      }
    ]
  })
</script>

<style scoped>
  /* Optimize mobile spacing */
  @media (max-width: 640px) {
    :deep(.text-5xl) {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }

    :deep(.text-4xl) {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }
  }

  /* Prevent layout shift on images */
  :deep(img) {
    display: block;
  }

  /* Smooth transitions */
  :deep(a) {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
</style>