// ./src/views/RestaurantDetail.vue
<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3 bg-black">
        {{ restaurant.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="restaurant.image"
        style="width: 250px; margin-bottom: 25px"
      />
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        class="btn btn-primary btn-border mr-2"
        :to="{ name: 'restaurant-dashboard', params: { id: restaurant.id } }"
        >Dashboard</router-link
      >

      <button
        type="button"
        v-if="restaurant.isFavorited"
        @click.stop.prevent="deleteFavorite(restaurant.id)"
        class="btn btn-danger btn-border mr-2"
      >
        移除最愛
      </button>
      <button
        type="button"
        v-else
        @click.stop.prevent="addFavorite(restaurant.id)"
        class="btn btn-primary btn-border mr-2"
      >
        加到最愛
      </button>
      <button
        type="button"
        v-if="restaurant.isLiked"
        @click.stop.prevent="deleteLike(restaurant.id)"
        class="btn btn-danger like mr-2"
      >
        Unlike
      </button>
      <button
        type="button"
        v-else
        @click.stop.prevent="addLike(restaurant.id)"
        class="btn btn-primary like mr-2"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  props: {
    initRestaurant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      restaurant: this.initRestaurant,
    };
  },
  // 監看資料變化，重新更新畫面
  watch: {
    initRestaurant(newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue,
      };
    },
  },
  methods: {
    async addFavorite(restaurantID) {
      try {
        // 直接將 response 的 data 取出
        const { data } = await usersAPI.addFavorite({ restaurantID });
        // 若請求過程有錯，則進到錯誤處理
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          isFavorited: true,
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法將餐廳加入最愛，請稍後再試",
        });
      }
    },
    async deleteFavorite(restaurantID) {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantID });
        // 若請求過程有錯，則進到錯誤處理
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false,
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法將餐廳移除最愛，請稍後再試",
        });
      }
    },
    async addLike(restaurantID) {
      try {
        const { data } = await usersAPI.addLike({ restaurantID });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: true,
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法將餐廳加入喜愛清單，請稍後再試",
        });
      }
    },
    async deleteLike(restaurantID) {
      try {
        const { data } = await usersAPI.deleteLike({ restaurantID });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: false,
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法將餐廳移除喜愛清單，請稍後再試",
        });
      }
    },
  },
};
</script>

<style scoped>
.mr-2 {
  margin-right: 5px;
}
</style>