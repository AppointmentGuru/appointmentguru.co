const axios = require('axios')
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
    airtableBlogBaseUrl: process.env.AIRTABLE_BLOG_BASE_URL || 'https://api.airtable.com/v0/appUmwBIxunmbdDPs',
    airtableToken: process.env.AIRTABLE_TOKEN || 'keyt7MKFDGrXm3set',
    cloufflareBaseUrl: process.env.CLOUDFLARE_BASE_URL || 'http://appointmentguru-co.appointmentguru.workers.dev'
  },
  router: {
    middleware: 'i18n'
  },
  modules: [
    '@nuxtjs/markdownit',
    'cookie-universal-nuxt',
    ['@nuxtjs/google-analytics', {
      id: 'UA-93898571-1'
    }]
  ],
  markdownit: {
    injected: true
  },
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/vuetify.js',
    '~/plugins/vue-instantsearch',
    { src: '~plugins/drift.js', ssr: false }
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
  },
  generate: {
    routes: function () {
      function getAirtable (base, table, view) {
        let airtable = 'keyt7MKFDGrXm3set'
        let method = 'get'
        let headers = { 'Authorization': 'Bearer ' + airtable }
        let params = {}
        if (view) { params = {view} }
        let url = `https://api.airtable.com/v0/${base}/${table}`
        return axios({url, method, headers, params})
      }
      function airtableToRoutes (data, path, key) {
        return data.map((item) => {
          payload = {}
          payload[key] = item
          return {
            route: path + item.fields.Slug,
            payload: payload
          }
        })
      }
      function partnersToRoutes (data) {
        return data.map((item) => {
          return {
            route: item.path,
            payload: item
          }
        })
      }
      function getPartners () {
        let url = 'http://referralguru.appointmentguru.co/partners/'
        return axios.get(url)
      }
      return axios
        .all([
          getAirtable('appB8tJlSNDM6eeWt', 'HelpPage'),
          getAirtable('appUmwBIxunmbdDPs', 'BlogPost', 'WebsiteBlogPage'),
          // getPartners()
        ])
        .then(axios.spread(
          function (helppages, blogposts, partners) {
            let helpRoutes = airtableToRoutes(helppages.data.records, 'help/', 'page')
            let blogRoutes = airtableToRoutes(blogposts.data.records, 'blog/', 'page', 'WebsiteBlogPage')
            // let partnerRoutes = partnersToRoutes(partners.data.results)
            let routes = helpRoutes.concat(blogRoutes) // .concat(partnerRoutes)
            return routes
          }
        ))
    }
  }
}
