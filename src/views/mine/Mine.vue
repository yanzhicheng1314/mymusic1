<template>
  <div class="mine">
  <div class="item-top">
   <span class="item-tltie">网易云音乐</span>
   <span class="item-rigch"><span class="left">&lt;</span>
        <span class="rigch">&gt;</span> 
      <span class="item-input">
        <input type="text" @blur="inputclick" 
       placeholder="请输入内容" clearable v-model="int">
 
       </span>
       </span>
         </div>
         <div class="item-button" v-if="!username">
         <span class="item-imgs"> <img src="../../assets/img/mine/我的.png" alt=""></span>
      <span class="name" @click="clicklogin">{{isLogin}}</span> 
</div>
    <div class="item-button" v-else>
         <span class="item-imgs"> <img src="../../assets/img/mine/我的.png" alt=""></span>
      <span class="name" @click="clicklogin">{{username}}</span> 
</div>
<div class="serch" v-if="this.int.length>=1"
 >
  <div class="serch-item" v-for="(item,index)
   in searcharray" :key="index"
    @click="searchidclick(item.id)">
   <a href="#">{{index+1}}</a>
     <a href="#" class="item-name">{{item.name}}</a>
     <a href="#" class="item-name1" v-for="(item,indez) in item.artists" :key="indez">
        <a href="#">{{item.name}}</a>
     </a>
  </div>
  
</div>
  </div>
</template>

<script>
import {getsearch} from '../../network/mine'
import {getsongurl} from '../../network/home'
 export default {
    name: 'Mine',
    components: {
  

   
    },
    data() {
      return {
         isLogin:'未登录',
         int:'',
         searcharray:[],
      };
    },
    methods: {
      clicklogin(){
       this.$router.push('/login')
      },
        inputclick(){
          if(this.int.length>=1){
  getsearch({limit:10,keywords:this.int}).then((res)=>{
          console.log(res);
              this.searcharray= res.data.result.songs
      })
      
          }
          
         
    },
    searchidclick(id){
      getsongurl({ id: id }).then((res) => {  
             
          let url = res.data.data[0].url;
           this.$store.commit('songurl',url)
          this.int=''
         
         
      });
    },
   
    },
    computed: {
      username(){
        return this.$store.state.currentUser
      }
    }

  

    
  }
</script>

<style scoped>
a{
  text-decoration: none;
}
.currindex{
  display: none;
}
.serch{
  right: 60%;
  margin-top: 60px;
  z-index: 999;
   width: 400px;
   background-color: #fff;
   display: flex;
   flex-direction: column;
    position: fixed;
}
.serch :hover{
  background-color: red;
}
.serch-item{
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
}
.serch-item a{
  color: black;
}
.serch :hover{
 background-color: pink;
}
 .serch-item .item-name{
   margin-left: 20px;
 }
 .serch-item .item-name1{
   margin-left: 5px;
 }
.mine{
 background-color:#EC4141 ;
 width: 100%;
 height: 60px;
 display: flex;
 justify-content: space-between;
  /* position: fixed; */
  position: relative;
  top: 0;
}
.item-top{
  width: 600px;
  display: flex;
  justify-content: space-between;
 
  position: relative;
  height: 60px;
  line-height: 60px;
}
.item-tltie{
  font-size: 24px;
  color: #fff;
  margin-left: 20px;
}
.left ,.rigch{
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 1px solid ;
   line-height: 24px;
    margin-top: 10px; 
    text-align: center;
   color: #FFFFFF;
 border-radius: 50px;
    background-color: rgb(27, 25, 25) 0 0 repeat;
    opacity: 0.5;
    font-size:18px;
    margin: 0 10px;
  
}  
.item-input input{
  font-size: 12px;
  color: rgb(22, 15, 15);
   height: 30px;
   width: 180px;
   text-align: center;
    border-radius: 60px;
    background-color: rgb(27, 25, 25) 0 0 repeat;
    opacity: 0.5;
}
.item-button{
  display: flex;
 justify-content: center;
 margin-right: 250px;

}
.item-imgs img{
  height: 60px;
  width: 60px;
}
.name{
  line-height: 60px;
}


</style>