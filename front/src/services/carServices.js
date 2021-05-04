import axios from "axios";

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
    return apiClient.get("/cars");
  },

  // getEventById(id) {
  //   return apiClient.get("/events/" + id);
  // },

  //WIP
  addCar(data) {
    return apiClient.post("/car" + data);
  },
};
