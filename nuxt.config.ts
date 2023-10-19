// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {  
      "link": [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com',  crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Rubik:wght@300;400;500;700&display=swap'},
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' }
      ],  
      "style": [],  
      "script": [
        { src: 'https://cdn.plot.ly/plotly-2.26.2.js' }
      ],  
      "noscript": []
    },
  },
  css: [
    '@/assets/scss/main.scss',
  ],
  devtools: { enabled: false },
  runtimeConfig: {
    app: {
      baseUrl: process.env.BASE_URL || 'http://192.168.1.122',
    },
  },
  ssr: false,
  typescript: {
    shim: false,
  },

})
