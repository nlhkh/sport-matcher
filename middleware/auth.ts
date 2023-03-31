export default defineNuxtRouteMiddleware(async (_to, _from) => {
    try {
        const token = await getAccessToken()
        if (!token) {
            return navigateTo("/login")
        }
    } catch {
        return navigateTo("/login")
    }
})
