import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Portfolio | Afiftha Ravi",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        {
          name: "description",
          content:
            "Hi, I am Afiftha Ravi Aufa. This is my Personal Portfolio Website. Currently focused on website and mobile development using Nuxt and Flutter. Checkout my projects and github repositories",
        },
        { name: "format-detection", content: "telephone=no" },
        { property: "author", content: "Afiftha Ravi Aufa" },
        {
          name: "keywords",
          content:
            "Fullstack Developer, Full Stack Developer, Afiftha Ravi, Junior Web Developer, Software Developer, Software Engineer, Jono, Afiftha, Ravi, Afiftha Ravi Aufa",
        },
        // social meta tags
        {
          property: "og:site_name",
          content: "Web Portfolio | Afiftha Ravi",
        },
        {
          property: "og:site",
          content: "http://afiftharavi.site/",
        },
        {
          property: "og:title",
          content: "Web Portfolio | Afiftha Ravi",
        },
        {
          property: "og:description",
          content:
            "Hi, I am Afiftha Ravi Aufa. This is my Personal Portfolio Website. Currently focused on website and mobile development using Nuxt and Flutter. Checkout my projects and github repositories",
        },
        {
          property: "og:image",
          content: "/profile-pics/thumbnail.png",
        },

        // google site verification
        {
          name: "google-site-verification",
          content: "CpKqeACrIS7JLwdilAnMgoDicJnoBaNmupPoq6fUtFs",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon-bw.png" }],
    },
  },

  modules: ["@nuxtjs/tailwindcss"],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.scss",
  },

  build: {
    transpile: ["gsap", "@headlessui/vue", "@heroicons/vue"],
  },

  runtimeConfig: {
    public: {
      NUXT_GTM_ID: process.env.NUXT_GTM_ID,
    },
  },

  compatibilityDate: "2024-10-30",
});
