<template>
  <div class="login">
    <!-- <div class="x" @click="xclick">
      <span>&lt;</span>
    </div> -->
    <div>扫码登录</div>
    <!-- <div class="login-img">
      <img src="../../assets/img/mine/音乐.png" alt="">
    </div> -->
    <!-- <div class="login-input" @click="clildlogin">登录</div>
    <div class="login-create" @click="clildcreate">注册</div> -->
  <el-dialog title="扫码登录">
   
        
</el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'login',
    methods: {
      xclick(){
        this.$router.go(-1)
      },
    
      clildlogin(){
        this.$router.push('/chiidlogin')
      },
      clildcreate(){
        this.$router.push('/childcreate')
      }
    }
    
  }
</script>

<style>
   .login{
    height: 896px;
  
    margin: 0 auto;
  
    position: relative;
    border: blue solid;
  }
  /*
.x{
  height: 200px;
  margin-left: 20px;
}
.x span{
  font-size: 26px;
}
.login-img{
  position: absolute;
  left: 40%;
  width: 100%;
  height: 100px;
}
.login-img img{
  height: 80px;
  width: 80px;
}
.login-input{
  height: 40px;
  width: 80%;
  background-color:#fff;
  position: absolute;
    left: 31px;
    bottom: 353px;
    font-size: 20px;
    text-align: center;
    line-height: 40px;
    color: red;
    border-radius: 60px;  
}
.login-create{
    height: 40px;
  width: 80%;
  background-color:#fff;
  position: absolute;
    left: 31px;
    bottom: 273px;
    font-size: 20px;
    text-align: center;
    line-height: 40px;
    color: red;
    border-radius: 60px; 
} */
  
</style>