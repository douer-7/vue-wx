<template>
  <div>
    <Navigation title="设置" height="49px" back></Navigation>
    <div class="scroolBox-T">
      <WxNavBut nav-name="账号与安全" goIcon></WxNavBut>
      <div class="butGroup">
        <WxNavBut nav-name="新消息通知" goIcon></WxNavBut>
        <WxNavBut nav-name="隐私" goIcon></WxNavBut>
        <WxNavBut nav-name="通用" goIcon></WxNavBut>
      </div>
      <div class="butGroup">
        <WxNavBut nav-name="帮助与反馈" goIcon></WxNavBut>
        <WxNavBut nav-name="关于微信" goIcon></WxNavBut>
      </div>
      <div class="butGroup">
        <WxNavBut nav-name="插件" goIcon></WxNavBut>
      </div>
      <div class="butGroup">
        <WxNavBut nav-name="切换账号" center></WxNavBut>
      </div>
      <div class="butGroup">
        <WxNavBut nav-name="退出登录" center></WxNavBut>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/common/navigation/Navigation";
import WxNavBut from "@/components/content/WxNavBut";

export default {
  data() {
    return {};
  },

  components: {
    Navigation,
    WxNavBut,
  },

  methods: {}
};
</script>

<style scoped>
.butGroup {
  margin: 7px 0;
}
</style>