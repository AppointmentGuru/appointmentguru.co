<template>
<div class='page-container' >
<v-container>
<v-breadcrumbs class='py-0' divider="/">
  <v-breadcrumbs-item href='/' nuxt ><v-icon small>home</v-icon></v-breadcrumbs-item>
  <v-breadcrumbs-item href='/features/' nuxt >Features</v-breadcrumbs-item>
  <v-breadcrumbs-item disabled nuxt >Notifications</v-breadcrumbs-item>
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
  name: 'HomePage',
  components: {FeatureBox, FeatureBlock, Callout, HeroParallax, FeatureHero},
  head () {
    return {
      title: 'Automatic notifications | AppointmentGuru',
      meta: [
        { hid: 'description', name: 'description', content: 'AppointmentGuru provides automatic SMS or email notifications to confirm, remind, reschedule or cancel an appointment. Invoices and payment reminders can also be sent by SMS and email to you and your client.' }
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
            tagline: 'Automated SMS or email notifications',
            img: '/img/notification_half.png'
          }
        },
        {
          name: 'Callout',
          props: {
            callout: 'Automatic appointment notifications lessen client no-shows. Include relevant info about their appointment and send payment information afterwards.'
          }
        },
        {
        name: FeatureBox,
        inContainer: true,
        props: {
          rowSize: 1,
          features: [
            {
              icon: 'check',
              title: 'Appointment confirmations',
              description: 'Send an automated SMS or email to you and your client whenever an appointment is created.'
            },
            {
              icon: 'notification_important',
              title: 'Appointment reminders',
              description: 'Automatically send an SMS or email to your client 24 hours before their appointment, reminding them of the time, your address and any other information.'
            },
            {
              icon: 'refresh',
              title: 'Reschedule and cancellation notifications',
              description: 'Notifications to you and your client when an appointment is rescheduled (clients can reschedule their own appointments up to 24 hours before). Cancellation notifications can include information on how to make another appointment, encouraging clients to see you again.'
            },
            {
              icon: 'notifications_off',
              title: "Or don't send notifications at all",
              description: "The option to not send an appointment confirmation, reminder, reschedule or cancel notification whenever you're managing your appointments."
            },
            {
              icon: 'send',
              title: 'Invoice and payment reminder notifications',
              description: 'Send invoices to your clients (and yourself) by SMS and email. Quickly remind your clients about an outstanding invoice by resending it as many times as you like.'
            },
            {
              icon: 'sms_failed',
              title: 'View the status of your sent notifications',
              description: 'Check whether an SMS and/or email notification has been sent, delivered, received or failed.'
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
