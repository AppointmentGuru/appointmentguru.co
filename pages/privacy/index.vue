<template>
  <v-container class='page-container' >
    <section v-html='page' class='mt-4' ></section>
  </v-container>
</template>

<script>
import page from './privacy.md'
export default {
  name: 'PrivacyPage',
  computed: {
    page () { return page }
  }
}
</script>

<style>
ul, ol { margin-left: 20px; }
</style>
