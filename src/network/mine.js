

import requests from "./request"


/**
 * 检测手机号码是否注册
 */
export const getartisttopsong=(params)=>{
  return requests.get
  ('/user/playlist',{params})
}
/*
搜索
*/
export const getsearch=(params)=>{
  return requests.get
  ('/search',{params})
}
/*
热搜列表(简略)
*/
export const getsearchhot=()=>{
  return requests.get
  ('/search/hot')
}