<template>
<v-container class='page-container' >
  <v-breadcrumbs divider="/">
    <v-breadcrumbs-item to='/' nuxt >AppointmentGuru</v-breadcrumbs-item>
    <v-breadcrumbs-item to='/help/topics/' nuxt >Help</v-breadcrumbs-item>
    <v-breadcrumbs-item disabled>{{page.fields.Title}}</v-breadcrumbs-item>
  </v-breadcrumbs>
  <h1 class='headline' >{{page.fields.Title}}</h1>
  <blockquote v-if='page.fields.Summary' class='blockquote' >{{page.fields.Summary}}</blockquote>
  <center>
  <iframe v-if='page.fields.Video' width="560" height="315" class='ma-4'
    :src="page.fields.Video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
  </iframe>
  </center>
  <div>{{page.fields.Description}}</div>
</v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelpPage',
  async asyncData ({ params, query }) {
    let headers = {
      'Authorization': 'Bearer keyt7MKFDGrXm3set'
    }
    let slug = params.slug
    let formula = `{Slug} = '${slug}'`
    let queryParams = {filterByFormula: formula, view: 'Summary'}
    let url = 'https://api.airtable.com/v0/appB8tJlSNDM6eeWt/HelpPage'
    let options = {
      headers: headers,
      params: queryParams
    }
    let pageResponse = await axios.get(url, options)
    return {
      page: pageResponse.data.records[0],
      params: params
    }
  }
}
</script>

<style>

</style>
