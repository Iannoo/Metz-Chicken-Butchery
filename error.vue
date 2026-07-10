<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          {{ error?.statusCode === 404 ? 'Page Not Found' : 'An Error Occurred' }}
        </h1>
        <p class="text-lg text-gray-600 mb-8">
          {{ error?.message || 'Sorry, something went wrong. Please try again later.' }}
        </p>
        <button
          @click="handleError"
          class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Go Back Home
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ErrorWithStatus } from '~/types'

const props = defineProps<{
  error?: ErrorWithStatus
}>()

const handleError = () => {
  clearError({ redirect: '/' })
}
</script> 