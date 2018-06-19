<template>
<div class='page-container' >
<v-container>
<v-breadcrumbs class='py-0' divider="/">
  <v-breadcrumbs-item href='/' nuxt ><v-icon small>home</v-icon></v-breadcrumbs-item>
  <v-breadcrumbs-item href='/features/' nuxt >Features</v-breadcrumbs-item>
  <v-breadcrumbs-item disabled nuxt >Automation</v-breadcrumbs-item>
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
import HeroInfo from '@/components/HeroInfo'
import FeatureBox from '@/components/FeatureBox'
import FeatureBlock from '@/components/FeatureBlock'
import Callout from '@/components/Callout'
import HeroParallax from '@/components/HeroParallax'

export default {
  name: 'Automation',
  components: {FeatureBox, FeatureBlock, Callout, HeroParallax, HeroInfo},
  head () {
    return {
      title: 'Automate repetitive tasks | AppointmentGuru',
      meta: [
        { hid: 'description', name: 'description', content: 'AppointmentGuru automatically sends SMS or email notifications, gives updated reporting and enables clients to book and manage their own appointments.' }
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
            tagline: 'Automating repetitive tasks',
            img: '/img/notification_half.png'
          }
        },
        {
          name: 'Callout',
          props: {
            callout: 'Automation enables you to spend less time dealing with appointment admin and freeing up more time to do real work.'
            }
          },
          {
            name: FeatureBox,
            inContainer: true,
            props: {
              rowSize: 1,
              features: [
                {
                  icon: 'notification_important',
                  title: 'Automatic notifications',
                  description: "SMS or email notifications are automatically sent to your clients when an appointment is created, sends a reminder the day before and when appointments are rescheduled or canceled. [See more on AppointmentGuru's automated notifications](/features/notifications)."
                },
                {
                  icon: 'show_chart',
                  title: 'Automatically updated reporting',
                  description: "Super-handy reporting on your appointments and invoices updates itself. [See more on AppointmentGuru's reporting](/features/keep-track)."
                },
                {
                  icon: 'accessibility_new',
                  title: 'Clients create their own appointments',
                  description: "Automate your appointment creation and empower your clients to book appointments themselves via the app, your free website or booking widget. [See more on AppointmentGuru's self-service features for your clients](/features/client-self-service)."
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
