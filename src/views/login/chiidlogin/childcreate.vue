<template>
  <div class="childcreate">
    <Nav>
      <div slot="left" @click="xclick">&lt;</div>
      <div slot="center" class="center"
      >立即注册</div>
    </Nav>
    <div class="input-group margin-top">
      <input type="tel" v-model="phoneNumber" 
      placeholder="输入手机号"
       autocomplete="off" autofocus>
    </div>
    <div class="input-group">
      <input type="password" v-model="password" 
      placeholder="设置登录密码，不少于8位" 
      autocomplete="off">
    </div>
    <div :class="{active:isallempty}" 
    class="button-next" @click="clicknext">下一步</div>
   <toast :message='message' :show="show"/>
  </div>
</template>

<script>
import Nav from "../../../components/common/Nav.vue"

import toast from "../../../components/common/toast/toast.vue"

import {getcellphone}from "../../../network/login"

 export default {
    name: 'childcreate',
    components: {
      Nav,
      toast
    },
    data() {
      return {
        
            phoneNumber:'',
             password:'' , 
             message:'不好意思，你的手机号码已经注册过啦',
             show:false
      };
    },
    methods: {
      xclick(){
        this.$router.go(-1)
      },
      clicknext(){
           getcellphone({phone:this.phoneNumber}).then((res)=>{
         console.log(res);
        if(res.data.exist===1){
         this.show=true
          setTimeout(()=>{
      this.show=false
      },2000)
       return false
      }
       this.$router.push({name:'childldcreatephone',
        params:{phoneNumber:this.phoneNumber}});
      })
     
       
      
      }
    },
    computed: {
      isallempty(){
       return  this.phoneNumber.length==11 && 
        this.password.length>=6
      }
    },
    created () {
     
    }

    
  }
</script>

<style scoped>
  .childcreate {
   
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
.button-next{
  width: 80%;
  margin: 30px auto;
  height: 35px;
   line-height: 35px;
  font-size: 18px;
  background-color:red;
  border-radius: 60px;
  text-align: center;
    pointer-events: none;
}
.active{
  color: #fff;
   pointer-events:auto;
}
</style>