<template>
<section :class='containerClasses' >
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 :class='col1Order' >
        <h1 class='ml-4 mr-4 mt-4 blue-grey--text'>Automatically Generated Invoices</h1>
        <h2 class='ml-4 mr-4 headline deep-orange--text darken-4--text'>Send professional invoices that clients, bookkeepers and medical aids will love</h2>
        <blockquote class='blockquote' >
          Industry-standard invoices sent at the touch of a button. Include extra medical info like ICD-10, NAPPI and procedure codes.
        </blockquote>
      </v-flex>
      <v-flex xs12 sm6 :class='col2Order' >
        <img
          style='width:100%;' class='pa-2'
          src='https://appointmentguru.co/assets/img/homepage/invoicing.png' />
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
    }
  }
}
</script>

<style scoped >
h1 {
  text-transform: uppercase; font-size:14px;
}
</style>
