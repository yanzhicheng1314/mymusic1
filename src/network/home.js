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
 * home 轮播图
 */
export const gethomepagebanner=()=>{
  return http.get
  ('/banner')
}

/**
 * 获取华语歌单
 */
 export const getrecommendresource=()=>{
  return http.get('/recommend/resource')
}
/**
 * 获取每日推荐歌曲
 */
 export const getrecommendsongs=()=>{
  return http.get('/recommend/songs')
}

/**
 * 最新专辑
 */
export const getalbumnewest=()=>{
  return http.get('/album/newest')
}


      /**
 * 获取音乐 url
 */
       export const getsongurl=(params)=>{
        return http.get('/song/url',{params})
 }
