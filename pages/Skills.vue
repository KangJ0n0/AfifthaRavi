<script setup>
import { ref } from "vue";
import {
  DevicePhoneMobileIcon,
  PencilSquareIcon,
  GlobeAltIcon,
  Bars3BottomRightIcon,
} from "@heroicons/vue/24/outline";

// Mock datasets for demonstration
const { skillWithLogo } = useConstants();
const { editSet } = useConstants();
const { otherSet } = useConstants();
// Track the current set to display
const currentSet = ref("skillWithLogo");

// Functions to update current set based on button click
const setToSkillSet = () => (currentSet.value = "skillWithLogo");
const setToEditSet = () => (currentSet.value = "editSet");
const setToOtherSet = () => (currentSet.value = "otherSet");

useHead({
  title: "Portfolio | Skills",
  meta: [
    {
      property: "og:title",
      content: "Portfolio | Skills",
    },
    {
      property: "og:site_name",
      content: "Portfolio | Skills",
    },
    {
      property: "og:site",
      content: "http://afiftharavi.my.id/skills",
    },
  ],
});
</script>

<template>
  <NuxtLayout name="set">
    <div>
      <div class="mt-8">
        <h2 class="techTitle animate-slideInLeft">
          Technologies & Frameworks in Use
        </h2>
      </div>

      <div class="flex justify-center gap-4 mt-4 flex-wrap">
        <button
          @click="setToSkillSet"
          :class="[
            'px-4 py-2 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 ',
            currentSet === 'skillWithLogo'
              ? 'bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 text-white'
              : 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-800',
          ]"
        >
          <h3 class="flex items-center">
            <GlobeAltIcon class="h-4 w-4 inline-block mr-2" />
            Website
          </h3>
        </button>

        <button
          @click="setToEditSet"
          :class="[
            'px-4 py-2 rounded-lg shadow-lg transition duration-300 transform hover:scale-105',
            currentSet === 'editSet'
              ? 'bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 text-white'
              : 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-800',
          ]"
        >
          <h3 class="flex items-center">
            <PencilSquareIcon class="h-4 w-4 inline-block mr-2" /> Editing
          </h3>
        </button>

        <button
          @click="setToOtherSet"
          :class="[
            'px-4 py-2 rounded-lg shadow-lg transition duration-300 transform hover:scale-105',
            currentSet === 'otherSet'
              ? 'bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 text-white'
              : 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-800',
          ]"
        >
          <h3 class="flex items-center">
            <Bars3BottomRightIcon class="h-4 w-4 inline-block mr-2" /> Other
          </h3>
        </button>
      </div>

      <Skills
        :skill-set="
          currentSet === 'skillWithLogo'
            ? skillWithLogo
            : currentSet === 'editSet'
              ? editSet
              : otherSet
        "
        :key="currentSet"
      />
    </div>
  </NuxtLayout>
</template>

<style scoped>
button:focus {
  outline: none;
}
</style>
