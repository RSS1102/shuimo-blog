// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt'
  ],
  css: [
    '~/assets/styles/index.css',
    '~/plugins/editor/style/editor.css'
  ],
  runtimeConfig: {
    public: {
      NUXT_ENV_SERVER: process.env.NUXT_ENV_SERVER
    }
  },
  app: {
    layoutTransition: {
      name: 'm-layout', mode: 'default'
    },
    pageTransition: {
      name: 'm-page', mode: 'out-in'
    }
  }
});
