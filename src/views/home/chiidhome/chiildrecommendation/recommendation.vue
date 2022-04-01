<template>
  <div class="recommendation">
   <homebanner :banner='banner'/>
   <playlist :recommends="recommends"/>
   <newsong :newsong='newsong'/>
   <recommendmv :recommendmv='recommendmv'/>
  </div>
</template>

<script>
import homebanner from "./homebanner.vue"
import playlist from "./playlist.vue";
import newsong from "./newsong.vue"
import recommendmv from './recommendmv.vue'
import {
  gethomepagebanner,
  getrecommendresource,
  getnewsong,
 getpersonalizedmv
} from "../../../../network/home";
  export default {
    name: 'recommendation',
      components: {
        homebanner,
        playlist,
        newsong,
        recommendmv
      },
     data() {
    return {
      banner: [],
      recommends: [],
      newsong: [],
      recommendmv:[],
      recommendsongs: [],
     
    };
  },
      created() {
    gethomepagebanner().then((res) => {
      this.banner = res.data.banners;
    });

    /**
     * 每日推荐歌单
     */
    getrecommendresource().then((res) => {
      this.recommends = res.data.recommend;
    }),
    /**
     * 最新音乐
     */
    getnewsong({limit:12}).then((res) => {
     
      this.newsong = res.data.result;
    });
     /**
     * 推荐 mv
     */
     getpersonalizedmv().then((res) => {
       this.recommendmv=res.data.result
      
    })
  },
    
  }
</script>

<style scoped>

</style>