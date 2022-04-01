

import axios from 'axios';

import nprogress from 'nprogress';
import "nprogress/nprogress.css";
const  requests=axios.create({
  baseURL: 'https://netease-cloud-music-api-liart-eight.vercel.app',
  withCredentials: true,
  changeOrigin: true,  //跨域
  timeout: 5000,
})


requests.interceptors.request.use((config)=>{
  nprogress.start();
  return config
},(error)=>{
  return Promise.reject(error)
})
requests.interceptors.response.use((res)=>{
  nprogress.done();
  return res
},(error)=>{
  return Promise.reject(error)
})   
export default requests