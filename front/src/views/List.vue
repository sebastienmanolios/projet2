<template>
  <div>
    <h1>Listes</h1>

    <v-main>
      <v-card
        class="mx-auto mb-5"
        max-width="500"
        outlined
        v-for="car in showCard" :key="car.id"
      >
          <v-card-title >
            {{ car.modele}}
          </v-card-title>

        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="grey--text ml-4">
              {{ car.annee}}
            </v-list-item-title>

            <v-list-item-title class="grey--text ml-4">
              {{ car.carburant}}
            </v-list-item-title>
            
            <v-list-item-title class="grey--text ml-4">
              {{ car.marque}}
            </v-list-item-title>
          </v-list-item-content>

          <v-list-item-avatar
            size="80"
            color="blue"
          ></v-list-item-avatar>
        </v-list-item>
      </v-card>

      <v-pagination v-model="page" :length="Math.ceil(this.cars.length/this.perPage)"></v-pagination>
    </v-main>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      page: 1,
      perPage: 3,
    }
  },

  created() {
    this.$store.dispatch('setCars');
  },

  computed: {
    ...mapState([
      'cars'
      ]),

      showCard() {
        return this.cars.slice((this.page - 1)* this.perPage, this.page* this.perPage)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>