export function useClubs() {
    return useFetch< Club[]>("/items/clubs", {
        baseURL: baseURL(),
        onRequest: onDirectusRequest,
        transform: (input: any) => input.data,
        retry: 2,
    })
}
