<template>
<div >

  <v-container >
    <v-layout row wrap >
      <v-flex xs12 class='text-center pt-5' >
        <!-- <v-btn absolute fab bottom center >
          <v-icon>keyboard_arrow_down</v-icon>
        </v-btn> -->
        <center>

        <picture>
            <source :srcset="`${heroImage}?tr=f-avif`" type="image/avif" >
            <source :srcset="`${heroImage}?tr=f-webp`" type="image/webp" >
            <img
              alt="AppointmentGuru dashboard screenshot"
              class='mt-4'
              width='90%'
              style="max-width:700px;"
              :src="heroImage" />
        </picture>

        <!-- <img class="mt-5"
          width="90%"
          alt="AppointmentGuru dashboard screenshot"
          src="https://ik.imagekit.io/appointmentguru/landing-pages/home/apopointmentguru-hero-3_jCzkqCt3C.png" /> -->

        </center>
      </v-flex>

      <v-flex xs12 class='text-center pb-5' >
        <sign-up-form />
      </v-flex>
    </v-layout>
  </v-container>

  <template v-for='(block, index) in blocks'  >
    <div name='foo' :class='block.props.classes' :key='index' >
      <v-container v-if='block.inContainer' >
          <component :is='block.name' v-bind='block.props' />
      </v-container>
      <component v-else :is='block.name' v-bind='block.props' />
    </div>
  </template>
  <v-parallax :src='backgroundImage' height='400' >
    <v-flex class='text-xs-center mt-4' >
      <h3 class='headline mb-5 mt-3' >
        Try AppointmentGuru for free
      </h3>
      <v-btn style='z-index:1;'
        href='https://go.appointmentguru.co' target='_blank'
        dark large
        class='mt-4 elevation-20'
        color='orange' >Get started</v-btn>

      <div>
        <picture>
            <source :srcset="`${flatImage}?tr=f-avif`" type="image/avif" >
            <source :srcset="`${flatImage}?tr=f-webp`" type="image/webp" >
            <img class="mt-5"
              :src="flatImage"
              height='100px;'
              style='max-width:100%;'
              alt="AppointmentGuru calendar screenshot" >
        </picture>
      </div>

    </v-flex>
  </v-parallax>
</div>
</template>

<script>
import FeatureBox from '@/components/FeatureBox'
import FeatureBlock from '@/components/FeatureBlock'
import Callout from '@/components/Callout'
import HeroParallax from '@/components/HeroParallax'
import Testimonial from '@/components/Testimonial'
import VideoHeroParallax from '@/components/VideoHeroParallax'
import SignUpForm from "@/components/SignUpForm";

export default {
  name: 'HomePage',
  components: {
    FeatureBox,
    FeatureBlock,
    Callout,
    HeroParallax,
    VideoHeroParallax,
    Testimonial,
    SignUpForm
  },
  head () {
    return {
      title: 'AppointmentGuru - Be better at admin, spend less time doing it',
      meta: [
        { hid: 'description', name: 'description', content: 'AppointmentGuru helps you to automate appointments, invoices, statements and customer management. It has an online calendar, automated notifications and mobile apps for you and your clients to book and manage their appointments.' }
      ]
    }
  },
  data () {
    return {
      flatImage: 'https://ik.imagekit.io/appointmentguru/landing-pages/home/iphone-x-flat.png',
      backgroundImage: 'https://images.unsplash.com/photo-1515136194762-84618729b8df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f26f412a62f4e342b739989b9e8aa308&auto=format&fit=crop&w=1950&q=80',
      heroImage: 'https://ik.imagekit.io/appointmentguru/landing-pages/appointmentguru-screens.png',
      // heroImage: 'https://ik.imagekit.io/appointmentguru/landing-pages/home/apopointmentguru-hero-3.png',
      lazyHeroImage: 'https://ik.imagekit.io/appointmentguru/landing-pages/home/apopointmentguru-hero-3.png?tr=bl-6',
      blocks: [
        // {
        //   name: 'HeroParallax',
        //   props: {
        //     headline: 'Be better at admin.<br/>Spend less time doing it.',
        //     tagline: 'Appointments. Invoices. Clients. More.',
        //     image: 'https://ik.imagekit.io/appointmentguru/landing-pages/home/apopointmentguru-hero-3_jCzkqCt3C.png',
        //     // image: 'https://ik.imagekit.io/appointmentguru/landing-pages/home/appointmentguru-hero-home_Q3koIsDWE.png',
        //     // backgroundImage: 'https://images.unsplash.com/photo-1517497052582-25e6fe8ec001?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a796c72fc4b68772c227b39dc6c3754&auto=format&fit=crop&w=1950&q=80'
        //     // backgroundImage: 'https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=35840c5a386390076c95d47b745ae459&auto=format&fit=crop&w=1950&q=80'
        //     // backgroundImage: 'https://images.unsplash.com/photo-1496167117681-944f702be1f4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a9e41e445772471708b74b0835e4c35&auto=format&fit=crop&w=2378&q=80'
        //     // backgroundImage: 'https://images.unsplash.com/photo-1485714104612-01bce6019729?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e63a299ccd3b0c5cd4149a4d06a2c9e8&auto=format&fit=crop&w=1993&q=80'
        //     // backgroundImage: 'https://images.unsplash.com/photo-1501696461415-6bd6660c6742?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=defe121eb958a24b9e2c4f2041897339&auto=format&fit=crop&w=1868&q=80'
        //     backgroundImage: 'https://images.unsplash.com/photo-1515136194762-84618729b8df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f26f412a62f4e342b739989b9e8aa308&auto=format&fit=crop&w=1950&q=80'
        //     // backgroundImage: 'https://images.unsplash.com/photo-1463134836706-8bcc60f7d78b?ixlib=rb-0.3.5&s=ae9b36a5009e585b400b2f5370ff9858&auto=format&fit=crop&w=1950&q=80'
        //     //backgroundImage: 'https://images.unsplash.com/photo-1515386078358-daf436633fba?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4acb1b2241487c257e65c113766b8e46&auto=format&fit=crop&w=1949&q=80'
        //   }
        // },
        {
        name: Testimonial,
        inContainer: true,
        props: {
          classes: 'elevation-2',
          quote: "This company has changed how my clinic runs over the last 2 years. Bookings, invoicing and anything admin - AppointmentGuru is a necessity for any modern business in today's technology-driven workplace.",
          authorName: 'Sean Johnson',
          authorBio: 'Natural Therapist',
          link: 'http://bookme.guru/structuralmedicine/',
          linkText: 'Book now with the Centre for Structural Medicine',
          image: 'https://media-appointmentguru.s3.amazonaws.com/practitioner/images/7/profile.jpeg'
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: 'mt-0',
            isLeft: true,
            withBackground: true,
            tagline: 'More than just an appointment manager app',
            content: 'Automate your appointment management, send good-looking invoices, enable online scheduling, be better at running your business, free up more time.',
            img: 'https://ik.imagekit.io/appointmentguru/landing-pages/home/lp-feature-invoice-appointments-client.png'
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: 'mt-4',
            tagline: 'Manage your business on the go',
            content: 'Keep up-to-date with your daily appointment maker and invoicing with the AppointmentGuru app.',
            img: 'https://ik.imagekit.io/appointmentguru/landing-pages/home/create-on-the-go.png'
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: 'mt-4',
            isLeft: true,
            withBackground: true,
            tagline: 'Lessen no-shows with notifications',
            content: 'Automatically send customisable SMS or email notifications to confirm, remind, reschedule and cancel appointments through your online appointment system.',
            img: 'img/notification.png'
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: ['mt-4', 'invoicing'],
            tagline: 'Built-in invoicing plus an integration with SnapScan and Yoco',
            content: "Industry-standard invoices generated from your appointments that can include medical ICD-10, NAPPI and procedure codes. Add physical products and accept credit card payments with AppointmentGuru's SnapScan and Yoco integrations.",
            img: 'https://ik.imagekit.io/appointmentguru/landing-pages/home/invoice-example.png'
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: 'mt-4',
            isLeft: true,
            withBackground: true,
            tagline: 'Empower and know your clients',
            content: 'Clients can book and manage their appointments with the AppointmentGuru app. Data, notes and personal details are all safely stored on our platform.',
            img: 'https://ik.imagekit.io/appointmentguru/landing-pages/home/website-booking-page.png'
          }
        },
        {
          name: Callout,
          props: {
            callout: 'AppointmentGuru is the perfect medical software for Physios, Biokineticists, Personal Trainers, Chiropractors, Psychologists, Dietitians, Consultants - any business that makes use of an online appointment system.'
          }
        }
      ]
    }
  }
}
</script>

<style>

.feature-block h1 {
  font-size: 32px;
}
.feature-block h2.headline {
  font-size: 32px !important;
  margin-top: 80px;
}
.invoicing .feature-block h2.headline {
  font-size: 32px !important;
  margin-top: 0px;
}
.feature-block blockquote.blockquote {
  font-size: 28px !important;
}
.invoicing .feature-block blockquote.blockquote {
  font-size: 26px !important;
}
.page-footer {
  margin-top:0px !important;
}

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
