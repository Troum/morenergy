(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84a02ae6"],{"00cc":function(t,e,o){"use strict";var s=o("3a9e"),a=o.n(s);a.a},2596:function(t,e,o){t.exports=o.p+"img/onis.dd1b3f2a.png"},"2f35":function(t,e,o){},"38ee":function(t,e,o){"use strict";var s=o("2f35"),a=o.n(s);a.a},"3a9e":function(t,e,o){},"571e":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-col",{staticClass:"page-paddings me_top-block-with-image-component m-0",attrs:{cols:"12"}},t._l(t.data,function(e,s){return o("b-row",{key:s,class:{"p-0 pt-5 pb-5 bg-white mw-100 mx-auto":!0,"me_top-block-with-image-component-product-row":"produkt.onis"===t.$route.name},on:{click:function(o){return t.toProduct(e.slug)}}},[o("b-col",{staticClass:"mx-auto",attrs:{cols:"11","align-h":"center"}},[o("p",{staticClass:"me_top-block-with-image-component-title"},[t._v(t._s("DE"===t.$ml.current?e.name:e.en_name))]),o("hr",{staticClass:"me_top-block-with-image-component-title-underline mb-3"})]),o("b-col",{staticClass:"m-0 d-flex align-items-center me_top-block-with-image-component-line-right",attrs:{cols:"12",xl:"6"}},[o("b-row",{staticClass:"m-0 p-0 w-100"},[o("b-col",{staticClass:"mx-auto text-center",attrs:{cols:"12"}},[o("img",{staticClass:"img-fluid me_top-block-with-image-image",attrs:{src:e.image,alt:""}})])],1)],1),o("b-col",{staticClass:"m-0 me_top-block-with-image-component-line-left",attrs:{cols:"12",xl:"6"}},[o("b-row",[o("b-col",{staticClass:"mx-auto pl-xl-5",attrs:{cols:"11","align-h":"center"}},[o("p",{staticClass:"me_top-block-with-image-component-description"},[o("tui-editor-viewer",{attrs:{value:"DE"===t.$ml.current?e.description:e.en_description}})],1)]),o("b-col",{staticClass:"mx-auto pl-xl-5",attrs:{cols:"11","align-h":"center"}},[o("p",{staticClass:"me_top-block-with-image-component-info"},[t._v(t._s("DE"===t.$ml.current?e.info:e.en_info))])])],1)],1)],1)}),1)},a=[],i=o("bdf2"),n={components:{TuiEditorViewer:i["a"]},props:{data:null},methods:{toProduct:function(t){this.$router.push({name:"produkt.onis",params:{slug:t}})}}},l=n,c=(o("00cc"),o("2877")),r=Object(c["a"])(l,s,a,!1,null,null,null);e["a"]=r.exports},"7a58":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-row",{staticClass:"w-100 mx-auto p-0"},[o("b-col",{staticClass:"me_greeting-component-container",attrs:{cols:"12",id:"image-greeting"}},[o("b-row",{staticClass:"m-0 p-0 d-flex position-relative"},[o("b-col",{staticClass:"p-0 m-0 ",attrs:{cols:"12"}},[o("img",{staticClass:"me_greeting-image img-fluid w-sm-100 w-md-100 w-xl-50 w-lg-100",attrs:{src:t.greeting.image,alt:t.greeting.caption}})]),"aktuelle"!==t.$route.name?o("b-col",{staticClass:"me_greeting-component-caption-container",attrs:{"offset-xl":"6",cols:"12",xl:"6"}},[o("b-row",[o("b-col",{staticClass:"mx-auto",attrs:{cols:"11",xl:"10"}},[o("p",{staticClass:"me_greeting-component-caption-title pt-2"},[t._v(t._s(t.greeting.title))])]),o("b-col",{staticClass:"mx-auto",attrs:{cols:"11",xl:"10"}},[o("p",{staticClass:"me_greeting-component-caption-description",domProps:{innerHTML:t._s(t.greeting.caption)}})])],1)],1):t._e()],1)],1)],1)},a=[],i={props:{greeting:null}},n=i,l=(o("38ee"),o("2877")),c=Object(l["a"])(n,s,a,!1,null,null,null);e["a"]=c.exports},"8f03":function(t,e,o){t.exports=o.p+"img/MoMeshad.b59b21dd.png"},ac6a:function(t,e,o){for(var s=o("cadf"),a=o("0d58"),i=o("2aba"),n=o("7726"),l=o("32e9"),c=o("84f2"),r=o("2b4c"),m=r("iterator"),p=r("toStringTag"),u=c.Array,g={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},b=a(g),d=0;d<b.length;d++){var f,h=b[d],C=g[h],_=n[h],w=_&&_.prototype;if(w&&(w[m]||l(w,m,u),w[p]||l(w,p,h),c[h]=u,C))for(f in s)w[f]||i(w,f,s[f],!0)}},b41e:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-row",{staticClass:"m-0 pr-0 pl-0 pb-5 mb-3"},[s("image-greeting-component",{attrs:{greeting:t.$ml.get("products")}}),s("b-col",{staticClass:"page-paddings me_top-block-with-image-component m-0 big-screen-top-pad",attrs:{cols:"12"}},[s("b-row",{staticClass:"pt-5"},[s("b-col",{staticClass:"mx-auto ",attrs:{cols:"11","align-h":"center"}},[s("p",{staticClass:"me_top-block-produkt-title"},[t._v("ONIS-690V")]),s("hr",{staticClass:"me_top-block-with-image-component-title-underline mb-3"})]),s("b-col",{staticClass:"m-0 d-flex align-items-center me_top-block-with-image-component-line-right",attrs:{cols:"12",xl:"6"}},[s("b-row",{staticClass:"mx-auto p-0"},[s("b-col",{staticClass:"mx-auto text-center",attrs:{cols:"12",xl:"10"}},[s("a",{attrs:{href:"/produkte/onis"}},[s("img",{staticClass:"me_top-block-with-image-image",attrs:{src:o("2596"),alt:""}})])])],1)],1),s("b-col",{staticClass:"m-0 me_top-block-with-image-component-line-left",attrs:{cols:"12",xl:"6"}},[s("b-row",[s("b-col",{staticClass:"mx-auto pl-xl-5",attrs:{cols:"11","align-h":"center"}},[s("p",{staticClass:"me_top-block-description-product"},[t._v(t._s(t.$ml.get("products.caption")))]),s("b-button",{staticClass:"me_detailed-component-button",attrs:{pill:""},on:{click:function(e){return t.$router.push({name:"produkt.onis"})}}},[t._v("Details")])],1),s("b-col",{staticClass:"mx-auto pl-xl-5",attrs:{cols:"11","align-h":"center"}},[s("p",{staticClass:"me_top-block-with-image-component-info"})])],1)],1)],1)],1),s("b-col",{staticClass:"page-paddings me_top-block-with-image-component m-0 pt-5",attrs:{cols:"12"}},[s("b-row",{},[s("b-col",{staticClass:"mx-auto",attrs:{cols:"11","align-h":"center"}},[s("p",{staticClass:"me_top-block-produkt-title"},[t._v("MoMe - Für das Netz 4.0")]),s("hr",{staticClass:"me_top-block-with-image-component-title-underline mb-3"})]),s("b-col",{staticClass:"m-0 d-flex align-items-center me_top-block-with-image-component-line-right",attrs:{cols:"12",xl:"6"}},[s("b-row",{staticClass:"p-0 mx-auto"},[s("b-col",{staticClass:"mx-auto text-center",attrs:{cols:"12",xl:"10"}},[s("a",{attrs:{href:"/produkte/mome"}},[s("img",{staticClass:"me_top-block-with-image-image",attrs:{src:o("8f03"),alt:""}})])])],1)],1),s("b-col",{staticClass:"m-0 me_top-block-with-image-component-line-left pt-5",attrs:{cols:"12",xl:"6"}},[s("b-row",[s("b-col",{staticClass:"mx-auto pl-xl-5",attrs:{cols:"11","align-h":"center"}},[s("p",{staticClass:"me_top-block-description-product"},[t._v("\n                            "+t._s(t.$ml.get("productmome.caption"))+"\n                           ")]),s("b-button",{staticClass:"me_detailed-component-button",attrs:{pill:""},on:{click:function(e){return t.$router.push({name:"produkt.mome"})}}},[t._v("Details")])],1)],1)],1)],1)],1)],1)},a=[],i=o("7a58"),n=o("571e"),l={components:{ImageGreetingComponent:i["a"],TopBlockWithImageComponent:n["a"]},data:function(){return{produktes:[]}},beforeMount:function(){var t=this;this.$axios.get("/products").then(function(e){t.produktes=e.data.products}).catch(function(t){console.log(t.response.data.message)})}},c=l,r=(o("b727"),o("2877")),m=Object(r["a"])(c,s,a,!1,null,null,null);e["default"]=m.exports},b727:function(t,e,o){"use strict";var s=o("d3b3"),a=o.n(s);a.a},bdf2:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"tuiEditorViewer"})},a=[],i=(o("ac6a"),o("547e")),n=o.n(i),l=["load","change","stateChange","focus","blur"],c={name:"TuiEditorViewer",props:{height:{type:String},value:{type:String},exts:{type:Array}},data:function(){return{editor:null}},watch:{value:function(t,e){t!==e&&this.editor.setValue(t)}},mounted:function(){var t=this,e={};l.forEach(function(o){e[o]=function(){for(var e=arguments.length,s=new Array(e),a=0;a<e;a++)s[a]=arguments[a];t.$emit.apply(t,[o].concat(s))}}),this.editor=n.a.factory({el:this.$refs.tuiEditorViewer,exts:this.exts,events:e,initialValue:this.value,height:this.height,viewer:!0})},destroyed:function(){var t=this;l.forEach(function(e){t.editor.off(e)}),this.editor.remove()},methods:{invoke:function(t){var e=null;if(this.editor[t]){for(var o,s=arguments.length,a=new Array(s>1?s-1:0),i=1;i<s;i++)a[i-1]=arguments[i];e=(o=this.editor)[t].apply(o,a)}return e}}},r=c,m=o("2877"),p=Object(m["a"])(r,s,a,!1,null,null,null);e["a"]=p.exports},d3b3:function(t,e,o){}}]);
//# sourceMappingURL=chunk-84a02ae6.80b191fa.js.map