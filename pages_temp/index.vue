<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
    <!-- Hero Section -->
    <section class="relative py-20 px-4 overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=1920&q=80"
          alt="Fresh chicken"
          class="w-full h-full object-cover opacity-20"
        />
      </div>
      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <h1 class="text-6xl font-bold text-red-600 mb-4">METZ</h1>
        <h2 class="text-3xl font-semibold text-gray-800 mb-8">Home of Kienyeji Chicken</h2>
        <p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Fresh, quality kienyeji chicken delivered straight from our farm to your table.
          Premium meat, exceptional taste, and unbeatable service.
        </p>

        <!-- Contact Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="tel:+254729441616"
             class="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            📞 Call: 0729 441 616
          </a>
          <a href="https://wa.me/254734448745"
             class="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            💬 WhatsApp: 0734 448 745
          </a>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-16 px-4 bg-white">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">Our Prices</h2>

        <!-- Full Chicken Meat -->
        <div class="mb-12">
          <h3 class="text-2xl font-semibold text-red-600 mb-6 text-center">Full Chicken Meat</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-gray-50 p-6 rounded-lg text-center border-2 border-red-200">
              <h4 class="font-semibold text-gray-800 mb-2">0.6 - 0.9 kg</h4>
              <p class="text-2xl font-bold text-red-600">KSh 600 - 700</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg text-center border-2 border-red-200">
              <h4 class="font-semibold text-gray-800 mb-2">1 kg</h4>
              <p class="text-2xl font-bold text-red-600">KSh 850</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg text-center border-2 border-red-200">
              <h4 class="font-semibold text-gray-800 mb-2">1.1 - 2 kg</h4>
              <p class="text-2xl font-bold text-red-600">KSh 900 - 1600</p>
            </div>
          </div>
        </div>

        <!-- Chicken Pieces -->
        <div class="mb-12">
          <h3 class="text-2xl font-semibold text-red-600 mb-6 text-center">Chicken Pieces</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-gray-50 p-6 rounded-lg text-center border-2 border-orange-200">
              <h4 class="font-semibold text-gray-800 mb-2">Lowest Price</h4>
              <p class="text-2xl font-bold text-orange-600">KSh 100</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg text-center border-2 border-orange-200">
              <h4 class="font-semibold text-gray-800 mb-2">Quarter</h4>
              <p class="text-2xl font-bold text-orange-600">KSh 250</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg text-center border-2 border-orange-200">
              <h4 class="font-semibold text-gray-800 mb-2">Half</h4>
              <p class="text-2xl font-bold text-orange-600">KSh 450</p>
            </div>
          </div>
        </div>

        <!-- Live Chicken & Services -->
        <div class="mb-12">
          <h3 class="text-2xl font-semibold text-red-600 mb-6 text-center">Live Chicken & Services</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-gray-50 p-6 rounded-lg text-center border-2 border-yellow-200">
              <h4 class="font-semibold text-gray-800 mb-2">Live Chicken</h4>
              <p class="text-lg text-gray-600 mb-2">Price depends on size</p>
              <p class="text-xl font-bold text-yellow-600">Contact for pricing</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg text-center border-2 border-yellow-200">
              <h4 class="font-semibold text-gray-800 mb-2">Slaughtering Service</h4>
              <p class="text-2xl font-bold text-yellow-600">KSh 100</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location & Social Media -->
    <section class="py-16 px-4 bg-gradient-to-br from-red-50 to-orange-50">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">Find Us</h2>

        <!-- Location -->
        <div class="mb-12">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">📍 Our Location</h3>
            <p class="text-lg text-gray-600">Rock Center</p>
          </div>
        </div>

        <!-- Social Media -->
        <div>
          <h3 class="text-xl font-semibold text-gray-800 mb-6">Follow Met'z Chicken Butchery</h3>
          <div class="flex justify-center gap-6">
            <a href="#" class="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://twitter.com/shadielagat" target="_blank" rel="noopener noreferrer" class="bg-black hover:bg-gray-800 text-white p-4 rounded-full transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@metzchickenbutchery" target="_blank" rel="noopener noreferrer" class="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
          <p class="text-gray-600 mt-4">Facebook • X (Twitter) • TikTok</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-red-600 text-white py-8 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h3 class="text-2xl font-bold mb-4">Met'z Chicken Butchery</h3>
        <p class="text-red-100 mb-4">Your trusted source for premium kienyeji chicken</p>
        <p class="text-sm text-red-200"> 2024 Met'z Chicken Butchery. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
  definePageMeta({
    title: 'METZ - Home of Kienyeji Chicken'
  })
</script>

<style scoped>
  /* Additional custom styles if needed */
</style>