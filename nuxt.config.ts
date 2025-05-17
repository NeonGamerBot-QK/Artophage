// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  modules: ['@nuxtjs/supabase', '@nuxtjs/turnstile', '@nuxtjs/turnstile'],
  devtools: { enabled: true },
  hub: {
    database: true
  },

})