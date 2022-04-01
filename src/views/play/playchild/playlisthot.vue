<template>
  <div class="playlisthot">
    <div class="playlisthot-top" v-if="playlist.length">
     <span class="top-img">
        <img :src="playlist[0].coverImgUrl" alt="">
        </span>
        <span class="jipin">精品歌单</span>
      <span class="top-name">{{playlist[0].name}}</span>
       
    </div>
    <div class="itemlist-name">
      <span class="itemlist" 
       v-for="(item,index) in catlist" 
        :key="index">
        <span @click="catclick(item.name)">
          <a href="#"> {{item.name}}</a>       
        </span>
      </span>
      </div>
      <div class="playlist">
        <div v-for="(item,index) in playlist"
         :key="index" class="playlist-item">
            <div class="img-url" @click="playlistclick(item.id)">
              <img :src="item.coverImgUrl" alt="">
               <span class="itemuname">{{item.name}}</span>
              <span class="itemnickname">by  {{item.creator.nickname}}</span>
           
            </div>            
         </div>        
      </div>
  </div>
</template>

<script>
import {getplaylisthighquality} from '../../../network/play'

/**
 * 热门歌单分类
 */
  export default {
    name: 'playlisthot',
    props:{
      catlist:{
        type:Array
      }
    },
    data() {
      return {
        playlist:[], //精品歌单
        detailId:[]
      };
    },
    methods: {
      /**
       * 获取精品歌单
       */
      catclick(name){
        console.log(name);
       getplaylisthighquality({cat:name,limit:8}).then((res)=>{
        
           this.playlist=res.data.playlists
       })
      },
      playlistclick(id){
       this.$router.push({name:'detail',params:{id}})
      }
    },
      created () {
      getplaylisthighquality({cat:'华语',limit:8}).then((res)=>{
       
           this.playlist=res.data.playlists
       })

    }
    
  }
</script>

<style scoped>
.playlisthot{
  width: 80%;
  margin: 0 auto;
 
}
.playlisthot-top{
  width: 70%;
  height: 170px;
  background-color: seagreen;
    line-height: 170px;
    position: relative;
    margin: 0 auto;
    margin-top: 120px;
    border-radius: 10px;
}
.top-img img{
  width: 137px;
  height: 137px;
  margin-top: 15px;
}
.top-name{
  color: #fff;
  display: inline-block;
 font-size: 20px;
  height: 137px;
  position: absolute;
  margin-left: 20px;
}
.jipin{
  display: inline-block;
  position: absolute;
   height: 30px; 
  width: 120px;
  border: 1px solid #E7AA5A;
  color: #E7AA5A;
  line-height: 30px;
  border-radius: 20px;
  text-align: center;
  top: 30px;
   margin-left: 20px;
}
.itemlist-name{
  width: 70%;
  text-align: center;
 display: flex;
   line-height: 40px;
    align-content: center;
    flex-wrap: wrap;
    margin: 0 auto 50px;
    margin-top: 60px;
   
}
.itemlist-name :hover{
color: crimson;
}
.itemlist a{
   text-decoration: none;
 color: rgb(46, 46, 45);
}

  .itemlist-name span{
 padding: 0 10px;
 width: 120px;
 height: 40px;
 
  }
  .playlist{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    position: relative;
    width: 70%;
     margin: 0 auto 50px;
   
  }
  .playlist-item{
    width: 450px;
    margin: 10px;
      overflow: hidden;
  }
  .img-url img{
    width: 240px;
    height: 240px;
    border-radius: 10px;
  }
  .itemuname{
     position: absolute;
     color: #373737;
      margin:50px 20px;
  }
  .itemnickname{
position: absolute;
      margin:80px 20px;
      color: #9F9F9F;
  }
</style>