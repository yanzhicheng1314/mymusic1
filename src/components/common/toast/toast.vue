<template>
  <div class="toast" v-show="show">
    <div >{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'toast',
    props:{
      message:{
        type:String
      },
      show:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style>
  .toast{
    position: fixed;
    top: 50%;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: rgb(58, 52, 52);
    box-shadow: 0.8;
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-size: 14px;
    border-radius: 60px;
  }
</style>