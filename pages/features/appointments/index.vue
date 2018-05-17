<template>
<div style='margin-top:60px;' >
    <v-container>
    <hero-info
      headline='Flexible and easy to use invoicing'
      tagline='Our Appointment management will change you life'
      col1-headline='For your business'
      col2-headline='For your clients'
      col1-content='Automatically generated invoices that are easy to complete, simple to send and let you keep on top of your cash flow.'
      col2-content='Professional invoices received by email, SMS or in-app, suitable for medical aid submission. And payment reminders!' >
    </hero-info>
    </v-container>
    <callout callout='AppointmentGuru is perfect for Physios, Biokinetisists, Personal Trainers, Chiropractors, Psychologists, Dietitians, Consultants and any appointment based business.' ></callout>

    <feature-block
      class='mt-4'
      is-left with-background
      headline='Automatically Generated Invoices'
      tagline='Send professional invoices that clients, bookkeepers and medical aids will love'
      content='Industry-standard invoices sent at the touch of a button. Include extra medical info like ICD-10, NAPPI and procedure codes.'
      img='https://appointmentguru.co/assets/img/homepage/invoicing.png' >
    </feature-block>

    <feature-block
      class='mt-4'
      headline='Automatically Generated Invoices'
      tagline='Send professional invoices that clients, bookkeepers and medical aids will love'
      content='Industry-standard invoices sent at the touch of a button. Include extra medical info like ICD-10, NAPPI and procedure codes.'
      img='https://appointmentguru.co/assets/img/homepage/invoicing.png' >
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
