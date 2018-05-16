<template>
  <pre>{{page}}</pre>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelpPage',
  async asyncData ({ params, query }) {
    let headers = {
      'Authorization': 'Bearer keyt7MKFDGrXm3set'
    }
    let p = { cellFormat: 'json' }
    let url = 'https://api.airtable.com/v0/appB8tJlSNDM6eeWt/HelpPage'
    let options = {
      headers: headers,
      params: p
    }
    let pageResponse = await axios.get(url, options)
    return {
      page: pageResponse.data
    }
  }
}
</script>

<style>

</style>
