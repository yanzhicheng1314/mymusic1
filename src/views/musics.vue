<template>
  <div class="musics">
     <div class="item-router">
    <div class="item-home item-home1"> 
      <router-link to="/home">发现音乐</router-link>
      </div>
     <div class="item-home">
       <router-link to="/topic">专属定制</router-link> 
       </div>
      <div class="item-home">
        <router-link to="/search">排行榜</router-link>
        </div>
       <div class="item-home"> 
          <router-link to="/play">歌单</router-link>
           </div>
  </div>

  </div>
</template>

<script>
import navbar from "./../components/common/navbar.vue"
import navbaritem from "./../components/common/navbaritem.vue"
  export default {
    name: 'musics',
    components: {
      // navbar,
      // navbaritem
    },
      methods: {
    itemClick() {
        this.$router.replace(this.path);
      console.log(11);
     
    },
  },
    
  }
</script>

<style scoped>
.musics{
  width: 150px;
  position: fixed;
}
a {
  text-decoration: none;
}
 .item-router{
   display: flex;
   flex-direction: column;
   width: 100px;
   line-height: 100px;
   text-align: center;

 }
 .item-home{
   width: 100px;
   height: 100px;
 }
 .item-home1{
   font-size: 22px;
   color: red;
 }
</style>