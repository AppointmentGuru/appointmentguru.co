<template>
<div class='page-container support' >
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
  name: 'SupportFeature',
  components: {FeatureBox, FeatureBlock, Callout, HeroParallax, FeatureHero},
  head () {
    return {
      title: 'Training, help and support | AppointmentGuru',
      meta: [
        { hid: 'description', name: 'description', content: 'AppointmentGuru provides training and support in-person, online, via chat, with documentation and on social media.' }
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
            tagline: "Free training and support",
            img: '/img/icons/help.png'
          }
        },
        {
          name: 'Callout',
          props: {
            callout: "AppointmentGuru customers get unlimited training, help and support."
          }
        },
        {
        name: FeatureBox,
        inContainer: true,
        props: {
          rowSize: 1,
          features: [
            {
              icon: 'settings_applications',
              title: 'Account setup',
              description: "Use our handy, step-by-step setup guides in the AppointmentGuru web or mobile app and your account will be ready in a jiffy. We're always here to help every step of the way!"
            },
            {
              icon: 'people',
              title: 'Training',
              description: "If you're located in Joburg or Cape Town, we're available for one-on-one training. Or, online video training!"
            },
            {
              icon: 'live_help',
              title: 'Support',
              description: "Live chat on our website or in the app - we're available almost all of the time. And read up on lots of useful information in our [help pages](https://appointmentguru.co/help)."
            },
            {
              icon: 'video_library',
              title: 'Quick how-to videos',
              description: 'If you prefer to watch a video, we have lots of quick how-to videos on our [YouTube channel](https://www.youtube.com/channel/UCAZppp_Yg3dC9M1-ec8E6Tg) to help get your AppointmentGuru account up-and-running.'
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
.support .feature-list {
  margin-top: 60px !important;
}
</style>
