<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {}
};
</script>

<style scoped>
.row {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin: 6px 7px;
  background-color: #fff;
  border-radius: 5px;
}
</style>