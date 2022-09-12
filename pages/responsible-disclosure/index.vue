<template>
  <v-container class='page-container' >
    <section v-html='page' class='mt-4' ></section>
  </v-container>
</template>

<script>
import page from './disclosure.md'

export default {
  name: 'Disclosure',
  computed: {
    page () { return page }
  },
  head() {
    return {
      title: 'Responsible disclosure',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          name: 'robots',
          content: 'noindex,nofollow'
        }
      ]
    }
  }
}
</script>

<style>
ul, ol { margin-left: 20px; }
h1, h2, h3 { margin-top: 15px; margin-bottom:15px; }
</style>
