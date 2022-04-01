<template>
  <div class="homealbumnewest" v-if="albumslist.length">
    <h3 class="tilte" style="font-size: 24px">最新专辑</h3>
    <div class="items">
    <div class="item" v-for="(item, index) in albumslist" :key="index">
      
        <div class="grid-content bg-purple"
        @click="songClick(item.id)">
          <img :src="item.picUrl" :alt="item.name" />
          <span class="name">
            {{ item.name }}
            {{ item.alias[0] }}
            <span>{{ item.artist.name }}</span>
           
          </span>
          <!-- <div class="bofangclick" @click="songClick(item.copyrightId)">
           <div class="item-imag"> <img src="../../../assets/img/home/播放.png" alt=""/></div>
          </div> -->
        </div>
        
    </div>
    </div>
  </div>
</template>

<script>
import { getsongurl } from "../../../network/home";
export default {
  name: "homealbumnewest",
  props: {
    albumslist: {
      type: Array,
      default() {
        return {};
      },
    },
  },
  methods: {
    songClick(id) {
    //  console.log(id);
      //  getsongurl({ id: id }).then((res) => {
      //    let url = res.data.data[0].url;
      //   this.$store.commit('songurl',url)
       
      //  });
       this.$router.push({name:'detail',params:{id}})
    },
  },
};
</script>

<style scoped>
.homealbumnewest {
    margin: 0 auto;
    width: 100%;
    position: relative;
    left: 20%;
    height: 600px;
  
}
.grid-content img {
  width: 60px;
  height: 60px;
  border-radius: 10%;
}
.item :hover{
  background-color: rgb(217, 228, 228);
}
.bofangclick img {
  width: 20px;
  height: 20px;
}
.items{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
   overflow: hidden;
  position: relative;
}
.item{
  width: 300px;
  height: 70px;
   align-content: center;
   overflow: hidden;
   border-radius: 10px;
}
.name{
  /* position: absolute; */
  /* margin-left: 70px;
  margin-top: -80px; */
 margin-top: -80px;
 
}
.grid-content{
width: 400px;
height: 100%;
 line-height: 100px;
}
.item-imag{
  

}
</style>