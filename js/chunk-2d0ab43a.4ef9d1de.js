(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab43a"],{1511:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isLoading?r("Spinner"):r("div",{staticClass:"album py-5 bg-light"},[r("div",{staticClass:"container"},[r("UserProfileCard",{attrs:{"user-id":e.userId,name:e.name,email:e.email,"user-image":e.userImage,"comments-count":e.commentsCount,"favorited-restaurants-count":e.favoritedRestaurantsCount,"followers-count":e.followersCount,"followings-count":e.followingsCount,"current-user":e.currentUser,"is-followed":e.isFollowed},on:{"after-add-followed":e.afterAddFollowed,"after-delete-followed":e.afterDeleteFollowed}}),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"},[r("UserFollowingCard",{attrs:{followings:e.followings,"followings-count":e.followingsCount}}),r("br"),r("UserFollowersCard",{attrs:{followers:e.followers,"followers-count":e.followersCount}})],1),r("div",{staticClass:"col-md-8"},[r("UserCommentsCard",{attrs:{comments:e.comments,"comments-count":e.commentsCount}}),r("br"),r("UserFavoritedRestaurantsCard",{attrs:{"favorited-restaurants":e.favoritedRestaurants,"favorited-restaurants-count":e.favoritedRestaurantsCount}})],1)])],1)])},a=[],o=r("5530"),n=r("1da1"),l=(r("96cf"),r("b0c0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card mb-3"},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-md-4"},[r("img",{attrs:{src:e.userImage,width:"300px",height:"300px"}})]),r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[e._v(e._s(e.name))]),r("p",{staticClass:"card-text"},[e._v(e._s(e.email))]),r("ul",{staticClass:"list-unstyled list-inline"},[r("li",[r("strong",[e._v(e._s(e.commentsCount))]),e._v(" 已評論餐廳 ")]),r("li",[r("strong",[e._v(e._s(e.favoritedRestaurantsCount))]),e._v(" 收藏的餐廳 ")]),r("li",[r("strong",[e._v(e._s(e.followingsCount))]),e._v(" followings (已追蹤) ")]),r("li",[r("strong",[e._v(e._s(e.followersCount))]),e._v(" followers (追隨者) ")])]),r("p",[e.currentUser.id==e.userId?r("router-link",{attrs:{to:{name:"user-edit",params:{id:e.currentUser.id}}}},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v(" edit ")])]):e.currentUser.id!=e.userId&&e.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"submit"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteFollowed(e.userId)}}},[e._v(" 取消追蹤 ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFollowed(e.userId)}}},[e._v(" 追蹤 ")])],1)])])])])}),i=[],u=(r("a9e3"),{props:{userId:{type:Number,required:!0},name:{type:String,required:!0},email:{type:String,required:!0},userImage:{type:String,required:!0},commentsCount:{type:Number,required:!0},favoritedRestaurantsCount:{type:Number,required:!0},followersCount:{type:Number,required:!0},followingsCount:{type:Number,required:!0},currentUser:{type:Object},isFollowed:{type:Boolean}},methods:{addFollowed:function(e){this.$emit("after-add-followed",e)},deleteFollowed:function(e){this.$emit("after-delete-followed",e)}}}),c=u,d=r("2877"),f=Object(d["a"])(c,l,i,!1,null,null,null),m=f.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[e._v(e._s(e.followingsCount))]),e._v(" followings (已追蹤) ")]),r("div",{staticClass:"card-body"},e._l(e.followings,(function(e){return r("router-link",{key:e.id,staticClass:"mr-2",attrs:{to:{name:"user",params:{id:e.id}}}},[r("img",{staticClass:"avatar",attrs:{src:e.image,width:"60",height:"60"}})])})),1)])},p=[],v={props:{followings:{type:Array,required:!0},followingsCount:{type:Number,required:!0}}},C=v,g=Object(d["a"])(C,w,p,!1,null,null,null),h=g.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[e._v(e._s(e.followersCount))]),e._v(" followers (追隨者) ")]),r("div",{staticClass:"card-body"},e._l(e.followers,(function(e){return r("router-link",{key:e.id,staticClass:"mr-2",attrs:{to:{name:"user",params:{id:e.id}}}},[r("img",{staticClass:"avatar",attrs:{src:e.image,width:"60",height:"60"}})])})),1)])},_=[],y={props:{followers:{type:Array,required:!0},followersCount:{type:Number,required:!0}}},F=y,R=Object(d["a"])(F,b,_,!1,null,null,null),U=R.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[e._v(e._s(e.commentsCount))]),e._v(" 已評論餐廳 ")]),r("div",{staticClass:"card-body"},e._l(e.comments,(function(e){return r("router-link",{key:e.id,staticClass:"mr-2",attrs:{to:{name:"restaurant",params:{id:e.RestaurantId}}}},[r("img",{staticClass:"avatar",attrs:{src:e.Restaurant.image,width:"60",height:"60"}})])})),1)])},x=[],I={props:{comments:{type:Array,required:!0},commentsCount:{type:Number,required:!0}}},q=I,j=Object(d["a"])(q,k,x,!1,null,null,null),O=j.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[e._v(e._s(e.favoritedRestaurantsCount))]),e._v(" 收藏的餐廳 ")]),r("div",{staticClass:"card-body"},e._l(e.favoritedRestaurants,(function(e){return r("router-link",{key:e.id,staticClass:"mr-2",attrs:{to:{name:"restaurant",params:{id:e.id}}}},[r("img",{staticClass:"avatar",attrs:{src:e.image,width:"60",height:"60"}})])})),1)])},N=[],$={props:{favoritedRestaurants:{type:Array,required:!0},favoritedRestaurantsCount:{type:Number,required:!0}}},E=$,A=Object(d["a"])(E,D,N,!1,null,null,null),L=A.exports,S=r("2375"),P=r("4cce"),J=r("2fa3"),B=r("2f62"),z={name:"User",components:{UserProfileCard:m,UserFollowingCard:h,UserFollowersCard:U,UserCommentsCard:O,UserFavoritedRestaurantsCard:L,Spinner:S["a"]},data:function(){return{userId:-1,name:"",email:"",userImage:"",isFollowed:!1,comments:[],commentsCount:-1,favoritedRestaurants:[],favoritedRestaurantsCount:-1,followers:[],followersCount:-1,followings:[],followingsCount:-1,isLoading:!0}},beforeRouteUpdate:function(e,t,r){var s=e.params.id;this.fetchUserData(s),console.log(e,t),r()},methods:{fetchUserData:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isLoading=!0,r.next=4,P["a"].get({userId:e});case 4:s=r.sent,a=s.data,t.userId=a.profile.id,t.name=a.profile.name,t.email=a.profile.email,t.userImage=a.profile.image,t.isFollowed=a.isFollowed,t.comments=a.profile.Comments,t.commentsCount=a.profile.Comments.length,t.favoritedRestaurants=a.profile.FavoritedRestaurants,t.favoritedRestaurantsCount=a.profile.FavoritedRestaurants.length,t.followers=a.profile.Followers,t.followersCount=a.profile.Followers.length,t.followings=a.profile.Followings,t.followingsCount=a.profile.Followings.length,t.isLoading=!1,r.next=27;break;case 22:r.prev=22,r.t0=r["catch"](0),t.isLoading=!1,console.log(r.t0),J["a"].fire({icon:"error",title:"無法取得使用者資料，請稍後再試"});case 27:case"end":return r.stop()}}),r,null,[[0,22]])})))()},afterAddFollowed:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,P["a"].addFollowing({userId:e});case 3:if(s=r.sent,a=s.data,"success"===a.status){r.next=7;break}throw new Error(a.message);case 7:t.followersCount=t.followersCount+1,t.isFollowed=!0,t.fetchUserData(e),r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](0),console.log("error",r.t0),J["a"].fire({icon:"error",title:"無法加入追蹤，請稍後再試"});case 16:case"end":return r.stop()}}),r,null,[[0,12]])})))()},afterDeleteFollowed:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,P["a"].deleteFollowing({userId:e});case 3:if(s=r.sent,a=s.data,"success"===a.status){r.next=7;break}throw new Error(a.message);case 7:t.followersCount=t.followersCount-1,t.isFollowed=!1,t.fetchUserData(e),r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](0),console.log("error",r.t0),J["a"].fire({icon:"error",title:"無法取消追蹤，請稍後再試"});case 16:case"end":return r.stop()}}),r,null,[[0,12]])})))()}},created:function(){var e=this.$route.params.id;this.fetchUserData(e)},computed:Object(o["a"])({},Object(B["b"])(["currentUser"]))},G=z,H=Object(d["a"])(G,s,a,!1,null,null,null);t["default"]=H.exports}}]);
//# sourceMappingURL=chunk-2d0ab43a.4ef9d1de.js.map