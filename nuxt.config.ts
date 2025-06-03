import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  modules: ['@nuxtjs/supabase'],
  devtools: { enabled: true },
  hub: {
    database: true
  },
  vite: {
    plugins: [tailwindcss()]
  },
  supabase: {
    redirect: false,
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY, // Use correct key
    }
  },
  css: ["~/assets/css/app.css"],
})
