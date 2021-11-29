<template>
  <Spinner v-if="isLoading" />
  <div class="container py-5" v-else>
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3 bg-black">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import restaurantsAPI from "../apis/restaurants";
import { Toast } from "../utils/helpers";

export default {
  components: {
    Spinner,
  },
  data() {
    return {
      restaurant: {
        restaurantId: -1,
        name: "",
        categoryName: "",
        commentsLength: -1,
        viewCounts: -1,
      },
      isLoading: true,
    };
  },
  methods: {
    async fetchRestaurantDashboard(restaurantId) {
      try {
        this.isLoading = true;
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId });

        this.restaurant = {
          id: data.restaurant.id,
          name: data.restaurant.name,
          categoryName: data.restaurant.Category.name,
          commentsLength: data.restaurant.Comments.length,
          viewCounts: data.restaurant.viewCounts,
        };
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法匯入餐廳資料，請稍後再試",
        });
      }
    },
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurantDashboard(restaurantId);
  },
};
</script>