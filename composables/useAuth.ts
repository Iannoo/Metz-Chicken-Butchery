interface User {
  id: string
  email: string
}

export const useAuth = () => {
  const user = ref<User | null>(null)
  const signIn = async (email: string, password: string) => {
    // Mock implementation - frontend only
    console.log('Mock sign in:', email)
    user.value = { id: 'mock-user-id', email }
    return { error: null }
  }
  const signUp = async (email: string, password: string) => {
    // Mock implementation - frontend only
    console.log('Mock sign up:', email)
    user.value = { id: 'mock-user-id', email }
    return { error: null }
  }
  const updateProfile = async (updates: any) => {
    // Mock implementation - frontend only
    console.log('Mock update profile:', updates)
    return { error: null }
  }
  const signOut = async () => {
    // Mock implementation - frontend only
    console.log('Mock sign out')
    user.value = null
    return { error: null }
  }

  return {
    user,
    signIn,
    signUp,
    updateProfile,
    signOut
  }
}
