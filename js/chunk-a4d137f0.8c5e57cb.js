(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a4d137f0"],{"418d":function(t,e,a){"use strict";a("bdfb")},"571a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("NavTabs"),t.isLoading?a("Spinner"):[a("h1",{staticClass:"mt-5"},[t._v("人氣餐廳")]),a("hr"),t._l(t.restaurantsTop,(function(e){return a("div",{key:e.id,staticClass:"card mb-3",staticStyle:{"max-width":"540px",margin:"auto"}},[a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-md-4"},[a("router-link",{attrs:{to:{name:"restaurant",params:{id:e.id}}}},[a("img",{staticClass:"card-img",attrs:{src:e.image}})])],1),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),a("span",{staticClass:"badge badge-secondary bg-black"},[t._v("收藏數："+t._s(e.FavoriteCount))]),a("p",{staticClass:"card-text"},[t._v(" "+t._s(e.description)+" ")]),a("router-link",{staticClass:"btn btn-primary mr-2",attrs:{to:{name:"restaurant",params:{id:e.id}}}},[t._v("Show")]),e.isFavorited?a("button",{staticClass:"btn btn-danger mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.removeFavorited(e.id)}}},[t._v(" 移除最愛 ")]):a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.addFavorite(e.id)}}},[t._v(" 加到最愛 ")])],1)])])])}))]],2)},n=[],s=a("5530"),i=a("1da1"),o=(a("d81d"),a("96cf"),a("8bb1")),c=a("2375"),u=a("c4c3"),d=a("4cce"),p=a("2fa3"),l={name:"restaurantsTop",components:{NavTabs:o["a"],Spinner:c["a"]},data:function(){return{restaurantsTop:[],isLoading:!0}},methods:{fetchRestaurantsTop:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,u["a"].getTopRestaurants();case 4:a=e.sent,r=a.data,t.restaurantsTop=r.restaurants,t.isLoading=!1,e.next=15;break;case 10:e.prev=10,e.t0=e["catch"](0),t.isLoading=!1,console.log("error",e.t0),p["a"].fire({icon:"error",title:"無法取得資料，請稍後再試"});case 15:case"end":return e.stop()}}),e,null,[[0,10]])})))()},addFavorite:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,d["a"].addFavorite({restaurantID:t});case 3:if(r=a.sent,n=r.data,"success"===n.status){a.next=7;break}throw new Error(n.message);case 7:e.restaurantsTop=e.restaurantsTop.map((function(e){return e.id!==t?e:Object(s["a"])(Object(s["a"])({},e),{},{isFavorited:!0,FavoriteCount:e.FavoriteCount+1})})),a.next=14;break;case 10:a.prev=10,a.t0=a["catch"](0),console.log("error",a.t0),p["a"].fire({icon:"error",title:"無法加入最愛，請稍後再試"});case 14:case"end":return a.stop()}}),a,null,[[0,10]])})))()},removeFavorited:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,d["a"].deleteFavorite({restaurantID:t});case 3:if(r=a.sent,n=r.data,"success"===n.status){a.next=7;break}throw new Error(n.message);case 7:e.restaurantsTop=e.restaurantsTop.map((function(e){return e.id!==t?e:Object(s["a"])(Object(s["a"])({},e),{},{isFavorited:!1,FavoriteCount:e.FavoriteCount-1})})),a.next=14;break;case 10:a.prev=10,a.t0=a["catch"](0),console.log("error",a.t0),p["a"].fire({icon:"error",title:"無法移除最愛，請稍後再試"});case 14:case"end":return a.stop()}}),a,null,[[0,10]])})))()}},created:function(){this.fetchRestaurantsTop()}},v=l,b=(a("418d"),a("2877")),m=Object(b["a"])(v,r,n,!1,null,"430b7bdd",null);e["default"]=m.exports},bdfb:function(t,e,a){},d81d:function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").map,s=a("1dde"),i=s("map");r({target:"Array",proto:!0,forced:!i},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-a4d137f0.8c5e57cb.js.map