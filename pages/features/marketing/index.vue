<template>
<div class='page-container marketing' >
<v-container>
<v-breadcrumbs class='py-0' divider="/">
  <v-breadcrumbs-item href='/' nuxt ><v-icon small>home</v-icon></v-breadcrumbs-item>
  <v-breadcrumbs-item href='/features/' nuxt >Features</v-breadcrumbs-item>
  <v-breadcrumbs-item disabled nuxt >Marketing</v-breadcrumbs-item>
</v-breadcrumbs>
</v-container>

    <template v-for='(block, index) in blocks'  >
      <v-container v-if='block.inContainer' :key='index' >
        <component :is='block.name' v-bind='block.props' :class='block.classes' />
      </v-container>
      <component v-else :is='block.name' v-bind='block.props' :key='index' :class='block.classes' />
    </template>
</div>
</template>

<script>
import FeatureBox from '@/components/FeatureBox'
import FeatureBlock from '@/components/FeatureBlock'
import Callout from '@/components/Callout'
import HeroParallax from '@/components/HeroParallax'
import FeatureHero from '@/components/FeatureHero'
import Vue from 'vue'

export default {
  name: 'HomePage',
  components: {FeatureBox, FeatureBlock, Callout, HeroParallax, FeatureHero},
  head () {
    return {
      title: 'Marketing is included | AppointmentGuru',
      meta: [
        { hid: 'description', name: 'description', content: "AppointmentGuru provides marketing tools such as table talkers, business cards, a free website and a free listing in the AppointmentGuru app. Content is branded with logo's and profile pictures." }
      ]
    }
  },
  mounted () {
    let features = this.blocks[2].props.features.map((item) => { return item.title })
    Vue.set(this.blocks[0].props, 'features', features)
  },
  data () {
    return {
      campaignParts: {
        utmSource: 'website',
        utmMedium: 'landing-page',
        utmCampaign: ''
      },
      blocks: [
        {
          name: 'FeatureHero',
          inContainer: true,
          props: {
            classes: 'mt-4',
            tagline: 'Marketing tools are included',
            img: '/img/marketing.png'
          }
        },
        {
          name: 'Callout',
          props: {
            callout: 'AppointmentGuru provides branded marketing tools to help retain and find more clients.'
          }
        },
        {
        name: FeatureBox,
        inContainer: true,
        props: {
          rowSize: 1,
          features: [
            {
              icon: 'devices',
              title: 'A free website',
              description: 'Your AppointmentGuru account includes a free website so that your clients can make appointments and get more information on your business.'
            },
            {
              icon: 'touch_app',
              title: 'Table talkers',
              description: "A free table talker, displaying a QR code for your clients to scan with their phone. It'll open your website, prompt them to download the AppointmentGuru app or open your listing in the AppointmentGuru app. Making it easy for them to find information on your business and make an appointment with you."
            },
            {
              icon: 'input',
              title: 'Business cards',
              description: 'Business cards displaying your contact information and QR code (with the same functionality as the table talkers) to take bookings. The first 100 are a gift from us!'
            },
            {
              icon: 'list',
              title: 'Free listing in the AppointmentGuru app directory',
              description: 'An optional, free listing in the AppointmentGuru app directory. Clients will be able to book and manage appointments with you.'
              }
            ]
          }
        },
      ]
    }
  }
}
</script>

<style>
@media only screen and (min-width: 1904px) {
  .container {
    max-width: 1185px !important;
  }
}
@media only screen and (max-width: 599px) {
  .container {
      padding: 0px;
  }
}
.blockquote.smaller { font-size: 16px; }
.marketing .feature-list {
  margin-top: 60px !important;
}
</style>
