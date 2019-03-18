<template>
<div>
  <v-card class='my-4 pa-2 elevation-21' >
    <v-card-title class='headline' >Search our support knowledgebase</v-card-title>
    <v-text-field
      class='px-3'
      type="search"
      prepend-icon="search"
      clearable
      v-model='query'
    ></v-text-field>
  </v-card>
  <ais-index
    v-show='query && query.length > 0'
    app-id="WTS23NLS2K"
    api-key="a49fed1a512e605d8356722bfbb84ebe"
    index-name="appointmentguru_helpdocs"
    :auto-search='autoSearch'
    :query="query" >

    <ais-results>
      <template slot-scope="{ result }">
        <v-card v-if='result.Published' :href='`/help/${result.Slug}`' class='mt-3' >
          <v-card-title class='subheading'>{{ result.Title }}</v-card-title>
          <v-card-text>
            <div class='summary-md' v-html="$md.render(result.Summary)"></div>
          </v-card-text>
          <v-card-actions>
            <v-icon
              v-if='result.Tags && result.Tags.length > 2'
              class='ml-2' small >tag</v-icon>
            <i>{{ result.Tags}}</i>
            <v-spacer>
            </v-spacer>
            <v-btn
              v-if='result.Video && result.Video.length > 2'
              :href='result.Video.replace("/embed/", "/watch?v=")'
              target='_blank'
              flat small>
              <v-avatar>
                <v-icon>videocam</v-icon>
              </v-avatar>
              Video
            </v-btn>
            <v-btn :href='`/help/${result.Slug}`' flat >Read more</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </ais-results>
    <ais-no-results>
      <div slot-scope="props">
        No results found for <i>{{ props.query }}</i>.
        <v-btn @click='showChat' flat >Chat with support</v-btn>
      </div>
    </ais-no-results>

    <ais-stats class='my-3' ></ais-stats>

  </ais-index>
</div>
</template>
<script>
export default {
  name: 'SearchPage',
  props: {
    autoSearch: { type: Boolean, default: true }
  },
  data () {
    return {
      query: ''
    }
  },
  methods: {
    showChat () {
      if (window.drift) {
        window.drift.api.goToNewConversation()
      }
    }
  }
}
</script>

<style>
.summary-md ul { margin-left: 20px; }
</style>
