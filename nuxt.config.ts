// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/apollo",
    "nuxt-directus"
  ],
  app: {
    head: {
      title: "Home",
      titleTemplate: "Sport Matcher - %s"
    }
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://api.game-point.club/graphql",
        httpLinkOptions: {
          credentials: "include"
        }
      }
    }
  },
  directus: {
    url: "https://api.game-point.club/"
  }
})
