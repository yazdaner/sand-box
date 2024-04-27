// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', "@nuxt/image"],

  build:{
    transpile : ['vue-toastification']
  },

  css : ['~/assets/css/main.css','~/assets/scss/main.scss'],

  devtools: { enabled: true },
  app: {
    head: {
      title: "my title",
      meta: [
        { name: 'description', content: 'My amazing site.' }
      ],
      bodyAttrs: {
        class: 'test'
      },
    },
  },

  runtimeConfig: {
    apiSecret: process.env.API,
    public: {
      apiBase: '/api'
    }
  }
});