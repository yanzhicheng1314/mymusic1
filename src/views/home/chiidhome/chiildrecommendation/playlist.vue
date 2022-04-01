<template>
  <div class="playlist">
    <h3 class="tilte">推荐歌单></h3>
          <div class="items" v-if="recommends.length">
        
       <div class="item"   
       v-for="(item,index) in recommends" :key="index">  
              <div class="grid-content bg-purple"
              @click="items(item.id)">             
                 <img :src="item.picUrl" alt="">
                 <span class="item-count">{{item.playcount}}</span>
                  <p class="name">{{item.name}}</p>
                   </div>  
                  </div>
     </div>
  </div>
</template>

<script>
  export default {
    name: 'playlist',
        props:{
    recommends:{
      type:Array,
     default() {
        return {

        }
      }
    },
   
    },
       methods: {
      items(id){
        console.log(id);
        this.$store.commit('gedanId',id)
          this.$router.push({name:'detail',params:{id}})
      }
    }
    
  }
</script>

<style scoped>
.playlist{
   margin: 20px 0 0 240px;
   
}
  .item img{
   width: 200px;
   border-radius: 10%;
 
 }
.clooection-block{
     margin: 0 auto;
    width: 100%;
    position: relative;
    left: 20%;
}
.tilte{
  font-size: 24px;
  cursor: pointer;
}
  .items{
      display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
    width: 100%;
    cursor: pointer;
    height: 530px;
    overflow: hidden;
    text-align: center;

    
  }
  .item{
   width: 460px;
  margin: 10px auto;
  }
  .grid-content{
    width: 170px;
    position: relative;
  }
  .item-m{
    width: 280px;

  }
  .item-count{
       position: absolute;
    top: 100px;
    margin-top: -80px;
    left: 100px;
    color: #eee0e0;
    
  }
  .item-m img{
    width: 180px;
    border-radius: 10%;
    margin: 20px 0 20px 0;
  }
.p-songs{
  margin-top: -10px;

}
</style>