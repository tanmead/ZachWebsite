// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  plugins: [
      '~/plugins/fontawesome.js',
  ],
  vite: {
    plugins: [
        tailwindcss(),
    ]
  }
})
