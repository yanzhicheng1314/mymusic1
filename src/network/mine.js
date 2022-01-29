import axios from 'axios'

import config from "./request"

const  http=axios.create(config)
http.interceptors.request.use((request)=>{
  return request
},(error)=>{
  return Promise.reject(error)
})
http.interceptors.response.use((response)=>{
  return response
},(error)=>{
  return Promise.reject(error)
})
/**
 * 检测手机号码是否注册
 */
export const getartisttopsong=(params)=>{
  return http.get
  ('/user/playlist',{params})
}
/*
搜索
*/
export const getsearch=(params)=>{
  return http.get
  ('/search',{params})
}