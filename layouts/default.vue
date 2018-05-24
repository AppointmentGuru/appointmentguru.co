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
        <v-btn flat>Pricing</v-btn>
        <v-btn to='/help/' flat>Help</v-btn>
        <v-btn to='/blog/' flat>Blog</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn href='https://app.appointmentguru.co' flat>Login</v-btn>
        <v-btn color='green' class='elevation-0' >Sign up</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon class='hidden-md-and-up' @click='showNav = !showNav' ></v-toolbar-side-icon>
    </v-toolbar>

    <nuxt/>

    <footer class='callout mt-4' >
      <v-container >
      <v-layout wrap>
        <v-flex sm5 xs12 >
          <section class='pa-3' >
            <h4 class='subheading' >ABOUT</h4>
            <blockquote class='blockquote smaller ml-1 pl-0'>
              AppointmentGuru is a young start-up based in Johannesburg and Cape Town. We're passionate about helping small businesses succeed by taking advantage of technology, empowering them to do more with less.
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
            <v-flex xs12 sm4 class='text-sm-right pa-2'>
              <h4 class='subheading uppercase' >Connect</h4>
              <ul class="list-unstyled list-spaced mt-3 ">
                <li class="text-muted"><a href="mailto:hello@appointmentguru.co">Email us</a></li>
                <li class="text-muted"><a href="https://www.facebook.com/appointmentguru/">Find us on Facebook</a></li>
                <li class="text-muted"><a href="/get-a-guru">Book a demo</a></li>
                <li class="text-muted"><a href="https://www.youtube.com/channel/UCAZppp_Yg3dC9M1-ec8E6Tg">Watch our videos</a></li>
              </ul>
            </v-flex>
            <v-flex xs12 sm4 class='text-sm-right pa-2'>
              <h4 class='subheading uppercase' >Navigate</h4>
              <ul class="list-unstyled list-spaced mt-3">
                <li class="text-muted"><a href="/blog/">Blog</a></li>
                <li class="text-muted"><a href="/help/">Help</a></li>
                <li class="text-muted"><a href="/privacy/">Privacy</a></li>
                <li class="text-muted"><a href="/terms/">Terms &amp; Conditions</a></li>
               </ul>
            </v-flex>
            <v-flex xs12 sm4 class='text-sm-right pa-2' >
              <h4 class='subheading uppercase' >Access</h4>
              <ul class="list-unstyled list-spaced mt-3">
                <li class="text-muted"><a href="">Signup</a></li>
                <li class="text-muted"><a href="http://app.appointmentguru.co">Login</a></li>
                <li class="text-muted"><a href="/guru-does-it-for-you/">Guru Does It For You</a></li>
                <li class="text-muted"><a href="http://www.getapp.guru">Mobile apps</a></li>
                <li class="text-muted"><a href="https://bookme.guru">Find a practitioner</a></li>
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

  </v-app>
</template>
<script>
export default {
  name: 'Main',
  data () {
    return {
      showNav: false
    }
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
</style>
