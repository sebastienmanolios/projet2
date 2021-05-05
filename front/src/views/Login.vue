<template>
  <v-card width=400 class="mx-auto mt-5">
  <!-- ----------------------------------------------------------------------- -->
    <v-card-title>
      <h1 class="display-1">Login</h1>
    </v-card-title>
  <!-- ----------------------------------------------------------------------- -->
    <v-card-text>
      <v-form @submit.prevent="login">
        <v-text-field 
          label="Email"
          v-model="email"
          prepend-icon="mdi-account-circle"
          />
        <v-text-field
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          v-model="password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          />
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
  <!-- ----------------------------------------------------------------------- -->
    <v-card-actions>
      <v-btn color="success">Register</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="info">Login</v-btn>
    </v-card-actions>
  <!-- ----------------------------------------------------------------------- -->
  </v-card>
</template>

<script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        showPassword: false,
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
    login () {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'AddCar' })
        })
        .catch(err => {
          this.error = err.response.data.error
        })
    }
  }
    
  }
</script>

<style lang="scss" scoped>

</style>
