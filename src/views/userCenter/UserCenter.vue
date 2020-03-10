<template>
  <div class="view-B scroolBox">
    <WxNavBut class="user-card-but" v-show="!$store.state.isLoading" goIcon>
      <img class="user-avatar" :src="userInfo.avatarSrc" />
      <div>
        <p class="user-name">{{userInfo.nickName}}</p>
        <p class="user-wx-num">微信号：{{userInfo.wxNum}}</p>
      </div>
    </WxNavBut>

    <div class="butGroup">
      <WxNavBut
        nav-name="支付"
        navIconSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        path="/pay"
        goIcon
      ></WxNavBut>
    </div>

    <div class="butGroup">
      <WxNavBut
        nav-name="收藏"
        navIconSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        goIcon
      ></WxNavBut>
      <WxNavBut
        nav-name="相册"
        navIconSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        goIcon
      ></WxNavBut>
      <WxNavBut
        nav-name="卡包"
        navIconSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        path="/cards"
        goIcon
      ></WxNavBut>
      <WxNavBut
        nav-name="表情"
        navIconSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        goIcon
      ></WxNavBut>
    </div>
    <div class="butGroup">
      <WxNavBut
        nav-name="设置"
        navIconSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        path="/setting"
        goIcon
      ></WxNavBut>
    </div>
  </div>
</template>

<script>
import WxNavBut from "@/components/content/WxNavBut";

export default {
  data() {
    return {
      userInfo: this.$store.state.userInfo
    };
  },

  components: {
    WxNavBut
  },

  methods: {}
};
</script>

<style scoped>
.user-card-but {
  height: 200px;
  padding: 50px 0;
}
.user-name {
  font-size: 30px;
}
.user-avatar {
  height: 100%;
}
.butGroup {
  margin: 10px 0;
}
</style>