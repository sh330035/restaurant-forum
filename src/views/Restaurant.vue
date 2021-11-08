// ./src/views/Restaurant.vue
<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :init-restaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurantComments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from "../components/RestaurantDetail.vue";
import RestaurantComments from "../components/RestaurantComments.vue";
import CreateComment from "../components/CreateComment.vue";

const dummyData = {
  restaurant: {
    id: 1,
    name: "Ms. Victor Hane",
    tel: "(918) 827-1962",
    address: "3820 Robel Rapid",
    opening_hours: "08:00",
    description:
      "Aut aliquam distinctio inventore architecto eius et labore. Doloribus non praesentium officiis fugit magni ex ipsum recusandae. Voluptatem aliquam accusantium. Voluptate eos dicta debitis. Vel et tenetur eveniet voluptate tenetur perspiciatis enim.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=41.13090251119787",
    viewCounts: 1,
    createdAt: "2021-11-03T15:01:36.000Z",
    updatedAt: "2021-11-08T02:06:40.197Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
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
  isFavorited: false,
  isLiked: false,
};
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  components: { RestaurantDetail, RestaurantComments, CreateComment },
  name: "restaurant",
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        tel: "",
        address: "",
        opening_hours: "",
        description: "",
        image: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
      currentUser: dummyUser.currentUser,
    };
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("id:", restaurantId);
      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      };

      this.restaurantComments = dummyData.restaurant.Comments;
    },
    afterDeleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      console.log(payload);
      const { restaurantId, commentId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        text,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        createdAt: new Date(),
      });
    },
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
};
</script>