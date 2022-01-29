<template>
  <div class="nav-bar">
         <div class="">
           <audio :src="this.$store.state.url" controls autoplay
  class="music"></audio> 
         </div>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    data() {
      return {
      //  musicurl: '',
      };
    },
   
      
      // activated () {
      //   this.musicurl=this.$store.state.url
      // }
          
         
       
      
    }
    
  
</script>
<style>
   .nav-bar{
    display: flex;
     position: fixed; 
    justify-content: center;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #f6f6f6;
    height: 60px;
    width: 100%;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.5);
  }

</style>