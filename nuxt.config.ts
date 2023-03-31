// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss"
  ],
  app: {
    head: {
      title: "Home",
      titleTemplate: "Sport Matcher - %s"
    }
  },
  runtimeConfig: {
    public: {
      apiBase: "https://api.game-point.club"
    }
  }
})
