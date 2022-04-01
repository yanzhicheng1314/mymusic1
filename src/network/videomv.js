

import requests from "./request"


/**
 * 获取推荐视频
 */
export const getvideotimeline=()=>{
  return requests.get
  ('/video/timeline/all')
}
/**
 * 视频详情
 */
 export const getvideodetail=(params)=>{
  return requests.get
  ('/video/detail',{params})
}
/**
 * 获取视频播放地址
 */
 export const getvideourl=(params)=>{
  return requests.get
  ('/video/url',{params})
}

/**
 *相关视频
 */
 export const getallvideo=(params)=>{
  return requests.get
  ('/related/allvideo',{params})
}
/**
 *最新 mv
 */
 export const getmvfirst=(params)=>{
  return requests.get
  ('/mv/first',{params})
}
/**
 * 获取 mv 数据
 */
 export const getmvdetail=(params)=>{
  return requests.get('/mv/detail',{params})
}
/**
 *mv 地址
 */
 export const getmvurl=(params)=>{
  return requests.get
  ('/mv/url',{params})
}