<template>
  <div class="main-tab-bar">
    <tab-bar activeColor="#07c160" :items="items" height="60px"></tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabBar/TabBar";
export default {
  data() {
    return {
      items: [
        {
          key: 0,
          text: "首页",
          path: "/home",
          iconSrc: require("../../assets/img/icon/icon_tabbar.png"),
          activeiconSrc: require("../../assets/img/icon/icon_tabbar.png")
        },
        {
          key: 1,
          text: "支付",
          path: "/pay",
          iconSrc: require("../../assets/img/icon/icon_tabbar.png"),
          activeiconSrc: require("../../assets/img/icon/icon_tabbar.png")
        },
        {
          key: 2,
          text: "用户中心",
          path: "/userCenter",
          iconSrc: require("../../assets/img/icon/icon_tabbar.png"),
          activeiconSrc: require("../../assets/img/icon/icon_tabbar.png")
        }
      ]
    };
  },

  components: { TabBar },

  methods: {}
};
</script>

<style scoped>
</style>