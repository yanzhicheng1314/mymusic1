<template>
  <div class="nav-bar">
       <div v-for="(item,index) in this.$store.state.userName"
       :key="index" class="userName">
       <div class="picurlimg" @click="picurlclick(item.id)">
          <span><img :src="item.al.picUrl" alt=""></span>
       <span class="item-name">{{item.name}}</span>
         <span>{{item.ar[0].name}}</span>
       </div>
       </div>
         <div class="musicst">        
           <audio :src="this.$store.state.url" controls autoplay
  class="music" ref="plyaer"></audio> 
         </div>
       
  </div>
</template>

<script>

  export default {
    name: 'navbar',
   

    data() {
      return {
       currentTime:0
      };
    },
    
    methods: {
      picurlclick(id){
  
        this.$store.commit('luricid',id)
        this.$router.push({name:'lyric',params:
        {current:this.currentTime}})
      },
        addEventHandle(){
          this.$refs.plyaer.addEventListener("timeupdate",()=>{
          this.currentTime=this.$refs.plyaer.currentTime
           this.$store.dispatch('currentTime',this.currentTime)
          })
        }
     
    },
    mounted () {
        this.addEventHandle();
        
    },
      beforeDestroyed(){
        
      }
   
    
    
   
      
          
         
       
      
    }
    
  
</script>
<style >
   .nav-bar{
    display: flex;
     position: fixed; 
    justify-content: space-around;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #f6f6f6;
    height: 60px;
    width: 100%;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.5);
  }
  .musicst{
       margin-right: 300px; 
  }
  .userName{
    width: 200px;
    height: 60px;
  }
.picurlimg img{
  width: 60px;
}
.item-name{

}
</style>