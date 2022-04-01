<template>
  <div class="detail">
     <detailitem :details='details' class="detailitem"/>
       
     <div class="gequlieb">
        <span class="lieb" @click="libclick">歌曲列表</span> 
         <span @click="commemntclick">评论({{details.commentCount}})</span>
          <span href="" @click="commemntclick" class="pingl">收藏者</span> 
        </div>
         <router-view/>
     <!-- <detailsongs :songs='songs' @sid='suid' class="detailsongs"/> -->

  </div>
</template>

<script>
import detailitem from "./detailitem.vue"
import detailsongs from "./detailsongs.vue"

import {getplaylistdetail,
getplaylisttrack,
getcheckmusic,
commentplaylist
} from "../../network/detail"

 
 export default {
    name: 'detail',
    components: {
      detailitem,
      detailsongs
    },
    data() {
      return {
        gedanId: null,  //歌单ID
        details:{},
        songs:[],  
         userid:null, //歌曲ID
         comments:{},  //最新评论
         hotComments:{}  //精彩评论

      };
    },
    methods: {
      suid(id){
        this.userid=id
      },
      libclick(){
         this.$router.push('/detail/detailsongs')
      },
      // 歌单评论
      commemntclick(){
      
        commentplaylist({id:this.gedanId}).then((res)=>{
          
          this.comments=res.data.comments
          this.hotComments=res.data.hotComments
          this.$store.commit('comments',this.comments)
          this.$store.commit('hotComments',this.hotComments)
          
        })
        this.$router.push('/detail/comment')
      }
    },
    created () {
      /**
       * 获取歌单详情
       */
       this.gedanId=this.$store.state.gedanId
      
      getplaylistdetail({id:this.gedanId}).then((res)=>{
        
          this.details= res.data.playlist
      })
      /**
       * 获取歌单所有歌曲
       */
       getplaylisttrack({id:this.gedanId,limit:20,offset:1})
       .then((res)=>{
       
        this.songs=res.data.songs
        this.$store.commit('songs',this.songs)
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
 .detail{
   margin: 100px auto;
   width: 80%;

 }
 .text-comment{
   text-align: center;
 }
 .gequlieb{
 margin: 30px auto;
 width: 70%;
  
  
}
.lieb{
  font-size: 20px;
  color: #373737;
  font-weight: 700;
}
.pingl{
  margin: 0 10px;
   color: #373737;
}
.items{
 display: flex;
  justify-content:center;
  margin: 0 auto;
  width: 70%;
}
</style>