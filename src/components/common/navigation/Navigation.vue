<template>
  <div class="nav-bar" 
  :style="{backgroundColor:backgroundColor,height:height}">
    <div v-if="back" class="nav-back" @click="historyBack()">返回</div>
    <p class="nav-title" :style="{color:color}">{{title}}</p>
    <div class="nav-right">
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    back: Boolean,
    height: String,
    color: String,
    backgroundColor: String
  },
  data() {
    return {};
  },

  components: {},

  methods: {
    historyBack() {
      console.log("返回点击");
    }
  }
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #f7f7f7;
}
.nav-title {
  margin: 0 auto;
  font-size: 18px;
}
.nav-back {
  position: absolute;
  left: 5px;
}
.nav-right {
  position: absolute;
  right: 5px;
}
</style>