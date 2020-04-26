<template>
<div class='page-container' >
  <v-container>
  <v-breadcrumbs class='py-0' divider="/">
    <v-breadcrumbs-item href='/' nuxt ><v-icon small>home</v-icon></v-breadcrumbs-item>
    <v-breadcrumbs-item href='/features/' nuxt >Features</v-breadcrumbs-item>
    <v-breadcrumbs-item disabled nuxt >Appointments</v-breadcrumbs-item>
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
import FeatureHero from '@/components/FeatureHero'
import FeatureBox from '@/components/FeatureBox'
import FeatureBlock from '@/components/FeatureBlock'
import Callout from '@/components/Callout'
import HeroParallax from '@/components/HeroParallax'
import Vue from 'vue'

export default {
  name: 'Appointments',
  components: {FeatureBox, FeatureBlock, Callout, HeroParallax, FeatureHero},
  head () {
    return {
      title: 'Efficient appointment management with AppointmentGuru',
      meta: [
        { hid: 'description', name: 'description', content: 'AppointmentGuru offers powerful AppointmentGuru appointment management that includes online appointment creation, a schedule and calendar, invoicing, appointment notifications and more.' }
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
            tagline: 'Quick, easy, flexible appointment management',
            img: '/img/schedule_half.png',
          }
        },
        {
          name: 'Callout',
          props: {
            callout: 'Spend less time dealing with your appointment admin and free up more time for the important things.'
          }
        },
        {
          name: FeatureBox,
          inContainer: true,
          props: {
            rowSize: 1,
            features: [
              {
                icon: 'settings',
                title: 'Appointment types',
                description: 'Add a variety of appointment types that suit your business. Operate from more than one location? No problem! Offer appointments at different locations, each with their own set of appointment types and specific operating hours.'
              },
              {
                icon: 'visibility',
                title: 'Specify your availability',
                description: "Set your daily operating hours so that appointments are made when you are available."
              },
              {
                icon: 'restore',
                title: 'Make one appointment or a series of repeats',
                description: 'Create a single appointment or schedule a series of repeat appointments with a client.'
              },
              {
                icon: 'video_call',
                title: 'Hold online appointments with Zoom',
                description: "Hook up your Zoom account and create online appointments that automatically include Zoom meeting information."
              },
              {
                icon: 'visibility_off',
                title: 'Block off ad hoc time',
                description: "Taking Friday off? Need to go to a dentist appointment? Block time in your AppointmentGuru calendar when you're unavailable."
              },
              {
                icon: 'schedule',
                title: 'Quickly cancel or reschedule appointments',
                description: "Cancel and reschedule existing appointments (it'll also automatically notify your client). Using the AppointmentGuru app, clients can reschedule their own appointments up to 24 hours before."
              },
              {
                icon: 'accessibility_new',
                title: 'Clients make their own appointments',
                description: 'Take bookings via the AppointmentGuru app, your free website or by adding an AppointmentGuru booking widget to your site.'
              },
              {
                icon: 'create',
                title: 'Add notes',
                description: 'Keep tabs on each client session by adding notes and uploading files to an appointment.'
              },
              {
                icon: 'send',
                title: 'Send an invoice',
                description: "AppointmentGuru's nifty built-in invoicing enables you to send an invoice from an appointment (or invoice for a bunch of appointments). [See more on AppointmentGuru's invoicing](/features/get-paid)."
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
