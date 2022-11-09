<template>
  <form class="flex flex-col gap-3 px-5" @submit.prevent="updateProfile">

    <div class="w-full max-w-xs form-control">
      <label for="email" class="label">
        <span class="label-text">Email</span>
      </label>
      <input id="email" type="text" placeholder="Type here" :value="user.email" disabled
        class="w-full max-w-xs input input-bordered input-primary" />
    </div>
    <div class="w-full max-w-xs form-control">
      <label for="username" class="label">
        <span class="label-text">Username</span>
      </label>
      <input id="username" type="text" placeholder="Type here" v-model="username"
        class="w-full max-w-xs input input-bordered input-primary" />
    </div>
    <div class="w-full max-w-xs form-control">
      <label for="website" class="label">
        <span class="label-text">Website</span>
      </label>
      <input id="website" type="website" placeholder="Type here" v-model="website"
        class="w-full max-w-xs input input-bordered input-primary" />
    </div>

    <div>
      <input type="submit" class="btn btn-primary" :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading" />
    </div>

    <div>
      <button class="btn btn-secondary" @click="signOut" :disabled="loading">
        Sign Out
      </button>
    </div>
  </form>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient();

const loading = ref(true);
const username = ref('');
const website = ref('');
const avatar_path = ref('');

loading.value = true;
const user = useSupabaseUser();
const { data } = await supabase
  .from('profiles')
  .select(`username, website, avatar_url`)
  .eq('id', user.value.id)
  .single();
if (data) {
  username.value = data.username;
  website.value = data.website;
  avatar_path.value = data.avatar_url;
}
loading.value = false;

async function updateProfile() {
  try {
    loading.value = true;
    const user = useSupabaseUser();
    const updates = {
      id: user.value.id,
      username: username.value,
      website: website.value,
      avatar_url: avatar_path.value,
      updated_at: new Date(),
    };
    const { error } = await supabase.from('profiles').upsert(updates, {
      returning: 'minimal', // Don't return the value after inserting
    });
    if (error) throw error;
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
}

async function signOut() {
  try {
    loading.value = true;
    let { error } = await supabase.auth.signOut();
    if (error) throw error;
    user.value = null;
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
}
</script>
