webpackJsonp([1],{J4N2:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("/5sW"),r=e("/ocq"),s=e("mtWM"),a=e.n(s),o=e("//Fk"),c=e.n(o);function u(t){var n=document.createElement("img"),e=new c.a(function(e,i){n.onload=function(){return e(t)},n.onerror=function(){return i(t)}});return n.src=t,e}var d={name:"Slide",props:{url:String,number:String}},l={render:function(){var t=this.$createElement,n=this._self._c||t;return n("figure",[n("img",{staticClass:"img-responsive",attrs:{src:this.url,alt:""}}),this._v(" "),n("figcaption",{staticClass:"text-center text-gray mt-2"},[this._v(this._s(this.number))])])},staticRenderFns:[]};var h=e("VU/8")(d,l,!1,function(t){e("q+by")},"data-v-a305e018",null).exports,p={name:"SlideShow",props:{images:Array},data:function(){return{active:0,isLoading:!1,loaded:!1}},computed:{activeUrl:function(){return this.images[this.active].download_url},number:function(){return this.active+1+"/"+this.images.length},start:function(){return 0===this.active},end:function(){return this.active===this.images.length-1}},watch:{images:function(t,n){var e=this;0===n.length&&0!==t.length&&u(this.activeUrl).then(function(t){return e.loaded=!0})},$route:function(){this.changeSlide(Number(this.$route.params.index),!0)}},methods:{changeSlide:function(t){var n=this,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?t-1:this.active+t;void 0!==this.images[e]&&(this.isLoading=!0,u(this.images[e].download_url).then(function(t){n.active=e,n.isLoading=!1,n.$router.push("/slide/"+(e+1)).catch(function(){})}))}},components:{Slide:h}},g={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"slider-wrapper",class:{loading:t.isLoading||!t.loaded}},[t.loaded?[e("button",{staticClass:"btn btn-primary btn-active btn-lg slides-prev",attrs:{disabled:t.start||t.isLoading},on:{click:function(n){return t.changeSlide(-1)}}},[e("i",{staticClass:"icon icon-arrow-left"})]),t._v(" "),e("div",{staticClass:"slides"},[e("Slide",{class:{dimmed:t.isLoading},attrs:{url:t.activeUrl,number:t.number}})],1),t._v(" "),e("button",{staticClass:"btn btn-primary btn-active btn-lg slides-next",attrs:{disabled:t.end||t.isLoading},on:{click:function(n){return t.changeSlide(1)}}},[e("i",{staticClass:"icon icon-arrow-right"})])]:t._e()],2)},staticRenderFns:[]};var m=e("VU/8")(p,g,!1,function(t){e("J4N2")},"data-v-75c9f9a6",null).exports,v={name:"App",props:{endpoint:String},data:function(){return{images:[]}},components:{Slideshow:m},created:function(){var t=this;a.a.get(this.endpoint).then(function(n){return t.images=n.data})}},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[this._v("Pokaz zdjęć")]),this._v(" "),n("router-view",{attrs:{images:this.images}})],1)},staticRenderFns:[]},b=e("VU/8")(v,f,!1,null,null,null).exports,_=[{path:"/",redirect:"/slide/1"},{path:"/slide/:index",component:m}],w=new r.a({routes:_});i.a.use(r.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:w,render:function(t){return t(b,{props:{endpoint:"https://picsum.photos/v2/list"}})}})},"q+by":function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.72cecef52300b303d8eb.js.map