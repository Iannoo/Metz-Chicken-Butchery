<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[40vh] min-h-[300px] bg-gray-900 overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80"
          alt="Contact Metz Chicken Butchery"
          class="w-full h-full object-cover opacity-50"
        />
      </div>
      <div class="relative container mx-auto px-4 h-full flex items-center">
        <div class="max-w-2xl text-white">
          <h1 class="text-4xl md:text-5xl font-display font-bold mb-6">Contact Us</h1>
          <p class="text-xl text-gray-200">We'd love to hear from you. Get in touch with our team for any questions or to place an order.</p>
        </div>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <h2 class="text-3xl font-display mb-8">Send Us a Message</h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select
                  id="subject"
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Inquiry</option>
                  <option value="delivery">Delivery Question</option>
                  <option value="product">Product Information</option>
                  <option value="farm">Farm Tour</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-display mb-8">Get in Touch</h2>
            
            <div class="space-y-8">
              <div>
                <h3 class="text-lg font-semibold mb-4">Visit Our Farm</h3>
                <address class="not-italic text-gray-600">
                  <p>123 Farm Road</p>
                  <p>Your City, State 12345</p>
                  <p class="mt-4">
                    <strong>Hours:</strong><br>
                    Monday - Friday: 8:00 AM - 6:00 PM<br>
                    Saturday: 9:00 AM - 4:00 PM<br>
                    Sunday: Closed
                  </p>
                </address>
              </div>

              <div>
                <h3 class="text-lg font-semibold mb-4">Contact Information</h3>
                <div class="space-y-2 text-gray-600">
                  <p>
                    <strong>Phone:</strong><br>
                    <a href="tel:+1234567890" class="hover:text-primary-600">(123) 456-7890</a>
                  </p>
                  <p>
                    <strong>Email:</strong><br>
                    <a href="mailto:info@metzchicken.com" class="hover:text-primary-600">info@metzchicken.com</a>
                  </p>
                </div>
              </div>

              <div>
                <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
                <div class="flex space-x-4">
                  <a href="#" class="text-gray-600 hover:text-primary-600">
                    <span class="sr-only">Facebook</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </a>
                  <a href="#" class="text-gray-600 hover:text-primary-600">
                    <span class="sr-only">Instagram</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-display text-center mb-12">Find Us</h2>
        <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
          <!-- Replace with actual map embed -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819565377546!2d36.82121431475391!3d-1.2829999999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d5a5f5f5f5%3A0x5f5f5f5f5f5f5f5f!2sMetz%20Chicken%20Butchery!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen="true"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    // TODO: Implement form submission
    console.log('Form submitted:', form.value)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
    alert('Thank you for your message! We will get back to you soon.')
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('There was an error submitting your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

useHead({
  title: 'Contact Us - Metz Chicken Butchery',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with Metz Chicken Butchery. Visit our farm, place an order, or learn more about our products. We\'re here to help!'
    }
  ]
})
</script> 