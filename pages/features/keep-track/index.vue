<template>
<div class='page-container' >
<v-container>
<v-breadcrumbs class='py-0' divider="/">
  <v-breadcrumbs-item href='/' nuxt ><v-icon small>home</v-icon></v-breadcrumbs-item>
  <v-breadcrumbs-item href='/features/' nuxt >Features</v-breadcrumbs-item>
  <v-breadcrumbs-item disabled nuxt >Keep track</v-breadcrumbs-item>
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
  name: 'Keep track',
  components: {FeatureBox, FeatureBlock, Callout, HeroParallax, HeroInfo},
  head () {
    return {
      title: 'Keep track | AppointmentGuru',
      meta: [
        { hid: 'description', name: 'description', content: 'Automatically updated reporting shows information such as how many appointments have been paid, how much money is outstanding, which appointments are popular, the busiest times and more.' }
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
            tagline: 'High-level reporting gives insight into your business',
            img: '/img/reporting-3_half.png'
          }
        },
        {
          name: 'Callout',
          props: {
            callout: "Take a step back and get an idea of the numbers. View information on your cashflow, reporting on your appointment types and when you're most busy."
          }
        },
        {
        name: FeatureBox,
        inContainer: true,
        props: {
          rowSize: 1,
          features: [
            {
              icon: 'show_chart',
              title: 'View reporting over different date ranges',
              description: 'Generate a report for a week, a calendar month, the whole year.'
            },
            {
              icon: 'account_balance',
              title: 'Check on your cashflow',
              description: "Quickly see how much money you've earned, what's been paid and the total amount still outstanding over 30 or 90 days."
            },
            {
              icon: 'favorite',
              title: 'Which appointment types are more popular?',
              description: 'Graphs break down the appointment types and their numbers.'
            },
            {
              icon: 'trending_up',
              title: 'Which days and times are the busiest?',
              description: "This kind of insight can be valuable when making decisions about when it's best to be available for your clients."
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
