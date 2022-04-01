<template>
  <div class="videomvdetail">
    <div class="videotitle">{{videotitle}}</div>
     <div>
     <div class="video-player-play">
    <video-player
     class="video-player vjs-custom-skin"
                      ref="videoPlayer"
                      :playsinline="true"
                      :options="playerOptions">
        </video-player>
        </div>
       <ul class="ulavatarUrl">
         <li class="avatarUrl">
           <img :src="videodetail.avatarUrl" alt="">
           <span>{{videodetail.creator.nickname}}</span>
         </li>
         <li>{{videodetail.title}}</li>
       </ul>
       </div>
       <div>
         <div>相关视频</div>
          <ul v-for="item in videorecommend" 
          :key="item.vid" class="commendul"
          @click="commendclick(item.vid)">
          <li class="commendimg"><img :src="item.coverUrl" alt="">
          <span>{{item.title}}</span></li>
          </ul>
       </div>
  </div>
 
</template>

<script>
import {getvideodetail,
getvideourl,
getallvideo}from "../../../network/videomv"


  export default {
    name: 'videomvdetail',
    components: {
      
    },
     data() {
       return {
         vid: null,
         videodetail:null,
         videourl:'',
         myvideo:null,
         videotitle:'',
         videorecommend:[],
          mvurl:'',
     playerOptions: {
                    //播放速度
                    playbackRates: [0.5, 1.0, 1.5, 2.0], 
                    //如果true,浏览器准备好时开始回放。
                    autoplay: false, 
                    // 默认情况下将会消除任何音频。
                    muted: false, 
                    // 导致视频一结束就重新开始。
                    loop: false, 
                    // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    preload: 'auto', 
                    language: 'zh-CN',
                     // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    aspectRatio: '16:9',
                     // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    fluid: true,
                    sources: [{
                        //类型
                        type: "video/mp4",
                        //url地址
                        src: ''
                    }],
                    //你的封面地址
                    poster: '', 
                     //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    notSupportedMessage: '此视频暂无法播放，请稍后再试',
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        //全屏按钮
                        fullscreenToggle: true  
                    }
                }
 
            
       };
     },
     methods: {
      commendclick(vid){
          this.vid=vid
            if(this.vid!=null){
         getvideodetail({id:this.vid}).then((res)=>{
          this.videodetail=res.data.data
          this.playerOptions.poster=this.videodetail.coverUrl
         })
         getvideourl({id:this.vid}).then((res)=>{
       
            this.videourl=res.data.urls[0].url
         this.playerOptions['sources'][0]['src']=this.videourl
           
        })
        getallvideo({id:this.vid}).then((res)=>{
           this.videorecommend=res.data.data
        })
     }
      }
     },
     mounted () {
       if(this.vid!=null){
         getvideodetail({id:this.vid}).then((res)=>{
          this.videodetail=res.data.data
          this.playerOptions.poster=this.videodetail.coverUrl
         })
         getvideourl({id:this.vid}).then((res)=>{
       
            this.videourl=res.data.urls[0].url
         this.playerOptions['sources'][0]['src']=this.videourl
           
        })
        getallvideo({id:this.vid}).then((res)=>{
           this.videorecommend=res.data.data
        })
     }
     },
   
    created () {
     this.vid= this.$route.params.vid
   
      
    }
    
  }
</script>

<style scoped>
.videomvdetail{
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-flow: wrap;
   justify-content: space-around;

}
   .video-player-play{
   
     position: relative;
    
    width: 600px;
    height: 360px;
  }
  .videotitle{
    position: relative;
     left: 30%;
     margin: 100px;
  }
  .vjs-custom-skin > .video-js .vjs-big-play-button{
    border-radius: 50%;
     width: 68px;
  }
   .demo{
    display: inline-block;
    width: 600px;
    height: 338px;
    text-align: center;
    line-height: 100px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    margin-right: 4px;
  }
 
  .demo:hover{
    display: block;
  }
  .video-js .vjs-tech{
    width: 0;
    height: 0;
  }
  
  .video-js .vjs-big-play-button{
   width: 2em;
   border-radius: 50%;
  }
  .ulavatarUrl{
    position: relative; 
  
     list-style: none;
    height: 60px;
    width: 100%;
  }
  .avatarUrl{
    padding: 5px;
  }
  .avatarUrl img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .commendul{
    width: 300px;
  }
  .commendimg{
    list-style: none;
  }
  .commendimg img{
    width: 140px;
    height: 80px;
    border-radius: 10px;
  }
</style>