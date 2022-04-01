

import requests from "./request"


/**
 * 获取歌单详情
 */
export const getplaylistdetail=(params)=>{
  return requests.get
  ('/playlist/detail',{params})
}
/**
 * 获取歌单所有歌曲
 */
 export const getplaylisttrack=(params)=>{
  return requests.get
  ('/playlist/track/all',{params})
}
 /**
  * 音乐是否可用
  */
  export const getcheckmusic=(params)=>{
    return requests.get('/check/music',{params})
}
 /**
  * 获取歌曲详情
  */
  export const getsongdetail=(params)=>{
    return requests.get('/song/detail',{params})
}
 /**
  *获取歌词
  */
  export const getlyric=(params)=>{
    return requests.get('/lyric',{params})
}
 /**
  *歌单评论
  */
  export const commentplaylist=(params)=>{
   
    return requests.get('/comment/playlist',{params})
}
 /**
  *发送/删除评论
  */
  export const comment=(params)=>{
  
    return requests.get('/comment',{params})
}