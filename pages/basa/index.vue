<template>
  <div>

    <v-container >
      <v-layout row wrap >
        <v-flex xs12 class='text-center pt-5' >
          <center>
          <img
            alt="AppointmentGuru dashboard screenshot"
            width="90%"
            :src="heroImage" />

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
  data() {
    return {
      // appUrl: appUrl,
      flatImage: 'https://ik.imagekit.io/appointmentguru/landing-pages/home/iphone-x-flat.png',
      heroImage: 'https://ik.imagekit.io/appointmentguru/landing-pages/home/apopointmentguru-hero-3.png',
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
              "AppointmentGuru is the best practice management software for Biokineticists in South Africa"
          }
        },
        {
          name: FeatureBox,
          inContainer: true,
          props: {
            rowSize: 3,
            features: [
              {
                icon: "videocam",
                title: "Integrate with Zoom",
                description:
                  "Connect your AppointmentGuru account to your Zoom account so that you can manage your Zoom meetings right from AppointmentGuru"
              },
              {
                icon: "flash_on",
                title: "Automate your notifications",
                description:
                  "Once connected, AppointmentGuru can automatically send your Zoom meeting information to your clients with our automatated confirmations and reminders"
              },
              {
                icon: "language",
                title: "Let your clients book online",
                description:
                  "Your clients can book appointments online via your online booking page, our mobile app, or though a booking form embedded in your web page"
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
            classes: ["mt-4", "invoicing"],
            withBackground: false,
            tagline: "Create ethical invoices and take payment online",
            content:
              "Industry-standard invoices generated from your appointments that can include medical ICD-10, NAPPI and procedure codes. Add physical products and accept credit card payments with AppointmentGuru's Yoco integration.",
            img: "/img/invoice.png"
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
            img: "https://ik.imagekit.io/appointmentguru/landing-pages/home/create-on-the-go.png?updatedAt=1633470930813"
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
            img: "/img/notification.png"
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
            img: "/img/book_online.png"
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
