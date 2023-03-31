<template>
    <div class="flex flex-col gap-3 mx-5 mb-3">
        <div class="flex flex-col gap-2">
            <div class="font-bold">My Clubs</div>
                <div class="grid grid-cols-2 gap-2" v-if="data !== null">
                <div v-for="club in data" :key="club.id" class="shadow-xl card bg-base-content">
                    <figure><img :src="getThumbnail(club.cover, {fit: 'cover', width: 180, format: 'webp'})" :alt="club.name" /></figure>
                    <div class="-m-4 card-body">
                        <NuxtLink>
                            <h2 class="card-title text-primary">{{ club.name }}</h2>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: [ "auth" ]
})

const { data } = useClubs()
</script>
