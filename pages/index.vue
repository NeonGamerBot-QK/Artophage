<script setup lang="ts">
import { ref, onMounted } from "vue";

// Get runtime config
const config = useRuntimeConfig();
console.log("creating config", config.public);

// Reactive list of cards
const cards = ref<any[]>([]);

// Load data when component is mounted
onMounted(async () => {
  // const sql = usePostgres();
  // const data = await sql`select * from art;`;
  //  else {
  // console.log(data);
  // cards.value = data;
  // }
});
</script>

<template>
  <div class="m-5">
    <h1 class="font-bold text-2xl">Gallery!</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10">
      <div
        v-for="card in cards"
        :key="card.id"
        class="card bg-base-100 w-96 shadow-sm"
      >
        <figure>
          <img
            :src="card.image_url || 'https://via.placeholder.com/400x300'"
            alt="Image"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ card.title || "Untitled" }}</h2>
          <p>{{ card.description || "No description available." }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
