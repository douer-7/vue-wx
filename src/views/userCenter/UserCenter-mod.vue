<template>
  <div class="view-userCenter">
    <WxNavBut class="user-card-but" v-show="!$store.state.isLoading">
      <img class="user-avatar" :src="userInfo.avatarSrc" />
      <div>
        <p class="user-name">{{userInfo.nickName}}</p>
        <p class="user-wx-num">微信号：{{userInfo.wxNum}}</p>
      </div>
    </WxNavBut>
  </div>
</template>

<script>
import WxNavBut from "@/components/content/WxNavBut";

export default {
  data() {
    return {
      userInfo: this.$store.state.userInfo,
    };
  },

  components: {
    WxNavBut
  },

  methods: {},
  computed: {
    nowDate() {
      return new Date();
    },
    inputAdd() {
      return this.input1 + "+" + this.input2;
    }
  },
  watch: {
    input1(a, b) {
      console.log("监听", a, b);
    }
  }
};
</script>

<style scoped>
.user-card-but {
  height: 150px;
}
.user-name {
  font-size: 30px;
}
.user-avatar{
  height: 100%;
}
</style>