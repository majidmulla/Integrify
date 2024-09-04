export default {
  // Target: 'server' for SSR, 'static' for static site generation
  target: 'server',  // or 'static', depending on what you need

  // Global page headers
  head: {
    title: 'EdTech Platform',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'An interactive learning platform.' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/oi_favicon.ico' }
    ]
  },

  // Importing global plugins
  plugins: [
    '~/plugins/bootstrap-vue.js',
    '~/plugins/fontawesome.js',
    '~/plugins/notification.js'
  ],

  // Modules for dev and build (recommended)
  buildModules: [],

  // Axios module configuration
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000', // Adjust as necessary for production
  },

  // Build configuration
  build: {
    extend(config, ctx) {}
  },

  // Generate configuration for static deployment (only needed if target is 'static')
  generate: {
    fallback: true // Ensures it serves the fallback.html for 404 errors on static sites
  }
}
