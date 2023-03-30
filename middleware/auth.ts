export default defineNuxtRouteMiddleware(async (_to, _from) => {
    const { refreshTokens } = useDirectusToken()
    
    const user = useDirectusUser()
    const { onLogin } = useApollo()

    if (!user.value) {
        try {
            const auth = await refreshTokens()
            console.log(auth)
        } catch {
            return navigateTo('/login')
        }
    }
})
