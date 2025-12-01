<template>
  <section id="contact" class="py-24 bg-white dark:bg-dark-lighter relative">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        
        <!-- Section Header -->
        <div ref="headerContainer" class="text-center mb-20 opacity-0">
          <span class="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold tracking-wide uppercase mb-4">
            {{ contactData.subtitle }}
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-heading">
            {{ contactData.sectionTitle }}
          </h2>
        </div>

        <!-- Two Column Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          <!-- Left Column: Contact Information -->
          <div ref="contactInfoContainer" class="space-y-10 opacity-0">
            <div class="prose dark:prose-invert">
              <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Vous avez un projet en tête ou vous souhaitez simplement dire bonjour ? N'hésitez pas à me contacter. Je suis toujours ouvert aux nouvelles opportunités et collaborations.
              </p>
            </div>

            <div class="space-y-6">
              <!-- Email -->
              <div class="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-primary-200 dark:hover:border-primary-800 transition-colors group">
                <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center text-primary-600 dark:text-primary-400 shadow-sm group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Email</h3>
                  <a 
                    :href="`mailto:${contactData.contactInfo.email}`"
                    class="text-sm sm:text-lg font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors break-all"
                  >
                    {{ contactData.contactInfo.email }}
                  </a>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-primary-200 dark:hover:border-primary-800 transition-colors group">
                <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center text-primary-600 dark:text-primary-400 shadow-sm group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Téléphone</h3>
                  <a 
                    :href="`tel:${contactData.contactInfo.phone.replace(/\s/g, '')}`"
                    class="text-sm sm:text-lg font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {{ contactData.contactInfo.phone }}
                  </a>
                </div>
              </div>

              <!-- Location -->
              <div class="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-primary-200 dark:hover:border-primary-800 transition-colors group">
                <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center text-primary-600 dark:text-primary-400 shadow-sm group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Localisation</h3>
                  <p class="text-sm sm:text-lg font-medium text-gray-900 dark:text-white">
                    {{ contactData.contactInfo.location }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Contact Form -->
          <div ref="formContainer" class="opacity-0">
            <div class="bg-white dark:bg-dark-card p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-white/5 relative overflow-hidden">
              <!-- Decorative Gradient -->
              <div class="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>

              <form @submit.prevent="handleSubmit" class="space-y-6 relative z-10">
                
                <!-- Name Input -->
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nom complet
                  </label>
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    required
                    :placeholder="contactData.form.namePlaceholder"
                    class="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-lighter text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder-gray-400 dark:placeholder-gray-500"
                    :disabled="formState.isSubmitting"
                  />
                </div>

                <!-- Email Input -->
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Adresse email
                  </label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    required
                    :placeholder="contactData.form.emailPlaceholder"
                    class="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-lighter text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder-gray-400 dark:placeholder-gray-500"
                    :disabled="formState.isSubmitting"
                  />
                </div>

                <!-- Message Textarea -->
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    v-model="formData.message"
                    required
                    rows="5"
                    :placeholder="contactData.form.messagePlaceholder"
                    class="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-lighter text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none placeholder-gray-400 dark:placeholder-gray-500"
                    :disabled="formState.isSubmitting"
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  :disabled="formState.isSubmitting"
                  class="w-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-white font-bold rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 transform hover:-translate-y-1 shadow-lg shadow-primary-500/30"
                >
                  <span v-if="formState.isSubmitting" class="flex items-center justify-center gap-2">
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                  <span v-else>
                    {{ contactData.form.submitButton }}
                  </span>
                </button>

                <!-- Success Message -->
                <div
                  v-if="formState.showSuccess"
                  class="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-center gap-3 animate-fade-in"
                >
                  <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <p class="text-green-700 dark:text-green-300 text-sm font-medium">
                    {{ contactData.form.successMessage }}
                  </p>
                </div>

                <!-- Error Message -->
                <div
                  v-if="formState.showError"
                  class="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-center gap-3 animate-fade-in"
                >
                  <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  <p class="text-red-700 dark:text-red-300 text-sm font-medium">
                    {{ contactData.form.errorMessage }}
                  </p>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { animate, inView } from 'motion';
import { contactData } from '../data/contact.js';

// Refs for animation targets
const headerContainer = ref(null);
const contactInfoContainer = ref(null);
const formContainer = ref(null);

// Form data
const formData = reactive({
  name: '',
  email: '',
  message: ''
});

// Form state
const formState = reactive({
  isSubmitting: false,
  showSuccess: false,
  showError: false
});

// Handle form submission
const handleSubmit = async () => {
  formState.isSubmitting = true;
  formState.showSuccess = false;
  formState.showError = false;

  try {
    // Simulate API call (replace with actual EmailJS integration)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // TODO: Integrate with EmailJS
    // Example EmailJS integration:
    // import emailjs from '@emailjs/browser';
    // await emailjs.send(
    //   contactData.emailJS.serviceId,
    //   contactData.emailJS.templateId,
    //   {
    //     from_name: formData.name,
    //     from_email: formData.email,
    //     message: formData.message
    //   },
    //   contactData.emailJS.publicKey
    // );

    // Show success message
    formState.showSuccess = true;

    // Reset form
    formData.name = '';
    formData.email = '';
    formData.message = '';

    // Hide success message after 5 seconds
    setTimeout(() => {
      formState.showSuccess = false;
    }, 5000);

  } catch (error) {
    console.error('Error sending message:', error);
    formState.showError = true;

    // Hide error message after 5 seconds
    setTimeout(() => {
      formState.showError = false;
    }, 5000);
  } finally {
    formState.isSubmitting = false;
  }
};

onMounted(() => {
  // Animate header on scroll into view
  inView(headerContainer.value, () => {
    animate(
      headerContainer.value,
      { opacity: [0, 1], y: [30, 0] },
      { duration: 0.6, easing: 'ease-out' }
    );
  });

  // Animate contact info container
  inView(contactInfoContainer.value, () => {
    animate(
      contactInfoContainer.value,
      { opacity: [0, 1], x: [-50, 0] },
      { duration: 0.8, easing: 'ease-out', delay: 0.2 }
    );
  });

  // Animate form container
  inView(formContainer.value, () => {
    animate(
      formContainer.value,
      { opacity: [0, 1], x: [50, 0] },
      { duration: 0.8, easing: 'ease-out', delay: 0.3 }
    );
  });
});
</script>
