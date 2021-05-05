<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Add a car</h1>
        <v-form @submit.prevent="createCar">
          <v-text-field
            v-model="car.marque"
            label="marque"
            required
          ></v-text-field>
          <v-text-field
            v-model="car.modele"
            label="modele"
            required
          ></v-text-field>
          <v-text-field
            v-model="car.annee"
            label="annee"
            required
          ></v-text-field>

          <v-text-field
            v-model="car.carburant"
            label="carburant"
            required
          ></v-text-field>

           <v-btn
            type="submit"
            color="primary"
            class="mr-4"
            >Submit</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
    car: {
      marque: '',
      modele: '',
      annee: '',
      carburant:''
    }
    }
  },
  methods: {
    createCar() {
        this.$store.dispatch('addCar', this.car)
        .then (() => {
          this.$router.push({
            name:"EventDetails",
            params: { id: this.event.id}
          })
          // this.car = this.createFreshCar()
        })
        .catch(() => {})
      },
    createFreshCar() {
      return {
        marque: '',
        modele: '',
        annee: '',
        carburant:''
      }
    }
  }
}
</script>