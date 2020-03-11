<template>
  <div class="card">
    <img class="card-icon" :src="iconSrc" alt />
    <div class="flexRight">
      <p class="card-name">{{name}}</p>
      <div class="card-bg" :style="cardBgStyle">
        <p class="card-title">{{title}}</p>
        <p class="card-text">{{text}}</p>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: {
    iconSrc: String,
    bgImgSrc: String,
    name: String,
    title: String,
    text: String
  },
  data() {
    return {};
  },

  components: {},

  methods: {},

  computed: {
    cardBgStyle() {
      let style = {
        backgroundImage: "url('" + this.bgImgSrc + "')"
      };
      return style;
    }
  }
};
</script>

<style scoped>
.card {
  background: #fff;
  display: flex;
  padding: 8px 24px;
}
.flexRight::after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: -12px;
  right: 0;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.1);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  z-index: 2;
}
.card-icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
}
.flexRight {
  width: 100%;
  position: relative;
}
.card-name {
  margin: 0;
  line-height: 30px;
}
.card-bg {
  background-position: center;
  padding: 10px;
  color: #fff;
  font-weight: 600;
  border-radius: 5px;
}
.card-title {
  font-size: 24px;
  margin: 0;
}
.card-text {
  margin: 8px 0;
}
</style>