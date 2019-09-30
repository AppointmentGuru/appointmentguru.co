<template>
<v-container class='page-container' >
  <h1>{{ $t('title') }}</h1>
  <blockquote class='blockquote pl-0' >{{ $t('subtitle') }}</blockquote>
  <h2 class='subheading mb-2' >{{ $t('recentPosts') }}</h2>
  <v-divider class='mb-4' ></v-divider>
  <v-layout wrap row >
    <v-flex
      xs12 sm12
      v-for='post in posts' :key='post.id' >
      <v-card class='ma-2 mb-4' >
        <v-card-title>
          <h2 class='subheading' >
          <nuxt-link :to='`/blog/${post.fields.Slug}`' class='blog-title' >
          {{post.fields.Title}}</nuxt-link></h2>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text  >
          <p v-if='post.fields.Summary' v-html='$md.render(post.fields.Summary)' ></p>
          <v-layout v-if='post.fields.TagLookup'>
            <v-chip small outline
              v-for='tag in post.fields.TagLookup'
              :key='tag' >{{tag}}</v-chip>
          </v-layout>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <span class='ml-2' >
            {{ $t('datePublished') }}
            {{ new Date(post.fields.DatePublished).toDateString() }}
          </span>
          <v-spacer></v-spacer>
          <v-btn :to='`/blog/${post.fields.Slug}`' flat >{{ $t('readMore') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BlogPage',
  async asyncData ({ params, query }) {
    let headers = {
      'Authorization': 'Bearer ' + process.env.airtableToken
    }
    // let queryParams = {filterByFormula: formula}
    let slug = params.slug
    let url = process.env.airtableBlogBaseUrl + '/BlogPost'

    let options = {
      url: url,
      headers: headers,
      method: 'get',
      params: {
        view: 'WebsiteBlogPage'
        // filterByFormula: '({Status}="Published")',
        // sort: '[{field: "Name", direction: "desc"}]'
      }
    }
    let response = await axios(options)
    return {
      posts: response.data.records
    }
  },
  i18n: {
    messages: {
      en: {
        title: 'AppointmentGuru Blog',
        subtitle: 'News and updates from the team at AppointmentGuru',
        recentPosts: 'Recent posts',
        datePublished: 'Published on',
        readMore: 'Read more'
      }
    }
  }
}
</script>
<style>
h2 .blog-title {
  text-decoration: none !important;
  color: #000;
}
</style>
