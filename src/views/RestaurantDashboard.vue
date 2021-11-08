<template>
  <div class="container py-5">
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
const dummyData = {
  restaurant: {
    id: 1,
    name: "Ms. Victor Hane",
    tel: "374.151.0927 x63501",
    address: "3820 Robel Rapid",
    opening_hours: "08:00",
    description:
      "Aut aliquam distinctio inventore architecto eius et labore. Doloribus non praesentium officiis fugit magni ex ipsum recusandae. Voluptatem aliquam accusantium. Voluptate eos dicta debitis. Vel et tenetur eveniet voluptate tenetur perspiciatis enim.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=41.13090251119787",
    viewCounts: 1,
    createdAt: "2021-11-03T15:01:36.000Z",
    updatedAt: "2021-11-08T02:06:40.000Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
    },
    Comments: [
      {
        id: 1,
        text: "Magnam corporis blanditiis qui.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2021-11-03T15:01:36.000Z",
        updatedAt: "2021-11-03T15:01:36.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$zMr3omqXDS8O64UOiGcwuu8IFs50zPRvzrXOkJMdm4lXEc8feWVT.",
          isAdmin: false,
          image: null,
          createdAt: "2021-11-03T15:01:36.000Z",
          updatedAt: "2021-11-03T15:01:36.000Z",
        },
      },
      {
        id: 101,
        text: "Sint fugit odio est blanditiis corrupti.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2021-11-03T15:01:36.000Z",
        updatedAt: "2021-11-03T15:01:36.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$zMr3omqXDS8O64UOiGcwuu8IFs50zPRvzrXOkJMdm4lXEc8feWVT.",
          isAdmin: false,
          image: null,
          createdAt: "2021-11-03T15:01:36.000Z",
          updatedAt: "2021-11-03T15:01:36.000Z",
        },
      },
      {
        id: 51,
        text: "Officiis doloribus quia.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2021-11-03T15:01:36.000Z",
        updatedAt: "2021-11-03T15:01:36.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$GIxolQfpf9TjjTIi.XojP..kn.hBu5GjRhlUuv6Hey7yqNKyZbLhG",
          isAdmin: false,
          image: null,
          createdAt: "2021-11-03T15:01:36.000Z",
          updatedAt: "2021-11-03T15:01:36.000Z",
        },
      },
    ],
  },
};
export default {
  data() {
    return {
      restaurant: {
        restaurantId: -1,
        name: "",
        categoryName: "",
        commentsLength: -1,
        viewCounts: -1,
      },
    };
  },
  methods: {
    fetchRestaurantDashboard() {
      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        commentsLength: dummyData.restaurant.Comments.length,
        viewCounts: dummyData.restaurant.viewCounts,
      };
    },
  },
  created() {
    this.fetchRestaurantDashboard();
  },
};
</script>