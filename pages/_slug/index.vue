<template>
<div >
  <!-- <h2 style='margin-top: 80px;' >Server data</h2>
  <pre >
    {{partner}}
  </pre> -->
  <hero-parallax style='margin-top: 60px;'
    :headline='`${partner.member_name} get 2 months free!`'
    tagline='AppointmentGuru is practice management for medical practitioners'
    :image='partner.logo'
    :backgroundImage='partner.background_image' >
  </hero-parallax>
  <callout
    :img='partner.logo'
    callout='Learn more about AppointmentGuru' >
  </callout>



  <template v-for='(block, index) in blocks'  >
    <div name='foo' :class='block.props.classes' :key='index' >
      <v-container v-if='block.inContainer' >
          <component :is='block.name' v-bind='block.props' />
      </v-container>
      <component v-else :is='block.name' v-bind='block.props' />
    </div>
  </template>
  <v-parallax :src='backgroundImage' height='200' >
    <v-flex class='text-xs-center mt-4' >
      <h3 class='headline' >
        Try AppointmentGuru for free
      </h3>
      <v-btn style='z-index:1;' @click='$store.commit("SHOW_SIGNUP")' dark large
        class='mt-4 elevation-20'
        color='orange' >Get started</v-btn>
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
import axios from 'axios'

export default {
  name: 'PartnerPage',
  components: {FeatureBox, FeatureBlock, Callout, HeroParallax, VideoHeroParallax, Testimonial},
  head () {
    return {
      title: 'AppointmentGuru - Be better at admin, spend less time doing it',
      meta: [
        { hid: 'description', name: 'description', content: 'AppointmentGuru helps you to automate appointments, invoices and customer management. It has an online calendar, automated notifications and mobile apps for you and your clients to book and manage their appointments.' }
      ]
    }
  },
  async asyncData ({ params, query }) {

    let url = `http://localhost:8001/partners/${params.slug}`
    // let url = 'https://referralguru.appointmentguru.co/partners/'
    let response = await axios.get(url)
    return {
      partner: response.data
    }
  },
  data () {
    return {
      partners: {},
      backgroundImage: 'https://images.unsplash.com/photo-1515136194762-84618729b8df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f26f412a62f4e342b739989b9e8aa308&auto=format&fit=crop&w=1950&q=80',
      blocks: [
        {
          name: FeatureBlock,
          props: {
            classes: 'mt-0',
            isLeft: true,
            withBackground: true,
            tagline: 'More than just an appointment manager app',
            content: 'Automate your appointment management, send good-looking invoices, enable online scheduling, be better at running your business, free up more time.',
            img: '/img/schedule.png'
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: 'mt-4',
            tagline: 'Manage your business on the go',
            content: 'Keep up-to-date with your daily appointment maker and invoicing with the AppointmentGuru app.',
            img: '/img/create_appointment.png'
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: 'mt-4',
            isLeft: true,
            withBackground: true,
            tagline: 'Lessen no-shows with notifications',
            content: 'Automatically send customisable SMS or email notifications to confirm, remind, reschedule and cancel appointments through your online appointment system',
            img: '/img/notification.png'
          }
        },
        {
          name: FeatureBlock,
          props: {
            classes: ['mt-4', 'invoicing'],
            tagline: 'Built-in invoicing plus an integration with SnapScan',
            content: "Industry-standard invoices generated from your appointments that can include medical ICD-10, NAPPI and procedure codes. Accept credit card payments with AppointmentGuru's SnapScan integration.",
            img: '/img/invoice.png'
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
            img: '/img/book_online.png'
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
