import axios from "axios";

const apiBaseURL = import.meta.env.VITE_API_URL_BACKEND;

export const api = axios.create({
  baseURL: apiBaseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
