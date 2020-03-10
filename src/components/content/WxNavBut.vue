<template>
  <Button class="nav-block-but" block @click.native="navOnClick()">
    <slot>
      <img :src="navIconSrc" class="nav-icon" />
      <p class="nav-name">{{navName}}</p>
    </slot>
    <Icon v-if="goIcon" class="icon-go" type="go" />
  </Button>
</template>

<script>
import Button from "@/components/common/button/Button";
import Icon from "@/components/common/icon/Icon";

export default {
  props: {
    navIconSrc: String,
    navName: String,
    path: String,
    goIcon: Boolean
  },
  data() {
    return {};
  },

  components: {
    Button,
    Icon
  },

  methods: {
    navOnClick() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style scoped>
.nav-block-but {
  background-color: #fff;
  height: 50px;
  display: flex;
}
.nav-block-but::after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.1);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.nav-icon {
  height: 100%;
  margin-right: 10px;
  border-radius: 2px;
}
.icon-go {
  position: absolute;
  right: 24px;
}
</style>