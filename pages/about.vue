<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[60vh] min-h-[400px] bg-gray-900 overflow-hidden">
      <div class="absolute inset-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
          alt=""
          loading="eager"
          width="1920"
          height="800"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="relative container mx-auto px-4 h-full flex items-center">
        <div class="max-w-2xl text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p class="text-xl text-gray-200">From farm to table, we're committed to raising the finest free-range chicken with care and respect.</p>
        </div>
      </div>
    </section>

    <!-- Our Mission -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p class="text-xl text-gray-600">
            At Metz Chicken Butchery, we believe in providing our customers with the highest quality chicken while maintaining the highest standards of animal welfare and environmental responsibility.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Animal Welfare</h3>
            <p class="text-gray-600">Our chickens are raised in spacious, natural environments where they can roam freely and express their natural behaviors.</p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Sustainability</h3>
            <p class="text-gray-600">We implement sustainable farming practices that protect our environment and ensure the long-term health of our land.</p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Quality Assurance</h3>
            <p class="text-gray-600">We maintain strict quality control measures to ensure our products meet the highest standards of safety and taste.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'About Us - Metz Chicken Butchery | Our Story'
})

useHead({
  meta: [
    {
      name: 'description',
      content: 'Learn about Metz Chicken Butchery in Eldoret. We are committed to providing fresh kienyeji chicken with superior quality, animal welfare, and sustainable farming practices.'
    }
  ]
})
</script>
