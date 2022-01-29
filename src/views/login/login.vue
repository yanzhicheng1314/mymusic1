<template>
  <div class="login">
    <div class="x" @click="xclick">
      <span>&lt;</span>
    </div>
    <div class="login-img">
      <img src="../../assets/img/mine/音乐.png" alt="">
    </div>
    <div class="login-input" @click="clildlogin">手机号登录</div>
    <div class="login-create" @click="clildcreate">还没有账号？先去注册吧</div>
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
    width: 414px;
    margin: 0 auto;
    background-color: rgb(223, 216, 216);
    position: relative;
  }
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
}
  
</style>