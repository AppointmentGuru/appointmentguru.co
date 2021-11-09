<template>
  <v-layout row wrap class="mt-4">
    <v-flex v-for="feature in features" :key="feature.icon" xs12 :class="flexWidth">
      <v-card class="ma-2" height="100%">
        <center>
        <v-avatar color="blue-grey" class="mr-1 elevation-5"
        style='margin-top:-20px;' >
          <v-icon color='amber' large dark>{{feature.icon}}</v-icon>
        </v-avatar>
        </center>
        <v-card-title>
          <v-spacer/>
          <h2 class="title text-xs-center" v-html="feature.title" />
          <v-spacer/>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <blockquote class="blockquote" v-html="renderContent(feature.description)"></blockquote>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "FeatureBox",
  props: {
    features: {
      type: Array,
      default: () => {
        return [];
      }
    },
    rowSize: { type: Number, default: 3 }
  },
  methods: {
    renderContent(txt) {
      if (txt) {
        return this.$md.render(txt);
      }
      return "";
    }
  },
  computed: {
    flexWidth() {
      let width = (12 / this.rowSize).toString();
      return `sm${width}`;
    }
  }
};
</script>

<style>
</style>
