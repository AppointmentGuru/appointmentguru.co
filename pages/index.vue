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
  head () {
    return {
      title: 'AppointmentGuru - Be better at admin, spend less time doing it',
      meta: [
        { hid: 'description', name: 'description', content: 'AppointmentGuru helps you to automate appointments, invoices and customer management' }
      ]
    }
  },
  data () {
    return {
      blocks: [
        {
          name: 'HeroParallax',
          props: {
            headline: 'Be better at admin.<br/>Spend less time doing it.',
            tagline: 'Appointments. Invoices. Clients. More.',
            image: '~/assets/calendar-mobile-laptop.png',
            // backgroundImage: 'https://images.unsplash.com/photo-1517497052582-25e6fe8ec001?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a796c72fc4b68772c227b39dc6c3754&auto=format&fit=crop&w=1950&q=80'
            // backgroundImage: 'https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=35840c5a386390076c95d47b745ae459&auto=format&fit=crop&w=1950&q=80'
            // backgroundImage: 'https://images.unsplash.com/photo-1496167117681-944f702be1f4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a9e41e445772471708b74b0835e4c35&auto=format&fit=crop&w=2378&q=80'
            // backgroundImage: 'https://images.unsplash.com/photo-1485714104612-01bce6019729?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e63a299ccd3b0c5cd4149a4d06a2c9e8&auto=format&fit=crop&w=1993&q=80'
            // backgroundImage: 'https://images.unsplash.com/photo-1501696461415-6bd6660c6742?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=defe121eb958a24b9e2c4f2041897339&auto=format&fit=crop&w=1868&q=80'
            backgroundImage: 'https://images.unsplash.com/photo-1515136194762-84618729b8df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f26f412a62f4e342b739989b9e8aa308&auto=format&fit=crop&w=1950&q=80'
            // backgroundImage: 'https://images.unsplash.com/photo-1463134836706-8bcc60f7d78b?ixlib=rb-0.3.5&s=ae9b36a5009e585b400b2f5370ff9858&auto=format&fit=crop&w=1950&q=80'
            //backgroundImage: 'https://images.unsplash.com/photo-1515386078358-daf436633fba?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4acb1b2241487c257e65c113766b8e46&auto=format&fit=crop&w=1949&q=80'
          }
        },
        {
          name: Callout,
          props: {
            callout: 'AppointmentGuru is perfect for Physios, Biokineticists, Personal Trainers, Chiropractors, Psychologists, Dietitians, Consultants and any appointment-based business.'
          }
        },
        {
          name: FeatureBox,
          inContainer: true,
          props: {
            rowSize: 3,
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
            quote: "I don't think I could imagine running my business without AppointmentGuru anymore.",
            authorName: 'Sean Johnson',
            authorBio: 'Natural Therapist',
            link: 'http://bookme.guru/structuralmedicine/',
            linkText: 'Book now with the Centre for Structural Medicine',
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
