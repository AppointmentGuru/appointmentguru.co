<template>
<section style='background: url("https://s3.eu-central-1.amazonaws.com/static.appointmentguru.co/images/pricing-background-2.png") no-repeat right top;' >
<v-container class='page-container' >
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class='elevation-24 mt-4 pl=0 pr-0' >
        <div class='pa-2 text-xs-center orange--text' >
          <span class='currency display-3' >R</span>
          <span class='price display-4' >400</span>
          <span class='frequency title uppercase' >/mo</span>
          <div class='subheading uppercase' >
            Thereafter only R150/head
          </div>
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
              <v-btn small flat to='/features/' >See all features</v-btn>
            </v-card-actions>
          </v-card>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class='pa-0'>
          <v-btn block dark large color='orange' class='ma-0' >Start Free Trial</v-btn>
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
          title: 'Online calendar'
        },
        {
          icon: 'star',
          title: 'Notifications by SMS and/or email'
        },
        {
          icon: 'star',
          title: 'Integrated invoicing'
        },
        {
          icon: 'star',
          title: 'Customer Relationship management'
        }
      ],
      faqs: [
        {
          question: 'Who pays for SMSes',
          answer: 'We do. The SMSes that are sent on your behalf by AppointmentGuru are included in the pricing.'
        },
        {
          question: 'How does multi-seat pricing work?',
          answer: 'For practitiones who work together in a practice the cost is R400/month for your practice account. This includes 1 practitioner. For each practitioner you add to your practice it will cost an extra R150.'
        },
        {
          question: 'What happens if I work in a practice _and_ have run my own practice?',
          answer: 'In this scenario, the cheaper pricing will apply to you. As long as you are part of that practice, you will only pay R150 to AppointmentGuru'
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No. We aim to keep our pricing simple and fair. AppointmentGuru does not charge seperately for any services provided by AppointmentGuru'
        }
      ]
    }
  }
}
</script>
