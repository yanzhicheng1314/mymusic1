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
 * 歌单分类
 */
export const getplaylistcatlist=()=>{
  return http.get
  ('/playlist/highquality/tags')
}
/**
 * 获取精品歌单
 */
 export const getplaylisthighquality=(params)=>{
  return http.get
  ('/top/playlist/highquality',{params})
 }
