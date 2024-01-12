import axios from "axios"
import { BASE_URL } from "./apiUrl"
export const axiosInstance = axios.create({baseURL : BASE_URL,})