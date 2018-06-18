<template>
<section :class='containerClasses' >
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 :class='col1Order' >
        <h1 class='ml-4 mr-4 mt-4 blue-grey--text'>{{headline}}</h1>
        <h2 class='ml-4 mr-4 headline deep-orange--text darken-4--text'>{{tagline}}</h2>
        <blockquote class='blockquote' v-html='renderedContent' ></blockquote>
      </v-flex>
      <v-flex xs12 sm6 :class='col2Order' >
        <img
          style='width:100%;' class='pa-2'
          :src='img' />
      </v-flex>
    </v-layout>
  </v-container>
</section>
</template>

<script>
export default {
  name: 'FeatureBlock',
  props: {
    headline: { type: String },
    tagline: { type: String },
    content: { type: String },
    img: { type: String },
    isLeft: { type: Boolean, default: false },
    withBackground: { type: Boolean, default: false }
  },
  computed: {
    col1Order () {
      return (!this.isLeft) ? 'order-sm1' : 'order-sm2'
    },
    col2Order () {
      return (!this.isLeft) ? 'order-sm2' : 'order-sm1'
    },
    containerClasses () {
      if (this.withBackground) { return 'grey lighten-2' }
    },
    renderedContent () {
      return this.$md.render(this.content)
    }
  }
}
</script>

<style scoped >
h1 {
  text-transform: uppercase; font-size:14px;
}
</style>
