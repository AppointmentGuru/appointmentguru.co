<template>
<v-container class='page-container' >
  <v-breadcrumbs divider="/">
    <v-breadcrumbs-item href='/' nuxt ><v-icon small>home</v-icon> </v-breadcrumbs-item>
    <v-breadcrumbs-item href='/blog/' :disabled='false' nuxt >Blog</v-breadcrumbs-item>
    <template v-if='page && page.fields && page.fields.CategoryLookup' >
      <v-breadcrumbs-item
        v-for='category in page.fields.CategoryLookup'
        :key='category'
        :disabled='true' nuxt >{{category}}
      </v-breadcrumbs-item>
    </template>
    <v-breadcrumbs-item v-if='page && page.fields' disabled> {{page.fields.Title}}</v-breadcrumbs-item>
  </v-breadcrumbs>
  <v-layout>
    <v-card v-if='page && page.fields' >
      <v-card-media
        v-if='page.fields.CoverImage'
        :src="page.fields.CoverImage[0].url" height="200px" >
      </v-card-media>
      <v-divider></v-divider>
      <v-card-title>
        <h1 class='headline' >{{page.fields.Title}}</h1>
      </v-card-title>
      <v-card-text v-if='page.fields.Post'>
        <div class='blog-content' v-html='$md.render(page.fields.Post)' ></div>
        <!-- <pre>{{page.fields}}</pre> -->
      </v-card-text>
      <v-footer>
        <span
          v-if='page.fields.TagLookup'
          v-for='tag in page.fields.TagLookup'
          :key='tag' class='ml-2' >
          {{tag}}
        </span>
      </v-footer>
    </v-card>
  </v-layout>
</v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BlogPostPage',
  head () {
    let fields = {}
    if (this.page && this.page.fields) {
      fields = this.page.fields
    }
    return {
      title: fields.Title,
      meta: [
        { hid: 'description', name: 'description', content: fields.Summary }
      ]
    }
  },
  async asyncData ({ params, query }) {
    let headers = {
      'Authorization': 'Bearer ' + process.env.airtableToken
    }
    let slug = params.slug
    let url = process.env.cloufflareBaseUrl + '/en/blog/overview/' + slug
    console.log(url)
    let pageResponse = await axios.get(url)
    return {
      page: pageResponse.data
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
  font-size: 16px!important;
  font-weight: 400;
}
.blog-content ul,
.blog-content ol{
  margin-left: 20px !important;
  margin-bottom: 20px;
}
.blog-content img{
  max-width: 95%;
}
</style>