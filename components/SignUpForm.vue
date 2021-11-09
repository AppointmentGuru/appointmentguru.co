<template>
<v-form action="https://go.appointmentguru.co/#/" >
<center>
  <h1 class="display-1 hidden-sm-and-up mb-4" >
    Get started for free
    <!-- url: {{appUrl}} -->
  </h1>
  <h1 class="display-3 hidden-xs-only mb-4" >
    Get started for free
  </h1>
<v-card flat class='grey lighten-5' width='500px' style='max-width:90%;' >
  <v-card-title >
    <v-text-field solo
      type="email" name="email"
      label="Your work email address" />
    <v-btn large
      :loading='loading'
      type="submit"
      color="primary"
      class="hidden-xs-only"
      @click='loading=true' >Get started</v-btn>
  </v-card-title>
  <v-card-actions >
    <v-btn large block
      :loading='loading'
      type="submit"
      color="primary"
      class="hidden-sm-and-up mx-2"
      @click='loading=true' >Get started</v-btn>
  </v-card-actions>
  <v-card-actions >
    <v-spacer/>
    Need more info?
    <v-spacer/>
  </v-card-actions>
  <v-card-actions >
    <!-- <v-btn text flat color="primary" large block class="mr-2" >Watch a video
      <v-icon small class='ml-2' >smart_display</v-icon>
    </v-btn> -->
    <v-spacer/>
    <v-btn to='/get-a-guru/' text outline round color="primary"  >Book a demo
      <v-icon small class='ml-2' >live_tv</v-icon>
    </v-btn>
    <v-spacer/>
  </v-card-actions>
</v-card>
</center>
</v-form>
</template>
<script>
export default {
  name: 'SignUpForm',
  data () {
    return {
      // appUrl: process.env.GURU_URL,
      loading: false
    }
  }
}
</script>
