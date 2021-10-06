<template>
  <section :class="containerClasses">
    <v-container fill-height >

        <v-layout class="feature-block d-flex align-center" align="center" row wrap>
          <v-flex xs12 sm6 :class="col1Order" class="align-center" >

            <h1 class="pa-3 blue-grey--text">{{headline}}</h1>
            <h2 class="pa-3 display-1 deep-orange--text darken-4--text">{{tagline}}</h2>

            <div
              class="display-1 pa-3" style="font-weight: 300;"
              v-html="renderedContent" />

          </v-flex>
          <v-flex xs12 sm6 :class="col2Order">
            <v-sheet color='white' height='100%' flat >

              <picture>
                  <source :srcset="`${img}?tr=f-avif`" type="image/avif" >
                  <source :srcset="`${img}?tr=f-webp`" type="image/webp" >
                  <img style="width:100%;" class="pa-2 my-5"
                    :src="img"
                    :alt="headline" >
              </picture>

            </v-sheet>
          </v-flex>
        </v-layout>

    </v-container>
  </section>
</template>

<script>
export default {
  name: "FeatureBlock",
  props: {
    headline: { type: String },
    tagline: { type: String },
    content: { type: String },
    img: { type: String },
    isLeft: { type: Boolean, default: false },
    withBackground: { type: Boolean, default: false }
  },
  computed: {
    col1Order() {
      return !this.isLeft ? "order-sm1" : "order-sm2";
    },
    col2Order() {
      return !this.isLeft ? "order-sm2" : "order-sm1";
    },
    containerClasses() {
      if (this.withBackground) {
        return "grey lighten-2";
      }
    },
    renderedContent() {
      return this.$md.render(this.content);
    }
  }
};
</script>

<style scoped >
h1 {
  text-transform: uppercase;
  font-size: 14px;
}
</style>
