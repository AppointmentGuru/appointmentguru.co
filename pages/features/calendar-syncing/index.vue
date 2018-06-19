<template>
<div class='page-container' >
<v-container>
<v-breadcrumbs class='py-0' divider="/">
  <v-breadcrumbs-item href='/' nuxt ><v-icon small>home</v-icon></v-breadcrumbs-item>
  <v-breadcrumbs-item href='/features/' nuxt >Features</v-breadcrumbs-item>
  <v-breadcrumbs-item disabled nuxt >Calendar syncing</v-breadcrumbs-item>
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
  name: 'Calendar Syncing',
  components: {FeatureBox, FeatureBlock, Callout, HeroParallax, HeroInfo},
  head () {
    return {
      title: 'View, update and sync your calendar | AppointmentGuru',
      meta: [
        { hid: 'description', name: 'description', content: "AppointmentGuru's calendar can be synced to Calendar apps (iOS, Android and desktops). Clients can also add appointments to their own calendar apps." }
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
            tagline: "Sync to the calendar app on your phone",
            img: '/img/calendar.png'
          }
        },
        {
          name: 'Callout',
          props: {
            callout: 'Always be on top of your schedule, sync your AppointmentGuru calendar to your Calendar app.'
          }
        },
        {
          name: FeatureBox,
          inContainer: true,
          props: {
            rowSize: 1,
            features: [
              {
                icon: 'sync',
                title: 'Sync your AppointmentGuru calendar to your phone',
                description: 'One-way calendar syncing from AppointmentGuru to the calendar app on your phone or computer.'
              },
              {
                icon: 'calendar_today',
                title: 'Clients add appointments to their own calendar apps',
                description: 'Clients using the AppointmentGuru app can add appointments to their calendar app.'
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
