<template>
  <div class="lyric" >
   
    <div
      v-for="(item, index) in this.$store.state.userName"
      :key="index"
      class="userName" 
    >
      <span class="picurlimg">
        <img :src="item.al.picUrl" alt="" />
      </span>
      <div class="itemName">
      <span>{{ item.name }}</span>
      <p>{{ item.ar[0].name }}</p>
      </div>
    </div>
  
    <div class="lrcContainer">
      <div class="lrc" ref="lrcs">
        
          <p class="lrc-p"       
          v-for="(item,indez) in lrcData"
          :key="indez" 
        >  
        <span class="itemlyric" :class="{'actives'
         :currentTime>=indez&&currentTime<=indez+1}">
          {{srcollLrc(indez)}}{{item}}
        </span>            
        </p>
      </div>
    </div>
  
  </div>
</template>
    
<script>
import { getlyric } from "../../network/detail";

export default {
  name: "lyric",
  components: {

  },
  data() {
    return {
      lrcData: {},
      allkeys: [],
      isavtive: true,
    
    };
  },
  props:{
    current:{
      type:Number,
      default:0
    }
  },
  methods: {
    getlrcArr() {
      for (let i in this.lrcData) {
        this.allkeys.push(i);
      }
     
    },
    
    srcollLrc(index) {
      if (
        parseInt(this.$store.state.currentTime) >= 
        this.allkeys[index] &&
        parseInt(this.$store.state.currentTime) < 
        this.allkeys[index+1]
      ) {
        this.$refs.lrcs.style.top = -(30 * index) + "px";
       
      }
    },
   
  },
 
  computed: {
    currentTime() {
      return parseInt(this.$store.state.currentTime);
    },
  },
  mounted ()  {
if(this.$store.state.luricid!=null){
 getlyric({ id: this.$store.state.luricid }).then((res) => {
      var lrcArr = [];
    
      var lyrisc = res.data.lrc.lyric.split("\n");

      const reg = /\[\d*:\d*(\.|:)\d*]/g;
      for (let i = 0; i < lyrisc.length; i++) {
        var timeReg = lyrisc[i].match(reg);
        if (!timeReg) continue;
        var t = timeReg[0];

        var min = Number(t.match(/\[\d*/i).toString().slice(1));
        var second = Number(t.match(/\:\d*/i).toString().slice(1));
        var time = min * 60 + second;

        var content = lyrisc[i].replace(timeReg, "");
        lrcArr[time] = content;
      }
      this.lrcData = lrcArr;
      this.getlrcArr()
    
    
    });
   
     
  }
    },
   
  updated() {},
};
</script>

<style scoped>
.lyric {
  margin: 200px auto;
  /* height: 60%; */
    width: 100%;
  
   position: relative;
  left: 45%; 
  /* background-color: burlywood; */

}

.lrcContainer{
  width: 440px;
  height: 435px;
  overflow: scroll;
  position: relative;
  text-align: center;
}
.lrc{
  width: 100%;
  position: absolute;
  top: 0;
}
.picurlimg img{
  width: 200px;
  height: 200px;
   border-radius: 50%;
  
}
.picurlimg{
 position: absolute;
   right: 130%;
}
.actives {
  color: rgb(238, 14, 81);
}
.userName{
  width: 193px;
    height: 80px;
    position: relative;

}
.itemName{
  position: absolute;
  left: 150px;
  width: 200px;
}
.itemName span{
  font-size: 19px;
}
.itemName p{
   color:  #87878A;
}
/* .itemlyric{
  color:  #87878A;
} */
</style>