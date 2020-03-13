<template>
  <div class="squareNav">
    <img :src="imgSrc" v-if="!iconType" />
    <Icon :type="iconType" v-if="iconType" :style="{width:'2.5em',height:'2.5em'}"></Icon>
    <p class="text">{{text}}</p>
  </div>
</template>

<script>
import Icon from "@/components/common/icon/Icon";

export default {
  props: {
    imgSrc: String,
    text: String,
    iconType: String
  },
  data() {
    return {};
  },

  components: {
    Icon
  },

  methods: {}
};
</script>

<style scoped>
.squareNav {
  box-sizing: border-box;
  text-align: center;
  padding: 5px 0;
}
.text {
  margin: 0;
  font-size: 14px;
}
</style>