<template>
  <div class="view-chat">
    <Navigation :title="wxid" height="49px" back>
      <div slot="nav-right">▪▪▪</div>
    </Navigation>
    <div class="chat-box">
      <h1>chat ==</h1>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/common/navigation/Navigation";

export default {
  props: {
    wxid: String
  },
  data() {
    return {};
  },

  components: {
    Navigation
  },
  methods: {}
};
</script>

<style scoped>
</style>