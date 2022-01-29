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
 * 获取歌单详情
 */
export const getplaylistdetail=(params)=>{
  return http.get
  ('/playlist/detail',{params})
}
/**
 * 获取详情歌单所有歌曲
 */
 export const getplaylisttrack=(params)=>{
  return http.get
  ('/playlist/track/all',{params})
}
 /**
  * 音乐是否可用
  */
  export const getcheckmusic=(params)=>{
    return http.get('/check/music',{params})
}
