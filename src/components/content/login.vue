<template>
  <div class="login"> 
<!-- Form -->

    <el-dialog title="用户登录" width="400px" :visible="visible"
    :modal=false :before-close='handleClose'>
      
   

        <el-form :model="loginForm" :rules="loginformrules"
     ref="ruleForm" 
    label-width="100px" class="demo-ruleForm" v-show="!showQrcode">
  <el-form-item label="手机号码" prop="phone">
    <el-input v-model="loginForm.phone"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input v-model="loginForm.pass" type='password'></el-input>
  </el-form-item>
  </el-form>
     <span v-show="errorinfo">{{errorinfo}}</span>
    <div v-show="showQrcode" class="qrcodes">
      <div class="mask" @click="getQrcode" v-show="showmask">
        二维码过期
      </div>
      <img class="qrcode" :src="qrimg" alt="">
      <div>{{loginHint}}</div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button v-show="!showQrcode" @click="handshowQrcode">
        二维码登陆
        </el-button>
       <el-button v-show="showQrcode" @click="handshowUserpass">
       账号密码登陆
       </el-button>
        <el-button v-show="!showQrcode" @click="getlogin" :plain="true">
          确定登陆</el-button>
       
    </div>
    </el-dialog>

  </div>
</template>

<script>
import {getloginqrkey,
getloginqrcreate,
getloginqrcheck,
getloginrefresh,
getloginphone} from "../../network/login"

  export default {
    name: 'login',
    props:{
      visible:{
        type:Boolean
      }
    }
    ,
     data() {
      return {
        errorinfo:'',
        cookieId:{},
        loginInterval:null,
        loginHint:'',
        showmask:false,
        qrimg:null,
        unikey:'',
        token:'',
        showQrcode:false,
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
      };
    },
    methods: {
      handleClose(){
        this.$emit('updatevisible', false)
      },
      handshowQrcode(){
        this.showQrcode=true
          this.getQrcode()
      },
      getQrcode(){
   getloginqrkey().then((res)=>{
      this.showmask=false
          this.unikey= res.data.data
           
           if(this.unikey.code==200){
         getloginqrcreate({qrimg:this.unikey.unikey,key:this.unikey.unikey}).then((res)=>{
          
             this.qrimg=res.data.data.qrimg
              
             this.loginInterval=setInterval(()=>{
                this.login()
                
              },10000)         
         })
           }
        })
      },
           login(){
                   getloginqrcheck({key:this.unikey.unikey}).then((res)=>{
                     console.log(res);
                if(res.data.code==800){
                  
                       clearInterval(this.loginInterval)
                       this.loginHint='二维码已过期，请点击二维码重新获取'
                          this.showmask=true
                  }
                  else if(res.data.code==803){
                      this.cookieId= res.data.cookie
                        console.log('登录成功');
                        this.refresh()
                          this.handleClose()
                       clearInterval(this.loginInterval)
                  }
              }) 
              },
             
      handshowUserpass(){
         this.showQrcode=false
      },
        refresh(){
           getloginrefresh().then((res)=>{
            console.log(res);
       })
        },

            getlogin(){
       this.$refs.ruleForm.validate((valid)=>{
       getloginphone({phone:this.loginForm.phone,password:this.loginForm.pass})
  .then((res)=>{   
           
      if(res.data.code===200){ 
    //  window.sessionStorage.setItem('token',res.data.token);
        this.token=res.data.token
        this.userId=res.data.account.id
      this.currentUser= res.data.profile.nickname
      this.avatarUrl=res.data.profile.avatarUrl
      this.$store.dispatch('likelist',this.userId)
       this.$store.commit('token',this.token)
      this.$store.commit('userId',this.userId)
      this.$store.commit('currentUser',this.currentUser) 
       this.$store.commit('avatarUrl',this.avatarUrl)  
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
        setTimeout(()=>{
          
          this.handleClose()
        
        },2000) 
      }else{
        this.errorinfo='账号密码错误'
      
        
      }
   })
       })
    }
    },

  }
  
    
</script>

<style scoped>
  .login{
    margin: 100px auto;
  }
  .qrcodes{
     margin-left: 70px;
  }
  .qrcode{
  
    width: 200px;
    height: 200px;
    border: 1px solid pink;
  }
  .mask{
     width: 200px;
    height: 200px;
    background-color: rgba(0, 0,0, 0.4);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
     color: white;
     font-weight: 700;
  }
</style>