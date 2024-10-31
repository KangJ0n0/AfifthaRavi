<script setup>
//const
const { skillWithLogo } = useConstants();
const { editSet } = useConstants();
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
  <NuxtLayout name="default">
    <Skills :skill-set="skillWithLogo" />
  </NuxtLayout>
</template>
