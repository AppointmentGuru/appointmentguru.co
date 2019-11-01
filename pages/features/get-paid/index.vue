<template>
<div class='page-container get-paid' >
<v-container>
<v-breadcrumbs class='py-0' divider="/">
  <v-breadcrumbs-item href='/' nuxt ><v-icon small>home</v-icon></v-breadcrumbs-item>
  <v-breadcrumbs-item href='/features/' nuxt >Features</v-breadcrumbs-item>
  <v-breadcrumbs-item disabled nuxt >Get paid</v-breadcrumbs-item>
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
import FeatureBox from '@/components/FeatureBox'
import FeatureBlock from '@/components/FeatureBlock'
import Callout from '@/components/Callout'
import HeroParallax from '@/components/HeroParallax'
import FeatureHero from '@/components/FeatureHero'
import Vue from 'vue'

export default {
  name: 'GetPaid',
  components: {FeatureBox, FeatureBlock, Callout, HeroParallax, FeatureHero},
  head () {
    return {
      title: 'Invoicing directly from appointments | AppointmentGuru',
      meta: [
        { hid: 'description', name: 'description', content: 'AppointmentGuru offers integrated invoicing that includes ICD10, NAPPI, procedure and process codes for medical aid submission. An invoice can be immediately sent from an appointment or a consolidated invoice with multiple appointments (and line items) at month-end. Accept payment via SnapScan.' }
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
            tagline: 'Invoicing, magically generated from your appointments',
            img: '/img/invoicing_v2.png'
          }
        },
        {
          name: 'Callout',
          props: {
            callout: "Automatically generated invoices that are easy to complete, simple to send and let you keep on top of your cash flow. AppointmentGuru's invoicing also includes built-in ICD10, NAPPI, procedure and process codes for medical aid submission. And payment reminders!"
          }
        },
        {
        name: FeatureBox,
        inContainer: true,
        props: {
          rowSize: 1,
          features: [
            {
              icon: 'business',
              title: 'Customise your invoices with your business and client information',
              description: 'Include your business logo, name, address and bank details and your client info (name, address, phone and medical aid info).'
            },
            {
              icon: 'assignment_turned_in',
              title: 'Generate invoices automatically',
              description: 'Send an invoice after each appointment or consolidate multiple appointments on a single invoice at month-end (or anytime really).'
            },
            {
              icon: 'local_hospital',
              title: 'Powerful support for medical codes',
              description: 'AppointmentGuru allows you to add ICD10, NAPPI, procedure and process codes. Built-in Smart search helps find the right codes quickly and previously-used codes are suggested, reducing repetitive work.'
            },
            {
              icon: 'shopping_basket',
              title: 'Add products to invoices',
              description: 'Sell accessories and aids? Include product sales on invoices for specific appointments.'
            },
            {
              icon: 'credit_card',
              title: 'Accept payment via SnapScan',
              description: "AppointmentGuru's SnapScan integration adds a SnapScan code to each invoice. Once payment has been made via the SnapScan app, the invoice will be marked as paid in your AppointmentGuru account. Less work for you!"
            },
            {
              icon: 'receipt',
              title: 'Send, remind, receipt',
              description: "Send invoices to your clients by email, SMS and WhatsApp, remind them if they haven't paid and send a receipt once they have. All at the touch of a button."
            },
            {
              icon: 'receipt',
              title: 'Generate statements',
              description: "Create statements from outstanding invoices and send them to your clients by email, SMS and WhatsApp. Statements can include an opening balance as well as paid invoices."
            },
            {
              icon: 'done_all',
              title: 'Reconcile and view your reports',
              description: "Mark invoices as paid as you get paid and easily view those still outstanding. Reporting updates to show your financial health over the month."
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
.get-paid img.hero {
  width:90% !important;
}
</style>
