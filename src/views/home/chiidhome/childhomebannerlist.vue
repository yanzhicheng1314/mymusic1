<template>
  <div class="childhomebannerlist">
     <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(item,index) in banner" :key="index">
      <div class="item-title">
        <span class="item-ti">
          {{item.typeTitle}}</span>
           <img class="lbt" :src="item.imageUrl" alt="">
    </div> 
    </el-carousel-item>
  </el-carousel>
  </div>
</template>
/**
 * 每日推荐
 */
<script>
  export default {
    name: 'childhomebannerlist',
    props:{
      banner:{
        type:Array,
        default(){
          return{}
        }
      }
    }
    
  }
</script>

<style scoped>
.childhomebannerlist{
  position: relative;
  margin-top: 100px;
}
.item-title{
  position: relative;
  text-align: center;
}
span.item-ti{
  display: inline-block;
  position: absolute;
  background-color: red;
  width: 80px;
  color: #fff;
  height: 25px;
  border-radius: 10px;
  /* top: -30px; */
}
   .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  

.el-carousel__container{
   width: 900px;
   margin: 10px auto;
} 

  .lbt{
    width: 100%;
    height: 100%;
  }
</style>