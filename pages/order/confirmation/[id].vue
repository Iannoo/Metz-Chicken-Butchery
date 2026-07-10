<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto">
        <div class="text-center mb-8">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 class="text-3xl font-bold text-gray-900">Order Confirmed!</h1>
          <p class="text-gray-600 mt-2">Thank you for your order. We'll start preparing it right away.</p>
        </div>

        <div v-if="order" class="bg-white rounded-lg shadow-sm p-6">
          <div class="border-b pb-4 mb-4">
            <h2 class="text-lg font-semibold text-gray-900 mb-2">Order Details</h2>
            <p class="text-gray-600">Order #{{ order.id }}</p>
            <p class="text-gray-600">Placed on {{ formatDate(order.created_at) }}</p>
          </div>

          <div class="space-y-6">
            <!-- Order Items -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Items</h3>
              <div class="space-y-4">
                <div v-for="item in order.items" :key="item.product_id" class="flex justify-between">
                  <div>
                    <p class="text-gray-900">{{ item.name }}</p>
                    <p class="text-gray-600">Quantity: {{ item.quantity }}</p>
                  </div>
                  <p class="text-gray-900">${{ (item.price * item.quantity).toFixed(2) }}</p>
                </div>
              </div>
            </div>

            <!-- Order Summary -->
            <div class="border-t pt-4">
              <div class="flex justify-between text-gray-600 mb-2">
                <span>Subtotal</span>
                <span>${{ order.total_amount.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-gray-600 mb-2">
                <span>Delivery</span>
                <span>Free</span>
              </div>
              <div class="flex justify-between text-lg font-semibold text-gray-900 mt-4">
                <span>Total</span>
                <span>${{ order.total_amount.toFixed(2) }}</span>
              </div>
            </div>

            <!-- Delivery Information -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Delivery Information</h3>
              <p class="text-gray-600">{{ order.shipping_address }}</p>
            </div>

            <!-- Order Status -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Order Status</h3>
              <div class="flex items-center">
                <span
                  :class="{
                    'bg-yellow-100 text-yellow-800': order.status === 'pending',
                    'bg-blue-100 text-blue-800': order.status === 'processing',
                    'bg-purple-100 text-purple-800': order.status === 'shipped',
                    'bg-green-100 text-green-800': order.status === 'delivered',
                    'bg-red-100 text-red-800': order.status === 'cancelled'
                  }"
                  class="px-3 py-1 rounded-full text-sm font-medium"
                >
                  {{ formatStatus(order.status) }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 text-center">
          <NuxtLink
            to="/products"
            class="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
          >
            Continue Shopping
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrders } from '~/composables/useOrders'

const route = useRoute()
const { fetchOrderById } = useOrders()
const order = ref<any>(null)

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const formatStatus = (status: string) => {
  const statusMap: Record<string, string> = {
    pending: 'Pending',
    processing: 'Processing',
    shipped: 'Shipped',
    delivered: 'Delivered',
    cancelled: 'Cancelled'
  }
  return statusMap[status] || status
}

onMounted(async () => {
  const orderId = route.params.id as string
  const orderData = await fetchOrderById(orderId)
  if (orderData) {
    order.value = orderData
  }
})
</script> 