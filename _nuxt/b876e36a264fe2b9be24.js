(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{218:function(t,e,r){var content=r(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("a2732ffe",content,!0,{sourceMap:!1})},219:function(t,e,r){var content=r(237);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("31aa46c1",content,!0,{sourceMap:!1})},220:function(t,e,r){var content=r(239);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("572868ec",content,!0,{sourceMap:!1})},234:function(t,e,r){"use strict";var n=r(218);r.n(n).a},235:function(t,e,r){(e=r(15)(!1)).push([t.i,".quality-change[data-v-4b3c6b97]{position:absolute;bottom:0;left:0;right:0;background-color:#000;z-index:10}.quality[data-v-4b3c6b97]{padding:5px 20px;color:#fff;cursor:pointer}.quality.active[data-v-4b3c6b97]{color:#000;background-color:#fff}",""]),t.exports=e},236:function(t,e,r){"use strict";var n=r(219);r.n(n).a},237:function(t,e,r){(e=r(15)(!1)).push([t.i,".chat[data-v-2e26cbb8]{width:30%}",""]),t.exports=e},238:function(t,e,r){"use strict";var n=r(220);r.n(n).a},239:function(t,e,r){(e=r(15)(!1)).push([t.i,".stream[data-v-576747ab]{display:flex;flex-wrap:wrap;height:100%;position:relative}.player-wrapper[data-v-576747ab]{position:relative;flex:1}.player[data-v-576747ab]{height:100%}.player .player-video .avap-ads-container[data-v-576747ab],.player .player-video .ima-ads-container[data-v-576747ab]{display:none!important}.player__controls-wrap[data-v-576747ab]{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;z-index:1;justify-content:flex-end}.player__controls[data-v-576747ab],.player__controls-wrap[data-v-576747ab]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.player__controls[data-v-576747ab]{opacity:0;transition:.25s}.player__controls.active[data-v-576747ab]{opacity:1;-webkit-user-select:all;-moz-user-select:all;-ms-user-select:all;user-select:all}.player__change-quality[data-v-576747ab]{color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;bottom:10px;right:10px;cursor:pointer}.player__change-quality i[data-v-576747ab]{font-size:30px}.player__back[data-v-576747ab]{color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;left:10px;top:10px;cursor:pointer;z-index:4}.player__back i[data-v-576747ab]{font-size:30px}.player__follow[data-v-576747ab],.player__unfollow[data-v-576747ab]{color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;right:10px;top:10px;cursor:pointer;z-index:4}.player__follow i[data-v-576747ab],.player__unfollow i[data-v-576747ab]{font-size:30px}.player__loading[data-v-576747ab]{top:0;z-index:3;background-color:rgba(0,0,0,.5);align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:30px}.player__loading[data-v-576747ab],.stream__info[data-v-576747ab]{position:absolute;right:0;bottom:0;left:0;display:flex;color:#fff}.stream__info[data-v-576747ab]{background-color:#000;padding:10px;align-items:flex-start;flex-wrap:wrap;z-index:5}.stream__info-logo-col[data-v-576747ab]{padding:0 10px}.stream__info-info-col[data-v-576747ab]{flex:1;padding:0 10px}.stream__logo[data-v-576747ab]{width:50px;height:50px;background-size:cover;background-position:50%;border-radius:100%}",""]),t.exports=e},245:function(t,e,r){"use strict";r.r(e);r(17);var n=r(2),o={props:{qualities:{type:Array,default:null},isShow:{type:Boolean,default:!1},changeQuality:{type:Function,default:null},currQuality:{type:String,default:null}}},l=(r(234),r(7)),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dir",[t.isShow?r("div",{staticClass:"quality-change"},t._l(t.qualities,(function(e){return r("div",{key:e.group,staticClass:"quality",class:{active:t.currQuality===e.group},on:{click:function(r){return t.changeQuality(e.group)}}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),0):t._e()])}),[],!1,null,"4b3c6b97",null).exports,f={props:{isPlayerFull:{type:Boolean,default:!1},userName:{type:String,default:null}}},_=(r(236),{layout:"stream-page",components:{QualityChange:c,Chat:Object(l.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chat",style:this.isPlayerFull?"display: none":"display: block"},[e("iframe",{attrs:{src:"https://www.twitch.tv/embed/"+this.userName+"/chat?darkpopout",frameborder:"0",scrolling:"no",height:"100%",width:"100%"}})])}),[],!1,null,"2e26cbb8",null).exports},data:function(){return{userName:null,userID:null,player:null,qualities:[],currQuality:null,showQualityChange:!1,isPlayerFull:!1,isPlayerLoading:!1,isFollowed:!1,streamInfo:null,isShowControls:!1}},mounted:function(){var t=this;this.isPlayerLoading=!0,this.userName=this.$route.query.channel,this.userID=this.$route.query.id;var e={channel:this.userName,controls:!1,width:"100%",height:"100%"};this.__getStreamInfo(),this.player=new Twitch.Player(this.$refs.player,e),this.player.addEventListener(Twitch.Player.PLAYING,(function(){t.qualities=t.player.getQualities(),t.isPlayerLoading=!1,t.currQuality=t.player.getQuality(),t.player.setMuted(!1)})),this.__checkFollowChannel()},methods:{__showQualities:function(){this.showQualityChange=!0},__closeQualities:function(){this.showQualityChange=!1},__changeQuality:function(q){this.player.setQuality(q),this.showQualityChange=!1},__changePlayerSize:function(){this.isPlayerFull=!this.isPlayerFull},__back:function(){this.$router.back()},__showControls:function(){this.isShowControls?this.isShowControls=!1:this.isShowControls=!0},__follow:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$store.state.auth.userID,e.next=3,t.$store.dispatch("favorites/followChannel",[r,t.userID]);case 3:e.sent&&(t.isFollowed=!0);case 5:case"end":return e.stop()}}),e)})))()},__unFollow:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!confirm("Вы уверены, что хотите отписаться?")){e.next=7;break}return r=t.$store.state.auth.userID,e.next=5,t.$store.dispatch("favorites/unFollowChannel",[r,t.userID]);case 5:e.sent&&(t.isFollowed=!1);case 7:case"end":return e.stop()}}),e)})))()},__checkFollowChannel:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("auth/validateAuth");case 2:return r=t.$store.state.auth.userID,e.next=5,t.$store.dispatch("favorites/checkFollowChannel",[r,t.userID]);case 5:data=e.sent,t.isFollowed=data;case 7:case"end":return e.stop()}}),e)})))()},__getStreamInfo:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://api.twitch.tv/kraken/streams/".concat(t.userID),{headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":"z97pdq1cei4wqu42l3kkkdnseq06bj"}});case 2:data=e.sent,t.streamInfo=data.stream;case 4:case"end":return e.stop()}}),e)})))()}}}),d=(r(238),Object(l.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"stream"},[r("div",{ref:"playerWrapper",staticClass:"player-wrapper"},[r("div",{staticClass:"player__controls-wrap",on:{dblclick:function(e){return t.__changePlayerSize()},click:function(e){t.__closeQualities(),t.__showControls()}}},[r("div",{staticClass:"player__controls",class:{active:t.isShowControls}},[r("div",{staticClass:"player__back",on:{click:function(e){return e.stopPropagation(),t.__back()}}},[r("i",{staticClass:"fas fa-arrow-left"})]),t._v(" "),t.isFollowed?r("div",{staticClass:"player__follow",on:{click:function(e){return e.stopPropagation(),t.__unFollow()}}},[r("i",{staticClass:"fas fa-heart"})]):r("div",{staticClass:"player__unfollow",on:{click:function(e){return e.stopPropagation(),t.__follow()}}},[r("i",{staticClass:"far fa-heart"})]),t._v(" "),t.streamInfo?r("div",{staticClass:"stream__info"},[r("div",{staticClass:"stream__info-logo-col"},[r("div",{staticClass:"stream__logo",style:"background-image: url("+t.streamInfo.channel.logo+")"})]),t._v(" "),r("div",{staticClass:"stream__info-info-col"},[r("div",{staticClass:"stream__streamer"},[t._v("\n              "+t._s(t.streamInfo.channel.display_name)+"\n            ")]),t._v(" "),r("div",{staticClass:"stream__title"},[t._v(t._s(t.streamInfo.channel.status))]),t._v(" "),r("div",{staticClass:"stream__game"},[t._v(t._s(t.streamInfo.game))]),t._v(" "),r("div",{staticClass:"stream__viewers"},[t._v("\n              "+t._s(t.streamInfo.viewers)+" зрителей\n            ")])]),t._v(" "),r("div",{staticClass:"player__change-quality",on:{click:function(e){return e.stopPropagation(),t.__showQualities()}}},[r("i",{staticClass:"fas fa-cog"})])]):t._e()]),t._v(" "),r("div",{staticClass:"player__qualities"}),t._v(" "),t.isPlayerLoading?r("div",{staticClass:"player__loading"},[t._v("\n        Loading...\n      ")]):t._e()]),t._v(" "),r("div",{ref:"player",staticClass:"player"}),t._v(" "),r("QualityChange",{attrs:{qualities:t.qualities,isShow:t.showQualityChange,changeQuality:t.__changeQuality,currQuality:t.currQuality}})],1),t._v(" "),r("Chat",{attrs:{isPlayerFull:t.isPlayerFull,userName:t.userName}})],1)}),[],!1,null,"576747ab",null));e.default=d.exports}}]);