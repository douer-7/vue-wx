(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26e8bf8b"],{"2bc2":function(t,e,s){"use strict";var n=s("5722"),a=s.n(n);a.a},5722:function(t,e,s){},"6de6":function(t,e,s){},aa86:function(t,e,s){"use strict";var n=s("6de6"),a=s.n(n);a.a},b3d7:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"view-home"},[s("Navigation",{attrs:{title:t.$store.state.isLoading?"收取中...":"微信",height:"49px"}},[s("div",{attrs:{slot:"nav-right"},slot:"nav-right"},[t._v("◉")])]),s("MessageBox")],1)},a=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message-box"},t._l(t.messageList,(function(t){return s("MessagePanel",{key:t.wxid,attrs:{messageInfo:t}})})),1)},c=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wxMessagePanel",on:{click:function(e){return t.enterChat()}}},[s("Panel",{attrs:{imgSrc:t.messageInfo.avatarSrc,title:t.messageInfo.nickname,time:t.messageInfo.time,content:t.messageInfo.message}})],1)},o=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel"},[s("img",{staticClass:"panel-img",attrs:{src:t.imgSrc}}),s("div",{staticClass:"panel-text"},[s("p",{staticClass:"panel-title"},[t._v(t._s(t.title))]),s("p",{staticClass:"panel-content"},[t._v(t._s(t.content))]),s("div",{staticClass:"panel-time"},[t._v(t._s(t.time))])])])},u=[],g={props:{imgSrc:String,title:String,time:String,content:String},data:function(){return{}},components:{},methods:{}},m=g,f=(s("aa86"),s("2877")),d=Object(f["a"])(m,l,u,!1,null,"1d821d5e",null),h=d.exports,v={props:{messageInfo:{wxid:String,avatarSrc:String,nickname:String,message:String,time:String}},data:function(){return{}},components:{Panel:h},methods:{enterChat:function(){console.log("点击了"+this.messageInfo.wxid),this.$router.push("/chat/"+this.messageInfo.wxid)}}},p=v,b=Object(f["a"])(p,r,o,!1,null,"5b6862ca",null),_=b.exports,S=s("1bab"),x={data:function(){return{messageList:[]}},components:{MessagePanel:_},methods:{getMessageList:function(){var t=this;Object(S["a"])({url:"/messageList"}).then((function(e){t.messageList=e.data.list,t.$store.commit("updateLoading",!1)}))}},created:function(){this.getMessageList()}},C=x,k=Object(f["a"])(C,i,c,!1,null,"b810c806",null),w=k.exports,$=s("e7c5"),I={data:function(){return{}},components:{Navigation:$["a"],MessageBox:w},methods:{}},L=I,M=Object(f["a"])(L,n,a,!1,null,"7eab1aa9",null);e["default"]=M.exports},e7c5:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-bar",style:{height:t.height}},[t.back?s("div",{staticClass:"nav-back",on:{click:function(e){return t.historyBack()}}},[t._v("返回")]):t._e(),s("p",{staticClass:"nav-title",style:{color:t.color}},[t._v(t._s(t.title))]),s("div",{staticClass:"nav-right"},[t._t("nav-right")],2)])},a=[],i={props:{title:String,back:Boolean,height:String,color:String},data:function(){return{}},components:{},methods:{historyBack:function(){console.log("返回点击"),this.$router.back(-1)}}},c=i,r=(s("2bc2"),s("2877")),o=Object(r["a"])(c,n,a,!1,null,"7cc44edc",null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-26e8bf8b.a6ab2b68.js.map