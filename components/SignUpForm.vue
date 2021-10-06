<template>
<v-form action="https://go.appointmentguru.co/#/" >
<center>
  <h1 class="display-3 mb-4" >
    Get started for free
    <!-- url: {{appUrl}} -->
  </h1>
<v-card flat class='grey lighten-5' max-width='500px;' >
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
    <v-btn text flat color="primary" large block class="mr-2" >Watch a video</v-btn>
    <v-btn text flat color="primary" large block class="ml-2" >Book a demo</v-btn>
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
