<template>
<div class='page-container' >
<v-container>
<v-breadcrumbs class='py-0' divider="/">
  <v-breadcrumbs-item href='/' nuxt ><v-icon small>home</v-icon></v-breadcrumbs-item>
  <v-breadcrumbs-item href='/features/' nuxt >Features</v-breadcrumbs-item>
  <v-breadcrumbs-item disabled nuxt >Apps</v-breadcrumbs-item>
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
  name: 'Apps',
  components: {FeatureBox, FeatureBlock, Callout, HeroParallax, HeroInfo},
  head () {
    return {
      title: 'iOS and Android apps for you and your clients | AppointmentGuru',
      meta: [
        { hid: 'description', name: 'description', content: 'AppointmentGuru offers mobile apps for iOS and Android, both apps empower AppointmentGuru clients and their clients to manage appointments, notifications, an online shared calendar, directions, invoices and more.' }
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
            tagline: "AppointmentGuru's apps help you manage your business on the run",
            img: '/img/icons/practitioner_icon_1024x1024_wide.png'
          }
        },
        {
          name: 'Callout',
          props: {
            callout: "Keep up-to-date with your appointments and invoicing by using the AppointmentGuru app. And there's an app for your clients too!"
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
              description: 'Use our mobile and web app to manage your appointments, invoices, calendar, reminders and clients. The app is available in the [Apple](https://itunes.apple.com/us/app/appointmentguru-mypractice/id1186604931) and [Google Play](https://play.google.com/store/apps/details?id=za.co.AppointmentGuru.practitioner) stores'
            },
            {
              icon: 'send',
              title: 'Update and send invoices from the app',
              description: 'Quickly catch up on your invoicing admin, add line items and send invoices on the go. Send automated reminders to your clients to make payment and mark invoices as paid.'
            },
            {
             icon: 'phone_android',
             title: 'An app for your clients!',
             description: 'Your clients also get to use an AppointmentGuru app to book and manage their appointments with you. The app is available in the [Apple](https://itunes.apple.com/us/app/appointment-guru/id1163805838?mt=8) and [Google Play](https://play.google.com/store/apps/details?id=za.co.AppointmentGuru) stores'
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
