<template>
  <v-container style='margin-top:80px;' >
    <v-layout>
      <v-flex xs5 >
        <help-categories-index :categories='categories' :pages='pages' >
        </help-categories-index >
      </v-flex>
      <v-flex xs7 >
        ..
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import axios from 'axios'
import HelpCategoriesIndex from '@/components/navigation/HelpCategoriesIndex'

export default {
  name: 'HelpCategoryPage',
  components: {HelpCategoriesIndex},
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
      if (category && category.fields) {
        // [' + category.fields.HelpPage + ']'}
        let formula = 'FIND(RECORD_ID(), "' + category.fields.HelpPage + '")'
        let params = {filterByFormula: formula, view: 'Summary'}
        let res = await axios.get(url, {headers, params})
        pages[category.id] = res.data.records
      }
    }
    return {
      categories,
      pages
    }
  }
}
</script>

<style>

</style>
