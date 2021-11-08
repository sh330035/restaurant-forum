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
        @click.stop.prevent="deleteFavorited"
        class="btn btn-danger btn-border mr-2"
      >
        移除最愛
      </button>
      <button
        type="button"
        v-else
        @click.stop.prevent="addFavorited"
        class="btn btn-primary btn-border mr-2"
      >
        加到最愛
      </button>
      <button
        type="button"
        v-if="restaurant.isLiked"
        @click.stop.prevent="switchLiked"
        class="btn btn-danger like mr-2"
      >
        Unlike
      </button>
      <button
        type="button"
        v-else
        @click.stop.prevent="switchLiked"
        class="btn btn-primary like mr-2"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
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
  methods: {
    addFavorited() {
      this.restaurant.isFavorited = true;
    },
    deleteFavorited() {
      this.restaurant.isFavorited = false;
    },
    switchLiked() {
      if (this.restaurant.isLiked) {
        this.restaurant.isLiked = false;
      } else {
        this.restaurant.isLiked = true;
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