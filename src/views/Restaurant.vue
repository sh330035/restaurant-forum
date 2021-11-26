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
import restaurantsAPI from "../apis/restaurants";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

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
    };
  },
  beforeRouteUpdate(to) {
    const { id } = to.params;
    this.fetchRestaurant(id);
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId });
        this.restaurant = {
          id: data.restaurant.id,
          name: data.restaurant.name,
          categoryName: data.restaurant.Category.name,
          image: data.restaurant.image,
          openingHours: data.restaurant.opening_hours,
          tel: data.restaurant.tel,
          address: data.restaurant.address,
          description: data.restaurant.description,
          isFavorited: data.isFavorited,
          isLiked: data.isLiked,
        };

        this.restaurantComments = data.restaurant.Comments;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法匯入餐廳資料，請稍後再試",
        });
      }
    },
    async afterDeleteComment(commentId) {
      try {
        const { data } = await restaurantsAPI.comments.deleteComment({
          commentId,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurantComments = this.restaurantComments.filter(
          (comment) => comment.id !== commentId
        );
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法刪除評論資料，請稍後再試",
        });
      }
    },
    async afterCreateComment(payload) {
      if (!payload.text) {
        Toast.fire({
          icon: "warning",
          title: "請輸入評論內容",
        });
        return;
      }
      try {
        const comment = {
          UserId: this.currentUser.id,
          text: payload.text,
          restaurantId: payload.restaurantId,
          User: {
            id: this.currentUser.id,
            name: this.currentUser.name,
          },
          createdAt: new Date(),
        };

        const { data } = await restaurantsAPI.comments.createComment({
          comment,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.fetchRestaurant(this.restaurant.id);
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法新增評論資料，請稍後再試",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
};
</script>