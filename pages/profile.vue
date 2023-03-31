<template>
    <div>
        <div v-if="data !== null">
            <div>{{ data.firstName }}</div>
            <div>{{ data.lastName }}</div>
            <div>{{ data.email }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { data } = useUserInfo()
</script>