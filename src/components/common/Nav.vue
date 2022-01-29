<template>
  
    <div class="nav">
   <div class="left"> 
     <slot name="left"></slot></div>
    <div class="center"> 
      <slot name="center"></slot></div>
   <div class="right"> 
     <slot name="right"></slot></div>
  </div>
  
</template>

<script>
  export default {
    name: 'Nav',
    
  }
</script>

<style>
  .nav{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    background-color: red;
    color: #fff;
    position: relative;
  }
    .left,.right{
     /* width: 60px; */
     font-size: 24px;
    
   }
   .left img{
     height: 40px;
     width: 40px;
     
   }
   .center{
     flex: 1;
   
   }
</style>