<template>
  <div class="">
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
        console.log(res);
          this.catlist=res.data.tags
      })
    }
    
  }
    
</script>

<style>
  
</style>