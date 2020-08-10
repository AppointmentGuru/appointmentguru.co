<template>
<div class='page-container' >
<v-container>
<v-breadcrumbs class='py-0' divider="/">
  <v-breadcrumbs-item href='/' nuxt ><v-icon small>home</v-icon></v-breadcrumbs-item>
  <v-breadcrumbs-item href='/features/' nuxt >Features</v-breadcrumbs-item>
  <v-breadcrumbs-item disabled nuxt >Integrations</v-breadcrumbs-item>
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
  name: 'Integrations',
  components: {FeatureBox, FeatureBlock, Callout, HeroParallax, HeroInfo},
  head () {
    return {
      title: 'Integrations | AppointmentGuru',
      meta: [
        { hid: 'description', name: 'description', content: 'AppointmentGuru's integrations include a widget to add to your website and also third-party services like SnapScan, Zoom, Yoco and Mailchimp.' }
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
            tagline: 'Integrations to use with AppointmentGuru',
            img: '/img/free_website_and_app.png'
          }
        },
        {
          name: 'Callout',
          props: {
            callout: 'AppointmentGuru's integrations include a widget to add to your website and also third-party services like SnapScan, Zoom, Yoco and Mailchimp.'
          }
        },
        {
        name: FeatureBox,
        inContainer: true,
        props: {
          rowSize: 1,
          features: [
            {
              icon: 'devices',
              title: 'Free AppointmentGuru website',
              description: 'A one-page website with information on your business and a place to accept appointments.'
            },
            {
              icon: 'list',
              title: 'List in the AppointmentGuru app',
              description: 'Clients can download the AppointmentGuru app to make and manage their appointments with you.'
            },
            {
              icon: 'code',
              title: 'Add the AppointmentGuru booking widget to your website',
              description: 'Add the AppointmentGuru booking code to your existing website so that appointments can be made.'
            },
            {
              icon: 'mobile_friendly',
              title: 'Connect your SnapScan account to accept payments',
              description: 'Unique SnapScan QR codes added to your invoices allow clients to make payments which is automatically reconciled in your AppointmentGuru account.'
            },
            {
              icon: 'headset_mic',
              title: 'Integrate with Zoom to offer online appointments',
              description: 'Link your Zoom account and offer online appointments with Zoom. Automatic reminders will include the Zoom meeting URL.'
            },
            {
              icon: 'credit_card',
              title: 'Link Yoco with your AppointmentGuru to accept payments',
              description: 'Clients can pay via Yoco by clicking on a unique link on the invoice, and it'll automatically update in your AppointmentGuru account.'
            },
            {
              icon: 'alternate_email',
              title: 'Sync your AppointmentGuru clients to your Mailchimp account',
              description: 'Keep in touch with your client base with Mailchimp's email marketing tools.'
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
