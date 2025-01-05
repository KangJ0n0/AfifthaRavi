<script setup>
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
    <ProjectSection :projects="projects" />
  </NuxtLayout>
</template>
