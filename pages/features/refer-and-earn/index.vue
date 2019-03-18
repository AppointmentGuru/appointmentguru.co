<template>
<div class='page-container' >
<v-container>
<v-breadcrumbs class='py-0' divider="/">
  <v-breadcrumbs-item href='/' nuxt ><v-icon small>home</v-icon></v-breadcrumbs-item>
  <v-breadcrumbs-item href='/features/' nuxt >Features</v-breadcrumbs-item>
  <v-breadcrumbs-item disabled nuxt >Refer and earn</v-breadcrumbs-item>
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
  name: 'ReferAndEarn',
  components: {FeatureBox, FeatureBlock, Callout, HeroParallax, HeroInfo},
  head () {
    return {
      title: 'Refer and get rewarded | AppointmentGuru',
      meta: [
        { hid: 'description', name: 'description', content: 'AppointmentGuru rewards customers who refer AppointmentGuru on to their network.' }
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
            tagline: "Refer AppointmentGuru and you'll get rewarded!",
            img: '/img/icons/networking.png'
          }
        },
        {
          name: 'Callout',
          props: {
            callout: 'Be part of our growth and success, refer AppointmentGuru and win!'
          }
        },
        {
        name: FeatureBox,
        inContainer: true,
        props: {
          rowSize: 1,
          features: [
            {
              icon: 'share',
              title: 'Refer AppointmentGuru to your network',
              description: 'Help spread the word, refer AppointmentGuru within your network.'
            },
            {
              icon: 'favorite',
              title: 'Earn rewards for successful referrals',
              description: "For each successful referral (your referral becomes a paying AppointmentGuru customer), we'll give you a free month on your AppointmentGuru subscription."
            },
            {
              icon: 'sentiment_very_satisfied',
              title: 'Your referral gets rewarded too!',
              description: "Once your referral becomes a paying AppointmentGuru customer, we'll give them a free month too."
            },
            {
              icon: 'text_format',
              title: 'Use this text to send to your referrals:',
              description: "I use AppointmentGuru to manage my appointments, clients and invoicing and I think you should too! Get more info and sign up for a free trial at [appointmentguru.co](https://appointmentguru.co/). As my referral, you'll get an additional free month added to your AppointmentGuru subscription."
            },
            {
              icon: 'contact_mail',
              title: 'Send us their names so we can keep track',
              description: "Don't forget to let us know who you've referred so that we can reward you both. We're working on a more automated way to manage referrals in the future! We'll keep their info private and won't contact them unless they've signed up for AppointmentGuru."
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
