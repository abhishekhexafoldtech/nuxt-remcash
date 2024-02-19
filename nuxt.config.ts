// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nova-Gas",
    },
  },
  devtools: { enabled: true },
  css: ["@/assets/scss/index.scss"],
  modules: ["@pinia/nuxt",'@element-plus/nuxt'],

})
