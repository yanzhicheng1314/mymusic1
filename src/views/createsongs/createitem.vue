<template>
  <div>
         <div class="items">
      <div class="item-img">
        <img :src="itemlist.coverImgUrl" alt="">
      </div>
      <div class="item-tltie">
        <p class="item-lieb">
        <span class="item-gedan">歌单</span> <span class="item-name">         
         {{ itemlist.name}}
          </span>
          </p>
          <p class="item-data">
            <span><img :src="this.$store.state.avatarUrl" alt=""></span>
          <!-- <span class="item-nickname">{{details.creator.nickname}}</span> -->
          </p>
        <p class="item-locn"><span class="item-boall">播放全部</span>
        <!-- <span class="item-shoucan">收藏({{details.subscribedCount}})</span>
        <span class="item-shoucan">分享({{details.shareCount}})</span> -->
        <span class="item-shoucan">下载全部</span>
        </p>
        <p class="item-biaoqia">  
          <span class="item-biaoqian">标签:</span>
          <!-- <span v-for="(item,index) in details.tags"
         :key="index" class="item-biaoqians">{{item}}/</span> -->
         </p>
      
         <p class="item-gequ">
           <span class="item-gequ1"> 歌曲:{{this.$store.state.length}}</span>
           <!-- <span class="item-gequ2"> 播放: {{details.playCount}}</span> -->
         </p>
         <!-- <p class="item-jianjie">简介:{{details.description}}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'createitem',
    props:{
      itemlist:{
        type:Object,
        required:true
      }
    }
    
  }
</script>

<style scoped>
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
  margin: 100px auto;
  width: 70%;
}
.item-img{
  flex: 0;
  margin-top: 30px;
  margin-left: 30px;
}
  .item-img img{
    width: 180px;
    height: 180px;
  }
  .item-tltie{
   height: 310px;
   overflow: hidden;
  }
  .item-gedan{
    color: brown;
    border: 1px solid brown;
     margin-left: 15px;
  }
  .item-lieb{
    margin-top: 20px;
  }
  .item-name{
    font-size: 24px;
    color: #373737;
    font-weight: 700;
    margin-left: 10px;
  }
  .item-data{
    margin-left: 15px;
    line-height: 30px;
  }
  .item-data img{
    width: 30px;
    height: 30px;
    border-radius:60% ;
  }
  .item-nickname{
    color: #507DAF;
   
   
    margin-left: 10px;
     
   
  }
  .item-locn{
    margin-left: 20px;
    margin-top: 10px;
  }
  .item-boall{
    background-color: crimson;
    width: 120px;
    height: 30px;
    display: inline-block;
    text-align: center;
    border-radius: 30px;
    line-height: 30px;
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .item-shoucan{
    background-color: rgb(236, 231, 232);
    border: 1px solid rgb(122, 118, 118);
    width: 100px;
    height: 30px;
    display: inline-block;
    text-align: center;
    border-radius: 30px;
    line-height: 30px;
    color: rgb(26, 20, 20);
    margin: 0 10px;
  }
  .item-biaoqia{
    margin-left: 20px;
    margin-top: 20px;
  }
  .item-biaoqians{
    margin-left: 10px;
    color: #507DAF;
  }
  .item-gequ{
    color:#373737 ;
     margin-left: 20px;
   margin-top: 5px;
  }
   .item-gequ2{
    margin-left: 10px;
   
  }
  .item-jianjie{
    margin-left: 20px;
  }
</style>