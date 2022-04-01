<template>
  <div class="mine">
    <el-header>
      <div class="item-top">
        <div class="item-tltie">我的音乐</div>
        <span class="item-rigch">
          <span class="left" @click="leftclick">&lt;</span>
          <span class="rigch" @click="rigchclick">&gt;</span>

          <span class="item-input" v-if="searcharray.length">
            <input
              type="text"
              placeholder="请输入内容"
              clearable
              v-model="searchinfo"
              class="item-input"
              @click="searchclick"
            />
          </span>

          <span class="item-input" v-else>
            <input
              type="text"
              placeholder="请输入内容"
              clearable
              v-model="searchinfo"
              @input="inputkeyup(searchinfo)"
              class="item-input"
            />
          </span>

          <search />
        </span>

        <div class="header-profile">
          <template v-if="!username">
            <div @click="handlelogin" class="itemName">
              <span class="item-imgs">
                <img src="../../assets/img/mine/word.png" alt="" />
              </span>
              <span class="name">未登录></span>
            </div>
          </template>

          <div class="itemName" v-else>
            <span class="item-imgs"> <img :src="avatarUrl" alt="" />
            </span>
            <el-dropdown trigger="click">
  <span class="el-dropdown-link">
   {{ username }} 
   <i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>会员中心</el-dropdown-item>
    <el-dropdown-item>等级</el-dropdown-item>
    <el-dropdown-item>商城</el-dropdown-item>
    <el-dropdown-item disabled>个人信息设计</el-dropdown-item>
    <el-dropdown-item divided>绑定社交账号</el-dropdown-item>
    <el-dropdown-item divided>我的客服</el-dropdown-item>
    <el-dropdown-item divided  @click.native="logout">退出登录
        <!-- <el-popover placement="top" width="160" v-model="visible"> -->
          <!-- <p>确定退出</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible = false"
              >取消</el-button
            >
            <el-button type="primary" size="mini" 
              >确定</el-button
            >
          </div> -->
        
        <!-- </el-popover> -->
    </el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
          </div>

        </div>
        <div class="header-profile">
          <div class="notification">
            <span class="notification-number"></span>
            <svg
              t="1648492830063"
              class="feather feather-bell"
              viewBox="0 0 1024 1024"
              stroke-width="2"
              fill="currentColor"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2340"
            >
              <path
                d="M432.333966 120.470588q0 9.71537-7.286528 16.030361t-18.944972 6.314991-18.459203-6.800759-6.800759-17.487666l0-97.1537q0-7.772296 6.800759-14.573055t18.459203-6.800759 18.944972 6.314991 7.286528 16.030361l0 98.125237zM642.185958 120.470588q0 9.71537-7.286528 16.030361t-17.973435 6.314991q-8.743833 0-16.516129-6.314991t-7.772296-17.001898l0-94.239089q0-10.686907 6.800759-17.973435t17.487666-7.286528q11.658444 0 18.459203 7.286528t6.800759 15.058824l0 98.125237zM513.943074 243.855787q-21.373814-20.402277-44.690702-33.032258-19.43074-10.686907-42.747628-16.030361t-43.719165 7.286528q-28.174573 17.487666-37.404175 46.148008t7.286528 84.037951q10.686907 36.918406 19.43074 53.434535t6.800759 27.203036-4.371917 20.888046-12.144213 26.717268q-2.914611 4.857685-16.030361 25.745731t-31.574953 49.548387-40.318786 61.206831-41.776091 61.6926-36.918406 51.491461-25.745731 30.117647q-25.259962 22.345351-30.117647 39.347249t18.459203 33.518027q11.658444 8.743833 41.290323 19.43074t74.808349 20.888046 105.411765 17.001898 134.072106 6.800759q70.922201 0 129.214421-6.314991t102.497154-15.544592 72.865275-19.43074 41.290323-17.973435q20.402277-11.658444 27.203036-27.203036t-18.459203-37.889943q-8.743833-7.772296-25.745731-29.631879t-37.889943-50.519924-43.233397-61.6926-42.26186-62.178368-34.003795-51.491461-17.973435-31.089184q-5.829222-12.629981-11.172676-21.859583t-7.286528-17.973435-0.485769-18.459203 8.258065-23.316888 13.601518-34.003795 10.686907-41.290323 3.40038-40.804554-8.258065-33.518027q-16.516129-28.174573-35.946869-35.946869t-50.519924-0.971537q-15.544592 2.914611-29.14611 10.686907t-24.288425 15.544592q-11.658444 9.71537-22.345351 19.43074z"
                p-id="2341"
              ></path>
            </svg>
            <svg
              t="1648495252602"
             class="feather feather-bell"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3161"
              stroke-width="2"
              fill="currentColor"
              stroke="currentColor"
            >
              <path
                d="M511.913993 607.897867c-52.980346 0-95.983874-43.003528-95.983874-95.983874s43.003528-95.983874 95.983874-95.983874 95.983874 43.003528 95.983874 95.983874S564.894339 607.897867 511.913993 607.897867zM511.913993 479.919368c-17.545439 0-31.994625 14.449185-31.994625 31.994625s14.449185 31.994625 31.994625 31.994625 31.994625-14.449185 31.994625-31.994625S529.631446 479.919368 511.913993 479.919368z"
                p-id="3162"
              ></path>
              <path
                d="M630.947757 960.010751c-9.976818 0-19.781623-4.816395-25.802117-13.073072L531.695616 846.309424c-13.589115 0.860071-25.974131 0.860071-39.563245 0l-73.450025 100.456241c-7.912649 10.836889-21.673778 15.653284-34.574836 11.868974-34.574836-9.804804-67.429531-23.393919-97.704015-40.251302-11.69696-6.536536-18.061482-19.609609-15.997312-32.854695l19.26558-123.334117c-9.804804-8.77272-19.093566-18.061482-27.866286-27.866286l-123.334117 19.26558c-13.073072 2.064169-26.318159-4.300353-32.854695-15.997312-16.857383-30.446498-30.446498-63.301193-40.251302-97.876029-3.612296-12.901058 1.032085-26.662187 11.868974-34.574836l100.456241-73.450025c-0.516042-6.880564-0.688056-13.417101-0.688056-19.781623s0.172014-12.901058 0.688056-19.781623l-100.456241-73.450025c-10.836889-7.912649-15.653284-21.673778-11.868974-34.574836 9.804804-34.574836 23.393919-67.429531 40.251302-97.704015 6.536536-11.69696 19.781623-18.061482 32.854695-15.997312l123.334117 19.26558c8.77272-9.804804 18.061482-19.093566 27.866286-27.866286l-19.26558-123.334117c-2.064169-13.245087 4.300353-26.318159 16.169326-32.854695 30.446498-16.857383 63.301193-30.446498 97.704015-40.251302 12.901058-3.612296 26.662187 1.032085 34.574836 11.868974l73.450025 100.456241c13.589115-0.860071 25.802117-0.860071 39.563245 0l73.450025-100.456241c7.912649-10.836889 21.673778-15.48127 34.574836-11.868974 34.402822 9.804804 67.257517 23.393919 97.704015 40.251302 11.69696 6.536536 18.061482 19.609609 15.997312 32.854695l-19.26558 123.334117c9.804804 8.77272 19.093566 18.061482 27.866286 27.694272l123.334117-19.26558c13.073072-2.064169 26.318159 4.300353 32.854695 15.997312 16.857383 30.446498 30.446498 63.301193 40.423316 97.876029 3.612296 12.901058-1.032085 26.662187-11.868974 34.574836L846.309424 492.13237c0.516042 6.880564 0.688056 13.417101 0.688056 19.781623 0 6.364522-0.172014 12.901058-0.688056 19.781623l100.456241 73.450025c10.836889 7.912649 15.48127 21.673778 11.868974 34.574836-9.804804 34.574836-23.393919 67.429531-40.423316 97.876029-6.536536 11.69696-19.437594 18.061482-32.854695 15.997312L762.194524 734.500252c-8.600706 9.804804-18.061482 19.093566-27.866286 27.694272l19.26558 123.334117c2.064169 13.245087-4.300353 26.318159-15.997312 32.854695-30.274483 16.857383-63.129179 30.446498-97.704015 40.251302C636.968251 959.494709 634.044011 960.010751 630.947757 960.010751zM337.147657 872.627583c13.933143 6.70855 28.554342 12.729044 43.51957 17.889467l70.525785-96.499916c6.70855-9.288762 18.061482-14.277171 29.414413-12.901058 20.641693 2.408198 42.143457 2.408198 62.613136 0 11.868974-1.376113 22.705863 3.612296 29.414413 12.901058l70.525785 96.499916c14.965228-5.160423 29.586427-11.180917 43.51957-17.889467l-18.40551-118.345708c-1.720141-11.352931 2.752226-22.877877 11.69696-29.930455 16.341341-13.073072 31.306568-27.866286 44.207626-44.207626 7.224593-8.944734 18.40551-13.589115 29.930455-11.69696l118.345708 18.40551c6.70855-13.933143 12.729044-28.554342 17.889467-43.51957l-96.499916-70.525785c-9.288762-6.70855-14.277171-18.061482-12.901058-29.414413 1.204099-10.320847 1.892155-20.641693 1.892155-31.306568s-0.688056-20.985721-1.892155-31.306568c-1.376113-11.352931 3.612296-22.705863 12.901058-29.414413l96.499916-70.525785c-5.160423-14.965228-11.180917-29.586427-17.889467-43.51957l-118.345708 18.40551c-11.352931 1.720141-22.877877-2.752226-29.930455-11.69696-12.901058-16.169326-27.694272-31.134554-44.207626-44.207626-8.944734-7.224593-13.417101-18.577524-11.69696-29.930455L686.852343 151.372417c-13.933143-6.70855-28.554342-12.729044-43.51957-17.889467l-70.525785 96.499916c-6.70855 9.288762-17.717453 14.449185-29.414413 12.901058-20.469679-2.408198-41.971443-2.408198-62.613136 0-11.524945 1.376113-22.705863-3.612296-29.586427-12.901058l-70.525785-96.499916c-14.965228 5.160423-29.586427 11.180917-43.51957 17.889467l18.40551 118.345708c1.720141 11.352931-2.752226 22.877877-11.69696 29.930455-16.341341 12.901058-31.134554 27.866286-44.207626 44.207626-7.224593 8.944734-18.577524 13.417101-29.930455 11.69696L151.372417 337.147657c-6.70855 13.933143-12.729044 28.554342-17.889467 43.51957l96.499916 70.525785c9.288762 6.70855 14.277171 18.061482 12.901058 29.586427-1.204099 10.148833-1.892155 20.641693-1.892155 31.134554 0 10.664875 0.688056 20.985721 1.892155 31.306568 1.376113 11.524945-3.612296 22.705863-12.901058 29.586427l-96.499916 70.525785c5.160423 14.965228 11.180917 29.586427 17.889467 43.51957l118.345708-18.40551c11.352931-1.720141 22.877877 2.752226 29.930455 11.69696 12.901058 16.341341 27.694272 31.134554 44.207626 44.207626 8.944734 7.224593 13.589115 18.577524 11.69696 29.930455L337.147657 872.627583z"
                p-id="3163"
              ></path>
            </svg>
            <svg
              t="1648495593521"
              class="feather feather-bell"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3984"
              stroke-width="2"
              fill="currentColor"
              stroke="currentColor"
            >
              <path
                d="M780.8 341.333333H243.2l268.8 149.333334v85.333333L213.333333 409.6V682.666667h597.333334V409.6l-298.666667 166.4v-85.333333L780.8 341.333333zM896 256v512H128V256h768z"
                fill="#444444"
                p-id="3985"
              ></path>
            </svg>
          </div>
        </div>
      
      </div>
      <login :visible="show" @updatevisible="show = $event" />
    </el-header>

    <div
      class="serch"
      v-if="searchResult.length > 0 && this.searchinfo.length > 0"
      v-show="searchshow"
    >
      <div
        class="serch-item"
        v-for="(item, index) in searchResult"
        :key="index"
        @click="searchidclick(item.id)"
      >
        <a href="#">{{ index + 1 }}</a>
        <a href="#" class="item-name">{{ item.name }}</a>
        <a
          href="#"
          class="item-name1"
          v-for="(item, indez) in item.artists"
          :key="indez"
        >
          <a href="#" class="item-name2">{{ item.name }}</a>
        </a>
      </div>
    </div>
    <div class="serch" v-else v-show="searchshow">
      <div
        class="serch-item"
        v-for="(item, index) in searcharray"
        :key="index"
        @click="searchidclick(item.id)"
      >
        <a href="#">{{ index + 1 }}</a>
        <a href="#" class="item-name">{{ item.name }}</a>
        <a
          href="#"
          class="item-name1"
          v-for="(item, indez) in item.artists"
          :key="indez"
        >
          <a href="#" class="item-name2">{{ item.name }}</a>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { getsearch, getsearchhot } from "../../network/mine";
import { getsongurl } from "../../network/home";
import { getsongdetail } from "../../network/detail";
import login from "../../components/content/login.vue";
import logout from "../../components/content/logout.vue";
import search from "../../components/content/search.vue";
export default {
  name: "Mine",
  components: {
    login,
    logout,
    search,
  },
  data() {
    return {
      visible: false,
      isLogin: "未登录",
      search: null,
      searchinfo: null,
      searchResult: [],
      searcharray: [],
      isstatus: 0,
      searchhotarray: [],
      isshow: false,
      show: false,
      searchshow: false,
    };
  },
  mounted() {
    document.addEventListener("click", (e) => {
      let thisClassName = e.target.className;
     
      if (
        thisClassName != "serch" &&
        thisClassName != "serch-item" &&
        thisClassName != "item-name" &&
        thisClassName != "item-name1" &&
        thisClassName != "item-name2" &&
        thisClassName != "item-input"
      ) {
        this.searchshow = false;
      }
    });
  },
  watch: {
    searchinfo(val) {
      console.log(val);
      if (this.searcharray.length) {
        this.searchResult = this.searcharray.filter((s) => {
          return s.name.indexOf(val) !== -1;
        });
      }
      if (val == "") {
        this.searcharray = "";
        this.searchResult = "";
        this.searchshow = false;
        return false;
      }
    },
  },
  created() {
    this.$store.commit("visible", this.visible);
  },
  methods: {
    searchclick() {
      this.searchshow = true;
    },
    leftclick() {
      this.$router.go(-1);
    },
    rigchclick() {
      return false;
    },

    handlelogin() {
      this.show = true;
    },

    inputkeyup(searchinfo) {
      if (this.isstatus == 0) {
        this.isstatus = setTimeout(() => {}, 2000);
      } else {
        clearInterval(this.isstatus);
        this.isstatus = setTimeout(() => {
          getsearch({ keywords: searchinfo }).then((res) => {
            this.searchshow = true;
            this.searcharray = res.data.result.songs;
          });
        }, 2000);
      }
    },

    searchidclick(id) {
      getsongurl({ id: id }).then((res) => {
        if (res.data.data[0].code == 200) {
          let url = res.data.data[0].url;
          this.$store.commit("songurl", url);
        } else {
          this.$message.error("没有播放权限");
        }
      });
      getsongdetail({ ids: id }).then((res) => {
        let songurl = res.data.songs;
        this.$store.commit("userName", songurl);
      });
    },
    logout() {
      console.log(1);
      this.$store.state.currentUser='';
      this.$store.state.avatarUrl='';
      this.$store.state.userId='';
      this.visible = false;
      window.localStorage.clear();
      window.localStorage.removeItem("currentUser");
      window.localStorage.removeItem("avatarUrl");
      window.localStorage.removeItem("userId");
      window.localStorage.removeItem("likeid");
    },
  },
  computed: {
    username() {
      return this.$store.state.currentUser;
    },
    avatarUrl() {
      return this.$store.state.avatarUrl;
    },
  },
};
</script>

<style scoped>


.el-dropdown-menu__item{
  width: 240px;
}




.el-dropdown{
  bottom: 15px;
  color: #e9eef3;
}
.header-profile {
  display: flex;
  align-items: center;
  padding: 0 16px 0 40px;
  /* margin-left: auto; */
  flex-shrink: 0;
}

.header-profile svg {
  width: 25px;
  color: #f9fafb;
  flex-shrink: 0;
  padding: 5px;
}

.notification {
  position: relative;
}

.notification-number {
  /* position: absolute; */
  background-color: #f1f1f3;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  right: 6px;
  top: 0px;
}

.notification + svg {
  margin-left: 22px;
}

.itemName {
  margin-top: 10px;
  cursor: pointer;
}
.el-button {
  background-color: #ec4141;
  border: #ec4141;
  color: #e9eef3;
  width: 50px;
}
a {
  text-decoration: none;
}
.currindex {
  display: none;
}
.serch {
  left: 24%;
  margin-top: 0px;
  z-index: 999;
  width: 301px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: scroll;
  height: 500px;
}
.serch :hover {
  background-color: red;
}
.serch-item {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
}
.serch-item a {
  color: black;
}
.serch :hover {
  background-color: #f2f2f2;
}
.serch-item .item-name {
  margin-left: 20px;
}
.serch-item .item-name1 {
  margin-left: 5px;
}
.mine {
  
    background-color: #5a5151;
    height: 60px;
    width: 100%;
    z-index: 9999;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-image: linear-gradient(to top, rgb(17 16 19), rgba(255, 255, 255, 0));

}
.item-top {
  display: flex;
  justify-content: space-around;
}

.item-tltie {
  font-size: 24px;
  color: #fff;
  margin-left: 20px;
}
.left,
.rigch {
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 1px solid;
  line-height: 24px;
  margin-top: 10px;
  text-align: center;
  color: #ffffff;
  border-radius: 50px;
  background-color: rgb(27, 25, 25) 0 0 repeat;
  opacity: 0.5;
  font-size: 18px;
  margin: 0 10px;
}
.item-input input {
  font-size: 12px;
  color: rgb(22, 15, 15);
  height: 30px;
  width: 180px;
  text-align: center;
  border-radius: 60px;
  background-color: rgb(27, 25, 25) 0 0 repeat;
  opacity: 0.5;
}
.item-button {
  display: flex;
  justify-content: center;
  margin-right: 250px;
}
.item-imgs img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.name {
  display: inline-block;
  margin-top: -5px;
  padding-left: 16px;
  position: absolute;
  color: #f2f2f2;
}

.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>