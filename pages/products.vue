<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[40vh] min-h-[300px] bg-gray-900 overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=1920&q=80"
          alt="Our premium chicken products"
          class="w-full h-full object-cover opacity-50"
        />
      </div>
      <div class="relative container mx-auto px-4 h-full flex items-center">
        <div class="max-w-2xl text-white">
          <h1 class="text-4xl md:text-5xl font-display font-bold mb-6">Our Products</h1>
          <p class="text-xl text-gray-200">Premium quality chicken, raised with care and delivered fresh to your doorstep.</p>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <!-- Filters -->
        <div class="mb-12">
          <div class="flex flex-wrap gap-4 justify-center">
            <button
              v-for="category in categories"
              :key="category.id"
              @click="selectedCategory = category.id"
              :class="[
                'px-6 py-2 rounded-full transition-colors',
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              {{ category.name }}
            </button>
          </div>
        </div>

        <!-- Products Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div class="relative">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-64 object-cover"
              />
              <div
                v-if="product.isNew"
                class="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold"
              >
                New
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
              <p class="text-gray-600 mb-4">{{ product.description }}</p>
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-2xl font-bold text-primary-600">KSh {{ product.price }}</span>
                  <span class="text-gray-500 text-sm">/{{ product.unit }}</span>
                </div>
                <button
                  @click="addToCart(product)"
                  class="bg-primary-600 text-white px-4 py-2 rounded-full hover:bg-primary-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Categories -->
    <section class="py-20 bg-cream-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-display text-center mb-12">Product Categories</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="category in categories"
            :key="category.id"
            class="bg-white rounded-lg p-8 text-center hover:shadow-md transition-shadow"
          >
            <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <component :is="category.icon" class="w-10 h-10 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ category.name }}</h3>
            <p class="text-gray-600 mb-6">{{ category.description }}</p>
            <NuxtLink
              :to="`/products#${category.id}`"
              class="text-primary-600 font-semibold hover:text-primary-700"
            >
              View Products →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Quality Promise -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-display mb-6">Our Quality Promise</h2>
          <p class="text-xl text-gray-600 mb-12">
            Every product we offer is raised with care, processed with precision, and delivered fresh to your doorstep. We stand behind the quality of our chicken with a 100% satisfaction guarantee.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2">Fresh Daily</h3>
              <p class="text-gray-600">Processed and delivered fresh every day</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2">Quality Assured</h3>
              <p class="text-gray-600">Strict quality control measures</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2">Satisfaction Guaranteed</h3>
              <p class="text-gray-600">100% money-back guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-primary-600 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-display mb-6">Ready to Order?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Experience the difference that quality makes. Order now and get free delivery on your first purchase!</p>
        <NuxtLink
          to="/order"
          class="inline-block bg-white text-primary-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Start Ordering
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const selectedCategory = ref('all')

const categories = [
  {
    id: 'all',
    name: 'All Products',
    description: 'Browse our complete selection of premium chicken products.',
    icon: 'IconAll'
  },
  {
    id: 'whole',
    name: 'Whole Chicken',
    description: 'Perfect for roasting and family meals.',
    icon: 'IconWhole'
  },
  {
    id: 'cuts',
    name: 'Chicken Cuts',
    description: 'Premium cuts for every recipe.',
    icon: 'IconCuts'
  }
]

const products = [
  {
    id: 1,
    name: 'Whole Free-Range Chicken',
    description: 'Premium whole chicken, perfect for roasting. Raised free-range for superior taste and quality.',
    price: 650,
    unit: 'kg',
    category: 'whole',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&q=80',
    isNew: false
  },
  {
    id: 2,
    name: 'Chicken Breast Fillets',
    description: 'Boneless, skinless chicken breast fillets. Lean, tender, and versatile.',
    price: 850,
    unit: 'kg',
    category: 'cuts',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&q=80',
    isNew: false
  },
  {
    id: 3,
    name: 'Chicken Wings',
    description: 'Premium chicken wings, perfect for grilling or frying.',
    price: 100,
    unit: 'kg',
    category: 'cuts',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80',
    isNew: false
  },
  {
    id: 4,
    name: 'Chicken Thighs',
    description: 'Bone-in chicken thighs, juicy and flavorful.',
    price: 250,
    unit: 'kg',
    category: 'cuts',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80',
    isNew: true
  },
  {
    id: 5,
    name: 'Chicken Drumsticks',
    description: 'Fresh chicken drumsticks, perfect for grilling or baking.',
    price: 450,
    unit: 'kg',
    category: 'cuts',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&q=80',
    isNew: false
  },
  {
    id: 6,
    name: 'Chicken Mince',
    description: 'Ground chicken, perfect for burgers, meatballs, and more.',
    price: 1250,
    unit: 'kg',
    category: 'cuts',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80',
    isNew: true
  }
]

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'all') {
    return products
  }
  return products.filter(product => product.category === selectedCategory.value)
})

const addToCart = (product: any) => {
  // TODO: Implement cart functionality
  console.log('Adding to cart:', product)
}

// Icons components
const IconAll = defineComponent({
  render() {
    return h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 6h16M4 12h16M4 18h16' })
    ])
  }
})

const IconWhole = defineComponent({
  render() {
    return h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' })
    ])
  }
})

const IconCuts = defineComponent({
  render() {
    return h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' })
    ])
  }
})

useHead({
  title: 'Products - Metz Chicken Butchery',
  meta: [
    {
      name: 'description',
      content: 'Browse our selection of premium free-range chicken products. From whole chickens to specialty cuts, we offer the finest quality chicken raised with care.'
    }
  ]
})
</script> 