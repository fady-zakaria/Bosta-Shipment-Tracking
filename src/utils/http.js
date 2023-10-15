import axios from "axios";
import { constants } from "./constants";

const API_URL = constants.URL;

export const HttpClient = axios.create({
  baseURL: API_URL,
  timeout: 60 * 1 * 1000,
  withCredentials: false,
});
