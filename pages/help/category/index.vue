<template>
  <section style='margin-top:80px;' >
    <div v-for='category in categories' :key='category.id' >
      <h1 class='headline'>{{category.fields.Title}}</h1>
      <ul>
        <li v-for='page in pages[category.id]' :key='page.id' >
          {{page.fields.Title}}</li>
      </ul>
    </div>
  </section>

</template>

<script>
import axios from 'axios'

export default {
  name: 'HelpCategoryPage',
  async asyncData ({ query }) {
    let headers = {
      'Authorization': 'Bearer keyt7MKFDGrXm3set'
    }
    let url = 'https://api.airtable.com/v0/appB8tJlSNDM6eeWt/Category'
    let options = { headers }
    let categoryResponse = await axios.get(url, options)

    url = 'https://api.airtable.com/v0/appB8tJlSNDM6eeWt/HelpPage'

    let categories = categoryResponse.data.records.sort((a, b) => {
      return a.fields.Order - b.fields.Order
    })
    let pages = {}
    for (let x = 0; x <= categories.length; x++) {
      let category = categories[x]
      console.log(category)
      if (category && category.fields) {
        // [' + category.fields.HelpPage + ']'}
        let formula = 'FIND(RECORD_ID(), "' + category.fields.HelpPage + '")'
        let params = {filterByFormula: formula}
        let res = await axios.get(url, {headers, params})
        pages[category.id] = res.data.records
        console.log(pages)
      }
    }
    return {
      categories,
      pages
    }
  },
}
</script>

<style>

</style>
