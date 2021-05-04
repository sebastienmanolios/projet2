<template>
  <v-app>
    <!-- --------------------------------------------------------------------------------- -->
    <v-app-bar app dark>
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
      color="teal darken-3"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
      <v-col
          class="py-4 text-center white--text"
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
        label:'Add',
        url:'/addcar'
      },
      {
        label:'Login',
        url:'/login'
      },
      {
        label:'Signup',
        url:'/signup'
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
