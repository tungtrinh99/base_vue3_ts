/*Declare axios object*/
import axios, { AxiosInstance } from "axios"
import { useAuthStore } from "~/store/auth"

const authStore = useAuthStore()
const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_VUE_APP_API_BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
})

axiosInstance.interceptors.request.use(
  async (config) => {
    const isToken = authStore.isToken
    if (isToken && config.headers) {
      config.headers.Authorization = `Bearer ${authStore.accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default axiosInstance
