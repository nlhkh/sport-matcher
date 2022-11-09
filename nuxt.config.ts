// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  app: {
    head: {
      title: "Home",
      titleTemplate: "Sport Matcher - %s"
    }
  }
});
