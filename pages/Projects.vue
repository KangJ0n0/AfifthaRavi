<script setup>
import { ref } from "vue";
import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
} from "@heroicons/vue/24/outline";
const currentCategory = ref("website");

// Functions to toggle between categories
const setToWebsite = () => (currentCategory.value = "website");
const setToMobile = () => (currentCategory.value = "mobile");
const filteredProjects = computed(() =>
  projects.filter((project) => project.category === currentCategory.value),
);

const { projects } = useConstants();
useHead({
  title: "Portfolio | Personal Projects",
  meta: [
    {
      property: "og:title",
      content: "Portfolio | Personal Projects",
    },
    {
      property: "og:site_name",
      content: "Portfolio | Personal Projects",
    },
    {
      property: "og:site",
      content: "http://afiftharavi.site/projects",
    },
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
          @click="setToWebsite"
          :class="[
            'px-4 py-2 rounded-lg shadow-lg transition duration-300 transform hover:scale-105',
            currentCategory === 'website'
              ? 'bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 text-white'
              : 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-800',
          ]"
        >
          <h3 class="flex items-center">
            <ComputerDesktopIcon class="h-4 w-4 inline-block mr-2" /> Website
          </h3>
        </button>

        <!-- Mobile Button -->
        <button
          @click="setToMobile"
          :class="[
            'px-4 py-2 rounded-lg shadow-lg transition duration-300 transform hover:scale-105',
            currentCategory === 'mobile'
              ? 'bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 text-white'
              : 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-800',
          ]"
        >
          <h3 class="flex items-center">
            <DevicePhoneMobileIcon class="h-4 w-4 inline-block mr-2" /> Mobile
          </h3>
        </button>
      </div>

      <!-- Render ProjectSection -->
      <ProjectSection :projects="filteredProjects" />
    </div>
  </NuxtLayout>
</template>
