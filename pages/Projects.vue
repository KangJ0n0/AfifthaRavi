<script setup>
import { ref, computed, watch } from "vue";
import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
} from "@heroicons/vue/24/outline";

// Define the current category state
const currentCategory = ref("website");

// Fetch projects data
const { projects } = useConstants();

// Computed property to filter projects by category
const filteredProjects = computed(() => {
  return projects.filter(
    (project) => project.category === currentCategory.value,
  );
});

// Debugging: Log whenever filteredProjects updates
watch(filteredProjects, (newVal) => {
  console.log("Filtered Projects Updated:", newVal);
});

// SEO Metadata
useHead({
  title: "Portfolio | Personal Projects",
  meta: [
    { property: "og:title", content: "Portfolio | Personal Projects" },
    { property: "og:site_name", content: "Portfolio | Personal Projects" },
    { property: "og:site", content: "http://afiftharavi.site/projects" },
  ],
});
</script>

<template>
  <NuxtLayout name="default">
    <div class="mt-8">
      <h2 class="techTitle animate-slideInLeft">Projects I've Worked On</h2>

      <!-- Category Buttons -->
      <div class="flex justify-center gap-4 mt-4">
        <!-- Website Button -->
        <button
          @click="currentCategory = 'website'"
          :class="[
            'px-4 py-2 rounded-lg shadow-lg transition duration-300 transform hover:scale-105',
            currentCategory === 'website'
              ? 'bg-white text-black dark:bg-gray-900 dark:text-white'
              : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
          ]"
        >
          <h3 class="flex items-center">
            <ComputerDesktopIcon class="h-4 w-4 inline-block mr-2" /> Website
          </h3>
        </button>

        <!-- Mobile Button -->
        <button
          @click="currentCategory = 'mobile'"
          :class="[
            'px-4 py-2 rounded-lg shadow-lg transition duration-300 transform hover:scale-105',
            currentCategory === 'mobile'
              ? 'bg-white text-black dark:bg-gray-900 dark:text-white'
              : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
          ]"
        >
          <h3 class="flex items-center">
            <DevicePhoneMobileIcon class="h-4 w-4 inline-block mr-2" /> Mobile
          </h3>
        </button>
      </div>

      <!-- Render ProjectSection -->
      <ProjectSection :projects="filteredProjects" :key="currentCategory" />
    </div>
  </NuxtLayout>
</template>
