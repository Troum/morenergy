(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7aef4acc"],{"00cc":function(t,e,s){"use strict";var i=s("3a9e"),o=s.n(i);o.a},3835:function(t,e,s){"use strict";var i=s("4d4d"),o=s.n(i);o.a},"3a9e":function(t,e,s){},"4d4d":function(t,e,s){},"571e":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-col",{staticClass:"page-paddings me_top-block-with-image-component m-0",attrs:{cols:"12"}},t._l(t.data,function(e,i){return s("b-row",{key:i,class:{"p-0 pt-5 pb-5 bg-white mw-100 mx-auto":!0,"me_top-block-with-image-component-product-row":"produkt.onis"===t.$route.name},on:{click:function(s){return t.toProduct(e.slug)}}},[s("b-col",{staticClass:"mx-auto",attrs:{cols:"11","align-h":"center"}},[s("p",{staticClass:"me_top-block-with-image-component-title"},[t._v(t._s("DE"===t.$ml.current?e.name:e.en_name))]),s("hr",{staticClass:"me_top-block-with-image-component-title-underline mb-3"})]),s("b-col",{staticClass:"m-0 d-flex align-items-center me_top-block-with-image-component-line-right",attrs:{cols:"12",xl:"6"}},[s("b-row",{staticClass:"m-0 p-0 w-100"},[s("b-col",{staticClass:"mx-auto text-center",attrs:{cols:"12"}},[s("img",{staticClass:"img-fluid me_top-block-with-image-image",attrs:{src:e.image,alt:""}})])],1)],1),s("b-col",{staticClass:"m-0 me_top-block-with-image-component-line-left",attrs:{cols:"12",xl:"6"}},[s("b-row",[s("b-col",{staticClass:"mx-auto pl-xl-5",attrs:{cols:"11","align-h":"center"}},[s("p",{staticClass:"me_top-block-with-image-component-description"},[s("tui-editor-viewer",{attrs:{value:"DE"===t.$ml.current?e.description:e.en_description}})],1)]),s("b-col",{staticClass:"mx-auto pl-xl-5",attrs:{cols:"11","align-h":"center"}},[s("p",{staticClass:"me_top-block-with-image-component-info"},[t._v(t._s("DE"===t.$ml.current?e.info:e.en_info))])])],1)],1)],1)}),1)},o=[],n=s("bdf2"),a={components:{TuiEditorViewer:n["a"]},props:{data:null},methods:{toProduct:function(t){this.$router.push({name:"produkt.onis",params:{slug:t}})}}},l=a,c=(s("00cc"),s("2877")),r=Object(c["a"])(l,i,o,!1,null,null,null);e["a"]=r.exports},"7af7":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-row",{staticClass:"m-0 p-0 mb-3"},[i("b-col",{staticClass:"m-0 pt-5 pb-5 page-paddings-left",attrs:{cols:"12",xl:"6"}},[i("b-row",[i("b-col",{staticClass:"mt-4 mt-xl-auto pl-xl-5 mx-auto",attrs:{cols:"11","align-h":"center"}},[i("img",{staticClass:"img-fluid me_beratung-img",attrs:{src:s("f40c")}})]),i("b-col",{staticClass:"mt-4 mt-xl-auto pl-xl-5 mx-auto",attrs:{cols:"11","align-h":"center"}},[i("p",{staticClass:"me_video-component-title text-center text-xl-left pt-3"},[t._v(t._s(t.$ml.get("beratung6.titlepage")))]),i("hr",{staticClass:"me_video-component-title-underline mb-5"})]),i("b-col",{staticClass:"pl-xl-5 mx-auto",attrs:{cols:"11","align-h":"center"}},[i("p",{staticClass:"me_video-component-description-main text-justify text-xl-left"},[t._v(t._s(t.$ml.get("beratung6.title1")))])]),i("b-col",{staticClass:"pl-xl-5 mx-auto",attrs:{cols:"11","align-h":"center"}},[i("div",{staticClass:"me_video-component-description text-justify text-xl-left",domProps:{innerHTML:t._s(t.$ml.get("beratung6.text"))}})])],1)],1),i("b-col",{staticClass:"m-0 pt-5 pb-5 page-paddings-right",attrs:{cols:"12",xl:"6"}},[i("b-row",[i("b-col",{staticClass:"mt-4 mt-xl-auto pl-xl-5 mx-auto",attrs:{cols:"11","align-h":"center"}},[i("p",{staticClass:"me_video-component-description-main text-center text-xl-left"},[t._v(t._s(t.$ml.get("beratung6.title2")))])]),i("b-col",{staticClass:"pl-xl-5 mx-auto",attrs:{cols:"11","align-h":"center"}},[i("p",{staticClass:"me_video-component-description text-justify"},[t._v(t._s(t.$ml.get("beratung6.text2")))])])],1)],1)],1)},o=[],n=s("571e"),a=s("9303"),l={components:{TopBlockWithImageComponent:n["a"],VideoComponent:a["a"]},data:function(){return{produktes:[]}}},c=l,r=(s("9591"),s("2877")),m=Object(r["a"])(c,i,o,!1,null,null,null);e["default"]=m.exports},9303:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-col",{ref:"meVideo",staticClass:"p-0 me_video-component",attrs:{cols:"12"}},[s("b-row",{staticClass:"p-0 m-0"},[s("b-col",{staticClass:"m-0 me_video-component-line-right",attrs:{cols:"12",xl:t.title&&t.description?6:12}},[s("b-row",[s("b-col",{staticClass:"mx-auto d-flex justify-content-center align-items-center",attrs:{cols:"10"}},[t.isVideo?s("div",{staticClass:"w-100 d-flex justify-content-center align-items-center video-ccontainer"},[s("video",{ref:"video",staticClass:"img-fluid d-block",attrs:{id:"video",poster:t.videoPoster,preload:"metadata",src:t.videoUrl}}),s("button",{staticClass:"me_video-component-button",class:t.onplay?"me_video-component-pause":"me_video-component-play",attrs:{type:"button"},on:{click:t.play}}),s("button",{staticClass:"me_video-component-fullscreen-button me_video-component-fullscreen-on",attrs:{type:"button"},on:{click:t.expand}})]):s("img",{staticClass:"me-imageincomp",attrs:{src:t.videoPoster,alt:t.videoPoster}})]),t.name?s("b-col",{staticClass:"mx-auto",attrs:{cols:"10"}},[s("p",{staticClass:"me-video-name mb-0 my-2"},[t._v(t._s(t.name))])]):t._e()],1)],1),t.name?t._e():s("b-col",{staticClass:"m-0 me_video-component-line-left",attrs:{cols:"12",xl:"6"}},[s("b-row",[s("b-col",{staticClass:"mt-4 mt-xl-auto pl-xl-5 mx-auto",attrs:{cols:"11","align-h":"center"}},[s("p",{staticClass:"me_video-component-title text-center text-xl-left"},[t._v(t._s(t.title))]),s("hr",{staticClass:"me_video-component-title-underline mb-5"})]),s("b-col",{staticClass:"pl-xl-5 mx-auto",attrs:{cols:"11","align-h":"center"}},[s("div",{staticClass:"me_video-component-description text-justify text-xl-left",domProps:{innerHTML:t._s(t.description)}})]),s("b-col",{staticClass:"pl-xl-5 mx-auto",attrs:{cols:"11","align-h":"center"}},[s("p",{staticClass:"me_video-component-info"},[t._v(t._s(t.info))])])],1)],1)],1)],1)},o=[],n={props:{title:String,description:String,info:String,videoUrl:String,videoPoster:String,isVideo:Boolean,name:String},data:function(){return{onplay:!1}},mounted:function(){var t=this;document.addEventListener("webkitfullscreenchange",function(){document.webkitCurrentFullScreenElement?t.$refs.meVideo.classList.add("removeHeight"):t.$refs.meVideo.classList.remove("removeHeight")})},methods:{play:function(){this.onplay?this.$refs.video.pause():this.$refs.video.play(),this.onplay=!this.onplay},expand:function(){this.$refs.video.webkitRequestFullscreen()}}},a=n,l=(s("3835"),s("2877")),c=Object(l["a"])(a,i,o,!1,null,null,null);e["a"]=c.exports},9591:function(t,e,s){"use strict";var i=s("95b7"),o=s.n(i);o.a},"95b7":function(t,e,s){},ac6a:function(t,e,s){for(var i=s("cadf"),o=s("0d58"),n=s("2aba"),a=s("7726"),l=s("32e9"),c=s("84f2"),r=s("2b4c"),m=r("iterator"),u=r("toStringTag"),p=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=o(d),f=0;f<g.length;f++){var h,x=g[f],C=d[x],b=a[x],v=b&&b.prototype;if(v&&(v[m]||l(v,m,p),v[u]||l(v,u,x),c[x]=p,C))for(h in i)v[h]||n(v,h,i[h],!0)}},bdf2:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"tuiEditorViewer"})},o=[],n=(s("ac6a"),s("547e")),a=s.n(n),l=["load","change","stateChange","focus","blur"],c={name:"TuiEditorViewer",props:{height:{type:String},value:{type:String},exts:{type:Array}},data:function(){return{editor:null}},watch:{value:function(t,e){t!==e&&this.editor.setValue(t)}},mounted:function(){var t=this,e={};l.forEach(function(s){e[s]=function(){for(var e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];t.$emit.apply(t,[s].concat(i))}}),this.editor=a.a.factory({el:this.$refs.tuiEditorViewer,exts:this.exts,events:e,initialValue:this.value,height:this.height,viewer:!0})},destroyed:function(){var t=this;l.forEach(function(e){t.editor.off(e)}),this.editor.remove()},methods:{invoke:function(t){var e=null;if(this.editor[t]){for(var s,i=arguments.length,o=new Array(i>1?i-1:0),n=1;n<i;n++)o[n-1]=arguments[n];e=(s=this.editor)[t].apply(s,o)}return e}}},r=c,m=s("2877"),u=Object(m["a"])(r,i,o,!1,null,null,null);e["a"]=u.exports},f40c:function(t,e){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=chunk-7aef4acc.ed6b7368.js.map