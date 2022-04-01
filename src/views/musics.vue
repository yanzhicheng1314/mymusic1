<template>
  <div class="musics">
    <!-- <div class="item-router">
    <div class="item-home item-home1"> 
      <router-link to="/home">发现音乐</router-link>
      </div>
     <div class="item-home">
       <router-link to="/videomv">视频</router-link> 
       </div>
      <div class="item-home">
        <router-link to="/search">我喜欢的音乐</router-link>
        </div>
       <div class="item-home"> 
          <router-link to="/play">歌单</router-link>
           </div>
  </div> -->
    <div class="left-side">
      <div class="side-wrapper">
        <div class="side-title">推荐</div>
        <div class="side-menu">
          <router-link to="/home">
            <svg viewBox="0 0 512 512">
              <g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path
                  d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0"
                  data-original="#bfc9d1"
                />
              </g>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M192 192h128v128H192zm0 0"
                fill="currentColor"
                data-original="#82b1ff"
              />
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0"
                fill="currentColor"
                data-original="#bfc9d1"
              />
            </svg>
            发现音乐
          </router-link>
          <router-link :to="{ path: '/videomv' }">
            <svg
              t="1640255412874"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2193"
              width="16"
              height="16"
            ></svg>
            视频
            <!-- <span
              class="notification-number updates"
              v-show="$store.state.songcount != 0"
              >{{ $store.state.songcount }}</span
            > -->
          </router-link>
        </div>
      </div>
      <div class="side-wrapper">
        <div class="side-title">我的音乐</div>
        <div class="side-menu">
           <a href="#">
            <svg viewBox="0 0 1024 1024" fill="currentColor">
              <path
                d="M487.119333 698.748265c3.247974 3.261277 7.148817 5.848195 11.472286 7.635911 4.294816 1.77646 8.852622 2.707668 13.426801 2.707668 4.574179 0 9.128915-0.931209 13.423731-2.707668 4.325515-1.789763 8.225335-4.374634 11.474332-7.635911l225.00559-225.00559c13.730723-13.730723 13.730723-35.975353 0-49.706075-13.730723-13.730723-35.975353-13.730723-49.706075 0L547.167964 589.083609 547.167964 156.1115c0-19.429515-15.722076-35.151591-35.151591-35.151591s-35.151591 15.722076-35.151591 35.151591L476.864782 589.089749 311.785026 424.037622c-13.730723-13.730723-35.975353-13.730723-49.706075 0s-13.730723 35.975353 0 49.706075L487.119333 698.748265z"
                p-id="2327"
              ></path>
              <path
                d="M840.770885 206.02326c-19.429515 0-35.151591 15.722076-35.151591 35.151591s15.722076 35.151591 35.151591 35.151591c26.500561 0 47.028083 14.794961 47.028083 27.496238l0 501.043461c0 12.701277-20.527522 27.461445-47.028083 27.461445L183.229115 832.327586c-26.500561 0-47.028083-14.761192-47.028083-27.461445L136.201032 303.82268c0-12.701277 20.527522-27.496238 47.028083-27.496238 19.429515 0 35.151591-15.722076 35.151591-35.151591s-15.722076-35.151591-35.151591-35.151591c-64.706721 0-117.331265 43.87016-117.331265 97.798397l0 501.043461c0 53.894468 52.623521 97.764628 117.331265 97.764628l657.541771 0c64.706721 0 117.331265-43.87016 117.331265-97.764628L958.102151 303.82268C958.102151 249.894444 905.477606 206.02326 840.770885 206.02326z"
                p-id="2328"
              ></path>
            </svg>
            本地与下载
          </a>
              <a href="#">
            <svg viewBox="0 0 1024 1024" fill="currentColor">
              <path
                d="M512 29.9008A482.0992 482.0992 0 1 0 994.0992 512 482.7136 482.7136 0 0 0 512 29.9008z m0 915.2512A433.152 433.152 0 1 1 945.152 512 433.5616 433.5616 0 0 1 512 945.152z"
                fill=""
                p-id="1975"
              ></path>
              <path
                d="M755.0976 487.5264H536.4736V279.1424a24.4736 24.4736 0 0 0-49.0496 0V512a24.4736 24.4736 0 0 0 24.576 24.4736h243.0976a24.4736 24.4736 0 1 0 0-49.0496z"
                fill=""
                p-id="1976"
              ></path>
            </svg>
            最近播放
          </a>
              <a href="#">
            <svg viewBox="0 0 1024 1024" fill="currentColor">
              <path
                d="M699.733333 793.941333a17.066667 17.066667 0 0 1-17.066666-17.066666 17.066667 17.066667 0 0 1 17.066666-17.066667 170.666667 170.666667 0 0 0 17.066667-341.333333 17.066667 17.066667 0 0 1-15.36-15.701334 189.781333 189.781333 0 0 0-378.88 0 17.066667 17.066667 0 0 1-15.36 15.701334 172.714667 172.714667 0 0 0-102.4 49.493333 170.666667 170.666667 0 0 0 119.466667 291.84 17.066667 17.066667 0 0 1 17.066666 17.066667 17.066667 17.066667 0 0 1-17.066666 17.066666A204.8 204.8 0 0 1 179.541333 443.733333a207.872 207.872 0 0 1 110.250667-57.344 223.914667 223.914667 0 0 1 443.733333 0 206.848 206.848 0 0 1 170.666667 202.069334 204.8 204.8 0 0 1-204.8 204.8z"
                fill="#cdcdcd"
                p-id="4293"
              ></path>
              <path
                d="M512 861.866667a17.066667 17.066667 0 0 1-17.066667-17.066667V614.4a17.066667 17.066667 0 0 1 34.133334 0v230.4a17.066667 17.066667 0 0 1-17.066667 17.066667z"
                fill="#cdcdcd"
                p-id="4294"
              ></path>
              <path
                d="M512 861.866667a16.042667 16.042667 0 0 1-11.946667-5.12 16.384 16.384 0 0 1 0-23.893334l76.8-76.8a16.725333 16.725333 0 0 1 23.893334 23.893334l-76.8 76.8a16.042667 16.042667 0 0 1-11.946667 5.12z"
                fill="#cdcdcd"
                p-id="4295"
              ></path>
              <path
                d="M512 861.866667a16.042667 16.042667 0 0 1-11.946667-5.12l-76.8-76.8a16.725333 16.725333 0 0 1 23.893334-23.893334l76.8 76.8a16.384 16.384 0 0 1 0 23.893334 16.042667 16.042667 0 0 1-11.946667 5.12z"
                fill="#cdcdcd"
                p-id="4296"
              ></path>
            </svg>
            我的音乐云盘
          </a>
          <a href="#">
            <svg viewBox="0 0 1024 1024" fill="currentColor">
              <path
                d="M171.712 571.648l0.352 0.32 287.904 252.8a64 64 0 0 0 82.912 1.344l296.832-244.544a215.584 215.584 0 1 0-301.824-300.576L512 316.672l-25.888-35.616a215.584 215.584 0 1 0-314.4 290.624zM32 407.584a279.584 279.584 0 0 1 480-194.944 279.584 279.584 0 0 1 480 194.944 278.144 278.144 0 0 1-113.024 224.512l-295.36 243.392a128 128 0 0 1-165.888-2.592L129.984 620.16A278.976 278.976 0 0 1 32 407.584z"
                p-id="2481"
              ></path>
            </svg>
            我的收藏
          </a>
          <a href="#">
            <svg viewBox="0 0 1024 1024" fill="currentColor">
              <path
                d="M836.778667 273.749333H271.530667l96.085333-96.085333c13.312-13.312 13.312-34.986667 0-48.298667s-34.986667-13.312-48.298667 0l-166.229333 166.058667c-0.512 0.512-0.853333 1.194667-1.365333 1.706667a102.570667 102.570667 0 0 0-37.376 79.018666v419.84c0 56.490667 45.909333 102.4 102.4 102.4h619.690666c56.490667 0 102.4-45.909333 102.4-102.4v-419.84c0.341333-56.490667-45.568-102.4-102.058666-102.4z m34.133333 522.24c0 18.773333-15.36 34.133333-34.133333 34.133334H217.088c-18.773333 0-34.133333-15.36-34.133333-34.133334v-419.84c0-18.773333 15.36-34.133333 34.133333-34.133333h619.690667c18.773333 0 34.133333 15.36 34.133333 34.133333v419.84z"
                p-id="2005"
              ></path>
              <path
                d="M383.317333 438.954667c-76.458667 0-138.581333 62.122667-138.581333 138.581333 0 76.458667 62.122667 138.581333 138.581333 138.581333 76.288 0 138.581333-62.122667 138.581334-138.581333-0.170667-76.458667-62.293333-138.581333-138.581334-138.581333z m0 208.725333c-38.741333 0-70.314667-31.573333-70.314666-70.314667s31.573333-70.314667 70.314666-70.314666 70.314667 31.573333 70.314667 70.314666-31.573333 70.314667-70.314667 70.314667zM757.930667 477.866667h-136.533334c-18.773333 0-34.133333 15.36-34.133333 34.133333s15.36 34.133333 34.133333 34.133333h136.533334a34.133333 34.133333 0 1 0 0-68.266666zM757.930667 619.52h-136.533334c-18.773333 0-34.133333 15.36-34.133333 34.133333s15.36 34.133333 34.133333 34.133334h136.533334a34.133333 34.133333 0 1 0 0-68.266667z"
                p-id="2006"
              ></path>
            </svg>
            我的电台
          </a>
         
      
      
          <router-link to="/defaultlist">
            <svg viewBox="0 0 1024 1024" fill="currentColor">
              <path
                d="M657.3 798.8c4.8-8.3 8.7-16.8 12-25.4v-76.8c-37.2 1.3-78.9 29.2-105.1 74.6-20 34.6-26.2 71.6-20.6 101.9 39.3 3.2 85.5-25.4 113.7-74.3z"
                fill="#e6e6e6"
                p-id="2956"
                data-spm-anchor-id="a313x.7781069.0.i3"
                class="selected"
              ></path>
              <path
                d="M657.9 171H84.7c-11.4 0-20.7-9.2-20.7-20.7 0-11.4 9.2-20.7 20.7-20.7H658c11.4 0 20.7 9.2 20.7 20.7-0.1 11.4-9.3 20.7-20.8 20.7zM510.8 389.6H84.7c-11.4 0-20.7-9.2-20.7-20.7 0-11.4 9.2-20.7 20.7-20.7h426.1c11.4 0 20.7 9.2 20.7 20.7-0.1 11.5-9.3 20.7-20.7 20.7zM461.7 608.3h-377c-11.4 0-20.7-9.2-20.7-20.7 0-11.4 9.2-20.7 20.7-20.7h377c11.4 0 20.7 9.2 20.7 20.7 0 11.4-9.3 20.7-20.7 20.7zM412.6 826.9h-328c-11.4 0-20.7-9.2-20.7-20.7s9.2-20.7 20.7-20.7h328c11.4 0 20.7 9.2 20.7 20.7s-9.2 20.7-20.7 20.7zM552.2 894.4c-15.6 0-30.7-3.8-44.4-11.7-26.7-15.4-43.2-43.9-46.4-80.2-2.9-33.6 6-70.4 25.2-103.6 41.6-72.2 116.2-104.5 169.8-73.6 14 8.1 25.3 20 33.5 35.3 1.6 3 2.4 6.3 2.4 9.7v103c0 2.5-0.5 5.1-1.4 7.4-4 10.3-8.3 19.5-13.4 28.2-31 53.8-80.2 85.5-125.3 85.5z m60.1-239.3c-30.4 0-67.2 25-89.9 64.4-15 25.9-22 54.1-19.8 79.3 2 22.5 11.1 39.5 25.8 48 32.3 18.6 84.2-8.1 113.3-58.4 3.4-5.9 6.4-12.1 9.2-19V676c-4.1-6.4-9.2-11.4-15.2-14.9-7.1-4-15-6-23.4-6z"
                fill="#e6e6e6"
                p-id="2957"
                data-spm-anchor-id="a313x.7781069.0.i6"
                class="selected"
              ></path>
              <path
                d="M671.6 737.8c-11.4 0-20.7-9.2-20.7-20.7V248.6c0-8.4 5-15.9 12.8-19.1 7.8-3.2 16.6-1.4 22.5 4.5l38.5 38.5c56.1 56.1 133.4 82.6 212.1 72.8 11.4-1.4 21.7 6.6 23.1 17.9 1.4 11.3-6.6 21.7-17.9 23.1-91.4 11.4-181.3-19.4-246.5-84.6l-3.2-3.2v418.7c-0.1 11.4-9.3 20.6-20.7 20.6z"
                fill="#e6e6e6"
                p-id="2958"
                data-spm-anchor-id="a313x.7781069.0.i5"
                class="selected"
              ></path>
            </svg>
            默认列表
          </router-link>
        </div>
      </div>
      <div class="side-wrapper">
        <div class="side-title">美化</div>
        <div class="side-menu">
          <a href="#">
            <svg viewBox="0 0 512 512" fill="currentColor">
              <path
                d="M499.377 46.402c-8.014-8.006-18.662-12.485-29.985-12.613a41.13 41.13 0 00-.496-.003c-11.142 0-21.698 4.229-29.771 11.945L198.872 275.458c25.716 6.555 47.683 23.057 62.044 47.196a113.544 113.544 0 0110.453 23.179L500.06 106.661C507.759 98.604 512 88.031 512 76.89c0-11.507-4.478-22.33-12.623-30.488zM176.588 302.344a86.035 86.035 0 00-3.626-.076c-20.273 0-40.381 7.05-56.784 18.851-19.772 14.225-27.656 34.656-42.174 53.27C55.8 397.728 27.795 409.14 0 416.923c16.187 42.781 76.32 60.297 115.752 61.24 1.416.034 2.839.051 4.273.051 44.646 0 97.233-16.594 118.755-60.522 23.628-48.224-5.496-112.975-62.192-115.348z"
              />
            </svg>
            主题
          </a>
        </div>
      </div>
      <div class="side-wrapper">
        <div class="side-title"> 创建的歌单
          
         
          </div>
          <div v-if="playlist!=null">
        <div class="side-menu" v-for="item in playlist" 
        :key="item.id" @click="listclick(item)">
         <div><a>{{item.name}}</a></div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getlikelist}from '../network/home'
export default {
  name: "musics",
  components: {},
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
    listclick(item){
      this.$router.push({path:'/fondmusic',query:{item:item}})
      
    }
  },
  computed: {
    playlist(){
      return this.$store.state.playlist
    }
  }
};
</script>

<style scoped>
.musics {
  width: 200px;
  position: fixed;
  height: 100%;
  left: 0;
  top: 0;
  color: #201d1d;
  border-right: 1px solid #E0E0E0;
  background-color: #ffffff;
  background-image: linear-gradient(to top, rgb(14, 13, 15), rgba(255, 255, 255, 0));
}
a {
  text-decoration: none;
}
.item-router {
  display: flex;
  flex-direction: column;

  line-height: 70px;
  text-align: center;
  margin-top: 100px;
}
.item-home {
  width: 100%;
  /* height: 100px;  */
}
.item-home a {
  color: #686262;
}
.item-router :hover {
  background-color: rgb(207, 203, 203);
  font-size: 22px;
}

.item-home1 {
  font-size: 22px;
  color: red;
}

* {
  outline: none;
  box-sizing: border-box;
}

:root {
  --theme-bg-color: rgba(16 18 27 / 40%);
  --border-color: rgba(113 119 144 / 25%);
  --theme-color: #f9fafb;
  --inactive-color: rgb(113 119 144 / 78%);
  --body-font: "Poppins", sans-serif;
  --hover-menu-bg: rgba(12 15 25 / 30%);
  --content-title-color: #999ba5;
  --content-bg: rgb(146 151 179 / 13%);
  --button-inactive: rgb(249 250 251 / 55%);
  --dropdown-bg: #21242d;
  --dropdown-hover: rgb(42 46 60);
  --popup-bg: rgb(22 25 37);
  --search-bg: #14162b;
  --overlay-bg: rgba(36, 39, 59, 0.3);
  --scrollbar-bg: rgb(1 2 3 / 40%);
}

.light-mode {
  --theme-bg-color: rgb(255 255 255 / 31%);
  --theme-color: #3c3a3a;
  --inactive-color: #333333;
  --button-inactive: #3c3a3a;
  --search-bg: rgb(255 255 255 / 31%);
  --dropdown-bg: #f7f7f7;
  --overlay-bg: rgb(255 255 255 / 30%);
  --dropdown-hover: rgb(236 236 236);
  --border-color: rgb(255 255 255 / 35%);
  --popup-bg: rgb(255 255 255);
  --hover-menu-bg: rgba(255 255 255 / 35%);
  --scrollbar-bg: rgb(255 253 253 / 57%);
  --content-title-color: --theme-color;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

body {
  font-family: var(--body-font);
  background-image: url(https://wallpapershome.com/images/wallpapers/macos-big-sur-1280x720-dark-wwdc-2020-22655.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5em;
}

@media screen and (max-width: 480px) {
  body {
    padding: 0.8em;
  }
}

.video-bg {
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.video-bg video {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

img {
  max-width: 100%;
}

.dark-light {
  position: fixed;
  bottom: 50px;
  right: 30px;
  background-color: var(--dropdown-bg);
  box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.2);
  padding: 8px;
  border-radius: 50%;
  z-index: 3;
  cursor: pointer;
}

.dark-light svg {
  width: 24px;
  flex-shrink: 0;
  fill: #ffce45;
  stroke: #ffce45;
  transition: 0.5s;
}

.light-mode .dark-light svg {
  fill: transparent;
  stroke: var(--theme-color);
}

.light-mode .profile-img {
  border: 2px solid var(--theme-bg-color);
}

.light-mode .content-section ul {
  background-color: var(--theme-bg-color);
}

.light-mode .pop-up__title {
  border-color: var(--theme-color);
}

.light-mode .dropdown.is-active ul {
  background-color: rgba(255, 255, 255, 0.94);
}

body.light-mode:before,
body.light-mode .video-bg:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.72) 0%,
    rgba(255, 255, 255, 0.45) 100%
  );
  -webkit-backdrop-filter: saturate(3);
  backdrop-filter: saturate(3);
}

.app {
  background-color: var(--theme-bg-color);
  min-width: 700px;
  max-height: 880px;
  height: 99vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 14px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  font-size: 15px;
  font-weight: 500;
}

.header {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 58px;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  padding: 0 30px;
  white-space: nowrap;
}

@media screen and (max-width: 480px) {
  .header {
    padding: 0 16px;
  }
}

.header-menu {
  display: flex;
  align-items: center;
}

.header-menu a {
  padding: 20px 30px;
  text-decoration: none;
  color: var(--inactive-color);
  border-bottom: 2px solid transparent;
  transition: 0.3s;
}

@media screen and (max-width: 610px) {
  .header-menu a:not(.main-header-link) {
    display: none;
  }
}

.header-menu a.is-active,
.header-menu a:hover {
  color: var(--theme-color);
  border-bottom: 2px solid var(--theme-color);
}

.notify {
  position: relative;
}

.notify:before {
  content: "";
  position: absolute;
  background-color: #3a6df0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  right: 20px;
  top: 16px;
}

@media screen and (max-width: 1055px) {
  .notify {
    display: none;
  }
}

.menu-circle {
  width: 15px;
  height: 15px;
  background-color: #f96057;
  border-radius: 50%;
  box-shadow: 24px 0 0 0 #f8ce52, 48px 0 0 0 #5fcf65;
  margin-right: 195px;
  flex-shrink: 0;
}

@media screen and (max-width: 945px) {
  .menu-circle {
    display: none;
  }
}

.search-bar {
  height: 40px;
  display: flex;
  width: 100%;
  max-width: 400px;
  padding-left: 16px;
  border-radius: 4px;
}

.search-bar input {
  width: 100%;
  height: 100%;
  border: none;
  background-color: var(--search-bg);
  border-radius: 4px;
  font-family: var(--body-font);
  font-size: 15px;
  font-weight: 500;
  padding: 0 20px 0 40px;
  box-shadow: 0 0 0 2px rgba(134, 140, 160, 0.02);
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
  background-size: 14px;
  background-repeat: no-repeat;
  background-position: 16px 48%;
  color: var(--theme-color);
}

.search-bar input::-moz-placeholder {
  font-family: var(--body-font);
  color: var(--inactive-color);
  font-size: 15px;
  font-weight: 500;
}

.search-bar input:-ms-input-placeholder {
  font-family: var(--body-font);
  color: var(--inactive-color);
  font-size: 15px;
  font-weight: 500;
}

.search-bar input::placeholder {
  font-family: var(--body-font);
  color: var(--inactive-color);
  font-size: 15px;
  font-weight: 500;
}

.header-profile {
  display: flex;
  align-items: center;
  padding: 0 16px 0 40px;
  margin-left: auto;
  flex-shrink: 0;
}

.header-profile svg {
  width: 22px;
  color: #f9fafb;
  flex-shrink: 0;
}

.notification {
  position: relative;
}

.notification-number {
  position: absolute;
  background-color: #3a6df0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  right: -6px;
  top: -6px;
}

.notification + svg {
  margin-left: 22px;
}

@media screen and (max-width: 945px) {
  .notification + svg {
    display: none;
  }
}

.profile-img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  -o-object-fit: cover;
  object-fit: cover;
  border: 2px solid var(--theme-color);
  margin-left: 22px;
  cursor: pointer;
}

.wide .header-menu,
.wide .header-profile {
  display: none;
}

.wide .search-bar {
  max-width: 600px;
  margin: auto;
  transition: 0.4s;
  box-shadow: 0 0 0 1px var(--border-color);
  padding-left: 0;
}

.wide .menu-circle {
  margin-right: 0;
}

.wrapper {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
}

.left-side {
  flex-basis: 240px;
  border-right: 1px solid var(--border-color);
      padding: 86px 22px 11px 10px;
  overflow: scroll;
  flex-shrink: 0;
}

/* @media screen and (max-width: 945px) {
  .left-side {
    display: none;
  }
} */

.side-wrapper + .side-wrapper {
  margin-top: 20px;
}

.side-title {
  color: var(--inactive-color);
  margin-bottom: 14px;
}

.side-menu {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
}

.side-menu img {
  border-radius: 5px;
  margin-right: 5px;
}

.side-menu a {
  text-decoration: none;
  color: var(--theme-color);
  display: flex;
  align-items: center;
  font-weight: 400;
  padding: 10px;
  font-size: 15px;
  border-radius: 6px;
  transition: 0.3s;
}

.side-menu a:hover {
  background-color: var(--hover-menu-bg);
}

.side-menu svg {
  width: 16px;
  margin-right: 8px;
}

.updates {
  position: relative;
  top: 0;
  right: 0;
  margin-left: auto;
  width: 18px;
  height: 18px;
  font-size: 11px;
}

.main-header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  height: 58px;
  flex-shrink: 0;
}

.main-header .header-menu {
  margin-left: 150px;
}

@media screen and (max-width: 1055px) {
  .main-header .header-menu {
    margin: auto;
  }
}

.main-header .header-menu a {
  padding: 20px 24px;
}

.main-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.menu-link-main {
  text-decoration: none;
  color: var(--theme-color);
  padding: 0 30px;
}

@media screen and (max-width: 1055px) {
  .menu-link-main {
    display: none;
  }
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  color: var(--theme-color);
  padding: 10px 20px 10px 20px;
  height: 100%;
  overflow: auto;
  background-color: var(--theme-bg-color);
}

@media screen and (max-width: 510px) {
  .content-wrapper {
    padding: 20px;
  }
}

.content-wrapper-header {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  /* background-image: url("../images/bannaer-栗山未来.jpg"); */
  border-radius: 14px;
}

@media screen and (max-width: 415px) {
  .content-wrapper-header {
    padding: 20px;
  }
}

.content-wrapper-header-padding {
  padding: 20px 40px;
}

@media screen and (max-width: 415px) {
  .content-wrapper-header-padding {
    padding: 20px;
  }
}

.content-wrapper.overlay {
  pointer-events: none;
  transition: 0.3s;
  background-color: var(--overlay-bg);
}

.overlay-app {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: all;
  background-color: rgba(36, 39, 59, 0.8);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
}

.overlay-app.is-active {
  visibility: visible;
  opacity: 1;
}

.img-content {
  font-weight: 500;
  font-size: 17px;
  display: flex;
  align-items: center;
  margin: 0;
}

.img-content svg {
  width: 28px;
  margin-right: 14px;
}

.content-text {
  font-weight: 400;
  font-size: 14px;
  margin-top: 16px;
  line-height: 1.7em;
  color: #ebecec;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.content-wrapper-context {
  max-width: 500px;
}

.content-button {
  background-color: #3a6df0;
  border: none;
  padding: 8px 26px;
  color: #fff;
  border-radius: 20px;
  margin-top: 16px;
  cursor: pointer;
  transition: 0.3s;
  white-space: nowrap;
}

.content-wrapper-img {
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}

@media screen and (max-width: 570px) {
  .content-wrapper-img {
    width: 110px;
  }
}

.content-section {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}

.content-section-title {
  color: var(--content-title-color);
  margin-bottom: 14px;
}

.content-section .search_ul {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  background-color: var(--content-bg);
  padding-left: 0;
  margin: 0;
  border-radius: 14px;
  border: 1px solid var(--theme-bg-color);
  /* cursor: pointer; */
}

.content-section .search_ul li {
  list-style: none;
  padding: 2px 18px;
  display: flex;
  align-items: center;
  font-size: 14px;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  transition: 0.3s;
}

.content-section .search_ul li:hover {
  background-color: var(--theme-bg-color);
}

.content-section .search_ul li:hover:first-child {
  border-radius: 13px 13px 0 0;
}

.content-section .search_ul li:hover:last-child {
  border-radius: 0 0 13px 13px;
}

.content-section .search_ul li + li {
  border-top: 1px solid var(--border-color);
}

.content-section .search_ul svg {
  width: 28px;
  border-radius: 6px;
  margin-right: 16px;
  flex-shrink: 0;
}

.products {
  display: flex;
  align-items: center;
  width: 150px;
}

@media screen and (max-width: 480px) {
  .products {
    width: 120px;
  }
}

.status {
  margin-left: auto;
  width: 140px;
  font-size: 14px;
  position: relative;
}

@media screen and (max-width: 700px) {
  .status {
    display: none;
  }
}

.status-circle {
  width: 6px;
  height: 6px;
  background-color: #396df0;
  position: absolute;
  border-radius: 50%;
  top: 4px;
  left: -20px;
}

.status-circle.green {
  background-color: #3bf083;
}

.status-button {
  font-size: 15px;
  margin-top: 0;
  padding: 6px 24px;
}

@media screen and (max-width: 390px) {
  .status-button {
    padding: 6px 14px;
  }
}

.status-button.open {
  background: none;
  color: var(--button-inactive);
  border: 1px solid var(--button-inactive);
}

.status-button:not(.open):hover {
  color: #fff;
  border-color: #fff;
}

.content-button:not(.open):hover {
  background: #1e59f1;
}

.menu {
  width: 5px;
  height: 5px;
  background-color: var(--button-inactive);
  border-radius: 50%;
  box-shadow: 7px 0 0 0 var(--button-inactive),
    14px 0 0 0 var(--button-inactive);
  margin: 0 12px;
}

@media screen and (max-width: 415px) {
  .adobe-product .menu {
    display: none;
  }
}

.dropdown {
  position: relative;
  height: 53px;
  width: 40px;
  top: -24px;
  display: flex;
  left: -5px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.dropdown ul {
  position: absolute;
  background: var(--dropdown-bg);
  height: 110px;
  width: 120px;
  right: 0;
  top: 20px;
  pointer-events: none;
  opacity: 0;
  transform: translatey(10px);
  transition: all 0.4s ease;
}

.dropdown ul li a {
  text-decoration: none;
  color: var(--theme-color);
  font-size: 12px;
}

.dropdown.is-active ul {
  opacity: 1;
  pointer-events: all;
  transform: translatey(25px);
}

.dropdown.is-active ul li:hover {
  background-color: var(--dropdown-hover);
}

.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 187px;
  margin-left: auto;
}

@media screen and (max-width: 480px) {
  .button-wrapper {
    width: auto;
  }
}

.pop-up {
  position: absolute;
  padding: 30px 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.4);
  transition: all 0.3s;
  z-index: 10;
  background-color: var(--popup-bg);
  width: 500px;
  visibility: hidden;
  opacity: 0;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  white-space: normal;
}

@media screen and (max-width: 570px) {
  .pop-up {
    width: 100%;
  }
}

.pop-up.visible {
  visibility: visible;
  opacity: 1;
}

.pop-up__title {
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pop-up__subtitle {
  white-space: normal;
  margin: 20px 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.8em;
}

.pop-up__subtitle a {
  color: var(--theme-color);
}

.content-button-wrapper .content-button.status-button.open.close {
  width: auto;
}

.content-section .close {
  margin-right: 0;
  width: 24px;
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
}

.checkbox-wrapper + .checkbox-wrapper {
  margin: 20px 0 40px;
}

.checkbox {
  display: none;
}

.checkbox + label {
  display: flex;
  align-items: center;
}

.checkbox + label:before {
  content: "";
  margin-right: 10px;
  width: 15px;
  height: 15px;
  border: 1px solid var(--theme-color);
  border-radius: 4px;
  cursor: pointer;
  flex-shrink: 0;
}

.checkbox:checked + label:before {
  background-color: #3a6df0;
  border-color: #3a6df0;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3e%3cpath d='M20 6L9 17l-5-5'/%3e%3c/svg%3e");
  background-position: 50%;
  background-size: 12px;
  background-repeat: no-repeat;
}

.content-button-wrapper {
  margin-top: auto;
  margin-left: auto;
}

.content-button-wrapper .open {
  margin-right: 8px;
}

.apps-card {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: calc(100% + 20px);
}

.app-card {
  display: flex;
  flex-direction: column;
  width: calc(33.3% - 20px);
  font-size: 16px;
  background-color: var(--content-bg);
  border-radius: 14px;
  border: 1px solid var(--theme-bg-color);
  padding: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: 0.3s ease;
}

.app-card:hover {
  transform: scale(1.02);
  background-color: var(--theme-bg-color);
}

.app-card svg {
  width: 28px;
  border-radius: 6px;
  margin-right: 12px;
  flex-shrink: 0;
}

.app-card {
  margin: 5px;
}

.app-card span {
  display: flex;
  align-items: center;
}

.app-card__subtext {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6em;
  margin-top: 20px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 20px;
}

.app-card-buttons {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-top: 16px;
}

@media screen and (max-width: 1110px) {
  .app-card {
    width: calc(50% - 20px);
  }

  .app-card:last-child {
    margin-top: 20px;
    margin-left: 0px;
  }
}

@media screen and (max-width: 565px) {
  .app-card {
    width: calc(100% - 20px);
    margin-top: 20px;
  }

  .app-card + .app-card {
    margin-left: 0;
  }
}

::-webkit-scrollbar {
  width: 6px;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar-bg);
  border-radius: 10px;
}
</style>