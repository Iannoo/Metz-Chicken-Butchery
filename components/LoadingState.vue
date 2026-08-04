<template>
  <Transition name="fade">
    <div v-if="loading" class="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-50">
      <div class="fixed inset-0 flex items-center justify-center z-50">
        <div class="relative bg-white rounded-lg px-6 py-8 text-center shadow-xl max-w-sm mx-4">
          <div class="flex items-center justify-center">
            <div class="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-primary-600"></div>
          </div>
          <div class="mt-4">
            <h3 class="text-lg font-semibold text-gray-900">
              {{ message || 'Loading...' }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </Transition>
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>