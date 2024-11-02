<template>
  <div>
    <NavBar />

    <slot />
    <br />
    <br />
    <br />
    <br />
    <Footer style="position: fixed; bottom: 0; width: 100%; margin-top: 8px" />
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
