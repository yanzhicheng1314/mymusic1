<template>
  <div id="app">   
    <Mine/>
   <musics/>
 <router-view/>

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
       navbar,
     
  },
 

    
}
</script>
<style scoped>
 @import './assets/css/base.css';
 
 
</style>
