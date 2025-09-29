<script lang="ts" setup>
const data = await useFetch("/api/me").then((dd) => dd.data.value!);
</script>
<template>
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Hi there<span
            v-if="data.isadmin"
            class="rounded-[5px] border-3 border border-dashed border-[rgb(240,177,0)] bg-[rgba(255,255,255,0.02)] m-2 pr-2 rounded-lg transition hover:bg-[#23272a]"
          >
            admin</span
          >!
        </h1>
        <p class="py-6">Welcome to artophage!,</p>
        <a class="btn btn-primary" href="/">View Art </a>
        <button
          class="btn rounded-[5px] border-3 border border-dashed border-[rgb(240,177,0)] bg-[rgba(255,255,255,0.02)] m-2 pr-2 rounded-lg transition hover:bg-[#23272a]"
        >
          Consume some art
        </button>
      </div>
    </div>
  </div>
</template>
