<template>
  <nav 
    ref="navbar"
    class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 rounded-2xl border border-transparent"
    :class="[
      scrolled 
        ? 'glass shadow-lg border-white/20 dark:border-white/10' 
        : 'bg-transparent'
    ]"
  >
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        
        <!-- Logo & Brand -->
        <div class="flex items-center space-x-3 group cursor-pointer">
          <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-pink rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
            <span class="text-white font-bold text-xl">V</span>
          </div>
          <span class="text-xl font-bold text-gray-900 dark:text-white font-heading tracking-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            Valence ODOUNBOUROU<span class="text-primary-600 dark:text-primary-400">.</span>
          </span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-1">
          <a
            v-for="item in navigationLinks"
            :key="item.name"
            :href="item.href"
            class="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-white/5 transition-all duration-200"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- Dark Mode Toggle & Mobile Menu Button -->
        <div class="flex items-center space-x-3">
          <!-- Dark Mode Toggle -->
          <button
            @click="toggleDarkMode"
            class="p-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-white/5 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 ring-1 ring-gray-200 dark:ring-white/10"
            aria-label="Toggle dark mode"
          >
            <svg v-if="isDarkMode" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-white/5 transition-colors duration-200 ring-1 ring-gray-200 dark:ring-white/10"
            aria-label="Toggle menu"
          >
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMobileMenuOpen"
      ref="mobileMenu"
      class="md:hidden absolute top-full left-0 right-0 mt-2 mx-auto w-full bg-white/90 dark:bg-dark-card/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden"
    >
      <div class="px-4 py-3 space-y-1">
        <a
          v-for="item in navigationLinks"
          :key="item.name"
          :href="item.href"
          @click="closeMobileMenu"
          class="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-white/5 transition-all duration-200"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { animate } from 'motion';
import { data } from '../data/data.js';

const navigationLinks = computed(() => data.navigation);

// Dark mode state
const isDarkMode = ref(false);

// Mobile menu state
const isMobileMenuOpen = ref(false);

// Scroll state
const scrolled = ref(false);

// Refs
const navbar = ref(null);
const mobileMenu = ref(null);

// Check for saved dark mode preference or system preference
onMounted(() => {
  // Check localStorage first, then system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  isDarkMode.value = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
  
  // Apply dark mode class
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  }

  // Add scroll listener
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Handle scroll
const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

// Toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Animate mobile menu when it opens/closes
watch(isMobileMenuOpen, (isOpen) => {
  if (isOpen && mobileMenu.value) {
    animate(
      mobileMenu.value,
      { opacity: [0, 1], y: [-10, 0], scale: [0.95, 1] },
      { duration: 0.3, easing: [0.22, 1, 0.36, 1] }
    );
  }
});
</script>

<style scoped>
/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}
</style>
