<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-light-DEFAULT dark:bg-dark pt-20">
    <!-- Dynamic Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-accent-info/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-32 left-1/3 w-96 h-96 bg-accent-success/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] dark:opacity-[0.05]"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-24 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        
        <!-- Text Content -->
        <div class="space-y-8 text-center lg:text-left" ref="textContainer">
          <div class="space-y-4">
            <div class="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold tracking-wide uppercase mb-4 opacity-0 translate-y-4" ref="badge">
               Bienvenue sur mon portfolio
            </div>
            
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white opacity-0 translate-y-8 font-heading leading-tight" ref="title">
              <span class="block">Je suis</span>
              <span class="text-gradient">Valence.</span>
            </h1>
            
            <p class="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium opacity-0 translate-y-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed" ref="subtitle">
              {{ heroData.subtitle }}
              <span class="block text-base sm:text-lg mt-2 text-gray-500 dark:text-gray-400 font-normal">{{ heroData.description }}</span>
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start opacity-0 translate-y-8" ref="cta">
            <a
              :href="heroData.cvPath"
              download="CV_Valence_Odounbourou.pdf"
              class="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-white transition-all duration-200 bg-primary-600 rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transform hover:-translate-y-1"
            >
              {{ heroData.cta }}
              <svg class="w-4 h-4 sm:w-5 sm:h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
            <a
              href="#contact"
              class="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-gray-700 dark:text-white transition-all duration-200 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 backdrop-blur-sm"
            >
              Me contacter
            </a>
          </div>
          
          <!-- Social Proof / Tech Stack -->
        </div>

        <!-- Image/Illustration -->
        <div class="relative lg:h-full flex justify-center lg:justify-end items-center perspective-1000 mt-8 lg:mt-0" ref="imageContainer">
          <div class="relative w-full max-w-xs sm:max-w-sm lg:max-w-lg aspect-square opacity-0 scale-95 group" ref="image">
            <!-- Glass Card Effect Behind -->
            <div class="absolute inset-0 bg-gradient-to-tr from-primary-600 to-accent-pink rounded-[2rem] rotate-6 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <!-- Main Image Container -->
            <div class="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-800 bg-gray-900 transform transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1">
              <img 
                :src="heroData.image" 
                alt="Hero Illustration" 
                loading="lazy"
                class="relative object-cover w-full h-full"
              />
              
              <!-- Floating Badge -->
              <div class="absolute bottom-8 left-8 glass px-6 py-4 rounded-2xl animate-float shadow-lg">
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span class="text-sm font-bold text-gray-800 dark:text-white">Disponible pour projets</span>
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
import { computed, onMounted, ref } from 'vue';
import { animate, stagger } from 'motion';
import { data } from '../data/data.js';

const heroData = computed(() => data.hero);

const title = ref(null);
const subtitle = ref(null);
const description = ref(null);
const cta = ref(null);
const image = ref(null);
const badge = ref(null);

onMounted(() => {
  // Text elements stagger animation
  animate(
    [badge.value, title.value, subtitle.value, cta.value],
    { opacity: [0, 1], y: [30, 0] },
    { 
      duration: 0.8, 
      delay: stagger(0.1),
      easing: [0.22, 0.03, 0.26, 1] 
    }
  );

  // Image fade in and scale up
  animate(
    image.value,
    { opacity: [0, 1], scale: [0.9, 1], rotate: [5, 0] },
    { 
      duration: 1, 
      delay: 0.4,
      easing: "ease-out" 
    }
  );
});
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
