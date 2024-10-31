<script setup>
useHead({
  title: "Portfolio | Contact",
  meta: [
    {
      property: "og:title",
      content: "Portfolio | Contact",
    },
    {
      property: "og:site_name",
      content: "Portfolio | Contact",
    },
    {
      property: "og:site",
      content: "http://afiftharavi.my.id/contact",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <div class="bg-white dark:bg-[#121212]">
      <Contact id="contact" />
    </div>
  </NuxtLayout>
</template>
