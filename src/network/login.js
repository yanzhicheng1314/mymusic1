import requests from "./request"
/**
 * 检测手机号码是否注册
 */
export const getcellphone=(params)=>{
  return requests.get
  ('/cellphone/existence/check',{params})
}

/**
 * 手机登录
 */
export const getloginphone=(params)=>{
  return requests.get('/login/cellphone',{params})
}
/**
 *1. 二维码 key 生成接口
 */
 export const getloginqrkey=()=>{
  return requests.get('/login/qr/key')
}
/**
 * 2. 二维码生成接口
 */
 export const getloginqrcreate=(params)=>{
  return requests.get('/login/qr/create',{params})
}
/**
 * 2.3. 二维码检测扫码状态接口
 */
 export const getloginqrcheck=(params)=>{
  return requests.get('/login/qr/check',{params})
}
/**
 *  刷新登录
 */
export const getloginrefresh=(params)=>{
  return requests.get('/login/refresh',{params})
}