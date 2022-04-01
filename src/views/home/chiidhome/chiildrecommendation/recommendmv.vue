<template>
  <div class="recommendmv">
      <h3 class="tilte">推荐mv></h3>
      
      <div class="myvideos">
    <ul v-for="item in recommendmv" :key="item.id"
    class="ulitem" 
    @click="mvclick(item.id)">
      <li class="coverUrl">
        <img :src="item.picUrl" alt="">
        </li>
        <li>{{item.name}}</li>
        <li>{{item.artistName}}</li>
    </ul>
    </div>
   
  </div>
</template>

<script>


  export default {
    name: 'recommendmv',
    data() {
      return {
        mvurl: '',
      };
    },
       props: {
    recommendmv: {
      type: Array
    },
  },
  methods: {
    mvclick(mvid){
      console.log(mvid);
         this.$router.push({name:'mvdetail',params:{mvid:mvid}})
    }
  }
  }
</script>

<style scoped>
.recommendmv{
  margin: 50px 0 0 280px;
}
  .tilte{
  font-size: 24px;
  color: black;
  padding: 15px;
}
  .myvideos{
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-self: start;
}
.ulitem{
  padding: 15px;
  width: 350px;
  cursor: pointer;
  list-style: none;
}
  .coverUrl>img{
    height: 200px;
    width: 300px;
    border-radius: 10px;
  }
</style>