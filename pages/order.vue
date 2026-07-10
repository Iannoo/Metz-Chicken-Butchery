<template>
  <div>
    <!-- Loading Overlay -->
    <div v-if="isLoading" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
        <p class="mt-4 text-center">Processing your order...</p>
      </div>
    </div>

    <!-- Error Alert -->
    <div v-if="errorMessage" class="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-50">
      <span class="block sm:inline">{{ errorMessage }}</span>
      <button @click="errorMessage = ''" class="absolute top-0 bottom-0 right-0 px-4 py-3">
        <span class="sr-only">Close</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Order Header -->
    <section class="bg-primary-600 text-white py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl md:text-4xl font-display mb-4">Place Your Order</h1>
        <p class="text-xl text-primary-100">Fresh, premium chicken delivered to your doorstep</p>
      </div>
    </section>

    <!-- Order Form -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Order Form -->
          <div class="lg:col-span-2">
            <form @submit.prevent="handleSubmit" class="space-y-8">
              <!-- Products Selection -->
              <div class="bg-white rounded-lg shadow-sm p-6">
                <h2 class="text-2xl font-display mb-6">Select Products</h2>
                <div class="space-y-6">
                  <div v-for="product in products" :key="product.id" class="flex items-start space-x-4 p-4 border rounded-lg hover:border-primary-300 transition-colors">
                    <img 
                      :src="product.image" 
                      :alt="product.name" 
                      class="w-24 h-24 object-cover rounded-lg"
                      @error="handleImageError"
                    />
                    <div class="flex-grow">
                      <h3 class="text-lg font-semibold">{{ product.name }}</h3>
                      <p class="text-gray-600 text-sm mb-2">{{ product.description }}</p>
                      <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4">
                          <button 
                            type="button"
                            @click="decrementQuantity(product)"
                            class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50"
                            :disabled="product.quantity <= 0 || isLoading"
                          >
                            -
                          </button>
                          <span class="w-8 text-center">{{ product.quantity }}</span>
                          <button 
                            type="button"
                            @click="incrementQuantity(product)"
                            class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50"
                            :disabled="product.quantity >= product.stock || isLoading"
                          >
                            +
                          </button>
                        </div>
                        <div class="text-right">
                          <span class="text-lg font-semibold">KSh {{ (product.price * product.quantity).toFixed(0) }}</span>
                          <p v-if="product.stock <= 5" class="text-sm text-red-600">Only {{ product.stock }} left in stock</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Delivery Information -->
              <div class="bg-white rounded-lg shadow-sm p-6">
                <h2 class="text-2xl font-display mb-6">Delivery Information</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Delivery Method</label>
                    <select 
                      v-model="deliveryMethod"
                      class="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                    >
                      <option value="delivery">Home Delivery</option>
                      <option value="pickup">Store Pickup</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Delivery Date</label>
                    <input 
                      type="date" 
                      v-model="deliveryDate"
                      :min="minDeliveryDate"
                      :max="maxDeliveryDate"
                      class="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                      required
                    />
                  </div>
                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Delivery Address</label>
                    <textarea 
                      v-model="deliveryAddress"
                      rows="3"
                      class="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Enter your delivery address"
                    ></textarea>
                  </div>
                </div>
              </div>

              <!-- Contact Information -->
              <div class="bg-white rounded-lg shadow-sm p-6">
                <h2 class="text-2xl font-display mb-6">Contact Information</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      v-model="contactInfo.name"
                      class="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                      :class="{ 'border-red-500': errors.name }"
                      required
                      @input="validateName"
                    />
                    <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      v-model="contactInfo.email"
                      class="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                      :class="{ 'border-red-500': errors.email }"
                      required
                      @input="validateEmail"
                    />
                    <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      v-model="contactInfo.phone"
                      class="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                      :class="{ 'border-red-500': errors.phone }"
                      required
                      @input="validatePhone"
                      pattern="[0-9]{10}"
                    />
                    <p v-if="errors.phone" class="mt-1 text-sm text-red-600">{{ errors.phone }}</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Special Instructions</label>
                    <textarea 
                      v-model="contactInfo.instructions"
                      rows="2"
                      class="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Any special delivery instructions?"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <!-- Order Summary -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <h2 class="text-2xl font-display mb-6">Order Summary</h2>
              <div class="space-y-4">
                <div v-for="product in selectedProducts" :key="product.id" class="flex justify-between text-sm">
                  <span>{{ product.name }} x {{ product.quantity }}</span>
                  <span>KSh {{ (product.price * product.quantity).toFixed(0) }}</span>
                </div>
                <div class="border-t pt-4 space-y-2">
                  <div class="flex justify-between">
                    <span>Subtotal</span>
                    <span>KSh {{ subtotal.toFixed(0) }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>KSh {{ deliveryFee.toFixed(0) }}</span>
                  </div>
                  <div class="flex justify-between font-semibold text-lg border-t pt-2">
                    <span>Total</span>
                    <span>KSh {{ total.toFixed(0) }}</span>
                  </div>
                </div>
                <button 
                  @click="handleSubmit"
                  class="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  :disabled="!isFormValid"
                >
                  Place Order
                </button>
                <p class="text-sm text-gray-500 text-center mt-4">
                  By placing your order, you agree to our terms and conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Order Confirmation Modal -->
    <div v-if="showConfirmation" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg p-8 max-w-md w-full">
        <div class="text-center">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-2xl font-display mb-2">Order Confirmed!</h3>
          <p class="text-gray-600 mb-6">Thank you for your order. We'll send you a confirmation email shortly.</p>
          <div class="space-y-4">
            <p class="text-sm text-gray-500">Order Reference: {{ orderReference }}</p>
            <button 
              @click="showConfirmation = false"
              class="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, toRefs } from '#imports'
import type { Ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface Product {
  id: number
  name: string
  description: string
  price: number
  quantity: number
  image: string
  stock: number
}

interface ContactInfo {
  name: string
  email: string
  phone: string
  instructions: string
}

interface OrderForm {
  products: Ref<Product[]>
  deliveryMethod: Ref<string>
  deliveryDate: Ref<string>
  deliveryAddress: Ref<string>
  contactInfo: Ref<ContactInfo>
  showConfirmation: Ref<boolean>
  orderReference: Ref<string>
  isLoading: Ref<boolean>
  errorMessage: Ref<string>
  errors: Ref<{
    name?: string
    email?: string
    phone?: string
    deliveryDate?: string
    deliveryAddress?: string
  }>
}

const form = reactive<OrderForm>({
  products: ref([
    {
      id: 1,
      name: 'Whole Chicken',
      description: 'Free-range whole chicken, perfect for roasting',
      price: 650,
      quantity: 0,
      image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&q=80',
      stock: 20
    },
    {
      id: 2,
      name: 'Chicken Breasts',
      description: 'Boneless, skinless chicken breasts',
      price: 850,
      quantity: 0,
      image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&q=80',
      stock: 15
    },
    {
      id: 3,
      name: 'Chicken Wings',
      description: 'Fresh chicken wings, perfect for grilling',
      price: 100,
      quantity: 0,
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80',
      stock: 25
    }
  ]),
  deliveryMethod: ref('delivery'),
  deliveryDate: ref(''),
  deliveryAddress: ref(''),
  contactInfo: ref({
    name: '',
    email: '',
    phone: '',
    instructions: ''
  }),
  showConfirmation: ref(false),
  orderReference: ref(''),
  isLoading: ref(false),
  errorMessage: ref(''),
  errors: ref({})
})

const { products, deliveryMethod, deliveryDate, deliveryAddress, contactInfo, showConfirmation, orderReference, isLoading, errorMessage, errors } = toRefs(form)

// Computed properties
const selectedProducts = computed(() => products.value.filter(p => p.quantity > 0))
const subtotal = computed(() => selectedProducts.value.reduce((sum, product) => sum + (product.price * product.quantity), 0))
const deliveryFee = computed(() => deliveryMethod.value === 'delivery' ? 100 : 0)
const total = computed(() => subtotal.value + deliveryFee.value)

const minDeliveryDate = computed(() => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow.toISOString().split('T')[0]
})

const maxDeliveryDate = computed(() => {
  const maxDate = new Date()
  maxDate.setDate(maxDate.getDate() + 14) // Allow orders up to 2 weeks in advance
  return maxDate.toISOString().split('T')[0]
})

const validateName = () => {
  if (!contactInfo.value.name) {
    errors.value.name = 'Name is required'
  } else if (contactInfo.value.name.length < 2) {
    errors.value.name = 'Name must be at least 2 characters'
  } else {
    errors.value.name = undefined
  }
}

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!contactInfo.value.email) {
    errors.value.email = 'Email is required'
  } else if (!emailRegex.test(contactInfo.value.email)) {
    errors.value.email = 'Please enter a valid email address'
  } else {
    errors.value.email = undefined
  }
}

const validatePhone = () => {
  const phoneRegex = /^[0-9]{10}$/
  if (!contactInfo.value.phone) {
    errors.value.phone = 'Phone number is required'
  } else if (!phoneRegex.test(contactInfo.value.phone)) {
    errors.value.phone = 'Please enter a valid 10-digit phone number'
  } else {
    errors.value.phone = undefined
  }
}

const validateDeliveryDate = () => {
  if (!deliveryDate.value) {
    errors.value.deliveryDate = 'Delivery date is required'
  } else if (new Date(deliveryDate.value) < new Date(minDeliveryDate.value)) {
    errors.value.deliveryDate = 'Delivery date must be in the future'
  } else if (new Date(deliveryDate.value) > new Date(maxDeliveryDate.value)) {
    errors.value.deliveryDate = 'Delivery date cannot be more than 2 weeks in advance'
  } else {
    errors.value.deliveryDate = undefined
  }
}

const validateDeliveryAddress = () => {
  if (deliveryMethod.value === 'delivery' && !deliveryAddress.value) {
    errors.value.deliveryAddress = 'Delivery address is required for home delivery'
  } else {
    errors.value.deliveryAddress = undefined
  }
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80' // Fallback image
}

const isFormValid = computed(() => {
  return selectedProducts.value.length > 0 &&
    subtotal.value >= 100 && // Minimum order amount
    !Object.values(errors.value).some(error => error) &&
    contactInfo.value.name &&
    contactInfo.value.email &&
    contactInfo.value.phone &&
    (deliveryMethod.value === 'pickup' || deliveryAddress.value) &&
    deliveryDate.value
})

// Methods
const incrementQuantity = (product: Product) => {
  product.quantity++
}

const decrementQuantity = (product: Product) => {
  if (product.quantity > 0) {
    product.quantity--
  }
}

const handleSubmit = async () => {
  if (!isFormValid.value) return

  // Validate all fields
  validateName()
  validateEmail()
  validatePhone()
  validateDeliveryDate()
  validateDeliveryAddress()

  if (!isFormValid.value) {
    errorMessage.value = 'Please fix the errors in the form'
    return
  }

  isLoading.value = true
  errorMessage.value = ''

  try {
    // Generate a random order reference
    orderReference.value = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase()
    
    // Here you would typically make an API call to save the order
    // const response = await $fetch('/api/orders', {
    //   method: 'POST',
    //   body: {
    //     products: selectedProducts.value,
    //     deliveryMethod: deliveryMethod.value,
    //     deliveryDate: deliveryDate.value,
    //     deliveryAddress: deliveryAddress.value,
    //     contactInfo: contactInfo.value,
    //     total: total.value,
    //     orderReference: orderReference.value
    //   }
    // })

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Show confirmation modal
    showConfirmation.value = true

    // Reset form
    products.value.forEach(p => p.quantity = 0)
    deliveryMethod.value = 'delivery'
    deliveryDate.value = ''
    deliveryAddress.value = ''
    contactInfo.value = {
      name: '',
      email: '',
      phone: '',
      instructions: ''
    }
    errors.value = {}
  } catch (error) {
    console.error('Error submitting order:', error)
    errorMessage.value = 'There was an error processing your order. Please try again.'
  } finally {
    isLoading.value = false
  }
}

useHead({
  title: 'Place Your Order - Metz Chicken Butchery',
  meta: [
    {
      name: 'description',
      content: 'Order premium free-range chicken from Metz Chicken Butchery. Fresh, ethically raised chicken delivered to your doorstep.'
    }
  ]
})
</script>

<style scoped>
.sticky {
  position: sticky;
  top: 2rem;
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
