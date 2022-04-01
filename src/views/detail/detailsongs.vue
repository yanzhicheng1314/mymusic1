<template>
  <div class="detailsongs">
    <div class="item-list">
      <span>操作</span>
      <span>标题</span>
      <span>歌手</span>
      <span>专辑</span>
      <span>时间</span>
    </div>
    <div
      class="item-tltie"
      v-for="(item, index) in songs"
      :key="index"
      :class="{ on: index % 2 == 0, off: index % 2 != 0 }"
    >
      <span class="indexspan"
        >{{ index + 1 }}
        <span class="likeimg" @click="imgclick(item)">
          <img src="../../assets/img/detail/02.png" alt=""
        /></span>
      </span>
      <div class="item-name" @click="songclick(item.id)">
        <span class="item-name"></span>

        <span class="item-name">{{ item.name }}</span>
        <span class="item-name">{{ item.ar[0].name }}</span>
        <span class="item-name">{{ item.al.name }}</span>
        <span class="item-name">{{ item.publishTime }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getsongurl } from "../../network/home";
import { getsongdetail } from "../../network/detail";

export default {
  name: "detailsongs",
  data() {
    return {
       islike:true,
    };
  },
  props: {
    data() {
     
      return {};
      
    },
  },
  methods: {
    songclick(id) {
     
      getsongdetail({ ids: id }).then((res) => {
        let songurl = res.data.songs;
        this.$store.commit("userName", songurl);
        this.$store.commit("luricid", id);
      });

      this.$emit("sid", id);
      getsongurl({ id: id }).then((res) => {
         if(res.data.data[0].code==200){
            let url = res.data.data[0].url;
        this.$store.commit("songurl", url);
         }else{
           alert('歌曲获取失败')
         }
       
      });
    },
    imgclick(item) {
      this.$store.commit("likeid", item);

    },
  },
  computed: {
    songs() {
      return this.$store.state.songs;
    },
  },
  mounted() {},
  created() {},
};
</script>

<style scoped>
.detailsongs {
  width: 80%;
  margin: 0 auto;
}
.on {
  background: #fff;
}
.off {
  background: rgb(231, 231, 228);
}
.item-list {
  width: 80%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
}

.item-list span {
  font-size: 18px;
  width: 210px;
  height: 40px;
}

.item-tltie {
  display: flex;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
}
.item-tltie:hover {
  background-color: rgb(241, 225, 225);
}

.item-name {
  display: flex;
  flex: 1;
}
.likeimg {
  cursor: pointer;
  margin-top: 5px;
  margin-left: 10px;
}
.likeimg img {
  width: 20px;
  height: 20px;
}
</style>