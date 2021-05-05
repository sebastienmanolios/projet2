import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5500/users",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  
  registerUser(credentials) {
    return apiClient.post("/register", credentials);
  },

  loginUser(credentials) {
    return apiClient.post("/login", credentials);
  },
  
};
