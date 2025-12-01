<template>
  <section id="services" class="py-24 bg-light-DEFAULT dark:bg-dark relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] dark:opacity-[0.05]"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-7xl mx-auto">
        
        <!-- Section Header -->
        <div ref="headerContainer" class="text-center mb-20 opacity-0">
          <span class="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold tracking-wide uppercase mb-4">
            {{ servicesData.subtitle }}
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-heading">
            {{ servicesData.sectionTitle }}
          </h2>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(service, index) in servicesData.services"
            :key="service.id"
            :ref="el => { if (el) serviceCards[index] = el }"
            class="group relative p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-100 dark:border-white/5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 opacity-0"
          >
            <!-- Hover Gradient Border -->
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/20 to-accent-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <!-- Icon -->
            <div class="relative w-14 h-14 mb-6 rounded-2xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
              <!-- Code Icon -->
              <svg
                v-if="service.icon === 'code'"
                class="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>

              <!-- Mobile Icon -->
              <svg
                v-else-if="service.icon === 'mobile'"
                class="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>

              <!-- API Icon -->
              <svg
                v-else-if="service.icon === 'api'"
                class="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>

              <!-- Design Icon -->
              <svg
                v-else-if="service.icon === 'design'"
                class="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>

              <!-- Optimization Icon -->
              <svg
                v-else-if="service.icon === 'optimization'"
                class="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>

              <!-- Maintenance Icon -->
              <svg
                v-else-if="service.icon === 'maintenance'"
                class="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>

            <!-- Service Title -->
            <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white font-heading group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {{ service.title }}
            </h3>

            <!-- Service Description -->
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ service.description }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { animate, inView } from 'motion';
import { servicesData } from '../data/services.js';

// Refs for animation targets
const headerContainer = ref(null);
const serviceCards = ref([]);

onMounted(() => {
  // Animate header on scroll into view
  inView(headerContainer.value, () => {
    animate(
      headerContainer.value,
      { opacity: [0, 1], y: [30, 0] },
      { duration: 0.6, easing: 'ease-out' }
    );
  });

  // Animate each service card with staggered delay
  serviceCards.value.forEach((card, index) => {
    if (card) {
      inView(card, () => {
        animate(
          card,
          { opacity: [0, 1], y: [40, 0] },
          { 
            duration: 0.5, 
            easing: 'ease-out',
            delay: index * 0.15 // Stagger animation
          }
        );
      });
    }
  });
});
</script>
