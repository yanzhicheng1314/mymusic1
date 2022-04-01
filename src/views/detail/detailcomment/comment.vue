<template>
  <div class="comment">
    <textarea class="textare" v-model="textares"></textarea>
    <button class="button" @click="buttonclick">评论</button>
    <div class="commenitem">精彩评论</div>
      <ul v-for="(item,index) in hotComments" :key="index"
      class="items">
      <li class="avatarUrlimg"> 
        <img :src="item.user.avatarUrl" alt="">
        <span class="nickname">{{item.user.nickname}}</span>
        <span class="content">{{item.content}}</span>
       
        </li> 
        <li class="timeStr">{{item.timeStr}}</li>
       
      </ul>
    <div class="commenitem">最新评论</div>
     
      <ul v-for="(item,index) in comments" :key="item.commentId"
       class="items" >
       <span v-show="indexshow">{{index}}</span>
        <li class="buttondelect">
           <button v-show="item.user.userId==userId" 
           @click="delectclick(item.commentId)"
          >删除评论</button></li>
        <li class="avatarUrlimg" >
          <img :src="item.user.avatarUrl" alt=""
           >
        
        
          <span class="nickname">{{item.user.nickname}}</span>
         <span class="content">{{item.content}}</span>
         
        </li>
        
         <li class="timeStr">{{item.timeStr}}</li>
        
         
      </ul>
     
  </div>
</template>

<script>
import {comment} from "../../../network/detail"
  export default {
    name: 'comment',
    data() {
      return {
        // gendanId:0,
        indexshow:false,
        textares:null,
        commentId:{} 
        
      
      };
    },
    methods: {
      buttonclick(){   
       
       comment({t:1,type:2,id:this.gendanId,content:this.textares}).then((res)=>{
          
          this.commentId=res.data.comment
          this.$store.commit('commentId',this.commentId)
          this.textares=''
       })
      },
      delectclick(commentId){
        if(confirm('确定删除吗')){
      comment({t:0,type:2,id:this.gendanId,commentId:commentId}).then((res)=>{
         
           this.$store.commit('delectcomment',commentId)
         
     
      })
        }
     }
    },
    computed: {
       //最新评论
      comments(){
        return this.$store.state.comments
      },
      //精彩评论
      hotComments(){
    return this.$store.state.hotComments
      },
        userId(){
    return this.$store.state.userId
      },
      gendanId(){
        return   this.$store.state.gedanId
      }
        
    },
    created () {
     
    }
  
    
  }
</script>

<style scoped>
.comment{
  width: 80%;
  margin: 0 auto;
}
  .buttondelect{
    float: right;
    margin-bottom: 40px;
  
  }
  .buttondelect button{
  width: 80px;
    height: 40px;
  }
.button{
  float: right;
  width: 80px;
  height: 30px;
  text-align: center;
  border-radius: 10px;
  background-color: #F2F2F2;
  margin-right: 60px;
  margin-top: 10px;
}
  .delectclick{
    float: right;
     margin-top:-40px;
  }
  .delectclick button{
    height: 30px;
    width: 80px;
    border-radius: 10%;
    color: rgb(65, 30, 146);
  }
.textare{
  width:90%;
  height: 80px;
  margin-left: 80px;
  border-radius: 10px;
  font-size: 24px;
  color: rgb(68, 68, 70);
}
  .avatarUrlimg img{
  height: 40px;
  width: 40px;
  
  }
 
  .items{
     height: 90px;
     width: 100%;
    border-bottom: 1px solid #dbd7d7;
     list-style: none;
  }
  .nickname{
    color:#507DAF ;
    padding: 5px; 
  }
  .content{
    font-size: 14px;
  }
  .timeStr{
    padding: 5px;
    font-size: 14px;
  }
  .commenitem{
    margin: 70px;
  }
</style>