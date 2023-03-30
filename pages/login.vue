<template>
    <form @submit.prevent="submit" class="flex flex-col gap-4 m-8">
        <div class="form-control w-full max-w-xs">
            <label class="label">
                <span class="label-text">Email</span>
            </label>
            <input type="text" v-model="authInput.email" placeholder="email" class="input input-bordered w-full max-w-xs" />

            <label class="label">
                <span class="label-text">Password</span>
            </label>
            <input type="password" v-model="authInput.password" placeholder="password" class="input input-bordered w-full max-w-xs" />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
    </form>
</template>

<script lang="ts" setup>
const { login } = useDirectusAuth()
const { onLogin } = useApollo()

const authInput = reactive({
    email: "", password: ""
})

async function submit() {
    const auth = await login(authInput)
    if (auth.access_token) {
        onLogin(auth.access_token)
        return navigateTo("/")
    }
}
</script>