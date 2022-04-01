
import requests from "./request"

/**
 * home 轮播图
 */
export const gethomepagebanner=()=>{
  return requests.get
  ('/banner')
}

/**
 * 获取华语歌单
 */
 export const getrecommendresource=()=>{
  return requests.get('/recommend/resource')
}
/**
 * 获取每日推荐歌曲
 */
 export const getrecommendsongs=()=>{
  return requests.get('/recommend/songs')
}

/**
 * 推荐新音乐
 */
 export const getnewsong=(params)=>{
  return requests.get('/personalized/newsong',{params})
}


/**
 * 推荐 mv
 */
 export const getpersonalizedmv=()=>{
  return requests.get('/personalized/mv')
}


/**
 * 最新专辑
 */
export const getalbumnewest=()=>{
  return requests.get('/album/newest')
}


      /**
 * 获取音乐 url
 */
       export const getsongurl=(params)=>{
        return requests.get('/song/url',{params})
 }

       /**
 * 喜欢音乐列表
 */
        export const getlikelist=(params)=>{
          return requests.get('/likelist',{params})
   }

          /**
 * 获取用户歌单
 */
           export const getuserplaylist=(params)=>{
            return requests.get('/user/playlist',{params})
     }
