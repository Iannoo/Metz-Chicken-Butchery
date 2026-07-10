import { ref } from 'vue'

interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: any) => boolean
  message?: string
}

interface ValidationRules {
  [key: string]: ValidationRule
}

export const useFormValidation = (rules: ValidationRules) => {
  const errors = ref<{ [key: string]: string }>({})
  const values = ref<{ [key: string]: any }>({})

  const validate = (field: string, value: any): boolean => {
    const rule = rules[field]
    if (!rule) return true

    if (rule.required && !value) {
      errors.value[field] = rule.message || 'This field is required'
      return false
    }

    if (rule.minLength && value.length < rule.minLength) {
      errors.value[field] = rule.message || `Minimum length is ${rule.minLength} characters`
      return false
    }

    if (rule.maxLength && value.length > rule.maxLength) {
      errors.value[field] = rule.message || `Maximum length is ${rule.maxLength} characters`
      return false
    }

    if (rule.pattern && !rule.pattern.test(value)) {
      errors.value[field] = rule.message || 'Invalid format'
      return false
    }

    if (rule.custom && !rule.custom(value)) {
      errors.value[field] = rule.message || 'Invalid value'
      return false
    }

    delete errors.value[field]
    return true
  }

  const validateAll = (): boolean => {
    let isValid = true
    Object.keys(rules).forEach(field => {
      if (!validate(field, values.value[field])) {
        isValid = false
      }
    })
    return isValid
  }

  const setValue = (field: string, value: any) => {
    values.value[field] = value
    validate(field, value)
  }

  const clearErrors = () => {
    errors.value = {}
  }

  return {
    errors,
    values,
    validate,
    validateAll,
    setValue,
    clearErrors
  }
} 