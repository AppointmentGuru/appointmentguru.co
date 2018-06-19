<template>
<section class='page-container' style='background-color:white;' >

    <v-container >
      <v-layout row wrap align-center>
        <v-flex xs12 sm4 class='text-xs-center' >
          <img src='~/assets/shrug.png' width='90%' />
        </v-flex>
        <v-flex xs12 sm8 class='text-xs-center text-sm-left'>
          <h3 class="display-2">Sorry, we can't find that page</h3>
          <!-- <div class="title mb-3">
            The page you're looking for doesn't seem to exist.
          </div> -->
          <v-btn href='/' nuxt large color="primary" class="mx-0 my-4">
            <v-icon class='mr-4'>home</v-icon>
            Return to the home page</v-btn>
        </v-flex>
      </v-layout>
    </v-container>

  <div style='clear:both;' ></div>
</section>
</template>

<script>
import FeatureBox from '@/components/FeatureBox'
import FeatureBlock from '@/components/FeatureBlock'
import Callout from '@/components/Callout'
import HeroParallax from '@/components/HeroParallax'
import Testimonial from '@/components/Testimonial'
import VideoHeroParallax from '@/components/VideoHeroParallax'

export default {
  name: 'HomePage',
  components: {FeatureBox, FeatureBlock, Callout, HeroParallax, VideoHeroParallax, Testimonial},
  head () {
    return {
      title: 'AppointmentGuru - Be better at admin, spend less time doing it',
      meta: [
        { hid: 'description', name: 'description', content: 'AppointmentGuru helps you to automate appointments, invoices and customer management. It has an online calendar, automated notifications and mobile apps for you and your clients to book and manage their appointments.' }
      ]
    }
  }
}
</script>

<style>
</style>
