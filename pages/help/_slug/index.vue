<template lang="md" >
<v-container class='page-container' >
  <v-breadcrumbs divider="/">
    <v-breadcrumbs-item to='/' >AppointmentGuru</v-breadcrumbs-item>
    <v-breadcrumbs-item to='/help/topics/' >Help</v-breadcrumbs-item>
    <v-breadcrumbs-item disabled>{{page.fields.Title}}</v-breadcrumbs-item>
  </v-breadcrumbs>
  <h1 class='headline mb-4' >{{page.fields.Title}}</h1>
  <v-divider></v-divider>
  <div class='callout' >
    <blockquote v-if='page.fields.Summary' class='blockquote ma-4'
      v-html='$md.render(page.fields.Summary)' ></blockquote>
  </div>
  <center>
  <iframe v-if='page.fields.Video' width="560" height="315" class='ma-4'
    :src="page.fields.Video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
  </iframe>
  </center>
  <v-card class='mt-4' >
    <v-card-text class='help-content pt-4'>
    <div v-html="$md.render(content)" ></div>
    </v-card-text>
  </v-card>
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
  },
  computed: {
    content () {
      if (this.page && this.page.fields) {
        return this.page.fields.Description
      }
    }
  }
}
</script>

<style >
.help-content {
  font-size: 16px;
  /* font-weight: 300; */
}
.help-content blockquote {
  padding: 16px 0 16px 24px;
  font-size: 16px;
  font-weight: 300;
  border-left: solid 3px #E65100;
  background-color: #FAFAFA;
}
.help-content h1 {
  font-size: 24px!important;
  font-weight: 400;
  line-height: 32px!important;
  letter-spacing: normal!important;
  margin-bottom: 20px;
  margin-top: 20px;
}
.help-content h2 {
  font-size: 20px!important;
  font-weight: 500;
  line-height: 1!important;
  letter-spacing: .02em!important;
  margin-bottom: 20px;
  margin-top: 20px;
}
.help-content h3 {
  font-size: 16px!important;
  font-weight: 400;
}
.help-content ul,
.help-content ol{
  margin-left: 20px !important;
  margin-bottom: 20px;
}
</style>
