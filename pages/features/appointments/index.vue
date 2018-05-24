<template>
<div style='margin-top:60px;' >
    <v-container>
    <hero-info
      tagline='Quick, easy, flexible appointment management'
      col1-headline='For your business'
      col2-headline='For your clients'
      col1-content='Powerful appointment creation and management'
      col2-content='Get relevant info on their appointment and be on time.' >
    </hero-info>
    </v-container>
    <callout callout='Spend less time doing appointment admin and free up more time for the important things.' ></callout>

    <feature-block
      class='mt-4'
      is-left with-background
      tagline='Appointment types'
      content='Offer a variety of appointment types that suit your business. Include different locations, appointment length and cost.'
      img='/placeholder.png' >
    </feature-block>

    <feature-block
      class='mt-4'
      tagline='Specify your availability'
      content='Set your operating hours so that appointments are made when you're available.'
      img='/placeholder.png' >
    </feature-block>

    <feature-block
      class='mt-4'
      is-left with-background
      tagline='Make one or many appointments'
      content='Create a once-off appointment or schedule a series of repeat appointments.'
      img='/placeholder.png' >
    </feature-block>

    <feature-block
      class='mt-4'
      tagline='Block off ad hoc time'
      content='Taking Friday off or have a dentist appointment? Block off your calendar and new appointments cant be made.'
      img='/placeholder.png' >
    </feature-block>

</div>
</template>

<script>
import HeroInfo from '@/components/HeroInfo'
import FeatureBox from '@/components/FeatureBox'
import FeatureBlock from '@/components/FeatureBlock'
import Callout from '@/components/Callout'
import HeroParallax from '@/components/HeroParallax'

export default {
  name: 'HomePage',
  components: {FeatureBox, FeatureBlock, Callout, HeroParallax, HeroInfo},
  data () {
    return {
      campaignParts: {
        utmSource: 'website',
        utmMedium: 'landing-page',
        utmCampaign: ''
      }
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
