<template>
  <div id="app">
    
    <Mine/>
    <div class="item">
   <musics/>
 <router-view/>
 </div>
<navbar class="navbar-item"/>

  </div>
</template>

<script>
import Mine from "./views/mine/Mine.vue"
import musics from './views/musics.vue'
import navbar from  "./components/common/navbar.vue"
export default {
  name:'App',
  components: {
       Mine,
       musics,
       navbar
  },
 

    
}
</script>
<style lang="less" scoped>
.item{
  display: flex;
  justify-content: space-between;
}
 
</style>
