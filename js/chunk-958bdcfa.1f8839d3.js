(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-958bdcfa"],{6135:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container py-5"},[n("AdminNav"),n("table",{staticClass:"table"},[t.isLoading?n("Spinner"):[n("thead",{staticClass:"thead-dark"},[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),n("th",{attrs:{scope:"col"}},[t._v("Email")]),n("th",{attrs:{scope:"col"}},[t._v("Role")]),n("th",{attrs:{scope:"col",width:"140"}},[t._v("Action")])])]),n("tbody",t._l(t.users,(function(e){return n("tr",{key:e.id},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.email))]),n("td",[t._v(t._s(t._f("adminOrUser")(e.isAdmin)))]),n("td",[e.isAdmin?t._e():n("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(n){return n.stopPropagation(),n.preventDefault(),t.toggleIsAdmin(e.id,e.isAdmin)}}},[t._v(" set as admin ")]),e.isAdmin&&"root"!==e.name?n("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(n){return n.stopPropagation(),n.preventDefault(),t.toggleIsAdmin(e.id,e.isAdmin)}}},[t._v(" set as user ")]):t._e()])])})),0)]],2)],1)},a=[],s=n("5530"),i=n("1da1"),c=(n("d3b7"),n("25f0"),n("d81d"),n("96cf"),n("e04c")),o=n("2375"),u=n("be6c"),d=n("2fa3"),l=n("2f62"),m={name:"AdminUsers",components:{AdminNav:c["a"],Spinner:o["a"]},data:function(){return{users:[],isLoading:!0}},methods:{fetchUsers:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,u["a"].users.get();case 4:n=e.sent,r=n.data,t.users=r.users,t.isLoading=!1,e.next=15;break;case 10:e.prev=10,e.t0=e["catch"](0),t.isLoading=!1,console.log(e.t0),d["a"].fire({icon:"error",title:"無法取得用戶資料，請稍後再試"});case 15:case"end":return e.stop()}}),e,null,[[0,10]])})))()},toggleIsAdmin:function(t,e){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].users.toggleRole({userId:t,isAdmin:(!e).toString()});case 3:if(a=r.sent,i=a.data,"success"===i.status){r.next=7;break}throw new Error(i.message);case 7:n.users=n.users.map((function(e){return e.id===t?Object(s["a"])(Object(s["a"])({},e),{},{isAdmin:!e.isAdmin}):e})),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log(r.t0),d["a"].fire({icon:"error",title:"無法變更用戶權限，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()}},filters:{adminOrUser:function(t){return t?"Admin":"User"}},created:function(){this.fetchUsers()},computed:Object(s["a"])({},Object(l["b"])(["currentUser"]))},f=m,p=n("2877"),v=Object(p["a"])(f,r,a,!1,null,null,null);e["default"]=v.exports},be6c:function(t,e,n){"use strict";n("b0c0");var r=n("2fa3");e["a"]={categories:{get:function(){return r["b"].get("/admin/categories")},create:function(t){var e=t.name;return r["b"].post("/admin/categories",{name:e})},delete:function(t){var e=t.categoryId;return r["b"].delete("/admin/categories/".concat(e))},update:function(t){var e=t.categoryId,n=t.name;return r["b"].put("/admin/categories/".concat(e),{name:n})}},restaurants:{get:function(){return r["b"].get("/admin/restaurants")},create:function(t){var e=t.formData;return r["b"].post("/admin/restaurants",e)},delete:function(t){var e=t.restaurantId;return r["b"].delete("/admin/restaurants/".concat(e))},getDetail:function(t){var e=t.restaurantId;return r["b"].get("/admin/restaurants/".concat(e))},update:function(t){var e=t.restaurantId,n=t.formData;return r["b"].put("/admin/restaurants/".concat(e),n)}},users:{get:function(){return r["b"].get("/admin/users")},toggleRole:function(t){var e=t.userId,n=t.isAdmin;return r["b"].put("/admin/users/".concat(e),{isAdmin:n})}}}},d81d:function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").map,s=n("1dde"),i=s("map");r({target:"Array",proto:!0,forced:!i},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},e04c:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-3"},[n("h1",[t._v("餐廳後台")]),n("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" | "),n("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" | "),n("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},a=[],s=n("2877"),i={},c=Object(s["a"])(i,r,a,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-958bdcfa.1f8839d3.js.map