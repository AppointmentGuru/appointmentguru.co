<template>
<section class='page-container' >
  <gradient-jumbotron
    :gradient='gradient'
    headline='Features'
    tagline='Learn more about what AppointmentGuru offers and how it can work for your business' >
  </gradient-jumbotron>
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
  data () {
    return {
      gradient: 'to top, #7B1FA2, #E1BEE7',
      features: [
        {
          title: 'Appointments',
          link: '/features/appointments',
          // description: 'Get total comfort that you are managing your appointments in the best way possible'
          icon: 'event'
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
          link: '/features/automations',
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
          link: '/features/trainging-and-support',
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
