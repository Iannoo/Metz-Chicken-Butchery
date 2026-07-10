import { ref } from 'vue'

export const useErrorHandler = () => {
  const error = ref<string | null>(null)
  const loading = ref(false)

  const handleError = (err: any) => {
    error.value = err.message || 'An unexpected error occurred'
    loading.value = false
  }

  const clearError = () => {
    error.value = null
  }

  const setLoading = (value: boolean) => {
    loading.value = value
  }

  return {
    error,
    loading,
    handleError,
    clearError,
    setLoading
  }
} 