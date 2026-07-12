import { ref } from 'vue';

const i = () => {
  const o = ref(null);
  return { user: o, signIn: async (n, r) => (console.log("Mock sign in:", n), o.value = { id: "mock-user-id", email: n }, { error: null }), signUp: async (n, r) => (console.log("Mock sign up:", n), o.value = { id: "mock-user-id", email: n }, { error: null }), updateProfile: async (n) => (console.log("Mock update profile:", n), { error: null }), signOut: async () => (console.log("Mock sign out"), o.value = null, { error: null }) };
};

export { i };
//# sourceMappingURL=useAuth.mjs.map
