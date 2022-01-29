<template>
  <div class="childminemyfavorite">
    <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">
    最近播放</div></el-col>

</el-row>
  </div>
</template>

<script>
  export default {
    name: 'childminemyfavorite',
    
  }
</script>

<style scoped>
  .childminemyfavorite{
    height: 200px;
    width: 90%;
    margin: 20px auto;
    
  }
.grid-content{
   padding-top:20px ;
}
</style>