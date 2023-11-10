// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-headlessui',
    '@vee-validate/nuxt',
    'vue3-carousel-nuxt'
  ],
  eslint: {
    /* module options */
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true
  },
  headlessui: {
    prefix: 'Headless'
  },
  app: {
    baseURL: '/auth-nuxt-3/',
    buildAssetsDir: 'assets'
  },
  experimental: {
    payloadExtraction: true
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL
    }
  }
})
