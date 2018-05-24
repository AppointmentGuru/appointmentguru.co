<template>
<div style='margin-top:60px;' >
    <v-container>
    <hero-info
      class='mt-4'
      tagline='Quick, easy, flexible appointment management'
      col1-headline='For your business'
      col2-headline='For your clients'
      col1-content='Powerful appointment creation and management'
      col2-content='Get relevant info on their appointment and be on time.' >
    </hero-info>
    </v-container>
    <callout callout='Spend less time on your appointment admin and free up more time for the important things.' ></callout>

    <feature-block
      class='mt-4'
      is-left with-background
      tagline='Appointment types'
      content='Add a variety of appointment types that suit your business. Operate from more than one location? No problem! Offer appointments at different locations, each with their own set of appointment types and specific operating hours.'
      img='/placeholder.png' >
    </feature-block>

    <feature-block
      class='mt-4'
      tagline='Specify your availability'
      content="Set your daily operating hours so that appointments are made when you are available."
      img='/placeholder.png' >
    </feature-block>

    <feature-block
      class='mt-4'
      is-left with-background
      tagline='Make one appointment or a series of repeats'
      content='Create a single appointment or schedule a series of repeat appointments with a client.'
      img='/placeholder.png' >
    </feature-block>

    <feature-block
      class='mt-4'
      tagline='Block off ad hoc time'
      content="Taking Friday off? Need to go to a dentist appointment? Block that time in your AppointmentGuru calendar to show that you're unavailable."
      img='/placeholder.png' >
    </feature-block>

    <feature-block
      class='mt-4'
      is-left with-background
      tagline='Quickly cancel or reschedule appointments'
      content="Cancel and reschedule existing appointments (it'll also automatically notify your client). Using the AppointmentGuru app, clients can reschedule their own appointments up to 24 hours before."
      img='/placeholder.png' >
    </feature-block>

    <feature-block
      class='mt-4'
      tagline='Clients make their own appointments'
      content='Take bookings via the AppointmentGuru app, your free website or by adding an AppointmentGuru booking widget to your site.'
      img='/placeholder.png' >
    </feature-block>

    <feature-block
      class='mt-4'
      is-left with-background
      tagline='Add notes'
      content='Keep tabs on each client session by adding notes to an appointment.'
      img='/placeholder.png' >
    </feature-block>

    <feature-block
      class='mt-4'
      tagline='Send an invoice'
      content="AppointmentGuru's nifty built-in invoicing enables you to send an invoice from the appointment (or invoice for a bunch of appointments)."
      img='/placeholder.png' >
    </feature-block>

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
      }
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
