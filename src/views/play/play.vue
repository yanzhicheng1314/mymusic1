<template>
  <div class="playlisthot">
      <playlisthot :catlist="catlist"/>
  </div>
  
</template>


<script>
import playlisthot from "./playchild/playlisthot.vue"
import {getplaylistcatlist}from'../../network/play'
  export default {
    name: 'play',
    components: {
      playlisthot
    },
    data() {
      return {
        catlist:[]
      };
    },

    created () {
      /**
       * 热门歌单分类
       */
      getplaylistcatlist().then((res)=>{
     
          this.catlist=res.data.tags
      })
    }
    
  }
    
</script>

<style scoped>
  .playlisthot{
    /* display: flex;
    justify-content: center; */
  }
</style>