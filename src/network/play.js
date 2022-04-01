

import requests from "./request"


/**
 * 歌单分类
 */
export const getplaylistcatlist=()=>{
  return requests.get
  ('/playlist/highquality/tags')
}
/**
 * 获取精品歌单
 */
 export const getplaylisthighquality=(params)=>{
  return requests.get
  ('/top/playlist/highquality',{params})
 }
