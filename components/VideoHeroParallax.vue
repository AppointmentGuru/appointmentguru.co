<template>
<section>
  <iframe class='elevation-24 parallax-video hidden-xs-only' width="560" height="315" :src="video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  <v-parallax :src='backgroundImage' height="430" >
    <v-container style='margin-top:85px;position:inherit;' class='text-xs-center' >
      <v-layout row wrap class='text-xs-center ' >
        <v-spacer></v-spacer>
        <h1 v-html='headline' class='headline uppercase deep-orange--text mb-4' ></h1>
        <v-spacer></v-spacer>
      </v-layout>
      <v-layout class='hidden-sm-and-up text-xs-center mt-4'>
        <v-spacer></v-spacer>
        <v-btn @click='showVideo=true' class='primary' large >{{videoCta}}<v-icon class='ml-2' large >play_circle_outline</v-icon></v-btn>
        <v-spacer></v-spacer>
      </v-layout>
    </v-container>
  </v-parallax>

<v-dialog
  :fullscreen="true" v-model='showVideo' max-width='560px' >
  <v-system-bar status color="orange">
    <v-spacer></v-spacer>
    <v-btn dark icon @click='showVideo=false' >
      <v-icon dark >close</v-icon>
    </v-btn>
  </v-system-bar>
  <slot name='dialog' >
    <v-card>
      <iframe class='dialog-model' :src="video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </v-card>
  </slot>
</v-dialog>

</section>
</template>

<script>
export default {
  name: 'VideoHeroParallax',
  props: {
    headline: {type: String},
    tagline: {type: String},
    backgroundImage: {type: String},
    video: {type: String},
    videoCta: {type: String, default: 'Show video'}
  },
  data () {
    return {
      showVideo: false,
    }
  },
  computed: {
    isFullScreen () {
      return this.$vuetify.breakpoint.smAndDown
    }
  }
}
</script>

<style scoped >
.parallax-text {
  /* top: 120px;left:20px;
  padding:20px;
  position: absolute; */
  background-color: rgba(0,0,0,0.6) !important;
}
.parallax-video {
  position: absolute;
  z-index: 1;
  width: 550px;
  top: 170px;
  left: 0;
  right: 0;
  margin: auto;
}
.dialog-model {
  width:100%;
  height:auto;
}
</style>
