(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{207:function(t,e,n){var content=n(215);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("c0b1ced6",content,!0,{sourceMap:!1})},208:function(t,e,n){"use strict";var r=n(4),o=n(21),c=n(25),l=n(114),d=n(61),f=n(11),v=n(42).f,m=n(62).f,h=n(10).f,_=n(209).trim,x=r.Number,w=x,I=x.prototype,y="Number"==c(n(78)(I)),k="trim"in String.prototype,N=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=k?e.trim():_(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(y?f((function(){I.valueOf.call(n)})):"Number"!=c(n))?l(new w(N(e)),n,x):N(e)};for(var L,S=n(9)?v(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;S.length>C;C++)o(w,L=S[C])&&!o(x,L)&&h(x,L,m(w,L));x.prototype=I,I.constructor=x,n(12)(r,"Number",x)}},209:function(t,e,n){var r=n(8),o=n(24),c=n(11),l=n(210),d="["+l+"]",f=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),m=function(t,e,n){var o={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),f=o[t]=d?e(h):l[t];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},h=m.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(v,"")),t};t.exports=m},210:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},213:function(t,e,n){var content=n(229);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("2434137e",content,!0,{sourceMap:!1})},214:function(t,e,n){"use strict";var r=n(207);n.n(r).a},215:function(t,e,n){(e=n(15)(!1)).push([t.i,".loading[data-v-09c06d2e]{color:#fff;width:100%;text-align:center;padding:20px;text-transform:uppercase;letter-spacing:2px;font-weight:700}",""]),t.exports=e},216:function(t,e,n){var content=n(231);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("7aa0ab47",content,!0,{sourceMap:!1})},223:function(t,e,n){"use strict";var r={},o=(n(214),n(7)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"loading"},[this._v("Loading...")])}),[],!1,null,"09c06d2e",null);e.a=component.exports},228:function(t,e,n){"use strict";var r=n(213);n.n(r).a},229:function(t,e,n){(e=n(15)(!1)).push([t.i,'.col[data-v-73d994ac]{width:33.33%}@media (max-width:991px){.col[data-v-73d994ac]{width:50%}}@media (max-width:575px){.col[data-v-73d994ac]{width:100%}}.stream[data-v-73d994ac]{display:flex;flex-direction:column;margin-bottom:40px}.stream__info[data-v-73d994ac]{display:flex;padding:10px}.stream__logo[data-v-73d994ac]{width:30px;min-width:30px;height:30px;border-radius:100%;margin-right:10px}.stream__profile-name[data-v-73d994ac],.stream__title[data-v-73d994ac]{color:#fff}.stream__preview[data-v-73d994ac]{background-size:cover;background-position:50%;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding:10px}.stream__preview[data-v-73d994ac]:before{content:"";padding-top:50%;float:left}.stream__viewers[data-v-73d994ac]{color:#fff}.stream__viewers-round[data-v-73d994ac]{width:10px;height:10px;border-radius:100%;display:inline-block;background-color:red}',""]),t.exports=e},230:function(t,e,n){"use strict";var r=n(216);n.n(r).a},231:function(t,e,n){(e=n(15)(!1)).push([t.i,".game-page[data-v-7f62e03a]{display:flex;flex-wrap:wrap}.language-filter[data-v-7f62e03a]{width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:hsla(0,0%,100%,.5);text-align:center;color:#fff;cursor:pointer;text-transform:uppercase;padding:10px}",""]),t.exports=e},246:function(t,e,n){"use strict";n.r(e);n(17);var r=n(2),o=(n(208),{props:{preview:{type:String,default:""},viewers:{type:Number,default:null},logo:{type:String,default:""},userName:{type:String,default:""},title:{type:String,default:""},channelId:{type:String,default:null},channelLang:{type:String,default:""}},computed:{_img:function(){var t=this.preview.slice(0,-20);return"".concat(t,"300x200.jpg")}}}),c=(n(228),n(7)),l={components:{Stream:Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col"},[n("nuxt-link",{staticClass:"stream",attrs:{to:"/stream?channel="+t.userName+"&id="+t.channelId}},[n("div",{staticClass:"stream__preview",style:"background-image: url("+t._img+")"},[n("div",{staticClass:"stream__viewers"},[n("span",{staticClass:"stream__viewers-round"}),t._v("\n        "+t._s(t.viewers)+" зрителей\n      ")])]),t._v(" "),n("div",{staticClass:"stream__info"},[n("div",{staticClass:"stream__info-row"},[n("div",{staticClass:"stream__profile-name"},[t._v("\n          ["+t._s(t.channelLang)+"] "+t._s(t.userName)+"\n        ")]),t._v(" "),n("div",{staticClass:"stream__title"},[t._v(t._s(t.title))])])])])],1)}),[],!1,null,"73d994ac",null).exports,Loading:n(223).a},data:function(){return{isLoading:!1,title:"",id:"",language:"",streams:null,paginationID:null,scrollLoadingData:null,cachedData:null}},watch:{},beforeRouteUpdate:function(t,e,n){n(),this.language=this.$route.query.lang,this.__getStreams()},mounted:function(){var t=this;this.title=this.$route.query.title,this.language=this.$route.query.lang,this.id=this.$route.query.id,this.__getStreams(),this.scrollLoadingData=function(){var e=document.body.clientHeight;window.pageYOffset+window.innerHeight>=e-150&&!t.isLoading&&t.__moreStreams()},window.addEventListener("scroll",this.scrollLoadingData)},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollLoadingData)},methods:{__getStreams:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isLoading=!0,t.streams=null,n={headers:{"Client-ID":"z97pdq1cei4wqu42l3kkkdnseq06bj",accept:"application/vnd.twitchtv.v5+json"}},"all"!==t.language){e.next=9;break}return e.next=6,t.$axios.$get("https://api.twitch.tv/helix/streams/?game_id=".concat(t.id),n);case 6:data=e.sent,e.next=12;break;case 9:return e.next=11,t.$axios.$get("https://api.twitch.tv/helix/streams/?game_id=".concat(t.id,"&language=").concat(t.language),n);case 11:data=e.sent;case 12:t.streams=data.data,t.paginationID=data.pagination.cursor,t.isLoading=!1;case 15:case"end":return e.stop()}}),e)})))()},__moreStreams:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isLoading=!0,n={headers:{"Client-ID":"z97pdq1cei4wqu42l3kkkdnseq06bj",accept:"application/vnd.twitchtv.v5+json"}},"all"!==t.language){e.next=8;break}return e.next=5,t.$axios.$get("https://api.twitch.tv/helix/streams/?game_id=".concat(t.id,"&after=").concat(t.paginationID),n);case 5:data=e.sent,e.next=11;break;case 8:return e.next=10,t.$axios.$get("https://api.twitch.tv/helix/streams/?game_id=".concat(t.id,"&language=").concat(t.language,"&after=").concat(t.paginationID),n);case 10:data=e.sent;case 11:t.streams=t.streams.concat(data.data),t.paginationID=data.pagination.cursor,t.isLoading=!1;case 14:case"end":return e.stop()}}),e)})))()}}},d=(n(230),Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"game-page"},["all"===t.language?n("nuxt-link",{staticClass:"language-filter",attrs:{to:"/game?title="+t.title+"&id="+t.id+"&lang=ru"}},[t._v("\n      Показать трансляции на русском\n    ")]):t._e(),t._v(" "),"ru"===t.language?n("nuxt-link",{staticClass:"language-filter",attrs:{to:"/game?title="+t.title+"&id="+t.id+"&lang=all"}},[t._v("\n      Показать трансляции на всех языках\n    ")]):t._e(),t._v(" "),t._l(t.streams,(function(t){return n("Stream",{key:t.id,attrs:{preview:t.thumbnail_url,userName:t.user_name,title:t.title,viewers:t.viewer_count,channelId:t.user_id,channelLang:t.language}})}))],2),t._v(" "),t.isLoading?n("Loading"):t._e()],1)}),[],!1,null,"7f62e03a",null));e.default=d.exports}}]);