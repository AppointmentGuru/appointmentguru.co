<template>
<section class='page-container' >
  <!-- <gradient-jumbotron
    :gradient='gradient'
    headline='Features'
    tagline='Learn more about what AppointmentGuru offers and how it can work for your business' >
  </gradient-jumbotron> -->
  <v-parallax
    height='400' class='pa-0 ma-0 features'
    src='https://images.unsplash.com/photo-1511371496040-1fb40794e675?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=362c0aaebcb9f87edf9f84b50547c090&auto=format&fit=crop&w=1949&q=80' >
    <v-spacer></v-spacer>
    <h1 class='display-1 text-xs-right pa-2 pr-4 ma-0'>{{ $t('title') }}</h1>
  </v-parallax>
  <v-container>
    <v-layout row wrap>
      <v-flex sm4 xs12
        v-for='feature in features' :key='feature.title' >
        <v-card class='ma-2' :to='feature.link' >
          <v-card-text class = 'text-xs-center' >
            <v-avatar color='elevation-20 mt-4' >
              <v-icon v-if='feature.icon' color='orange darken-2' large >{{feature.icon}}</v-icon>
              <v-icon v-else large >bookmark</v-icon>
            </v-avatar>
            <h1 class='headline mt-4' >{{feature.title}}</h1>
            <blockquote class='blockquote text-xs-justify pl-0' >{{feature.description}}</blockquote>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</section>
</template>
<script>
import GradientJumbotron from '@/components/GradientJumbotron'

export default {
  name: 'FeaturesPage',
  components: {GradientJumbotron},
  i18n: {
    messages: {
      en: {
        title: 'AppointmentGuru Features'
      }
    }
  },
  data () {
    return {
      gradient: 'to top, #7B1FA2, #E1BEE7',
      features: [
        {
          title: 'Appointments',
          link: '/features/appointments',
          // description: 'Get total comfort that you are managing your appointments in the best way possible'
          icon: 'event' // comes from: https://material.io/tools/icons/
        },
        {
          title: 'Notifications',
          link: '/features/notifications',
          description: '',
          icon: 'notifications'
        },
        {
          title: 'Client self-service',
          link: '/features/client-self-service',
          description: '',
          icon: 'build'
        },
        {
          title: 'Get paid',
          link: '/features/get-paid',
          icon: 'credit_card',
          description: ''
        },
        {
          title: 'Automation',
          link: '/features/automation',
          icon: 'power',
          description: ''
        },
        {
          title: 'Keep track',
          link: '/features/keep-track',
          icon: 'check',
          description: ''
        },
        {
          title: 'Apps',
          link: '/features/apps',
          icon: 'mobile_friendly',
          description: ''
        },
        {
          title: 'Website integration',
          link: '/features/website-integration',
          icon: 'important_devices',
          description: ''
        },
        {
          title: 'Calendar syncing',
          link: '/features/calendar-syncing',
          icon: 'calendar_today',
          description: ''
        },
        {
          title: 'Marketing',
          link: '/features/marketing',
          icon: 'trending_up',
          description: ''
        },
        {
          title: 'Training and support',
          link: '/features/training-and-support',
          icon: 'help_outline',
          description: ''
        },
        {
          title: 'Refer and earn',
          link: '/features/refer-and-earn',
          icon: 'group_add',
          description: ''
        }
      ]
    }
  }
}
</script>
<style >
.features .parallax__content {
  padding: 0px !important;
  margin: 0px !important;
}
.features h1 {
  background:rgba(0,0,0,0.6);
}
</style>
