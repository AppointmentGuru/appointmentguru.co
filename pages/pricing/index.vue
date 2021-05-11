<template>
<section style='background: url("https://s3.eu-central-1.amazonaws.com/static.appointmentguru.co/images/pricing-background-2.png") no-repeat right top;' >
<v-container class='page-container' >
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class='elevation-24 mt-4 pl=0 pr-0' >
        <div class='pa-2 text-xs-center orange--text' >
          <span class='currency display-3' >R</span>
          <span class='price display-4' >500</span>
          <span class='frequency title uppercase' >/month</span>
        </div>
        <v-divider></v-divider>
        <v-card-text>
          <h2 class='headline text-xs-center uppercase blue-grey--text' >What's included?</h2>
          <v-list class='elevation-0 mt-2' >
            <template v-for='(item,index) in items' >
            <v-list-tile :key='index' >
              <v-list-tile-avatar>
                <v-icon >{{item.icon}}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title> {{item.title}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider inset :key='index' ></v-divider>
            </template>
          </v-list>
          <v-card flat>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn small flat to='/features/' >Learn more about our features</v-btn>
            </v-card-actions>
          </v-card>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class='pa-0'>
          <v-btn @click='$store.commit("SHOW_SIGNUP")' block dark large color='orange' class='ma-0' >Start Free Trial</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  <h2 class='headline text-xs-center ma-4 pt-4' >FAQs</h2>
  <v-divider class='mb-4'></v-divider>
  <v-layout row wrap >
    <v-flex v-for='(faq, index) in faqs' :key='index' class='xs12 sm6' >
      <v-card class='ma-2' style='min-height:200px;'>
        <v-card-title>
          <h2 class='subheading' >{{faq.question}}</h2>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>{{faq.answer}}</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
  <v-layout row wrap >
    <v-spacer></v-spacer>
    <v-btn to='/help/' flat >See more FAQs <v-icon >chevron_right</v-icon></v-btn>
  </v-layout>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3 >
      <v-btn @click='$store.commit("SHOW_SIGNUP")' color='orange' block large class='mt-4 mb-4' >Get started for free</v-btn></v-flex>
  </v-layout>
</v-container>
</section>
</template>

<script>
export default {
  name: 'PricingPage',
  data () {
    return {
      items: [
        {
          icon: 'star',
          title: 'One month free trial'
        },
        {
          icon: 'star',
          title: 'Create and manage your appointments'
        },
        {
          icon: 'star',
          title: 'Mobile apps for you and your clients'
        },
        {
          icon: 'star',
          title: 'Automatic SMS or email notifications'
        },
        {
          icon: 'star',
          title: 'Integrated invoicing (with medical codes)'
        },
        {
          icon: 'star',
          title: 'A free website and marketing material'
        },
        {
          icon: 'star',
          title: 'Calendar syncing, and so much more...'
        },
      ],
      faqs: [
        {
        question: 'Are there any hidden or extra fees?',
        answer: "No. We aim to keep our pricing simple and fair. There are no sneaky, hidden charges and we're always upfront about extra costs for additional features that you choose to use."
        },
        {
          question: 'Can I use AppointmentGuru for my practice?',
          answer: 'For practitioners who work together in a practice the cost is R500/month for your practice account (this includes one practitioner). Each additional practitioner costs an extra R400/month.'
        },
        {
          question: 'Can clients make their own appointments?',
          answer: "Absolutely, this is one of AppointmentGuru's fabulous benefits. Clients can book and manage their appointments with you (and have access to a bunch of other things in the AppointmentGuru app)."
        },
        {
          question: 'Can I sync my appointments to the calendar app on my phone?',
          answer: 'Yes!'
        }
      ]
    }
  }
}
</script>
