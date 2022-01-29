<template>
  <div class="childldcreatephone">
    <Nav>
      <div slot="left" @click="xclick">&lt;</div>
      <div slot="center" class="center">手机号验证</div>
    </Nav>
    <div class="checkcode">
      <div>你的手机号+86
        {{this.$route.params.phoneNumber
        |toprivate}}
        </div>
      <div>你会收到一条带有验证码的短信,请输入验证码</div>
    </div>
    <div class="code-warp">
      <div class="code-item"></div>
      <div class="code-item"></div>
      <div class="code-item"></div>
      <div class="code-item"></div>
    </div>
    <button>倒计时/重新发送</button>
  </div>
</template>

<script>
import Nav from "../../../components/common/Nav.vue";
export default {
  name: "childldcreatephone",
  components: {
    Nav,
  },
  methods: {
    xclick() {
      this.$router.go(-1);
    },
  },
  filters: {
    toprivate(value){
      let start = value.slice(0,3);
     let end = value.slice(-4);
     return `${start}****${end}`;
    }
  }
};
</script>

<style scoped>
.checkcode{
  color: #969798;
  padding: 20px 30px;
}
.code-warp{
  display: flex;
  justify-content: space-around;
}
.code-item{
  width: 60px;
  height: 100px;
  border-bottom: 2px solid #b0b0b0;
}
</style>