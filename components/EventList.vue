<template>
    <div class="grid grid-cols-1 gap-2">
        <div v-for="event in events" :key="event.id" class="flex flex-row justify-between border-b border-base-content/40">
            <div>
                <div class="text-primary font-semibold">{{ event.time.toLocaleString() }}</div>
                <div class="font-bold text-lg">{{ event.groupName }}</div>
                <div class="font-thin text-sm">{{ event.going }} going</div>
            </div>
            <div>
                <img class="w-24" src="https://freesvg.org/img/logo_bad_lion_2.png" alt="image">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    events: GroupEvent[]
}>()
</script>