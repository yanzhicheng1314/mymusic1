<template>
  <div class="myvideo">
    <div>最新视频</div>
    <div class="myvideos">
    <ul v-for="item in videocommend" :key="item.data.vid"
    class="ulitem" 
    @click="videoclick(item.data.vid)">
      <li class="coverUrl">
        <img :src="item.data.coverUrl" alt="">
        </li>
        <li>{{item.data.title}}</li>
    </ul>
    </div>
  </div>
</template>

<script>
import {getvideotimeline} from '../../../network/videomv'
  export default {
    name: 'myvideo',
    data() {
      return {
        property: 'value',
        videocommend:[]
      };
    },
    methods: {
      videoclick(vid){
       this.$router.push('/videomvdetail/'+vid)
      }
    },
    created () {
      getvideotimeline().then((res)=>{
           console.log(res);
         if(res.data.code===200){
             this.videocommend=res.data.datas
          }else {
            alert('请求失败')
          }
      })
    }
    
  }
</script>

<style scoped>
.myvideos{
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-self: start;
}
.ulitem{
  padding: 15px;
  width: 400px;
  cursor: pointer;
  list-style: none;
}
  .coverUrl>img{
    height: 200px;
    width: 300px;
    border-radius: 10px;
  }
</style>