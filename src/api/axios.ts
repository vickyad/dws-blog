import axios from "axios";

const api = axios.create({
  baseURL: "https://tech-test-backend.dwsbrazil.io/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
  }
);

export default api;
