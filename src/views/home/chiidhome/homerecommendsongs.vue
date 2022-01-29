<template>
 <div class="homerecommendsongs">
       <div class="item-list">
      <span>操作</span>
       <span>标题</span>
        <span>歌手</span>
         <span>专辑</span>
          <span>时间</span>
  
    </div>
  <div class="item-tltie" v-for="(item,index) in 
  songs" :key="index"  @click="songclick(item.id)"
   :class="{on:index%2==0,off:index%2!=0}"
   @mouseenter="itemleave(index)">
  <span>{{index+1}}</span>
    <span class="item-name"></span>
      
       <span class="item-name">{{item.name}}</span>
    <span class="item-name">{{item.ar[0].name}}</span>
    <span class="item-name">{{item.al.name}}</span>
      <span class="item-name">{{item.publishTime}}</span>
    
  </div>
 
 </div>
</template>

<script>
import {getsongurl} from '../../../network/home'
export default {
    
 name: 'homerecommendsongs',
 data () {
  return {
    songs:[],
    url:''
  };
 },
 methods: {
    itemleave(index){
        console.log(index);
      },
  songclick(id){

        //  this.$emit('sid',id)
        //  console.log(id);
      getsongurl({ id: id }).then((res) => {        
         let url = res.data.data[0].url;
           this.$store.commit('songurl',url)
      })
      },
     
 },
 created () {
    this.songs= this.$route.query.recommendsongs
 }
}
</script>

<style scoped>
.item-list{
   display: flex;
   justify-content: space-between;
}

.item-list span{
 font-size: 18px;
 width: 210px;
 height: 40px;

}
.item-tltie{
  display: flex;
  justify-content: space-between;
}
.item-tltie:hover{
  background-color: rgb(241, 225, 225);
}


  .item-name{
    height: 40px;
    width: 210px;
     line-height: 40px;
  }
    .on {
      background: #fff;
      
    }
    .off {
      background: rgb(231, 231, 228);
     
    }
</style>