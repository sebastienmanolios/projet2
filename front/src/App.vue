<template>
  <v-app>
    <!-- --------------------------------------------------------------------------------- -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Vuetify Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn 
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text 
        rounded 
        :to="link.url"
        >{{ link.label }}
      </v-btn>
      <v-btn @click="toggleTheme" text rounded>Theme</v-btn>
    </v-app-bar>
    <!-- --------------------------------------------------------------------------------- -->
    <v-content>
      <router-view></router-view>
    </v-content>
    <!-- --------------------------------------------------------------------------------- -->
    <v-footer
      color="primary lighten-1"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="link in links"
          :key="`${link.label}-footer-link
          `"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.url"
        >
          {{ link.label }}
        </v-btn>
        <v-col
          class="primary lighten-2 py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Vuetify Dashboard</strong>
        </v-col>
      </v-row>
    </v-footer>
    <!-- --------------------------------------------------------------------------------- -->
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    links: [
      {
        label:'Home',
        url:'/'
      },
      {
        label:'List',
        url:'/list'
      },
      {
        label:'Login',
        url:'/login'
      },
      {
        label:'Signup',
        url:'/signup'
      },
      {
        label:'Sebastien',
        url:'/sebastien'
        label:'David',
        url:'/david'
      },
     
   ]
  }),
  methods : {
    toggleTheme() {
      this.$vuetify.theme.themes.dark.anchor = '#41B883'
      this.$vuetify.theme.dark =! this.$vuetify.theme.dark
    }
  }
};
</script>
