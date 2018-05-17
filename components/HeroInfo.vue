<template>
<section>
  <v-layout row wrap>
    <v-flex xs12 sm6 class='order-sm1 order-xs2' >
      <h1 class='mr-4 mt-4 blue-grey--text'>{{headline}}</h1>
      <h2 class='mb-4 headline deep-orange--text darken-4--text'>{{tagline}}</h2>
      <v-layout>
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
        style='width:100%;' class='mt-4-sm pt-4-sm'
        src='https://appointmentguru.co/assets/img/homepage/invoicing.png' />
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
    img: { type: String },
    ctaText: { type: String, default: 'Get Started for Free' }
  },
}
</script>
<style scoped>
h1 {
  text-transform: uppercase; font-size:14px;
}
h2.headline {
  font-size: 36px !important;
  line-height: 46px !important;
}
</style>