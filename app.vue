<script setup lang="ts">
import Navbar from './components/Navbar'
import Auth from "./components/Auth"
import Footer from './components/Footer'
</script>
<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>
