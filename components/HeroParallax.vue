<!--
<hero-parallax
  headline='Be better at admin.<br/>Spend less time doing it.'
  tagline='Appointments. Invoices. Clients. More.'
  image='~/assets/calendar-mobile-laptop.png'
  background-image='https://images.unsplash.com/photo-1517497052582-25e6fe8ec001?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a796c72fc4b68772c227b39dc6c3754&auto=format&fit=crop&w=1950&q=80'
-->
<template>
<section>
<v-parallax :src='backgroundImage' >
  <v-container style='margin-top:100px;position:inherit;' >
    <v-layout row wrap class="d-flex align-center" align="center" >
      <v-flex md5 sm12 order-xs2 >
        <!-- style='margin-top:55px;' -->
        <v-card class='parallax-text elevation-4 mt-lg-5' flat dark >
          <!-- <v-card-media src='https://appointmentguru.co/assets/img/guru/appointment-logo.png' height='100' ></v-card-media> -->
          <v-card-title>
            <v-layout>
            <h1 class='headline' v-html='headline' ></h1>
            </v-layout>
            <v-layout>
            <h2 class='subheading mt-2' v-html='tagline' ></h2>
            </v-layout>
          </v-card-title>
          <v-divider color='white' ></v-divider>
          <slot>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click='showVideo=true' flat class='mt-3' style='z-index:2' >See how it works
              <v-icon class='ml-2' large >play_circle_outline</v-icon></v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn
                style='z-index:1'
                href='https://go.appointmentguru.co' target='_blank'
                color='orange' block >Get started for free</v-btn>
            </v-card-actions>
          </slot>
        </v-card>
      </v-flex>
      <v-flex xs7 order-xs1 class='hidden-sm-and-down' >
        <!-- <img
          style='height: 400px;position: absolute;right:20px;z-index=-1;'
          :src='image' /> -->
          <!-- style='height: 400px;position: absolute;right:20px;z-index=-1;' -->
          <picture>
              <source :srcset="`${image}?tr=f-avif`" type="image/avif" >
              <source :srcset="`${image}?tr=f-webp`" type="image/webp" >
              <img
                alt="AppointmentGuru - appointments, invoicing, CRM and client management"
                width='100%'
                :src='image' />
          </picture>

      </v-flex>
    </v-layout>
  </v-container>
</v-parallax>
<v-dialog
  :fullscreen="isFullScreen" v-model='showVideo' max-width='560px' >
  <v-system-bar status color="orange">
    <v-spacer></v-spacer>
    <v-btn dark icon @click='showVideo=false' >
      <v-icon dark >close</v-icon>
    </v-btn>
  </v-system-bar>
  <slot name='dialog' >
    <v-card>
      <div id="player" style='min-width:560px;min-height:300px;'>
        <center>
        <v-progress-circular
          style='margin-top:110px;'
          color='amber'
          :size="75"
          indeterminate >
        </v-progress-circular>
        </center>
      </div>
      <!-- <v-btn >Play</v-btn>
      <v-btn @click='stopPlayback' >Stop</v-btn> -->
      <!-- <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/S-RBfTBraWc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> -->
    </v-card>
  </slot>
</v-dialog>
</section>
</template>

<script>

function onYouTubeIframeAPIReady() {
  window.youtubeplayer = new YT.Player('promo-video', {
    height: '315',
    width: '560',
    videoId: 'M7lc1UVf-VE'
  })
}

export default {
  name: 'HeroParallax',
  props: {
    headline: {type:String},
    tagline: {type:String},
    backgroundImage: {type:String},
    image: {type:String},
  },
  data () {
    return {
      showVideo: false,
      isPaused: false
    }
  },
  mounted () {
    this.loadVideo()
  },
  computed: {
    isFullScreen () {
      return this.$vuetify.breakpoint.smAndDown
    }
  },
  watch: {
    showVideo () {
      if (this.showVideo === true) {
        this.$ga.event('Landing pages', 'Play video')
        if (!window.youtubeplayer) {
          this.initVideo()
        } else {
          window.youtubeplayer.playVideo()
        }
      } else {
        if (window.youtubeplayer) {
          let playDuration = window.youtubeplayer.getDuration()
          window.youtubeplayer.pauseVideo()
          this.$ga.event({
            eventCategory: 'Landing pages',
            eventAction: 'Stop video',
            eventValue: playDuration
          })
        }
      }
    }
  },
  methods: {
    loadVideo () {
      let vm = this
      var tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    },
    initVideo () {
      window.youtubeplayer = new YT.Player('player', {
        height: '310',
        width: '560',
        videoId: 'S-RBfTBraWc'
      })
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
</style>
