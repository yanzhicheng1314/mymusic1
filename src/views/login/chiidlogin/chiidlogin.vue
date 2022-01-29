<template>
  <div class="chiidlogin">
   
    <Nav>
      <div slot="left" @click="xclick" class="left">&lt;</div>
      <div slot="center">立即登录</div>
    </Nav>
    <el-form :model="loginForm" :rules="loginformrules"
     ref="ruleForm" 
    label-width="100px" class="demo-ruleForm">
  <el-form-item label="手机号码" prop="phone">
    <el-input v-model="loginForm.phone"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input v-model="loginForm.pass" type='password'></el-input>
  </el-form-item>
  </el-form>


    <div class="button-next" @click="loginclick">登录</div>
   
  </div>
</template>

<script>
import Nav from "../../../components/common/Nav.vue";


import {getloginphone}from "../../../network/login"
export default {
  name: "chiidlogin",
  components: {
    Nav,
   
  },
  data() {
    return {
  
     currentUser:null, //当前用户
      isLogin:false,   //是否登录
      token:'',    //登录后的token
  
      loginForm :{
         phone: '',
      pass: ''
      },
    
        loginformrules: {
          phone: [
            { required: true, message: '请输入号码', trigger: 'blur' },
            {min: 11, max: 11, message: '请输入11位号码', trigger: 'blur' }
          ],  
          pass: [
              { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
          ],
    }
    }
    
  },
  methods: {
    xclick() {
      this.$router.go(-1);
    },
      loginclick(){
        this.$refs.ruleForm.validate((valid)=>{
           
  getloginphone({phone:this.loginForm.phone,password:this.loginForm.pass})
  .then((res)=>{   
     console.log(res);        
      if(res.data.code==200){ 
     window.sessionStorage.setItem('token',res.data.token);
        //  window.sessionStorage.setItem('token',res.data.profile.nickname);
      this.currentUser= res.data.profile.nickname
      this.$store.commit('userid',this.currentUser)  
         this.$message.success('登录成功')
        setTimeout(()=>{
         
         this.$router.push({name:'Home'})
        },2000) 
      }else{
        this.$message.error('登录失败')
        
      }
   })
        })
 
  }
  },

};
</script>

<style scoped>
.chiidlogin {
  height: 896px;
  width: 414px;
  margin: 0 auto;
}
.el-form-item{
  margin-top: 20px;
}
.el-form-item__label{
 line-height: 75px;
}


.button-next {
  width: 80%;
  margin: 30px auto;
  height: 35px;
  line-height: 35px;
  font-size: 18px;
  background-color: rgb(253, 3, 3);
  border-radius: 60px;
  text-align: center;
}
</style>