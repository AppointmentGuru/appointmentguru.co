<template>
<section class='page-container' style='background-color:white;' >
  <v-parallax src='https://s3.eu-central-1.amazonaws.com/static.appointmentguru.co/images/404.jpeg' >
    <v-container >
      <v-layout row wrap align-center>
        <!-- <v-flex xs12 sm4 class='text-xs-center' >
          <img src='~/assets/shrug.png' width='90%' />
        </v-flex> -->
        <v-flex xs12 class='text-xs-center text-sm-left'>
          <v-spacer></v-spacer>
          <v-card class='mt-4' dark style='background:rgba(0,0,0,0.6);width:95%;'>
            <v-card-title>
              <h3 class="headline">Oops. we can't find that page!</h3>
              <v-spacer></v-spacer>
              <v-btn v-if='quotes.length > 1' @click='setQuoteIndex' flat>Get another quote</v-btn>
              <v-btn v-else disabled >That's all the quotes!</v-btn>
            </v-card-title>
            <v-card-text>
            <!-- <div class="title mb-3">
              The page you're looking for doesn't seem to exist.
            </div> -->
            <blockquote class='blockquote'>
              <p>{{quote.text}}</p>
              <cite style='float:right;' > - {{quote.cite}}</cite>
            </blockquote>
            </v-card-text>
            <v-divider dark></v-divider>
            <v-card-actions class='pa-2'>
              This may not be the page you're looking for. But we're sure it is the app you're looking for!
              <v-spacer></v-spacer>
              <v-btn @click='$store.commit("SHOW_SIGNUP")'  large color="green" class="mx-0 my-4">
              <v-icon class='mr-4'>star</v-icon>
              Try it for free</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-parallax>
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
  },
  mounted () {
    this.setQuoteIndex()
  },
  data () {
    return {
      quoteIndex: 0,
      quotes: [
        {
          text: "Not until we are lost do we begin to understand ourselves.",
          cite: "Henry David Thoreau"
        },
        {
          text: "I got lost but look what I found.",
          cite: "Irving Berlin"
        },
        {
          text: "And I still haven't found what I'm looking for.",
          cite: "Bono"
        },
        {
          text: 'In the middle of the journey of our life I came to myself within a dark wood where the straight way was lost.',
          cite: 'Dante Alighieri'
        },
        {
          text: 'When you\'re feeling lost, take heart. It\'s just your brain gathering the information it needs to make good decisions.',
          cite: 'Josh Kaufman'
        },
        {
          text: 'Feeling lost? Take a dream and convert it into small goals, then start taking the steps to hit those goals.',
          cite: 'Dave Ramsey'
        },
        {
          text: 'The risk of a wrong decision is preferable to the terror of indecision.',
          cite: 'Maimonides'
        },
        {
          text: 'When all else is lost, the future still remains.',
          cite: 'Blaise Pascal'
        },
        {
          text: 'You got to go down a lot of wrong roads to find the right one.',
          cite: 'Bob Parsons'
        }
      ]
    }
  },
  methods: {
    setQuoteIndex () {
      this.quotes.splice(this.quoteIndex, 1)
      this.quoteIndex = Math.floor(Math.random()*this.quotes.length)
    }
  },
  computed: {
    quote () {
      return this.quotes[this.quoteIndex]
    }
  }
}
</script>

<style>
.page-footer { margin-top: 0px !important;}
</style>
