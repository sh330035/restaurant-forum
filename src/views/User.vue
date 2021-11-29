<template>
  <Spinner v-if="isLoading" />
  <div class="album py-5 bg-light" v-else>
    <div class="container">
      <!-- UserProfileCard -->
      <UserProfileCard
        :user-id="userId"
        :name="name"
        :email="email"
        :user-image="userImage"
        :comments-count="commentsCount"
        :favorited-restaurants-count="favoritedRestaurantsCount"
        :followers-count="followersCount"
        :followings-count="followingsCount"
        :current-user="currentUser"
        :is-followed="isFollowed"
        @after-add-followed="afterAddFollowed"
        @after-delete-followed="afterDeleteFollowed"
      />

      <div class="row">
        <div class="col-md-4">
          <!-- UserFollowingsCard -->
          <UserFollowingCard
            :followings="followings"
            :followings-count="followingsCount"
          />
          <br />
          <!-- UserFollowersCard -->
          <UserFollowersCard
            :followers="followers"
            :followers-count="followersCount"
          />
        </div>
        <div class="col-md-8">
          <!-- UserCommentsCard -->
          <UserCommentsCard
            :comments="comments"
            :comments-count="commentsCount"
          />
          <br />
          <!-- UserFavoritedRestaurantsCard -->
          <UserFavoritedRestaurantsCard
            :favorited-restaurants="favoritedRestaurants"
            :favorited-restaurants-count="favoritedRestaurantsCount"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "../components/UserProfileCard.vue";
import UserFollowingCard from "../components/UserFollowingsCard.vue";
import UserFollowersCard from "../components/UserFollowersCard";
import UserCommentsCard from "../components/UserCommentsCard";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard";
import Spinner from "../components/Spinner.vue";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "User",
  components: {
    UserProfileCard,
    UserFollowingCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
    Spinner,
  },
  data() {
    return {
      userId: -1,
      name: "",
      email: "",
      userImage: "",
      isFollowed: false,
      comments: [],
      commentsCount: -1,
      favoritedRestaurants: [],
      favoritedRestaurantsCount: -1,
      followers: [],
      followersCount: -1,
      followings: [],
      followingsCount: -1,
      // 增加 is loading 狀態，以免資料未抓入就顯示畫面，影響 UX
      isLoading: true,
    };
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUserData(id);
    console.log(to, from);
    next();
  },
  methods: {
    async fetchUserData(userId) {
      try {
        this.isLoading = true;
        // 後端設定問題：傳入 userId 不存在時，不會跳錯誤訊息....
        // 沒辦法用 Data 抓錯誤 message
        const { data } = await usersAPI.get({ userId });

        this.userId = data.profile.id;
        this.name = data.profile.name;
        this.email = data.profile.email;
        this.userImage = data.profile.image;
        this.isFollowed = data.isFollowed;
        this.comments = data.profile.Comments;
        this.commentsCount = data.profile.Comments.length;
        this.favoritedRestaurants = data.profile.FavoritedRestaurants;
        this.favoritedRestaurantsCount =
          data.profile.FavoritedRestaurants.length;
        this.followers = data.profile.Followers;
        this.followersCount = data.profile.Followers.length;
        this.followings = data.profile.Followings;
        this.followingsCount = data.profile.Followings.length;

        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
    async afterAddFollowed(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.followersCount = this.followersCount + 1;
        this.isFollowed = true;
        this.fetchUserData(userId);
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤，請稍後再試",
        });
      }
    },
    async afterDeleteFollowed(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.followersCount = this.followersCount - 1;
        this.isFollowed = false;
        this.fetchUserData(userId);
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，請稍後再試",
        });
      }
    },
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUserData(userId);
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>