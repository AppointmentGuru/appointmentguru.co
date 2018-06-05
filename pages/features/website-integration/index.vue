<template>
<div class='page-container' >
    <template v-for='(block, index) in blocks'  >
      <v-container v-if='block.inContainer' :key='index' >
        <component :is='block.name' v-bind='block.props' :class='block.classes' />
      </v-container>
      <component v-else :is='block.name' v-bind='block.props' :key='index' :class='block.classes' />
    </template>
</div>
</template>

<script>
import HeroInfo from '@/components/HeroInfo'
import FeatureBox from '@/components/FeatureBox'
import FeatureBlock from '@/components/FeatureBlock'
import Callout from '@/components/Callout'
import HeroParallax from '@/components/HeroParallax'

export default {
  name: 'HomePage',
  components: {FeatureBox, FeatureBlock, Callout, HeroParallax, HeroInfo},
  head () {
    return {
      title: 'Website integration | AppointmentGuru',
      meta: [
        { hid: 'description', name: 'description', content: 'Get your business online, AppointmentGuru provides a free website, app and booking widget to add to your existing site.' }
      ]
    }
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
          name: 'HeroInfo',
          inContainer: true,
          props: {
            classes: 'mt-4',
            tagline: 'Accept appointments online',
            img: '/img/free_website.png'
          }
        },
        {
          name: 'Callout',
          props: {
            callout: 'AppointmentGuru gives you an online presence. Your clients will be to get info on your business and make appointments anytime.'
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
              title: 'Free AppointmentGuru website',
              description: 'A one-page website with information on your business and a place to accept appointments.'
            },
            {
              icon: 'list',
              title: 'List in the AppointmentGuru app',
              description: 'Clients can download the AppointmentGuru app to make and manage their appointments with you.'
            },
            {
              icon: 'code',
              title: 'Add the AppointmentGuru booking widget to your website',
              description: 'Add the AppointmentGuru booking code to your existing website so that appointments can be made.'
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

</style>
