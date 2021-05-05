import Vue from "vue";
import Vuex from "vuex";
import carServices from "@/services/carServices.js";
import userServices from "@/services/userServices.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cars: []
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
      localStorage.setItem("user", JSON.stringify(this.state.userData));
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
      userServices
        .registerUser(credentials)
        .then(( { data }) => {
          commit("SET_USER_DATA", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    login({ commit }, credentials) {
      userServices
        .loginUser(credentials)
        .then(({ data }) => {
          commit("SET_USER_DATA", data);
        })
        .catch((err) => {
          console.log(err);
        });
    }


  },
});
