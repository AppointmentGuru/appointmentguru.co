<template>
<div >
  <template v-for='(block, index) in blocks'  >
    <v-container v-if='block.inContainer' :key='index' >
      <component :is='block.name' v-bind='block.props' :class='block.classes' />
    </v-container>
    <component v-else :is='block.name' v-bind='block.props' :key='index' :class='block.classes' />
  </template>

</div>
</template>

<script>
import FeatureBox from '@/components/FeatureBox'
import FeatureBlock from '@/components/FeatureBlock'
import Callout from '@/components/Callout'
import HeroParallax from '@/components/HeroParallax'
import Testimonial from '@/components/Testimonial'

export default {
  name: 'HomePage',
  components: {FeatureBox, FeatureBlock, Callout, HeroParallax, Testimonial},
  data () {
    return {
      blocks: [
        {
          name: 'HeroParallax',
          props: {
            headline: 'Be better at admin.<br/>Spend less time doing it.',
            tagline: 'Appointments. Invoices. Clients. More.',
            image: '~/assets/calendar-mobile-laptop.png',
            backgroundImage: 'https://images.unsplash.com/photo-1517497052582-25e6fe8ec001?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a796c72fc4b68772c227b39dc6c3754&auto=format&fit=crop&w=1950&q=80'
          }
        },
        {
          name: Callout,
          props: {
            callout: 'AppointmentGuru is perfect for Physios, Biokinetisists, Personal Trainers, Chiropractors, Psychologists, Dietitians, Consultants and any appointment based business.'
          }
        },
        {
          name: FeatureBox,
          inContainer: true,
          props: {
            features: [
              {
                icon: 'event',
                title: 'Appointments',
                description: 'Manage your appointments like a pro with online bookings, automated notifications, integrated online calendar and more'
              },
              {
                icon: 'bookmark',
                title: 'Invoices',
                description: 'Manage your appointments like a pro with online bookings, automated notifications, integrated online calendar and more'
              },
              {
                icon: 'person',
                title: 'Client management',
                description: 'Manage your appointments like a pro with online bookings, automated notifications, integrated online calendar and more'
              }
            ]
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: 'mt-4',
            isLeft: true,
            withBackground: true,
            headline: 'RUN YOUR BUSINESS LIKE A PRO',
            tagline: 'Manage your bookings on the go',
            content: 'Use our mobile and web app to manage your appointments, invoices, calendar, reminders and clients.',
            img: 'https://appointmentguru.co/assets/img/homepage/manage-appointments-v2.png'
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: 'mt-4',
            headline: 'Automatically Generated Invoices',
            tagline: 'Send professional invoices that clients, bookkeepers and medical aids will love',
            content: 'Industry-standard invoices sent at the touch of a button. Include extra medical info like ICD-10, NAPPI and procedure codes.',
            img: 'https://appointmentguru.co/assets/img/homepage/invoicing.png'
          }
        },
        {
          name: Testimonial,
          inContainer: true,
          props: {
            classes: 'elevation-2',
            quote: "I don't think I could imagine running my business without AppointmentGuru anymore. I don't think I could imaging running my business without AppointmentGuru anymore",
            authorName: 'Sean Johnson',
            authorBio: 'Natural Therapist',
            link: 'http://bookme.guru/structuralmedicine/',
            linkText: 'Book now with the Center for Structural Medicine',
            image: 'https://media-appointmentguru.s3.amazonaws.com/practitioner/images/7/profile.png'
          }
        }
      ]
    }
  }
}
</script>

<style>
@media only screen and (min-width: 1904px) {
  .container {
    max-width: 1185px !important;
  }
}
@media only screen and (max-width: 599px) {
  .container {
      padding: 0px;
  }
}
.blockquote.smaller { font-size: 16px; }

</style>
