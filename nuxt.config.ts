import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  modules: ["@nuxtjs/turnstile"],
  devtools: { enabled: true },
  // nitro: {
  //   routeRules: {
  //     '/api/me': {
  //       cache: { maxAge: 60 } // seconds
  //     }
  //   }
  // },
  turnstile: {
    siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY,
  },
  hub: {
    database: true,
    blob: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  supabase: {
    redirect: false,
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY, // Use correct key
    },
  },
  css: ["~/assets/css/app.css"],
});
