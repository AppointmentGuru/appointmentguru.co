<style>
.card-outter {
  position: relative;
  padding-bottom: 50px;
}
.card-actions {
  position: absolute;
  bottom: 0;
  right: 5px;
}
</style>
<template>
<v-container class='page-container' >
  <v-breadcrumbs divider="/">
    <v-breadcrumbs-item href='/' nuxt ><v-icon small>home</v-icon> </v-breadcrumbs-item>
    <v-breadcrumbs-item href='/help/' nuxt >Help</v-breadcrumbs-item>
    <v-breadcrumbs-item disabled>{{category.fields.Title}}</v-breadcrumbs-item>
  </v-breadcrumbs>
  <h1 class='headline mb-4' >{{category.fields.Title}}</h1>
  <div class='callout' >
      <blockquote v-if='category.fields.Summary' class='blockquote ma-4'
        v-html='$md.render(category.fields.Summary)' >
      </blockquote>
  </div>
  <v-layout row wrap >
    <template
      v-for = 'page in pages.records'
      v-if='page.fields.Category && page.fields.Category.indexOf(category.id) >= 0' >
      <v-flex xs12 sm6
        :key='page.id' class='pa-2' >
        <v-card class='elevation-5' height='100%' >
          <v-card-title class='subheading' >
            {{page.fields.Title}}
            <v-spacer/>
            <v-chip small label
              v-if='page.fields.Preview'
              color='amber' >Preview</v-chip>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class='pb-5'>
            {{page.fields.Summary}}
          </v-card-text>
          <v-card-actions class='card-actions' >
            <!-- <span class='caption' >
              {{ page.fields['last-updated'] }}
            </span> -->
            <v-spacer/>
            <v-btn
              :to='`/help/${page.fields.Slug}`'
              flat text small >More</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </template>
  </v-layout>
</v-container>
</template>
<script>
import axios from 'axios'
export default {
  name: 'CategoryPage',
  async asyncData ({ params, query }) {
    let headers = {
      'Authorization': 'Bearer ' + process.env.airtableToken
    }
    let url = "https://api.airtable.com/v0/appB8tJlSNDM6eeWt/Category/"
    let slug = params.slug
    let formula = `{Slug} = '${slug}'`
    let data = {
      filterByFormula: formula
    }
    let options = {
      headers,
      url,
      params: data
    }
    let categoryResult = await axios(options)
    let category = categoryResult.data.records[0]
    let hpFormula = `AND(SEARCH("${category.id}", Category) >= 0, {Published}, {Language} = 'en')`
    let hpData = {
      filterByFormula: hpFormula
    }
    let hpUrl = "https://api.airtable.com/v0/appB8tJlSNDM6eeWt/HelpPage/"
    let hpOptions = {
      headers,
      url: hpUrl,
      params: hpData
    }
    let pages = await axios(hpOptions)
    return {
      slug,
      category: category,
      options: hpOptions,
      pages: pages.data
    }
  }
}
</script>
