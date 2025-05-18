import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  modules: ['@nuxtjs/supabase'],
  devtools: { enabled: true },
  hub: {
    database: true
  },
  supabase: {
    redirect: false,
  },
vite: {
  plugins: [tailwindcss()],
},
  css: ["~/assets/css/app.css"],
})