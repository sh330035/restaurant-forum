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
              @click.stop.prevent="addFavorited(restaurant.id)"
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

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Leslie Fahey",
      tel: "(974) 146-5799 x185",
      address: "08005 Lebsack Coves",
      opening_hours: "08:00",
      description: "Iure iure laboriosam similique. Praesentium ration",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=1.423116425996418",
      viewCounts: 0,
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Sheridan Corkery DDS",
      tel: "871.114.1895",
      address: "043 Leda Drives",
      opening_hours: "08:00",
      description: "nihil aut incidunt",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.046149529413627",
      viewCounts: 0,
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Nova Dietrich",
      tel: "340.374.3885 x334",
      address: "1711 Nicolas Street",
      opening_hours: "08:00",
      description: "Consequatur id tempore. Ratione doloribus et. Quib",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=45.75489329897591",
      viewCounts: 0,
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Brendon Kub",
      tel: "1-918-413-0741 x08325",
      address: "20580 Wunsch Station",
      opening_hours: "08:00",
      description: "totam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=83.53101544549446",
      viewCounts: 0,
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Leonel Wyman",
      tel: "(058) 789-7672 x530",
      address: "507 Ivy Parks",
      opening_hours: "08:00",
      description: "Esse qui autem possimus quod architecto. Dignissim",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=39.24115155291483",
      viewCounts: 0,
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Murray Harvey",
      tel: "187-472-5601 x57594",
      address: "4177 Robert Mall",
      opening_hours: "08:00",
      description: "Hic unde nisi cupiditate magni delectus incidunt. ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.82426344314041",
      viewCounts: 0,
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Beryl Kris",
      tel: "1-122-326-2289 x247",
      address: "643 Bergstrom Land",
      opening_hours: "08:00",
      description: "sed ut eaque",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.5042689749474",
      viewCounts: 0,
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Jettie Altenwerth",
      tel: "583-635-6683 x862",
      address: "83526 Bart Union",
      opening_hours: "08:00",
      description: "Dolor esse rerum est at consequuntur. Qui rerum ex",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.627338936483035",
      viewCounts: 0,
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Stefanie Keebler Jr.",
      tel: "(960) 509-8959 x4483",
      address: "4222 Haag Ridge",
      opening_hours: "08:00",
      description: "Animi sed est adipisci est porro quia vel occaecat",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=81.67757760378898",
      viewCounts: 0,
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Salvatore Feeney",
      tel: "464-490-5100",
      address: "855 Macejkovic Pine",
      opening_hours: "08:00",
      description: "autem id enim",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.67948932123249",
      viewCounts: 0,
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

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
    fetchRestaurantsTop() {
      this.restaurantsTop = dummyData.restaurants;
    },
    addFavorited(restaurantId) {
      for (let i = 0; i < this.restaurantsTop.length; i++) {
        if (this.restaurantsTop[i].id === restaurantId) {
          this.restaurantsTop[i].isFavorited = true;
          return;
        }
      }
    },
    removeFavorited(restaurantId) {
      for (let i = 0; i < this.restaurantsTop.length; i++) {
        if (this.restaurantsTop[i].id === restaurantId) {
          this.restaurantsTop[i].isFavorited = false;
          return;
        }
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