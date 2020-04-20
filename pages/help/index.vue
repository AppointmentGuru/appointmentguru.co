<template>
<section style='margin-top:60px;' >
  <v-container>
    <v-layout class='ml-4 mr-4 mt-4' >
      <h1 class='headline' >{{ $t('headline') }}
      </h1>
    </v-layout>
    <v-layout class='ml-4 mr-4' >
      <blockquote class='blockquote pl-0' >
        {{ $t('tagline') }}
      </blockquote>
    </v-layout>
    <algolia-search :auto-search='false' >
    </algolia-search>
    <v-divider></v-divider>
    <v-layout v-for='category in categories' :key='category.id' row wrap >
      <v-flex xs12 sm6>
        <v-card class='mt-4 mb-4 mr-xs-2 ml-xs-2 mr-2 ml-2' >
          <v-card-title>
            <h2 class='title text-xs-center' >
                <v-avatar color='blue-grey' class='mr-1' >
                <v-icon large dark >{{category.fields.Icon}}</v-icon>
              </v-avatar>
              {{category.fields.Title}}</h2>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <blockquote class='blockquote ml-1 pl-0'>
              {{category.fields.Summary}}
            </blockquote>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <v-expansion-panel class='mt-4 mb-4' >
          <v-expansion-panel-content v-for='page in pages[category.id]' :key='page.id' class='mr-2 ml-2' >
            <div slot="header">
              <span v-if='page.fields.Published !== true' >[DRAFT]</span>
              <nuxt-link :to='`/help/${page.fields.Slug}/`' >{{page.fields.Title}}</nuxt-link>
            </div>
            <v-divider></v-divider>
            <v-card>
              <v-card-text>{{page.fields.Summary}}</v-card-text>
            </v-card>
            <v-card-actions>
              <v-footer style='width:100%' >
                <v-spacer></v-spacer>
                <v-btn icon :to='`/help/${page.fields.Slug}/`' ><v-icon>open_in_new</v-icon></v-btn>
                <v-btn
                  v-if='page.fields.Video'
                  icon @click='showVideo = true; activeVideo = page.fields.Video' ><v-icon>play_circle_outline</v-icon></v-btn>
              </v-footer>
            </v-card-actions>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-divider></v-divider>
    </v-layout>
  </v-container>
  <v-dialog max-width="560px" v-model='showVideo' >
    <v-card flat class='ma-0 pa-0' >
      <iframe width="560" height="315" class='ma-0'
        :src="activeVideo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
      </iframe>
    </v-card>
  </v-dialog>
</section>
</template>

<script>
import axios from 'axios'
import AlgoliaSearch from '@/components/AlgoliaSearch'

export default {
  name: 'HelpPage',
  components: {AlgoliaSearch},
  data () {
    return {
      showVideo: false,
      activeVideo: null,
      autoSearch: false
    }
  },
  async asyncData ({ query }) {
    let headers = {
      'Authorization': 'Bearer ' + process.env.airtableToken
    }
    let url = process.env.airtableBaseUrl + '/Category'
    let options = { headers }
    let categoryResponse = await axios.get(url, options)

    url = process.env.airtableBaseUrl + '/HelpPage'
    let categories = categoryResponse.data.records.sort((a, b) => {
      return a.fields.Order - b.fields.Order
    })
    let pages = {}
    for (let x = 0; x <= categories.length; x++) {
      let category = categories[x]
      if (category && category.fields) {
        // [' + category.fields.HelpPage + ']'}
        let formula = 'FIND(RECORD_ID(), "' + category.fields.HelpPage + '")'
        let params = {filterByFormula: formula, view: 'Summary'}
        let res = await axios.get(url, {headers, params})
        pages[category.id] = res.data.records.filter((record) => {
          if (process.env.NODE_ENV === 'development') { return true }
          return record.fields.Published
        })
      }
    }
    return {
      categories,
      pages
    }
  },
  i18n: {
    messages: {
      en: {
        headline: 'AppointmentGuru Help',
        tagline: 'Need help using AppointmentGuru? Here you’ll find all the info you need!'
      }
    }
  }
}
</script>

<style>

</style>
