// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', "@nuxt/image"],

  build:{
    transpile : ['vue-toastification']
  },

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
});