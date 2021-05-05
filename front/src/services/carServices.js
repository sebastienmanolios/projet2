import axios from "axios";

const userCred = JSON.parse(localStorage.getItem("user"));
// console.log($store.state.userData);

const apiClient = axios.create({
  baseURL: "http://localhost:5500",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getCars() {
    return apiClient.get("/cars/cars");
  },

  // getEventById(id) {
  //   return apiClient.get("/events/" + id);
  // },

  //WIP
  addCar(data) {
    return apiClient.post("/cars/car", data, {
      headers: {
        Authorization: `Bearer ${userCred.token}`,
      },
    });
  },

  registerUser(credentials) {
    return apiClient.post("/users/register", credentials);
  },
};
