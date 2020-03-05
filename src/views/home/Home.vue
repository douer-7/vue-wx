<template>
  <div class="view-home">
    <Navigation :title="$store.state.isLoading?'收取中...':'微信'" height="49px">
      <div slot="nav-right">◉</div>
    </Navigation>
    <MessageBox></MessageBox>
  </div>
</template>

<script>
import MessageBox from "@/components/content/MessageBox";
import Navigation from "@/components/common/navigation/Navigation";
export default {
  data() {
    return {};
  },

  components: {
    Navigation,
    MessageBox
  },

  methods: {}
};
</script>

<style scoped>
</style>