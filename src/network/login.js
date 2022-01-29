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
export const getcellphone=(params)=>{
  return http.get
  ('/cellphone/existence/check',{params})
}

/**
 * 手机登录
 */
export const getloginphone=(params)=>{
  return http.get('/login/cellphone',{params})
}

