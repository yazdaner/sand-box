// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
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
