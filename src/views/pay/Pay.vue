<template>
  <div>
    <Navigation title="支付" height="49px" back>
      <div slot="nav-right">
        <Icon type="ellipsis" />
      </div>
    </Navigation>
    <div class="scroolBox-T">
      <Row :style="{backgroundColor: '#07c160',padding:'20px 0',justifyContent: 'space-around'}">
        <SquareNav iconType="pay" text="收付款"></SquareNav>
        <SquareNav iconType="wallet" text="钱包"></SquareNav>
      </Row>

      <Row v-for="(item,index) in navList" :key="index" :style="{padding:'10px 0'}">
        <p class="nav-list-title">{{item.title}}</p>
        <SquareNav
          v-for="nav in item.list"
          :key="nav.text"
          :iconType="nav.iconType"
          :text="nav.text"
          :style="{width:'33.33%'}"
        ></SquareNav>
      </Row>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/common/navigation/Navigation";
import Row from "@/components/common/row/Row";
import SquareNav from "@/components/content/SquareNav";
import Icon from "@/components/common/icon/Icon";

import { request } from "@/network/request";

export default {
  data() {
    return {
      navList: []
    };
  },

  components: {
    Navigation,
    SquareNav,
    Icon,
    Row
  },

  methods: {
    getNavList() {
      request({
        url: "/payNavList"
      }).then(res => {
        this.navList = res.data.data;
        this.$store.commit("updateLoading", false);
        console.log(this.navList);
      });
    }
  },
  created() {
    this.getNavList();
  }
};
</script>

<style scoped>
.nav-list-title {
  width: 100%;
  text-indent: 20px;
  font-size: 12px;
  margin:0;
  padding-bottom:10px ;
  border-bottom: 1px #ededed solid;
  color: #ccc;
}
</style>