import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
Vue.use(VideoPlayer)

Vue.prototype.$bus=new Vue();
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
