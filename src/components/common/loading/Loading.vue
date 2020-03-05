<template>
  <div class="loading-mask" v-if="isLoading">
    <slot></slot>
    <div class="loading-content">
      <h1>加载中……</h1>
      <p class="loading-close" @click="close()">点击关闭</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: Boolean
  },
  data() {
    return {};
  },

  components: {},

  methods: {
    close() {
      this.onClose();
      console.log("关闭");
    }
  }
};
</script>

<style scoped>
.loading-mask {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.loading-content {
  position: absolute;
  right: 0;
  left: 0;
  top: 30%;
  margin: 0 auto;
  z-index: 999;
}
.loading-close {
  cursor: pointer;
}
</style>