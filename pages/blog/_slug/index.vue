<template>
<v-container class='page-container' >
  <v-breadcrumbs divider="/">
    <v-breadcrumbs-item href='/' nuxt ><v-icon small>home</v-icon> </v-breadcrumbs-item>
    <v-breadcrumbs-item href='/blog/' :disabled='false' nuxt >Blog</v-breadcrumbs-item>
    <v-breadcrumbs-item v-if='page && page.fields' disabled> {{page.fields.Title}}</v-breadcrumbs-item>
  </v-breadcrumbs>
  <v-layout>
    <v-card v-if='page && page.fields' >
      <v-card-title>
        <h1 class='headline' >{{page.fields.Title}}</h1>
      </v-card-title>
      <v-card-text>
        <div class='blog-content' v-html='$md.render(page.fields.Post)' ></div>
      </v-card-text>
    </v-card>
  </v-layout>
</v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BlogPostPage',
  head () {
    return {
      title: this.page.fields.Title,
      meta: [
        { hid: 'description', name: 'description', content: this.page.fields.Summary }
      ]
    }
  },
  async asyncData ({ params, query }) {
    let headers = {
      'Authorization': 'Bearer ' + process.env.airtableToken
    }
    let slug = params.slug
    let formula = `{Slug} = '${slug}'`
    let queryParams = {filterByFormula: formula}
    let url = process.env.airtableBlogBaseUrl + '/BlogPost'
    let options = {
      headers: headers,
      params: queryParams
    }
    let pageResponse = await axios.get(url, options)
    return {
      page: pageResponse.data.records[0]
    }
  }
}
</script>

<style >
.blog-content {
  font-size: 16px;
  /* font-weight: 300; */
}
.blog-content blockquote {
  padding: 16px 0 16px 24px;
  font-size: 16px;
  font-weight: 300;
  border-left: solid 3px #E65100;
  background-color: #FAFAFA;
}
.blog-content h1 {
  font-size: 24px!important;
  font-weight: 400;
  line-height: 32px!important;
  letter-spacing: normal!important;
  margin-bottom: 20px;
  margin-top: 20px;
}
.blog-content h2 {
  font-size: 20px!important;
  font-weight: 500;
  line-height: 1!important;
  letter-spacing: .02em!important;
  margin-bottom: 20px;
  margin-top: 20px;
}
.blog-content h3 {
  font-size: 18px!important;
  font-weight: 500;
  margin-bottom: 20px;
  margin-top: 20px;
}
.blog-content ul,
.blog-content ol{
  margin-left: 20px !important;
  margin-bottom: 20px;
}
.blog-content img{
  margin-left:10%; margin-right:10%;
  max-width:80%;
  -webkit-box-shadow: 10px 0px 60px -20px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 0px 60px -20px rgba(0,0,0,0.75);
  box-shadow: 10px 0px 60px -20px rgba(0,0,0,0.75);
  margin-top: 20px; margin-bottom:20px;
}
</style>