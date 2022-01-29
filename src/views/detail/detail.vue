<template>
  <div class="detail">
     <detailitem :details='details'/>
     <detailsongs :songs='songs' @sid='suid'/>
  </div>
</template>

<script>
import detailitem from "./detailitem.vue"
import detailsongs from "./detailsongs.vue"

import {getplaylistdetail,
getplaylisttrack,
getcheckmusic
} from "../../network/detail"
 
 
 export default {
    name: 'detail',
    components: {
      detailitem,
      detailsongs
    },
    data() {
      return {
        songid: null,  //详情ID
        details:{},
        songs:[],  
         userid:null //歌曲ID

      };
    },
    methods: {
      suid(id){
        this.userid=id
      }
    },
    created () {
      /**
       * 获取歌单详情
       */
       this.songid=this.$route.params.id
      getplaylistdetail({id:this.songid}).then((res)=>{
          this.details= res.data.playlist
      })
      /**
       * 获取歌单所有歌曲
       */
       getplaylisttrack({id:this.songid,limit:20,offset:1})
       .then((res)=>{
        this.songs=res.data.songs
       })
       /**
        * 检查歌曲是否有权限
        */
          if(this.userid==null){     
           
          }else{
  getcheckmusic({id:this.userid}).then((res)=>{
         console.log(res+'不好意思');
          })
          }
     

    }
    
  }
</script>

<style scoped>
 
</style>