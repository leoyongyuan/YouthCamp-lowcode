"use strict";(self["webpackChunklowcode_demo"]=self["webpackChunklowcode_demo"]||[]).push([[1198],{91198:function(e,t,l){l.r(t),l.d(t,{default:function(){return s}});var n=function(){var e=this,t=e._self._c;return t("CommonAttr")},o=[],r=l(19542),a={components:{CommonAttr:r.Z},computed:{curComponent(){return this.$store.state.curComponent}}},u=a,i=l(1001),c=(0,i.Z)(u,n,o,!1,null,null,null),s=c.exports},19542:function(e,t,l){l.d(t,{Z:function(){return s}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"v-common-attr"},[t("el-form",e._l(e.styleKeys,(function({key:l,label:n},o){return t("el-form-item",{key:o,attrs:{label:n}},[e.isIncludesColor(l)?t("el-color-picker",{attrs:{"show-alpha":""},model:{value:e.curComponent.style[l],callback:function(t){e.$set(e.curComponent.style,l,t)},expression:"curComponent.style[key]"}}):e.selectKey.includes(l)?t("el-select",{model:{value:e.curComponent.style[l],callback:function(t){e.$set(e.curComponent.style,l,t)},expression:"curComponent.style[key]"}},e._l(e.optionMap[l],(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):t("el-input",{attrs:{type:"number"},model:{value:e.curComponent.style[l],callback:function(t){e.$set(e.curComponent.style,l,e._n(t))},expression:"curComponent.style[key]"}})],1)})),1)],1)},o=[],r=l(80973),a={data(){return{optionMap:r.JY,styleData:r.g2,textAlignOptions:r.xr,borderStyleOptions:r.pt,verticalAlignOptions:r.D0,selectKey:r.OA,activeName:""}},computed:{styleKeys(){if(this.curComponent){const e=Object.keys(this.curComponent.style);return this.styleData.filter((t=>e.includes(t.key)))}return[]},curComponent(){return this.$store.state.curComponent}},methods:{isIncludesColor(e){return e.toLowerCase().includes("color")}}},u=a,i=l(1001),c=(0,i.Z)(u,n,o,!1,null,null,null),s=c.exports},80973:function(e,t,l){l.d(t,{D0:function(){return u},JY:function(){return c},OA:function(){return i},Ve:function(){return o},g2:function(){return n},pt:function(){return a},xr:function(){return r}});const n=[{key:"left",label:"x 坐标"},{key:"top",label:"y 坐标"},{key:"rotate",label:"旋转角度"},{key:"width",label:"宽"},{key:"height",label:"高"},{key:"color",label:"颜色"},{key:"backgroundColor",label:"背景色"},{key:"borderWidth",label:"边框宽度"},{key:"borderStyle",label:"边框风格"},{key:"borderColor",label:"边框颜色"},{key:"borderRadius",label:"边框半径"},{key:"fontSize",label:"字体大小"},{key:"fontWeight",label:"字体粗细"},{key:"lineHeight",label:"行高"},{key:"letterSpacing",label:"字间距"},{key:"textAlign",label:"左右对齐"},{key:"verticalAlign",label:"上下对齐"},{key:"opacity",label:"不透明度"}],o={left:"x 坐标",top:"y 坐标",rotate:"旋转角度",width:"宽",height:"高",color:"颜色",backgroundColor:"背景色",borderWidth:"边框宽度",borderStyle:"边框风格",borderColor:"边框颜色",borderRadius:"边框半径",fontSize:"字体大小",fontWeight:"字体粗细",lineHeight:"行高",letterSpacing:"字间距",textAlign:"左右对齐",verticalAlign:"上下对齐",opacity:"不透明度"},r=[{label:"左对齐",value:"left"},{label:"居中",value:"center"},{label:"右对齐",value:"right"}],a=[{label:"实线",value:"solid"},{label:"虚线",value:"dashed"}],u=[{label:"上对齐",value:"top"},{label:"居中对齐",value:"middle"},{label:"下对齐",value:"bottom"}],i=["textAlign","borderStyle","verticalAlign"],c={textAlign:r,borderStyle:a,verticalAlign:u}}}]);
//# sourceMappingURL=1198.f6566e50.js.map