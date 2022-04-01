<template>
  <div class="newsong">
      <h3 class="tilte" style="font-size: 24px">最新音乐</h3>
    <div class="items">
    <div class="item" v-for="(item, index) in newsong" :key="index">
      
        <div class="grid-content bg-purple"
      @click="newsongclick(item.id)" >
          <img :src="item.picUrl" :alt="item.name" />
          <span class="bof">
            <img src="../../../../assets/img/home/bof.png" alt="">
            </span>
          <span class="name">
            {{ item.name }}
          </span>
       
        </div>
        
    </div>
    </div>
  </div>
</template>

<script>
import { getsongurl } from "../../../../network/home";
import { getsongdetail } from "../../../../network/detail";
  export default {
    name: 'newsong',
      props: {
    newsong: {
      type: Array,
      default() {
        return {};
      },
    },
  },
   methods: {
     newsongclick(id){
       getsongdetail({ ids: id }).then((res) => {
        let songurl = res.data.songs;
        this.$store.commit("userName", songurl);
        this.$store.commit("luricid", id);
      });
     getsongurl({ id: id }).then((res) => {
        let url = res.data.data[0].url;
        this.$store.commit("songurl", url);
      });
     }
   }
    
  }
</script>

<style scoped>
.newsong{
  margin: 3px 0 20px 240px;
}
.tilte{
  padding: 15px;
}
  .item :hover{
  background-color: rgb(217, 228, 228);
}
.bg-purple>img {
  
  width: 60px;
  height: 60px;
   border-radius: 5px;
  
}
.items{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
   overflow: hidden;
  position: relative;
      
}
.item{
  width: 450px;
  height: 70px;
   align-content: center;
   overflow: hidden;
  
   margin: 0 auto;
}
.name{
 
 margin-top: -80px;
 
}
.grid-content{
width: 400px;
height: 100%;
 line-height: 100px;
 position: relative;
  cursor: pointer;
}
.bof{
  position: absolute;
  left: 15px;
  top:-15px;
  height: 14px;
   
}
.bof img{
  width: 24px;
}
</style>