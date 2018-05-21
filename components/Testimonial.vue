<template>
<blockquote class='blockquote grey lighten-4 pa-4' >
  <v-layout>
    <span >{{quote}}</span>
  </v-layout>
  <footer class='text-xs-right mt-4' >
    <v-avatar class='mr-2' ><img :src='image' /></v-avatar>
    - {{authorName}}. <i>{{authorBio}}</i>.<br/>
    <small><a :href='link' target='_blank' >{{linkText}}</a></small>
  </footer>
</blockquote>
</template>
<script>
export default {
  name: 'Testimonial',
  props: {
    quote: {type: String},
    authorName: {type: String},
    authorBio: {type: String},
    link: {type: String},
    linkText: {type: String},
    image: {type: String}
  }
}
</script>
