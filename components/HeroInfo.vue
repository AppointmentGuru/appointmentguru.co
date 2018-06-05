<template>
<section>
  <v-layout>
    <h1 class='ma-4 text-xs-center hidden-sm-and-up headline'>{{tagline}}</h1>
  </v-layout>
  <v-layout row wrap>
    <v-flex xs12 sm6 class='order-sm1 order-xs2 pa-2 mt-4' >
      <h1 class='mr-4 mt-4 blue-grey--text headline hidden-sm-and-up'>{{headline}}</h1>
      <h2 class='mb-4 headline deep-orange--text darken-4--text hidden-xs-only'>{{tagline}}</h2>
      <v-layout v-if='col1Headline || col2Headline'>
        <v-flex xs12 sm6 >
          <div class='mr-2' >
            <h3 class='subheading' >{{col1Headline}}</h3>
            <blockquote class='blockquote pl-0'>{{col1Content}}
            </blockquote>
          </div>
        </v-flex>
        <v-flex xs12 sm6 >
          <div class='ml-2' >
            <h3 class='subheading' >{{col2Headline}}</h3>
            <blockquote class='blockquote pl-0'>{{col2Content}}
            </blockquote>
          </div>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-btn color='orange' large block dark >{{ctaText}}</v-btn>
      </v-layout>
    </v-flex>
    <v-flex xs12 sm6 class='order-sm2 order-xs1' >
      <img
        style='width:90%;' class='ma-4 pt-4-sm'
        :src='img' />
    </v-flex>
  </v-layout>
</section>
</template>
<script>
export default {
  name: 'FeatureBlock',
  props: {
    headline: { type: String },
    tagline: { type: String },
    col1Headline: { type: String },
    col1Content: { type: String },
    col2Headline: { type: String },
    col2Content: { type: String },
    img: { type: String, default: '/img/hero_3.png' },
    ctaText: { type: String, default: 'Get Started for Free' }
  }
}
</script>
<style scoped>
h1.headline {
  text-transform: uppercase; font-size:14px;
}
h2.headline {
  font-size: 36px !important;
  line-height: 46px !important;
}
</style>
