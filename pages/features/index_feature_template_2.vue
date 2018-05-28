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
      title: 'Manage your appointments efficiently | AppointmentGuru',
      meta: [
        { hid: 'description', name: 'description', content: 'AppointmentGuru appointment management give you: appointment notifications, an online shared calendar, mobile app for managing on the go and more' }
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
            tagline: 'Quick, easy, flexible appointment management',
            col1Headline: 'For your business',
            col2Headline: 'For your clients',
            col1Content: 'Powerful appointment creation and management',
            col2Content: 'Get relevant info on their appointment and be on time.'
          }
        },
        {
          name: 'Callout',
          props: {
            callout: 'Spend less time dealing with your appointment admin and free up more time for the important things.'
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: 'mt-4',
            isLeft: true,
            withBackground: true,
            tagline: 'Manage your bookings on the go',
            content: 'Use our mobile and web app to manage your appointments, invoices, calendar, reminders and clients.',
            img: '/placeholder.png'
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: 'mt-4',
            tagline: 'Send professional invoices that clients, bookkeepers and medical aids will love',
            content: 'Industry-standard invoices sent at the touch of a button. Include extra medical info like ICD-10, NAPPI and procedure codes.',
            img: '/placeholder.png'
          }
        }
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
