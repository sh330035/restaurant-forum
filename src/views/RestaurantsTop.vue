// ./src/views/RestaurantsTop.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      v-for="restaurant in restaurantsTop"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px; margin: auto"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            <img class="card-img" :src="restaurant.image" />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary bg-black"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
              class="btn btn-primary mr-2"
              >Show</router-link
            >

            <button
              type="button"
              v-if="restaurant.isFavorited"
              @click.stop.prevent="removeFavorited(restaurant.id)"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button
              type="button"
              v-else
              @click.stop.prevent="addFavorite(restaurant.id)"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import restaurantsAPI from "../apis/restaurants";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  name: "restaurantsTop",
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurantsTop: [],
    };
  },
  methods: {
    async fetchRestaurantsTop() {
      try {
        const { data } = await restaurantsAPI.getTopRestaurants();
        this.restaurantsTop = data.restaurants;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍後再試",
        });
      }
    },
    async addFavorite(restaurantID) {
      try {
        const { data } = await usersAPI.addFavorite({ restaurantID });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurantsTop = this.restaurantsTop.map((restaurant) => {
          if (restaurant.id !== restaurantID) {
            return restaurant;
          } else {
            return {
              ...restaurant,
              isFavorited: true,
              FavoriteCount: restaurant.FavoriteCount + 1,
            };
          }
        });
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法加入最愛，請稍後再試",
        });
      }
    },
    async removeFavorited(restaurantID) {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantID });

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurantsTop = this.restaurantsTop.map((restaurant) => {
          if (restaurant.id !== restaurantID) {
            return restaurant;
          } else {
            return {
              ...restaurant,
              isFavorited: false,
              FavoriteCount: restaurant.FavoriteCount - 1,
            };
          }
        });
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法移除最愛，請稍後再試",
        });
      }
    },
  },
  created() {
    this.fetchRestaurantsTop();
  },
};
</script>

<style scoped>
.mr-2 {
  margin-right: 2px;
}
</style>