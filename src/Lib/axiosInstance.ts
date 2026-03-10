import axios from "axios";
import { API_PATHS } from "./apiPath";

const axiosInstance = axios.create({
  baseURL: API_PATHS.BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

//Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

//Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {

      const requestUrl = error.config?.url;

      // Only redirect to login if it's NOT the tracking endpoint
      if (error.response.status === 401 && requestUrl !== API_PATHS.INVENTORY.TRACK) {
        window.location.href = "/login";
      }

      if (error.response.status === 500) {
        console.error("Server error. Please try again later.");
      }

    }

    if (error.code === "ECONNABORTED") {
      console.error("Request timeout. Please try again.");
    }

    return Promise.reject(error);
  }
);
export default axiosInstance