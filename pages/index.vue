<script setup>
import Home from "~/pages/Home.vue";

//const
useHead({
  meta: [
    {
      property: "og:site",
      content: "http://afiftharavi.site/",
    },
  ],
});
</script>

<template>
  <suspense>
    <Pageloader />
  </suspense>
  <NuxtLayout name="loader">
    <Home />
  </NuxtLayout>
</template>
