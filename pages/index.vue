<template>
    <div v-if="data.length === 0"></div>
    <div>Upcoming games</div>
    {{ data }}
</template>

<script lang="ts" setup>
import { Game } from '@prisma/client';

definePageMeta({
    middleware: ["auth"]
})

const { data } = useFetch<Game[]>("/api/upcomingGames", {
    headers: useRequestHeaders(["cookie"])
})

</script>
