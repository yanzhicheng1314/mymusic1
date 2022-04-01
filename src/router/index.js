import Vue from 'vue'
import VueRouter from 'vue-router'
/**
 * 首页
 */
const Home = () => import("../views/home/Home.vue")
const recommendation = () => import("../views/home/chiidhome/chiildrecommendation/recommendation.vue")
const chiilexclusive = () => import("../views/home/chiidhome/chiildexclusive/chiilexclusive.vue")
const childsong = () => import("../views/home/chiidhome/childsong/childsong.vue")
const childranking = () => import("../views/home/chiidhome/childranking/childranking.vue")
const childsinger = () => import("../views/home/chiidhome/childsinger/childsinger.vue")
const childthemusic = () => import("../views/home/chiidhome/childthemusic/childthemusic.vue")

const homerecommendsongs = () => import("../views/home/chiidhome/homerecommendsongs.vue")
/**
 * 
 */

/**
 * 登录
 */
const login = () => import("../components/content/login.vue")
/**
 * 搜索
 */
const Search = () => import("../views/search/Search.vue")
const Topic = () => import("../views/topic/Topic.vue")
/**
 * 歌单
 */
const play = () => import("../views/play/play.vue")
const musics = () => import("../views/musics.vue")



const chiidlogin = () => import("../views/login/chiidlogin/chiidlogin.vue")
const childcreate = () => import("../views/login/chiidlogin/childcreate.vue")


/**
 * 详情页
 */
const detail = () => import("../views/detail/detail.vue")
const detailsongs = () => import("../views/detail/detailsongs.vue")
const comment = () => import("../views/detail/detailcomment/comment.vue")
/**
 *  手机注册验证
 */
const childldcreatephone = () => import("../views/login/chiidlogin/childldcreatephone.vue")

/**
 * 歌词
 */
const lyric = () => import("../views/lyric/lyric.vue")
/**
 * 视频
 */
const videomv = () => import("../views/videomv/videomv.vue")
const myvideo = () => import("../views/videomv/myvideo/myvideo.vue")
const mymv = () => import("../views/videomv/mymv/mymv.vue")
const videomvdetail = () => import('../views/videomv/videomvdetail/videomvdetail.vue')
const mvdetail = () => import('../views/videomv/videomvdetail/mvdetail.vue')

/**
 * 创建的歌单
 */
const fondmusic = () => import("../views/createsongs/fondmusic.vue")
Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/home'

  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: '/home/recommendation',
    children: [

      {
        path: 'recommendation',
        component: recommendation,

      },
      {
        path: 'chiilexclusive',
        component: chiilexclusive
      },
      {
        path: 'childsong',
        component: childsong
      },
      {
        path: 'childranking',
        component: childranking
      },
      {
        path: 'childsinger',
        component: childsinger
      },
      {
        path: 'childthemusic',
        component: childthemusic
      }


    ]

  },
  {
    path: '/musics',
    name: 'musics',
    component: musics
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },


  {
    path: '/chiidlogin',
    name: 'chiidlogin',
    component: chiidlogin
  },
  {
    path: '/childcreate',
    name: 'childcreate',
    component: childcreate
  },
  {
    path: '/childldcreatephone',
    name: 'childldcreatephone',
    component: childldcreatephone
  },

  {
    path: '/homerecommendsongs',
    name: 'homerecommendsongs',
    component: homerecommendsongs
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: {
      authRequired: true
    }
  },
  {
    path: '/topic',
    name: 'Topic',
    component: Topic
  },
  /**
   * 详情页
   */
  {
    path: '/detail',
    name: 'detail',
    component: detail,
    redirect: '/detail/detailsongs',
    children: [

      {
        path: 'detailsongs',
        component: detailsongs,

      },
      {
        path: 'comment',
        component: comment
      }

    ]
  },
  /**
   * 视频
   */
  {
    path: '/videomv',
    name: 'videomv',
    component: videomv,
    redirect: '/videomv/myvideo',
    children: [

      {
        path: 'myvideo',
        component: myvideo,

      },
      {
        path: 'mymv',
        component: mymv
      }

    ]
  },
  {
    path: '/videomvdetail/:vid',
    name: 'videomvdetail',
    component: videomvdetail
  },

  {
    path: '/mvdetail',
    name: 'mvdetail',
    component: mvdetail
  },

  /**
   * 视频详情
   */

  /**
   * 歌单
   */
  {
    path: '/play',
    name: 'play',
    component: play
  },

  /**
   * 歌词
   */
  {
    path: '/lyric',
    name: 'lyric',
    component: lyric,
    props($route) {
      return {
        current: $route.params.current
      }
    }
  },
  {
    path: '/fondmusic',
    name: 'fondmusic',
    component: fondmusic
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active"
})
router.beforeEach((to,from,next) => {
  if(localStorage.getItem('token')!=''){
    next()
  }
})

export default router