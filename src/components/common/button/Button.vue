<template>
  <div>
    <a class="button" href="javascript:;" :style="{background:background,width:(block)?'100%':''}">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    background:String,
    block:Boolean,
    mini:Boolean,
  },
  data() {
    return {};
  },

  components: {},

  methods: {}
};
</script>

<style scoped>
.button {
  position: relative;
  display: block;
  width: 184px;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 24px;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 17px;
  text-align: center;
  text-decoration: none;
  color: #555;
  line-height: 1.41176471;
  border-radius: 4px;
  overflow: hidden;
}
</style>