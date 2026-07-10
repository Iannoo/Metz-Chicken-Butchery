<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div v-if="cartStore.items.length === 0" class="text-center py-12">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Your cart is empty</h2>
        <p class="text-gray-600 mb-8">Add some delicious chicken products to your cart!</p>
        <NuxtLink
          to="/products"
          class="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
        >
          Browse Products
        </NuxtLink>
      </div>

      <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-sm">
            <div class="p-6">
              <div class="space-y-6">
                <div v-for="item in cartStore.items" :key="item.id" class="flex items-center">
                  <div class="flex-shrink-0 w-24 h-24">
                    <img
                      :src="item.image"
                      :alt="item.name"
                      class="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div class="ml-6 flex-1">
                    <div class="flex items-center justify-between">
                      <h3 class="text-lg font-semibold text-gray-900">{{ item.name }}</h3>
                      <button
                        @click="cartStore.removeItem(item.id)"
                        class="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <div class="mt-2 flex items-center justify-between">
                      <div class="flex items-center">
                        <button
                          @click="updateQuantity(item.id, item.quantity - 1)"
                          class="text-gray-500 hover:text-gray-700"
                          :disabled="item.quantity <= 1"
                        >
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M20 12H4"
                            />
                          </svg>
                        </button>
                        <span class="mx-4 text-gray-900">{{ item.quantity }}</span>
                        <button
                          @click="updateQuantity(item.id, item.quantity + 1)"
                          class="text-gray-500 hover:text-gray-700"
                        >
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </button>
                      </div>
                      <p class="text-lg font-semibold text-gray-900">
                        ${{ (item.price * item.quantity).toFixed(2) }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h2 class="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
            <div class="space-y-4">
              <div class="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-gray-600">
                <span>Delivery</span>
                <span>Free</span>
              </div>
              <div class="border-t pt-4">
                <div class="flex justify-between text-lg font-semibold text-gray-900">
                  <span>Total</span>
                  <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
                </div>
              </div>
            </div>
            <button
              @click="handleCheckout"
              :disabled="loading"
              class="w-full mt-6 bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50"
            >
              {{ loading ? 'Processing...' : 'Proceed to Checkout' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import { useAuth } from '~/composables/useAuth'

const cartStore = useCartStore()
const { user } = useAuth()
const router = useRouter()
const loading = ref(false)

const updateQuantity = (itemId: string, quantity: number) => {
  if (quantity > 0) {
    cartStore.updateQuantity(itemId, quantity)
  }
}

const handleCheckout = async () => {
  if (!user.value) {
    router.push('/auth/login?redirect=/cart')
    return
  }

  try {
    loading.value = true
    // Here you would typically:
    // 1. Create an order in the database
    // 2. Process payment
    // 3. Clear the cart
    // 4. Redirect to order confirmation
    
    // For now, we'll just redirect to the order page
    router.push('/order')
  } catch (error) {
    console.error('Checkout failed:', error)
  } finally {
    loading.value = false
  }
}
</script> 