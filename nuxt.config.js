module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'appointmentguru.co',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'AppointmentGuru. For any appointment based business. Manage your appointments, invoices and customers with ease' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  env: {
    airtableBaseUrl: process.env.AIRTABLE_BASE_URL || 'https://api.airtable.com/v0/appB8tJlSNDM6eeWt',
    airtableToken: process.env.AIRTABLE_TOKEN || 'keyt7MKFDGrXm3set'
  },
  router: {
    middleware: 'i18n'
  },
  modules: [
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    injected: true
  },
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/vuetify.js',
    '~/plugins/vue-instantsearch'
  ],
  css: [
    '~/assets/style/app.styl'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vuetify'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
