import { CookieRef } from "nuxt/app"

type DirectusToken = { accessToken: string, refreshToken: string, expire: number }

type DirectusAuth = {
    data: {
        access_token: string
        refresh_token: string
        expires: number
    }
}

type UserInfo = {id: string, firstName: string, lastName: string, email: string, description: string, avatar: string}

export function baseURL() {
    return useRuntimeConfig().public.apiBase
}

function useToken() {
    return useCookie<DirectusToken | null>("directus-token", { default: () => null })
}

function setToken(accessToken: string, refreshToken: string, expire: number, tokenCookie: CookieRef<DirectusToken | null>) {
    tokenCookie.value = { accessToken, refreshToken, expire: new Date().getTime() + expire }
}

async function refreshToken(refreshToken: string): Promise<DirectusToken> {
    const auth = await $fetch<DirectusAuth>("/auth/refresh",
        {
            method: "POST",
            baseURL: baseURL(),
            body: { "refresh_token": refreshToken, mode: "json" }
        }
    )

    return { accessToken: auth.data.access_token, refreshToken: auth.data.refresh_token, expire: auth.data.expires }
}

export async function login(email: string, password: string) {
    const auth = await $fetch<DirectusAuth>("/auth/login",
        {
            method: "POST",
            baseURL: baseURL(),
            body: {
                email, password, mode: "json"
            }
        })
    setToken(auth.data.access_token, auth.data.refresh_token, auth.data.expires, useToken())
}

export async function getAccessToken(): Promise<string | null> {
    const token = useToken()

    if (token.value === null) {
        return null
    } else if (token.value.expire <= new Date().getTime() + 3 * 60 * 1000) {
        const newToken = await refreshToken(token.value.refreshToken)
        setToken(newToken.accessToken, newToken.refreshToken, newToken.expire, token)
        return newToken.accessToken
    } else {
        return token.value.accessToken
    }
}

export function logout() {
    const token = useToken()
    token.value = null
}

export async function onDirectusRequest(arg: { options: any }) {
    arg.options.headers = arg.options.headers || {}
    const token = await getAccessToken()
    arg.options.headers.authorization = `Bearer ${token}`
}


export function useUserInfo() {
    return useFetch<UserInfo>("users/me", {
        baseURL: baseURL(),
        onRequest: onDirectusRequest,
        transform: (input: any) => ({
            id: input.data.id,
            firstName: input.data.first_name,
            lastName: input.data.last_name,
            email: input.data.email,
            description: input.data.description,
            avatar: input.data.avatar
        })
    })
}
