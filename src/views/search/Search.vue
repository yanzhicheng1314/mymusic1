<template>
  <div class="search">
       <div class="item-tltie" v-for="(item,index) in 
  this.$store.state.likeid" :key="index"
    >
  
  <span class="indexspan">{{index+1}}
  <!-- <span class="likeimg" @click="imgclick(item)"></span> -->
   </span>
    <div class="item-name"  @click="songclick(item.id)">
 <span class="item-name"></span>
      
       <span class="item-name">{{item.name}}</span>
    <span class="item-name">{{item.ar[0].name}}</span>
    <span class="item-name">{{item.al.name}}</span>
      <span class="item-name">{{item.publishTime}}</span>
    </div> 
  </div>
     
  </div>
</template>

<script>
import {getsongurl} from '../../network/home'
  export default {
    name: 'Search',
    data() {
      return {
        
      };
    },
    methods: {
       songclick(id){      
      getsongurl({ id: id }).then((res) => {  
           
         let url = res.data.data[0].url;
           this.$store.commit('songurl',url)
      });
      },
    }
    
   
  }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
 .search{
  margin: 100px auto;
  width: 80%;
  
 }

/* .item-tltie{
   display: flex;
   justify-content: space-between;
   height: 40px;
   line-height: 40px;
 
} */
.item-tltie:hover{
  background-color: rgb(241, 225, 225);
}


  .item-name{
    display: flex;
    flex: 1;
   
  }
   .likeimg{
     cursor: pointer;
     margin-top: 5px;
     margin-left: 10px;
   }
  .likeimg img{
  width: 20px;
  height: 20px;
 
  }



</style>