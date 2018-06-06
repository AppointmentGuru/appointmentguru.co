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
  name: 'Client Self Service',
  components: {FeatureBox, FeatureBlock, Callout, HeroParallax, HeroInfo},
  head () {
    return {
      title: 'Client self-service | AppointmentGuru',
      meta: [
        { hid: 'description', name: 'description', content: 'Clients can make their own appointments, reschedule them up to 24 hours before, get information and directions, view due and paid invoices.' }
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
            tagline: 'Empower your clients to book and manage their appointments with you',
            img: '/img/app_for_clients_half.png'
          }
        },
        {
          name: 'Callout',
          props: {
            callout: "Your business can continually take appointments and help clients even when you're not personally available. And your clients can conveniently make and manage appointments anytime."
          }
        },
        {
        name: FeatureBox,
        inContainer: true,
        props: {
          rowSize: 1,
          features: [
            {
              icon: 'accessibility_new',
              title: 'Clients self-book appointments',
              description: 'Instead of phoning or messaging you, clients can make and manage appointments themselves. AppointmentGuru offers a mobile app, a free website or booking code you can add to your site.'
            },
            {
              icon: 'account_box',
              title: 'Clients manage their information',
              description: 'Your clients can update their personal information including contact details and medical aid info.'
            },
            {
              icon: 'location_on',
              title: 'Information, directions and even an Uber!',
              description: 'Clients can get your address, easily find their way using Google Maps or even order an Uber from the AppointmentGuru app.'
            },
            {
              icon: 'restore',
              title: 'Self-rescheduling',
              description: 'Reduce calls from clients asking to reschedule their appointment, the AppointmentGuru app allows for rescheduling up to 24 hours before the appointment starts.'
            },
            {
              icon: 'pageview',
              title: 'View and pay invoices',
              description: "Once you've created an invoice for a client, they'll be able to view it in the AppointmentGuru app. It'll show whether it's due or paid, and if you've enabled the SnapScan integration - payment can be made using SnapScan."
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
