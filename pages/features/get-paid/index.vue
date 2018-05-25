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
  name: 'Get Paid',
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
            tagline: 'Invoicing, magically generated from your appointments',
            col1Headline: 'For your business',
            col2Headline: 'For your clients',
            col1Content: 'Automatically generated invoices that are easy to complete, simple to send and let you keep on top of your cash flow.',
            col2Content: 'Professional invoices received by email, SMS or in-app, suitable for medical aid submission. And payment reminders!'
          }
        },
        {
          name: 'Callout',
          props: {
            callout: 'Spend less time dealing with your appointment admin and free up more time for the important things.'
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: 'mt-4',
            isLeft: true,
            withBackground: true,
            tagline: 'Customise your invoices with your business and client information',
            content: 'Include your business logo, name, address and bank details and your client info (name, address, phone and medical aid info).',
            img: '/placeholder.png'
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: 'mt-4',
            tagline: 'Generate invoices automatically',
            content: 'Send an invoice after each appointment or consolidate multiple appointments on a single invoice at month-end (or anytime really).',
            img: '/placeholder.png'
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: 'mt-4',
            isLeft: true,
            withBackground: true,
            tagline: 'Powerful support for medical codes',
            content: 'AppointmentGuru allows you to add ICD10, NAPPI, procedure and process codes. Built-in Smart search helps find the right codes quickly and previously-used codes are suggested, reducing repetitive work.',
            img: '/placeholder.png'
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: 'mt-4',
            tagline: 'Accept payment via SnapScan',
            content: "AppointmentGuru's SnapScan integration adds a SnapScan code to each invoice. Once payment has been made via the SnapScan app, the invoice will be marked as paid in your AppointmentGuru account. Less work for you!",
            img: '/placeholder.png'
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: 'mt-4',
            isLeft: true,
            withBackground: true,
            tagline: 'Send, remind, receipt',
            content: "Send invoices to your clients by email, SMS or in-app, remind them if they haven't paid and send a receipt once they have. All at the touch of a button.",
            img: '/placeholder.png'
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: 'mt-4',
            tagline: 'Reconcile and view your reports',
            content: "Mark invoices as paid as you get paid and easily view those still outstanding. Reporting updates to show your financial health over the month.",
            img: '/placeholder.png'
          }
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
