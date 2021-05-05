import Vue from "vue";
import Vuex from "vuex";
import carServices from "@/services/carServices.js";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cars: [],
    userData: {},
  },
  mutations: {
    SET_CARS(state, cars) {
      state.cars = cars;
    },

    ADD_CAR(state, car) {
      state.cars.push(car);
    },
    SET_USER_DATA(state, userData) {
      state.userData = userData;
      // localStorage expects a string, not a object
      localStorage.setItem("user", JSON.stringify(userData));
      // We need to set the headers of our instance axios with that token from the user data
      // ---- We are just adding the token into the header ----- //
      // ---- So that when we make API calls, we have that token that the server can verify !!! ----
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.token}`;
    },
  },
  actions: {
    setCars({ commit }) {
      carServices
        .getCars()
        .then((res) => {
          commit("SET_CARS", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    addCar({ commit }, data) {
      carServices
        .addCar(data)
        .then((res) => {
          commit("ADD_CAR", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    register({ commit }, credentials) {
      carServices
        .registerUser(credentials)
        .then((res) => {
          commit("SET_USER_DATA", res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
