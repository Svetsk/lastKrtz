export default {
  plugins: [
    '~/plugins/js/index.js'
  ],
  server: {
    host: '0.0.0.0'
  },
  devtools: { enabled: false },
  css: ["~/assets/styles/global.scss"],
  modules: ["@pinia/nuxt", "@nuxt/image", "@nuxtjs/tailwindcss", "nuxt-swiper", "@vite-pwa/nuxt"],
  swiper: {
    // modules: ['navigation', 'pagination', 'SwiperAutoplay', 'SwiperEffectCreative', 'SwiperControls'],
  },
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    script: [
      { src: '/js/index.js' }
    ],
    components: true,
    router: {
      middleware: 'preloader'
    }
  }
}