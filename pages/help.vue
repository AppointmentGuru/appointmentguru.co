<template>
<section style='margin-top:60px;' >
  <v-container>
    <v-layout class='ml-4 mr-4 mt-4' >
      <h1 class='headline' >AppointmentGuru Help</h1>
    </v-layout>
    <v-layout class='ml-4 mr-4' >
      <blockquote class='blockquote pl-0' >
        Need help using AppointmentGuru? Here you’ll find all the info you need!
      </blockquote>
    </v-layout>
    <v-divider></v-divider>
    <v-layout v-for='help in helps' :key='help.icon' >
      <v-flex xs6>
        <v-card class='ma-4' flat >
          <v-card-title>
            <h2 class='title text-xs-center' >
                <v-avatar color='blue-grey' class='mr-1' >
                <v-icon large dark >{{help.icon}}</v-icon>
              </v-avatar>
              {{help.title}}</h2>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <blockquote class='blockquote ml-1 pl-0'>{{help.description}}</blockquote>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-expansion-panel class='mt-4 mb-4' >
          <v-expansion-panel-content v-for="section in help.sections" :key="section.title" >
            <div slot="header">{{section.title}}</div>
            <v-card>
              <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon ><v-icon>open_in_new</v-icon></v-btn>
                <v-btn icon ><v-icon>play_circle_outline</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</section>
</template>

<script>
export default {
  name: 'HelpPage',
  data () {
    return {
      helps: [
        {
          title: 'Getting started',
          icon: 'important_devices',
          description: 'Some quick lessons to get you up and running quickly',
          sections: [
            { title: 'Set up your account'},
            { title: 'Create your first appointment'},
            { title: 'Create a block appointment to mark time as unavailable'},
            { title: 'Create a quick invoice'}
          ]
        },
        {
          title: 'Getting started',
          icon: 'important_devices',
          description: 'Some quick lessons to get you up and running quickly',
          sections: [
            { title: 'Set up your account'},
            { title: 'Create your first appointment'},
            { title: 'Create a block appointment to mark time as unavailable'},
            { title: 'Create a quick invoice'}
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>
