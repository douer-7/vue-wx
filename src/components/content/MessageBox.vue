<template>
  <div class="message-box">
    <MessagePanel v-for="item in messageList" :key="item.wxid" :messageInfo="item"></MessagePanel>
  </div>
</template>

<script>
import MessagePanel from "@/components/content/MessagePanel";

export default {
  data() {
    return {
      messageList: [
        {
          wxid: "ccxxss",
          avatarSrc: require("../../assets/img/avatar.png"),
          nickname: "张三",
          message: "我来了来了",
          time: "2020-2-11-09:54"
        },
        {
          wxid: "ccc",
          avatarSrc: require("../../assets/img/avatar.png"),
          nickname: "NHHUI",
          message: "haosjfc",
          time: "2020-2-11-09:54"
        },
        {
          wxid: "sss",
          avatarSrc: require("../../assets/img/avatar.png"),
          nickname: "isi",
          message: "v阿凡达十八岁的吧",
          time: "2020-2-11-09:54"
        },
      ]
    };
  },

  components: {
    MessagePanel
  },

  methods: {}
};
</script>

<style scoped>
</style>