<template>
  <a
    href="https://wa.me/254734448745?text=Hi%20Metz%20Chicken%20Butchery%2C%20I%20would%20like%20to%20place%20an%20order."
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 active:scale-95 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform"
    :aria-label="ariaLabel"
    :title="ariaLabel"
  >
    <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.231l-.356.192-3.68-.966.984 3.595-.235.364a9.86 9.86 0 -1.51-13.227 9.868 9.868 0 0 5.782 1.795l.349.074 3.526-1.01-.976 3.551a9.882 9.882 0 0 3.248 5.394 9.86 9.86 0 0 0 1.254-14.178z"/>
    </svg>
  </a>
</template>

<script setup lang="ts">
  const ariaLabel = 'Chat with us on WhatsApp'
</script>

<style scoped>
  @media (max-width: 640px) {
    a {
      bottom: 1rem;
      right: 1rem;
    }
  }
</style>
