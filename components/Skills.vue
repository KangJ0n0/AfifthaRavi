<template>
  <section id="skills">
    <ul>
      <li v-for="skill in skillSet" :key="skill" class="skillStyle">
        <img
          :src="skill.imgUrl"
          :alt="skill.alt"
          :width="skill.width"
          :height="skill.height"
          loading="lazy"
        />
        <p>{{ skill.name }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps({
  skillSet: {
    type: Array,
    default: () => [],
  },
});

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  // Only animate skill items
  gsap.set(".skillStyle", { opacity: 0, y: 20 });
  ScrollTrigger.batch(".skillStyle", {
    start: "-160px center",
    end: "top center",
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
  });
});
</script>

<style scoped>
.skillStyle:hover {
  transform: translateY(-0.5rem) !important;
}
.skillStyle {
  opacity: 0;
}
</style>
