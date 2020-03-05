<template>
  <div class="message-box">
    <MessagePanel v-for="item in messageList" :key="item.wxid" :messageInfo="item"></MessagePanel>
  </div>
</template>

<script>
import MessagePanel from "@/components/content/MessagePanel";
import { request } from "@/network/request";

export default {
  data() {
    return {
      messageList: []
    };
  },

  components: {
    MessagePanel
  },

  methods: {
    getMessageList() {
      request({
        url: "/messageList"
      }).then(res => {
        this.messageList = res.data.list;
        this.$store.commit("updateLoading", false);
      });
    }
  },
  created() {
    this.getMessageList();
  }
};
</script>

<style scoped>
</style>