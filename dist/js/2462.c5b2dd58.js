"use strict";(self["webpackChunklowcode_demo"]=self["webpackChunklowcode_demo"]||[]).push([[2462],{12462:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var o=function(){var t=this,e=t._self._c;return"edit"==t.editMode?e("div",{staticClass:"v-text",on:{keydown:t.handleKeydown,keyup:t.handleKeyup}},[e("el-link",{ref:"text",class:{canEdit:t.canEdit},style:{verticalAlign:t.element.style.verticalAlign},attrs:{type:"primary",contenteditable:t.canEdit,tabindex:t.element.id},domProps:{innerHTML:t._s(t.element.propValue.text)},on:{dblclick:t.setEdit,paste:t.clearStyle,mousedown:t.handleMousedown,blur:t.handleBlur,input:t.handleInput,click:t.openLink}})],1):e("div",{staticClass:"v-text preview"},[e("el-link",{style:{verticalAlign:t.element.style.verticalAlign},attrs:{type:"primary"},domProps:{innerHTML:t._s(t.element.propValue.text)},on:{click:t.openLink}})],1)},i=[],l=n(20629),c=n(39657),a=n(7608),s={extends:a.Z,props:{propValue:{type:Object,require:!0,default:()=>{}},element:{type:Object,default:()=>{}}},data(){return{canEdit:!1,ctrlKey:17,isCtrlDown:!1}},computed:{...(0,l.rn)(["editMode"])},methods:{openLink(){window.open(this.element.propValue.link)},handleInput(t){this.$emit("input",this.element,t.target.innerHTML)},handleKeydown(t){this.canEdit&&t.stopPropagation(),t.keyCode==this.ctrlKey?this.isCtrlDown=!0:(this.isCtrlDown&&this.canEdit&&c.k.includes(t.keyCode)||46==t.keyCode)&&t.stopPropagation()},handleKeyup(t){this.canEdit&&t.stopPropagation(),t.keyCode==this.ctrlKey&&(this.isCtrlDown=!1)},handleMousedown(t){this.canEdit&&t.stopPropagation()},clearStyle(t){t.preventDefault();const e=t.clipboardData,n=e.getData("text/plain")||"";""!==n&&document.execCommand("insertText",!1,n),this.$emit("input",this.element,t.target.innerHTML)},handleBlur(t){this.element.propValue.text=t.target.innerHTML||"&nbsp;";const e=t.target.innerHTML;""!==e?this.element.propValue.text=t.target.innerHTML:(this.element.propValue.text="",this.$nextTick((()=>{this.element.propValue.text="&nbsp;"}))),this.canEdit=!1},setEdit(){this.element.isLock||(this.canEdit=!0,this.selectText(this.$refs.text))},selectText(t){const e=window.getSelection(),n=document.createRange();n.selectNodeContents(t),e.removeAllRanges(),e.addRange(n)}}},r=s,d=n(1001),u=(0,d.Z)(r,o,i,!1,null,"57d2fc54",null),p=u.exports},7608:function(t,e,n){n.d(e,{Z:function(){return d}});var o,i,l=n(54003),c={props:{linkage:{type:Object,default:()=>{}},element:{type:Object,default:()=>{}}},created(){this.linkage?.data?.length&&(l.Z.$on("v-click",this.onClick),l.Z.$on("v-hover",this.onHover),l.Z.$on("v-dblclick",this.onDblclick))},mounted(){const{data:t,duration:e}=this.linkage||{};t?.length&&(this.$el.style.transition=`all ${e}s`)},beforeDestroy(){this.linkage?.data?.length&&(l.Z.$off("v-click",this.onClick),l.Z.$off("v-hover",this.onHover),l.Z.$on("v-dblclick",this.onDblclick))},methods:{changeStyle(t=[]){t.forEach((t=>{t.style.forEach((t=>{t.key&&(this.element.style[t.key]=t.value)}))}))},onClick(t){const e=this.linkage.data.filter((e=>e.id===t&&"v-click"===e.event));this.changeStyle(e)},onDblclick(t){const e=this.linkage.data.filter((e=>e.id===t&&"v-dblclick"===e.event));console.log("v-dblclick"),this.changeStyle(e)},onHover(t){const e=this.linkage.data.filter((e=>e.id===t&&"v-hover"===e.event));this.changeStyle(e)}}},a=c,s=n(1001),r=(0,s.Z)(a,o,i,!1,null,null,null),d=r.exports},54003:function(t,e,n){var o=n(20144);e["Z"]=new o["default"]},39657:function(t,e,n){n.d(e,{Y:function(){return $},k:function(){return w}});var o=n(1434),i=n(20144);new i["default"];const l=17,c=91,a=86,s=67,r=88,d=89,u=90,p=71,m=66,h=76,k=85,f=83,y=80,v=68,g=46,Z=69,w=[66,67,68,69,71,76,80,83,85,86,88,89,90],C={[a]:L,[d]:M,[u]:T,[f]:K,[y]:P,[Z]:A},b={...C,[k]:I},x={...C,[s]:D,[r]:S,[p]:H,[m]:V,[v]:_,[g]:_,[h]:j};let E=!1;function $(){window.onkeydown=t=>{if(!o.Z.state.isInEdiotr)return;const{curComponent:e}=o.Z.state,{keyCode:n}=t;n===l||n===c?E=!0:n==g&&e?(o.Z.commit("deleteComponent"),o.Z.commit("recordSnapshot")):E&&(!x[n]||e&&e.isLock?b[n]&&e&&e.isLock&&(t.preventDefault(),b[n]()):(t.preventDefault(),x[n]()))},window.onkeyup=t=>{t.keyCode!==l&&t.keyCode!==c||(E=!1)},window.onmousedown=()=>{o.Z.commit("setInEditorStatus",!1)}}function D(){o.Z.commit("copy")}function L(){o.Z.commit("paste"),o.Z.commit("recordSnapshot")}function S(){o.Z.commit("cut")}function M(){o.Z.commit("redo")}function T(){o.Z.commit("undo")}function H(){o.Z.state.areaData.components.length&&(o.Z.commit("compose"),o.Z.commit("recordSnapshot"))}function V(){const t=o.Z.state.curComponent;t&&!t.isLock&&"Group"==t.component&&(o.Z.commit("decompose"),o.Z.commit("recordSnapshot"))}function K(){i["default"].$emit("save")}function P(){i["default"].$emit("preview")}function _(){o.Z.state.curComponent&&(o.Z.commit("deleteComponent"),o.Z.commit("recordSnapshot"))}function A(){i["default"].$emit("clearCanvas")}function j(){o.Z.commit("lock")}function I(){o.Z.commit("unlock")}}}]);
//# sourceMappingURL=2462.c5b2dd58.js.map