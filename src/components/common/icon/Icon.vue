<template>
  <img :src="iconSrc" class="icon" />
</template>

<script>
export default {
  props: {
    type: String
  },
  data() {
    return {};
  },

  components: {},

  methods: {},
  computed: {
    iconSrc() {
      switch (this.type) {
        case "add":
          return require("./svg/add.svg");
        case "add-account":
          return require("./svg/add-account.svg");
        case "back":
          return require("./svg/arrow-lift.svg");
        case "moments":
          return require("./svg/moments.svg");
        case "go":
          return require("./svg/arrow-right.svg");
      }
      return null;
    }
  }
};
</script>

<style scoped>
.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;

}
</style>