<template>
<section class='feature-hero' >
  <v-layout>
    <h1 class='ma-4 text-xs-center hidden-sm-and-up headline'>{{tagline}}</h1>
  </v-layout>
  <v-layout row wrap>
    <v-flex xs12 sm3 class='order-sm1 order-xs2 pa-2 mt-4' >
      <h1 class='mr-4 mt-4 blue-grey--text headline hidden-sm-and-up'>{{headline}}</h1>
      <h2 class='mb-4 mt-4 headline deep-orange--text darken-4--text hidden-xs-only'>{{tagline}}</h2>
      <v-layout>
        <v-btn @click='$store.commit("SHOW_SIGNUP")' color='orange' large block dark >{{ctaText}}</v-btn>
      </v-layout>
    </v-flex>
    <v-flex xs12 sm6 class='order-sm2 order-xs1 text-xs-center' >
      <img class='hero ma-4 pt-4-sm' :src='img' />
    </v-flex>
    <v-flex xs12 sm3 class='order-sm2 order-xs1' >

      <section class='hidden-xs-only mt-4 pt-4 feature-list' >
        <template v-for='(feature, index) in features' >
          <v-layout :key='`sm-${index}`' >
            <v-flex xs2 >
              <v-icon class='mt-1'>check</v-icon>
            </v-flex>
            <v-flex xs10 >
              <h5 class='subheading mt-1 mb-1' >{{feature}}</h5>
            </v-flex>
          </v-layout>
        </template>
      </section>


      <v-list dense class='ma-2 grey lighten-5 hidden-sm-and-up' >
        <v-subheader class='ml-2 uppercase subheading'>Features</v-subheader>
        <!-- <h1 class='blue-grey--text headline mt-3 mb-3' >Features</h1> -->
        <template v-for='(feature, index) in features' >
          <v-list-tile :key='`xs-${index}`' >
            <v-list-tile-avatar>
              <v-icon>star</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-content-title>{{feature}}</v-list-tile-content-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider :key='`xs-d-${index}`'> </v-divider>
        </template>
      </v-list>

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
    features: { type: Array, default: () => { return [] } },
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
img.hero {
  width:100%;
}
@media only screen and (max-width: 599px) {
  img.hero {
      width:90%;
  }
}
</style>
