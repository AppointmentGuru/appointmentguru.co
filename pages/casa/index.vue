<template>
  <div>

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

    <v-container >
        <v-layout row wrap class='mb-5' >
          <v-flex xs12 md4 class='px-2 hidden-sm-and-down' >
            <picture>
                  <source srcset="https://ik.imagekit.io/appointmentguru/partners/casa.gif?tr=f-avif" type="image/avif" >
                  <source srcset="https://ik.imagekit.io/appointmentguru/partners/casa.gif?tr=f-webp" type="image/webp" >
                  <img class="pa-2 my-5"
                    width='273' height='233'
                    src="https://ik.imagekit.io/appointmentguru/partners/casa.gif"
                    alt="Chiropractic Association of South Africa (CASA)" >
              </picture>
          </v-flex>
          <v-flex xs12 md8 class='px-2' >
            <div :style='centerOnMobile' >
              <picture>
                  <source srcset="https://ik.imagekit.io/appointmentguru/partners/casa.gif?tr=f-avif" type="image/avif" >
                  <source srcset="https://ik.imagekit.io/appointmentguru/partners/casa.gif?tr=f-webp" type="image/webp" >
                  <img class="pa-2 hidden-md-and-up" width='200px;'
                    src="https://ik.imagekit.io/appointmentguru/partners/casa.gif"
                    alt="Chiropractic Association of South Africa (CASA)" >
              </picture>

              <h3 class='display-1 mt-4' >Special offer for CASA members</h3>

              <blockquote class='blockquote pl-0' >
                <strong >Try AppointmentGuru for free for the rest of 2021.</strong>
              </blockquote>

              <p>
                Send a copy of your CASA membership certificate to support@appointmentguru.co to claim your extended free trial
              </p>
            </div>
          </v-flex>
          <!-- {{centerOnMobile}} -->
        </v-layout>

    </v-container>

    <template v-for="(block, index) in blocks">
      <v-container v-if="block.inContainer" :key="index">
        <component :is="block.name" v-bind="block.props" :class="block.classes" />
      </v-container>
      <component v-else :is="block.name" v-bind="block.props" :key="index" :class="block.classes" />
    </template>
    <v-container >
    <v-flex xs12 class='text-center pa-5' >
      <sign-up-form />
    </v-flex>

    </v-container>

    <v-container >
      <v-layout row wrap >
        <v-flex xs12 class='text-center pt-5' >
          <center>
            <picture>
                <source :srcset="`${flatImage}?tr=f-avif`" type="image/avif" >
                <source :srcset="`${flatImage}?tr=f-webp`" type="image/webp" >
                <img style="width:100%;" class="pa-2 my-5"
                  :src="flatImage"
                  alt="AppointmentGuru calendar screenshot" >
            </picture>

          <!-- <img class="mt-5"
            width="90%"
            alt="AppointmentGuru dashboard screenshot"
            src="https://ik.imagekit.io/appointmentguru/landing-pages/home/apopointmentguru-hero-3_jCzkqCt3C.png" /> -->

          </center>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Features from "@/components/Features";
import FeatureBox from "@/components/FeatureBox";
import FeatureBlock from "@/components/FeatureBlock";
import Callout from "@/components/Callout";
import HeroParallax from "@/components/HeroParallax";
import Testimonial from "@/components/Testimonial";
import VideoHeroParallax from "@/components/VideoHeroParallax";
import SignUpForm from "@/components/SignUpForm";

export default {
  name: "LandingPage",
  layout: "landingpage",
  components: {
    Features,
    FeatureBox,
    FeatureBlock,
    Callout,
    HeroParallax,
    VideoHeroParallax,
    Testimonial,
    SignUpForm
  },
  head() {
    return {
      title: "AppointmentGuru - Be better at admin, spend less time doing it",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "AppointmentGuru helps you to automate appointments, invoices and customer management"
        }
      ]
    };
  },
  computed: {
    centerOnMobile () {
      if (this.$vuetify.breakpoint.mdAndUp === true) {
        return {'marginTop': '100px'}
      } else {
        return {'textAlign': 'center'}
      }
    }
  },
  data() {
    return {
      // appUrl: appUrl,
      flatImage: 'https://ik.imagekit.io/appointmentguru/landing-pages/home/iphone-x-flat.png',
      heroImage: 'https://ik.imagekit.io/appointmentguru/landing-pages/home/apopointmentguru-hero-3.png',
      lazyHeroImage: 'https://ik.imagekit.io/appointmentguru/landing-pages/home/apopointmentguru-hero-3.png?tr=bl-6',
      // heroImage: 'https://ik.imagekit.io/appointmentguru/landing-pages/home/appointmentguru-hero-home_Q3koIsDWE.png',
      heroBackground:
        "https://images.unsplash.com/photo-1517497052582-25e6fe8ec001?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a796c72fc4b68772c227b39dc6c3754&auto=format&fit=crop&w=1950&q=80",
      blocks: [
        // {
        //   name: 'VideoHeroParallax',
        //   props: {
        //     headline: 'Be better at admin. Spend less time doing it.',
        //     tagline: 'Appointments. Invoices. Clients. More.',
        //     video: 'https://www.youtube-nocookie.com/embed/S-RBfTBraWc?rel=0',
        //     backgroundImage: 'https://images.unsplash.com/photo-1517497052582-25e6fe8ec001?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a796c72fc4b68772c227b39dc6c3754&auto=format&fit=crop&w=1950&q=80'
        //   }
        // },
        // {
        //   name: 'HeroParallax',
        //   props: {
        //     headline: 'Be better at admin.<br/>Spend less time doing it.',
        //     tagline: 'Appointments. Invoices. Clients. More.',
        //     image: '~/assets/calendar-mobile-laptop.png',
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
          name: Callout,
          props: {
            callout:
              "AppointmentGuru is the best practice management software for Chiropractors in South Africa"
          }
        },
        {
          name: FeatureBox,
          // name: Features,
          inContainer: true,
          props: {
            rowSize: 3,
            features: [
              {
                icon: "paid",
                title: "Save time on invoicing and improve collections",
                description:
                  "Quickly generate ethical invoices suitable for South African medical aids. Make it easy for your clients to pay with online payments with Yoco. AppointmentGuru users save hours previously spent invoicing"
              },
              {
                icon: "flash_on",
                title: "Run your business smoothly and efficiently",
                description:
                  "Automate your notifications to reduce no-shows. All your client information safely stored in the cloud helps you offer personalisd service to your clients"
              },
              {
                icon: "language",
                title: "Grow your practice",
                description:
                  "Take bookings online, publish a website with us for free. AppointmentGuru gives you everything you need to build and promote your brand"
              }
            ]
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: "mt-0",
            isLeft: true,
            withBackground: true,
            tagline: "More than just an appointment manager app",
            content:
              "Automate your appointment management, send good-looking invoices, enable online scheduling, be better at running your business, free up more time.",
            img: "https://ik.imagekit.io/appointmentguru/landing-pages/home/lp-feature-invoice-appointments-client.png"
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: ["mt-4"],
            withBackground: false,
            tagline: "Create ethical invoices and take payment online",
            content:
              "Industry-standard invoices generated from your appointments that can include medical ICD-10, NAPPI and procedure codes. Add physical products and accept credit card payments with AppointmentGuru's Yoco integration.",
            img: "https://ik.imagekit.io/appointmentguru/landing-pages/home/invoice-example.png"
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: "mt-4",
            isLeft: true,
            withBackground: true,
            tagline: "Manage your business on the go",
            content:
              "Keep up-to-date with your daily appointment maker and invoicing with the AppointmentGuru app.",
            img: "https://ik.imagekit.io/appointmentguru/landing-pages/home/create-on-the-go.png"
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: "mt-4",
            withBackground: false,
            tagline: "Lessen no-shows with notifications",
            content:
              "Automatically send customisable SMS or email notifications to confirm, remind, reschedule and cancel appointments through your online appointment system.",
            img: "https://ik.imagekit.io/appointmentguru/landing-pages/home/notification.png"
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: "mt-4",
            isLeft: true,
            withBackground: true,
            tagline: "Empower and know your clients",
            content:
              "Clients can book and manage their appointments with the AppointmentGuru app. Data, notes and personal details are all safely stored on our platform.",
            img: "https://ik.imagekit.io/appointmentguru/landing-pages/home/website-booking-page.png"
          }
        }
        // {
        //   name: Testimonial,
        //   inContainer: true,
        //   props: {
        //     classes: "elevation-2",
        //     quote:
        //       "I don't think I could imagine running my business without AppointmentGuru anymore.",
        //     authorName: "Sean Johnson",
        //     authorBio: "Natural Therapist",
        //     link: "http://bookme.guru/structuralmedicine/",
        //     linkText: "Book now with the Centre for Structural Medicine",
        //     image:
        //       "https://media-appointmentguru.s3.amazonaws.com/practitioner/images/7/profile.png"
        //   }
        // }
      ]
    };
  }
};
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
.blockquote.smaller {
  font-size: 16px;
}
</style>
