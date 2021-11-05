// ./src/views/Restaurants.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNaPills -->
    <RestaurantsNavPills :categories="categories" />
    <div class="row">
      <!-- 餐廳卡片 Restaurant Card -->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 Pagination -->
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import RestaurantsNavPills from "../components/RestaurantsNavPills.vue";

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Ms. Victor Hane",
      tel: "374.151.0927 x63501",
      address: "3820 Robel Rapid",
      opening_hours: "08:00",
      description: "Aut aliquam distinctio inventore architecto eius e",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=41.13090251119787",
      viewCounts: 0,
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-03T15:01:36.000Z",
        updatedAt: "2021-11-03T15:01:36.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Juliana McDermott",
      tel: "1-924-686-9178 x931",
      address: "359 Marks Throughway",
      opening_hours: "08:00",
      description: "culpa porro et",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.309807090823716",
      viewCounts: 0,
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-03T15:01:36.000Z",
        updatedAt: "2021-11-03T15:01:36.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Weston Walsh",
      tel: "067-797-0416 x066",
      address: "88349 Von Islands",
      opening_hours: "08:00",
      description: "illo",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=29.183465918710482",
      viewCounts: 0,
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-03T15:01:36.000Z",
        updatedAt: "2021-11-03T15:01:36.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Lucie Rowe",
      tel: "677-014-4963",
      address: "7700 Marquardt Islands",
      opening_hours: "08:00",
      description: "Quis vel nulla sed. Sed ad nobis quibusdam ea reic",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=83.14571419845818",
      viewCounts: 0,
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-03T15:01:36.000Z",
        updatedAt: "2021-11-03T15:01:36.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Claire Green",
      tel: "1-877-541-4235 x817",
      address: "351 Bernhard Branch",
      opening_hours: "08:00",
      description: "Minus sit voluptatem ea dolorem a voluptatem cupid",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=70.37382571838411",
      viewCounts: 0,
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-03T15:01:36.000Z",
        updatedAt: "2021-11-03T15:01:36.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Amie Herman",
      tel: "1-077-082-8890",
      address: "730 Schulist Corners",
      opening_hours: "08:00",
      description: "veniam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.99561100271268",
      viewCounts: 0,
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-03T15:01:36.000Z",
        updatedAt: "2021-11-03T15:01:36.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Efren Dietrich",
      tel: "551-633-9230",
      address: "721 Balistreri Station",
      opening_hours: "08:00",
      description: "Ipsum explicabo quas ducimus dolorum sit impedit a",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=82.83936040920796",
      viewCounts: 0,
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-03T15:01:36.000Z",
        updatedAt: "2021-11-03T15:01:36.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Kaden Herzog",
      tel: "(694) 129-2150 x96275",
      address: "370 Kub Green",
      opening_hours: "08:00",
      description: "Quis deserunt tempora repellendus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=87.6135623863038",
      viewCounts: 0,
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-03T15:01:36.000Z",
        updatedAt: "2021-11-03T15:01:36.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Derrick Koss",
      tel: "840-519-8657 x94847",
      address: "6367 Noah Spur",
      opening_hours: "08:00",
      description: "quos",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.292652942039567",
      viewCounts: 0,
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-03T15:01:36.000Z",
        updatedAt: "2021-11-03T15:01:36.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Mrs. Christ Schaefer",
      tel: "704.749.2163 x94510",
      address: "6778 Will Overpass",
      opening_hours: "08:00",
      description: "molestiae aut aut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=43.625304449012404",
      viewCounts: 0,
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-11-03T15:01:36.000Z",
        updatedAt: "2021-11-03T15:01:36.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};

export default {
  name: "restaurants",
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData;
      this.restaurants = restaurants;
      this.categories = categories;
      this.categoryId = categoryId;
      this.currentPage = page;
      this.totalPage = totalPage;
      this.previousPage = prev;
      this.nextPage = next;
    },
  },
  created() {
    this.fetchRestaurants();
  },
};
</script>