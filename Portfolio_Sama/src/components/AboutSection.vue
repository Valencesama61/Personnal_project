<template>
  <section id="about" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        
        <!-- Section Title -->
        <h2 
          ref="sectionTitle"
          class="text-4xl sm:text-5xl font-bold mb-16 text-center text-gray-900 dark:text-gray-100 opacity-0 font-heading"
        >
          {{ aboutData.sectionTitle }}
        </h2>

        <!-- Two Column Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <!-- Left Column: Image -->
          <div ref="imageContainer" class="opacity-0">
            <div class="relative w-full aspect-[4/3] bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
              <img 
                :src="aboutData.image" 
                :alt="aboutData.imageAlt" 
                loading="lazy"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Right Column: Content -->
          <div ref="contentContainer" class="space-y-6 opacity-0">
            
            <!-- Subtitle -->
            <p class="text-sm font-semibold tracking-widest uppercase text-primary-600 dark:text-primary-400">
              {{ aboutData.subtitle }}
            </p>

            <!-- Heading -->
            <h3 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 font-heading">
              {{ aboutData.heading }}
            </h3>

            <!-- Description Paragraphs -->
            <div class="space-y-4">
              <p 
                v-for="(paragraph, index) in aboutData.paragraphs" 
                :key="index"
                class="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                {{ paragraph }}
              </p>
            </div>

            <!-- Statistics -->
            <div class="grid grid-cols-2 gap-6 pt-6">
              <div 
                v-for="(stat, index) in aboutData.stats" 
                :key="index"
                class="space-y-1"
              >
                <div class="text-4xl sm:text-5xl font-bold text-primary-600 dark:text-primary-400">
                  {{ stat.number }}
                </div>
                <div class="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium">
                  {{ stat.label }}
                </div>
              </div>
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
import { aboutData } from '../data/about.js';

// Refs for animation targets
const sectionTitle = ref(null);
const imageContainer = ref(null);
const contentContainer = ref(null);

onMounted(() => {
  // Animate section title on scroll into view
  inView(sectionTitle.value, () => {
    animate(
      sectionTitle.value,
      { opacity: [0, 1], y: [30, 0] },
      { duration: 0.6, easing: 'ease-out' }
    );
  });

  // Animate image container on scroll into view
  inView(imageContainer.value, () => {
    animate(
      imageContainer.value,
      { opacity: [0, 1], x: [-50, 0] },
      { duration: 0.8, easing: 'ease-out', delay: 0.2 }
    );
  });

  // Animate content container on scroll into view
  inView(contentContainer.value, () => {
    animate(
      contentContainer.value,
      { opacity: [0, 1], x: [50, 0] },
      { duration: 0.8, easing: 'ease-out', delay: 0.3 }
    );
  });
});
</script>
