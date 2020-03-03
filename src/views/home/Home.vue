<template>
  <div id="view-home">
    <Navigation title="首页" height="50px" back="true" color="#07c160" >
      <div slot="nav-right">右边插槽</div>
    </Navigation>
    <Button background="#ddd" mini @click="butClick()">按钮</Button>

  </div>
</template>

<script>
import Button from "@/components/common/button/Button";
import Navigation from "@/components/common/navigation/Navigation";
export default {
  data() {
    return {};
  },

  components: {
    Navigation,
    Button
  },

  methods: {
    butClick(){
      console.log('点击了');
      
    }
  }
};
</script>

<style scoped>
</style>