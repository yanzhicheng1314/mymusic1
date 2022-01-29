<template>
  <div class="childloginnext">
    <Nav>
      <div slot="left" @click="xclick">&lt;</div>
      <div slot="center" class="center"
      >立即注册></div>
    </Nav>
    <div class="input-group margin-top">
      <input type="tel" v-model="phoneNumber" 
      placeholder="输入手机号">
    </div>
    <div class="input-group">
      <input type="password" v-model="password" 
      placeholder="设置登录密码，不少于8位">
    </div>
    <div class="button-next">下一步</div>
  </div>
</template>

<script>
import Nav from "../../../components/common/Nav.vue"
  export default {
    name: 'childloginnext',
    components: {
      Nav
    },
    data() {
      return {
       phoneNumber:'',
       password:''
      };
    },
    methods: {
      xclick(){
        this.$router.go(-1)
      }
    }
    
  }
</script>

<style scoped>
  .childloginnext {
    height: 896px;
    width: 414px;
    margin: 0 auto;
   
    
}
.input-group{
  width: 90%;
  height: 34px;
   line-height: 34px;
    border-bottom: 3px solid #bcbdbc;
    margin: 10px auto;
   

}
.input-group>input{
  outline: none;
  width: 100%;
  height: inherit;
  font-size: 18px; 
}
.margin-top{
  margin-top: 44px;
 
}
.button-next{
  width: 80%;
  margin: 30px auto;
  height: 35px;
   line-height: 35px;
  font-size: 18px;
  background-color: pink;
  border-radius: 60px;
  text-align: center;
}
</style>