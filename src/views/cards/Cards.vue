<template>
  <div>
    <Navigation :title="$store.state.isLoading?'收取中...':'卡包'" height="49px" back>
      <div slot="nav-right">▪▪▪</div>
    </Navigation>
    <div class="scroolBox-T">
      <div class="butGroup">
        <WxNavBut
          navIconSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          nav-name="票证"
          goIcon
        ></WxNavBut>
        <WxNavBut
          navIconSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          nav-name="交通卡"
          goIcon
        ></WxNavBut>
      </div>

      <div>
        <WxNavBut
          navIconSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          nav-name="卡券"
        ></WxNavBut>
        <div class="cardsList">
          <Card
            :iconSrc="item.iconSrc"
            :bgImgSrc="item.bgImgSrc"
            :name="item.name"
            :title="item.title"
            :text="item.text"
            v-for="item in cardsList"
            :key="item.name"
          />
        </div>
        <WxNavBut
          navIconSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          nav-name="其他商家"
        ></WxNavBut>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/common/navigation/Navigation";
import WxNavBut from "@/components/content/WxNavBut";
import Card from "@/components/content/Card";
import { request } from "@/network/request";

export default {
  data() {
    return {
      cardsList: []
    };
  },

  components: {
    Navigation,
    WxNavBut,
    Card
  },

  methods: {
    getCardsList() {
      request({
        url: "/cardsList"
      }).then(res => {
        this.cardsList = res.data.list;
        this.$store.commit("updateLoading", false);
      });
    }
  },
  created() {
    this.getCardsList();
  }
};
</script>

<style scoped>
.butGroup {
  margin-bottom: 5px;
}
</style>