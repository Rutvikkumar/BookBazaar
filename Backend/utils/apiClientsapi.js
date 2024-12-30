import axios from "axios";
import {GOOGLE_BOOKS_BASE_URL,API_KEY} from "../config/config.js";

const apiClient = axios.create({
  baseURL: GOOGLE_BOOKS_BASE_URL,
  params: { key: API_KEY },
});

export default apiClient;
