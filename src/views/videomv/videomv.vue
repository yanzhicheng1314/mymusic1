<template>
  <div class="videomv">
    <div class="myvideo">
     <span class="routervideo">
       <router-link to="/videomv/myvideo">视频</router-link>
       </span>
        <span class="routermv"> 
          <router-link to="/videomv/mymv">MV</router-link>
        </span>
      <router-view/>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'videomv',
    
  }
</script>

<style scoped>
  .videomv{
    width: 100%;
    position: relative;
    margin-left: 250px;
    margin-top: 100px;
  }
  a{
   text-decoration: none;
  }
  .routervideo a{
     font-size: 24px;
     color: #373737;
     padding: 15px;  
  }
  
  .myvideo a:hover{
 font-size: 24px;
     color: #373737;
     padding: 15px;  
  }
</style>