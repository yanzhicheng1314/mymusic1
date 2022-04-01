import Vue from 'vue'
import Vuex from 'vuex'
import {getlikelist,getuserplaylist} from '../network/home'
import {getsongdetail} from '../network/detail'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   
    currentUser: null, //当前用户
    isLogin: false, //是否登录
    userId: 0, //用户ID
    token: '', //登录后的token
    url: '', //音乐地址id
    playid: 0, //歌单 id
    gedanId: '', //歌单 id
    avatarUrl: '', //用户头像
    likeid: [], //喜欢音乐id
    songs: [],
    userName: [], //播放详情
    luricid: null, //音乐id
    currentTime: 0, //播放时间
    comments: {}, //精彩评论
    hotComments: {}, //最新评论
    delectcomment: null, //删除评论
    visible: Boolean,
    idslists:[],
    playlist:[]
  },
  mutations: {
    songurl(state, url) {
      state.url = url
    },
    token(state,token){
      state.token=token
      localStorage.setItem('token', token)
    },
    currentUser(state, currentUser) {
      state.currentUser = currentUser
      localStorage.setItem('currentUser', currentUser)
    },
    userId(state, userId) {
      state.userId = userId
      localStorage.setItem('userId', userId)
    },
    avatarUrl(state, avatarUrl) {
      state.avatarUrl = avatarUrl
      localStorage.setItem('avatarUrl', avatarUrl)
    },
    likeid(state, likeid) {
      state.likeid.push(likeid)
      localStorage.setItem('likeid', JSON.stringify(likeid));
    },
    songs(state, songs) {
      state.songs = songs
    },
    luricid(state, luricid) {
      state.luricid = luricid
    },
    userName(state, userName) {
      state.userName = userName
    },
    currentTime(state, currentTime) {
      state.currentTime = currentTime
    },
    gedanId(state, id) {
      state.gedanId = id
    },
    comments(state, comments) {
      state.comments = comments
    },
    hotComments(state, hotComments) {
      state.hotComments = hotComments
    },
    commentId(state, commentId) {
      state.comments.unshift(commentId)
    },
    delectcomment(state, delectcomment) {
      state.comments = state.comments.filter((comment) => {

        return comment.commentId !== delectcomment
      })
    },
    visible(state, visible) {
      state.visible = visible
    },
    // idslists(state,idslists){
    //   state.idslists=idslists
    //   localStorage.setItem('idslists', JSON.stringify(idslists));
    // },
    playlist(state,playlist){
      state.playlist=playlist
      localStorage.setItem('playlist', JSON.stringify(playlist));
    }
  },
  actions: {
    currentTime(context, value) {
      context.commit('currentTime', value)
    },

    likelist(context,value){
      // getlikelist({uid:value}).then((res)=>{
      //   let idslist=res.data.ids
      //  let idslists= idslist.join(',')
      
      //   getsongdetail({ids:idslists}).then((res)=>{
      //     let ids=res.data.songs   
        
      //       context.commit('idslists',ids)
           
      //   })
       
      // })
      getuserplaylist({uid:value}).then((res)=>{
           let playlist=  res.data.playlist
           context.commit('playlist',playlist)
      })
    }

  },
  modules: {},
  getters: {
    getName(state) {
      if (!state.currentUser) {
        state.currentUser = localStorage.getItem('currentUser')
        
      }
      return state.currentUser
    },
    getToken(state) {
      if (!state.token) {
        state.token = localStorage.getItem('token')
        
      }
      return state.token
    },
    getavatarUrl(state) {
      if (!state.avatarUrl) {
        state.avatarUrl = localStorage.getItem('avatarUrl')
      }
      return state.avatarUrl
    },
    getuserId(state) {
      if (!state.userId) {
        state.userId = localStorage.getItem('userId')
      }
      return state.userId
    },
   
    getlikeid(state) {
      if (state.likeid.length==0) {
        state.likeid = JSON.parse(localStorage.getItem('likeid'));
      }
      return state.likeid
    },
    getplaylist(state) {
      if (state.playlist.length==0) {
        state.playlist = JSON.parse(localStorage.getItem('playlist'));
      }
      return state.playlist
    },
   

  }

})