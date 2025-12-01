<template>
  <section id="skills" class="py-24 bg-light-DEFAULT dark:bg-dark relative overflow-hidden">
    <!-- Background Decoration -->
    <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-500/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-teal/5 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-7xl mx-auto">
        
        <!-- Section Header -->
        <div ref="headerContainer" class="text-center mb-20 opacity-0">
          <span class="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold tracking-wide uppercase mb-4">
            {{ skillsData.subtitle }}
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-heading">
            {{ skillsData.sectionTitle }}
          </h2>
        </div>

        <!-- Skills Grid (Bento Style) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(category, index) in skillsData.categories"
            :key="index"
            :ref="el => { if (el) skillCards[index] = el }"
            class="group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 opacity-0"
            :class="[
              'glass-card dark:bg-dark-card/50',
              index === 1 ? 'lg:translate-y-12' : '' // Staggered layout effect
            ]"
          >
            <!-- Hover Gradient Border -->
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/20 to-accent-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <!-- Icon -->
            <div class="relative w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-primary-500/10 to-primary-600/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <svg
                v-if="category.icon === 'code'"
                class="w-8 h-8 text-primary-600 dark:text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>

              <svg
                v-else-if="category.icon === 'database'"
                class="w-8 h-8 text-primary-600 dark:text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>

              <svg
                v-else-if="category.icon === 'brush'"
                class="w-8 h-8 text-primary-600 dark:text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>

            <!-- Content -->
            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white font-heading group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {{ category.title }}
            </h3>

            <!-- Skills Tags -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(skill, skillIndex) in category.skills"
                :key="skillIndex"
                class="px-3 py-1.5 text-sm font-medium rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 group-hover:border-primary-200 dark:group-hover:border-primary-800 transition-colors"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { animate, inView } from 'motion';
import { skillsData } from '../data/skills.js';

// Refs for animation targets
const headerContainer = ref(null);
const skillCards = ref([]);

onMounted(() => {
  // Animate header on scroll into view
  inView(headerContainer.value, () => {
    animate(
      headerContainer.value,
      { opacity: [0, 1], y: [30, 0] },
      { duration: 0.6, easing: 'ease-out' }
    );
  });

  // Animate each skill card with staggered delay
  skillCards.value.forEach((card, index) => {
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
