webpackJsonp([1],{NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("7+uW");let s={extend:(e,t,i=!1)=>{for(let a in t)(void 0===e[a]||null===e[a]||i)&&void 0!==t[a]&&(e[a]=t[a]);return e},checkUrl:(e,t)=>{return new RegExp(t||"^((.*?:)?\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[\\d\\D]*)?(\\#[-a-z\\d_]*)?$","ig").test(e)},getOffset:function(e={}){return{width:e.clientWidth||0,height:e.clientHeight||0}},getPageX:(e={})=>e.pageX,getPageY:(e={})=>e.pageY,getDistanceX:(e={},t={})=>s.getPageX(e)-(t.getBoundingClientRect().left+window.pageXOffset),getDistanceY:(e={},t={})=>s.getPageY(e)-(t.getBoundingClientRect().top+window.pageYOffset),getMultiple:(e=4)=>Math.pow(10,e),decimalPoint:(e=0)=>Math.round(e*s.getMultiple())/s.getMultiple()||0};var n=s,o={dealEdgeValue:(e,t,i)=>(t.hasOwnProperty("left")&&t.left<0&&(t.left=0,t.width=e.width+e.left),t.hasOwnProperty("top")&&t.top<0&&(t.top=0,t.height=e.height+e.top),!t.hasOwnProperty("left")&&t.hasOwnProperty("width")&&e.left+t.width>i.width&&(t.width=i.width-e.left),!t.hasOwnProperty("top")&&t.hasOwnProperty("height")&&e.top+t.height>i.height&&(t.height=i.height-e.top),Object.assign(e,t)),dealTL(e,t,i,a=48){let s={},n=e.width-t,o=e.height-i;return n>=Math.min(a,e.width)&&Object.assign(s,{width:n,left:e.left+t}),o>=Math.min(a,e.height)&&Object.assign(s,{height:o,top:e.top+i}),s},dealTC(e,t,i,a=48){let s={},n=e.height-i;return n>=Math.min(a,e.height)&&(s={height:n,top:e.top+i}),s},dealTR(e,t,i,a=48){let s={},n=e.width+t,o=e.height-i;return n>=Math.min(a,e.width)&&Object.assign(s,{width:n}),o>=Math.min(a,e.height)&&Object.assign(s,{height:o,top:e.top+i}),s},dealCL(e,t,i,a=48){let s={},n=e.width-t;return n>=Math.min(a,e.width)&&Object.assign(s,{width:n,left:e.left+t}),s},dealCR(e,t,i,a=48){let s={},n=e.width+t;return n>=Math.min(a,e.width)&&Object.assign(s,{width:n}),s},dealBL(e,t,i,a=48){let s={},n=e.width-t,o=e.height+i;return n>=Math.min(a,e.width)&&Object.assign(s,{width:n,left:e.left+t}),o>=Math.min(a,e.height)&&Object.assign(s,{height:o}),s},dealBC(e,t,i,a=48){let s={},n=e.height+i;return n>=Math.min(a,e.height)&&Object.assign(s,{height:n}),s},dealBR(e,t,i,a=48){let s={},n=e.width+t,o=e.height+i;return n>=Math.min(a,e.width)&&Object.assign(s,{width:n}),o>=Math.min(a,e.height)&&Object.assign(s,{height:o}),s}};var l={name:"zone",props:["isEdit","config","index","setting"],data:()=>({showModal:!1}),components:{},computed:{styleObject(){return{top:this.getZoneStyle(this.setting.topPer),left:this.getZoneStyle(this.setting.leftPer),width:this.getZoneStyle(this.setting.widthPer),height:this.getZoneStyle(this.setting.heightPer)}}},methods:{getZoneStyle:e=>`${100*(e||0)}%`,changeInfo(e={}){console.log(22222);let t=this.index;this.$emit("changeInfo",e,t)},delItem(){this.$emit("removeItem",this.index)},setInfo(){this.$emit("setItem",this.setting,this.index)}},directives:{dragItem:{bind:function(e,t,i){let a=i.context;function s(t){console.log("dragItem mousedown"),t&&t.stopPropagation();let i,s,o=n.getOffset(e.parentNode),l=n.getPageX(t),d=n.getPageY(t);function r(t){t&&t.stopPropagation();let r=a.setting,h=n.getPageX(t)-l,g=n.getPageY(t)-d;i=n.decimalPoint(Number(g/o.height)+Number(r.topPer)),s=n.decimalPoint(Number(h/o.width)+Number(r.leftPer)),i<0&&(i=0,g=-o.height*r.topPer),s<0&&(s=0,h=-o.width*r.leftPer),i+r.heightPer>1&&(i=1-r.heightPer,g=o.height*(i-r.topPer)),s+r.widthPer>1&&(s=1-r.widthPer,h=o.width*(s-r.leftPer)),e.style.transform=`translate(${h}px, ${g}px)`}window.addEventListener("mousemove",r,!1),window.addEventListener("mouseup",function t(n){console.log("dragItem handleMouseUp"),n&&n.stopPropagation(),i&&s&&a.changeInfo({topPer:i,leftPer:s}),e.style.transform="translate(0, 0)",window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",t)},!1)}return e.addEventListener("mousedown",s,!1),()=>{e.removeEventListener("mousedown",s)}}},changeSize:{bind:function(e,t,i){let a=i.context;function s(t){console.log("changeSize mousedown");let i=t.target.dataset.pointer;if(!i)return;t&&t.stopPropagation();let s,l=e.parentNode,d=a.setting,r=n.getOffset(l.parentNode),h={width:n.getOffset(l).width||0,height:n.getOffset(l).height||0,top:d.topPer*r.height||0,left:d.leftPer*r.width||0},g=n.getPageX(t),c=n.getPageY(t);function m(e){e&&e.stopPropagation(),s=!0;let t=n.getPageX(e)-g,a=n.getPageY(e)-c;g=n.getPageX(e),c=n.getPageY(e);let d=o[i](h,t,a);h=o.dealEdgeValue(h,d,r),Object.assign(l.style,{top:`${h.top}px`,left:`${h.left}px`,width:`${h.width}px`,height:`${h.height}px`})}window.addEventListener("mousemove",m,!1),window.addEventListener("mouseup",function e(t){console.log("changeSize handleMouseUp"),t&&t.stopPropagation(),s&&(s=!1,a.changeInfo({topPer:n.decimalPoint(h.top/r.height),leftPer:n.decimalPoint(h.left/r.width),widthPer:n.decimalPoint(h.width/r.width),heightPer:n.decimalPoint(h.height/r.height)}),Object.assign(l.style,{top:`${h.top}px`,left:`${h.left}px`,width:`${h.width}px`,height:`${h.height}px`})),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",e)},!1)}return e.addEventListener("mousedown",s,!1),()=>{e.removeEventListener("mousedown",s)}}}}},d={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"dragItem",rawName:"v-dragItem"}],staticClass:"item-wrap",style:e.styleObject},[i("div",{directives:[{name:"changeSize",rawName:"v-changeSize"}],staticClass:"item-box",on:{dblclick:function(t){return t.stopPropagation(),t.preventDefault(),e.setInfo(t)}}},[i("div",{staticClass:"item-index"},[e._v(e._s(e.index+1))]),e._v(" "),e.setting.link?i("p",{staticClass:"item-tip"},[e._v("已配置")]):e._e(),e._v(" "),i("div",{staticClass:"item-delete",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.delItem(t)}}},[e._v("X")]),e._v(" "),i("div",{staticClass:"hz-u-square hz-u-square-tl",attrs:{"data-pointer":"dealTL"}}),e._v(" "),i("div",{staticClass:"hz-u-square hz-u-square-tc",attrs:{"data-pointer":"dealTC"}}),e._v(" "),i("div",{staticClass:"hz-u-square hz-u-square-tr",attrs:{"data-pointer":"dealTR"}}),e._v(" "),i("div",{staticClass:"hz-u-square hz-u-square-cl",attrs:{"data-pointer":"dealCL"}}),e._v(" "),i("div",{staticClass:"hz-u-square hz-u-square-cr",attrs:{"data-pointer":"dealCR"}}),e._v(" "),i("div",{staticClass:"hz-u-square hz-u-square-bl",attrs:{"data-pointer":"dealBL"}}),e._v(" "),i("div",{staticClass:"hz-u-square hz-u-square-bc",attrs:{"data-pointer":"dealBC"}}),e._v(" "),i("div",{staticClass:"hz-u-square hz-u-square-br",attrs:{"data-pointer":"dealBR"}})])])},staticRenderFns:[]};var r=i("VU/8")(l,d,!1,function(e){i("hRZ3")},"data-v-35509e80",null).exports;var h={name:"modal",props:["modalSetting","modalIndex"],computed:{},data:()=>({}),methods:{closeModal(){this.$emit("closeModal")},saveChange(){let e=this.$refs.newLink.value,t=Number(this.$refs.newWidthPer.value),i=Number(this.$refs.newHeightPer.value),a=Number(this.$refs.newTopPer.value),s=Number(this.$refs.newLeftPer.value);a<0&&(a=0),a+this.modalSetting.heightPer>=1&&(a=1-this.modalSetting.heightPer),s<0&&(s=0),s+this.modalSetting.leftPer>=1&&(s=1-this.modalSetting.leftPer);let n={link:e,topPer:a,leftPer:s,widthPer:t,heightPer:i};this.$emit("saveInfo",n,this.modalIndex),this.$emit("closeModal")}},directives:{}},g={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"modal-wrap"},[i("div",{staticClass:"mask"}),e._v(" "),i("div",{staticClass:"content"},[i("header",{staticClass:"title"},[e._v("热点编辑")]),e._v(" "),i("div",{staticClass:"modal-info"},[i("p",[e._v("自定义配置")]),e._v(" "),i("div",{staticClass:"link-wrap"},[i("span",[e._v("跳转链接")]),e._v(" "),i("input",{ref:"newLink",attrs:{type:"text"},domProps:{value:e.modalSetting.link}})])]),e._v(" "),i("div",{staticClass:"modal-info"},[i("p",[e._v("基本信息")]),e._v(" "),i("div",{staticClass:"link-wrap"},[i("span",[e._v("宽度")]),e._v(" "),i("input",{ref:"newWidthPer",attrs:{type:"text"},domProps:{value:e.modalSetting.widthPer}})]),e._v(" "),i("div",{staticClass:"link-wrap"},[i("span",[e._v("高度")]),e._v(" "),i("input",{ref:"newHeightPer",attrs:{type:"text"},domProps:{value:e.modalSetting.heightPer}})]),e._v(" "),i("div",{staticClass:"link-wrap"},[i("span",[e._v("top")]),e._v(" "),i("input",{ref:"newTopPer",attrs:{type:"text"},domProps:{value:e.modalSetting.topPer}})]),e._v(" "),i("div",{staticClass:"link-wrap"},[i("span",[e._v("left")]),e._v(" "),i("input",{ref:"newLeftPer",attrs:{type:"text"},domProps:{value:e.modalSetting.leftPer}})])]),e._v(" "),i("div",{staticClass:"btn-wrap"},[i("span",{staticClass:"no",on:{click:e.closeModal}},[e._v("取消")]),e._v(" "),i("span",{staticClass:"yes",on:{click:e.saveChange}},[e._v("保存")])])])])},staticRenderFns:[]};var c={name:"imageMap",components:{zone:r,modal:i("VU/8")(h,g,!1,function(e){i("vYfH")},"data-v-74188b29",null).exports},props:["image","zones","isEdit","config"],data:()=>({showModal:!1,modalSetting:{},modalIndex:0}),methods:{addItem(e={}){this.zones.push(e),this.$emit("add",e),this.hasChange()},setItem(e,t){this.modalSetting=e,this.modalIndex=t,this.showModal=!0,console.log("setting",e)},closeModal(){this.showModal=!1},changeItem(e={},t=this.zones.length-1){console.log("改变前zones",this.zones),this.$nextTick(()=>{Object.assign(this.zones[t],e)}),this.hasChange()},hasChange(){this.$emit("change",this.zones)},removeItem(e){this.zones.splice(e,1),this.$emit("remove",e),this.hasChange()},closeImgMap(){this.$emit("close",this.zones)},changeInfo(e,t){console.log("changeInfo"),this.changeItem(e,t)}},directives:{addItem:{bind:function(e,t,i){let a=i.context;function s(t){t&&t.preventDefault();let i={top:n.getDistanceY(t,e),left:n.getDistanceX(t,e),width:0,height:0},s=n.getOffset(e),l={topPer:n.decimalPoint(i.top/s.height),leftPer:n.decimalPoint(i.left/s.width),widthPer:0,heightPer:0},d=n.getPageX(t),r=n.getPageY(t);function h(t){t&&t.preventDefault();let a=n.getPageX(t)-d,l=n.getPageY(t)-r;d=n.getPageX(t),r=n.getPageY(t);let h=o.dealBR(i,a,l,0);i=o.dealEdgeValue(i,h,s),Object.assign(e.lastElementChild.style,{top:`${i.top}px`,left:`${i.left}px`,width:`${i.width}px`,height:`${i.height}px`})}a.addItem(l),e.addEventListener("mousemove",h),e.addEventListener("mouseup",function t(o){let l={topPer:n.decimalPoint(i.top/s.height),leftPer:n.decimalPoint(i.left/s.width),widthPer:n.decimalPoint(i.width/s.width),heightPer:n.decimalPoint(i.height/s.height)};a.changeItem(l),e.removeEventListener("mousemove",h),e.removeEventListener("mouseup",t)})}return e.addEventListener("mousedown",s),()=>{e.removeEventListener("mousedown",s)}}}}},m={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.image?i("div",{staticClass:"dialog-wrap"},[i("div",{staticClass:"image-mask"}),e._v(" "),i("div",{staticClass:"image-wrap"},[i("div",{staticClass:"title"},[e._v("绘制热点")]),e._v(" "),i("div",{staticClass:"image-content"},[i("img",{staticClass:"image",attrs:{src:e.image}}),e._v(" "),i("div",{directives:[{name:"addItem",rawName:"v-addItem"}],ref:"areaWrap",staticClass:"area-wrap"},e._l(e.zones,function(t,a){return i("zone",{key:a,ref:"index",refInFor:!0,staticClass:"area-item",attrs:{isEdit:e.isEdit,config:e.config,index:a,setting:e.zones[a]},on:{removeItem:e.removeItem,changeInfo:e.changeInfo,setItem:e.setItem}})}))]),e._v(" "),i("div",{staticClass:"image-close"},[i("span",{on:{click:e.closeImgMap}},[e._v("关闭")])]),e._v(" "),e.showModal?i("modal",{attrs:{modalSetting:e.modalSetting,modalIndex:e.modalIndex},on:{closeModal:e.closeModal,saveInfo:e.changeInfo}}):e._e()],1)]):e._e()},staticRenderFns:[]};var p=i("VU/8")(c,m,!1,function(e){i("gk0N")},"data-v-659dd6c9",null).exports,u=i("mtWM");var v=i.n(u).a.create({responseType:"json"}),f={name:"App",components:{imageMap:p},data:()=>({imgList:[],image:"",zones:[{topPer:.3076,leftPer:.1777,widthPer:.1521,heightPer:.3559,link:"http://m.beibei.com"}]}),methods:{fileClick(){document.getElementById("upload_file").click()},fileChange(e){e.target.files[0].size&&(this.fileList(e.target),e.target.value="")},fileList(e){console.log("fileList.files",e.files);let t=e.files;for(let e=0;e<t.length;e++)console.log(t[e].type),""!=t[e].type?this.fileAdd(t[e]):alert("不支持上传文件夹格式")},fileAdd(e){let t=new FileReader,i=new Image,a=this;t.readAsDataURL(e),t.onload=function(){e.src=this.result,i.onload=function(){let t=i.width,s=i.height;e.width=t,e.height=s,a.imgList.push({file:e}),console.log(a.imgList)},i.src=e.src}},fileDel(e){this.imgList.splice(e,1)},doImgMap(e){this.image=e},uploadFilds:e=>v.post("http://www.xiaohuangren.top:3003/uploads",e),add(e){console.log("成功添加热区：",e)},change(e){console.log("热区发生变化：",e)},remove(e){console.log("成功删除热区：",e)},close(e){this.image=""}}},w={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"upload_warp_left",on:{click:e.fileClick}},[e._v("\n    点击上传\n  ")]),e._v(" "),i("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"upload_file",multiple:""},on:{change:function(t){e.fileChange(t)}}}),e._v(" "),0!=e.imgList.length?i("div",{staticClass:"upload_warp_img"},e._l(e.imgList,function(t,a){return i("div",{key:a,staticClass:"upload_warp_img_div"},[i("img",{staticClass:"img-del",attrs:{src:"http://h0.hucdn.com/open/201843/78fd74d6f6b33cb1_40x40.png"},on:{click:function(t){e.fileDel(a)}}}),e._v(" "),i("img",{staticClass:"small-img",attrs:{src:t.file.src}}),e._v(" "),i("div",{staticClass:"img-map-text",on:{click:function(i){e.doImgMap(t.file.src)}}},[e._v("点击绘制热点")])])})):e._e(),e._v(" "),this.image?i("image-map",{staticClass:"img-map-contain",attrs:{image:e.image,zones:e.zones},on:{add:e.add,change:e.change,remove:e.remove,close:e.close}}):e._e()],1)},staticRenderFns:[]};var P=i("VU/8")(f,w,!1,function(e){i("fQye")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:P},template:"<App/>"})},fQye:function(e,t){},gk0N:function(e,t){},hRZ3:function(e,t){},vYfH:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f1116a349108f02fa8a3.js.map