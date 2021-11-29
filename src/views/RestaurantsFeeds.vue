// ./src/views/RestaurantsFeeds.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">最新動態</h1>
      <hr />
      <div class="row">
        <div class="col-md-6">
          <h3>最新餐廳</h3>
          <!-- 最新餐廳 NewestRestaurants -->
          <NewestRestaurants :restaurants="restaurants" />
        </div>
        <div class="col-md-6">
          <h3>最新評論</h3>
          <!-- 最新評論 NewestComments-->
          <NewestComments :comments="comments" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import NewestRestaurants from "../components/NewestRestaurants.vue";
import NewestComments from "../components/NewestComments.vue";
import Spinner from "../components/Spinner.vue";
import feedsAPI from "../apis/restaurants";
import { Toast } from "../utils/helpers";

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
    Spinner,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
      isLoading: true,
    };
  },
  methods: {
    async fetchFeeds() {
      try {
        this.isLoading = true;
        const { data } = await feedsAPI.getFeeds();
        const { restaurants, comments } = data;

        this.restaurants = restaurants;
        this.comments = comments;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "資料匯入錯誤，請稍後再試",
        });
      }
    },
  },
  created() {
    this.fetchFeeds();
  },
};
</script>