import axios from 'axios'
import { useAuthStore } from '@/stores/authStore';
import { getToken } from '@/utils/auth'



// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // api of base_url
  timeout: 1000000 // request timeout
})


// Add a request interceptor
service.interceptors.request.use(function (config) {
  // Do something before request is sent
  if(useAuthStore().token) {
    config.headers['Authorization'] = 'Bearer ' + getToken()
    config.headers['Access-Control-Allow-Origin'] = '*'
    // config.headers['Access-Control-Allow-Headers'] = 'Authorization'
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});




// Add a response interceptor
service.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});





export default service