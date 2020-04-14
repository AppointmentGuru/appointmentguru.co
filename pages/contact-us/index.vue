<template  >
  <v-container class='page-container' >
    <v-layout row >
      <v-flex xs12 sm6 md7 >
        <h2 class='mt-4'>Submit a support request</h2>
        <iframe
          title="Feedback Form"
          class="freshwidget-embedded-form"
          id="freshwidget-embedded-form"
          src="https://appointmentguru.freshdesk.com/widgets/feedback_widget/new?&widgetType=embedded&submitTitle=Submit&submitThanks=Thank-you+for+contacting+support.+You+should+expect+a+reply+within+24+hours.+Please+feel+free+to+browse+our+help+documentation+at%3A+https%3A%2F%2Fappointmentguru.co%2Fhelp%2F+in+the+meantime%0D%0A%0D%0A&screenshot=No&searchArea=no" scrolling="no" height="500px" width="100%" frameborder="0" >
        </iframe>
      </v-flex>
      <v-flex xs12 sm6 md5 >
        <v-list class='elevation-4 ml-4 mt-4 pa-0' >
          <v-subheader>Our support channels</v-subheader>
          <v-divider></v-divider>
          <template v-for='channel in channels' >
            <v-list-tile
              @click='channel.on'
              :href='channel.link' :key='channel.id' >
              <v-list-tile-content>
                <v-list-tile-title v-html='channel.title'></v-list-tile-title>
                <v-list-tile-sub-title v-html='channel.subtitle'></v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-avatar >
                <v-icon small >{{channel.icon}}</v-icon>
              </v-list-tile-avatar>
            </v-list-tile>
            <v-divider :key='`div-${channel.id}`' ></v-divider>
          </template>
          <v-footer class='px-3'>
            <v-icon small class='mr-2' >favorite</v-icon>
            We're here to help</v-footer>
        </v-list>
        <v-subheader class='ml-2' >Operating hours</v-subheader>
        <div class='ml-4'>
          Our operating hours are <strong>9am to 5pm SAST (South African)</strong>.
          <br/>
          You should expect a response <strong>within 1 working day</strong>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ContactUs',
  computed: {
  },
  methods: {
    noop () {}
  },
  data () {
    return {
      channels: [
        {
          id: 'kb',
          title: 'Online knowledge base',
          subtitle: 'https://appointmentguru.co/help',
          link: '/help',
          on: this.noop,
          icon: 'language'
        },
        {
          id: 'email',
          title: 'Email us',
          subtitle: 'support@appointmentguru.co',
          link: 'mailto:support@appointmentguru.co',
          on: this.noop,
          icon: 'send'
        },
        {
          id: 'demo',
          title: 'Request a demo',
          subtitle: 'https://appointmentguru.co/get-a-guru',
          link: '/get-a-guru',
          on: this.noop,
          icon: 'school'
        },
        {
          id: 'chat',
          title: 'Chat',
          subtitle: 'Chat with customer support',
          on: () => {
            if (drift) {
              drift.api.sidebar.open()
            }
          },
          icon: 'message'
        }
      ]
    }
  }
}
</script>

<style>
ul, ol { margin-left: 20px; }
</style>
