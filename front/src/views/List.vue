<template>
  <div>
    <h1>Listes</h1>
    <v-card
      class="mx-auto mb-5"
      max-width="500"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>

          <v-list-item-title 
            class="overline mb-4"
            :cars="cars"
          >
            {{ cars.message }}
          </v-list-item-title>
        </v-list-item-content>

        <v-list-item-avatar
          size="80"
          color="blue"
        ></v-list-item-avatar>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  created() {
    this.$store.dispatch('setCars');
  },

  computed: {
    ...mapState([
      'cars'
      ])
    }
  }
</script>

<style lang="scss" scoped>

</style>