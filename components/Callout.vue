<template>
  <!-- callout  -->
  <section class='callout' style='padding:20px;' >
    <v-container>
      <h1 class='headline text-xs-center pa-4' v-html='renderedContent' ></h1>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Callout',
  props: {
    callout: {type:String}
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
