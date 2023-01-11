<template>
    <EventList :events="events"></EventList>
</template>

<script lang="ts" setup>
const events = useCalendarPast()
</script>