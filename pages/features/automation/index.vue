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
            img: '/img/free_website.png'            
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
                  description: 'Automatically notify your clients of newly created appointments, reminders the day before and even rescheduled or canceled appointments.'
                },
                {
                  icon: 'show_chart',
                  title: 'Automatically updated reporting',
                  description: 'Super-handy reporting on your appointments and invoices updates itself.'
                },
                {
                  icon: 'accessibility_new',
                  title: 'Clients create their own appointments',
                  description: 'Automate your appointment creation and empower your clients to book appointments themselves via the app, your free website or booking widget.'
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
