<template>
  <div class="nav-bar" :style="{height:height}">
    <Icon v-if="back" class="nav-back" @click.native="historyBack()" type="back" />
    <p class="nav-title" :style="{color:color}">{{title}}</p>
    <div class="nav-right">
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/common/icon/Icon";

export default {
  props: {
    title: String,
    back: Boolean,
    height: String,
    color: String
  },
  data() {
    return {};
  },

  components: {
    Icon
  },

  methods: {
    historyBack() {
      this.$router.back(-1);
    }
  }
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #ddd;
  position: relative;
  font-size: 18px;
}
.nav-title {
  margin: 0 auto;
}
.nav-back {
  position: absolute;
  left: 15px;
}
.nav-right {
  position: absolute;
  right: 15px;
}
</style>