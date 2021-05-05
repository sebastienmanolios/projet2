import axios from "axios";

const userCred = JSON.parse(localStorage.getItem("user"));

const apiClient = axios.create({
  baseURL: "http://localhost:5500/cars",
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

  addCar(data) {
    return apiClient.post("/car", data, {
      headers: {
        Authorization: `Bearer ${userCred.token}`,
      },
    });
  }
};
