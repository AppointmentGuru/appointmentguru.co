<template>
<div >
    <hero-parallax
      headline='Be better at admin.<br/>Spend less time doing it.'
      tagline='Appointments. Invoices. Clients. More.'
      image='~/assets/calendar-mobile-laptop.png'
      background-image='https://images.unsplash.com/photo-1517497052582-25e6fe8ec001?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a796c72fc4b68772c227b39dc6c3754&auto=format&fit=crop&w=1950&q=80' >
    </hero-parallax>

    <callout callout='AppointmentGuru is perfect for Physios, Biokinetisists, Personal Trainers, Chiropractors, Psychologists, Dietitians, Consultants and any appointment based business.' ></callout>

    <v-container>
      <feature-box :features='features' ></feature-box>
    </v-container>

    <feature-block
      class='mt-4'
      is-left with-background
      headline='Automatically Generated Invoices'
      tagline='Send professional invoices that clients, bookkeepers and medical aids will love'
      content='Industry-standard invoices sent at the touch of a button. Include extra medical info like ICD-10, NAPPI and procedure codes.'
      image='https://appointmentguru.co/assets/img/homepage/invoicing.png' >
    </feature-block>

    <feature-block
      class='mt-4'
      headline='Automatically Generated Invoices'
      tagline='Send professional invoices that clients, bookkeepers and medical aids will love'
      content='Industry-standard invoices sent at the touch of a button. Include extra medical info like ICD-10, NAPPI and procedure codes.'
      image='https://appointmentguru.co/assets/img/homepage/invoicing.png' >
    </feature-block>
</div>
</template>

<script>
import FeatureBox from '@/components/FeatureBox'
import FeatureBlock from '@/components/FeatureBlock'
import Callout from '@/components/Callout'
import HeroParallax from '@/components/HeroParallax'

export default {
  name: 'HomePage',
  components: {FeatureBox, FeatureBlock, Callout, HeroParallax},
  data () {
    return {
      features: [
        {
          icon: 'event',
          title: 'Appointments',
          description: 'Manage your appointments like a pro with online bookings, automated notifications, integrated online calendar and more'
        },
        {
          icon: 'bookmark',
          title: 'Invoices',
          description: 'Manage your appointments like a pro with online bookings, automated notifications, integrated online calendar and more'
        },
        {
          icon: 'person',
          title: 'Client management',
          description: 'Manage your appointments like a pro with online bookings, automated notifications, integrated online calendar and more'
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
