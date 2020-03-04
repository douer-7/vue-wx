<template>
  <div class="main-tab-bar">
    <tab-bar activeColor="#07c160" :items="items" ></tab-bar>
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
          text: "微信",
          path: "/home",
          iconSrc: require("../../assets/img/icon/icon_tabbar.png"),
          activeiconSrc: require("../../assets/img/icon/icon_tabbar.png")
        },
        {
          key: 1,
          text: "通讯录",
          path: "/friends",
          iconSrc: require("../../assets/img/icon/icon_tabbar.png"),
          activeiconSrc: require("../../assets/img/icon/icon_tabbar.png")
        },
        {
          key: 2,
          text: "发现",
          path: "/discovery",
          iconSrc: require("../../assets/img/icon/icon_tabbar.png"),
          activeiconSrc: require("../../assets/img/icon/icon_tabbar.png")
        },
        {
          key: 3,
          text: "我",
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