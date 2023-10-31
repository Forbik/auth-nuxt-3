// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@vee-validate/nuxt'
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
  }
})
