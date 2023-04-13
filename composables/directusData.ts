export function useClubs() {
    return useFetch<Club[]>("/items/clubs", {
        baseURL: baseURL(),
        onRequest: onDirectusRequest,
        retry: 2,
        transform: (input: any) => input.data.map(c => ({...c, createdDate: new Date(c.date_created)})),
    })
}

export function useClub(id: number) {
    return useFetch<Club>(`/items/clubs/${id}`, {
        baseURL: baseURL(),
        onRequest: onDirectusRequest,
        retry: 2,
        transform: (input: any) => ({...input.data, createdDate: new Date(input.data.date_created) })
    })
}
