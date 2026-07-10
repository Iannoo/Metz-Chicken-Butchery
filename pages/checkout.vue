<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Checkout Form -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-sm p-6">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Shipping Information -->
              <div>
                <h2 class="text-lg font-semibold text-gray-900 mb-4">Shipping Information</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label for="fullName" class="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      id="fullName"
                      v-model="form.fullName"
                      type="text"
                      required
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      id="phone"
                      v-model="form.phone"
                      type="tel"
                      required
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                </div>
                <div class="mt-4">
                  <label for="address" class="block text-sm font-medium text-gray-700">Delivery Address</label>
                  <textarea
                    id="address"
                    v-model="form.address"
                    rows="3"
                    required
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  ></textarea>
                </div>
              </div>

              <!-- Payment Information -->
              <div>
                <h2 class="text-lg font-semibold text-gray-900 mb-4">Payment Information</h2>
                <div class="space-y-4">
                  <div>
                    <label for="cardNumber" class="block text-sm font-medium text-gray-700">Card Number</label>
                    <input
                      id="cardNumber"
                      v-model="form.cardNumber"
                      type="text"
                      required
                      placeholder="1234 5678 9012 3456"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label for="expiry" class="block text-sm font-medium text-gray-700">Expiry Date</label>
                      <input
                        id="expiry"
                        v-model="form.expiry"
                        type="text"
                        required
                        placeholder="MM/YY"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label for="cvv" class="block text-sm font-medium text-gray-700">CVV</label>
                      <input
                        id="cvv"
                        v-model="form.cvv"
                        type="text"
                        required
                        placeholder="123"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Order Notes -->
              <div>
                <label for="notes" class="block text-sm font-medium text-gray-700">Order Notes (Optional)</label>
                <textarea
                  id="notes"
                  v-model="form.notes"
                  rows="3"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Special instructions for delivery..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="loading"
                class="w-full bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50"
              >
                {{ loading ? 'Processing...' : 'Place Order' }}
              </button>
            </form>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h2 class="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
            <div class="space-y-4">
              <div v-for="item in cartStore.items" :key="item.id" class="flex justify-between">
                <span class="text-gray-600">{{ item.name }} x {{ item.quantity }}</span>
                <span class="text-gray-900">${{ (item.price * item.quantity).toFixed(2) }}</span>
              </div>
              <div class="border-t pt-4">
                <div class="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span>Free</span>
                </div>
                <div class="flex justify-between text-lg font-semibold text-gray-900 mt-4">
                  <span>Total</span>
                  <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import { useOrders } from '~/composables/useOrders'
import { useAuth } from '~/composables/useAuth'
import type { Order } from '~/types'

const cartStore = useCartStore()
const { createOrder } = useOrders()
const { user } = useAuth()
const router = useRouter()
const loading = ref(false)

const form = ref({
  fullName: '',
  phone: '',
  address: '',
  cardNumber: '',
  expiry: '',
  cvv: '',
  notes: ''
})

const handleSubmit = async () => {
  if (!user.value) {
    router.push('/auth/login?redirect=/checkout')
    return
  }

  try {
    loading.value = true

    const orderData: Omit<Order, 'user_id'> = {
      items: cartStore.items.map(item => ({
        product_id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price
      })),
      total_amount: cartStore.totalPrice,
      shipping_address: form.value.address,
      status: 'pending',
      payment_status: 'pending'
    }

    const orderResult = await createOrder(orderData)
    if (orderResult.data) {
      cartStore.clearCart()
      router.push(`/order/confirmation/${orderResult.data.id}`)
    }
  } catch (error) {
    console.error('Error submitting order:', error)
    // Handle error appropriately
  } finally {
    loading.value = false
  }
}
</script> 