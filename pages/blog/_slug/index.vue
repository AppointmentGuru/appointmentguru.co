<template>
<v-container>
  <v-layout>
    <div v-html="revamped"></div>
  </v-layout>
</v-container>
</template>

<script>
  import revamped from './2017-06-21-revamped-mobile-app.md'

  export default {
    computed: {
      revamped() {
        return revamped
      }
    }
  }
</script>

<style>
li { margin-left: 40px; }
</style>