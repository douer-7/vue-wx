(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc9369f6"],{"10d1":function(t,n,a){"use strict";var c=a("ec7e"),s=a.n(c);s.a},"22ff":function(t,n,a){"use strict";var c=a("d8a1"),s=a.n(c);s.a},3796:function(t,n,a){"use strict";var c=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("img",{staticClass:"icon",attrs:{src:t.iconSrc}})},s=[],e={props:{type:String},data:function(){return{}},components:{},methods:{},computed:{iconSrc:function(){switch(this.type){case"add":return a("b500");case"add-account":return a("d0f5");case"back":return a("59f0");case"moments":return a("56ce");case"go":return a("6a34")}return null}}},o=e,r=(a("5a7f"),a("2877")),i=Object(r["a"])(o,c,s,!1,null,"bbde4356",null);n["a"]=i.exports},"41ae":function(t,n,a){"use strict";a.r(n);var c=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"view-B"},[a("Navigation",{attrs:{title:"通讯录",height:"49px"}},[a("div",{attrs:{slot:"nav-right"},slot:"nav-right"},[a("Icon",{attrs:{type:"add-account"}})],1)]),a("div",{staticClass:"scroolBox-TB"},[a("div",{staticClass:"butGroup"},[a("WxNavBut",{attrs:{"nav-name":"新的朋友",navIconSrc:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",path:"/pay"}}),a("WxNavBut",{attrs:{"nav-name":"群聊",navIconSrc:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",path:"/pay"}}),a("WxNavBut",{attrs:{"nav-name":"标签",navIconSrc:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",path:"/pay"}}),a("WxNavBut",{attrs:{"nav-name":"公众号",navIconSrc:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",path:"/pay"}})],1),a("div",{staticClass:"friendsList"},t._l(t.friendsList,(function(t){return a("WxNavBut",{key:t.wxid,attrs:{navName:t.nickname,navIconSrc:t.avatarSrc}})})),1)])],1)},s=[],e=a("e7c5"),o=a("f626"),r=a("3796"),i=a("1bab"),u={data:function(){return{friendsList:[]}},components:{Navigation:e["a"],WxNavBut:o["a"],Icon:r["a"]},methods:{getFriendsList:function(){var t=this;Object(i["a"])({url:"/friendsList"}).then((function(n){t.friendsList=n.data.list,t.$store.commit("updateLoading",!1)}))}},created:function(){this.getFriendsList()}},l=u,f=(a("c5b4"),a("2877")),p=Object(f["a"])(l,c,s,!1,null,"5e55b339",null);n["default"]=p.exports},"56ce":function(t,n,a){t.exports=a.p+"img/moments.943151a9.svg"},"56d6":function(t,n,a){"use strict";var c=a("d11f"),s=a.n(c);s.a},"59f0":function(t,n,a){t.exports=a.p+"img/arrow-lift.89cfd6b1.svg"},"5a7f":function(t,n,a){"use strict";var c=a("f056"),s=a.n(c);s.a},"6a34":function(t,n,a){t.exports=a.p+"img/arrow-right.5ed83f2f.svg"},"9ca3":function(t,n,a){},b500:function(t,n,a){t.exports=a.p+"img/add.8a35dab3.svg"},c5b4:function(t,n,a){"use strict";var c=a("9ca3"),s=a.n(c);s.a},d0f5:function(t,n,a){t.exports=a.p+"img/add-account.67bde8ce.svg"},d11f:function(t,n,a){},d8a1:function(t,n,a){},e7c5:function(t,n,a){"use strict";var c=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"nav-bar",style:{height:t.height}},[t.back?a("Icon",{staticClass:"nav-back",attrs:{type:"back"},nativeOn:{click:function(n){return t.historyBack()}}}):t._e(),a("p",{staticClass:"nav-title",style:{color:t.color}},[t._v(t._s(t.title))]),a("div",{staticClass:"nav-right"},[t._t("nav-right")],2)],1)},s=[],e=a("3796"),o={props:{title:String,back:Boolean,height:String,color:String},data:function(){return{}},components:{Icon:e["a"]},methods:{historyBack:function(){this.$router.back(-1)}}},r=o,i=(a("10d1"),a("2877")),u=Object(i["a"])(r,c,s,!1,null,"05a94f50",null);n["a"]=u.exports},ec7e:function(t,n,a){},f056:function(t,n,a){},f626:function(t,n,a){"use strict";var c=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("Button",{staticClass:"nav-block-but",attrs:{block:""},nativeOn:{click:function(n){return t.navOnClick()}}},[t._t("default",[a("img",{staticClass:"nav-icon",attrs:{src:t.navIconSrc}}),a("p",{staticClass:"nav-name"},[t._v(t._s(t.navName))])]),t.goIcon?a("Icon",{staticClass:"icon-go",attrs:{type:"go"}}):t._e()],2)},s=[],e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"button",style:t.butStyle},[t._t("default")],2)},o=[],r={props:{background:String,block:Boolean,mini:Boolean},data:function(){return{}},computed:{butStyle:function(){return{background:this.background,width:this.block?"100%":""}}},components:{},methods:{}},i=r,u=(a("22ff"),a("2877")),l=Object(u["a"])(i,e,o,!1,null,"a0f0495e",null),f=l.exports,p=a("3796"),v={props:{navIconSrc:String,navName:String,path:String,goIcon:Boolean},data:function(){return{}},components:{Button:f,Icon:p["a"]},methods:{navOnClick:function(){this.$router.push(this.path)}}},d=v,h=(a("56d6"),Object(u["a"])(d,c,s,!1,null,"56b3ea2e",null));n["a"]=h.exports}}]);
//# sourceMappingURL=chunk-cc9369f6.75f99436.js.map