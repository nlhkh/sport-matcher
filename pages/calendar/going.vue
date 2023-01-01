<template>
    <EventList :events="events"></EventList>
</template>

<script lang="ts" setup>
const events: GroupEvent[] = [
    { id: 1, groupId: 1, groupName: "Smash Sulkis", time: new Date(), location: "Smash Center", going: 10, },
    { id: 2, groupId: 1, groupName: "Smash Sulkis", time: new Date(), location: "Smash Center", going: 10, },
    { id: 3, groupId: 1, groupName: "Smash Sulkis", time: new Date(), location: "Smash Center", going: 10, },
    { id: 4, groupId: 1, groupName: "Smash Sulkis", time: new Date(), location: "Smash Center", going: 10, },
    { id: 5, groupId: 1, groupName: "Smash Sulkis", time: new Date(), location: "Smash Center", going: 10, },
    { id: 6, groupId: 1, groupName: "Smash Sulkis", time: new Date(), location: "Smash Center", going: 10, },
    { id: 7, groupId: 1, groupName: "Smash Sulkis", time: new Date(), location: "Smash Center", going: 10, },
    { id: 8, groupId: 1, groupName: "Smash Sulkis", time: new Date(), location: "Smash Center", going: 10, },
    { id: 9, groupId: 1, groupName: "Smash Sulkis", time: new Date(), location: "Smash Center", going: 10, },
    { id: 10, groupId: 1, groupName: "Smash Sulkis", time: new Date(), location: "Smash Center", going: 10, },
]
</script>