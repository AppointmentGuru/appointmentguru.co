<template>
  <v-app light>
     <v-navigation-drawer app disable-resize-watcher dark :value='showNav' >
      <v-toolbar app dark color='orange' >
        <nuxt-link to='/' >
          <img src='~/assets/icon.png' width='40px' height='40px' />
        </nuxt-link>
        <v-toolbar-title color='orange' >
          <nuxt-link to='/' style='text-decoration:none;color:white;' >
          Appointment<span style='color:black;' >Guru</span></nuxt-link>
        </v-toolbar-title>
      </v-toolbar>
      <v-list class='page-container'  >
        <v-subheader>Navigation</v-subheader>
        <v-divider></v-divider>
        <v-list-tile to='/features' >
          <v-list-tile-title >Features</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to='/pricing' >
          <v-list-tile-title >Pricing</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to='/help' >
          <v-list-tile-title >Help</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to='/blog'>
          <v-list-tile-title >Blog</v-list-tile-title>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile href='https://app.appointmentguru.co' target='_blank' >
          <v-list-tile-title >Login</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click='showsignup = true' >
          <v-list-tile-title >Sign up</v-list-tile-title>
        </v-list-tile>
      </v-list>
     </v-navigation-drawer>
    <v-toolbar app dark color='orange' >
      <nuxt-link to='/' >
        <img src='~/assets/icon.png' width='40px' height='40px' />
      </nuxt-link>
      <v-toolbar-title color='orange' class='mr-4' >
        <nuxt-link to='/' style='text-decoration:none;color:white;' >
        Appointment<span style='color:black;'>Guru</span></nuxt-link>
      </v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to='/features/' flat>Features</v-btn>
        <v-btn to='/pricing/' flat>Pricing</v-btn>
        <v-btn to='/help/' flat>Help</v-btn>
        <v-btn to='/blog/' flat>Blog</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn href='https://app.appointmentguru.co' flat>Login</v-btn>
        <v-btn @click='showsignup = true' color='green' class='elevation-0' >Sign up</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon class='hidden-md-and-up' @click='showNav = !showNav' ></v-toolbar-side-icon>
    </v-toolbar>

    <no-ssr placeholder="Loading...">
      <div id="agsignup"></div>
    </no-ssr>

    <nuxt/>

    <footer class='page-footer callout mt-4' >
      <v-container >
      <v-layout wrap>
        <v-flex sm5 xs12 >
          <section class='pa-3' >
            <blockquote class='blockquote smaller ml-1 pl-0'>
              AppointmentGuru is a South African start-up based in Johannesburg and Cape Town. We're passionate about helping small businesses succeed by taking advantage of technology, empowering them to do more with less.
            </blockquote>
          </section>
          <section class='pa-3' >
            <h4 class='subheading' >MOBILE APP FOR CLIENTS</h4>
            <blockquote class='blockquote smaller ml-1 pl-0'>
              Clients of AppointmentGuru practitioners can book and manage their appointments from our mobile app.
            </blockquote>
          </section>
          <section>
            <div >
              <a class="app-link" id="appleLink"
                href="https://itunes.apple.com/us/app/appointment-guru/id1163805838?mt=8">
                <img class="ml-3 app-icon img-responsive" src="https://getapp.guru/template/badgeappstore.png">
              </a>
              <a class="app-link" id="googleLink" href="https://play.google.com/store/apps/details?id=za.co.AppointmentGuru&amp;utm_source=getapp.guru&amp;pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                <img class="ml-3 app-icon img-responsive" src="https://getapp.guru/template/badgegoogleplay.png">
              </a>
            </div>
          </section>
        </v-flex>
        <v-flex sm7 xs12 >
          <v-layout class='mt-3' row wrap >
            <v-flex xs6 sm4 class='text-sm-right pa-3'>
            <h4 class='subheading uppercase' >About us</h4>
              <ul class="list-unstyled list-spaced mt-3 ">
                <li class="text-muted"><a href="/features/">Features</a></li>
                <li class="text-muted"><a href="/pricing/">Pricing</a></li>
                <li class="text-muted"><a href="/features/apps/">Apps</a></li>
                <li class="text-muted"><a href="/blog/">Blog</a></li>
                <li class="text-muted"><a href="https://www.youtube.com/channel/UCAZppp_Yg3dC9M1-ec8E6Tg">Watch our videos</a></li>
              </ul>
            </v-flex>
            <v-flex xs6 sm4 class='text-sm-right pa-3'>
            <h4 class='subheading uppercase' >Information</h4>
              <ul class="list-unstyled list-spaced mt-3">
                <li class="text-muted">
                  <a href="/terms/">Terms</a></li>
                <li class="text-muted"><a href="/privacy/">Privacy</a></li>
                <li class="text-muted"><a href="/popia/">POPIA</a></li>
                <li class="text-muted"><a href="/cookies/">Cookies</a></li>
                <li class="text-muted"><a href="https://appointmentguru.trust.page" target="_blank" >Trust</a></li>

                <li class="text-muted"><a href="/press-kit/">Press Kit</a></li>
                <li class="text-muted"><a href="https://appointmentguru.freshstatus.io" target="_blank" >System Status</a></li>
               </ul>
            </v-flex>
            <v-flex xs6 sm4 class='text-sm-right pa-3' >
              <h4 class='subheading uppercase' >Connect</h4>
              <ul class="list-unstyled list-spaced mt-3">
              <li class="text-muted"><a href="/help/">Help</a></li>
              <li class="text-muted"><a href="/contact-us">Contact us</a></li>
              <li class="text-muted"><a href="mailto:support@appointmentguru.co">Email us</a></li>
              <li class="text-muted"><a href="https://www.facebook.com/appointmentguru/">Facebook</a></li>
              <li class="text-muted"><a href="https://www.instagram.com/appointmentguru/">Instagram</a></li>
              <li class="text-muted"><a href="/get-a-guru">Book a demo</a></li>
              </ul>
            </v-flex>
          </v-layout>
          <v-layout class='text-xs-right' >
            <v-spacer></v-spacer>
            <img class='mt-4' align='right' src='~/assets/logo-full-dark.png' />
          </v-layout>
        </v-flex>
      </v-layout>
      </v-container>
      <v-divider dark></v-divider>
      <v-footer dark class='pl-3 pr-3'>
        <v-spacer></v-spacer>
        &copy; AppointmentGuru {{ new Date().getFullYear() }}</v-footer>
    </footer>

    <v-dialog :fullscreen='isMobile' v-model="showsignup" max-width="500px" >
      <v-card>
        <v-toolbar class='orange lighten-2' dark>
          <v-toolbar-title >
          Get started with AppointmentGuru
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-side-icon >
            <v-btn icon @click='showsignup=false' ><v-icon>close</v-icon></v-btn>
          </v-toolbar-side-icon>
        </v-toolbar>
        <div id="agsignup"></div>
      </v-card>
    </v-dialog>
    <cookies />
  </v-app>
</template>
<script>
import Cookies from '@/components/Cookies.vue'
export default {
  name: 'Main',
  data () {
    return {
      showNav: false,
      showsignup: false
    }
  },
  components: {Cookies},
  mounted () {
    const urlParams = new URLSearchParams(window.location.search);
    const referrer = urlParams.get('utm_campaign');
    let referrers = this.$cookies.get('referrers')
    if (!referrers) { referrers = [] }
    if (referrer && referrers.indexOf(referrer) === -1) {
      referrers.push(referrer)
      let host = window.location.host
      let opts = {
        "domain": host,
        "path": "/"
      }
      this.$cookies.set('referrers', referrers, opts)
    }
  },
  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.smAndDown
    },
    signupDialog () {
      return this.$store.state.showSignupDialog
    }
  },
  watch: {
    signupDialog () {
      this.showsignup = true
      this.$ga.event({eventCategory: 'signup', eventAction: 'startSignup'})
    }
  },
  head: {
    script: [
      {
        src: 'https://get-started.netlify.com/static/js/app.js',
        // src: 'https://s3.eu-central-1.amazonaws.com/static.appointmentguru.co/signup/static/js/app.js',
        body: true,
        defer: true
      }
    ]
  }
}
</script>
<style>
@media only screen and (min-width: 1264px) {
  .container {
    max-width: 900px !important;
  }
}
.page-container {
  margin-top:60px;
}
.list-unstyled {list-style: none;}
.list-unstyled li a {
  color: white !important;
  text-decoration: none;
}
.uppercase { text-transform: uppercase; }
.callout {
  background-color:#262f36;color:white;
  border-top: solid 4px #E65100;
}
.app-icon { max-width: 140px; }
.img-responsive{ width: 100%; }

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

.slide-enter-active, .slide-leave-active {
  transition: height .5s
}
.slide-enter, .slide-leave-to /* .fade-leave-active in <2.1.8 */ {
  height: 0px;
}
</style>
