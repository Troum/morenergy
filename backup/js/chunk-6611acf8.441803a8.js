(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6611acf8"],{"0046":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-row",{staticClass:"m-0 p-0 mb-3"},[s("b-col",{staticClass:"m-0 pt-5 pb-5 page-paddings-left",attrs:{cols:"12",xl:"6"}},[s("b-row",[s("b-col",{staticClass:"mt-4 mt-xl-auto pl-xl-5 mx-auto",attrs:{cols:"11","align-h":"center"}},[s("img",{staticClass:"img-fluid me_beratung-img",attrs:{src:i("0f41")}})]),s("b-col",{staticClass:"mt-4 mt-xl-auto pl-xl-5 mx-auto",attrs:{cols:"11","align-h":"center"}},[s("p",{staticClass:"me_video-component-title text-center text-xl-left pt-3"},[t._v(t._s(t.$ml.get("beratung2.titlepage")))]),s("hr",{staticClass:"me_video-component-title-underline mb-5"})]),s("b-col",{staticClass:"pl-xl-5 mx-auto",attrs:{cols:"11","align-h":"center"}},[s("p",{staticClass:"me_video-component-description-main text-justify text-xl-left"},[t._v(t._s(t.$ml.get("beratung2.title1")))])]),s("b-col",{staticClass:"pl-xl-5 mx-auto",attrs:{cols:"11","align-h":"center"}},[s("div",{staticClass:"me_video-component-description text-justify text-xl-left",domProps:{innerHTML:t._s(t.$ml.get("beratung3.text"))}})])],1)],1),s("b-col",{staticClass:"m-0 pt-5 pb-5 page-paddings-right",attrs:{cols:"12",xl:"6"}},[s("b-row",[s("b-col",{staticClass:"mt-4 mt-xl-auto pl-xl-5 mx-auto",attrs:{cols:"11","align-h":"center"}},[s("p",{staticClass:"me_video-component-description-main text-center text-xl-left"},[t._v(t._s(t.$ml.get("beratung2.title2")))])]),s("b-col",{staticClass:"pl-xl-5 mx-auto",attrs:{cols:"11","align-h":"center"}},[s("p",{staticClass:"me_video-component-description text-justify"},[t._v(t._s(t.$ml.get("beratung2.text2")))])])],1)],1)],1)},o=[],n=i("571e"),a=i("9303"),l={components:{TopBlockWithImageComponent:n["a"],VideoComponent:a["a"]},data:function(){return{produktes:[]}}},c=l,r=(i("d58a"),i("2877")),m=Object(r["a"])(c,s,o,!1,null,null,null);e["default"]=m.exports},"00cc":function(t,e,i){"use strict";var s=i("3a9e"),o=i.n(s);o.a},"0f41":function(t,e,i){t.exports=i.p+"img/beracnt.c5ce5712.png"},3835:function(t,e,i){"use strict";var s=i("4d4d"),o=i.n(s);o.a},"3a9e":function(t,e,i){},"4d4d":function(t,e,i){},"571e":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-col",{staticClass:"page-paddings me_top-block-with-image-component m-0",attrs:{cols:"12"}},t._l(t.data,function(e,s){return i("b-row",{key:s,class:{"p-0 pt-5 pb-5 bg-white mw-100 mx-auto":!0,"me_top-block-with-image-component-product-row":"produkt.onis"===t.$route.name},on:{click:function(i){return t.toProduct(e.slug)}}},[i("b-col",{staticClass:"mx-auto",attrs:{cols:"11","align-h":"center"}},[i("p",{staticClass:"me_top-block-with-image-component-title"},[t._v(t._s("DE"===t.$ml.current?e.name:e.en_name))]),i("hr",{staticClass:"me_top-block-with-image-component-title-underline mb-3"})]),i("b-col",{staticClass:"m-0 d-flex align-items-center me_top-block-with-image-component-line-right",attrs:{cols:"12",xl:"6"}},[i("b-row",{staticClass:"m-0 p-0 w-100"},[i("b-col",{staticClass:"mx-auto text-center",attrs:{cols:"12"}},[i("img",{staticClass:"img-fluid me_top-block-with-image-image",attrs:{src:e.image,alt:""}})])],1)],1),i("b-col",{staticClass:"m-0 me_top-block-with-image-component-line-left",attrs:{cols:"12",xl:"6"}},[i("b-row",[i("b-col",{staticClass:"mx-auto pl-xl-5",attrs:{cols:"11","align-h":"center"}},[i("p",{staticClass:"me_top-block-with-image-component-description"},[i("tui-editor-viewer",{attrs:{value:"DE"===t.$ml.current?e.description:e.en_description}})],1)]),i("b-col",{staticClass:"mx-auto pl-xl-5",attrs:{cols:"11","align-h":"center"}},[i("p",{staticClass:"me_top-block-with-image-component-info"},[t._v(t._s("DE"===t.$ml.current?e.info:e.en_info))])])],1)],1)],1)}),1)},o=[],n=i("bdf2"),a={components:{TuiEditorViewer:n["a"]},props:{data:null},methods:{toProduct:function(t){this.$router.push({name:"produkt.onis",params:{slug:t}})}}},l=a,c=(i("00cc"),i("2877")),r=Object(c["a"])(l,s,o,!1,null,null,null);e["a"]=r.exports},9303:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-col",{ref:"meVideo",staticClass:"p-0 me_video-component",attrs:{cols:"12"}},[i("b-row",{staticClass:"p-0 m-0"},[i("b-col",{staticClass:"m-0 me_video-component-line-right",attrs:{cols:"12",xl:t.title&&t.description?6:12}},[i("b-row",[i("b-col",{staticClass:"mx-auto d-flex justify-content-center align-items-center",attrs:{cols:"10"}},[t.isVideo?i("div",{staticClass:"w-100 d-flex justify-content-center align-items-center video-ccontainer"},[i("video",{ref:"video",staticClass:"img-fluid d-block",attrs:{id:"video",poster:t.videoPoster,preload:"metadata",src:t.videoUrl}}),i("button",{staticClass:"me_video-component-button",class:t.onplay?"me_video-component-pause":"me_video-component-play",attrs:{type:"button"},on:{click:t.play}}),i("button",{staticClass:"me_video-component-fullscreen-button me_video-component-fullscreen-on",attrs:{type:"button"},on:{click:t.expand}})]):i("img",{staticClass:"me-imageincomp",attrs:{src:t.videoPoster,alt:t.videoPoster}})]),t.name?i("b-col",{staticClass:"mx-auto",attrs:{cols:"10"}},[i("p",{staticClass:"me-video-name mb-0 my-2"},[t._v(t._s(t.name))])]):t._e()],1)],1),t.name?t._e():i("b-col",{staticClass:"m-0 me_video-component-line-left",attrs:{cols:"12",xl:"6"}},[i("b-row",[i("b-col",{staticClass:"mt-4 mt-xl-auto pl-xl-5 mx-auto",attrs:{cols:"11","align-h":"center"}},[i("p",{staticClass:"me_video-component-title text-center text-xl-left"},[t._v(t._s(t.title))]),i("hr",{staticClass:"me_video-component-title-underline mb-5"})]),i("b-col",{staticClass:"pl-xl-5 mx-auto",attrs:{cols:"11","align-h":"center"}},[i("div",{staticClass:"me_video-component-description text-justify text-xl-left",domProps:{innerHTML:t._s(t.description)}})]),i("b-col",{staticClass:"pl-xl-5 mx-auto",attrs:{cols:"11","align-h":"center"}},[i("p",{staticClass:"me_video-component-info"},[t._v(t._s(t.info))])])],1)],1)],1)],1)},o=[],n={props:{title:String,description:String,info:String,videoUrl:String,videoPoster:String,isVideo:Boolean,name:String},data:function(){return{onplay:!1}},mounted:function(){var t=this;document.addEventListener("webkitfullscreenchange",function(){document.webkitCurrentFullScreenElement?t.$refs.meVideo.classList.add("removeHeight"):t.$refs.meVideo.classList.remove("removeHeight")})},methods:{play:function(){this.onplay?this.$refs.video.pause():this.$refs.video.play(),this.onplay=!this.onplay},expand:function(){this.$refs.video.webkitRequestFullscreen()}}},a=n,l=(i("3835"),i("2877")),c=Object(l["a"])(a,s,o,!1,null,null,null);e["a"]=c.exports},ac6a:function(t,e,i){for(var s=i("cadf"),o=i("0d58"),n=i("2aba"),a=i("7726"),l=i("32e9"),c=i("84f2"),r=i("2b4c"),m=r("iterator"),u=r("toStringTag"),p=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=o(d),g=0;g<f.length;g++){var b,h=f[g],v=d[h],x=a[h],_=x&&x.prototype;if(_&&(_[m]||l(_,m,p),_[u]||l(_,u,h),c[h]=p,v))for(b in s)_[b]||n(_,b,s[b],!0)}},b50dc:function(t,e,i){},bdf2:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"tuiEditorViewer"})},o=[],n=(i("ac6a"),i("547e")),a=i.n(n),l=["load","change","stateChange","focus","blur"],c={name:"TuiEditorViewer",props:{height:{type:String},value:{type:String},exts:{type:Array}},data:function(){return{editor:null}},watch:{value:function(t,e){t!==e&&this.editor.setValue(t)}},mounted:function(){var t=this,e={};l.forEach(function(i){e[i]=function(){for(var e=arguments.length,s=new Array(e),o=0;o<e;o++)s[o]=arguments[o];t.$emit.apply(t,[i].concat(s))}}),this.editor=a.a.factory({el:this.$refs.tuiEditorViewer,exts:this.exts,events:e,initialValue:this.value,height:this.height,viewer:!0})},destroyed:function(){var t=this;l.forEach(function(e){t.editor.off(e)}),this.editor.remove()},methods:{invoke:function(t){var e=null;if(this.editor[t]){for(var i,s=arguments.length,o=new Array(s>1?s-1:0),n=1;n<s;n++)o[n-1]=arguments[n];e=(i=this.editor)[t].apply(i,o)}return e}}},r=c,m=i("2877"),u=Object(m["a"])(r,s,o,!1,null,null,null);e["a"]=u.exports},d58a:function(t,e,i){"use strict";var s=i("b50dc"),o=i.n(s);o.a}}]);
//# sourceMappingURL=chunk-6611acf8.441803a8.js.map