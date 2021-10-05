<template>
<v-form action="https://go.appointmentguru.co/#/" >
<center>
  <h1 class="display-3 mb-4" >
    Get started for free
  </h1>
<v-card flat class='grey lighten-5' max-width='500px;' >
  <v-card-title >
    <v-text-field solo
      type="email" name="email"
      label="Your work email address" />
    <v-btn color="primary" large class="hidden-xs-only" >Get started</v-btn>
  </v-card-title>
  <v-card-actions >
    <v-btn color="primary" large block class="hidden-sm-and-up mx-2" >Get started</v-btn>
  </v-card-actions>
  <v-card-actions >
    <v-btn text flat color="primary" large block class="mr-2" >Watch a video</v-btn>
    <v-btn text flat color="primary" large block class="ml-2" >Request a demo</v-btn>
  </v-card-actions>
</v-card>
</center>
</v-form>
</template>
<script>
export default {
  name: 'SignUpForm'
}
</script>
