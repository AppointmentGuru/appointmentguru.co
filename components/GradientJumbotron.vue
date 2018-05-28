<template>
<v-jumbotron :gradient="gradient" dark>
  <v-container fill-height>
    <v-layout align-center>
      <v-flex text-xs-center>
        <h1 class='display-3' v-html='headline' ></h1>
        <blockquote class='display-1 mt-2 pl-0' v-html='tagline' ></blockquote>
      </v-flex>
    </v-layout>
  </v-container>
</v-jumbotron>
</template>

<script>
export default {
  name: 'GradientJumbotron',
  props: {
    gradient: { type: String },
    headline: { type: String },
    tagline: { type: String }
  }
}
</script>

<style>

</style>
