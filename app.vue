<script setup lang="ts">
import Navbar from './components/Navbar'
import Footer from './components/Footer'
</script>
<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>
