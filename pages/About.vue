<script setup>
//const
const { hobbies, timeline } = useConstants();
useHead({
  meta: [
    {
      property: "og:site",
      content: "http://afiftharavi.my.id/",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <div class="about-section">
      <Profile />
      <div class="empty-left-content"></div>
      <div class="right-content">
        <section>
          <p class="mt-2">
            Hi there! I'm
            <b class="text-gray-800 dark:text-gray-200">Afiftha Ravi Aufa</b> a
            programmer with a background in software engineering, enjoy diving
            into programming, particularly web and mobile development. I'm open
            to collaborating on any opportunities. Currently studying as an
            Informatics student at
            <a
              class="font-bold text-blue-700 dark:text-blue-400 hover:underline"
              href="https://unsoed.ac.id/"
              >Jenderal Soedirman University</a
            >.
          </p>
          <p class="mt-2">
            I'm passionate in learning new technologies, building responsive
            websites, and documenting my working process when it comes to
            complicated features.
          </p>
          <p class="mt-2">
            Here are a few technologies I've been working with recently:
          </p>

          <div class="flex gap-10 mt-2 pl-3">
            <ul>
              <li>Vue</li>
              <li>Flutter</li>
              <li>Ionic</li>
              <li>React</li>
            </ul>
            <ul>
              <li>NuxtJS</li>
              <li>Firebase</li>
              <li>Laravel</li>
              <li>NextJs</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Career Timeline</h2>
          <CardsCareer v-for="career in timeline" :career-details="career" />
        </section>

        <HobbySection :hobbies="hobbies" />
      </div>
    </div>
  </NuxtLayout>
</template>
