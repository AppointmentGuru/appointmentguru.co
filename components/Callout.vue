<template>
  <!-- callout  -->
  <section class='callout' style='padding:20px;' >
    <v-container>
      <v-layout v-if='img' >
        <v-flex class='text-xs-center' >
        <img :src='img' alt='AppointmentGuru' class='my-4' />
        </v-flex>
      </v-layout>
      <h1 class='headline text-xs-center pa-4' v-html='renderedContent' ></h1>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Callout',
  props: {
    callout: {type:String},
    img: {type:String},
  },
  computed: {
    renderedContent () {
      return this.$md.render(this.callout)
    }
  }
}
</script>

<style>
</style>
