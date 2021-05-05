<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Signup</h1>
        <v-form ref="signUpForm" v-model="formValidity" @submit.prevent="register">
          <v-text-field
            label="Username"
            type="username"
            v-model="name"
            required
          ></v-text-field> 
          <v-text-field
            label="Email"
            type="email"
            v-model="email"
            :rules="emailRules"
            required
          ></v-text-field>  
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            required
          ></v-text-field>       
          <v-checkbox
            label="Agree to terms & conditions"
            v-model="agreeToTerms"
            :rules="agreeToTermsRules"
            required
          ></v-checkbox>
          <v-btn
            type="submit"
            color="primary"
            class="mr-4"
            :disabled="!formValidity"
            >Submit</v-btn
          >
          <p>{{$store.state.userData}}</p>
          <!-- <v-btn color="success" class="mr-4" @click="validateForm"
            >Validate Form</v-btn
          >
          <v-btn color="warning" class="mr-4" @click="resetValidation"
            >Reset Validation</v-btn
          >
          <v-btn color="error" @click="resetForm">Reset</v-btn> -->
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: '',
    email: '',
    password: '',
    errors: [],
    agreeToTerms: false,

    agreeToTermsRules: [
      value =>
        !!value ||
        'You must agree to the terms and conditions to sign up for an account.'
    ],

    emailRules: [
      value => !!value || 'Email is required.',
      value => value.indexOf('@') !== 0 || 'Email should have a username.',
      value => value.includes('@') || 'Email should include an @ symbol.',
      value =>
        value.indexOf('.') - value.indexOf('@') > 1 ||
        'Email should contain a valid domain.',
      value => value.includes('.') || 'Email should include a period symbol.',
      value =>
        value.indexOf('.') <= value.length - 3 ||
        'Email should contain a valid domain extension.'
    ],
    
    formValidity: false,
  }),

  methods: {
    resetForm() {
      this.$refs.signUpForm.reset()
    },
    resetValidation() {
      this.$refs.signUpForm.resetValidation()
    },
    validateForm() {
      this.$refs.signUpForm.validate()
    },
    register () {
      this.$store
        .dispatch('register', {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'AddCar' })
        })
        .catch(err => {
          this.errors = err.response.data.errors
        })
    },
  },
}
</script>