<script lang="ts" setup>
const data = await useFetch("/api/me").then((dd) => dd.data.value!);
</script>
<template>
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Hi there<span v-if="data.isadmin" class=""> admin</span>!
        </h1>
        <p class="py-6">Welcome to artophage!,</p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
</template>
