<template>
<div>
  <v-btn fab fixed bottom left color='info'
    @click='dialog=true' >
    <img src='https://ik.imagekit.io/appointmentguru/images/cookie1600.png?tr=n-avatar_md'
      height='50px' width='50px' alt='Cookie policy' />
  </v-btn>
  <v-btn fab fixed bottom right color='info'
    v-if='!driftEnabled'
    @click='enableDrift' >
    <v-icon >chat_bubble</v-icon>
  </v-btn>
  <v-dialog
    v-model="dialog" transition="dialog-bottom-transition" >
    <v-card>
      <v-card-title class='subtitle grey lighten-4 py-2' >
        AppointmentGuru Cookie policy
        <v-spacer/>
        <v-btn icon @click='dialog=false' ><v-icon>close</v-icon></v-btn>
      </v-card-title>
      <v-divider/>
      <v-card-text>
        <h3>Required cookies</h3>
        <p>We make minimal use of cookies to enable functionality such as logging in.</p>
        <h3>Important cookies</h3>
        <p>We use some cookies to help provide us to offer you a customized response - e.g.: so that we don't ask you the same question multiple times or that we can remember your configurations.</p>
        <h3>Tracking cookies</h3>
        <p>
          We use Google Analytics to understand how users use our website so that we can optimize our product.<br/>
          You can turn off Google analytics here:
          <v-switch class='mt-3' persistent-hint
            v-model='onoff'
            label='Enable Google Analytics'
            :hint='gaHint' />
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn @click='acceptCookies' flat >Accept cookies</v-btn>
        <v-spacer/>
        <v-btn flat href='/cookies' >Read our cookie policy</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-footer v-if='showFooter' fixed bottom class="px-5 hidden-xs-only grey darken-3 white--text" >
    <span class='ml-4' >We use cookies to ensure the functionality of our website and application.</span>
    <v-spacer/>
    <v-btn @click='acceptCookies' flat small outline dark >accept cookies</v-btn>
    <v-btn @click='dialog=true' flat small outline dark >configure</v-btn>
    <v-btn href='/cookies/' flat small dark >cookie policy</v-btn>
  </v-footer>
</div>
</template>
<script>
export default {
  name: 'Cookies',
  data () {
    return {
      onoff: true,
      dialog: false,
      showFooter: true,
      driftEnabled: false
    }
  },
  mounted () {
    let footer = window.localStorage.getItem('showCookieFooter')
    if (footer === 'false') { this.showFooter = false }
  },
  watch: {
    onoff () {
      // if (!this.ga) { return false }
      if (this.onoff) {
        console.log('turning google analytics on')
        this.$ga.enable()
      } else {
        console.log('turning google analytics off')
        this.$ga.disable()
      }
    }
  },
  computed: {
    gaHint () {
      if (this.onoff === true) {
        return 'Google Analytics is enabled'
      }
      return 'Google Analytics is disabled'
    }
  },
  methods: {
    enableDrift () {
      this.driftEnabled = true
      drift.load('8b6spivfgiz7')
    },
    acceptCookies () {
      window.localStorage.setItem('showCookieFooter', false)
      this.showFooter = false
      this.dialog = false
    }
  }
}
</script>
