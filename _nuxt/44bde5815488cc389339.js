(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{207:function(e,t,n){var content=n(215);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("c0b1ced6",content,!0,{sourceMap:!1})},208:function(e,t,n){"use strict";var r=n(4),o=n(21),c=n(25),l=n(114),f=n(61),d=n(11),v=n(42).f,m=n(62).f,_=n(10).f,h=n(209).trim,x=r.Number,w=x,k=x.prototype,I="Number"==c(n(78)(k)),N="trim"in String.prototype,y=function(e){var t=f(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,c=(t=N?t.trim():h(t,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var code,l=t.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+t};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof x&&(I?d((function(){k.valueOf.call(n)})):"Number"!=c(n))?l(new w(y(t)),n,x):y(t)};for(var C,S=n(9)?v(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;S.length>E;E++)o(w,C=S[E])&&!o(x,C)&&_(x,C,m(w,C));x.prototype=k,k.constructor=x,n(12)(r,"Number",x)}},209:function(e,t,n){var r=n(8),o=n(24),c=n(11),l=n(210),f="["+l+"]",d=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),m=function(e,t,n){var o={},f=c((function(){return!!l[e]()||"​"!="​"[e]()})),d=o[e]=f?t(_):l[e];n&&(o[n]=d),r(r.P+r.F*f,"String",o)},_=m.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(d,"")),2&t&&(e=e.replace(v,"")),e};e.exports=m},210:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},213:function(e,t,n){var content=n(228);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("07caf9da",content,!0,{sourceMap:!1})},214:function(e,t,n){"use strict";var r=n(207);n.n(r).a},215:function(e,t,n){(t=n(15)(!1)).push([e.i,".loading[data-v-09c06d2e]{color:#fff;width:100%;text-align:center;padding:20px;text-transform:uppercase;letter-spacing:2px;font-weight:700}",""]),e.exports=t},216:function(e,t,n){var content=n(230);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("be06e35e",content,!0,{sourceMap:!1})},222:function(e,t,n){"use strict";var r={},o=(n(214),n(7)),component=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"loading"},[this._v("Loading...")])}),[],!1,null,"09c06d2e",null);t.a=component.exports},227:function(e,t,n){"use strict";var r=n(213);n.n(r).a},228:function(e,t,n){(t=n(15)(!1)).push([e.i,'.col[data-v-028494be]{width:50%}.stream[data-v-028494be]{display:flex;flex-direction:column;margin-bottom:40px}.stream__info[data-v-028494be]{display:flex;padding:10px}.stream__logo[data-v-028494be]{width:30px;height:30px}.stream__profile-name[data-v-028494be],.stream__title[data-v-028494be]{color:#fff}.stream__preview[data-v-028494be]{background-size:cover;background-position:50%;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding:10px}.stream__preview[data-v-028494be]:before{content:"";padding-top:50%;float:left}.stream__viewers[data-v-028494be]{color:#fff}',""]),e.exports=t},229:function(e,t,n){"use strict";var r=n(216);n.n(r).a},230:function(e,t,n){(t=n(15)(!1)).push([e.i,".game-page[data-v-6df601b1]{display:flex;flex-wrap:wrap}.language-filter[data-v-6df601b1]{width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:hsla(0,0%,100%,.5);text-align:center;color:#fff;cursor:pointer;text-transform:uppercase;padding:10px}",""]),e.exports=t},242:function(e,t,n){"use strict";n.r(t);n(17);var r=n(2),o=(n(208),{props:{preview:{type:String,default:""},viewers:{type:Number,default:null},logo:{type:String,default:""},userName:{type:String,default:""},title:{type:String,default:""},channelId:{type:Number,default:null}}}),c=(n(227),n(7)),l={components:{Stream:Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col"},[n("nuxt-link",{staticClass:"stream",attrs:{to:"/stream?channel="+e.userName+"&id="+e.channelId}},[n("div",{staticClass:"stream__preview",style:"background-image: url("+e.preview+")"},[n("div",{staticClass:"stream__viewers"},[e._v(e._s(e.viewers)+" зрителей")])]),e._v(" "),n("div",{staticClass:"stream__info"},[n("img",{staticClass:"stream__logo",attrs:{src:e.logo}}),e._v(" "),n("div",{staticClass:"stream__info-row"},[n("div",{staticClass:"stream__profile-name"},[e._v(e._s(e.userName))]),e._v(" "),n("div",{staticClass:"stream__title"},[e._v(e._s(e.title))])])])])],1)}),[],!1,null,"028494be",null).exports,Loading:n(222).a},data:function(){return{isLoading:!1,title:"",language:"",streams:null,paginationID:null}},watch:{},beforeRouteUpdate:function(e,t,n){n(),this.language=this.$route.query.lang,this.__getStreams()},mounted:function(){var e=this;this.title=this.$route.query.title,this.language=this.$route.query.lang,this.__getStreams(),window.addEventListener("scroll",(function(){var t=document.body.clientHeight;window.pageYOffset+window.innerHeight>=t-150&&!e.isLoading&&e.__moreStreams()}))},methods:{__getStreams:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isLoading=!0,e.streams=null,n={headers:{"Client-ID":"z97pdq1cei4wqu42l3kkkdnseq06bj",accept:"application/vnd.twitchtv.v5+json"}},"all"!==e.language){t.next=9;break}return t.next=6,e.$axios.$get("https://api.twitch.tv/kraken/streams/?game=".concat(e.title),n);case 6:data=t.sent,t.next=12;break;case 9:return t.next=11,e.$axios.$get("https://api.twitch.tv/kraken/streams/?game=".concat(e.title,"&language=").concat(e.language),n);case 11:data=t.sent;case 12:e.streams=data.streams,e.paginationID=25,e.isLoading=!1;case 15:case"end":return t.stop()}}),t)})))()},__moreStreams:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isLoading=!0,n={headers:{"Client-ID":"z97pdq1cei4wqu42l3kkkdnseq06bj",accept:"application/vnd.twitchtv.v5+json"}},"all"!==e.language){t.next=8;break}return t.next=5,e.$axios.$get("https://api.twitch.tv/kraken/streams/?game=".concat(e.title,"&offset=").concat(e.paginationID),n);case 5:data=t.sent,t.next=11;break;case 8:return t.next=10,e.$axios.$get("https://api.twitch.tv/kraken/streams/?game=".concat(e.title,"&offset=").concat(e.paginationID,"&language=").concat(e.language),n);case 10:data=t.sent;case 11:e.streams=e.streams.concat(data.streams),e.paginationID=e.paginationID+25,e.isLoading=!1;case 14:case"end":return t.stop()}}),t)})))()}}},f=(n(229),Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"game-page"},["all"===e.language?n("nuxt-link",{staticClass:"language-filter",attrs:{to:"/game?title=League%20of%20Legends&lang=ru"}},[e._v("\n      Показать трансляции на русском\n    ")]):e._e(),e._v(" "),"ru"===e.language?n("nuxt-link",{staticClass:"language-filter",attrs:{to:"/game?title=League%20of%20Legends&lang=all"}},[e._v("\n      Показать трансляции на всех языках\n    ")]):e._e(),e._v(" "),e._l(e.streams,(function(e){return n("Stream",{key:e._id,attrs:{preview:e.preview.large,title:e.channel.status,userName:e.channel.name,viewers:e.viewers,logo:e.channel.logo,channelId:e.channel._id}})}))],2),e._v(" "),e.isLoading?n("Loading"):e._e()],1)}),[],!1,null,"6df601b1",null));t.default=f.exports}}]);