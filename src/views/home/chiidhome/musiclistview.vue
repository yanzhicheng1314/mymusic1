<template>
  <div class="clooection-block">
     <h3 class="tilte" style="font-size:24px;">每日推荐</h3>
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
/**
 * 华语歌单
 */
<script>

  export default {
     name: 'musiclistview', 
    props:{
    recommends:{
      type:Array,
     default() {
        return {}
      }
    },
    recommendsongs:{
        type:Array,
     default() {
        return {}
      }
    
    }
    },
    methods: {
      items(id){
        console.log(id);
        this.$store.commit('gedanId',id)
          this.$router.push({name:'detail',params:{id}})
      },
      songsclick(){
        this.$router.push({name:'homerecommendsongs',query:{recommendsongs:this.recommendsongs}})
      }
    }
    
  }
</script>

<style scoped>
.item img{
   width: 180px;
   border-radius: 10%;
 
 }
.clooection-block{
     margin: 0 auto;
    width: 100%;
    position: relative;
    left: 20%;
}
  .items{
   display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    
  }
  .item{
   width: 350px;
   margin: 20px 0 20px 0;
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