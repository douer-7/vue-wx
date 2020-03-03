<template>
  <div class="tab-bar" :style="{height:height}">
    <TabBarItem
      v-for="item in items"
      :key="item.key"
      :text="item.text"
      :path="item.path"
      :iconSrc="item.iconSrc"
      :activeColor="activeColor"
      :activeiconSrc="(item.activeiconSrc)?item.activeiconSrc:item.iconSrc"
    ></TabBarItem>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem";
export default {
  props: {
    activeColor: String,
    items: Array,
    height: String
  },
  data() {
    return {};
  },

  components: {
    TabBarItem
  },

  methods: {}
};
</script>

<style scoped>
.tab-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #eee;
  background-color: #f7f7f7;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>