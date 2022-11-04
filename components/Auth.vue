<template>
  <form class="px-6" @submit.prevent="handleLogin">
    <div class="flex flex-col gap-3">
      <h1 class="">Welcome to Sport Matcher</h1>
      <p class="">Sign in via magic link with your email below</p>
      <div>
        <input
          type="email"
          placeholder="Your email"
          v-model="email"
          class="input input-bordered input-primary w-full max-w-xs"
        />
      </div>
      <div>
        <input
          type="submit"
          class="btn btn-primary"
          :value="loading ? 'Loading' : 'Send magic link'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient();

const loading = ref(false);
const email = ref('');
const handleLogin = async () => {
  try {
    loading.value = true;
    const { error } = await supabase.auth.signInWithOtp({ email: email.value });
    if (error) throw error;
    alert('Check your email for the login link!');
  } catch (error) {
    alert(error.error_description || error.message);
  } finally {
    loading.value = false;
  }
};
</script>
