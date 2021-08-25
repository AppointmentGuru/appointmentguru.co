<template>
  <v-container class='page-container' >
    <v-card>
      <v-card-title class='headline' >
        Press Kit
      </v-card-title>
      <v-card-text>
        <!-- <blockquote class="blockquote" >
          Be better at admin. Spend less time doing it.
        </blockquote> -->
        <h4>AppointmentGuru</h4>

        <blockquote class="blockquote" >
          <strong class='headline' >AppointmentGuru</strong>. One word. Capital G.
        </blockquote>

        <h4>Tagline</h4>
        <blockquote class="blockquote" >
          Be better at admin. Spend less time doing it.
        </blockquote>

        <h4>Elevator pitch</h4>
        <blockquote class="blockquote" >
          <i>AppointmentGuru</i> is the perfect medical software for Physios, Biokineticists, Personal Trainers, Chiropractors, Psychologists, Dietitians, Consultants - any business that runs on appointments.<br/>
        </blockquote>
        <h4>Key features</h4>
        <blockquote class="blockquote" >
          Appointments, online bookings, reminders, invoices, customer support, medical aid codes, integrations, birthday reminders.
        </blockquote>

        <h4>Brand assets</h4>

        <v-list class='elevation-4 mb-5 mt-3 pa-0'>
          <v-list-tile href='https://dropbox-appointmentguru.s3.eu-central-1.amazonaws.com/brand-kit.zip' target="_blank" >
            <v-list-tile-content>
              <v-list-tile-title>Download a zip file of hi-res brand assets</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action >
              <v-icon>download</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <h4>Company logo</h4>
        <center>
        <img src="https://ik.imagekit.io/appointmentguru/brand/Appointment_guru_logo_white_background.png?updatedAt=1617041015996"
          alt="AppointmentGuru logo"
          width="80%" />
        </center>

        <h4>Company logo. <small>powered by</small></h4>
        <center>
        <img src="https://ik.imagekit.io/appointmentguru/brand/Appointment_guru_final_logo-03.png?updatedAt=1617041015116"
          alt="AppointmentGuru logo - powered by AppointmentGuru"
          width="80%" />
        </center>

        <h4>Company logo. <small>vertical splash page</small></h4>
        <center>
        <img src="https://ik.imagekit.io/appointmentguru/brand/Appointment_guru_final_logo-02.png?updatedAt=1617041015117"
          alt="AppointmentGuru logo - vertical"
          width="80%" />
        </center>

        <h4>Tile logos</h4>
        <v-layout >
          <v-flex  xs12 sm6 class='text-center' >
            <v-subheader >Practitioner Logo</v-subheader>
            <img width='300' src='https://handbook.appointmentguru.co/assets/img/practitioner_icon_1024x1024.f7d688c2.png' />

            <p class='caption' >Use this logo for the flagship app for practitioners</p>

          </v-flex>
          <v-flex  xs12 sm6 class='text-center' >
            <v-subheader >Client Logo</v-subheader>
            <img width='300' src='https://handbook.appointmentguru.co/assets/img/icon_1024x1024.92cc0d27.png' />
            <p class='caption' >This is the user facing logo for the clients of our practitioners</p>
          </v-flex>
        </v-layout>

        <v-list subheader>
          <v-subheader>Colors</v-subheader>
          <template v-for='color in colors' >
            <v-list-tile :key='color.text' >
              <v-list-tile-avatar >
                <v-icon large :style='{color: color.color}' >
                  stop
                </v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html='color.text' ></v-list-tile-title>
                <v-list-tile-sub-title v-html='color.color' ></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider :key="`d-${color.text}`" ></v-divider>
          </template>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'PressKit',
  data () {
    return {
      colors: [
        { text: 'Orange', color: '#FB5B32' },
        { text: 'Charcoal', color: '#303E48' },
        { text: 'Dark blue', color: '#323c46' }
      ]
    }
  }
}
</script>