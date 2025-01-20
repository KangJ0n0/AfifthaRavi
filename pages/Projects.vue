<script setup>
import { ref } from "vue";
import ProjectSection from "~/components/ProjectSection.vue";

// Mock data for website and mobile projects
const websiteProjects = [
  { id: 1, name: "Portfolio Website", isReverse: false },
  { id: 2, name: "E-commerce Store", isReverse: true },
];
const mobileProjects = [
  { id: 1, name: "To-Do List App", isReverse: false },
  { id: 2, name: "Travel Guide App", isReverse: true },
];

// State to track the current category
const currentCategory = ref("website");

// Functions to toggle between categories
const setToWebsite = () => (currentCategory.value = "website");
const setToMobile = () => (currentCategory.value = "mobile");
//const
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
      <h2 class="text-center text-2xl font-bold mb-4">My Personal Projects</h2>

      <!-- Category Buttons -->
      <div class="flex justify-center gap-4 mt-4">
        <!-- Website Button -->
        <button
          @click="setToWebsite"
          :class="[
            'px-6 py-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105',
            currentCategory === 'website'
              ? 'bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 text-white'
              : 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-800',
          ]"
        >
          Website
        </button>

        <!-- Mobile Button -->
        <button
          @click="setToMobile"
          :class="[
            'px-6 py-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105',
            currentCategory === 'mobile'
              ? 'bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 text-white'
              : 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-800',
          ]"
        >
          Mobile
        </button>
      </div>

      <!-- Render ProjectSection -->
      <ProjectSection
        :projects="
          currentCategory === 'website' ? websiteProjects : mobileProjects
        "
      />
    </div>
  </NuxtLayout>
</template>
