<template>
    <Auth v-if="user === null" />
</template>

<script lang="ts" setup>
const user = useSupabaseUser()

if (user.value !== null) {
    navigateTo("/")
}
</script>