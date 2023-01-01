<template>
    <div class="mx-5 mb-3 flex flex-col gap-3">
        <div class="flex flex-col gap-2">
            <div class="font-bold">My groups</div>
            <div class="grid grid-cols-2 gap-2">
                <div v-for="group in groups" :key="group.id" class="card bg-base-content shadow-xl">
                    <figure><img :src="group.image" :alt="group.name" /></figure>
                    <div class="card-body -m-4">
                        <NuxtLink>
                            <h2 class="card-title text-primary">{{ group.name }}</h2>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex">
            <a class="flex-1 btn btn-primary">Start a new group</a>
        </div>
    </div>
</template>

<script lang="ts" setup>
const groups: Group[] = [
    { id: 1, name: "Smash Sulkis", image: "https://freesvg.org/img/logo_bad_lion_2.png" },
    { id: 2, name: "Smash Sulkis", image: "https://freesvg.org/img/logo_bad_lion_2.png" },
    { id: 3, name: "Smash Sulkis", image: "https://freesvg.org/img/logo_bad_lion_2.png" },
    { id: 4, name: "Smash Sulkis", image: "https://freesvg.org/img/logo_bad_lion_2.png" },
    { id: 5, name: "Smash Sulkis", image: "https://freesvg.org/img/logo_bad_lion_2.png" },
    { id: 6, name: "Smash Sulkis", image: "https://freesvg.org/img/logo_bad_lion_2.png" },
    { id: 7, name: "Smash Sulkis", image: "https://freesvg.org/img/logo_bad_lion_2.png" },
    { id: 8, name: "Smash Sulkis", image: "https://freesvg.org/img/logo_bad_lion_2.png" },
    { id: 9, name: "Smash Sulkis", image: "https://freesvg.org/img/logo_bad_lion_2.png" },
    { id: 10, name: "Smash Sulkis", image: "https://freesvg.org/img/logo_bad_lion_2.png" },
]
</script>
