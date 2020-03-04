<template>
  <div class="loading-mask" v-if="isLoading">
    <h1>加载中……</h1>
    <p class="loading-close" >点击关闭</p>
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

  methods: {}
};
</script>

<style scoped>
.loading-mask {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>