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
        case "go":
          return require("./svg/arrow-right.svg");
        case "collection":
          return require("./svg/collection.svg");
        case "ellipsis":
          return require("./svg/ellipsis.svg");
        case "moments":
          return require("./svg/moments.svg");
        case "pay":
          return require("./svg/pay.svg");
        case "search":
          return require("./svg/search.svg");
        case "wallet":
          return require("./svg/wallet.svg");
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