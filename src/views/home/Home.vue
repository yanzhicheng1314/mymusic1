<template>
  <div class="home"> 
    <homemusiclist/>
    <childhomebannerlist :banner='banner'/>
    <musiclistview :recommends='recommends' 
    :recommendsongs='recommendsongs'/>
    <homealbumnewest :albumslist="albumslist"/>
    <!-- <div class="player">
 <audio :src="musicUrl" controls autoplay></audio> 
 </div>  -->
  </div>
</template>

<script>
import homemusiclist from "./chiidhome/homemusiclist.vue"
import childhomebannerlist from "./chiidhome/childhomebannerlist.vue"
import musiclistview from "./chiidhome/musiclistview.vue"
import homealbumnewest from "./chiidhome/homealbumnewest.vue"

import {gethomepagebanner,
getrecommendresource,
getalbumnewest,
getrecommendsongs,
} from "../../network/home"
  export default {
    name: 'Home',
   components: {
     homemusiclist,
     childhomebannerlist,
     musiclistview,
     homealbumnewest
   },
   data() {
     return {
       banner: [],
       recommends:[],
       albumslist:[],  
       recommendsongs:[]
      //  musicUrl: '',
     };
   },
   created () {
       gethomepagebanner().then((res)=>{ 
         console.log(res);
        this.banner=res.data.banners
       })
   
  /**
   * 每日推荐歌单
   */
getrecommendresource().then((res)=>{ 
    this.recommends= res.data.recommend
}),
//每日推荐歌曲
getrecommendsongs().then((res)=>{ 
     this.recommendsongs= res.data.data.dailySongs
    
})

/**
 * 最新音乐
 */
      getalbumnewest().then((res)=>{
       
         this.albumslist=res.data.albums
        
      })
   
  //  139150
   }  
  }
</script>

<style scoped>
.home{
  width: 1100px;
  margin: 0 auto;
}
</style>