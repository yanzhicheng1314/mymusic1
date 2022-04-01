<template>
  <div class="mymv">
    <div>最新MV</div>
    <div class="mymvs">
   <ul v-for="item in allmv" :key="item.id"
    class="mvitem" 
    @click="mvclick(id)">
      <li class="covermv">
        <img :src="item.cover" alt="">
        </li>
        <li>{{item.name}}</li>
    </ul>
    </div>
    
  </div>
</template>

<script>
import {getmvfirst}from '../../../network/videomv'
  export default {
    name: 'mymv',
    data() {
      return {
       allmv:[]
      };
    },
    methods: {
      mvclick(id){
      
      }
    },
    created () {
      getmvfirst({limit:8}).then((res)=>{
        this.allmv=res.data.data
      })
    }
    
  }
</script>

<style scoped>
  .mymvs{
  width: 100%;
  display: flex;
  flex-flow: wrap;
}
.mvitem{
  width: 350px;
  cursor: pointer;
  list-style: none;
}
  .covermv img{
    height: 200px;
    width: 300px;
    border-radius: 10px;
  }
</style>