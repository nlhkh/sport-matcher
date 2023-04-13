<template>
    <div>{{ data.name }}</div>
</template>

<script lang="ts" setup>
const route = useRoute()
const clubId = parseInt(route.params.clubId as string)

const { data } = useClub(clubId)
</script>