<template>
  <div class="view-B">
    <Navigation :title="$store.state.isLoading?'收取中...':'微信'" height="49px">
      <div slot="nav-right">
        <Icon type="add" />
      </div>
    </Navigation>
    <MessageBox></MessageBox>
  </div>
</template>

<script>
import MessageBox from "@/components/content/MessageBox";
import Navigation from "@/components/common/navigation/Navigation";
import Icon from "@/components/common/icon/Icon";

export default {
  data() {
    return {};
  },

  components: {
    Navigation,
    MessageBox,
    Icon
  },

  methods: {}
};
</script>

<style scoped>
</style>