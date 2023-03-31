export function useClubs() {
    return useFetch<{ data: Club[] }>("/items/clubs", {
        baseURL: baseURL(),
        onRequest: onDirectusRequest
    })
}