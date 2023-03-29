import {Directus} from "@directus/sdk"

const directus = new Directus("https://api.game-point.club")

export default defineNuxtPlugin(function() {
    return {
        provide: { directus }
    }
})
