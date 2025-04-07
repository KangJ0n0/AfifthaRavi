<template>
  <section class="project-section">
    <div class="project-grid">
      <CardsNewProject
        v-for="project in projects"
        :key="project.id"
        :project-details="project"
        :is-reverse="project.isReverse"
      />
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps({
  projects: {
    type: Array,
    default: () => [],
  },
});

onMounted(() => {
  let titleTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".project-title",
      start: "-100px center",
      end: "top center",
    },
  });
  titleTl
    .from(".project-title", { opacity: 0, translateX: "-100px" })
    .to(".project-title", { opacity: 1, translateX: "0px", duration: 0.5 });

  gsap.fromTo(
    ".project-card",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, stagger: 0.15, duration: 0.5 },
  );
});
</script>

<style scoped>
.project-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.project-card {
  opacity: 0;
}
</style>
