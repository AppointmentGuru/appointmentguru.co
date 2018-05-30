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
  name: 'Apps',
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
            tagline: "Manage your business on the run with AppointmentGuru's apps",
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
              icon: 'mobile_friendly',
              title: 'Create and manage appointments in the mobile app',
              description: 'Use our mobile and web app to manage your appointments, invoices, calendar, reminders and clients.'
            },
            {
              icon: 'send',
              title: 'Update and send invoices from the app',
              description: 'Quickly catch up on your invoicing admin, add line items and send invoices on the go. Send automated reminders to your clients to make payment and mark invoices as paid.'
            },
            {
             icon: 'phone_android',
             title: 'An app for your clients!',
             description: 'Your clients also get to use an AppointmentGuru app to book and manage their appointments with you.'
           },
           {
             icon: 'list',
             title: "Get listed in the AppointmentGuru directory (it's optional, of course!)",
             description: 'New and returning clients can find you in the AppointmentGuru app to find out more about your business and make appointments with you.'
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
