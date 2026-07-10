<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Create your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
        <NuxtLink to="/auth/login" class="font-medium text-primary-600 hover:text-primary-500">
          sign in to your existing account
        </NuxtLink>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div>
            <label for="fullName" class="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div class="mt-1">
              <input
                id="fullName"
                v-model="fullName"
                name="fullName"
                type="text"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <input
                id="email"
                v-model="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div class="mt-1">
              <input
                id="phone"
                v-model="phone"
                name="phone"
                type="tel"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div class="mt-1">
              <input
                id="password"
                v-model="password"
                name="password"
                type="password"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div class="mt-1">
              <input
                id="confirmPassword"
                v-model="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              :disabled="loading || !isFormValid"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
            >
              {{ loading ? 'Creating account...' : 'Create account' }}
            </button>
          </div>
        </form>

        <div v-if="error" class="mt-4 text-sm text-red-600">
          {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'

const { signUp, updateProfile } = useAuth()
const router = useRouter()

const fullName = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')
const confirmPassword = ref('')
const loading = ref(false)
const error = ref<string | null>(null)

const isFormValid = computed(() => {
  return (
    fullName.value &&
    email.value &&
    phone.value &&
    password.value &&
    confirmPassword.value &&
    password.value === confirmPassword.value
  )
})

const handleSubmit = async () => {
  if (!isFormValid.value) return

  try {
    // First sign up the user
    const { error: signUpError } = await signUp(email.value, password.value)
    if (signUpError) throw signUpError

    // Then update their profile with additional data
    const { error: updateError } = await updateProfile({
      data: {
        name: fullName.value,
        phone: phone.value,
        address: ''
      }
    })
    if (updateError) throw updateError

    router.push('/auth/login?registered=true')
  } catch (error: any) {
    console.error('Registration error:', error)
    // Handle error appropriately
  }
}
</script> 