<script setup>
const supabase = useSupabaseClient()

const loading = ref(false)
const email = ref('')

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({ email: email.value })
    if (error) throw error
    alert('Check your email for the login link!')
  } catch (error) {
    alert(error.error_description || error.message)
  } finally {
    loading.value = false
  }
}z
</script>

<template>
  <form class="row flex-center flex" @submit.prevent="handleLogin">
  <div class="hero bg-base-200 min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login!</h1>
      <p class="py-6">
       To comment on posts you need to log in! 
      </p>
    </div>
    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div class="card-body">
        <fieldset class="fieldset">
          <label class="label">Email</label>
          <input type="email" class="input" placeholder="Email" v-model="email"  />
              <input
          type="submit"
           class="btn btn-base mt-4"
          :value="loading ? 'Loading' : 'Send magic link'"
          :disabled="loading"
        />
        </fieldset>
      </div>
    </div>
  </div>
</div>
  </form>

  
</template>