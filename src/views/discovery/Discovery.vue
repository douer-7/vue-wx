<template>
  <div>
    <Navigation title="发现" height="49px"></Navigation>
    <WxNavBut
      v-for="item in navList"
      :key="item.navName"
      :navName="item.navName"
      :navIconSrc="item.navIconSrc"
    ></WxNavBut>
  </div>
</template>

<script>
import Navigation from "@/components/common/navigation/Navigation";
import WxNavBut from "@/components/content/WxNavBut";

export default {
  data() {
    return {
      navList: [
        {
          navName: "朋友圈",
          navIconSrc: require("../../assets/img/avatar.png")
        },
        {
          navName: "游戏",
          navIconSrc: require("../../assets/img/avatar.png")
        },
        {
          navName: "购物",
          navIconSrc: require("../../assets/img/avatar.png")
        }
      ]
    };
  },

  components: {
    Navigation,
    WxNavBut
  },

  methods: {}
};
</script>

<style scoped>
</style>