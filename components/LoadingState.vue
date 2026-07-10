<template>
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" v-if="loading">
    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
          <div class="flex items-center justify-center">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <h3 class="text-base font-semibold leading-6 text-gray-900">
              {{ message || 'Loading...' }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    default: ''
  }
})
</script> 