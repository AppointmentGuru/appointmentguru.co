<template>
<v-navigation-drawer stateless flat dark value="true" >
  <!-- <div v-for='category in categories' :key='category.id' >
          <h1 class='headline'>{{category.fields.Title}}</h1>
    <ul>
      <li v-for='page in pages[category.id]' :key='page.id' >
        {{page.fields.Title}}</li>
    </ul>
  </div> -->
  <v-toolbar dense dark color='orange' >
    <v-toolbar-title>Help Topics</v-toolbar-title>
  </v-toolbar>
  <v-list>
    <template
      v-for='(category, index) in categories'
      v-if='category && category.fields' >
      <v-list-group :value="index === 0" :key='category.id' >
        <v-list-tile slot="activator" >
          <v-list-tile-title>{{category.fields.Title}}</v-list-tile-title>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile v-for='page in pages[category.id]' :key='page.id' :to='`/help/${page.fields.Slug}`' >
          <v-list-tile-content>
            <v-list-tile-sub-title>{{ page.fields.Title }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </template>
  </v-list>
</v-navigation-drawer>
</template>
<script>
export default {
  name: 'HelpCategoriesIndex',
  props: {
    categories: { type: Array },
    pages: { type: Object }
  }
}
</script>
