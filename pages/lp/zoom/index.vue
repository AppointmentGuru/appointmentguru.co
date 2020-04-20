<template>
  <div>
    <v-container
      fluid
      style="min-height:300px;background-image:url('/img/lp/zoom/video_call.png');height:450px;background-position:bottom left;"
      class="blue lighten-5 elevation-4"
    >
      <v-layout row wrap>
        <v-flex xs12 sm6 md7 class="text-center mt-3">
          <!-- <v-img class="white--text align-end" height="200px" src="/img/lp/zoom/video_call.png" /> -->
          <!-- <v-card-media
              class="white--text align-end"
              height="300px"
              src="/img/lp/zoom/video_call.png"
            >
              <v-card-title
                class="subheading white--text pl-5"
              >Add Zoom to your AppointmentGuru account</v-card-title>
          </v-card-media>-->
          <div>
            <!-- <img src="~/static/img/lp/zoom/video_call.png" /> -->
            <center>
              <p class="title pt-5">Already an AppointmentGuru member?</p>
              <v-btn
                href="https://api.appointmentguru.co/integrations/zoom/"
                large
                color="primary"
              >Add the Zoom integration now</v-btn>
            </center>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md5>
          <br />
          <v-card class="my-4 mt-5 mx-1 elevation-10">
            <v-list>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>New to AppointmentGuru?</v-list-tile-title>
                  <v-list-tile-sub-title>Start your free trial</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-divider></v-divider>
            <!-- <blockquote class="blockquote">Create your AppointmentGuru now</blockquote> -->
            <no-ssr placeholder="Loading...">
              <div id="agsignup"></div>
            </no-ssr>
            <!-- <v-card-actions>
              Already got an AppointmentGuru account?
              <a href>connect Zoom now</a>
            </v-card-actions>-->
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <template v-for="(block, index) in blocks">
      <v-container v-if="block.inContainer" :key="index">
        <component :is="block.name" v-bind="block.props" :class="block.classes" />
      </v-container>
      <component v-else :is="block.name" v-bind="block.props" :key="index" :class="block.classes" />
    </template>
  </div>
</template>

<script>
import FeatureBox from "@/components/FeatureBox";
import FeatureBlock from "@/components/FeatureBlock";
import Callout from "@/components/Callout";
import HeroParallax from "@/components/HeroParallax";
import Testimonial from "@/components/Testimonial";
import VideoHeroParallax from "@/components/VideoHeroParallax";

export default {
  name: "LandingPage",
  layout: "landingpage",
  components: {
    FeatureBox,
    FeatureBlock,
    Callout,
    HeroParallax,
    VideoHeroParallax,
    Testimonial
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
              "Integrate AppointmentGuru with Zoom so you can run your business online"
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
            img: "/img/schedule.png"
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: "mt-4",
            tagline: "Manage your business on the go",
            content:
              "Keep up-to-date with your daily appointment maker and invoicing with the AppointmentGuru app.",
            img: "/img/create_appointment.png"
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: "mt-4",
            isLeft: true,
            withBackground: true,
            tagline: "Lessen no-shows with notifications",
            content:
              "Automatically send customisable SMS or email notifications to confirm, remind, reschedule and cancel appointments through your online appointment system.",
            img: "/img/notification.png"
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: ["mt-4", "invoicing"],
            tagline: "Built-in invoicing plus an integration with SnapScan",
            content:
              "Industry-standard invoices generated from your appointments that can include medical ICD-10, NAPPI and procedure codes. Add physical products and accept credit card payments with AppointmentGuru's SnapScan integration.",
            img: "/img/invoice.png"
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
        },
        {
          name: Testimonial,
          inContainer: true,
          props: {
            classes: "elevation-2",
            quote:
              "I don't think I could imagine running my business without AppointmentGuru anymore.",
            authorName: "Sean Johnson",
            authorBio: "Natural Therapist",
            link: "http://bookme.guru/structuralmedicine/",
            linkText: "Book now with the Centre for Structural Medicine",
            image:
              "https://media-appointmentguru.s3.amazonaws.com/practitioner/images/7/profile.png"
          }
        }
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
