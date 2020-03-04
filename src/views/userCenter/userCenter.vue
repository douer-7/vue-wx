<template>
  <div class="view-userCenter">
    <WxNavBut class="user-card-but">
      <img src="../../assets/img/avatar.png" />
      <div>
        <p class="user-name">{{$store.state.userInfo.nickName}}</p>
        <p class="user-wx-num">微信号：{{$store.state.userInfo.wxNum}}</p>
      </div>
    </WxNavBut>
    <button @click="$store.commit('onMod')">操作</button>
    人有：{{$store.state.test}}
  </div>
</template>

<script>
import WxNavBut from "@/components/content/WxNavBut";

export default {
  data() {
    return {
      userInfo: {
        nickName: "昵称",
        wxNum: "scsc",
        wxId: "scascs"
      }
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
  height: 150px;
}
.user-name {
  font-size: 30px;
}
</style>