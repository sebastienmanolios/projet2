import Vue from "vue";
import Vuex from "vuex";
import carServices from "@/services/carServices.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cars: {},
  },
  mutations: {
    SET_CARS(state, cars) {
      state.cars = cars;
    },

    ADD_CARS(state, car) {
      state.cars = { ...cars, car };
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

    addCar({ commit }) {
      carServices.addCar().then();
    },
  },
  modules: {},
});
