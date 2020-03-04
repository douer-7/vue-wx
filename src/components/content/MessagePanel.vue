<template>
  <div class="wxMessagePanel" @click="enterChat()">
    <Panel
      :imgSrc="messageInfo.avatarSrc"
      :title="messageInfo.nickname"
      :time="messageInfo.time"
      :content="messageInfo.message"
    ></Panel>
  </div>
</template>

<script>
import Panel from "@/components/common/panel/Panel";

export default {
  props: {
    messageInfo: {
      wxid: String,
      avatarSrc: String,
      nickname: String,
      message: String,
      time: String,
    }
  },
  data() {
    return {};
  },

  components: {
    Panel
  },

  methods: {
      enterChat(){
          console.log('点击了'+this.messageInfo.wxid);
          this.$router.push('/chat/'+this.messageInfo.wxid);
      }
  }
};
</script>

<style scoped>
</style>