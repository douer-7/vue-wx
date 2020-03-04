<template>
  <div class="panel">
    <img class="panel-img" :src="imgSrc" />
    <div class="panel-text">
      <p class="panel-title">{{title}}</p>
      <p class="panel-content">{{content}}</p>
      <div class="panel-time">{{time}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    title: String,
    time: String,
    content: String
  },
  data() {
    return {};
  },

  components: {},

  methods: {}
};
</script>

<style scoped>
.panel {
  height: 50px;
  display: flex;
  padding: 10px 0;
}
.panel-img {
  height: 100%;
  margin: 0 10px;
  border-radius: 5px;
}
.panel-text {
  border-bottom: 1px solid #ededed;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-bottom: 10px;
}
.panel-title {
  margin: 0;
  font-size: 18px;
}
.panel-content {
  position: absolute;
  bottom: 16px;
  margin: 0;
  font-size: 14px;
  color: #aaa;
}
.panel-time {
  position: absolute;
  right: 5px;
  top: 0;
  font-size: 12px;
  color: #ccc;
}
</style>