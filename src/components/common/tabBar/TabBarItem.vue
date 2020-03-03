<template>
  <div @click="itemClick()" class="tab-bar-item" :style="activeStyle">
    <img class="tab-bar-icon" v-if="iconSrc" :src="isActive?activeiconSrc:iconSrc" />
    <div>{{text}}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    iconSrc: String,
    path: String,
    activeColor: String,
    activeiconSrc: String
  },
  data() {
    return {
      // isActive: flase
    };
  },

  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },

  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  color: #000;
  font-size: 10px;
  line-height: 1.4;
}

.tab-bar-icon {
  width: 28px;
  height: 28px;
}
</style>