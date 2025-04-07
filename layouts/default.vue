<template>
  <div class="layout-wrapper">
    <NavBar />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const gtag = `
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "${runtimeConfig.public.NUXT_GTM_ID}");
`;
useHead({
  script: [
    {
      async: true,
      src: `https://www.googletagmanager.com/gtag/js?id=${runtimeConfig.public.NUXT_GTM_ID}`,
    },
    {
      type: "text/javascript",
      innerHTML: gtag,
    },
    {
      type: "text/javascript",
      src: "js/useCopy.js",
    },
  ],
});
</script>

<style scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1; /* Pushes footer to bottom when content is short */
}
</style>
