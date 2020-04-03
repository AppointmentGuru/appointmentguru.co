<template  >
  <v-container class='page-container' >


    <h2>Submit a support request</h2>
    <iframe
      title="Feedback Form"
      class="freshwidget-embedded-form"
      id="freshwidget-embedded-form"
      src="https://appointmentguru.freshdesk.com/widgets/feedback_widget/new?&widgetType=embedded&submitTitle=Submit&submitThanks=Thank-you+for+contacting+support.+You+should+expect+a+reply+within+24+hours.+Please+feel+free+to+browse+our+help+documentation+at%3A+https%3A%2F%2Fappointmentguru.co%2Fhelp%2F+in+the+meantime%0D%0A%0D%0A&screenshot=No&searchArea=no" scrolling="no" height="500px" width="100%" frameborder="0" >
    </iframe>

  </v-container>
</template>

<script>
export default {
  name: 'ContactUs',
  computed: {
  }
}
</script>

<style>
ul, ol { margin-left: 20px; }
</style>
