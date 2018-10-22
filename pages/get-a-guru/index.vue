<template>
<v-container class='page-container' >
  <h1 class=' mx-0 headline'>{{ $t('title') }}</h1>
  <blockquote class='blockquote mx-0 px-0' >{{ $t('description') }}</blockquote>
  <v-layout row wrap >
    <v-flex xs12 sm6 >
      <v-list two-line class='elevation-4 ma-0 pb-0'>
        <v-subheader class='subheading'>{{ $t('list.title') }}</v-subheader>
        <v-divider></v-divider>
        <template v-for='guru in gurus' >
        <v-list-tile :key='guru.id' @click='selectedPractitioner = guru' >
          <v-list-tile-avatar >
            <img :src='guru.img' />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{guru.title}}</v-list-tile-title>
            <v-list-tile-sub-title>{{guru.region}}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon >chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider :key='`d-${guru.id}`' ></v-divider>
        </template>
      </v-list>
    </v-flex>
    <v-flex xs12 sm6 >
      <iframe
        :class='iframeClasses'
        v-if='selectedPractitioner'
        :src='iframeSrc' >
      </iframe>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  name: 'GetAGuru',
  data () {
    return {
      baseUrl: 'https://do.bookme.guru/',
      selectedPractitioner: null,
      gurus: [
        {
          title: 'Christo Crampton',
          region: 'Northern Suburbs, Johannesburg',
          id: 1,
          img: 'https://service.imageboss.me/cover/200x200/https://media-appointmentguru.s3.amazonaws.com:443/practitioner/images/1/profile.jpeg'
        },
        {
          title: 'Juan Villamizar',
          region: 'Northern Suburbs, Johannesburg',
          id: 771,
          img: 'https://service.imageboss.me/cover/200x200/https://media-appointmentguru.s3.amazonaws.com:443/practitioner/images/771/profile.jpeg'
        },
        {
          title: 'Marije Pierson',
          region: 'Cape Town',
          id: 125,
          img: 'https://service.imageboss.me/cover/200x200/https://media-appointmentguru.s3.amazonaws.com:443/practitioner/images/125/profile.png'
        }
      ]
    }
  },
  computed: {
    iframeClasses () {
      if (this.$vuetify.breakpoint.smAndUp) {
        return 'ml-4 widget elevation-4'
      }
      return 'mt-4 widget elevation-4'
    },
    iframeSrc () {
      if (this.selectedPractitioner) {
        return `${this.baseUrl}?practitioner=${this.selectedPractitioner.id}`
      }
    }
  },
  i18n: {
    messages: {
      en: {
        title: 'Book a demo',
        description: 'We are available to run your through AppointmentGuru and how it can work for you. Demo\'s are one on one sessions and are available either online or in person (depending on where you are)',
        list: {
          title: 'Who would you like to book with?'
        }
      }
    }
  }
}
</script>

<style>
.widget {
  width:100%;border:0px;min-height:600px;
}
</style>
