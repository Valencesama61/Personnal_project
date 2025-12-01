<template>
  <section id="projects" class="py-24 bg-white dark:bg-dark-lighter relative">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        
        <!-- Section Header -->
        <div ref="headerContainer" class="text-center mb-20 opacity-0">
          <span class="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold tracking-wide uppercase mb-4">
            {{ projectsData.subtitle }}
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-heading">
            {{ projectsData.sectionTitle }}
          </h2>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in visibleProjects"
            :key="project.id"
            :ref="el => setCardRef(el, project.id)"
            class="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 opacity-0"
          >
            <!-- Background Image -->
            <div class="absolute inset-0">
              <img 
                :src="project.image" 
                :alt="project.name"
                loading="lazy"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
            </div>

            <!-- Content -->
            <div class="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <span
                  v-for="(tag, index) in project.tags"
                  :key="index"
                  class="px-3 py-1 text-xs font-bold rounded-full bg-white/20 backdrop-blur-md text-white border border-white/10"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Title -->
              <h3 class="text-2xl font-bold text-white mb-2 font-heading">
                {{ project.name }}
              </h3>

              <!-- Description -->
              <p class="text-gray-300 text-sm line-clamp-2 mb-6 group-hover:text-white transition-colors duration-300">
                {{ project.description }}
              </p>

              <!-- Links -->
              <div class="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 translate-y-4 group-hover:translate-y-0">
                <a
                  :href="project.demoLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white rounded-xl bg-primary-600 hover:bg-primary-700 transition-colors"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Demo
                </a>
                <a
                  :href="project.codeLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                  </svg>
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Carousel Indicators -->
        <div class="flex justify-center gap-3 mt-16">
          <button
            v-for="(_, index) in totalPages"
            :key="index"
            @click="goToPage(index)"
            class="h-1.5 rounded-full transition-all duration-300"
            :class="currentPage === index ? 'w-8 bg-primary-600' : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-primary-400'"
            :aria-label="`Page ${index + 1}`"
          />
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { animate, inView } from 'motion';
import { projectsData } from '../data/projects.js';

// Refs for animation targets
const headerContainer = ref(null);
const projectCards = ref({});

// Carousel state
const currentPage = ref(0);
const itemsPerPage = 3;
const autoRotateInterval = ref(null);

// Set card ref dynamically
const setCardRef = (el, id) => {
  if (el) {
    projectCards.value[id] = el;
  }
};

// Computed: Total number of pages
const totalPages = computed(() => {
  return Math.ceil(projectsData.projects.length / itemsPerPage);
});

// Computed: Visible projects based on current page
const visibleProjects = computed(() => {
  const start = currentPage.value * itemsPerPage;
  const end = start + itemsPerPage;
  return projectsData.projects.slice(start, end);
});

// Function to go to a specific page
const goToPage = (pageIndex) => {
  // Animate out current cards
  visibleProjects.value.forEach(project => {
    const card = projectCards.value[project.id];
    if (card) {
      animate(
        card,
        { opacity: [1, 0], y: [0, -20] },
        { duration: 0.3, easing: 'ease-in' }
      );
    }
  });

  // Change page after animation
  setTimeout(() => {
    currentPage.value = pageIndex;
    
    // Animate in new cards
    setTimeout(() => {
      visibleProjects.value.forEach((project, index) => {
        const card = projectCards.value[project.id];
        if (card) {
          animate(
            card,
            { opacity: [0, 1], y: [20, 0] },
            { 
              duration: 0.5, 
              easing: 'ease-out',
              delay: index * 0.1
            }
          );
        }
      });
    }, 50);
  }, 300);
};

// Function to go to next page (with loop)
const nextPage = () => {
  const nextPageIndex = (currentPage.value + 1) % totalPages.value;
  goToPage(nextPageIndex);
};

// Start auto-rotation
const startAutoRotate = () => {
  autoRotateInterval.value = setInterval(() => {
    nextPage();
  }, 10000); // 10 seconds
};

// Stop auto-rotation
const stopAutoRotate = () => {
  if (autoRotateInterval.value) {
    clearInterval(autoRotateInterval.value);
    autoRotateInterval.value = null;
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

  // Animate initial visible cards
  setTimeout(() => {
    visibleProjects.value.forEach((project, index) => {
      const card = projectCards.value[project.id];
      if (card) {
        inView(card, () => {
          animate(
            card,
            { opacity: [0, 1], y: [40, 0] },
            { 
              duration: 0.5, 
              easing: 'ease-out',
              delay: index * 0.15
            }
          );
        });
      }
    });
  }, 100);

  // Start auto-rotation after initial animation
  setTimeout(() => {
    startAutoRotate();
  }, 1000);
});

onUnmounted(() => {
  // Clean up interval on component unmount
  stopAutoRotate();
});
</script>
