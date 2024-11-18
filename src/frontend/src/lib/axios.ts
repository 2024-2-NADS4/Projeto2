const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
import axios from 'axios'

export const api = axios.create({
  baseURL: apiBaseUrl || "https://3rvvtz-5000.csb.app",
})
