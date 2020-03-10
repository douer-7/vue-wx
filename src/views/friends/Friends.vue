<template>
  <div class="view-B">
    <Navigation title="通讯录" height="49px">
      <div slot="nav-right">
        <Icon type="add-account" />
      </div>
    </Navigation>
    <div class="scroolBox-TB">
      <div class="butGroup">
        <WxNavBut
          nav-name="新的朋友"
          navIconSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          path="/pay"
        ></WxNavBut>
        <WxNavBut
          nav-name="群聊"
          navIconSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          path="/pay"
        ></WxNavBut>
        <WxNavBut
          nav-name="标签"
          navIconSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          path="/pay"
        ></WxNavBut>
        <WxNavBut
          nav-name="公众号"
          navIconSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          path="/pay"
        ></WxNavBut>
      </div>

      <div class="friendsList">
        <WxNavBut
          v-for="item in friendsList"
          :key="item.wxid"
          :navName="item.nickname"
          :navIconSrc="item.avatarSrc"
        ></WxNavBut>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/common/navigation/Navigation";
import WxNavBut from "@/components/content/WxNavBut";
import Icon from "@/components/common/icon/Icon";
import { request } from "@/network/request";

export default {
  data() {
    return {
      friendsList: []
    };
  },

  components: {
    Navigation,
    WxNavBut,
    Icon
  },

  methods: {
    getFriendsList() {
      request({
        url: "/friendsList"
      }).then(res => {
        this.friendsList = res.data.list;
        this.$store.commit("updateLoading", false);
      });
    }
  },
  created() {
    this.getFriendsList();
  }
};
</script>

<style scoped>
.butGroup {
  margin-bottom: 20px;
}
</style>