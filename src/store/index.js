import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      currentUser:null, //当前用户
      isLogin:false,   //是否登录
      token:'',     //登录后的token
    url:'', //音乐地址id
    playid:0 //歌单 id
    
  },
  mutations: {
    songurl(state,url){
      state.url=url     
    },
    userid(state,currentUser){
      state.currentUser=currentUser
    }    
  },
  actions: {
  },
  modules: {
  },
  getters:{
    
  }
})
