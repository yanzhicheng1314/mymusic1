<template>
  <div class="home">
    <div class="home-item">
      <el-link href="https://element.eleme.io" target="_blank">
        <router-link to="/home/recommendation">个性推荐</router-link>
      </el-link>
      <el-link href="https://element.eleme.io" target="_blank">
        <router-link to="/home/chiilexclusive">专属定制</router-link>
      </el-link>
      <el-link href="https://element.eleme.io" target="_blank">
        <router-link to="/home/childsong">歌单</router-link>
      </el-link>
      <el-link href="https://element.eleme.io" target="_blank">
        <router-link to="/home/childranking">排行榜</router-link>
      </el-link>
      <el-link href="https://element.eleme.io" target="_blank">
        <router-link to="/home/childsinger">歌手</router-link>
      </el-link>
      <el-link href="https://element.eleme.io" target="_blank">
        <router-link to="/home/childthemusic">最新音乐</router-link>
      </el-link>
    </div>
    <router-view />
   
  </div>
</template>

<script>


// import {
//   gethomepagebanner,
//   getrecommendresource,
//   getalbumnewest,
//   getrecommendsongs,
// } from "../../network/home";
export default {
  name: "Home",
  components: {

  },
 
  
};
</script>

<style scoped>
.home {
  width: 100%;
  margin: 100px auto;
}
.home-item {
  margin-left: 300px;
}
.home-item a {
  padding: 10px;
  font-size: 20px;
}
</style>