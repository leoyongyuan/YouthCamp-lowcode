"use strict";(self["webpackChunklowcode_demo"]=self["webpackChunklowcode_demo"]||[]).push([[9103],{59103:function(e,t,i){i.r(t),i.d(t,{default:function(){return c}});var s=function(){var e=this,t=e._self._c;return t("div",[t("canvas",{ref:"canvas"}),t("div",{staticClass:"ctrl-box"},[t("div",{staticClass:"btn-box"},[t("el-button",{attrs:{icon:e.videoState},on:{click:e.ProgressStop}}),t("div",{staticClass:"progress-time"},[e._v(e._s(e.timeStr))])],1),t("div",{ref:"progressBox",staticClass:"progress-box",on:{click:e.ProgressBox}},[t("div",{ref:"progress",staticClass:"progress"})])]),t("video",{ref:"video",attrs:{width:"0",src:e.videolink,type:"video/mp4"}})])},r=[],o=i(7608),n={extends:o.Z,props:{propValue:{type:Object,require:!0,default:()=>{}},element:{type:Object,default:()=>{}}},data(){return{videolink:this.propValue.url,progressTimer:null,timeStr:"00:00/00:00",videoState:"el-icon-video-pause"}},watch:{"propValue.url":function(){this.changevideo()},"element.style.width":function(){this.render()},"element.style.height":function(){this.render()}},mounted(){this.canvas=this.$refs.canvas,this.ctx=this.canvas.getContext("2d"),this.progressBox=this.$refs.progressBox,this.progress=this.$refs.progress,this.video=this.$refs.video,this.render()},methods:{render(){function e(){const{width:t,height:i}=this.element.style;this.canvas.width=t,this.canvas.height=i,this.ctx.clearRect(0,0,t,i),this.ctx.drawImage(this.video,0,0,t,i),setTimeout(e.bind(this),0)}setTimeout(e.bind(this),0)},changevideo(){this.videolink=this.propValue.url},changeProgress(){this.timeStr=this.parseTime(this.video.currentTime)+"/"+this.parseTime(this.video.duration);let e=this.video.currentTime/this.video.duration;this.progress.style.width=100*e+"%"},parseTime(e){if(!e)return"";let t=Math.floor(e),i=Math.floor(t/60).toString().padStart(2,"0"),s=(t%60).toString().padStart(2,"0");return`${i}:${s}`},ProgressBox(e){clearInterval(this.progressTimer);let t=e.pageX-this.progressBox.getBoundingClientRect().x,i=t/this.progressBox.getBoundingClientRect().width;this.video.currentTime=i*this.video.duration,this.video.play(),this.progressTimer=setInterval(this.changeProgress,60)},ProgressStop(){this.video.paused?(this.video.play(),this.videoState="el-icon-video-pause",this.progressTimer=setInterval(this.changeProgress,60)):(this.video.pause(),this.videoState="el-icon-video-play",clearInterval(this.progressTimer))}}},l=n,a=i(1001),h=(0,a.Z)(l,s,r,!1,null,"6206aeae",null),c=h.exports},7608:function(e,t,i){i.d(t,{Z:function(){return c}});var s,r,o=i(54003),n={props:{linkage:{type:Object,default:()=>{}},element:{type:Object,default:()=>{}}},created(){this.linkage?.data?.length&&(o.Z.$on("v-click",this.onClick),o.Z.$on("v-hover",this.onHover),o.Z.$on("v-dblclick",this.onDblclick))},mounted(){const{data:e,duration:t}=this.linkage||{};e?.length&&(this.$el.style.transition=`all ${t}s`)},beforeDestroy(){this.linkage?.data?.length&&(o.Z.$off("v-click",this.onClick),o.Z.$off("v-hover",this.onHover),o.Z.$on("v-dblclick",this.onDblclick))},methods:{changeStyle(e=[]){e.forEach((e=>{e.style.forEach((e=>{e.key&&(this.element.style[e.key]=e.value)}))}))},onClick(e){const t=this.linkage.data.filter((t=>t.id===e&&"v-click"===t.event));this.changeStyle(t)},onDblclick(e){const t=this.linkage.data.filter((t=>t.id===e&&"v-dblclick"===t.event));console.log("v-dblclick"),this.changeStyle(t)},onHover(e){const t=this.linkage.data.filter((t=>t.id===e&&"v-hover"===t.event));this.changeStyle(t)}}},l=n,a=i(1001),h=(0,a.Z)(l,s,r,!1,null,null,null),c=h.exports},54003:function(e,t,i){var s=i(20144);t["Z"]=new s["default"]}}]);
//# sourceMappingURL=9103.0635ca80.js.map