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
          navIconSrc: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        },
        {
          navName: "游戏",
          navIconSrc: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        },
        {
          navName: "购物",
          navIconSrc: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
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